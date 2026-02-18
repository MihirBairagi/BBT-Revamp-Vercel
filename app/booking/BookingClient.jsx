"use client";

import React, { useEffect, useState } from "react";
import { useProduct } from "../lib/hooks/useProducts";
import { productsAPI } from "../lib/services/api";
import BookingCar from "../../Components/Booking/BookingCar";
import BookingProcess from "../../Components/Booking/BookingProcess";

// Helper to map API response to the structure expected by BookingCar/CommonInfoUsp
const mapProductToCarData = (apiResponse) => {
  if (!apiResponse || !apiResponse.success) return null;

  const p = apiResponse.product || {};
  const { productImages } = apiResponse;
  const brandName = apiResponse.brand?.bname || p.brand?.name || "";
  const modelName = apiResponse.brandModel?.modelname || p.model?.name || "";

  // Prefer images array if available, else fallback to thumbnail
  const primaryImage = p.prolistimage ? `https://cdn.bigboytoyz.com/new-version/products/${p.prolistimage}` : Array.isArray(productImages) && productImages.length > 0 ? `https://cdn.bigboytoyz.com/new-version/products/product/${productImages[0].pgalimage}` : p.thumbnail;

  return {
    _id: p.id || p._id,
    title: p.proname || p.title || p.name || `${brandName} ${modelName}`,
    brand: brandName,
    model: modelName,
    price: (parseFloat(p.price || p.proprice || 0) || 0).toLocaleString("en-IN"),
    registrationYear: p.registrationYear || p.yearOfRegistration || p.year || "",
    registrationState: p.registrationState || p.regstate || "",
    kmDriven: p.kmDriven || p.kmdriven || "",
    fuelType: p.fuelType || p.fueltype || "",
    thumbnail: primaryImage,
    isBooked: p.isBooked || p.booked === "yes" || p.booked === "1" || false,
  };
};

const usps = [
  {
    title: `10000+ Satisfied <b>Customers</b>`,
    icon: "/images/booking/usp-icon-1.webp",
  },
  {
    title: `151 Quality  <b>Checkpoints</b>`,
    icon: "/images/booking/usp-icon-2.webp",
  },
  {
    title: `30 Luxury  <b>Car Brands</b>`,
    icon: "/images/booking/usp-icon-3.webp",
  },
  {
    title: `100% Payment  <b>Secured</b>`,
    icon: "/images/booking/usp-icon-2.webp",
  },
];

const BookingClient = ({ initialCarData, carId }) => {
  const [isClientMounted, setIsClientMounted] = useState(false);

  // Use SWR for real-time updates with initial data
  const { data: swrData, error, isLoading, isValidating } = useProduct(carId, {
    initialData: carId ? { product: initialCarData } : null,
    swrOptions: {
      dedupingInterval: 10000, // 10 seconds for single product
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateIfStale: false, // Don't revalidate if stale on mount
      revalidateOnMount: false, // Don't revalidate on mount since we have initial data
    }
  });

  // Use initial data for SSR, then switch to SWR data when client is mounted
  // The useProduct hook returns { product, gallery, ... } structure
  const currentCarData = isClientMounted && swrData?.product ? mapProductToCarData(swrData) : initialCarData;

  useEffect(() => {
    setIsClientMounted(true);
  }, []);

  return (
    <>
      <section className="bg-[#F4F4F1] py-[6rem] xl:pt-[8rem] xl:pb-[12rem]">
        <div className="max-1920">
          <div className="container">
            <div className="flex flex-wrap justify-between max-w-[450px] mx-auto lg:max-w-none">
              <div className="w-full lg:w-[35%] xl:w-[31%]">
                <BookingCar carData={currentCarData} />
              </div>
              <div className="w-full pt-[5rem] lg:w-[55%] lg:pt-0 xl:w-[64%]">
                <div>
                  <h2 className="font-extralight text-center lg:text-left [&>b]:font-normal text-[2.5rem] tracking-[-2px] xl:text-[3.8rem] ] 1xl:text-[4.5rem] 2xl:text-[4.9rem] 3xl:text-[5.5rem] mb-[0.5rem] xl:mb-0">
                    Reserve Your <b>Own Luxury</b>
                  </h2>
                  <p className="text-[1.5rem] text-center lg:text-left xl:text-[2rem] 1xl:text-[2.3rem] 2xl:text-[2.5rem] 3xl:text-[3rem] font-light [&>br]:hidden md:[&>br]:block text-[#6E6E6E]">
                    Brand Trusted by the Elites
                  </p>

                  {/* USP */}
                  <ul className="grid grid-cols-2 gap-x-[1rem] gap-y-[2rem] mt-[3rem] xl:grid-cols-4 3xl:mt-[5rem]">
                    {usps.map((usp, index) => (
                      <li className="flex flex-wrap items-center" key={index}>
                        <div className="bg-white rounded-full w-[4.5rem] h-[4.5rem] p-[1rem] 2xl:p-[1.3rem] flex justify-center items-center 1xl:w-[5rem] 1xl:h-[5rem] 2xl:w-[5.7rem] 2xl:h-[5.7rem] 3xl:w-[6.9rem] 3xl:h-[6.9rem]">
                          <img
                            src={usp.icon}
                            alt="USP Icon"
                            className="w-full h-auto object-contain max-h-[2rem] 1xl:max-h-[2.4rem] 2xl:max-h-[2.7rem] 3xl:max-h-[3.2rem]"
                          />
                        </div>
                        <h4
                          className="flex-[1] pl-[1rem] text-[1.4rem] xl:text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[2rem] font-light [&>b]:font-medium xl:[&>b]:block 2xl:tracking-tighter"
                          dangerouslySetInnerHTML={{ __html: usp.title }}
                        ></h4>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-[5rem] 3xl:mt-[8rem]">
                  <BookingProcess carData={currentCarData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Debug info for development */}
      {process.env.NEXT_PUBLIC_DEBUG === "true" && isClientMounted && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
          <div>SWR: {isValidating ? "Validating" : "Stale"}</div>
          <div>Last Update: {new Date().toLocaleTimeString()}</div>
        </div>
      )}

      {/* Subtle loading indicator for background updates */}
      {isClientMounted && isValidating && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm shadow-lg z-50">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Updating...
          </div>
        </div>
      )}
    </>
  );
};

export default BookingClient; 