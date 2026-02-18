"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";
import Link from "next/link";
import styles from "./SpecificationSection.module.css";
import { useUIAssets } from "../../../app/lib/hooks/useUIAssets";
import { formatProductPrice, formatDiscountedPrice } from "../../../app/lib/utils/productUtils";

const BasicDetails = ({ 
  year = '',
  kmDriven = '',
  fuelType = '',
  registrationState = '',
  brand = '',
  booked = false,
  price = 0,
  model = '',
  isSoldOut = false,
  stock = null
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const { assets } = useUIAssets();
  
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleScroll = () => {
    const section = document.getElementById("singleEmiCalculator");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  // Format the km driven with commas for thousands
  const formattedKm = kmDriven ? 
    parseFloat(kmDriven).toLocaleString('en-IN') + ' km' : 
    'N/A'; // Default for display
    
  // Format price with Indian number format
  const formattedPrice = formatProductPrice({
    price: price,
    isSoldOut: isSoldOut,
    stock: stock,
    isBooked: booked
  });
    
  // Format the car name
  const carTitle = brand ? (model ? `${brand} ${model}` : brand) : 'Luxury Car';
  
  // Calculate mock EMI (just a simple calculation for display)
  const emiAmount = Math.round(parseFloat(price || 0) * 0.0124); // Just a simple mock calculation
  const formattedEmi = emiAmount.toLocaleString('en-IN');

  return (
    <div className="bg-white z-[20] border-b border-gray-200">
      <div className="max-1920">
        <div className="px-[2rem] py-10 lg:px-12 lg:py-12 xl:px-0 xl:w-[92%] xl:mx-auto xl:py-14 2xl:py-16">
          {popupOpen && (
            <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
          )}
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex items-start mb-8 lg:mb-0 lg:w-2/5">
              <div className="w-32 lg:w-36 flex-shrink-0">
                <img
                  src={"/images/bbt-certified-icon.webp" || "/images/detail-page/detail-bbt-certified.webp"}
                  alt="BBT Certified"
                  width="95"
                  height="129"
                  className="w-full object-contain"
                />
              </div>
              <div className="pl-6 lg:pl-8">
                <p className="inline-block bg-black text-white rounded-2xl text-sm px-5 py-2 mb-4">
                  Reg.Year : {year || 'N/A'} {emiAmount > 0 && `| EMI STARTS @ ${formattedEmi}`}
                </p>
                <h2 className="text-2xl lg:text-4xl font-bold mb-3">{carTitle}</h2>
                <p className="text-red-600 text-2xl lg:text-3xl font-semibold">{formattedPrice}</p>
              </div>
            </div>

            <div className="lg:w-3/5 xl:pl-8">
              <div className="w-full">
                <ul className="flex flex-wrap">
                  <li className="w-1/3 pr-2">
                    <div className="flex flex-col items-center">
                      <img
                        src={assets.kmIcon || "/images/km-icon-black.webp"}
                        alt="Kilometers Icon"
                        className="w-6 h-6 mb-2"
                      />
                      <p className="text-sm text-gray-600 mb-1 text-center">Kilometers Driven</p>
                      <h6 className="text-lg font-semibold text-center">{formattedKm}</h6>
                    </div>
                  </li>
                  <li className="w-1/3 px-2">
                    <div className="flex flex-col items-center">
                      <img
                        src={assets.fuelIcon || "/images/gas-icon-black.webp"}
                        alt="Fuel Type Icon"
                        className="w-6 h-6 mb-2"
                      />
                      <p className="text-sm text-gray-600 mb-1 text-center">Fuel / Gas Type</p>
                      <h6 className="text-lg font-semibold text-center">{fuelType || 'N/A'}</h6>
                    </div>
                  </li>
                  <li className="w-1/3 pl-2">
                    <div className="flex flex-col items-center">
                      <img
                        src={"/images/register-icon-black.webp"}
                        alt="Registration Icon"
                        className="w-6 h-6 mb-2"
                      />
                      <p className="text-sm text-gray-600 mb-1 text-center">Registration State</p>
                      <h6 className="text-lg font-semibold text-center">{registrationState || 'N/A'}</h6>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex justify-end">
                <div className="hidden lg:flex space-x-4">
                  <button 
                    onClick={handleScroll}
                    className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <span className="w-5 h-5">
                      <Image 
                        src="/images/emi-btn-icon.webp"
                        alt="EMI Calculator Icon"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span className="font-medium">EMI Calculator</span>
                  </button>
                  
                  <Link
                    href="/compare-cars"
                    className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <span className="w-5 h-5">
                      <Image 
                        src="/images/compare-btn-icon.webp"
                        alt="Compare Icon"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span className="font-medium">Compare Car</span>
                  </Link>
                  
                  <Link
                    href="/booking"
                    className="flex items-center space-x-2 bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition-colors"
                  >
                    <span className="w-5 h-5">
                      <Image 
                        src="/images/reserve-btn-icon.webp"
                        alt="Reserve Icon"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span className="font-medium">Reserve Car</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile fixed bottom buttons */}
      <div className="lg:hidden flex justify-between items-center py-4 px-4 bg-white fixed bottom-0 left-0 w-full z-50 border-t border-gray-200">
        <button className="bg-black text-white rounded-md py-3 px-5 flex-grow mr-3">
          Reserve The Car
        </button>
        <button className="bg-white border border-gray-300 rounded-md p-3">
          <Image
            src={'/images/square-btn-call-icon.webp' || "/images/square-btn-call-icon.webp"}
            alt="Call Icon"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default BasicDetails;
