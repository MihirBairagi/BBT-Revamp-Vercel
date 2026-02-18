"use client";
import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
           in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);
  return (
    <div
      className={`fixed bottom-[9rem] lg:bottom-[5rem] right-[3rem] w-[4rem] h-[4rem] rounded-[0.5rem] bg-[#EE3024] justify-center items-center p-[1rem] lg:w-[5rem] lg:h-[5rem] lg:p-[1.3rem] 3xl:w-[6.3rem] 3xl:h-[6.3rem] 3xl:p-[1.5rem] 3xl:bottom-[6rem] 3xl:right-[4rem] transition-all duration-500 ease-in-out z-50 cursor-pointer hover:bg-[#e1594d] back-to-top ${
        visible ? "flex opacity-100" : "hidden opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <img
        src="/realty/images/back-to-top.webp"
        alt="Arrow Icon"
        className="object-contain w-full h-auto"
        width="27"
        height="32"
      />
    </div>
  );
};

export default BackToTop;
