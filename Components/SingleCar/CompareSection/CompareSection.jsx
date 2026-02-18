"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonInfoUsp from "../../CommonComponents/CommonInfoUsp/CommonInfoUsp";
import { useRouter } from "next/navigation";
import { useCompareContextOptional } from "../../../app/lib/contexts/CompareContext";
import { formatProductPrice, formatDiscountedPrice } from "../../../app/lib/utils/productUtils";

const CompareSection = ({ carData }) => {
  const [isAddingToCompare, setIsAddingToCompare] = useState(false);
  const router = useRouter();
  const compareContext = useCompareContextOptional();

  useEffect(() => {
    AOS.init();
  }, []);

  // Format price in Indian format
  const formatPrice = (value) => {
    if (!value) return '0';
    return parseFloat(value).toLocaleString('en-IN');
  };

  const handleAddToCompare = () => {
    if (!carData) {
      compareContext?.showToast('Car data not available for comparison', 'error');
      return;
    }

    if (!compareContext) {
      console.error('Compare context not available');
      return;
    }

    setIsAddingToCompare(true);
    
    try {
      // Create a car object compatible with the comparison system
      const carForComparison = {
        id: carData.id || carData._id || carData.mongodb_id,
        name: carData.name || carData.title,
        title: carData.name || carData.title,
        price: parseFloat(carData.price || carData.specialPrice || 0),
        images: carData?.images || [],
        thumbnail: carData?.images?.[0]?.url || carData?.prolistimage || '',
        postUrl: carData?.postUrl || carData?.url || '',
        brand: {
          id: carData?.brand?.id || '',
          name: carData?.brand?.name || carData?.brandName || '',
        },
        category: carData?.category || '',
        stock: carData?.stock,
        isBooked: carData?.isBooked,
      };
      
      // Use the context to add to comparison
      const result = compareContext.addToCompare(carForComparison);
      
      if (result.success) {
        // Success is handled by the context with toast notification
        console.log('Car added to comparison successfully');
      } else {
        // Error is handled by the context with toast notification
        console.log('Failed to add car to comparison:', result.message);
      }
      
    } catch (error) {
      console.error('Error adding car to comparison:', error);
      compareContext.showToast('Error adding car to comparison. Please try again.', 'error');
    } finally {
      setIsAddingToCompare(false);
    }
  };

  // Use actual car data or fallback to placeholder
  const displayCarData = {
    name: carData?.name || "Rolls-Royce Ghost Series II",
    price: carData?.price || "49900000",
    specialPrice: carData?.specialPrice || null,
    registrationYear: carData?.yearOfRegistration || "2022",
    kmDriven: carData?.kmDriven || "N/A",
    fuelType: carData?.fuelType || "N/A",
    registrationState: carData?.registrationState || "N/A",
    image: carData?.images && carData.images.length > 0 ? carData.images[0].url : "/images/detail-page/detail-compare-car-thumb.webp"
  };

  return (
    <section
      className="py-24 lg:py-36 xl:py-44 2xl:py-52 3xl:py-64"
      style={{
        background:
          "linear-gradient(180deg, #F4F4F1 -13.45%, rgba(244, 244, 241, 0.5) 137.55%)",
      }}
    >
      <div className="max-1920">
        <div className="container">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div
              className="flex justify-between items-center mb-10 sm:block sm:w-40% sm:pr-20 md:w-2/6 md:pr-10 xl:pr-28 lg:w-30% lg:pr-20"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Image
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="hidden invert sm:inline-block h-auto sm:w-24 mb-8 object-contain lg:w-32 1xl:w-36 3xl:w-[12.3rem] 3xl:mb-12"
              />
              <span className="h-px w-auto grow bg-black sm:hidden"></span>
              <h2 className=" pl-8 sm:pl-0 sm:mb-3 md:tracking-tight lg:text-4.5xl 1xl:text-5.5xl 3xl:text-7xl 3xl:mb-10">
                Compare Cars
              </h2>
              <p className="hidden sm:block text-lg leading-8 lg:text-base lg:leading-8 1xl:text-xl  3xl:text-[1.6rem] 3xl:leading-[1.7] 1xl:mt-5 [&>br]:hidden lg:[&>br]:block">
                Get your dream luxury car in 4 easy steps at Big <br /> Boy
                Toyz, India's trusted used car portal.
              </p>
            </div>
            <div
              className="w-full sm:w-60% md:w-4/6  lg:w-70% 1xl:pl-8"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="w-full bg-white px-5 py-8 rounded-lg shadow-compare-card md:px-0 md:py-0 md:rounded-none">
                <ul>
                  <li className="flex justify-between items-center">
                    <div className="w-56 md:w-2/5 h-full lg:w-49%">
                      <Image
                        src={displayCarData.image}
                        alt="Car Image"
                        width="536"
                        height="390"
                        className=" object-contain inline-block rounded-lg md:min-h-16 md:rounded-none md:h-full md:object-cover lg:min-h-24"
                      />
                    </div>

                    <div className="w-3/6 md:py-8 md:px-6 md:w-3/5 lg:w-51% lg:px-16 lg:py-10 1xl:px-24 3xl:px-32">
                      <p
                        className={`hidden lg:inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-lg 3xl:px-8`}
                      >
                        Reg.Year : {displayCarData.registrationYear}
                      </p>
                      <h5 className="font-medium text-2xl lg:mt-4 1xl:mt-5 1xl:text-3xl 3xl:text-4.5xl 3xl:mt-7">
                        {displayCarData.name}
                      </h5>
                      <div className="flex justify-between items-center mt-4 lg:mt-2 1xl:mt-3 3xl:mt-7">
                        <p className="flex items-center font-medium text-lg lg:text-2xl 1xl:text-3xl 3xl:text-4xl xl:tracking-tight">
                          {formatProductPrice({
                            price: displayCarData.price,
                            isSoldOut: carData?.isSoldOut,
                            stock: carData?.stock,
                            isBooked: carData?.isBooked
                          })}
                        </p>
                        <p className="text-zinc-500 text-base lg:hidden">
                          R Year :{" "}
                          <strong className="font-medium text-zinc-800">
                            {displayCarData.registrationYear}
                          </strong>
                        </p>
                      </div>
                      <div className="hidden lg:block lg:mt-8">
                        <ul className="flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0">
                          <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem]">
                            <img
                              src="/images/km-icon-black.webp"
                              alt="Icon"
                              width="24"
                              height="25"
                              className="object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem]"
                            />
                            <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                              Kilometers Driven
                            </p>
                            <h6
                              className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                            >
                              {displayCarData.kmDriven}
                            </h6>
                          </li>
                          <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                            <img
                              src="/images/gas-icon-black.webp"
                              alt="Icon"
                              width="24"
                              height="25"
                              className={`object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem] `}
                            />
                            <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                              Fuel / Gas Type
                            </p>
                            <h6
                              className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                            >
                              {displayCarData.fuelType}
                            </h6>
                          </li>
                          <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                            <img
                              src="/images/register-icon-black.webp"
                              alt="Icon"
                              width="24"
                              height="25"
                              className={`object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem] `}
                            />
                            <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                              Registration State
                            </p>
                            <h6
                              className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                            >
                              {displayCarData.registrationState}
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-10 hidden md:block lg:mt-6 1xl:mt-9">
                        <button 
                          onClick={handleAddToCompare}
                          disabled={isAddingToCompare}
                          className="addBtn lg:py-4 lg:justify-between 3xl:py-6 3xl:px-[3rem] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span className="uppercase font-medium lg:text-lg lg:capitalize 1xl:text-lg 3xl:text-1xl">
                            {isAddingToCompare ? 'Adding...' : 'Add to Compare'}
                          </span>
                          <Image
                            src="/images/detail-page/detail-compare-plus-icon.webp"
                            width="13"
                            height="13"
                            alt="Plus Icon"
                            className="object-contain w-5 ml-8 lg:w-4 1xl:w-5 3xl:w-[1.3rem]"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mt-10 md:hidden">
                  <button 
                    onClick={handleAddToCompare}
                    disabled={isAddingToCompare}
                    className="addBtn disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="uppercase font-medium">{isAddingToCompare ? 'Adding...' : 'Add to Compare'}</span>
                    <Image
                      src="/images/detail-page/detail-compare-plus-icon.webp"
                      width="13"
                      height="13"
                      alt="Plus Icon"
                      className="object-contain w-5 ml-8"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
