"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreSection = () => {
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black">
      <div className="max-1920">
        <div className="relative">
          <div
            className="text-box text-white lg:absolute z-10 px-10 w-full right-0 top-0 text-center py-[8rem] lg:w-5/12 lg:text-left lg:right-10 lg:max-w-3xl xl:max-w-4xl xl:right-0 2xl:right-16 3xl:max-w-6xl xl:py-[15rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <p className="uppercase text-lg mb-4 md:mb-8 lg:text-xl xl:mb-10 xl:text-2xl 2xl:mb-12 3xl:text-3xl 3xl:mb-14">
              LET'S KEEP IT SIMPLE.
            </p>
            <h2 className="font-light leading-tight tracking-tight md:text-4xl lg:text-6xl lg:tracking-tighter lg:leading-snug xl:text-6.5xl 2xl:text-7xl 3xl:text-8xl sm:[&>br]:hidden xl:[&>br]:block [&>strong]:font-normal">
              We are the best when it <br /> comes{" "}
              <strong>to exotic cars.</strong>
            </h2>
            <div className="hidden md:block mt-10 xl:mt-14 2xl:mt-20">
              <Link href="/about-us" className="btn btnWhite roundedBtn">
                About Us
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-1/4 md:top-2/4 explore-interactive-badge z-10">
            <span
              className="block cursor-pointer"
              onClick={() => setOpenPopup(true)}
            >
              <img
                src="/images/360-deg-badge.webp"
                width="197"
                height="301"
                className="object-contain block w-40 lg:w-52 1xl:w-60 3xl:w-80"
                alt="Interactive Virtual Tour"
              />
            </span>
          </div>
          <div className="absolute bottom-0 w-full left-0 text-center px-10 pb-[8rem] md:hidden">
            <Link href="/about-us" className="btn btnWhite roundedBtn">
              Explore More
            </Link>
          </div>
          <div className="video-box w-full xl:w-[75%]">
            <video
              className="w-full block object-cover min-h-[500px] max-h-[90vh]"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/360-deg-vid-thumb-mob.webp"
            >
              <source
                src="/videos/hp-explore-video-new.webm"
                type="video/webm"
              />
              <source src="/videos/hp-explore-video-new.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {openPopup && (
        <div
          className={`${
            openPopup ? "opacity-100 flex" : ""
          } fixed w-full h-full left-0 top-0 min-h-screen items-center justify-center opacity-0 transition-all duration-500 z-100`}
        >
          <div
            className={` bg-[#00000099] w-full h-full fixed left-0 top-0 z-10 block opacity-100 transition-all duration-500`}
            onClick={() => setOpenPopup(false)}
          ></div>
          <div className="w-[95%] bg-white h-auto max-h-[800px] z-20 mx-auto relative overflow-x-hidden lg:w-[80%] lg:rounded-[1.5rem] lg:max-h-[90vh] xl:w-[70%] 2xl:max-w-[1400px]">
            <div
              className=" absolute top-[8px] right-[8px] w-[15px] h-[2.6rem] cursor-pointer xl:w-[22px] xl:top-[12px] xl:right-[12px]"
              onClick={() => setOpenPopup(false)}
            >
              <img
                src="/images/bbt-certified-popup-close.webp"
                alt="Close Popup"
                className="w-full object-contain"
                width="29"
                height="29"
              />
            </div>

            <div className="h-full w-full p-[20px] lg:p-[20px] xl:p-[35px]">
              <iframe
                src="https://my.matterport.com/show/?m=GPaMwJqXQaH&mls=1"
                allowfullscreen=""
                allow="xr-spatial-tracking"
                width="100%"
                height="500"
                frameborder="0"
                className="w-full h-full min-h-[300px] lg:min-h-[450px] xl:min-h-[500px] 3xl:min-h-[650px]"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExploreSection;
