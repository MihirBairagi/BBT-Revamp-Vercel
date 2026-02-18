"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const uspList1 = [
  {
    icon: "/images/bbt-squad/squad-benefit-usp-1.webp",
    title: "Get instant <br>  offer",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-2.webp",
    title: "Get Paid on <br>  the Spot",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-3.webp",
    title: "Freedom to <br>  work",
  },
];

const uspList2 = [
  {
    icon: "/images/bbt-squad/squad-benefit-usp-4.webp",
    title: "Flexible <br> timing",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-5.webp",
    title: "Pan India <br> reach",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-6.webp",
    title: "Exposure on a <br> larger scale",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-7.webp",
    title: "Sharpen communication skills",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-8.webp",
    title: "Be a part of the <br> BBT Family",
  },
  {
    icon: "/images/bbt-squad/squad-benefit-usp-9.webp",
    title: "Support by BBT <br> Professionals",
  },
];

const BenefitsSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="pt-[6rem] bg-white md:py-[10rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div
          className="md:w-[91%] md:mx-auto xl:w-[82%]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="md:flex md:flex-wrap md:justify-between">
            <div className="px-[2.2rem] mb-[3.5rem] sm:max-w-[410px] sm:mx-auto md:max-w-none md:ml-0 md:w-[52%] md:px-0 lg:w-[50%]">
              <h2 className="font-light [&>b]:font-normal leading-[1.2] tracking-[-0.2rem] 1xl:text-[4.2rem] 3xl:text-[5.8rem]">
                The BBT Squad <br /> Benefits- <b>Join The Party</b>{" "}
              </h2>
              <p className="font-light text-[1.2rem] mt-[1.2rem] pr-[1rem] 1xl:mt-[2rem] 2xl:mt-[3rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem]">
                BBT Squad is a new platform inviting car enthusiasts to pursue
                their passion for automobiles without compromising on their
                existing work areas. You can exploit the opportunity of earning
                by procuring cars for us. It is possible to do this, by
                centralizing your independent freelance relationships,
                collaborating, quoting prices and using the BBT brand to take
                you to the next level.
              </p>
              <ul className="grid grid-cols-3 gap-[1.2rem] mt-[3rem] xl:gap-[2rem] 1xl:mt-[3.7rem] 2xl:mt-[4rem] 3xl:gap-[3rem]">
                {uspList1.map((usp, index) => (
                  <li
                    key={index}
                    className="bg-[#F3F3F3] py-[2rem] px-[1.5rem] text-center rounded-[1rem] lg:py-[3rem] 1xl:py-[3.5rem] 2xl:rounded-[1.5rem] 2xl:py-[4rem] 3xl:py-[5rem]"
                  >
                    <div className="flex justify-center">
                      <img
                        src={usp.icon}
                        alt="Icon"
                        className="h-auto object-contain max-h-[2.4rem] md:max-h-[3rem] 1xl:max-h-[3.4rem] 3xl:max-h-[4.5rem]"
                        width="57"
                        height="57"
                      />
                    </div>
                    <p
                      className="text-[1.1rem] mt-[1.2rem] leading-[1.2] md:text-[1.2rem] md:mt-[1.8rem] lg:text-[1.5rem] xl:text-[1.75rem] xl:font-light 1xl:text-[1.85rem] 1xl:mt-[2rem] 2xl:text-[1.9rem] 3xl:text-[2.4rem] 3xl:mt-[2.5rem]"
                      dangerouslySetInnerHTML={{ __html: usp.title }}
                    ></p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-[40%] xl:w-[43.3%]">
              <img
                src="/images/bbt-squad/squad-benefit-thumb-2.webp"
                alt="Thumbnail"
                className="w-full h-auto object-cover"
                width="685"
                height="858"
              />
            </div>
          </div>

          <div className="md:flex md:flex-wrap md:justify-between md:flex-row-reverse md:items-end lg:mt-[-2rem] xl:mt-[-10rem] 1xl:mt-[-13rem] 3xl:mt-[-17rem]">
            <div className="px-[2.2rem] my-[3.5rem] sm:max-w-[410px] sm:mx-auto md:max-w-none md:mr-0 md:w-[52%] md:px-0 md:my-0 lg:w-[50%]">
              <p className="font-light text-[1.2rem] mt-[1.2rem] pr-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem]">
                BBT Squad is a new platform inviting car enthusiasts to pursue
                their passion for automobiles without compromising on their
                existing work areas. You can exploit the opportunity of earning
                by procuring cars for us.
              </p>
              <ul className="grid grid-cols-3 auto-rows-fr gap-[1.2rem] mt-[3rem] xl:gap-[2rem] 2xl:mt-[3.5rem] 3xl:gap-[3rem] 3xl:mt-[5rem] ">
                {uspList2.map((usp, index) => (
                  <li
                    key={index}
                    className="bg-[#F3F3F3] py-[2rem] px-[1.5rem] text-center rounded-[1rem] lg:py-[3rem] md:px-[1rem] 1xl:py-[3.5rem]"
                  >
                    <div className="flex justify-center">
                      <img
                        src={usp.icon}
                        alt="Icon"
                        className="h-auto object-contain max-h-[2.4rem] md:max-h-[3rem] 1xl:max-h-[3.4rem] 3xl:max-h-[4.5rem]"
                        width="57"
                        height="57"
                      />
                    </div>
                    <p
                      className="text-[1.1rem] mt-[1.2rem] leading-[1.2] md:text-[1.2rem] md:mt-[1.8rem] lg:text-[1.5rem] xl:text-[1.75rem] xl:font-light 1xl:text-[1.85rem] 1xl:mt-[2rem] 2xl:text-[1.9rem] 3xl:text-[2.4rem]"
                      dangerouslySetInnerHTML={{ __html: usp.title }}
                    ></p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-[40%] xl:w-[43.3%]">
              <img
                src="/images/bbt-squad/squad-benefit-thumb-1.webp"
                alt="Thumbnail"
                className="w-full h-auto object-cover"
                width="685"
                height="858"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
