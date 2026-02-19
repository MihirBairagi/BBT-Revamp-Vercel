"use client";
import React, { useState } from "react";
import Link from "next/link";

const BottomSheetMenu = ({ isOpen, onClose }) => {
  const [openProjects, setOpenProjects] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 w-full h-[100%] bg-black text-white z-100
        transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-12 right-12 w-12 h-12 rounded-full flex items-center justify-center text-[3.8rem]"
        >
          ✕
        </button>

        {/* Content */}
        <div className="px-8 pt-20 pb-10">
          {/* Logo */}
          <h2 className="text-[7.3rem] leading-none font-normal">
            BBT <br /> REALTY
          </h2>
          <p className="text-[#737373] text-[1.6rem] mt-3">The Future of Luxury Living</p>

          <div className="border-t border-[#eaebf069] mt-12">
            {/* PROJECTS */}
            <button
              onClick={() => setOpenProjects(!openProjects)}
              className="w-full flex items-center justify-between py-6 border-b border-[#eaebf069]"
            >
              <span className="text-[2.1rem] tracking-wide">PROJECTS</span>
              <span className="text-5xl font-thin">{openProjects ? "−" : "+"}</span>
            </button>

            {/* Sub Menu */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openProjects ? "max-h-72" : "max-h-0"
              }`}
            >
              <ul className="pl-4 py-2 text-[#c8c7c4]">
                <li className="py-4 ">
                    <Link href="/realty/bbt-pavilion-vadodara-detail-page" onClick={onClose}  className="text-[1.6rem]" >Pavilion <span className="uppercase" > - Launching In April</span></Link>
                </li>
                <li className="py-4 ">
                    <Link href=""  className="text-[1.6rem]" >BBT ONE <span className="uppercase" > - Coming Soon</span></Link>
                </li>
                <li className="py-4 ">
                    <Link href=""  className="text-[1.6rem]" >The Royale Pavilion <span className="uppercase" > - Coming Soon</span></Link>
                </li>
                <li className="py-4 ">
                    <Link href=""  className="text-[1.6rem]" >Sora <span className="uppercase" > - Coming Soon</span></Link>
                </li>
              </ul>
            </div>

            {/* ABOUT */}
            <div className="py-6 border-b border-[#eaebf069]">
                <Link href="/realty/about-us" onClick={onClose} className="text-[2.1rem]">
                    ABOUT US
                </Link>
            </div>

            {/* FAQ */}
            <div className="py-6 border-b border-[#eaebf069]">
                <Link href="/realty/faq" onClick={onClose} className="text-[2.1rem]">
                    FAQ
                </Link>
            </div>

            {/* CONTACT */}
            <div className="py-6 border-b border-[#eaebf069]">
                <Link href="/realty/contact-us" onClick={onClose} className="text-[2.1rem]">
                    CONTACT US
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomSheetMenu;
