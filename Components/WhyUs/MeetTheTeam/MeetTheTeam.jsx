"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import "./meet-the-team.css";
function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`cursor-pointer ${className}`} onClick={onClick}>
      <img
        src="/images/why-us/testimonial-next.webp"
        alt="Next Slide"
        width="5"
        height="9"
        className="w-[6.3px] object-contain h-auto"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`cursor-pointer ${className}`} onClick={onClick}>
      <img
        src="/images/why-us/testimonial-prev.webp"
        alt="Previous Slide"
        width="5"
        height="9"
        className="w-[6.3px] object-contain h-auto"
      />
    </div>
  );
}

const MeetTheTeam = () => {
  const [progressWidth, setProgressWidth] = useState(33.33);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
        },
      },
    ],
    afterChange: (index) => {
      setProgressWidth((100 / 3) * (index + 1));
    },
  };
  return (
    <section className="bg-black">
      <div className="max-[3000px] mx-auto relative">
        <div className="sm:hidden">
          <img
            src="/images/team/team-banner-mobile.webp"
            alt="Background Image"
            className="w-full object-cover h-full min-h-[650px]"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/why-us/team-banner-desktop.webp"
            alt="Background Image"
            className="w-full object-cover h-auto min-h-[650px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.03)]">
          <div className="container w-full h-full">
            <div className="flex h-full items-end lg:items-center py-[6rem]">
              <div className="w-full overflow-hidden">
                <Slider {...settings} className="meet-team-slider">
                  <div className=" text-white h-full">
                    <img
                      src="/images/why-us/team-quote-icon.webp"
                      alt="Quote Icon"
                      className="object-contain h-auto inline-block w-[3rem] lg:w-[3.5rem] xl:w-[3rem] 3xl:w-[4.3rem]"
                    />
                    <p className="text-[2.5rem] lg:text-[3rem] 1xl:text-[3.5rem] 3xl:text-[4.5rem] underline my-[3rem] font-normal underline-offset-[5px] decoration-1  xl:leading-[1.2] xl:mt-[3.5rem] xl:mb-[2.5rem] 3xl:mt-[5rem] 2xl:decoration-2 3xl:underline-offset-[8px] 3xl:max-w-[622px] max-w-[350px] lg:max-w-[400px] 1xl:max-w-[450px]">
                      I've always had an affinity and a passion for cars and
                      that whole car culture.
                    </p>
                    <img
                      src="/images/why-us/team-signature.webp"
                      alt="Jatin Ahuja"
                      className="object-contain h-auto inline-block w-[14rem] lg:w-[16rem] 1xl:w-[19rem] 2xl:w-[20rem] xl:ml-[-2.5rem] 3xl:w-[26rem]"
                    />
                  </div>
                  <div className=" text-white h-full">
                    <img
                      src="/images/why-us/team-quote-icon.webp"
                      alt="Quote Icon"
                      className="object-contain h-auto inline-block w-[3rem] lg:w-[3.5rem] xl:w-[3rem] 3xl:w-[4.3rem]"
                    />
                    <p className="text-[2.5rem] lg:text-[3rem] 1xl:text-[3.5rem] 3xl:text-[4.5rem] underline my-[3rem] font-normal underline-offset-[5px] decoration-1  xl:leading-[1.2] xl:mt-[3.5rem] xl:mb-[2.5rem] 3xl:mt-[5rem] 2xl:decoration-2 3xl:underline-offset-[8px] 3xl:max-w-[622px] max-w-[350px] lg:max-w-[400px] 1xl:max-w-[450px]">
                      I've always had an affinity and a passion for cars and
                      that whole car culture.
                    </p>
                    <img
                      src="/images/why-us/team-signature.webp"
                      alt="Jatin Ahuja"
                      className="object-contain h-auto inline-block w-[14rem] lg:w-[16rem] 1xl:w-[19rem] 2xl:w-[20rem] xl:ml-[-2.5rem] 3xl:w-[26rem]"
                    />
                  </div>
                  <div className=" text-white h-full">
                    <img
                      src="/images/why-us/team-quote-icon.webp"
                      alt="Quote Icon"
                      className="object-contain h-auto inline-block w-[3rem] lg:w-[3.5rem] xl:w-[3rem] 3xl:w-[4.3rem]"
                    />
                    <p className="text-[2.5rem] lg:text-[3rem] 1xl:text-[3.5rem] 3xl:text-[4.5rem] underline my-[3rem] font-normal underline-offset-[5px] decoration-1  xl:leading-[1.2] xl:mt-[3.5rem] xl:mb-[2.5rem] 3xl:mt-[5rem] 2xl:decoration-2 3xl:underline-offset-[8px] 3xl:max-w-[622px] max-w-[350px] lg:max-w-[400px] 1xl:max-w-[450px]">
                      I've always had an affinity and a passion for cars and
                      that whole car culture.
                    </p>
                    <img
                      src="/images/why-us/team-signature.webp"
                      alt="Jatin Ahuja"
                      className="object-contain h-auto inline-block w-[14rem] lg:w-[16rem] 1xl:w-[19rem] 2xl:w-[20rem] xl:ml-[-2.5rem] 3xl:w-[26rem]"
                    />
                  </div>
                </Slider>
                <div className="mt-[3rem] 1xl:mt-[6rem] 2xl:mt-[8rem] 3xl:mt-[10rem]">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="w-max mb-[4rem] lg:mb-0">
                      <Link
                        href="team"
                        className="w-max px-[4rem] h-[4.5rem] flex justify-center items-center text-[1.4rem] bg-white text-black py-[1rem] rounded-[3rem] tracking-[-1px] font-medium sm:ml-0 xl:text-[1.2rem] 1xl:h-[5rem] 1xl:text-[1.4rem] 2xl:max-w-none 2xl:w-max 2xl:px-[6rem] 2xl:text-[1.5rem] 3xl:h-[6.5rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-[#111111] hover:text-white transition-all duration-500 ease-in-out"
                      >
                        Meet The Team
                      </Link>
                    </div>
                    <div className="flex justify-between items-center flex-[1] lg:pl-[2rem] xl:pl-[5rem] 2xl:pl-[7rem]">
                      <div className="flex-[1] pr-[2rem]">
                        <div
                          className="progress "
                          style={{
                            backgroundColor: "#808080",
                            height: "2px",
                          }}
                        >
                          <div
                            style={{
                              width: `${progressWidth}%`,
                              backgroundColor: "#FFFFFF",
                              height: "100%",
                            }}
                            className="progressFill"
                          ></div>
                        </div>
                      </div>
                      <div className="hidden lg:block lg:w-[9rem] 3xl:w-[12rem]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
