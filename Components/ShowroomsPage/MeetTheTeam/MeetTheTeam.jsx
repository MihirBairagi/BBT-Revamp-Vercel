"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const MeetTheTeam = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className="max-[3000px] mx-auto relative">
        <div className="sm:hidden">
          <img
            src="/images/showroom-page/team-banner-desktop.webp"
            alt="Background Image"
            className="w-full object-cover h-[90vh] min-h-[600px]"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/showroom-page/team-banner-desktop.webp"
            alt="Background Image"
            className="w-full object-cover h-auto min-h-[650px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)] sm:bg-transparent">
          <div
            className="container w-full h-full"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="flex h-full w-full flex-col justify-between py-[6rem] sm:justify-center">
              <div className="text-center text-white sm:text-left">
                <p className="text-[1.12rem] uppercase font-light xl:hidden">
                  BBt Squad
                </p>
                <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-1px]">
                  Meet The{" "}
                  <b>
                    {" "}
                    Passion <br /> Behind BBT
                  </b>
                </h2>
                <p className="font-light text-[1.2rem] mt-[1.5rem] lg:text-[1.4rem] xl:text-[1.8rem] xl:max-w-[30rem] xl:[&>br]:hidden 1xl:text-[2rem] 1xl:max-w-[35rem] 3xl:text-[2.8rem] 3xl:max-w-[46rem] 3xl:mt-[3rem]">
                  At BBT, we strive to provide the quickest and most <br />{" "}
                  hassle free car selling service available.
                </p>
              </div>
              <div className="text-center sm:text-left sm:mt-[3rem] 3xl:mt-[5rem]">
                <Link
                  href="/team"
                  className="w-full max-w-[31rem] h-[5.5rem] flex justify-center items-center text-[1.4rem] bg-white border border-white px-[3rem] py-[1rem] rounded-[3rem] mx-auto tracking-[-1px] font-medium sm:ml-0 sm:max-w-[27.3rem] xl:h-[4.5rem] xl:max-w-[17rem] xl:text-[1.2rem] 1xl:h-[5rem] 1xl:max-w-[20rem] 1xl:text-[1.4rem] 3xl:h-[6.57rem] 3xl:max-w-[27rem] 3xl:text-[1.8rem] hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
                >
                  Meet The Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
