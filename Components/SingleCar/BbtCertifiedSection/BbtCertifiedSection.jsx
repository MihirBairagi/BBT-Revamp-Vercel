"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderData = [
  {
    tag: "Vehicle History",
    content: `<ul> <li>Service Recalls (OASIS) performed</li> <li>Scheduled Maintenance Performed</li> <li>Vehicle MIleage</li> </ul>`,
  },
  {
    tag: "Road Test",
    content: `<ul> <li>Engine starts</li> <li>Idle Quality</li> <li>Cruise Control</li> <li>Wind Noise</li> <li>Ease of Turning</li> </ul>`,
  },
  {
    tag: "Underhood Maintenance",
    content: `<ul> <li>Fluids</li> <li>Engine</li> <li>Cooling System</li> <li>Fuel System</li> <li>Electric AI System</li> </ul>`,
  },
  {
    tag: "Vehicle Exterior",
    content: `<ul> <li>Body Panels and Bumpers</li> <li>Doors, Hood, Decklid, Tailgate</li> <li>Grille, Trim and Roof Rack</li> </ul>`,
  },
  {
    tag: "Vehicle Interior",
    content: `<ul> <li>Carpets, Seats, Sunroof/ Convertible Windows, Door Locks, Luggage</li> <li>Audio and Alarm Systems</li>  </ul>`,
  },
  {
    tag: "Underbody",
    content: `<ul> <li>Frame</li> <li>Exhaust System</li> <li>Tires and Wheels</li> </ul>`,
  },
];

const PreviewSliderItem = ({ data, index }) => {
  return (
    <div className="mr-8 h-full">
      <div
        className="text-white relative pt-8 pb-16 px-8 overflow-hidden rounded-2xl min-h-20 sm:min-h-24 lg:min-h-20 1xl:min-h-24 3xl:min-h-33 h-full"
        style={{ backgroundColor: "#131313" }}
      >
        <p className="w-max border border-white rounded-2xl text-sm py-1 px-5 text-right ml-auto sm:text-lg lg:text-sm 2xl:text-lg 2xl:leading-5 2xl:rounded-3xl 3xl:text-1xl 3xl:leading-7">
          {data.tag}
        </p>
        <div
          className="text-lg mt-8 font-normal sm:text-2xl lg:text-lg 1xl:text-xl 1xl:leading-relaxed 2xl:mt-16 2xl:leading-1.7 3xl:text-[1.7rem] 3xl:leading-1.6 sc-certified-content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
        <span className="absolute text-neutral-700 text-8xl -right-2 -bottom-6 font-medium sm:text-9xl lg:text-8xl 2xl:text-9xl 2xl:-right-4 2xl:-bottom-9 3xl:text-11xl 3xl:-bottom-11">
          {index > 9 ? "" : "0"}
          {index + 1}
        </span>
      </div>
    </div>
  );
};

const BbtCertifiedSection = ({ carData }) => {
  const [progressWidth, setProgressWidth] = useState(16.7);

  // Determine if car is BBT certified
  const isBBTCertified = carData?.isCertified === true;

  useEffect(() => {
    AOS.init();
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          centerPadding: "5%",
        },
      },
    ],
    afterChange: (index) => {
      setProgressWidth((100 / 6) * (index + 1));
    },
  };

  return (
    <section className="bg-black text-white py-24 lg:py-40 xl:py-44 1xl:py-48 3xl:py-60">
      <div className="max-1920">
        <div
          className=""
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="lg:flex lg:flex-wrap lg:pl-20 xl:pl-28 overflow-x-hidden 2xl:pl-36 3xl:pl-48">
            <div className="flex flex-wrap items-center px-8 sm:px-16 md:px-20 lg:w-30% lg:block lg:pr-0 3xl:w-28%">
              {/* <div className="divider w-full h-1 border-t border-gray-300 mt-20 pt-20 lg:hidden"></div> */}
              {isBBTCertified && (
                <div className="w-1/4 sm:w-max pr-8 border-r border-gray-300 lg:w-40 lg:border-none lg:pr-0 lg:mb-6 xl:w-full xl:mb-10">
                  <Image
                    src="/images/detail-page/detail-bbt-certified-white.webp"
                    alt="BBT Certified"
                    width="110"
                    height="150"
                    className="w-[5.4rem] object-contain xl:w-[6rem] 1xl:w-[9.5rem] 3xl:w-[10.9rem]"
                  />
                </div>
              )}
              <div
                className={`${
                  isBBTCertified
                    ? "w-70% sm:flex-grow pl-10 lg:w-full lg:pl-0"
                    : "w-full"
                }`}
              >
                <h2 className="text-25px tracking-tight lg:font-normal xl:text-5xl xl:leading-relaxed 1xl:text-5.5xl 3xl:text-7xl 3xl:leading-1.4">
                  {isBBTCertified ? (
                    <>
                      <span className="lg:font-light lg:block">
                        Hurray! This Car is
                      </span>{" "}
                      BBT Certified.
                    </>
                  ) : (
                    <>
                      <span className="lg:font-light lg:block">
                        Previewing The
                      </span>{" "}
                      Exciting Ride Ahead.
                    </>
                  )}
                </h2>
              </div>
              <img
                src="/images/down-circle-arrow-white.png"
                width="94"
                height="94"
                alt="Arrow Icon"
                className="hidden lg:inline-block mt-20 object-contain lg:w-24 h-auto 2xl:w-28 2xl:mt-28 3xl:w-[9.3rem]"
              />
            </div>

            <div className="lg:w-70% 3xl:w-72% mt-24 lg:mt-0">
              <div className="px-10 sm:px-16 md:px-20 lg:pl-0 lg:pr-44 1xl:pr-56 3xl:pr-72">
                <a
                  href="/151-check-points"
                  className="flex justify-between items-center my-16 lg:mt-0 1xl:mb-24 group cursor-pointer"
                >
                  <p className="1xl:text-3xl 3xl:text-4xl 3xl:tracking-wide">
                    151 Check Points Completed
                  </p>
                  <Image
                    src="/images/showroom-location-arrow.webp"
                    alt="BBT Certified"
                    width="12"
                    height="12"
                    className="w-5 object-contain invert 1xl:w-7 3xl:w-9 transition-all duration-300 ease-in-out group-hover:rotate-[45deg]"
                  />
                </a>
              </div>

              <div>
                <div className="pl-5 sm:pl-12 md:pl-16 lg:pl-0">
                  <Slider
                    {...settings}
                    className="details-preview-slider [&_.slick-tack]:flex [&_.slick-slide]:h-[inherit]"
                  >
                    {sliderData.map((data, index) => (
                      <PreviewSliderItem
                        key={index}
                        data={data}
                        index={index}
                      />
                    ))}
                  </Slider>
                </div>
                <div className="px-8 sm:px-16 lg:w-full lg:pl-10 xl:pl-0 xl:pr-40">
                  <div
                    className="progress mt-16 3xl:mt-32 2xl:mt-24"
                    style={{
                      backgroundColor: "rgb(251 251 251 / 10%)",
                      height: "1px",
                    }}
                  >
                    <div
                      style={{
                        width: `${progressWidth}%`,
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        height: "100%",
                      }}
                      className="progressFill"
                    ></div>
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

export default BbtCertifiedSection;
