"use client";
import React from "react";

const ThankyouPopup = ({ togglePopup }) => {
  return (
    <div
      className="opacity-100 flex fixed w-full h-full left-0 top-0 min-h-screen items-center justify-center transition-all duration-500 z-[100]"
    >
      <div
        className="bg-[#05030399] w-full h-full fixed left-0 top-0 z-10 block opacity-100 transition-all duration-500"
        onClick={togglePopup}
      ></div>

      <div className="w-[90%] bg-black text-white z-20 mx-auto relative overflow-x-hidden lg:w-[80%] lg:rounded-[1.5rem] lg:max-h-[90vh] xl:w-[70%] 2xl:max-w-[560px] shadow-xl rounded-lg">
        <div
          className="absolute top-[2rem] right-[2rem] w-[2.6rem] h-[2.6rem] cursor-pointer hover:opacity-70 transition-opacity"
          onClick={togglePopup}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        
        <div className="overflow-y-auto px-8 py-12 xl:px-12 flex items-center justify-center h-[400px] 1xl:h-[500px] text-center">
          <div>
            {/* Success Icon */}
            <div className="w-[120px] h-[120px] mx-auto mb-[30px] relative">
              <svg
                className="w-full h-full"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="60" cy="60" r="58" stroke="#ffffff" strokeWidth="2" fill="none" />
                <path
                  d="M35 60L52 77L85 44"
                  stroke="#ffffff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            
            <h4 className="font-normal text-[2.4rem] xl:text-[32px] mb-2">Thank You</h4>
            <h5 className="font-light text-[1.8rem] xl:text-[25px] text-gray-300">
              for submitting the form!
            </h5>
            <p className="mt-4 text-[1.4rem] xl:text-[16px] text-[#bbbbbb] max-w-[380px] mx-auto leading-relaxed">
              Our realty team will review the details and contact you soon.
              <br className="hidden md:block" />
              Your satisfaction is our priority.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-[1.2rem] text-gray-400 mb-2">For immediate assistance</p>
              <a
                href="tel:+919999999030"
                className="text-[1.6rem] text-white hover:text-gray-300 transition-colors"
              >
                +91 99999 990 30
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPopup;

