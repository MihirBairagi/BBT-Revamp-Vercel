"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./testimonial-section.css";

const testimonials = [
  {
    text: "Cars comes with complete previous service history  checked with authorised dealership and we also check that the previous",
    name: "Prince <b>Agrawal</b>",
    profilePic: "/images/why-us/testimonial-avatar-1.webp",
  },
  {
    text: "Cars comes with complete previous service history  checked with authorised dealership and we also check that the previous ",
    name: "Aditya  <b>Balveer</b>",
    profilePic: "/images/why-us/testimonial-avatar-2.webp",
  },
  {
    text: "Cars comes with complete previous service history  checked with authorised dealership and we also check that the previous ",
    name: "Anmol  <b>Singh</b>",
    profilePic: "/images/why-us/testimonial-avatar-3.webp",
  },
];

const TestimonialCard = ({ data }) => {
  return (
    <div className="bg-[#212121] px-[3rem] py-[3rem] rounded-[2rem] lg:py-[5rem] lg:px-[4rem] 1xl:pl-[5rem] 1xl:pr-[6rem] 2xl:rounded-[2.5rem] 3xl:pl-[6rem] 3xl:py-[7rem]">
      <img
        src="/images/why-us/testimonial-quote-icon.webp"
        alt="Quote Icon"
        className="object-contain h-auto w-[2.5rem] inline-block lg:w-[3rem] xl:w-[3.4rem] 1xl:w-[4rem] 2xl:w-[4.3rem] 3xl:w-[5.3rem]"
      />
      <p className="text-[1.3rem] lg:text-[1.5rem] xl:text-[1.6rem] 1xl:text-[1.7rem] 2xl:text-[1.8rem] 3xl:text-[2.4rem] text-[#D3D3D3] my-[3rem] font-normal 2xl:tracking-wide">
        {data.text}
      </p>
      <div className="flex items-center">
        <div className="w-[4rem] h-[4rem] rounded-full overflow-hidden lg:w-[5.5rem] lg:h-[5.5rem] 1xl:w-[7rem] 1xl:h-[7rem] 3xl:w-[9rem] 3xl:h-[9rem]">
          <img
            src={data.profilePic}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p
          className="flex-[1] pl-[1rem] lg:pl-[2rem] text-[1.4rem] lg:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.8rem] 3xl:text-[2.4rem] font-light [&>b]:font-medium"
          dangerouslySetInnerHTML={{ __html: data.name }}
        ></p>
      </div>
    </div>
  );
};

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

const TestimonialSection = () => {
  const [progressWidth, setProgressWidth] = useState(25);

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
    centerMode: true,
    centerPadding: "31%",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
    ],
    afterChange: (index) => {
      setProgressWidth((100 / 3) * (index + 1));
    },
  };

  return (
    <section className="bg-[#161616] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem] text-white">
      <div className="max-1920">
        <div className="container">
          <div className="text-center text-white xl:text-left">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize md:[&>br]:hidden">
              what clients say <br /> <b>about us</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block text-[#B5B5B5]">
              We accept that the clients’ need and intrigue <br /> consistently starts
              things out  and ought to be given the <br /> most effective
              attention.
            </p>
          </div>
        </div>

        <div className="relative xl:mt-[3rem]">
          {/* Slider */}
          <div className="pl-[2rem] md:pl-[5rem] lg:pl-[7%] xl:pl-[9%]">
            <Slider {...settings} className="testimonial-slider py-[5rem] lg:py-[8rem] 3xl:py-[10rem]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="pr-[3rem] h-[inherit] xl:pr-[4rem] 1xl:pr-[4.5rem] 3xl:pr-[6rem]"
                >
                  <TestimonialCard data={testimonial} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Slider Controller */}
          <div className="container">
            <div className="flex justify-between items-center">
              <div
                className="progress flex-[1]"
                style={{
                  backgroundColor: "#626262",
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
              <div className="w-[9rem] 3xl:w-[12rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
