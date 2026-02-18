import React from "react";
import Marquee from "react-fast-marquee";

const TopMarquee = () => {
  return (
    <section className="overflow-hidden bg-black py-[10px]">
      <Marquee>
        <span className="text-[1.6rem] font-normal text-[#9E9E9E] px-[2.5rem] border-l border-l-[#9E9E9E] inline-flex items-center">
          Big Boy Toyz ( Asia's Biggest Preowned Luxury Car brand ) Now in
          Africa
        </span>
        <span className="text-[1.6rem] font-normal text-[#9E9E9E] px-[2.5rem] border-l border-l-[#9E9E9E] inline-flex items-center">Contact Us at (+91) 9999999187</span>
        <span className="text-[1.6rem] font-normal text-[#9E9E9E] px-[2.5rem] border-l border-l-[#9E9E9E] inline-flex items-center">africa@bigboytoyz.com</span>
        <span className="text-[1.6rem] font-normal text-[#9E9E9E] px-[2.5rem] border-l border-l-[#9E9E9E] inline-flex items-center">
          Big Boy Toyz ( Asia's Biggest Preowned Luxury Car brand ) Now in
          Africa
        </span>
        <span className="text-[1.6rem] font-normal text-[#9E9E9E] px-[2.5rem] border-l border-l-[#9E9E9E] inline-flex items-center">Contact Us at (+91) 9999999187</span>
        <span className="text-[1.6rem] font-normal text-[#9E9E9E] px-[2.5rem] border-l border-l-[#9E9E9E] inline-flex items-center">africa@bigboytoyz.com</span>
      </Marquee>
    </section>
  );
};

export default TopMarquee;
