"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./how-to-cell.css";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";
import AOS from "aos";
import "aos/dist/aos.css";
const processData = [
  {
    title: "Get Your </br> <b> Car Evaluated </b>",
    description: `Schedule a professional evaluation to accurately assess your car's condition and market value.`,
    icon: "/images/sell-your-car/hs-usp-1.webp",
  },
  {
    title: "Prepare Your </br> <b>Car for Sale</b>",
    description: `Clean and detail your car thoroughly, addressing any minor repairs or cosmetic`,
    icon: "/images/sell-your-car/hs-usp-2.webp",
  },
  {
    title: "Market Your  </br> <b>Car Effectively</b>",
    description: `Take high-quality photos and write a detailed, honest description highlighting`,
    icon: "/images/sell-your-car/hs-usp-3.webp",
  },
  {
    title: "Negotiate and  </br> <b>Finalize the Sale</b>",
    description: `Be prepared to negotiate with potential buyers and answer their questions promptly.`,
    icon: "/images/sell-your-car/hs-usp-4.webp",
  },
];

const ProcessCard = ({ data, index }) => {
  return (
    <div className="bg-[#FFFFFF] h-[inherit] px-[2rem] pt-[2.5rem] pb-[5rem] overflow-hidden relative text-black rounded-[1rem] xl:pb-[6rem] xl:rounded-[2rem] 1xl:px-[3rem] 1xl:rounded-[2.5rem] 1xl:pt-[3.5rem] 2xl:pb-[8rem] 3xl:pt-[5rem] 3xl:pb-[9rem] 3xl:pl-[4rem]">
      <div className="xl:h-[5rem]">
        <img
          src={data.icon}
          alt=""
          className="w-full object-contain h-auto max-w-[4rem] 1xl:max-w-[3.8rem] 3xl:max-w-[5rem] 1xl:max-h-[4rem]"
        />
      </div>
      <h4
        dangerouslySetInnerHTML={{ __html: data.title }}
        className="text-[1.5rem] mt-[3rem] font-light [&>b]:font-medium xl:text-[1.7rem] xl:mt-[2rem] 1xl:text-[1.8rem] 2xl:text-[1.8rem] 3xl:text-[2.4rem] xl:leading-[1.3] 3xl:mt-[5rem]"
      ></h4>
      <p className="text-[1.1rem] 1xl:tracking-tight 2xl:text-[1.1rem] 3xl:text-[1.4rem] mt-[2rem] font-light">
        {data.description}
      </p>
      <div className="absolute right-[-0.1rem] bottom-[-2rem] font-medium text-[#EAEAEA] text-[5rem] tracking-tight xl:text-[7rem] 1xl:text-[8rem] 3xl:text-[10rem] xl:bottom-[-3rem] 1xl:bottom-[-3.5rem] 3xl:bottom-[-4rem]">
        0{index + 1}
      </div>
    </div>
  );
};

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`cursor-pointer ${className}`} onClick={onClick}>
      <img
        src="/images/sell-your-car/hs-slider-next.webp"
        alt="Next Slide"
        width="5"
        height="9"
        className="w-[5px] object-contain h-auto"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`cursor-pointer ${className}`} onClick={onClick}>
      <img
        src="/images/sell-your-car/hs-slider-prev.webp"
        alt="Previous Slide"
        width="5"
        height="9"
        className="w-[5px] object-contain h-auto"
      />
    </div>
  );
}

const HowToSell = () => {
  const [progressWidth, setProgressWidth] = useState(25);
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          arrows: true,
        },
      },
    ],
    afterChange: (index) => {
      setProgressWidth((100 / 4) * (index + 1));
    },
  };
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[12rem]">
      <div className="max-1920">
        {popupOpen && (
          <RequestCallPopup active={popupOpen} togglePopup={togglePopup} formType="sell_your_car" />
        )}
        <div className="container">
          <div
            className="lg:text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <p className="text-[1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem] mb-[1rem]">
              How It Works
            </p>
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize sm:[&>br]:hidden">
              How to sell your <br /> <b>Used Cars</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              At BBT, we strive to provide the quickest and most <br /> hassle
              free car selling service available.
            </p>
            <img
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="hidden xl:inline-block object-contain  invert xl:w-[8.5rem] xl:mt-[4rem] 3xl:mt-[6rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem]"
            />
          </div>
        </div>
        <div
          className="pl-[2rem] my-[5rem] md:pl-[5rem] lg:pl-0 lg:w-[92%] lg:mx-auto lg:max-w-[1194px] xl:w-[62%] 2xl:my-[7rem] 3xl:my-[8rem]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <Slider {...settings} className="sell-car-slider">
            {processData.map((process, index) => (
              <div
                key={index}
                className="pr-[3rem] h-[inherit] lg:pr-[1rem] lg:px-[1rem] 2xl:px-[1.4rem] 3xl:px-[1.6rem]"
              >
                <ProcessCard data={process} index={index} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="container">
          <div className="flex justify-between items-center lg:hidden">
            <div
              className="progress flex-[1]"
              style={{
                backgroundColor: "#D2D2D2",
                height: "2px",
              }}
            >
              <div
                style={{
                  width: `${progressWidth}%`,
                  backgroundColor: "#EF3024",
                  height: "100%",
                }}
                className="progressFill"
              ></div>
            </div>
            <div className="w-[9rem]"></div>
          </div>

          <div
            className="flex justify-center items-center mt-[6rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <button
              className="bg-black text-white w-full h-[5rem] rounded-[4rem] text-[1.4rem] border-none outline-none max-w-[344px] mx-auto cursor-pointer lg:max-w-none lg:px-[4rem] lg:w-max xl:text-[1.2rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.8rem] 1xl:h-[5.5rem] 2xl:h-[6rem] 3xl:h-[7.4rem] 3xl:px-[5rem] capitalize hover:bg-[#333333] transition-all duration-500"
              onClick={togglePopup}
            >
              Request a call back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSell;
