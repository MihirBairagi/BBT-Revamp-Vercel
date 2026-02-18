"use client";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./SpecificationSection.module.css";

const dummyData = [
  {
    icon: "/images/detail-page/detail-summery-usp-1.webp",
    title: "Engine",
    description: "6592cc, Twin Turbocharged, V12, DOHC",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-2.webp",
    title: "Transmission",
    description: "8 Speed <br> Automatic ZF 8HP90 Transmission",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-3.webp",
    title: "Peak Torque",
    description: "780Nm <br> @1500 RPM",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-4.webp",
    title: "Peak Power",
    description: "571PS / 563BHP <br> @ 5250 RPM",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-5.webp",
    title: "Seating Capacity",
    description: "Available <br> Seats (04) Persons",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-6.webp",
    title: "Vehicle Type",
    description: "Body Type <br> Luxury Sedan",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-7.webp",
    title: "Drive ",
    description: "(RWD) <br> Rear Wheel Drive",
  },
  {
    icon: "/images/detail-page/detail-summery-usp-8.webp",
    title: "Exterior Color",
    description: `Blue With <br> Shades of Silver`,
  },
];

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const CarSummaryCard = ({ data }) => {
  return (
    <div className="py-8 rounded-2xl border border-neutral-400 px-5 mr-7 sm:border-0 sm:mr-0 xl:py-14 3xl:py-20 h-full">
      <img
        src={data.icon}
        width="61"
        height="50"
        alt="Icon"
        className="object-contain h-12 xl:h-13 1xl:w-20 3xl:w-28 3xl:h-16"
      />
      <p className="text-sm text-[#989898] my-5 sm:text-lg xl:mt-14 1xl:mt-20 1xl:text-xl 1xl:mb-7 2xl:text-1xl 3xl:text-3xl">{data.title}</p>
      <p
        className="text-base font-normal sm:text-lg xl:text-1.6xl xl:leading-normal 1xl:text-2xl 2xl:text-3xl 2xl:leading-1.4 3xl:text-4xl 3xl:leading-1.6"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  );
};

const CarSummary = ({ summary = '' }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  // Check if we have a valid summary
  const hasSummary = summary && summary.trim().length > 0;
  
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      className="lg:pt-16 lg:pb-16 xl:py-28 2xl:py-36 3xl:py-52"
    >
      <div className="container">
        <h6
          className={`font-medium pt-10 mt-16 border-t border-gray-300 mb-8 lg:border-none lg:relative lg:mb-0 lg:pt-0 titleWithLine md:text-3.5rem xl:text-4xl 1xl:text-4.5xl 1xl:tracking-tighter 3xl:text-5.5xl`}
        >
          <span className="lg:bg-white lg:pr-5 relative z-10 3xl:pr-16">Car Summary</span>
        </h6>
        
        {/* Car Description - only show if we have a summary */}
        {hasSummary ? (
          <div className="mt-8 mb-12 lg:mt-12 lg:mb-16 xl:mt-16 xl:mb-20">
            <div className="prose max-w-none lg:prose-lg xl:prose-xl">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 whitespace-pre-line">
                {summary}
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-8 mb-12 lg:mt-12 lg:mb-16 xl:mt-16 xl:mb-20">
            <div className="prose max-w-none lg:prose-lg xl:prose-xl">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700">
                Experience unparalleled luxury and performance with this premium vehicle. 
                Meticulously maintained and designed for comfort, power, and style.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="block sm:hidden">
        <Slider {...settings} className="details-summary-slider pl-8">
          {dummyData.map((data, index) => (
            <CarSummaryCard data={data} key={index} />
          ))}
        </Slider>
      </div>
      <div className="container hidden sm:block lg:mt-20 xl:mt-32 3xl:mt-48">
        <ul className="sm:flex sm:flex-wrap">
          {dummyData.map((data, index) => (
            <li
              key={index}
              className={`w-1/3 px-8 mb-8 lg:mb-16 lg:w-1/4 xl:px-12 xl:mb-20 1xl:px-16 3xl:px-24 3xl:mb-24 ${styles.carSummeryItem}`}
            >
              <CarSummaryCard data={data} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarSummary;
