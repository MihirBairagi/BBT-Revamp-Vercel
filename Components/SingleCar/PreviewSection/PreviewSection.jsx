"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderData = [
  { tag: "Vehicle History", title: "Service Recalls (OASIS) performed" },
  {
    tag: "Road Test",
    title:
      "Auto/Manual Transmission/ Transaxle Noise Operation- Cold and Hot Shift Quality",
  },
  { tag: "Vehicle History", title: "Service Recalls (OASIS) performed" },
  {
    tag: "Road Test",
    title:
      "Auto/Manual Transmission/ Transaxle Noise Operation- Cold and Hot Shift Quality",
  },
  { tag: "Vehicle History", title: "Service Recalls (OASIS) performed" },
  {
    tag: "Road Test",
    title:
      "Auto/Manual Transmission/ Transaxle Noise Operation- Cold and Hot Shift Quality",
  },
];

const PreviewSliderItem = ({ data, index }) => {
  return (
    <div className="mr-8 h-full">
      <div
        className="text-white relative pt-8 pb-16 px-8 overflow-hidden rounded-2xl min-h-20 sm:min-h-24 lg:min-h-20 1xl:min-h-24 3xl:min-h-33"
        style={{ backgroundColor: "#131313" }}
      >
        <p className="w-max border border-white rounded-2xl text-sm py-1 px-5 text-right ml-auto sm:text-lg lg:text-sm 2xl:text-lg 2xl:leading-5 2xl:rounded-3xl 3xl:text-1xl 3xl:leading-7">
          {data.tag}
        </p>
        <h6 className="text-lg mt-8 font-normal sm:text-2xl lg:text-lg 1xl:text-xl 1xl:leading-relaxed 2xl:mt-16 2xl:leading-1.7 3xl:text-3xl 3xl:leading-1.6">
          {data.title}
        </h6>
        <span className="absolute text-neutral-700 text-8xl -right-2 -bottom-6 font-medium sm:text-9xl lg:text-8xl 2xl:text-9xl 2xl:-right-4 2xl:-bottom-9 3xl:text-11xl 3xl:-bottom-11">
          {index > 9 ? "" : "0"}
          {index + 1}
        </span>
      </div>
    </div>
  );
};

const PreviewSection = ({ carData }) => {
  const videoRef = useRef(null);
  const playRef = useRef(null);
  const audioRef = useRef(null);
  const [progressWidth, setProgressWidth] = useState(16.7);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Build URLs
  const exhaustFile = carData?.exhaustNote || "";
  const exhaustUrl = exhaustFile
    ? `https://cdn.bigboytoyz.com/new-version/products/${exhaustFile}`
    : "";

  const rawVideo = (carData?.videoEmbedCode || "").trim();
  const isYoutube = /youtube\.com|youtu\.be/.test(rawVideo);
  const isIframeProvided = rawVideo.startsWith("<iframe");
  const useIframe = isIframeProvided || isYoutube;
  const videoSrc = !useIframe && rawVideo !== "" ? rawVideo : null;

  // Determine if car is BBT certified
  const isBBTCertified = carData?.featured || carData?.isFeatured || false;

  // Toggle video play from overlay button
  const toggleVideo = () => {
    if (useIframe) return; // Do nothing for iframe
    if (!videoRef.current || !playRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      playRef.current.classList.add("opacity-0");
    } else {
      videoRef.current.pause();
      playRef.current.classList.remove("opacity-0");
    }
  };

  // Toggle engine sound audio from Engine Sound button
  const toggleEngineSound = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsAudioPlaying(true);
    } else {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    }
  };

  // Effect to sync overlay state with native video play/pause events
  useEffect(() => {
    if (!videoRef.current || useIframe) return;

    const handlePlay = () => {
      if (playRef.current) {
        playRef.current.classList.add('opacity-0');
        playRef.current.classList.add('pointer-events-none');
      }
    };

    const handlePause = () => {
      if (playRef.current) {
        playRef.current.classList.remove('opacity-0');
        playRef.current.classList.remove('pointer-events-none');
      }
    };

    const vid = videoRef.current;
    vid.addEventListener('play', handlePlay);
    vid.addEventListener('pause', handlePause);

    return () => {
      vid.removeEventListener('play', handlePlay);
      vid.removeEventListener('pause', handlePause);
    };
  }, [videoRef, playRef, useIframe]);

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
          centerPadding: "30px",
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
          <div className="container">
            <div className="flex justify-between  items-center flex-wrap">
              <div>
                <p className="uppercase hidden lg:block text-lg mb-8 xl:text-xl 1xl:text-1xl tracking-wide 2xl:text-2xl 2xl:mb-10 3xl:text-3xl 3xl:mb-16">
                  highly maintained
                </p>
                <h2 className=" text-25px tracking-tighter xl:text-5xl lg:font-normal xl:leading-relaxed 1xl:leading-1.4 1xl:text-5.5xl 3xl:text-[4.5rem]">
                  <span className="lg:font-light block">Previewing The</span>{" "}
                  Exciting Ride Ahead.
                </h2>
              </div>
              <div
                className=" text-center py-5 px-5 border rounded-xl border-[#333] cursor-pointer lg:px-8 lg:py-8 xl:py-12 3xl:py-20 3xl:px-10 group transition-all ease-in-out duration-300 hover:bg-white"
                onClick={toggleEngineSound}
              >
                <Image
                  src="/images/detail-page/detail-engine-sound-icon.webp"
                  width="17"
                  height="17"
                  className="w-7 object-contain inline-block mx-auto 2xl:w-9 3xl:w-11 transition-all ease-in-out duration-300 group-hover:invert"
                  alt="Speaker Icon"
                />
                <p className="text-base mt-5 xl:text-xl 2xl:text-1xl 2xl:mt-7 3xl:text-3xl group-hover:text-black transition-all ease-in-out duration-300">
                  {isAudioPlaying ? "Stop Sound" : "Engine Sound"}
                </p>
              </div>
            </div>
            <div className="relative mt-16 xl:mt-28 2xl:mt-32">
              {/* Video Preview */}
              {useIframe ? (
                isIframeProvided ? (
                  <div
                    className="aspect-video w-full"
                    dangerouslySetInnerHTML={{ __html: rawVideo }}
                  />
                ) : (
                  <iframe
                    src={rawVideo}
                    title="car-video"
                    className="aspect-video w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  />
                )
              ) : (
                <video
                  src={videoSrc || undefined}
                  width="335"
                  height="262"
                  className="w-full object-cover block"
                  poster="/images/detail-page/detail-engine-sound-car.webp"
                  controls
                  ref={videoRef}
                />
              )}
              {!useIframe && (
                <div
                  className="playBtnCenter cursor-pointer transition-opacity"
                  onClick={toggleVideo}
                  ref={playRef}
                >
                  <Image
                    src="/images/detail-page/detail-engine-sound-play.webp"
                    width="130"
                    height="130"
                    className="w-24 object-contain inline-block mx-auto h-auto xl:w-40 3xl:w-[13rem]"
                    alt="Play Icon"
                  />
                </div>
              )}
              {/* Hidden audio element for exhaust note */}
              {exhaustUrl && (
                <audio ref={audioRef} src={exhaustUrl} preload="none" />
              )}
            </div>
          </div>

          {/* lg:pt-24 lg:mt-24 lg:border-t lg:border-gray-300 */}
          <div className="lg:pt-32 xl:pt-44 1xl:pt-48 3xl:pt-60">
            <div className="container divider hidden lg:block h-1 lg:border-t lg:border-neutral-500"></div>
            <div className="lg:flex lg:flex-wrap lg:pl-20 lg:pt-32 xl:pt-44 xl:pl-28 overflow-x-hidden 1xl:pt-48 2xl:pl-36 3xl:pt-64 3xl:pl-48">
              <div className="flex flex-wrap items-center px-8 sm:px-16 md:px-20 lg:w-30% lg:block lg:pr-0 3xl:w-28%">
                <div className="divider w-full h-1 border-t border-gray-300 mt-20 pt-20 lg:hidden"></div>
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
                <div className={`${isBBTCertified ? 'w-70% sm:flex-grow pl-10 lg:w-full lg:pl-0' : 'w-full'}`}>
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
                    href="#"
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
      </div>
    </section>
  );
};

export default PreviewSection;
