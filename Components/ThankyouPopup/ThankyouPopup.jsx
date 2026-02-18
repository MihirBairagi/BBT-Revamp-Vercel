import Image from "next/image";
import React from "react";

const ThankyouPopup = ({ togglePopup }) => {
  return (
    <>
      <div
        className={`opacity-100 flex fixed w-full h-full left-0 top-0 min-h-screen items-center justify-center transition-all duration-500 z-[100]`}
      >
        <div
          className={` bg-[#05030399] w-full h-full fixed left-0 top-0 z-10 block opacity-100 transition-all duration-500`}
          onClick={togglePopup}
        ></div>

        <div className="w-[90%] bg-black text-white popupScrollbar z-20 mx-auto relative overflow-x-hidden lg:w-[80%] lg:rounded-[1.5rem] lg:max-h-[90vh] xl:w-[70%] 2xl:max-w-[560px] shadow-xl rounded-lg">
          <div
            className=" absolute top-[2rem] right-[2rem] w-[2.6rem] h-[2.6rem] cursor-pointer"
            onClick={togglePopup}
          >
            <Image
              src="/images/bbt-certified-popup-close.webp"
              alt="Close Popup"
              className="w-full object-contain invert"
              width="29"
              height="29"
            />
          </div>
          <div className=" overflow-y-auto px-8 py-12 xl:px-12 flex items-center justify-center h-[400px] 1xl:h-[500px] text-center">
            <div>
              <img
                src="/images/submission-thank-img.png"
                alt="Thumb Icon"
                className="w-[192px] object-contain inline-block mb-[20px]"
              />
              <h4 className="font-normal xl:text-[32px]">Thank You </h4>
              <h5 className="font-normal xl:text-[25px]">
                for submitting the form!
              </h5>
              <p className="mt-2 text-[16px] text-[#dddddd]">
                Our team will review the details and contact you soon.{" "}
                <br className="hidden md:block" /> Your satisfaction is our
                priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankyouPopup;
