"use client";
import React from "react";
import Slider from "react-slick";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function AmenitiesSlider({ data }) {
  const isMobile = useBreakpoint(1024);

  const shouldInitSlider = isMobile || data.length >= 4;

  const proDeskSettings = {
    slidesToShow: 4,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    nextArrow: <ProDeskNextArrow />,
    prevArrow: <ProDeskPrevArrow />,
  };

  const proMobSettings = {
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "15%",
  };

  function ProDeskNextArrow(props) {
    const { onClick, className } = props;
    return (
      <div className={`pro-desk-slider-arrow ${className}`} onClick={onClick}>
        <img src="/realty/images/dp-pro-slide-arr.png" alt="" />
      </div>
    );
  }

  function ProDeskPrevArrow(props) {
    const { onClick, className } = props;
    return (
      <div className={`pro-desk-slider-arrow ${className}`} onClick={onClick}>
        <img src="/realty/images/dp-pro-slide-arr.png" alt="" />
      </div>
    );
  }

  const SliderWrapper = ({ children }) =>
    shouldInitSlider ? (
      <Slider
        key={isMobile ? "mobile" : "desktop"}
        {...(isMobile ? proMobSettings : proDeskSettings)}
        className={`mt-[3rem] ${
          isMobile
            ? "mb-[5rem] mx-[-3rem]"
            : "xl:px-[2.5rem] 2xl:px-[3rem]"
        }`}
      >
        {children}
      </Slider>
    ) : (
      <div className="mt-[3rem] grid grid-cols-4 xl:px-[2.5rem] 2xl:px-[3rem]">
        {children}
      </div>
    );

  return (
    <SliderWrapper>
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-[1.5rem]">
          <div className="relative p-[0.5rem] lg:p-[1rem]">
            <img className="w-full" src={item.img} alt={item.title} />
            <div className="absolute inset-0 flex items-end justify-center p-[3rem] text-white">
              <p className="max-[1023px]:text-[1.6rem] f-22 text-center">
                {item.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </SliderWrapper>
  );
}
