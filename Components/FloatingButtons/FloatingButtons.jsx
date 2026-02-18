"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FilterPopup from "../FilterPopup/FilterPopup";

const FloatingButtons = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const togglePopup = () => {
    setFilterOpen(!filterOpen);
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      {filterOpen && (
        <FilterPopup active={filterOpen} togglePopup={togglePopup} />
      )}
      <div
        className={`floatingBtnWrapper fixed left-0 transition-all duration-500  w-full z-20 sm:hidden ${
          visible ? "bottom-[-2px] opacity-100" : "bottom-[-100vh] opacity-0"
        }`}
      >
        <div className="flex">
          <div
            className="w-3/6 bg-white py-[1.8rem] px-2"
            onClick={togglePopup}
          >
            <div className="flex items-center justify-center">
              <Image
                src="/images/bottom-filter-icon.webp"
                alt="Filter Icon"
                width="22"
                height="11"
                className="object-contain w-9"
              />
              <span className="font-normal text-zinc-700 ml-5 text-3xl tracking-[-1px]">
                Search Cars
              </span>
            </div>
          </div>
          <div className="w-3/6 bg-neutral-800 py-[2rem] px-2">
            <a
              href="tel:+919999999983"
              className="flex items-center justify-center"
            >
              <Image
                src="/images/bottom-call-icon.webp"
                alt="Filter Icon"
                width="18"
                height="18"
                className="object-contain w-7"
              />
              <span className="font-normal text-white ml-5 text-3xl tracking-[-1px]">
                Call BigBoyToyz
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;
