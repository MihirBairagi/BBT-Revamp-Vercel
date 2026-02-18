"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const teamMembers = [
  { image: "/images/about-us/about-team-member-1.webp" },
  { image: "/images/about-us/about-team-member-2.webp" },
  { image: "/images/about-us/about-team-member-3.webp" },
  { image: "/images/about-us/about-team-member-4.webp" },
  { image: "/images/about-us/about-team-member-5.webp" },
  { image: "/images/about-us/about-team-member-6.webp" },
  { image: "/images/about-us/about-team-member-7.webp" },
  { image: "/images/about-us/about-team-member-8.webp" },
  { image: "/images/about-us/about-team-member-9.webp" },
  { image: "/images/about-us/about-team-member-10.webp" },
  { image: "/images/about-us/about-team-member-11.webp" },
  { image: "/images/about-us/about-team-member-12.webp" },
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white py-[5rem] lg:py-[8rem] xl:py-[12rem] 3xl:py-[14rem]">
      <div className="max-1920">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h2 className="font-light [&>b]:font-normal leading-[1.1] tracking-[-1.5px] lg:hidden">
            Motivated <b>Team</b>
          </h2>
          <div className="lg:flex flex-wrap justify-between items-center">
            <div className="grid grid-cols-4 auto-rows-fr gap-0 mt-[1.5rem] md:mt-[3rem] lg:mt-0 lg:w-[64.5%]">
              {teamMembers.map((item, index) => (
                <div key={index}>
                  <img
                    src={item.image}
                    alt="Team member Image"
                    className="w-full h-full block object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="lg:w-[30%] 3xl:w-[29%]">
              <h2 className="font-light [&>b]:font-normal leading-[1.1] tracking-[-1.5px] hidden lg:block xl:[&>b]:font-[500] xl:text-[3.9rem] 1xl:text-[4.3rem] 2xl:text-[4.6rem] 3xl:text-[5.8rem]">
                Motivated <br /> <b>Team</b>
              </h2>
              <div className="mt-[2.5rem] 3xl:mt-[3rem]">
                <p className="font-light text-[1.2rem] leading-[1.4] md:text-[1.4rem] xl:text-[1.13rem] xl:font-normal xl:tracking-tight xl:leading-[1.4] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  At Big Boy Toyz our vision is to buy and sell modern cars that
                  define quality and luxury for the 21st century. Applying our
                  expertise in this industry, we aspire to transform the exotic
                  car market, where cars are the ultimate expression of modern
                  dynamism and luxury.
                </p>
              </div>
              <div className="mt-[3rem] max-w-[310px] mx-auto hidden lg:block lg:ml-0 3xl:mt-[5rem]">
                <Link
                  href="/team"
                  className="bg-black border border-black text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] h-[5rem] xl:w-max xl:px-[4rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 1xl:px-[7rem]  2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] hover:bg-[#f1f1f1] hover:text-black"
                >
                  Meet Our Team
                </Link>
              </div>
              <Link
                href="/team"
                className="flex items-center mt-[2rem] tracking-[-0.3px] lg:hidden"
              >
                <span className="text-[1.4rem] font-medium inline-block mr-[1rem]">
                  Meet Our Team
                </span>
                <img
                  src="/images/about-us/about-team-btn-arrow.webp"
                  alt="Arrow"
                  className="w-[1.4rem] h-auto object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
