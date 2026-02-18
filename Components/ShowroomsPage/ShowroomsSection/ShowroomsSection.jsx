"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <img
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
      <img
        src="/images/curve-slide-prev.webp"
        alt="Previous Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const showrooms = [
  {
    name: "Gurgaon Showroom",
    location:
      "Plot No. 134, Sector 37, Pace City 1, Gurgaon, Haryana - 122001, India",
    mapLink: "https://maps.app.goo.gl/F84nhZ39yzVh6TrP7",
    phoneNumber: "09999999983",
    meetingLink: "#",

    images: [
      "/images/showroom-page/gurgaon-showroom-img-1.webp",
      "/images/showroom-page/gurgaon-showroom-img-2.webp",
      "/images/showroom-page/gurgaon-showroom-img-3.webp",
      "/images/showroom-page/gurgaon-showroom-img-4.webp",
      "/images/showroom-page/gurgaon-showroom-img-5.webp",
      "/images/showroom-page/gurgaon-showroom-img-6.webp",
      "/images/showroom-page/gurgaon-showroom-img-6.webp",
    ],
  },
  {
    name: "Mumbai Showroom",
    location:
      "7, Hubtown Sunmist, Opposite Hubtown Solaris, Telli Galli, Andheri East, N S Phadke Marg, Mumbai - 400053",
    mapLink: "https://maps.app.goo.gl/VzamgdWtt1z7qQZP8",
    phoneNumber: "09999999983",
    meetingLink: "#",

    images: [
      "/images/showroom-page/mumbai-showroom-img-1.webp",
      "/images/showroom-page/mumbai-showroom-img-2.webp",
      "/images/showroom-page/mumbai-showroom-img-3.webp",
      "/images/showroom-page/mumbai-showroom-img-4.webp",
      "/images/showroom-page/mumbai-showroom-img-5.webp",
    ],
  },

  {
    name: "Hyderabad Showroom",
    location:
      "Road-2, Banjara Hills, Shangrila Plaza, Opp.KBR Park, Hyderabad, Telangana - 500034",
    mapLink: "https://maps.app.goo.gl/yAMvJg8pdyZHRv4w9",
    phoneNumber: "09999999983",
    meetingLink: "#",

    images: [
      "/images/showroom-page/hyderabad-showroom-img-1.webp",
      "/images/showroom-page/hyderabad-showroom-img-2.webp",
      "/images/showroom-page/hyderabad-showroom-img-3.webp",
      "/images/showroom-page/hyderabad-showroom-img-4.webp",
      "/images/showroom-page/hyderabad-showroom-img-5.webp",
      "/images/showroom-page/hyderabad-showroom-img-6.webp",
      "/images/showroom-page/hyderabad-showroom-img-7.webp",
    ],
  },
  {
    name: "Bengaluru Showroom",
    location:
      "140, Residency Rd, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka-560025",
    mapLink: "https://maps.app.goo.gl/chcixmYqBLy7mb8PA",
    phoneNumber: "09999999983",
    meetingLink: "#",

    images: [
      "/images/showroom-page/bangaluru-showroom-img-1.webp",
      "/images/showroom-page/bangaluru-showroom-img-2.webp",
      "/images/showroom-page/bangaluru-showroom-img-3.webp",
      "/images/showroom-page/bangaluru-showroom-img-4.webp",
      "/images/showroom-page/bangaluru-showroom-img-6.webp",
      "/images/showroom-page/bangaluru-showroom-img-7.webp",
      "/images/showroom-page/bangaluru-showroom-img-8.webp",
    ],
  },
  {
    name: "Ahmedabad Showroom",
    location:
      "Cama Motors, Rustom Cama Marg, Old City, Lal Darwaja, Ahmedabad, Gujarat-380001",
    mapLink: "#",
    phoneNumber: "09999999983",
    meetingLink: "#",

    images: [
      "/images/showroom-page/ahmedabad-showroom-img-1.webp",
      "/images/showroom-page/ahmedabad-showroom-img-2.webp",
      "/images/showroom-page/ahmedabad-showroom-img-3.webp",
      "/images/showroom-page/ahmedabad-showroom-img-4.webp",
      "/images/showroom-page/ahmedabad-showroom-img-5.webp",
      "/images/showroom-page/ahmedabad-showroom-img-6.webp",
      "/images/showroom-page/ahmedabad-showroom-img-7.webp",
      "/images/showroom-page/ahmedabad-showroom-img-8.webp",
    ],
  },
];

const showroomTabs = [
  {
    title: "Mumbai",
    icon: "images/showroom-page/showroom-tab-icon-2.webp",
  },
  {
    title: "Gurgaon",
    icon: "images/showroom-page/showroom-tab-icon-1.webp",
  },
  {
    title: "Hyderabad",
    icon: "images/showroom-page/showroom-tab-icon-3.webp",
  },
  {
    title: "Bengaluru",
    icon: "images/showroom-page/showroom-tab-icon-5.webp",
  },
  {
    title: "Ahmedabad",
    icon: "images/showroom-page/showroom-tab-icon-4.webp",
  },
];

const ShowroomsSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white">
      <div className="max-1920">
        <div className="container lg:hidden">
          <div className="py-[4rem]">
            <h2 className=" pl-8 titleWithLine mobileLine text-right 1xl:tracking-[-0.2rem] sm:text-left sm:pl-0 xl:pb-[0.5rem]">
              <span className="bg-[#fff] pl-5 inline-block relative z-10 sm:pl-0 sm:pr-5 xl:text-[2.4rem] xl:pr-[4rem] 1xl:text-[2.7rem] 3xl:text-[3.5rem]">
                Showrooms
              </span>
            </h2>
            <ul className="showroom-tabs flex flex-wrap mt-[3rem]">
              {showroomTabs.map((showroom, index) => (
                <li
                  onClick={() => handleTabChange(`tab-${index + 1}`)}
                  className="xl:w-[19%] 1xl:w-[18.5%]"
                  key={index}
                >
                  <a
                    href={`#showroomList${index + 1}`}
                    className={`flex justify-center items-center leading-[1] text-[1.2rem] px-[2.5rem] py-[0.8rem] rounded-[3rem] mr-[1rem] mb-[1.5rem] lg:h-[4rem] xl:h-[5.5rem] xl:text-[1.4rem] xl:w-full xl:py-[1.2rem] xl:mr-0  xl:border xl-border-[#D9D9D9] hover:shadow-showroom-tab transition-all duration-500 ease-in-out 1xl:font-[600] 1xl:text-[1.7rem] 1xl:h-[6.3rem] 1xl:rounded-[4rem] 2xl:h-[6.7rem] 3xl:h-[8.5rem] 3xl:text-[2.2rem] ${
                      activeTab === `tab-${index + 1}`
                        ? "bg-black text-white [&>img]:invert xl:bg-white xl:text-black xl:[&>img]:invert-0 xl:shadow-showroom-tab xl:border-0"
                        : "bg-[#F3F3F3] text-black xl:bg-white"
                    }`}
                  >
                    <img
                      src={showroom.icon}
                      alt="Icon"
                      className="hidden lg:inline-block max-w-[2rem] object-contain h-auto mr-[1rem] xl:max-w-[3rem] 1xl:max-w-[3.5rem] 1xl:mr-[1.5rem] 1xl:max-h-[3.5rem] 2xl:max-h-[4rem] 3xl:max-h-[4.9rem] 2xl:max-w-[3.8rem] 3xl:max-w-[5.6rem] 3xl:mr-[2.2rem]"
                    />
                    {showroom.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sp-showroom-list">
          {showrooms.map((showroom, index) => (
            <div
              className="showroom-item py-[3.5rem] lg:py-[5rem] xl:py-[7rem] 3xl:py-[7rem] bg-[#F4F4F1]"
              key={index}
              id={`showroomList${index + 1}`}
            >
              <div className="container text-wrapper">
                <div className="flex flex-wrap items-end">
                  <div className="flex-1">
                    <h4 className="text-[2rem] tracking-[-1.5px] xl:text-[3rem] 1xl:text-[3.5rem] 2xl:text-[4rem] 3xl:text-[4.5rem]">
                      {showroom.name}
                    </h4>
                    <p className="text-[1.4rem] font-light max-w-[27rem] mt-[0.5rem] sm:mt-[1rem] lg:max-w-[27rem] xl:max-w-[40rem] xl:text-[1.8rem] 1xl:text-[2rem] 1xl:max-w-[50rem] 2xl:text-[2.4rem] 3xl:text-[2.8rem] 2xl:max-w-[60rem] 3xl:max-w-[84rem] ">
                      {showroom.location}
                    </p>
                  </div>
                  <a
                    href={showroom.meetingLink}
                    className="schedule-btn mt-[3rem] hidden md:inline-block"
                  >
                    Schedule a Visit
                  </a>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-[3rem] sm:w-max sm:[&>a]:leading-[1]">
                  <a
                    href={`tel:${showroom.phoneNumber}`}
                    className="flex items-center text-[1.5rem] font-light xl:text-[1.8rem] 1xl:text-[2rem] 2xl:text-[2.4rem] 3xl:text-[2.8rem]"
                  >
                    <img
                      src="/images/showroom-page/phone-icon-black.webp"
                      alt="Phone"
                      className="w-[1.5rem] h-auto object-contain inline-block mr-[1rem] 1xl:w-[1.8rem] 2xl:w-[2rem] 3xl:w-[2.3rem]"
                      width="23"
                      height="23"
                    />
                    {showroom.phoneNumber}
                  </a>
                  <a
                    href={showroom.mapLink}
                    target="_blank"
                    className="text-[1.3rem] underline sm:ml-[1rem] sm:pl-[1rem] sm:border-l sm:border-l-[#000] xl:text-[1.7rem] xl:ml-[1.5rem] xl:pl-[1.5rem] 1xl:text-[1.9rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem]"
                  >
                    Get Directions
                  </a>
                </div>
                <div className="flex justify-center md:hidden">
                  <a
                    href={showroom.meetingLink}
                    className="schedule-btn mt-[3rem] inline-block w-full max-w-[450px] mx-auto"
                  >
                    Schedule a Visit
                  </a>
                </div>
              </div>
              {showroom.images && (
                <div className="showroom-image-slider mt-[4rem] xl:mt-[6rem] 3xl:mt-[8rem]">
                  <Slider {...settings}>
                    {showroom.images.map((item, index) => (
                      <div key={index} className="slide-item">
                        <div className="container">
                          <img
                            src={item}
                            alt="Showroom Image"
                            className="w-full h-auto block object-cover max-h-[90vh] min-h-[200px] xl:min-h-[300px]"
                            width="1580"
                            height="950"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowroomsSection;
