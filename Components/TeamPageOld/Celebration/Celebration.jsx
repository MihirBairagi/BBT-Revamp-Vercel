"use client";

import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const sliderItems = [
  {
    thumbnail: "/images/team-page/celebration-slide-1.webp",
    title: "We share <br> <b>a common goal</b>",
  },
  {
    thumbnail: "/images/team-page/celebration-slide-2.webp",
    title: "We are <b>passionate about cars</b>",
  },
  {
    thumbnail: "/images/team-page/celebration-slide-1.webp",
    title: "We share <br> <b>a common goal</b>",
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

const SliderItem = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pr-[2rem] xl:pr-[4rem] 2xl:pr-[5.5rem] 3xl:pr-[7.5rem]">
      <div className="relative rounded-[3rem] overflow-hidden xl:rounded-[4rem]">
        <img
          src={
            data?.thumbnail ? data.thumbnail : "/images/bbt-world-item-1.webp"
          }
          alt="Slider Image"
          className="w-full block object-cover"
        />
        <div className="absolute bottom-0 left-0 pb-[4rem] pt-[8rem] px-[3rem] w-full h-auto linear-bottom bg-gradient-to-t from-black to-[#00000000]">
          <h5
            className="text-white  text-center text-[1.8rem] font-light [&>b]:font-normal leading-[1.2] tracking-[-1px] xl:text-[2.5rem] 1xl:text-[2.8rem] 3xl:text-[3.5rem]"
            dangerouslySetInnerHTML={{
              __html: data?.title ? data.title : "BBT World",
            }}
          ></h5>
        </div>
      </div>
    </div>
  );
};

const Celebration = () => {
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
    centerPadding: "7%",
    afterChange: (index) => {
      setProgressWidth((100 / sliderItems.length) * (index + 1));
    },
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "15%",
        },
      },
    ],
  };

  return (
    <section className="bg-white py-[5rem] sm:py-[8rem] xl:py-[12rem] 2xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div
          className="block lg:flex lg:flex-wrap lg:justify-between lg:pl-[8.5%] items-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="w-full lg:w-[30%] xl:w-[23.5%]">
            <div className="w-[91%] mx-auto lg:w-full">
              <div className="flex justify-between items-center lg:flex-col-reverse lg:items-start">
                <h2 className="flex-1 font-light [&>b]:font-normal [&>b]:block leading-[1.1] pr-[2rem] tracking-[-1.2px] lg:mt-[2.5rem] lg:tracking-[-2px]">
                  Celebration <b>40 years of bond</b>
                </h2>
                <img
                  src="/images/team-page/celebration-icon.webp"
                  alt="Icon"
                  className=" object-contain h-[6rem] w-auto xl:h-[8.3rem] 1xl:h-[10rem] 3xl:h-[12.5rem]"
                />
              </div>
              <p className="font-light text-[1.2rem] leading-[1.4] mt-[2rem] w-[90%] xl:w-full xl:tracking-tight xl:text-[1.13rem] xl:leading-[1.4] 1xl:text-[1.2rem] 1xl:text-justify 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                At each progression without a doubt Directly from the time you
                enter the paradise of extravagance vehicles, rubberneck at the
                most loved pick of the parcel, steer away the difficulty runs
                and choke your pre cherished or new first light adored
                outlandish home
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[65%] xl:w-[70.5%]">
            <div className="celebration-slider pl-[2rem] mt-[4rem] lg:mt-0">
              <Slider {...settings}>
                {sliderItems.map((item, index) => (
                  <SliderItem data={item} key={index} />
                ))}
              </Slider>
            </div>
            <div className="container xl:w-[90%] xl:ml-0">
              <div
                className="progress mt-[4rem] xl:mt-[7rem] 2xl:mt-32 3xl:mt-40"
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

export default Celebration;
