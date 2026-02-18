"use client";

import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const sliderItems = [
  {
    thumbnail: "/images/team/celebration-slide-1.webp",
    title: "We share <br> <b>a common goal</b>",
  },
  {
    thumbnail: "/images/team/celebration-slide-2.webp",
    title: "We are <b>passionate about cars</b>",
  },
  {
    thumbnail: "/images/team/celebration-slide-3.webp",
    title: "We share <br> <b>a common goal</b>",
  },
  {
    thumbnail: "/images/team/celebration-slide-1.webp",
    title: "We share <br> <b>a common goal</b>",
  },
  {
    thumbnail: "/images/team/celebration-slide-2.webp",
    title: "We are <b>passionate about cars</b>",
  },
  {
    thumbnail: "/images/team/celebration-slide-3.webp",
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
  return (
    <div className="pr-[2rem] xl:pr-0 xl:py-[15px] h-full">
      <div className="relative h-full rounded-[3rem] overflow-hidden xl:rounded-[4rem]">
        <img
          src={
            data?.thumbnail ? data.thumbnail : "/images/bbt-world-item-1.webp"
          }
          alt="Slider Image"
          className="w-full block object-cover h-full"
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

gsap.registerPlugin(ScrollTrigger);

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

  let settingsDesktopLeft = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    infinite: true,
    arrows: false,
    dots: false,
  };
   const settingsDesktopRight = {
    ...settingsDesktopLeft,
    rtl: true, 
  };

  useEffect(() => {
    // const animateAtSmallScreen = () => {
    //   let rightTimeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#celebrationSection",
    //       start: "top 0%",
    //       end: "bottom 90%",
    //       scrub: 1,
    //       // markers: true,
    //       ease: "power1.inOut",
    //     },
    //   });
    //   let leftTimeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#celebrationSection",
    //       start: "top 0%",
    //       end: "bottom 90%",
    //       scrub: 1,
    //       // markers: true,
    //       ease: "power1.inOut",
    //     },
    //   });
    //   rightTimeline.to("#rightImgCol", {
    //     y: -2900,
    //   });
    //   leftTimeline.to("#leftImgCol", {
    //     y: 2900,
    //   });
    // };
    // const animateAtLargeScreen = () => {
    //   let rightTimeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#celebrationSection",
    //       start: "top 0%",
    //       end: "bottom 90%",
    //       scrub: 1,
    //       // markers: true,
    //       ease: "power1.inOut",
    //     },
    //   });
    //   let leftTimeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#celebrationSection",
    //       start: "top 0%",
    //       end: "bottom 90%",
    //       scrub: 1,
    //       // markers: true,
    //       ease: "power1.inOut",
    //     },
    //   });
    //   rightTimeline.to("#rightImgCol", {
    //     y: -3900,
    //   });
    //   leftTimeline.to("#leftImgCol", {
    //     y: 3900,
    //   });
    // };
    // const handleResize = () => {
    //   if (window.innerWidth >= 1920) {
    //     animateAtLargeScreen();
    //   } else {
    //     animateAtSmallScreen();
    //   }
    // };
    // handleResize(); // Initial check
    // window.addEventListener("resize", handleResize);
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  return (
    <section className="bg-[#F4F4F1] py-[5rem] sm:py-[8rem] xl:py-0 xl:relative overflow-hidden team-celebration-section">
      <div className="max-1920 ">
        <div className="block lg:flex lg:flex-wrap lg:justify-between lg:pl-[8.5%] items-center xl:pl-0 xl:w-[82%] xl:mx-auto xl:items-start overflow-hidden ">
          <div className="hidden xl:block w-[27%] h-full vertical-slider">
            <Slider {...settingsDesktopLeft}>
              {sliderItems.map((item, index) => (
                <SliderItem data={item} key={index} />
              ))}
            </Slider>
          </div>
          <div className="w-full lg:w-[30%] xl:w-[35%] xl:pt-[130px] 3xl:pt-[220px]">
            <div className="w-[91%] mx-auto lg:w-full xl:text-center">
              <div className="flex justify-between items-center lg:flex-col-reverse lg:items-start xl:items-center">
                <h2 className="flex-1 font-light [&>b]:font-normal [&>b]:block leading-[1.1] pr-[2rem] tracking-[-1.2px] lg:mt-[2.5rem] lg:tracking-[-2px]">
                  Celebration <b>40 years of bond</b>
                </h2>
                <img
                  src="/images/team/celebration-icon.webp"
                  alt="Icon"
                  className=" object-contain h-[6rem] w-auto xl:h-[8.3rem] 1xl:h-[10rem] 3xl:h-[12.5rem]"
                />
              </div>
              <p className="font-light text-[1.4rem] leading-[1.4] mt-[2rem] w-[90%] xl:w-full xl:tracking-tight xl:text-[1.13rem] xl:leading-[1.4] 1xl:text-[1.2rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                At each progression without a doubt Directly from the time you
                enter the paradise of extravagance vehicles, rubberneck at the
                most loved pick of the parcel, steer away the difficulty runs
                and choke your pre cherished or new first light adored
                outlandish home
              </p>
              <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="hidden xl:inline-block object-contain  invert xl:mt-[4.5rem] xl:w-[8.5rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem] 3xl:mt-[6.5rem]"
              />
            </div>
          </div>
          <div className="hidden xl:block w-[27%] h-full vertical-slider">
            <Slider {...settingsDesktopRight}>
              {sliderItems.map((item, index) => (
                <SliderItem data={item} key={index} />
              ))}
            </Slider>
          </div>

          <div className="w-full lg:w-[65%] xl:w-[70.5%] xl:hidden">
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
