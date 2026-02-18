"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./OurPresence.css";

const showrooms = [
  {
    title: "Delhi/NCR (HQ)",
    address:
      "Plot No. 134, Sector 37, Pace City 1, Gurgaon Haryana, 122001, India",
    icon: "/images/why-us/showroom-icon-1.webp",
    thumbnail: "/images/why-us/showroom-1.webp",
  },
  {
    title: "Mumbai",
    address:
      "7, Hubtown Sunmist, Opposite Hubtown Solaris, Telli Galli, Andheri East, N S Phadke Marg, Mumbai - 400053",
    icon: "/images/why-us/showroom-icon-2.webp",
    thumbnail: "/images/why-us/showroom-2.webp",
  },
  {
    title: "Hydrebad",
    address:
      "Road no 2, Banjara Hills, Shangrila Plaza, Opp.KBR Park, Hyderabad, Telangana - 500034",
    icon: "/images/why-us/showroom-icon-3.webp",
    thumbnail: "/images/why-us/showroom-3.webp",
  },
  {
    title: "Ahmedabad Studio",
    address:
      "Cama Motors, Rustom Cama Marg, Old City, Lal Darwaja, Ahmedabad, Gujarat 380001",
    icon: "/images/why-us/showroom-icon-4.webp",
    thumbnail: "/images/why-us/showroom-4.webp",
  },
  {
    title: "Bangalore",
    address:
      "140, Residency Rd, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka 560025",
    icon: "/images/why-us/showroom-icon-5.webp",
    thumbnail: "/images/why-us/showroom-5.webp",
  },
];

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`cursor-pointer ${className}`} onClick={onClick}>
      <img
        src="/images/why-us/presence-next.webp"
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
        src="/images/why-us/presence-prev.webp"
        alt="Previous Slide"
        width="5"
        height="9"
        className="w-[6.3px] object-contain h-auto"
      />
    </div>
  );
}

const OurPresence = () => {
  const [expandedColumn, setExpandedColumn] = useState(0);
  const [showText, setShowText] = useState(0);
  const [progressWidth, setProgressWidth] = useState(16.66);

  const handleColumnClick = (index) => {
    setExpandedColumn(index);
    setTimeout(() => {
      setShowText(index);
    }, 400);
  };

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "7%",
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
          centerPadding: "7%",
        },
      },
    ],
    afterChange: (index) => {
      setProgressWidth((100 / 6) * (index + 1));
    },
  };
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-wrap lg:items-center">
            <div className="w-full text-center lg:flex-[1] lg:w-max lg:text-left">
              <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize [&>br]:hidden md:[&>br]:block">
                our presence and <b>infrastructure</b>
              </h2>
              <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
                Big Boy Toyz offers used cars & services across a wide <br />{" "}
                range of and available car models in the market.
              </p>
            </div>
            <div className="w-max hidden lg:block">
              <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="object-contain invert lg:w-[7rem] xl:w-[8.5rem] xl:mt-[4rem] 3xl:mt-[6rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem]"
              />
            </div>
          </div>

          <div className="hidden lg:flex w-full flex-wrap justify-between mt-[5rem] lg:mt-[7rem] lg:w-[101%] lg:mx-auto">
            {showrooms.map((showroom, index) => (
              <div
                key={index}
                className={`lg:flex-[0.7] transition-all duration-500 relative overflow-hidden lg:px-[1rem] xl:px-[0.8rem] 3xl:px-[1.2rem] ${
                  expandedColumn === index ? "lg:flex-[3]" : ""
                }`}
                onClick={() => handleColumnClick(index)}
              >
                <div
                  className={`relative overflow-hidden h-full w-full cursor-pointer lg:h-[36rem] xl:h-[48rem] 1xl:h-[57rem] 3xl:h-[73rem] ${
                    expandedColumn === index
                      ? "lg:rounded-[3.5rem] xl:rounded-[6rem] 3xl:rounded-[8rem]"
                      : "lg:rounded-[5rem] xl:rounded-[7rem] 3xl:rounded-[9rem]"
                  }`}
                >
                  <img
                    src={showroom.thumbnail}
                    alt={showroom.title}
                    className="w-full h-full object-cover block"
                  />
                  <div
                    className={`absolute w-full h-full left-0 top-0 flex items-end overflow-hidden transition-all duration-500 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.01] ${
                      expandedColumn === index
                        ? "lg:p-[3rem] xl:p-[3.5rem] 1xl:p-[4rem] 3xl:p-[5.5rem]"
                        : "lg:p-[1rem] xl:p-[1.5rem] 1xl:pb-[2rem] 3xl:pb-[2.5rem]"
                    }`}
                  >
                    <div
                      className={`flex relative overflow-hidden w-full items-start h-auto transition-all duration-500 ${
                        expandedColumn === index
                          ? "lg:justify-start lg:min-w-[280px] xl:min-w-[380px] 1xl:min-w-[450px] 3xl:min-w-[585px]"
                          : "lg:justify-center min-w-none"
                      }`}
                    >
                      <div className="lg:w-[6rem] lg:h-[6rem] xl:w-[7rem] xl:h-[7rem] rounded-full bg-[#F4F4F1] flex justify-center items-center p-[1rem] 1xl:p-[1.5rem] transition-all duration-500 1xl:w-[8rem] 1xl:h-[8rem] 3xl:w-[11rem] 3xl:h-[11rem] 3xl:p-[2rem]">
                        <img
                          src={showroom.icon}
                          alt="Icon"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div
                        className={`lg:flex-[1] pl-[1rem] text-white transition-all duration-500 1xl:pl-[2rem] ${
                          showText === index ? "lg:opacity-100 block " : ""
                        } ${
                          expandedColumn !== index
                            ? "lg:opacity-0 hidden lg:absolute lg:left-[6rem]"
                            : ""
                        }`}
                      >
                        <h6 className="lg:text-[1.6rem] xl:text-[1.8rem] 1xl:text-[2rem] 3xl:text-[3rem]">
                          {showroom.title}
                        </h6>
                        <p className="lg:text-[1.2rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 3xl:text-[2rem] mt-[0.5rem] ">
                          {showroom.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:hidden">
          {/* Slider */}
          <div className="pl-[2rem] md:pl-[5rem]">
            <Slider {...settings} className="presence-slider py-[5rem]">
              {showrooms.map((showroom, index) => (
                <div key={index} className="pr-[2rem] h-[inherit]">
                  <div className="relative overflow-hidden h-full w-full rounded-[2.5rem]">
                    <img
                      src={showroom.thumbnail}
                      alt={showroom.title}
                      className="w-full h-full object-cover block min-h-[36rem]"
                    />
                    <div className="absolute w-full h-full left-0 top-0 flex items-end overflow-hidden transition-all duration-500 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.01] p-[2.5rem]">
                      <div className="flex items-center">
                        <div className="w-[4.6rem] h-[4.6rem] rounded-full bg-[#F4F4F1] flex justify-center items-center p-[0.5rem] md:w-[6rem] md:h-[6rem] md:p-[1rem]">
                          <img
                            src={showroom.icon}
                            alt="Icon"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-[1] pl-[1rem] text-white">
                          <h6 className="text-[1.4rem] md:text-[1.6rem]">{showroom.title}</h6>
                          <p className="text-[0.9rem] md:text-[1.1rem]">{showroom.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  backgroundColor: "#DFDFDF",
                  height: "2px",
                }}
              >
                <div
                  style={{
                    width: `${progressWidth}%`,
                    backgroundColor: "#4C4C4C",
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

export default OurPresence;
