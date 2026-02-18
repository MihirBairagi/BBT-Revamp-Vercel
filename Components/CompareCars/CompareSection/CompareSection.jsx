"use client";
import React, { useState, useEffect } from "react";
import { useCompareCars } from "../../../app/lib/hooks/useCompareCars";
import { useCompareContext } from "../../../app/lib/contexts/CompareContext";
import { formatProductPrice, formatDiscountedPrice } from "../../../app/lib/utils/productUtils";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";
import { transformCarFeaturesToSpecifications } from "../../../app/lib/utils/specifications";
import { productsAPI } from "../../../app/lib/services/api";

const CompareSection = () => {
  const [open, setOpen] = useState(0);
  const [openBrandDropdown, setOpenBrandDropdown] = useState(false);
  const [openCarDropdown, setOpenCarDropdown] = useState(false);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // Use global compare context for car management
  const {
    compareList,
    removeFromCompare,
    clearComparison,
    addToCompare,
    showToast,
  } = useCompareContext();

  // Use local hook for additional functionality (brands, specifications, etc.)
  const {
    brands,
    hideCommonFeatures,
    loading,
    error,
    handleToggleCommonFeatures,
    clearError,
  } = useCompareCars();

  // Local state for cars and dropdown selections
  const [cars, setCars] = useState([]);

  // Local state for dropdown selections
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedBrandLabel, setSelectedBrandLabel] = useState("");
  const [selectedCarLabel, setSelectedCarLabel] = useState("");
  const [selectedCar, setSelectedCar] = useState("");

  // Handle brand selection
  const handleBrandSelect = (brandId) => {
    setSelectedBrand(brandId);
    setSelectedCar("");
    setSelectedCarLabel("");
    clearError();
    setOpenBrandDropdown(false);
  };

  // CLose All Dropdown
  const handleCloseAllDropdown = () => {
    setOpenBrandDropdown(false);
    setOpenCarDropdown(false);
  };
  const handleOpenCarDropdown = () => {
    if (!selectedBrand) {
      return;
    }
    setOpenBrandDropdown(false);
    setOpenCarDropdown(!openCarDropdown);
  };

  // Load cars when brand is selected
  useEffect(() => {
    const loadCars = async () => {
      if (selectedBrand) {
        try {
          const response = await productsAPI.getCarsByBrand(selectedBrand);
          if (response.success) {
            console.log("Response cars:", response.cars);
            // Filter to only show cars that are in stock
            const inStockCars = response.cars.filter((car) => {
              // Car is in stock if stock === '1' and not sold out
              return car.inStock === true;
            });
            setCars(inStockCars);

            // Show message if no cars are in stock for this brand
            if (inStockCars.length === 0 && response.cars.length > 0) {
              showToast("No cars in stock available for this brand", "warning");
            }
          } else {
            showToast("Failed to load cars for this brand", "error");
            setCars([]);
          }
        } catch (error) {
          console.error("Error loading cars:", error);
          showToast("Error loading cars. Please try again.", "error");
          setCars([]);
        }
      } else {
        setCars([]);
      }
    };

    loadCars();
  }, [selectedBrand, showToast]);

  // Local state for specifications since we need to load them based on global compareList
  const [specifications, setSpecifications] = useState([]);
  const [specificationsLoading, setSpecificationsLoading] = useState(false);

  // Load specifications when compareList changes
  useEffect(() => {
    const loadSpecifications = async () => {
      if (compareList.length > 1) {
        try {
          setSpecificationsLoading(true);
          const carIds = compareList.map((car) => car.id);
          const response = await productsAPI.getCarSpecifications(carIds);
          if (response.success) {
            setSpecifications(response.specifications);
          } else {
            setSpecifications([]);
            showToast("Failed to load car specifications", "error");
          }
        } catch (error) {
          console.error("Error loading specifications:", error);
          setSpecifications([]);
          showToast("Error loading specifications. Please try again.", "error");
        } finally {
          setSpecificationsLoading(false);
        }
      } else {
        setSpecifications([]);
      }
    };

    loadSpecifications();
  }, [compareList, showToast]);

  // Computed values based on global state
  const canCompare = compareList.length > 1;
  const hasSpecifications = specifications.length > 0;
  const maxCarsReached = compareList.length >= 4;

  // Use compareList from global context instead of allSelectedCars from local hook
  const allSelectedCars = compareList;

  // Create custom car selection handler that uses global context
  const handleCarSelectWithGlobalContext = (carId) => {
    if (!selectedBrand) {
      showToast("Please select a brand first!", "error");
      return;
    }

    const getSelectedCar = cars.find((car) => car.id === carId);

    if (!getSelectedCar) {
      showToast("Please select a valid car!", "error");
      return;
    }

    // Use global context to add car
    const result = addToCompare({
      id: getSelectedCar.id,
      name: getSelectedCar.title,
      title: getSelectedCar.title,
      price: getSelectedCar.price,
      thumbnail: getSelectedCar.thumbnail,
      postUrl: getSelectedCar.url,
      brand: {
        id: getSelectedCar.brandId,
        name: getSelectedCar.brandName,
      },
      category: getSelectedCar.category,
      stock: "1", // Assume in stock for comparison page selections
      isBooked: false,
    });

    if (result.success) {
      // Reset dropdowns after successful selection
      setSelectedBrand("");
      setSelectedBrandLabel("");
      setSelectedCar("");
      setSelectedCarLabel("");
      clearError();
    }
  };

  const [processedSpecifications, setProcessedSpecifications] = useState([]);

  // Process specifications when they change
  useEffect(() => {
    if (specifications && specifications.length > 0) {
      console.log("Raw specifications from API:", specifications);

      // Transform each car's carFeatures using the same function as single car page
      const transformed = specifications.map((car) => {
        console.log(`Raw carFeatures for ${car.name}:`, car.carFeatures);

        // Ensure carFeatures is an object
        const carFeatures = car.carFeatures || {};
        console.log(`Processing carFeatures for ${car.name}:`, carFeatures);

        const transformedSpecs =
          transformCarFeaturesToSpecifications(carFeatures);
        console.log(
          `Transformed specifications for ${car.name}:`,
          transformedSpecs
        );
        console.log(
          `Number of categories for ${car.name}:`,
          transformedSpecs?.length || 0
        );

        // Log each category details
        if (transformedSpecs && Array.isArray(transformedSpecs)) {
          transformedSpecs.forEach((category, index) => {
            console.log(`Category ${index + 1} for ${car.name}:`, {
              title: category.title,
              detailCount: category.detailList?.length || 0,
              icon: category.icon,
            });
          });
        }

        return {
          ...car,
          transformedSpecifications: transformedSpecs,
        };
      });

      console.log("All processed specifications:", transformed);
      setProcessedSpecifications(transformed);
    } else {
      setProcessedSpecifications([]);
    }
  }, [specifications]);

  // Get specification categories from processed specifications
  const getSpecificationCategories = () => {
    if (!processedSpecifications || processedSpecifications.length === 0) {
      console.log("No processed specifications available");
      return [];
    }

    const categoryMap = new Map();

    // Collect all unique categories from all cars
    processedSpecifications.forEach((car, carIndex) => {
      console.log(`Processing categories for car ${carIndex + 1}: ${car.name}`);

      if (
        car.transformedSpecifications &&
        Array.isArray(car.transformedSpecifications)
      ) {
        console.log(
          `Found ${car.transformedSpecifications.length} categories for ${car.name}`
        );

        car.transformedSpecifications.forEach((category, categoryIndex) => {
          console.log(`Category ${categoryIndex + 1} for ${car.name}:`, {
            title: category.title,
            hasDetailList: !!category.detailList,
            detailListLength: category.detailList?.length || 0,
            icon: category.icon,
          });

          if (category.detailList && category.detailList.length > 0) {
            categoryMap.set(category.title, {
              title: category.title,
              icon: category.icon,
              key: category.title
                .toLowerCase()
                .replace(/\s+/g, "")
                .replace(/&/g, ""),
            });
            console.log(`Added category: ${category.title}`);
          } else {
            console.log(`Skipped category ${category.title} - no details`);
          }
        });
      } else {
        console.log(`No valid transformedSpecifications for ${car.name}`);
      }
    });

    const finalCategories = Array.from(categoryMap.values());
    console.log(
      "Final categories:",
      finalCategories.map((cat) => cat.title)
    );

    return finalCategories;
  };

  const specificationCategories = getSpecificationCategories();

  // Function to get comparison rows for a specific category
  const getComparisonRows = (categoryTitle) => {
    if (!processedSpecifications || processedSpecifications.length === 0)
      return [];

    // Find specifications for this category from all cars
    const categorySpecMap = new Map();

    processedSpecifications.forEach((car) => {
      if (
        car.transformedSpecifications &&
        Array.isArray(car.transformedSpecifications)
      ) {
        const category = car.transformedSpecifications.find(
          (spec) => spec.title === categoryTitle
        );
        if (category && category.detailList) {
          category.detailList.forEach((detail) => {
            if (!categorySpecMap.has(detail.title)) {
              categorySpecMap.set(detail.title, []);
            }
            // Store the value for this car at the correct index
            const carIndex = processedSpecifications.findIndex(
              (c) => c.id === car.id
            );
            categorySpecMap.get(detail.title)[carIndex] =
              detail.description || "N/A";
          });
        }
      }
    });

    // Convert to comparison rows format
    const comparisonRows = [];
    categorySpecMap.forEach((values, title) => {
      // Fill in missing values with 'N/A'
      const filledValues = Array(processedSpecifications.length).fill("N/A");
      values.forEach((value, index) => {
        if (value !== undefined) {
          filledValues[index] = value;
        }
      });

      // Filter out if hideCommonFeatures is enabled and all values are the same
      if (hideCommonFeatures) {
        const uniqueValues = [...new Set(filledValues)];
        if (uniqueValues.length === 1 && uniqueValues[0] !== "N/A") {
          return; // Skip this row as all values are the same
        }
      }

      comparisonRows.push({
        title,
        values: filledValues,
      });
    });

    return comparisonRows;
  };

  console.log("Cars --", cars);

  if (loading) {
    return (
      <section className="bg-white py-[6rem] xl:pb-[13rem] 3xl:pt-[8rem] 3xl:pb-[18rem]">
        <div className="max-1920">
          <div className="container">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black mx-auto"></div>
              <p className="mt-4 text-lg">Loading comparison data...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-[6rem] xl:pb-[13rem] 3xl:pt-[8rem] 3xl:pb-[18rem]">
      <div className="max-1920">
        {(openBrandDropdown || openCarDropdown) && (
          <div
            className="fixed z-[10] overlay w-full h-full min-w-[100vw] min-h-[100vh] top-0 left-0 bg-transparent"
            onClick={handleCloseAllDropdown}
          ></div>
        )}
        <div className="container">
          <h2 className="font-light text-center [&>b]:font-medium text-[2.5rem] tracking-[-2px] lg:text-left xl:text-[3rem] ] 1xl:text-[3.7rem] 3xl:text-[4.5rem] mb-[4rem] xl:mb-[7rem] 2xl:mb-[9rem] 3xl:mb-[11rem]">
            Please select at least <b>2 cars for comparison</b>
          </h2>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex justify-between items-center">
              <span>{error}</span>
              <button
                onClick={clearError}
                className="text-red-700 hover:text-red-900"
              >
                ×
              </button>
            </div>
          )}

          {/* Reset Button */}
          {allSelectedCars.length > 0 && (
            <div className="text-center mb-[30px] flex justify-center lg:justify-end">
              <button
                onClick={() => {
                  clearComparison();
                  setSelectedBrandLabel("");
                  setSelectedCarLabel("");
                }}
                className="bg-[#F3F4F6] hover:bg-[#caced4] text-[#3F4651] px-[3rem] py-[1.2rem] rounded-[4rem] flex justify-center items-center w-max transition-colors duration-200 text-[14px] xl:text-[16px] 3xl:text-[18px] cursor-pointer"
              >
                <img
                  src="/images/compare-reset-icon.png"
                  alt="Reset Icon"
                  className="object-contain w-[2rem] xl:w-[2.5rem] 3xl:w-[2.7rem] inline-block mr-[10px]"
                />
                Reset Comparison
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[2rem] xl:gap-x-[1.6rem] md:grid-cols-3 lg:grid-cols-4 1xl:gap-x-[1.8rem] 2xl:gap-x-[2rem] 3xl:gap-x-[2.4rem]">
            {allSelectedCars && allSelectedCars.length > 0 && (
              <>
                {allSelectedCars.map((car, index) => (
                  <div key={index} className="mb-[3rem]">
                    <div className="flex justify-between items-center px-[1rem] mb-[1rem] xl:mb-[0.5rem] xl:px-0">
                      <p className={styles.itemLabel}>
                        Add{" "}
                        <b>
                          {index === 0 && "First "}
                          {index === 1 && "Second "}
                          {index === 2 && "Third "}
                          {index === 3 && "Fourth "}
                          Car
                        </b>
                      </p>
                      <span
                        className=" inline-block cursor-pointer w-[1.7rem] xl:w-[1.5rem] 2xl:w-[1.7rem] 3xl:w-[2rem] xl:mr-[5px] hover:opacity-70 transition-opacity"
                        onClick={() => removeFromCompare(car.id)}
                        title={`Remove ${car.title}`}
                      >
                        <img
                          src="/images/compare-cars/cross-icon.webp"
                          alt="Remove car"
                          className="w-full h-auto object-contain"
                        />
                      </span>
                    </div>
                    <div className="rounded-[1.5rem] overflow-hidden mb-[1rem] xl:mb-[0.5rem]">
                      <img
                        src={car.thumbnail}
                        alt={car.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-[1rem] xl:px-0">
                      <p className="font-medium text-[1.5rem] xl:text-[1.7rem] 1xl:text-[1.9rem] xl:tracking-tighter 2xl:text-[2.1rem] 3xl:text-[2.5rem]">
                        {car.title}
                      </p>
                      <p className="font-medium text-[1.3rem] xl:text-[1.5rem] 1xl:text-[1.7rem] xl:tracking-tighter 2xl:text-[1.9rem] 3xl:text-[2.2rem] 3xl:mt-[0.5rem]">
                        {formatProductPrice(car)}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
            {!maxCarsReached && (
              <div>
                <p className={`${styles.itemLabel} mb-[1rem]`}>
                  Add{" "}
                  <b>
                    {allSelectedCars.length === 0 && "First "}
                    {allSelectedCars.length === 1 && "Second "}
                    {allSelectedCars.length === 2 && "Third "}
                    {allSelectedCars.length === 3 && "Fourth "}
                    Car
                  </b>
                </p>

                {/* Select brand Box */}
                <div className={`${styles.inputWrapper} z-[21]`}>
                  <span className={styles.selectArrow}>
                    <img
                      src="images/dropdown-arrow-black.webp"
                      alt="Arrow"
                      className="w-full object-contain h-auto"
                    />
                  </span>
                  <div
                    className={`${styles.selectInput} text-black flex items-center cursor-pointer`}
                    onClick={() => {
                      setOpenBrandDropdown(!openBrandDropdown);
                      setOpenCarDropdown(false);
                    }}
                  >
                    <span>
                      {selectedBrandLabel && selectedBrand
                        ? selectedBrandLabel
                        : "Select brand"}
                    </span>
                  </div>

                  {openBrandDropdown && (
                    <div
                      className={`bg-white absolute top-auto left-0 right-0 z-[50] overflow-y-auto max-h-[71vh] w-full min-w-[300px] px-[20px] py-[20px] rounded-[15px] mt-[10px] border border-[#f1f1f1;]`}
                      style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.08)" }}
                    >
                      <ul>
                        {brands.map((brand) => (
                          <li
                            key={brand.id}
                            className="flex items-center py-[15px] text-[14px] xl:text-[16px] 3xl:text-[18px] border-b border-b-[#f1f1f1] font-medium cursor-pointer"
                            onClick={() => {
                              setSelectedBrandLabel(brand.name);
                              handleBrandSelect(brand.id);
                            }}
                          >
                            <span className="w-[50px] mr-[20px] inline-block">
                              {brand?.icon && (
                                <img
                                  src={`https://cdn.bigboytoyz.com/new-version/brands/${brand.icon}`}
                                  alt={brand.name}
                                  className="object-contain max-h-[50px] inline-block "
                                />
                              )}
                            </span>
                            {brand.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Select Car Box */}
                <div
                  className={`${styles.inputWrapper} z-[20] ${
                    !selectedBrand && "opacity-[0.5] pointer-events-none"
                  }`}
                >
                  <span className={styles.selectArrow}>
                    <img
                      src="images/dropdown-arrow-black.webp"
                      alt="Arrow"
                      className="w-full object-contain h-auto"
                    />
                  </span>
                  <div
                    className={`${styles.selectInput} text-black flex items-center cursor-pointer`}
                    onClick={handleOpenCarDropdown}
                  >
                    <span>
                      {selectedCarLabel && selectedCar
                        ? selectedCarLabel
                        : "Select Car"}
                    </span>
                  </div>

                  {openCarDropdown && (
                    <div
                      className={`bg-white absolute top-auto left-0 z-[50] overflow-y-auto max-h-[71vh] w-full min-w-[300px] md:min-w-[600px] lg:min-w-[900px] xl:min-w-[1050px] 1xl:min-w-[1250px] 3xl:min-w-[1500px] px-[20px] py-[20px] rounded-[15px] mt-[10px] border border-[#f1f1f1;] ${allSelectedCars.length === 1 && 'md:left-[-30vw]'} ${allSelectedCars.length === 2 && 'md:left-[unset] md:right-0'} ${allSelectedCars.length === 1 && 'lg:left-[-22vw]'} ${allSelectedCars.length === 2 && 'lg:left-[-43vw]'} ${allSelectedCars.length === 3 && 'lg:left-[unset] lg:right-0'} ${allSelectedCars.length === 1 && 'lg:left-[-400px]'} ${allSelectedCars.length === 2 && '3xl:left-[-800px]'}`}
                      style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.08)" }}
                    >
                      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 1xl:grid-cols-6 3xl:grid-cols-7">
                        {cars.length > 0 ? (
                          <>
                            {cars.map((car) => (
                              <li
                                key={car.id}
                                className="flex flex-col items-center text-center py-[20px] text-[14px] xl:text-[16px] 3xl:text-[18px] border-b border-b-[#f1f1f1] font-medium cursor-pointer"
                                onClick={() => {
                                  handleCarSelectWithGlobalContext(car.id);
                                  setSelectedCarLabel(car.title);
                                  setOpenCarDropdown(false);
                                }}
                              >
                                <span className="w-full mb-[20px] inline-block">
                                  {car?.thumbnail && (
                                    <img
                                      src={car.thumbnail}
                                      alt={car.title}
                                      className="object-contain w-full h-auto inline-block "
                                    />
                                  )}
                                </span>
                                {car.title}
                              </li>
                            ))}
                          </>
                        ) : (
                          <li>{`No ${selectedBrandLabel} cars in stock available`}</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {canCompare && processedSpecifications.length > 0 && (
            <div className="mt-[4rem] pt-[4rem] border-t border-t-[#C5C5C5] xl:mt-[6rem] xl:pt-[6rem] 1xl:pt-[7rem] 3xl:pt-[10rem] 3xl:mt-[9rem]">
              <div className="flex justify-between items-center mb-[3rem] 1xl:mb-[4rem] 3xl:mb-[6rem]">
                <h4 className="text-[2rem] lg:text-[2.5rem] xl:text-[2.2rem] 1xl:text-[2.6rem] xl:tracking-tighter 2xl:text-[2.9rem] 3xl:text-[3.5rem] 2xl:tracking-[-3px]">
                  Result
                </h4>
                <div className="flex items-center">
                  <label
                    htmlFor="hideCommon"
                    className="flex items-center cursor-pointer"
                  >
                    <div className="mr-[8px] lg:mr-[10px] text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem] 1xl:text-[1.8rem] 2xl:text-[2rem] 3xl:text-[2.4rem] font-medium xl:tracking-tight 2xl:mr-[12px]">
                      Hide Common Features
                    </div>
                    <div className="relative">
                      <input
                        id="hideCommon"
                        type="checkbox"
                        className="sr-only"
                        checked={hideCommonFeatures}
                        onChange={handleToggleCommonFeatures}
                      />

                      <div
                        className={`w-[20px] h-[6px] rounded-full shadow-inner xl:w-[23px] xl:h-[7px] 1xl:w-[27px] 2xl:w-[30px] 2xl:h-[8px] 3xl:w-[35px] 3xl:h-[9px] transition-colors duration-200 ${
                          hideCommonFeatures ? "bg-black" : "bg-[#C7C7C7]"
                        }`}
                      ></div>

                      <div
                        className={`dot absolute w-[12px] h-[12px] rounded-full shadow -left-1 -top-[3.5px] transition-all duration-200 xl:w-[15px] xl:h-[15px] xl:-top-[4px] 2xl:w-[17px] 2xl:h-[17px] 3xl:w-[21px] 3xl:h-[21px] 3xl:-top-[6px] ${
                          hideCommonFeatures
                            ? "translate-x-full bg-white"
                            : "bg-black"
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="accordion-box">
                {specificationCategories.map((category, index) => {
                  const comparisonRows = getComparisonRows(category.title);

                  if (comparisonRows.length === 0) return null;

                  return (
                    <Accordion
                      key={index}
                      open={open === index + 1}
                      className="border-b border-b-[#D9D9D9] first-of-type:border-t first-of-type:border-t-[#D9D9D9]"
                    >
                      <AccordionHeader
                        onClick={() => handleOpen(index + 1)}
                        className="w-full py-[1.2rem] border-none xl:py-7 1xl:py-8 2xl:py-9 3xl:py-11"
                      >
                        <div
                          className={`${
                            open === index + 1
                              ? "flex items-center justify-between w-full  active"
                              : "flex items-center justify-between w-full "
                          }`}
                        >
                          <p className="font-normal text-[1.4rem] xl:text-[1.85rem] xl:tracking-tight 1xl:text-[2rem] 2xl:text-[2.2rem] 3xl:text-[2.8rem] 2xl:tracking-tighter">
                            {category.title}
                          </p>
                          <div className="w-max">
                            <img
                              src="/images/dropdown-icon.webp"
                              alt="Arrow Icon"
                              width="17"
                              height="9"
                              className="w-[1rem] object-contain transition-all duration-500 ease-in-out accordion-arrow lg:w-[1.2rem] xl:w-[1.4rem] 3xl:w-[1.7rem]"
                            />
                          </div>
                        </div>
                      </AccordionHeader>
                      <AccordionBody>
                        <div className="pb-5">
                          {/* Car Names Header */}
                          <div className="flex py-3 mb-4">
                            <div className="w-[35%] md:w-[30%] lg:w-[25%] 1xl:w-[18%] font-semibold ">
                              <div className="h-[50px] xl:h-[60px] 1xl:h-[70px] flex flex-col justify-center text-xl xl:text-[1.4rem] 3xl:text-[1.7rem]">Specification</div>
                              {comparisonRows.map((row, rowIndex) => (
                                <div
                                  key={rowIndex}
                                  className=" py-3 border-t border-gray-100 font-medium text-[1.25rem] xl:text-[1.35rem] 3xl:text-[1.5rem] h-[50px] xl:h-[60px] 1xl:h-[70px] flex flex-col justify-center"
                                >
                                  {row.title}
                                </div>
                              ))}
                            </div>
                            <div className="w-[65%] md:w-[70%] lg:w-[75%] 1xl:w-[82%] overflow-x-auto no-scrollbar">
                              <div className="flex justify-evenly">
                                {processedSpecifications.map(
                                  (spec, specIndex) => (
                                    <div
                                      key={specIndex}
                                      className="text-center font-semibold text-xl xl:text-[1.4rem] 3xl:text-[1.7rem] min-w-[250px] h-[50px] xl:h-[60px] 1xl:h-[70px]  flex flex-col justify-center flex-1 px-[10px]"
                                    >
                                      {spec.name}
                                    </div>
                                  )
                                )}
                              </div>
                              <div>
                                {comparisonRows.map((row, rowIndex) => (
                                  <div
                                    key={rowIndex}
                                    className="flex justify-evenly "
                                  >
                                    {row.values.map((value, valueIndex) => (
                                      <div
                                        key={valueIndex}
                                        className="h-[50px] xl:h-[60px] 1xl:h-[70px]  flex-1 flex flex-col justify-center text-center border-t border-gray-100 text-gray-600 text-[1.25rem] xl:text-[1.35rem] 3xl:text-[1.5rem] min-w-[250px] px-[10px]"
                                      >
                                        {value}
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionBody>
                    </Accordion>
                  );
                })}
              </div>
            </div>
          )}

          {canCompare &&
            allSelectedCars.length > 1 &&
            (specificationsLoading || !processedSpecifications.length) && (
              <div className="text-center mt-[4rem] py-8">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
                <p className="text-lg">
                  Loading car specifications for comparison...
                </p>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default CompareSection;

const styles = {
  inputWrapper:
    "relative bg-white border border-[#CCCCCC] rounded-[0.7rem] h-[4.5rem] px-[0.5rem] mb-[1.5rem] 3xl:mb-[2.5rem] emi-select-box 1xl:h-[4.8rem] 2xl:h-[5.3rem] 3xl:h-[6.5rem] 1xl:rounded-[1rem]",
  selectInput:
    "w-full bg-transparent outline-none border-none h-full appearance-none px-[1rem] text-[1.4rem] relative z-10 1xl:text-[1.4rem] 2xl:text-[1.55rem] 3xl:text-[1.8rem] disabled:opacity-50 disabled:cursor-not-allowed",
  selectArrow:
    "w-[1.5rem] 3xl:w-[1.9rem] h-full absolute top-0 right-[2rem] z-[1] inline-flex items-center justify-center",
  itemLabel:
    "font-light [&>b]:font-medium text-[1.4rem] xl:text-[1.6rem] 1xl:text-[1.8rem] xl:tracking-tight 2xl:text-[2rem] 3xl:text-[2.4rem]",
};
