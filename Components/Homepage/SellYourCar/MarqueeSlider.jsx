"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./SellYourCar.module.css";

let settings = {
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
};

export const MarqueeSliderItem = () => {
  return (
    <div>
      <div
        className={`flex items-center relative px-6 3xl:px-8 ${styles.sellCarMarqueeItem}`}
      >
        <Image
          src="/images/29-minutes-clock-white.webp"
          width="20"
          height="20"
          alt="Clock Icon"
          className="w-8 object-contain mr-4 3xl:w-10"
        />
        <h3 className="text-white text-25px font-medium uppercase 3xl:text-6xl">Minutes</h3>
      </div>
    </div>
  );
};

const MarqueeSlider = () => {
  return (
    <div className={`relative ${styles.sellCarMarquee}`}>
      <Slider {...settings}>
        <MarqueeSliderItem />
        <MarqueeSliderItem />
        <MarqueeSliderItem />
        <MarqueeSliderItem />
        <MarqueeSliderItem />
        <MarqueeSliderItem />
      </Slider>
    </div>
  );
};

export default MarqueeSlider;
