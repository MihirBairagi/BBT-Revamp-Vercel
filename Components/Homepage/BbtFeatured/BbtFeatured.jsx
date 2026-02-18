"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

// Fallback/static data for BBT World content (not car products)
const bbtWorldData = [
  {
    title: "cars.co.in",
    thumbnail: "/images/cars-co-in-thumb.webp",
    url: "https://cars.co.in/",
    type: "content",
    newTab:true
  },
  {
    title: "Wallpapers",
    thumbnail: "/images/bbt-world-item-2.webp",
    url: "/wallpapers",
    type: "content",
  },
  {
    title: "Why Us",
    thumbnail: "/images/bbt-world-item-3.webp",
    url: "/about-us",
    type: "content",
  },
];

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <img
        src="/images/hp-service-slider-arrow.webp"
        alt="Next Slide"
        width="70"
        height="225"
        className="invert"
      />
    </div>
  );
}

const FeaturedItem = ({ item }) => {

  return (
    <Link
      href={item.url}
      target={item?.newTab && '_blank'}
      className="relative block group mr-7 md:mx-10 lg:ml-0 lg:mr-16 xl:mr-20 3xl:mr-28 common-car-item rounded-[3rem] xl:my-5 1xl:rounded-[4rem] 2xl:rounded-[5rem] overflow-hidden"
    >
      <div className="h-full">
        <img
          src={item.thumbnail}
          alt={item.title}
          width="450"
          height="587"
          className="block w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-500 ease-in-out rounded-[3rem] 1xl:rounded-[4rem] 2xl:rounded-[5rem]"
        />
      </div>
      <h5 className="text-white absolute bottom-14 left-14 xl:text-[2.5rem] xl:left-[4.5rem] 2xl:text-4.5xl 3xl:text-[3.5rem] 3xl:bottom-24 3xl:left-24">
        {item.title}
      </h5>
      <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center p-1 absolute top-12 right-12 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 3xl:top-16 3xl:right-16 group-hover:bg-black transition-all duration-500 ease-in">
        <img
          src="/images/showroom-location-arrow.webp"
          className="object-contain w-4 2xl:w-6 3xl:w-8 group-hover:invert transition-all duration-500 ease-in"
          width="20"
          height="20"
          alt="Arrow Icon"
        />
      </span>
    </Link>
  );
};

const BbtFeatured = ({ featuredProducts = [] }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  // Combine all items for the slider
  const allItems = [...bbtWorldData];

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
      setProgressWidth((100 / allItems.length) * (index + 1));
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

  return (
    <section className="bg-white py-20 lg:py-40 xl:py-48 2xl:py-56 3xl:py-72">
      <div className="max-1920">
        <div className="pl-8 md:pl-20 lg:flex lg:justify-between items-center lg:pl-40 xl:pl-48 1xl:pl-52 2xl:pl-56 3xl:pl-64">
          <div className="section-heading md:pl-8 lg:w-30% lg:pl-0">
            <img
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

          {/* Featured Slider */}
          <div className="hp-featured-slider lg:w-70% [&_.slick-track]:flex [&_.slick-slide]:h-[inherit]">
            
              <>
                <Slider {...settings}>
                  {allItems.map((item, index) => (
                    <FeaturedItem item={item} key={index} />
                  ))}
                </Slider>
                <div className="lg:w-full lg:p-0 xl:pr-28 pr-[2rem]">
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
              </>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BbtFeatured;
