"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Supercar Wallpapers",
    image: "/images/compare-cars/card-img-1.webp",
    url: "/wallpapers",
  },
  {
    title: "Latest Blogs",
    image: "/images/compare-cars/card-img-2.webp",
    url: "/blogs",
  },
  {
    title: "Our Showrooms",
    image: "/images/compare-cars/card-img-3.webp",
    url: "/showrooms",
  },
  {
    title: "Meet The Team",
    image: "/images/compare-cars/card-img-4.webp",
    url: "/team",
  },
];

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Next Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Previous Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  arrows: true,
//   autoplay: true,
//   autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "4%",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "7%",
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "7%",
      },
    },
  ],
};

const CardItem = ({ data }) => {
  return (
    <div className="px-[1rem] sm:px-[1.5rem] md:px-[2rem] h-full">
      <Link
        href={data.url}
        className="block w-full h-full rounded-[3.5rem] overflow-hidden relative group xl:rounded-[4rem] 3xl:rounded-[5rem]"
      >
        <div className="h-full">
          <img
            src={data.image}
            alt=""
            className="w-full block object-cover h-full group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="absolute w-full left-0 top-0 h-full px-[3rem] py-[3rem] lg:pb-[3rem] lg:pl-[3rem] flex flex-col justify-end xl:pl-[4rem] xl:pb-[4rem] 1xl:pl-[4.5rem] 1xl:pb-[4.5rem] bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.01)] 3xl:pb-[6rem] 3xl:pl-[6rem]">
          <div className="text-white">
            <h5 className="text-white w-full font-normal xl:text-[2.2rem] 1xl:text-[2.5rem] 2xl:text-4.5xl 3xl:text-6xl 3xl:bottom-24 3xl:left-[3.5rem]">
              {data.title}
            </h5>
          </div>
        </div>
        <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center p-1 absolute top-[2.5rem] right-[2.5rem] md:top-12 md:right-12 lg:top-[2rem] lg:right-[2rem] xl:w-[4.3rem] xl:h-[4.3rem] 1xl:w-[5rem] 1xl:h-[5rem] 1xl:top-[3.5rem] 1xl:right-[3.5rem] 3xl:w-[6.7rem] 3xl:h-[6.7rem] 3xl:top-16 3xl:right-16 group-hover:bg-black transition-all duration-500 ease-in">
          <img
            src="/images/showroom-location-arrow.webp"
            className="object-contain w-4 xl:w-[1.5rem] 2xl:w-6 3xl:w-[2rem] group-hover:invert transition-all duration-500 ease-in"
            width="20"
            height="20"
            alt="Arrow Icon"
          />
        </span>
      </Link>
    </div>
  );
};

const ExploreBBTWorld = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="py-[6rem] bg-[#F4F4F1] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div
        className="max-1920 overflow-hidden"
        // data-aos="fade-up"
        // data-aos-easing="linear"
        // data-aos-duration="500"
      >
        <div className="container">
          <h2 className="font-light text-center [&>b]:font-medium text-[2.5rem] tracking-[-2px] xl:text-[3rem] ] 1xl:text-[3.7rem] 3xl:text-[4.5rem] mb-[4rem]">
            Explore The <b>BBT Worlds</b>
          </h2>
        </div>
        <div className="pl-[1rem] lg:pl-0 lg:[&_.slick-list]:w-[93%] lg:[&_.slick-list]:ml-auto">
          <Slider {...settings} className="recent-uploads-slider compare-bbt-world">
            {links.map((item, index) => (
              <div key={index} className="h-full">
                <CardItem data={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ExploreBBTWorld;
