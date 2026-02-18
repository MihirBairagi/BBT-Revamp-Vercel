"use client";
import React, { useEffect, useState } from "react";
import styles from "./FilterPopup.module.css";
import Image from "next/image";

const brands = [
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

const categories = [
  {
    _id: "001",
    title: "SUVs",
    icon: "/images/detail-page/category-icon-suv.webp",
    url: "#",
  },
  {
    _id: "002",
    title: "Sedan",
    icon: "/images/detail-page/category-icon-sedan.webp",
    url: "#",
  },
  {
    _id: "003",
    title: "Convertible",
    icon: "/images/detail-page/category-icon-convertable.webp",
    url: "#",
  },
  {
    _id: "004",
    title: "Coupe",
    icon: "/images/detail-page/category-icon-coupe.webp",
    url: "#",
  },
  {
    _id: "005",
    title: "Sports",
    icon: "/images/detail-page/category-icon-sports.webp",
    url: "#",
  },
];

const FilterPopup = ({ active, togglePopup }) => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedKmDriven, setSelectedKmDriven] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);

  //   Select Registration function
  const handleSelectRegistrationYear = (year) => {
    setSelectedYear(year);
  };
  //   Select KM Driven function
  const handleSelectKmDriven = (km) => {
    setSelectedKmDriven(km);
  };

  //   Select Budget function
  const handleSelectBudget = (budget) => {
    setSelectedBudget(budget);
  };

  //   Select and Unselect Vehicle Type Function
  const selectTypesController = (item) => {
    const isInArray = selectedTypes.filter((e) => e._id === item._id);
    if (isInArray.length > 0) {
      const filteredBrands = selectedTypes.filter(
        (brand) => brand._id !== item._id
      );
      setSelectedTypes(filteredBrands);
    } else {
      setSelectedTypes([...selectedTypes, item]);
    }
  };

  //   Reset function
  const handleResetFilter = () => {
    setSelectedTypes([]);
    setSelectedBrand("");
    setSelectedYear("");
    setSelectedKmDriven("");
    setSelectedBudget("");
    setDisableSubmit(true);
  };

  const handleSubmit = () => {
    if (!disableSubmit) {
      console.log("Selected Year:", selectedYear);
      console.log("Selected KM:", selectedKmDriven);
      console.log("Selected Budget:", selectedBudget);
      console.log("Selected Types:", selectedTypes);
      console.log("Selected Brand:", selectedBrand);
      togglePopup();
    }
  };

  useEffect(() => {
    if (!selectedBrand || selectedTypes.length > 0 || selectedBudget) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [selectedBrand, selectedTypes, selectedBudget]);

  return (
    <div
      className={`${
        active ? "opacity-100 flex" : ""
      } fixed w-full h-full left-0 top-0 min-h-screen items-center justify-center opacity-0 transition-all duration-500 z-100`}
    >
      <div
        className={` bg-[#00000099] w-full h-full fixed left-0 top-0 z-10 block opacity-100 transition-all duration-500`}
        onClick={togglePopup}
      ></div>
      <div className="w-full bg-white h-screen z-20 mx-auto relative overflow-x-hidden lg:w-[80%] lg:rounded-[1.5rem] lg:max-h-[90vh] xl:w-[70%] 2xl:max-w-[1400px]">
        <div className="popupScrollbar overflow-y-auto h-full px-8 pb-[50px] xl:px-12">
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
            <p className="font-medium text-[1.8rem] xl:text-3xl">
              Registration Year
            </p>
            <ul className="flex py-7 flex-wrap gap-y-5">
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedYear === "2000-2010" ? styles.active : ""}`}
                onClick={() => handleSelectRegistrationYear("2000-2010")}
              >
                2000 - 2010
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedYear === "2011-2020" ? styles.active : ""}`}
                onClick={() => handleSelectRegistrationYear("2011-2020")}
              >
                2011 - 2020
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedYear === "2021-2025" ? styles.active : ""}`}
                onClick={() => handleSelectRegistrationYear("2021-2025")}
              >
                2021 - 2025
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedYear === "all" ? styles.active : ""}`}
                onClick={() => handleSelectRegistrationYear("all")}
              >
                All
              </li>
            </ul>
          </div>

          {/* Kms Driven */}
          <div className="border-t border-b border-neutral-200 pt-10 pb-4">
            <p className="font-medium text-[1.8rem] xl:text-3xl">Kms Driven</p>
            <ul className="flex py-7 flex-wrap gap-y-5">
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedKmDriven === "new" ? styles.active : ""}`}
                onClick={() => handleSelectKmDriven("new")}
              >
                Brand New
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedKmDriven === "0-5000" ? styles.active : ""}`}
                onClick={() => handleSelectKmDriven("0-5000")}
              >
                0 - 5000
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedKmDriven === "5000-10000" ? styles.active : ""}`}
                onClick={() => handleSelectKmDriven("5000-10000")}
              >
                5000-10000
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedKmDriven === "10000-15000" ? styles.active : ""}`}
                onClick={() => handleSelectKmDriven("10000-15000")}
              >
                10000-15000
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedKmDriven === "15000-20000" ? styles.active : ""}`}
                onClick={() => handleSelectKmDriven("15000-20000")}
              >
                15000-20000
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedKmDriven === "20000+" ? styles.active : ""}`}
                onClick={() => handleSelectKmDriven("20000+")}
              >
                20000 & Above
              </li>
            </ul>
          </div>

          {/* Budget */}
          <div className="border-t border-b border-neutral-200 pt-10 pb-4">
            <p className="font-medium text-[1.8rem] xl:text-3xl">Budget</p>
            <ul className="flex py-7 flex-wrap gap-y-5">
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${selectedBudget === "500000" ? styles.active : ""}`}
                onClick={() => handleSelectBudget("500000")}
              >
                Less Than 50L
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${
                  selectedBudget === "5000000-10000000" ? styles.active : ""
                }`}
                onClick={() => handleSelectBudget("5000000-10000000")}
              >
                50L to 1Cr
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
                  styles.budgetItem
                } ${
                  selectedBudget === "10000000-15000000" ? styles.active : ""
                }`}
                onClick={() => handleSelectBudget("10000000-15000000")}
              >
                1Cr to 1.5Cr
              </li>
              <li
                className={`text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg py-[0.5rem] flex justify-center items-center ${
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
            <p className="font-medium text-[1.8rem] mb-7 xl:text-3xl">
              Vehicle type
            </p>
            <ul className="flex items-center flex-wrap mt-8">
              {categories.map((category) => (
                <li
                  key={category._id}
                  className={`${
                    styles.categoryItem
                  } w-32 h-32 py-7 px-3 text-center flex justify-center items-center flex-col border border-neutral-200 rounded-md mr-4 mt-4 cursor-pointer transition-all duration-300 xl:w-44 xl:h-44 ${
                    selectedTypes.some((item) => item._id === category._id)
                      ? styles.active
                      : ""
                  }`}
                  onClick={() => selectTypesController(category)}
                >
                  <Image
                    src={category.icon}
                    width="67"
                    height="25"
                    alt={category.title}
                    className="object-contain h-8"
                  />
                  <p className="text-black text-base mt-3  xl:text-lg">
                    {category.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div className="border-t pt-10 ">
            <p className="font-medium text-[1.8rem] xl:text-3xl">Brands</p>

            <select
              className="bg-transparent border border-neutral-200 mt-8 px-[2rem] py-[1.5rem] text-[1.5rem] w-full rounded-md outline-none"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="all">All Brands</option>
              {brands.map((brand) => (
                <option value={brand._id}>{brand.title}</option>
              ))}
            </select>
          </div>

          {/* Submit  */}
          <div>
            <button
              className={`border mt-[30px] text-white w-full flex items-center justify-center py-6 px-10 transition-all duration-500 font-medium text-1.6x ${
                disableSubmit
                  ? " bg-gray-300 border-gray-300 pointer-events-none"
                  : "bg-black border-black cursor-pointer"
              }`}
              onClick={handleSubmit}
            >
              Show Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
