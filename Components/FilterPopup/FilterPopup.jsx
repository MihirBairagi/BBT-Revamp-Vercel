"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import styles from "./FilterPopup.module.css";
import Image from "next/image";
import { useCollectionContextOptional } from "../../app/lib/contexts/CollectionContext";
import { useBrands } from "../../app/lib/hooks/useProducts";
import { footerService } from "../../app/lib/services/footer";
import { useRouter } from "next/navigation";
import {
  getStateOptionList,
  normalizeStateFilterValue,
} from "../../app/lib/constants/registrationStates";

// Placeholder category icons - used as fallback when no category image is available
const categoryIcons = {
  suv: "/images/detail-page/category-icon-suv.webp",
  sedan: "/images/detail-page/category-icon-sedan.webp",
  convertible: "/images/detail-page/category-icon-convertable.webp",
  coupe: "/images/detail-page/category-icon-coupe.webp",
  sports: "/images/detail-page/category-icon-sports.webp",
  hatchback: "/images/detail-page/category-icon-hatchback.webp",
  luxury: "/images/detail-page/category-icon-luxury.webp",
  wagon: "/images/detail-page/category-icon-wagon.webp",
};

// Fallback brands and categories if API fails
const fallbackBrands = [
  {
    _id: "001",
    title: "BMW",
    logo: "/images/detail-page/brand-icon-bmw.webp",
    url: "#",
  },
  {
    _id: "002",
    title: "AUDI",
    logo: "/images/detail-page/brand-icon-audi.webp",
    url: "#",
  },
  {
    _id: "003",
    title: "MERCEDES",
    logo: "/images/detail-page/brand-icon-mercedes.webp",
    url: "#",
  },
  {
    _id: "004",
    title: "JAGUAR",
    logo: "/images/detail-page/brand-icon-jaguar.webp",
    url: "#",
  },
  {
    _id: "005",
    title: "LAND ROVER",
    logo: "/images/detail-page/brand-icon-land-rover.webp",
    url: "#",
  },
  {
    _id: "006",
    title: "BENTLEY",
    logo: "/images/detail-page/brand-icon-bentley.webp",
    url: "#",
  },
  {
    _id: "007",
    title: "PORSCHE",
    logo: "/images/detail-page/brand-icon-porsche.webp",
    url: "#",
  },
  {
    _id: "008",
    title: "LAMBORGHINI",
    logo: "/images/detail-page/brand-icon-lambo.webp",
    url: "#",
  },
  {
    _id: "009",
    title: "JEEP",
    logo: "/images/detail-page/brand-icon-jeep.webp",
    url: "#",
  },
  {
    _id: "0010",
    title: "FERRARI",
    logo: "/images/detail-page/brand-icon-ferrari.webp",
    url: "#",
  },
  {
    _id: "0011",
    title: "ROLLS ROYCE",
    logo: "/images/detail-page/brand-icon-rolls-royace.webp",
    url: "#",
  },
  {
    _id: "0012",
    title: "Honda",
    logo: "/images/detail-page/brand-icon-honda.webp",
    url: "#",
  },
  {
    _id: "0013",
    title: "SKODA",
    logo: "/images/detail-page/brand-icon-skoda.webp",
    url: "#",
  },
  {
    _id: "0014",
    title: "TOYOTA",
    logo: "/images/detail-page/brand-icon-toyota.webp",
    url: "#",
  },
  {
    _id: "0015",
    title: "VOLVO",
    logo: "/images/detail-page/brand-icon-volvo.webp",
    url: "#",
  },
  {
    _id: "0016",
    title: "HYUNDAI",
    logo: "/images/detail-page/brand-icon-hyundai.webp",
    url: "#",
  },
];

const normalizeBrandName = (name = "") =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

const BRAND_PRIORITY_GROUPS = [
  ["merc", "mercedes", "mercedesbenz", "mercedesbenzamg", "mercedesamg"],
  ["bmw"],
  ["rolls", "rollsroyce", "rollsroycer", "rolls-royce"],
  ["porsche"],
  ["lambo", "lamborghini"],
  ["ferrari"],
  ["bentley"],
  ["landrover", "land-rover"],
  ["toyota"],
  ["lexus"],
  ["aston", "astonmartin"],
  ["mclaren"],
  ["audi"],
  ["mini"],
  ["ford"],
  ["jeep"],
];

const BRAND_PRIORITY_MAP = BRAND_PRIORITY_GROUPS.reduce((acc, group, index) => {
  group.forEach((variant) => {
    acc[normalizeBrandName(variant)] = index;
  });
  return acc;
}, {});

const getBrandPriority = (title) => {
  const normalizedTitle = normalizeBrandName(title);
  if (!normalizedTitle) {
    return Number.MAX_SAFE_INTEGER;
  }

  if (Object.prototype.hasOwnProperty.call(BRAND_PRIORITY_MAP, normalizedTitle)) {
    return BRAND_PRIORITY_MAP[normalizedTitle];
  }

  const matchingPriority = Object.entries(BRAND_PRIORITY_MAP).find(
    ([variant]) => normalizedTitle.includes(variant)
  );

  return matchingPriority ? matchingPriority[1] : Number.MAX_SAFE_INTEGER;
};

const sortBrandsByPriority = (brandList = []) =>
  brandList
    .map((brand, index) => ({
      ...brand,
      __priority: getBrandPriority(brand.title || brand.bname || ""),
      __originalIndex: index,
    }))
    .sort((a, b) => {
      if (a.__priority !== b.__priority) {
        return a.__priority - b.__priority;
      }
      return a.__originalIndex - b.__originalIndex;
    })
    .map(({ __priority, __originalIndex, ...brand }) => brand);

const FilterPopup = ({ active, togglePopup }) => {
  const router = useRouter();
  
  // Use optional context hook - returns null if context not available (e.g., on homepage)
  const contextData = useCollectionContextOptional();
  
  const { filters, updateFilters, resetFilters } = contextData || { filters: {}, updateFilters: () => {}, resetFilters: () => {} };
  
  // Fetch brands and categories from API
  const { brands: apiBrands } = useBrands();
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  
  // Use API data if available, otherwise use fallback data
  const brands = useMemo(() => {
    const mappedBrands =
      apiBrands?.length > 0
        ? apiBrands.map((brand) => ({
            _id: brand.id_ || brand.id,
            title: brand.bname || brand.name,
            logo: brand.bicon
              ? `https://cdn.bigboytoyz.com/new-version/brands/${brand.bicon}`
              : "/images/detail-page/brand-icon-bmw.webp",
            url: brand.posturl || "#",
            brandId: brand.id_ || brand.id, // Add explicit brandId field for clarity
          }))
        : fallbackBrands;

    return sortBrandsByPriority(mappedBrands);
  }, [apiBrands]);

  // Fetch categories using footerService
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsCategoriesLoading(true);
        const styles = await footerService.fetchStyles();
        
        if (styles && styles.length > 0) {
          // Map styles to the component format
          const processedCategories = styles.map((style) => {
            const styleName = style.name || '';
            const styleSlug = style.slug || styleName.toLowerCase().replace(/\s+/g, '-');
            const styleIcon = style.icon ? `https://cdn.bigboytoyz.com/new-version/styles/${style.icon}` : categoryIcons[styleName.toLowerCase()];
            
            return {
              _id: style.id || style._id,
              title: styleName,
              icon: styleIcon || categoryIcons[styleName.toLowerCase()] || "/images/detail-page/category-icon-generic.webp",
              url: `/category/${styleSlug}`,
            };
          });
          
          setCategories(processedCategories);
        } else {
          // Fallback to predefined categories if API returns empty
          const fallbackCategories = Object.entries(categoryIcons).map(([key, icon]) => ({
            _id: key,
            title: key.charAt(0).toUpperCase() + key.slice(1),
            icon: icon,
            url: `/category/${key}`,
          }));
          
          setCategories(fallbackCategories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Fallback to predefined categories on error
        const fallbackCategories = Object.entries(categoryIcons).map(([key, icon]) => ({
          _id: key,
          title: key.charAt(0).toUpperCase() + key.slice(1),
          icon: icon,
          url: `/category/${key}`,
        }));
        
        setCategories(fallbackCategories);
      } finally {
        setIsCategoriesLoading(false);
      }
    };
    
    fetchCategories();
  }, []);

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedKmDriven, setSelectedKmDriven] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedRegistrationState, setSelectedRegistrationState] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);

  // Prevent resetting selectedBrand on every popup open (homepage bug fix)
  const didInitRef = useRef(false);
  useEffect(() => {
    if (!didInitRef.current) {
      didInitRef.current = true;
      if (filters.brand) {
        const brandVals = filters.brand.split(',');
        const firstBrandVal = brandVals[0];
        const selectedBrandObj = brands.find(brand => 
          (brand.url && brand.url.toLowerCase() === (firstBrandVal || '').toLowerCase()) ||
          brand._id === firstBrandVal ||
          brand.brandId === firstBrandVal ||
          brand._id?.toString() === firstBrandVal
        );
        if (selectedBrandObj) {
          // Prefer slug value for URL
          setSelectedBrand(selectedBrandObj.url || selectedBrandObj._id);
        } else {
          setSelectedBrand(firstBrandVal);
        }
      } else {
        setSelectedBrand("all");
      }
      
      if (filters.styles) {
        const styleIds = filters.styles.split(',');
        const selectedStyleObjects = categories.filter(cat => styleIds.includes(cat._id));
        setSelectedTypes(selectedStyleObjects);
      }
      
      if (filters.priceMin || filters.priceMax || filters.minPrice || filters.maxPrice) {
        let budgetValue = '';
        if (filters.priceMax === '5000000' || filters.maxPrice === '5000000') budgetValue = '500000';
        else if (filters.priceMin === '5000000' && filters.priceMax === '10000000' || filters.minPrice === '5000000' && filters.maxPrice === '10000000') budgetValue = '5000000-10000000';
        else if (filters.priceMin === '10000000' && filters.priceMax === '15000000' || filters.minPrice === '10000000' && filters.maxPrice === '15000000') budgetValue = '10000000-15000000';
        else if (filters.priceMin === '15000000' || filters.minPrice === '15000000') budgetValue = '15000000-50000000';
        
        setSelectedBudget(budgetValue);
      }

      // Initialize registration year
      const normalizedStateValue = normalizeStateFilterValue(filters.state);
      if (normalizedStateValue) {
        setSelectedRegistrationState(normalizedStateValue);
      } else if (filters.state) {
        setSelectedRegistrationState(filters.state);
      } else {
        setSelectedRegistrationState("");
      }

      if (filters.yearFrom || filters.yearTo) {
        if (filters.yearFrom === '2000' && filters.yearTo === '2010') setSelectedYear('2000-2010');
        else if (filters.yearFrom === '2011' && filters.yearTo === '2020') setSelectedYear('2011-2020');
        else if (filters.yearFrom === '2021' && filters.yearTo === '2025') setSelectedYear('2021-2025');
        else setSelectedYear('all');
      }

      // Initialize KM Driven
      if (filters.kmFrom || filters.kmTo) {
        if (filters.kmFrom === '0' && filters.kmTo === '0') setSelectedKmDriven('new');
        else if (filters.kmFrom === '0' && filters.kmTo === '5000') setSelectedKmDriven('0-5000');
        else if (filters.kmFrom === '5000' && filters.kmTo === '10000') setSelectedKmDriven('5000-10000');
        else if (filters.kmFrom === '10000' && filters.kmTo === '15000') setSelectedKmDriven('10000-15000');
        else if (filters.kmFrom === '15000' && filters.kmTo === '20000') setSelectedKmDriven('15000-20000');
        else if (filters.kmFrom === '20000' && (!filters.kmTo || filters.kmTo === '')) setSelectedKmDriven('20000+');
      }

      // Initialize Fuel Type
      if (filters.fuelType) {
        setSelectedFuel((filters.fuelType || '').toLowerCase());
      }
    }
  }, [filters, categories]);

  //   Select Budget function
  const handleSelectBudget = (budget) => {
    setSelectedBudget(budget);
  };

  //   Select and Unselect Vehicle Type Function
  const selectTypesController = (item) => {
    const isInArray = selectedTypes.filter((e) => e._id === item._id);
    if (isInArray.length > 0) {
      const filteredTypes = selectedTypes.filter(
        (type) => type._id !== item._id
      );
      setSelectedTypes(filteredTypes);
    } else {
      setSelectedTypes([...selectedTypes, item]);
    }
  };

  //   Reset function
  const handleResetFilter = () => {
    setSelectedTypes([]);
    setSelectedBrand("all");
    setSelectedYear("");
    setSelectedKmDriven("");
    setSelectedFuel("");
    setSelectedRegistrationState("");
    setSelectedBudget("");
    setDisableSubmit(true);
    
    // Only call resetFilters if context is available
    if (contextData && resetFilters) {
      resetFilters();
    }
  };

  // Helper to build the full filter object from current selections
  const buildFiltersFromSelections = (brandValue) => {
    const newFilters = {};
    // Brand
    if (brandValue && brandValue !== 'all') {
      newFilters.brand = brandValue;
    } else {
      newFilters.brand = '';
    }
    // Styles
    if (selectedTypes.length > 0) {
      const styleIds = selectedTypes.map(type => type._id);
      newFilters.styles = styleIds.join(',');
    } else {
      newFilters.styles = '';
    }
    // Budget
    if (selectedBudget) {
      switch (selectedBudget) {
        case '500000':
          newFilters.minPrice = '';
          newFilters.maxPrice = '5000000';
          newFilters.priceMin = newFilters.minPrice;
          newFilters.priceMax = newFilters.maxPrice;
          break;
        case '5000000-10000000':
          newFilters.minPrice = '5000000';
          newFilters.maxPrice = '10000000';
          newFilters.priceMin = newFilters.minPrice;
          newFilters.priceMax = newFilters.maxPrice;
          break;
        case '10000000-15000000':
          newFilters.minPrice = '10000000';
          newFilters.maxPrice = '15000000';
          newFilters.priceMin = newFilters.minPrice;
          newFilters.priceMax = newFilters.maxPrice;
          break;
        case '15000000-50000000':
          newFilters.minPrice = '15000000';
          newFilters.maxPrice = '';
          newFilters.priceMin = newFilters.minPrice;
          newFilters.priceMax = newFilters.maxPrice;
          break;
        default:
          newFilters.minPrice = '';
          newFilters.maxPrice = '';
          newFilters.priceMin = '';
          newFilters.priceMax = '';
      }
    } else {
      newFilters.minPrice = '';
      newFilters.maxPrice = '';
      newFilters.priceMin = '';
      newFilters.priceMax = '';
    }
    // Registration year
    if (selectedYear) {
      switch (selectedYear) {
        case '2000-2010':
          newFilters.yearFrom = '2000';
          newFilters.yearTo = '2010';
          break;
        case '2011-2020':
          newFilters.yearFrom = '2011';
          newFilters.yearTo = '2020';
          break;
        case '2021-2025':
          newFilters.yearFrom = '2021';
          newFilters.yearTo = '2025';
          break;
        case 'all':
        default:
          newFilters.yearFrom = '';
          newFilters.yearTo = '';
      }
    } else {
      newFilters.yearFrom = '';
      newFilters.yearTo = '';
    }
    // KM Driven
    if (selectedKmDriven) {
      switch (selectedKmDriven) {
        case 'new':
          newFilters.kmFrom = '0';
          newFilters.kmTo = '0';
          break;
        case '0-5000':
          newFilters.kmFrom = '0';
          newFilters.kmTo = '5000';
          break;
        case '5000-10000':
          newFilters.kmFrom = '5000';
          newFilters.kmTo = '10000';
          break;
        case '10000-15000':
          newFilters.kmFrom = '10000';
          newFilters.kmTo = '15000';
          break;
        case '15000-20000':
          newFilters.kmFrom = '15000';
          newFilters.kmTo = '20000';
          break;
        case '20000+':
          newFilters.kmFrom = '20000';
          newFilters.kmTo = '';
          break;
        default:
          newFilters.kmFrom = '';
          newFilters.kmTo = '';
      }
    } else {
      newFilters.kmFrom = '';
      newFilters.kmTo = '';
    }
    
    // Fuel Type
    if (selectedFuel) {
      newFilters.fuelType = selectedFuel;
    } else {
      newFilters.fuelType = '';
    }

    const normalizedStateSelection = normalizeStateFilterValue(selectedRegistrationState);
    newFilters.state = normalizedStateSelection || '';
    return newFilters;
  };

  // NEW: Handle brand change and update filters immediately
  const handleBrandChange = (e) => {
    const newBrand = e.target.value;
    setSelectedBrand(newBrand);
    if (contextData && updateFilters) {
      const newFilters = buildFiltersFromSelections(newBrand);
      updateFilters(newFilters);
      // Close the dialog after updating
      if (typeof togglePopup === 'function') {
        togglePopup();
      }
    }
    // On homepage (no contextData), do NOT close or navigate, just update state
  };

  const handleSubmit = () => {
    if (!disableSubmit) {
      if (contextData && updateFilters) {
        const newFilters = buildFiltersFromSelections(selectedBrand);
        updateFilters(newFilters);
        togglePopup();
      } else {
        console.log("🔍 FilterPopup handleSubmit called");
        console.log("🔍 Context data available:", !!contextData);
        console.log("🔍 Selected brand:", selectedBrand);
        console.log("🔍 Selected types:", selectedTypes);
        console.log("🔍 Selected budget:", selectedBudget);
        
        const newFilters = {};
        
        // Process brand
        if (selectedBrand && selectedBrand !== 'all') {
          newFilters.brand = selectedBrand;
        } else {
          newFilters.brand = '';
        }
        
        // Process categories/styles
        if (selectedTypes.length > 0) {
          const styleIds = selectedTypes.map(type => type._id);
          newFilters.styles = styleIds.join(',');
        } else {
          newFilters.styles = '';
        }
        
        // Process budget
        if (selectedBudget) {
          switch (selectedBudget) {
            case '500000':
              // Less than 50L
              newFilters.minPrice = '';
              newFilters.maxPrice = '5000000';
              // Backward-compat keys
              newFilters.priceMin = newFilters.minPrice;
              newFilters.priceMax = newFilters.maxPrice;
              break;
            case '5000000-10000000':
              newFilters.minPrice = '5000000';
              newFilters.maxPrice = '10000000';
              newFilters.priceMin = newFilters.minPrice;
              newFilters.priceMax = newFilters.maxPrice;
              break;
            case '10000000-15000000':
              newFilters.minPrice = '10000000';
              newFilters.maxPrice = '15000000';
              newFilters.priceMin = newFilters.minPrice;
              newFilters.priceMax = newFilters.maxPrice;
              break;
            case '15000000-50000000':
              newFilters.minPrice = '15000000';
              newFilters.maxPrice = '';
              newFilters.priceMin = newFilters.minPrice;
              newFilters.priceMax = newFilters.maxPrice;
              break;
            default:
              newFilters.minPrice = '';
              newFilters.maxPrice = '';
              newFilters.priceMin = '';
              newFilters.priceMax = '';
          }
        } else {
          newFilters.minPrice = '';
          newFilters.maxPrice = '';
          newFilters.priceMin = '';
          newFilters.priceMax = '';
        }
        
        // Process registration year
        if (selectedYear) {
          switch (selectedYear) {
            case '2000-2010':
              newFilters.yearFrom = '2000';
              newFilters.yearTo = '2010';
              break;
            case '2011-2020':
              newFilters.yearFrom = '2011';
              newFilters.yearTo = '2020';
              break;
            case '2021-2025':
              newFilters.yearFrom = '2021';
              newFilters.yearTo = '2025';
              break;
            case 'all':
            default:
              newFilters.yearFrom = '';
              newFilters.yearTo = '';
          }
        } else {
          newFilters.yearFrom = '';
          newFilters.yearTo = '';
        }
        
        // Process KM Driven
        if (selectedKmDriven) {
          switch (selectedKmDriven) {
            case 'new':
              newFilters.kmFrom = '0';
              newFilters.kmTo = '0';
              break;
            case '0-5000':
              newFilters.kmFrom = '0';
              newFilters.kmTo = '5000';
              break;
            case '5000-10000':
              newFilters.kmFrom = '5000';
              newFilters.kmTo = '10000';
              break;
            case '10000-15000':
              newFilters.kmFrom = '10000';
              newFilters.kmTo = '15000';
              break;
            case '15000-20000':
              newFilters.kmFrom = '15000';
              newFilters.kmTo = '20000';
              break;
            case '20000+':
              newFilters.kmFrom = '20000';
              newFilters.kmTo = '';
              break;
            default:
              newFilters.kmFrom = '';
              newFilters.kmTo = '';
          }
        } else {
          newFilters.kmFrom = '';
          newFilters.kmTo = '';
        }
        
        // Process Fuel Type
        if (selectedFuel) {
          newFilters.fuelType = selectedFuel;
        } else {
          newFilters.fuelType = '';
        }

        const normalizedStateSelection = normalizeStateFilterValue(selectedRegistrationState);
        newFilters.state = normalizedStateSelection || '';
        
        console.log("🔍 Processed filters:", newFilters);
        
        // If context is available (collection page), update filters in context
        if (contextData && updateFilters) {
          console.log("🔍 Using collection context - updating filters");
          updateFilters(newFilters);
          togglePopup();
        } else {
          // If context is not available (homepage), navigate to collection page with filters
          console.log("🔍 No context - navigating to collection page");
          const queryParams = new URLSearchParams();
          
          // Add non-empty filters to query params
          Object.entries(newFilters).forEach(([key, value]) => {
            if (value && value !== '') {
              queryParams.append(key, value);
              console.log(`🔍 Added query param: ${key} = ${value}`);
            }
          });
          
          // Navigate to collection page with filters
          const collectionUrl = queryParams.toString() ? 
            `/collection?${queryParams.toString()}` : 
            '/collection';
            
          console.log("🔍 Navigating to collection page with URL:", collectionUrl);
          
          try {
            router.push(collectionUrl);
            console.log("🔍 Router.push called successfully");
          } catch (error) {
            console.error("❌ Router.push failed:", error);
          }
          
          togglePopup();
        }
      }
    } else {
      console.log("🔍 Submit disabled, not processing");
    }
  };

  useEffect(() => {
    if (
      (selectedBrand && selectedBrand !== 'all') ||
      selectedTypes.length > 0 ||
      selectedBudget ||
      selectedYear ||
      selectedKmDriven ||
      selectedFuel ||
      selectedRegistrationState
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [selectedBrand, selectedTypes, selectedBudget, selectedYear, selectedKmDriven, selectedFuel, selectedRegistrationState]);

  // Select Registration Year
  const handleSelectRegistrationYear = (year) => {
    setSelectedYear(year);
  };

  // Select KM Driven
  const handleSelectKmDriven = (km) => {
    setSelectedKmDriven(km);
  };

  // Select Fuel Type
  const handleSelectFuelType = (fuel) => {
    setSelectedFuel(fuel);
  };

  const handleSelectRegistrationState = (event) => {
    const { value } = event.target;
    const normalizedValue = value ? normalizeStateFilterValue(value) : "";
    setSelectedRegistrationState(normalizedValue);
  };

  const stateOptions = getStateOptionList();

  return (
    <div
      className={`${
        active ? "opacity-100 flex" : "opacity-0 pointer-events-none hidden"
      } fixed w-full h-full left-0 top-0 min-h-screen items-center justify-center transition-all duration-500 z-[100]`}
    >
      <div
        className={` bg-[#00000099] w-full h-full fixed left-0 top-0 z-10 block opacity-100 transition-all duration-500`}
        onClick={togglePopup}
      ></div>
      <div className="w-full bg-white h-screen z-20 mx-auto relative overflow-x-hidden lg:w-[80%] lg:rounded-[1.5rem] lg:max-h-[90vh] xl:w-[70%] 2xl:max-w-[1400px]">
        <div className="popupScrollbar overflow-y-auto h-full px-8 pb-[17rem] xl:px-12">
          <div className="flex justify-between py-6 border-b border-neutral-200 xl:pt-9">
            <h3 className="3.5xl font-medium">Filters</h3>
            <div className="flex items-center">
              <div
                className={`flex py-[0.7rem] px-[2rem] rounded-[1.5rem] items-center w-max border border-black cursor-pointer group hover:bg-black transition-all duration-300 ${
                  disableSubmit ? "opacity-40 pointer-events-none" : ""
                }`}
                onClick={handleResetFilter}
              >
                <Image
                  src="/images/filter-reset.webp"
                  width="14"
                  height="14"
                  alt="Reset Filter"
                  className="w-5 inline-block object-contain transition-all duration-300 group-hover:invert"
                />
                <span className="text-xl inline-block ml-4 leading-none transition-all duration-300 group-hover:text-white">
                  Reset
                </span>
              </div>
              <div
                className="w-max p-3 flex justify-center items-center cursor-pointer rounded-50% border border-black ml-3 group hover:bg-black transition-all duration-300"
                onClick={togglePopup}
              >
                <Image
                  src="/images/filter-close.webp"
                  width="12"
                  height="12"
                  alt="Close Popup"
                  className="w-5 object-contain transition-all duration-300 group-hover:invert"
                />
              </div>
            </div>
          </div>

          {/* Registration Year */}
          <div className="border-t border-b border-neutral-200 pt-10 pb-4">
            <p className="font-medium text-1xl xl:text-3xl">Registration Year</p>
            <ul className="flex py-7 flex-wrap gap-y-5">
              {['2000-2010','2011-2020','2021-2025','all'].map(range => (
                <li
                  key={range}
                  className={`text-[1.3rem] tracking-tight px-5 border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-[1.3rem] 3xl:text-[1.6rem] py-[0.5rem] flex justify-center items-center ${styles.budgetItem} ${selectedYear === range ? styles.active : ''}`}
                  onClick={() => handleSelectRegistrationYear(range)}
                >
                  {range === 'all' ? 'All' : range.replace('-', ' - ')}
                </li>
              ))}
            </ul>
          </div>

          {/* Registration State */}
          <div className="border-t pt-10 filter-popup-brands">
            <p className="font-medium text-1xl xl:text-3xl">Registration State</p>
            <select
              className="bg-transparent border border-neutral-200 mt-8 px-6 py-4 text-[1.4rem] w-full rounded-md outline-none xl:text-[1.3rem] 3xl:text-[1.8rem] xl:py-[15px]"
              value={selectedRegistrationState}
              onChange={handleSelectRegistrationState}
            >
              <option value="">All States</option>
              {stateOptions.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>

          {/* Kms Driven */}
          <div className="border-t border-b border-neutral-200 pt-10 pb-4">
            <p className="font-medium text-1xl xl:text-3xl">Kms Driven</p>
            <ul className="flex py-7 flex-wrap gap-y-5">
              {['new','0-5000','5000-10000','10000-15000','15000-20000','20000+'].map(km => (
                <li
                  key={km}
                  className={`text-[1.3rem] tracking-tight px-5 border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-[1.3rem] 3xl:text-[1.6rem] py-[0.5rem] flex justify-center items-center ${styles.budgetItem} ${selectedKmDriven === km ? styles.active : ''}`}
                  onClick={() => handleSelectKmDriven(km)}
                >
                  {km === 'new' ? 'Brand New' : km.replace('+',' & Above')}
                </li>
              ))}
            </ul>
          </div>

          {/* Fuel Type */}
          <div className="border-t border-b border-neutral-200 pt-10 pb-4">
            <p className="font-medium text-1xl xl:text-3xl">Fuel Type</p>
            <ul className="flex py-7 flex-wrap gap-y-5">
              {['petrol','diesel','hybrid','electric'].map(fuel => (
                <li
                  key={fuel}
                  className={`text-[1.3rem] tracking-tight px-5 border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-[1.3rem] 3xl:text-[1.6rem] py-[0.5rem] flex justify-center items-center ${styles.budgetItem} ${selectedFuel === fuel ? styles.active : ''}`}
                  onClick={() => handleSelectFuelType(fuel)}
                >
                  {fuel.charAt(0).toUpperCase() + fuel.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          {/* Budget */}
          <div className="border-t border-b border-neutral-200 pt-10 pb-4">
            <p className="font-medium text-1xl xl:text-3xl">Price Range</p>
            <ul className="no-scroll-bar overflow-auto flex py-7">
              <li
                className={`text-[1.3rem] tracking-tight px-5 border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-[1.3rem] 3xl:text-[1.6rem] py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedBudget === "500000" ? styles.active : ""}`}
                onClick={() => handleSelectBudget("500000")}
              >
                Less Than 50L
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-5 border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-[1.3rem] 3xl:text-[1.6rem] py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${
                  selectedBudget === "5000000-10000000" ? styles.active : ""
                }`}
                onClick={() => handleSelectBudget("5000000-10000000")}
              >
                50L to 1Cr
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-5 border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-[1.3rem] 3xl:text-[1.6rem] py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${
                  selectedBudget === "10000000-15000000" ? styles.active : ""
                }`}
                onClick={() => handleSelectBudget("10000000-15000000")}
              >
                1Cr to 1.5Cr
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-5 border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-[1.3rem] 3xl:text-[1.6rem] py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${
                  selectedBudget === "15000000-50000000" ? styles.active : ""
                }`}
                onClick={() => handleSelectBudget("15000000-50000000")}
              >
                1.5Cr & Above
              </li>
            </ul>
          </div>

          {/* Vehicle Type */}
          <div className="py-12">
            <p className="font-medium text-1xl mb-7 xl:text-3xl">
              Vehicle type
            </p>
            <ul className="flex items-center flex-wrap mt-8 gap-x-[1rem] lg:gap-x-[2rem]">
              {categories.map((category) => (
                <li
                  key={category._id}
                  className={`${
                    styles.categoryItem
                  } w-31% three-column-item lg:w-[18%]`}
                >
                  <div
                    className={`px-2 py-10 w-full h-full rounded-xl border border-neutral-300 mt-5 block text-center lg:py-20 xl:py-[3rem] 2xl:py-[4rem] 3xl:py-[6rem] xl:mt-[2rem] hover:bg-black transition-all duration-500 group cursor-pointer ${
                      selectedTypes.some((item) => item._id === category._id)
                        ? "bg-black"
                        : ""
                    }`}
                    onClick={() => selectTypesController(category)}
                  >
                    <Image
                      src={category.icon}
                      width={67}
                      height={25}
                      alt={category.title}
                      className="object-contain block w-full max-h-11 xl:max-h-16 3xl:max-h-20"
                    />
                    <p className={`text-black font-medium text-1xl mt-3 xl:text-1.6xl xl:mt-12 1xl:text-3xl 2xl:mt-16 3xl:text-[2.6rem] 3xl:mt-20 group-hover:text-white transition-all duration-500 ${
                      selectedTypes.some((item) => item._id === category._id)
                        ? "text-white"
                        : ""
                    }`}>
                      {category.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Dropdown */}
          <div className="border-t pt-10 filter-popup-brands">
            <p className="font-medium text-1xl xl:text-3xl">Brands</p>
            <select
              className="bg-transparent border border-neutral-200 mt-8 px-6 py-4 text-[1.4rem] w-full rounded-md outline-none xl:text-[1.3rem] 3xl:text-[1.8rem] xl:py-[15px]"
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <option value="all">All Brands</option>
              {brands.map(b=>(
                <option key={b._id} value={b.url || b._id}>{b.title}</option>
              ))}
            </select>
          </div>

          {/* Submit  */}
          <div className="absolute w-full bottom-0 left-0 bg-white px-[3rem] py-[3rem] lg:pb-[3rem] pb-[calc(6rem+env(safe-area-inset-bottom))] border-t border-t-[#dddddd] ">
            <button
              className={`border text-white w-full flex items-center justify-center py-6 px-10 transition-all duration-500 font-medium text-[1.6rem] ${
                disableSubmit
                  ? " bg-gray-300 border-gray-300 pointer-events-none"
                  : "bg-black border-black cursor-pointer"
              }`}
              onClick={handleSubmit}
            >
              {contextData ? 'Show Cars' : 'View Collection'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
