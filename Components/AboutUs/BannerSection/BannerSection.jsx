"use client";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerSection = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };
  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white pt-[3rem] lg:pt-[5rem] 1xl:pt-[7rem]">
      <div className="max-1920">
        <div className="container relative z-10">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-[40%]">
                <div className="hidden lg:block ">
                  <p className="flex breadcrumbs flex-wrap items-center font-light">
                    <Link
                      href="/"
                      className="text-[1.2rem] xl:text-[1.1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
                    >
                      Home
                    </Link>
                    <img
                      src="/images/breadcrumb-arrow.webp"
                      className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                      width="6"
                      height="11"
                      alt="Arrow Icon"
                    />
                    <span className="text-[1.2rem] xl:text-[1.1rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
                      About Us
                    </span>
                  </p>
                </div>
                <h1 className="font-extralight [&>b]:font-normal tracking-[-2.5px] xl:text-[5rem] 1xl:text-[5.7rem] 1xl:tracking-[-3px] 2xl:text-[6rem] 3xl:text-[7.5rem]">
                  The <b>Company</b>
                </h1>
              </div>
              <div className="lg:w-[53%]">
                <p className="text-[1.2rem] font-normal tracking-wide leading-[1.5] lg:font-medium mt-[1rem] md:text-[1.4rem] xl:text-[1.85rem] 1xl:text-[2.05rem] 2xl:text-[2.2rem] 3xl:text-[2.8rem]">
                  BBT started in 2009 as a benchmark model for the Pre-Used, or
                  how we prefer to see it as, Pre-Loved Car Brand. The mission
                  was simple, direct and drove effect - delivering a new
                  dimension of luxury while standardising & raising platforms
                  for the used car market in India.
                </p>
              </div>
            </div>

            <div className="relative mt-[2.5rem] mb-[4rem] lg:mt-[4rem] xl:mt-[6.5rem] xl:mb-[8.5rem] 1xl:mt-[8rem] 2xl:mb-[9.5rem] 3xl:mb-[12rem]">
              {/* Mobile Video */}
              <video
                src="/videos/about-banner-video.webm"
                className="w-full block h-full object-cover min-h-[432px] md:hidden"
                poster="/images/about-us/about-video-thumb.webp"
                loop
                muted
                playsInline
                preload="auto"
                autoPlay
              ></video>

              {/* Desktop Video */}
              <video
                src="/videos/about-banner-video.webm"
                className="w-full h-full object-cover hidden md:block"
                poster="/images/about-us/about-video-thumb.webp"
                loop
                muted
                playsInline
                preload="auto"
                autoPlay
              ></video>
              {/* <div
                className={`play-btn absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[7.5rem] h-[7.5rem] cursor-pointer ${
                  playing ? "opacity-[0]" : "opacity-[1]"
                }`}
                onClick={handlePlayVideo}
              >
                <img
                  src="/images/about-us/about-play-btn.webp"
                  alt="Play button"
                  className="w-full object-contain h-auto"
                />
              </div> */}
            </div>
          </div>

          <div
            className="relative z-10"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h2 className="font-light [&>b]:font-normal tracking-[-2px] leading-[1.1] pb-[2.5rem] mb-[2.5rem] border-b border-b-black [&>br]:hidden lg:[&>br]:block xl:text-[4rem] xl:tracking-[-2.5px] xl:pb-[4rem] xl:mb-[4rem] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:pb-[6rem] 2xl:text-[4.8rem] 3xl:text-[5.8rem] 3xl:mb-[5rem] 3xl:pb-[7rem]">
              Big Boy Toyz, a{" "}
              <b>
                pre-owned luxury car <br /> dealer deals with 24 brands.
              </b>
            </h2>
            <div className="[&>p]:font-light [&_b]:font-[500] [&>p]:text-[1.4rem] [&>p]:leading-[1.5] md:[&>p]:text-[1.5rem] lg:flex lg:justify-between 3xl:[&>p]:text-[1.6rem]">
              <h5 className="hidden lg:block lg:w-max xl:text-[1.7rem] 3xl:text-[2.5rem] xl:w-[21%] font-medium tracking-tighter 1xl:text-[1.9rem] 3xl:font-[600] 3xl:w-[23%]">
                About Company
              </h5>
              <p className="lg:w-[37%] 3xl:w-[36%]">
                <b>BBT started in 2009</b> as a benchmark model for the
                Pre-Used, or how we prefer to see it as, Pre-Loved Car Brand.
                The mission was simple, direct and drove effect - delivering a
                new dimension of luxury while standardising & raising platforms
                for the used car market in India.
              </p>
              <p className="mt-[2.5rem] lg:w-[32%] lg:mt-0 1xl:w-[31%]">
                <b>Since our inception</b> our primary aim has been our passion
                for delivering excellence which became our mission. YOU (our
                patrons) are the driving force behind our company and making
                sure you get the best is what we thrive on.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[-3rem] lg:mt-[-15rem] xl:mt-[-23rem] 1xl:mt-[-27rem]">
          <img
            src="/images/about-us/about-banner-bottom.webp"
            alt="Thumbnail"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

// Test Comment
// test comment 2
// Test 3
