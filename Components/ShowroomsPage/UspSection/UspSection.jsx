"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const uspList = [
  {
    title: "Automated <b>Technology</b>",
    icon: "/images/showroom-page/showroom-usp-icon-1.webp",
  },
  {
    title: "Guest  <b>Lounge Area</b>",
    icon: "/images/showroom-page/showroom-usp-icon-2.webp",
  },
  {
    title: "Expert On <b>Ground Team</b>",
    icon: "/images/showroom-page/showroom-usp-icon-3.webp",
  },
  {
    title: "State of the art  <b>Interiors</b>",
    icon: "/images/showroom-page/showroom-usp-icon-4.webp",
  },
];

const UspSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[10rem] 1xl:py-[14rem] 2xl:py-[15rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="text-center">
            <h2 className="font-light text-[2.9rem] [&>b]:font-[400] leading-[1.1] tracking-[-0.15rem] 1xl:text-[3.2rem] xl:[&>b]:font-[500] 1xl:leading-[1.2] 2xl:text-[3.6rem] 3xl:text-[4.5rem]">
              With State of The Art <br /> <b>Infrastructure</b>{" "}
            </h2>
            <p className="text-[1.2rem] mt-[1.5rem] font-light lg:text-[1.45rem] xl:text-[1.3rem] lg:font-normal 1xl:text-[1.45rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]">
              At BBT, we strive to provide the quickest and most <br /> hassle
              free car selling service available.
            </p>
          </div>
          <div className="lg:flex flex-wrap justify-between items-center xl:items-end mt-[2rem] lg:mt-[5rem]">
            <div className="hidden lg:block w-50% xl:w-[58%]">
              <img
                src="/images/showroom-page/showroom-usp-thumb.webp"
                alt="BBT Showroom"
                className="w-full h-auto object-contain"
                width="917"
                height="757"
              />
            </div>
            <div className="px-[2rem] sm:px-0 sm:max-w-[450px] sm:mx-auto lg:max-w-[100%] lg:w-[40%] xl:w-[35%] lg:mr-0">
              <ul className="flex justify-between flex-wrap  list-none">
                {uspList.map((item, index) => (
                  <li
                    className="bg-white w-[47.5%] mt-[2rem] pt-[3rem] pb-[2rem] pl-[2rem] pr-[1rem] rounded-[1rem] xl:w-[47%] xl:pt-[4.5rem] xl:pb-[3rem] 2xl:pt-[5.2rem] 2xl:pb-[4rem] 3xl:w-[46.2%] 3xl:pl-[3rem] 3xl:pt-[6rem] 3xl:pb-[5rem] 3xl:mt-[2.5rem] 3xl:rounded-[1.3rem]"
                    key={index}
                  >
                    <div className="h-[2.8rem] xl:h-[3.2rem] 1xl:h-[4rem]">
                      <img
                        src={item.icon}
                        alt="Icon"
                        width="32"
                        height="32"
                        className="object-contain h-auto max-w-[3.2rem] max-h-[2.77rem] w-full xl:max-h-[3rem] xl:max-w-[4rem] 1xl:max-w-[4rem] 1xl:max-h-[3.8rem] 2xl:max-w-[4.6rem] 2xl:max-h-[4.4rem] 3xl:max-w-[5rem] 3xl:max-h-[4.8rem]"
                      />
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.title }}
                      className="text-[1.5rem] font-[200] [&>b]:font-[500] mt-[1.5rem] [&>b]:block leading-[1.4] lg:text-[1.8rem] xl:text-[1.6rem] 1xl:text-[1.8rem] 2xl:text-[2rem] 3xl:text-[2.4rem] 3xl:mt-[3.5rem] 3xl:leading-[1.6]"
                    ></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UspSection;
