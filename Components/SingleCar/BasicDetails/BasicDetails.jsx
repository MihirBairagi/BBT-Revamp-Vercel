"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";
import useDeviceType from "../../../app/lib/hooks/useDeviceType";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./SpecificationSection.module.css";
import { useCompareContextOptional } from "../../../app/lib/contexts/CompareContext";
import {
  formatProductPrice,
  formatDiscountedPrice,
} from "../../../app/lib/utils/productUtils";

const BasicDetails = ({
  name,
  price,
  specialPrice,
  registrationYear,
  kmDriven,
  fuelType,
  registrationState,
  isBooked,
  isCertified = false,
  brand,
  model,
  carId,
  carData,
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [mobCallButtons, setMobCallButtons] = useState(false);
  const [isAddingToCompare, setIsAddingToCompare] = useState(false);
  const { isMobile } = useDeviceType();
  const router = useRouter();
  const compareContext = useCompareContextOptional();

  const [showNextSection, setShowNextSection] = useState(false);

  const isSold = carData?.isSold;

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  const toggleMobCallBtns = () => {
    setMobCallButtons(!mobCallButtons);
  };

  const handleScroll = () => {
    const section = document.getElementById("singleEmiCalculator");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCompare = () => {
    if (!compareContext) {
      console.error("Compare context not available");
      return;
    }

    setIsAddingToCompare(true);

    try {
      // Create a car object compatible with the comparison system
      const carForComparison = {
        id: carId || carData?.id,
        name: name || carData?.name,
        title: name || carData?.name,
        price: parseFloat(price || specialPrice || 0),
        images: carData?.images || [],
        thumbnail: carData?.images?.[0]?.url || carData?.prolistimage || "",
        postUrl: carData?.postUrl || carData?.url || "",
        brand: {
          id: carData?.brand?.id || "",
          name: brand || carData?.brand?.name || "",
        },
        category: carData?.category || "",
        stock: carData?.stock,
        isBooked: isBooked,
      };

      // Use the context to add to comparison
      const result = compareContext.addToCompare(carForComparison);

      if (result.success) {
        // Success is handled by the context with toast notification
        console.log("Car added to comparison successfully");
      } else {
        // Error is handled by the context with toast notification
        console.log("Failed to add car to comparison:", result.message);
      }
    } catch (error) {
      console.error("Error adding car to comparison:", error);
      compareContext.showToast(
        "Error adding car to comparison. Please try again.",
        "error"
      );
    } finally {
      setIsAddingToCompare(false);
    }
  };

  // Format price in Indian format
  const formatPrice = (value) => {
    if (!value) return "0";
    return parseFloat(value).toLocaleString("en-IN");
  };

  // Calculate EMI (simplified calculation)
  const calculateEMI = () => {
    if (!price) return "0";
    return Math.floor(parseInt(price) / 60).toLocaleString("en-IN");
  };

  useEffect(() => {
    document.body.classList.add("single-car");
    return () => {
      document.body.classList.remove("single-car");
    };
  }, []);

  useEffect(() => {
    if (mobCallButtons) {
      document.body.classList.add("btn-open");
    } else {
      document.body.classList.remove("btn-open");
    }
  }, [mobCallButtons]);

  useEffect(() => {
    if (showNextSection) {
      const el = document.getElementById("afterSliderSection");
      const yOffset = -100; // adjust to your desired top space (negative = leave gap)
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      document.getElementById("header").scrollIntoView({ behavior: "smooth" });
    }
  }, [showNextSection]);

  return (
    <div className="w-full relative lg:sticky lg:top-0 bg-white z-[20] lg:shadow-detail-space">
      <span
        className={`mob-up-arrow md:hidden w-[40px] h-[40px] rounded-[50%] bg-black absolute inline-flex items-center justify-center top-[-4.8rem] left-[50%] -translate-x-[50%] transition-all duration-500 border-2 border-[#ffffff] ${
          showNextSection && "rotate-[180deg]"
        }`}
        onClick={() => setShowNextSection(!showNextSection)}
      >
        <img
          src="/images/mob-up-arrow.png"
          alt=""
          className={`object-contain inline-block w-[15px] -mt-[5px] scroll-animation `}
        />
      </span>
      <div className="max-1920">
        <div className=" px-[2rem] lg:px-12 lg:py-12  xl:px-[25px] xl:mx-auto xl:py-20 2xl:py-[4rem] 3xl:py-[6rem]">
          {popupOpen && (
            <RequestCallPopup
              active={popupOpen}
              togglePopup={togglePopup}
              car={name || `${brand} ${model}` || "Car Name"}
            />
          )}
          <div className="block lg:flex lg:flex-wrap lg:justify-between">
            <div className="flex items-center mb-20 lg:mb-0 lg:w-40% xl:w-2/6 relative sm:pt-[15px]">
              <div className="hidden md:block absolute top-[-20px] left-0 w-full">
                <p className="breadcrumbs block text-black text-left font-normal">
                  <Link
                    href="/"
                    className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
                  >
                    Home
                  </Link>
                  <img
                    src="/images/breadcrumb-arrow.webp"
                    className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                    width="6"
                    height="11"
                    alt="Arrow Icon"
                  />
                  <Link
                    href="/collection"
                    className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
                  >
                    Collection
                  </Link>
                  <img
                    src="/images/breadcrumb-arrow.webp"
                    className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                    width="6"
                    height="11"
                    alt="Arrow Icon"
                  />
                  <span className="text-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem] text-[#717171]">
                    {carData?.name}
                  </span>
                </p>
              </div>
              {isCertified && (
                <div className="w-36 border-r border-stone-400 lg:border-none xl:w-32 2xl:w-36 3xl:w-[9.4rem] pr-8 xl:pr-0 mr-8 3xl:mr-[3rem]">
                  <img
                    src="/images/detail-page/detail-bbt-certified.webp"
                    alt="BBT Certified"
                    width="95"
                    height="129"
                    className="w-full object-contain"
                  />
                </div>
              )}

              <div className="w-full lg:w-auto ">
                <p
                  className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 mb-5 leading-4 lg:text-sm lg:py-1 3xl:text-lg 3xl:px-8 xl:py-1 xl:px-7 2xl:mb-5 3xl:mb-10 3xl:tracking-wide`}
                >
                  Reg.Year : {registrationYear || "N/A"} | EMI STARTS @{" "}
                  {calculateEMI()}
                </p>
                <div className="flex flex-wrap justify-between">
                  <h4 className="flex-1 pr-[2rem] leading-[1.3] xl:leading-[1.3] 2xl:leading-[1.3] 3xl:leading-[1.3] text-1.9xl tracking-tight xl:text-4xl 1xl:text-25px 2xl:text-[2.3rem] 3xl:text-5.5xl">
                    {name || `${brand} ${model}` || "Car Name"}
                  </h4>
                  {isBooked && (
                    <div>
                      <span className="bg-[#E6051F] text-white px-[10px] py-[4px] inline-block text-[1.1rem] rounded-[3rem] shadow-md shadow-[rgba(229,52,73, 0.5)] 1xl:text-[1.2rem] 3xl:text-[1.4rem] 3xl:mt-[0.7rem]">
                        Booked
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-red font-medium tracking-tight text-1.6xl mt-3 xl:text-3xl 1xl:mt-5 1xl:text-4xl 3xl:text-5xl 2xl:mt-6 3xl:mt-9">
                  {formatProductPrice({
                    price: specialPrice || price,
                    isSoldOut: carData?.isSoldOut,
                    stock: carData?.stock,
                    isBooked: isBooked,
                  })}
                  {formatDiscountedPrice({
                    discountedPrice: specialPrice,
                    specialPrice: price,
                  }) && (
                    <span className="text-lg ml-2 line-through text-gray-500">
                      {formatDiscountedPrice({
                        discountedPrice: specialPrice,
                        specialPrice: price,
                      })}
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-between lg:w-60% xl:w-4/6 xl:pl-10 3xl:pl-16">
              <div className="sm:w-60% xl:w-[63%]">
                <ul
                  className={`${styles.detailInfoUsp} flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0`}
                >
                  <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem]">
                    <img
                      src="/images/km-icon-black.webp"
                      alt="Icon"
                      width="24"
                      height="25"
                      className={`object-contain h-[1.5rem] lg:h-[1.6rem] xl:h-[2rem] 3xl:h-[2.4rem]`}
                    />
                    <p className="text-[1.15rem] mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                      Kilometers Driven
                    </p>
                    <h6
                      className={`text-[1.2rem] font-[500] tracking-[-0.5px]  1xl:text-[1.7rem] 3xl:text-[2.2rem]`}
                    >
                      {kmDriven || "N/A"}
                    </h6>
                  </li>
                  <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                    <img
                      src="/images/gas-icon-black.webp"
                      alt="Icon"
                      width="24"
                      height="25"
                      className={`object-contain h-[1.5rem] lg:h-[1.6rem] xl:h-[2rem] 3xl:h-[2.4rem]`}
                    />
                    <p className="text-[1.15rem] mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                      Fuel / Gas Type
                    </p>
                    <h6
                      className={`text-[1.2rem] font-[500] tracking-[-0.5px] 1xl:text-[1.7rem] 3xl:text-[2.2rem]`}
                    >
                      {fuelType || "N/A"}
                    </h6>
                  </li>
                  <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                    <img
                      src="/images/register-icon-black.webp"
                      alt="Icon"
                      width="24"
                      height="25"
                      className={`object-contain h-[1.5rem] lg:h-[1.6rem] xl:h-[2rem] 3xl:h-[2.4rem] `}
                    />
                    <p className="text-[1.15rem] mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                      Registration State
                    </p>
                    <h6
                      className={`text-[1.2rem] font-[500] tracking-[-0.5px] 1xl:text-[1.7rem] 3xl:text-[2.2rem]`}
                    >
                      {registrationState || "N/A"}
                    </h6>
                  </li>
                </ul>
              </div>

              {/* Call Buttons For Mobile */}
              <div className="lg:hidden flex flex-wrap justify-center items-center py-[1.5rem] px-[3rem] bg-white fixed bottom-0 left-0 w-full z-[50]">
                {isSold ? (
                  <div
                    onClick={togglePopup}
                    className="h-[4.5rem] bg-black flex-grow text-white rounded-[7px] flex justify-center items-center mr-[1rem] cursor-pointer"
                  >
                    Request a Call Back
                  </div>
                ) : (
                  <Link
                    href={`/booking?carId=${carId || carData?.id || ""}`}
                    className="h-[4.5rem] bg-black flex-grow text-white rounded-[7px] flex justify-center items-center mr-[1rem]"
                  >
                    Reserve The Car
                  </Link>
                )}
                <div
                  className="w-[4.5rem] h-[4.5rem] border border-[#F40B0B] rounded-[7px] flex justify-center items-center bg-[#F40B0B]"
                  onClick={() => setMobCallButtons(true)}
                >
                  <Image
                    src="/images/callbtn-icon.png"
                    className="object-contain w-[2.3rem] h-auto"
                    alt="Call Icon"
                    width="25"
                    height="25"
                  />
                </div>

                {/* Mobile Call Options */}
                <div
                  className={`w-full h-full fixed left-0 ${
                    mobCallButtons
                      ? "bottom-0 opacity-[1]"
                      : "bottom-[-200vh] opacity-0"
                  } min-h-[100vh] min-w-[100vw] bg-[rgba(0,0,0,0.8)] z-[20] transition-all duration-500 ease-in-out`}
                ></div>
                <div
                  className={`absolute z-[30] sc-mob-call-options ${
                    mobCallButtons ? "bottom-0" : "bottom-[-100vh]"
                  } left-0 w-full h-auto flex bg-[#f1f1f1] py-[35px] px-[25px] justify-between items-center gap-5 transition-all duration-500 ease-in-out`}
                >
                  <span
                    className="closebtn absolute top-[-15px] border border-white left-[50%] w-[30px] h-[30px] bg-[#333] flex justify-center items-center rounded-full p-[8px]"
                    onClick={() => setMobCallButtons(false)}
                  >
                    <img
                      src="/images/callbtns-closebtn.png"
                      alt="Close Button"
                      className="w-full object-contain"
                    />
                  </span>
                  <a
                    href={`https://wa.me/919999999983?text=Hello,%20Big%20Boy%20Toyz%20Team.%20I%20would%20like%20to%20know%20more%20about%20${
                      name || `${brand} ${model}` || "Car Name"
                    }`}
                    className="callbtn whatsapp flex justify-center flex-col items-center"
                  >
                    <span className="icon whatsapp">
                      <img
                        src="/images/whatsapp-btn-icon.webp"
                        alt="Whatsapp icon"
                      />
                    </span>
                    <span className="text-[1rem] font-[500] text-center inline-block mt-[10px]">
                      Whatsapp
                    </span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="callbtn mail flex justify-center flex-col items-center"
                    onClick={() => setPopupOpen(true)}
                  >
                    <span className="icon mail">
                      <img
                        src="/images/mail-callbtn-icon.png"
                        alt="Whatsapp icon"
                      />
                    </span>
                    <span className="text-[1rem] font-[500] text-center inline-block mt-[10px]">
                      Request A Call
                    </span>
                  </a>
                  <a
                    href="https://wa.me/919999999983?text=Hello%20Big%20Boy%20Toyz%20Team%20.%20I%20would%20like%20to%20connect%20for%20a%20video%20interaction."
                    className="callbtn video flex justify-center flex-col items-center"
                  >
                    <span className="icon video-call">
                      <img
                        src="/images/video-callbtn-icon.png"
                        alt="Whatsapp icon"
                      />
                    </span>
                    <span className="whatsapp text-[1rem] font-[500] text-center inline-block mt-[10px]">
                      Video Call
                    </span>
                  </a>
                  <a
                    href="tel:+919999999983"
                    className="call callbtn phone-call flex justify-center flex-col items-center"
                  >
                    <span className="icon call">
                      <img src="/images/callbtn-icon.png" alt="Whatsapp icon" />
                    </span>
                    <span className="text-[1rem] font-[500] text-center inline-block mt-[10px]">
                      Call Now
                    </span>
                  </a>
                </div>
              </div>

              {/* Call Button For Desktop */}
              <div className=" mt-12 overflow-hidden  sm:w-40% sm:mt-0 xl:w-[37%] hidden lg:block">
                {isSold ? (
                  <div className="sm:pl-5 1xl:pl-10 3xl:pl-24">
                    <p className="font-light [&_strong]:font-medium mb-4 text-center xl:text-left xl:mb-6 1xl:text-[2rem] 3xl:text-[2.2rem]">
                      Sorry This Car is Sold !! <br />{" "}
                      <strong>Still want to know more ?</strong>
                    </p>
                    <div
                      className="bg-black w-full flex justify-center cursor-pointer items-center py-7 px-10 rounded-[5px] xl:rounded-[1rem] transition-all duration-500 ease-in-out group hover:bg-white hover:border hover:border-black"
                      onClick={togglePopup}
                    >
                      <Image
                        src="/images/square-btn-call-icon.webp"
                        alt="Reserve Icon"
                        width="30"
                        height="30"
                        className=" object-contain inline-block mr-8 w-[2rem] h-auto 2xl:w-[2.5rem] 3xl:w-[2.9rem] group-hover:invert transition-all duration-500 ease-in-out"
                      />
                      <span className="text-[1.3rem] text-white font-medium text-center 1xl:text-[1.5rem] 3xl:text-[1.7rem] group-hover:text-black transition-all duration-500 ease-in-out">
                        Request a Call Back
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap justify-between md:pl-5 1xl:pl-10 3xl:pl-14">
                    <div className="hidden md:block md:w-[48%] lg:hidden xl:block xl:w-[55%]">
                      <div
                        className="border border-[#A0A0A0] rounded-[1rem] flex justify-center items-center cursor-pointer py-4 px-2 xl:py-5 2xl:py-6 3xl:py-8 group transition-all duration-500 ease-in-out hover:bg-black"
                        onClick={handleScroll}
                      >
                        <Image
                          src="/images/emi-btn-icon.webp"
                          alt="Reserve Icon"
                          width="26"
                          height="26"
                          className=" object-contain mr-8 w-[2rem] h-auto hidden lg:inline-block xl:w-[1.8rem] xl:mr-3 2xl:w-[2.2rem] 3xl:w-[2.7rem] group-hover:invert"
                        />
                        <span className="text-[1.3rem] font-[500] 1xl:text-[1.5rem] 3xl:text-[1.8rem] group-hover:text-white tracking-[-1.1px]">
                          EMI Calculator
                        </span>
                      </div>
                      <button
                        onClick={handleAddToCompare}
                        disabled={isAddingToCompare}
                        className="border border-[#A0A0A0] rounded-[1rem] flex justify-center items-center cursor-pointer py-4 px-2 xl:py-5 2xl:py-6 3xl:py-8 mt-4 3xl:mt-6 group transition-all duration-500 ease-in-out hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed w-full"
                      >
                        <Image
                          src="/images/compare-btn-icon.webp"
                          alt="Reserve Icon"
                          width="26"
                          height="26"
                          className=" object-contain mr-8 w-[2rem] h-auto hidden lg:inline-block xl:w-[1.8rem] xl:mr-3 2xl:w-[2.2rem] 3xl:w-[2.7rem] group-hover:invert"
                        />
                        <span className="text-[1.3rem] font-[500] 1xl:text-[1.5rem] 3xl:text-[1.8rem] group-hover:text-white tracking-[-1.1px]">
                          {isAddingToCompare ? "Adding..." : "Add to Compare"}
                        </span>
                      </button>
                    </div>
                    <div className="w-full md:w-[48%] lg:w-full xl:w-[40%]">
                      <Link
                        href={`/booking?carId=${carId || carData?.id || ""}`}
                        className="bg-black w-full flex justify-center items-center py-7 px-10 rounded-[5px] md:flex-col xl:rounded-[1rem] xl:h-full 3xl:py-12 transition-all duration-500 ease-in-out  group hover:bg-white hover:border hover:border-black"
                      >
                        <Image
                          src="/images/reserve-btn-icon.webp"
                          alt="Reserve Icon"
                          width="30"
                          height="30"
                          className=" object-contain inline-block mr-8 w-[2rem] h-auto md:mr-0 md:mb-6 xl:mb-4 2xl:w-[2.5rem] 3xl:w-[2.9rem] group-hover:invert transition-all duration-500 ease-in-out"
                        />
                        <span className="text-[1.3rem] text-white font-medium text-center 1xl:text-[1.5rem] 3xl:text-[1.7rem] 3xl:max-w-[6.9rem] 3xl:mx-auto group-hover:text-black transition-all duration-500 ease-in-out">
                          Reserve Car
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
