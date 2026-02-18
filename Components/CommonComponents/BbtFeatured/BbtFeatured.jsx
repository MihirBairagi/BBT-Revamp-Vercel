"use client";

import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedItem from "./FeaturedItem";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "BBT World",
    thumbnail: "/images/bbt-world-item-1.webp",
    url: "#",
  },
  {
    title: "Wallpapers",
    thumbnail: "/images/bbt-world-item-2.webp",
    url: "#",
  },
  {
    title: "BBT World",
    thumbnail: "/images/bbt-world-item-1.webp",
    url: "#",
  },
];

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/hp-service-slider-arrow.webp"
        alt="Next Slide"
        width="70"
        height="225"
        className="invert"
      />
    </div>
  );
}

const BbtFeatured = () => {
  const [progressWidth, setProgressWidth] = useState(25);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: "",
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "10%",
    afterChange: (index) => {
      setProgressWidth((100 / data.length) * (index + 1));
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "16%",
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white py-20 lg:py-40 xl:py-48 2xl:py-56 3xl:py-72">
      <div className="max-1920">
        <div className="pl-8 md:pl-20 lg:flex lg:justify-between items-center lg:pl-40 xl:pl-48 1xl:pl-52 2xl:pl-56 3xl:pl-64">
          <div
            className="section-heading md:pl-8 lg:w-30% lg:pl-0"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Image
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="hidden lg:inline-block mb-14 object-contain lg:w-32 invert 3xl:w-44"
            />
            <h2 className="mb-16 text-black tracking-tighter leading-tight 2xl:mb-7">
              Jump into <br /> BBT World
            </h2>
            <p className="hidden lg:block text-black leading-10 text-lg 1xl:leading-8 1xl:text-xl 2xl:text-1xl 2xl:tracking-normal 2xl:leading-relaxed 3xl:text-1.6xl 3xl:leading-loose">
              Explore jaw-dropping supercar fun, and <br /> so much more!
            </p>
          </div>
          <div
            className="hp-featured-slider lg:w-70%"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Slider {...settings}>
              {data.map((item, index) => (
                <FeaturedItem data={item} key={index} />
              ))}
            </Slider>
            <div className="container lg:w-full lg:p-0 xl:pr-28">
              <div
                className="progress mt-16 2xl:mt-32 3xl:mt-40"
                style={{
                  backgroundColor: "rgb(0 0 0 / 10%)",
                  height: "2px",
                }}
              >
                <div
                  style={{
                    width: `${progressWidth}%`,
                    backgroundColor: "rgba(0, 0, 0, 1)",
                    height: "100%",
                  }}
                  className="progressFill"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BbtFeatured;
