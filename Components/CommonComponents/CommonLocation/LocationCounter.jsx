"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const LocationCounter = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const showroomCount = useRef();

  useEffect(() => {
    gsap.to(showroomCount.current, {
      duration: 1.5,
      innerHTML: 6,
      roundProps: "innerHTML",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: showroomCount.current,
        // markers: true,
        start: "top 100%",
        end: "top 82%",
        toggleActions: "restart none none none",
      },
    });

    gsap.to(showroomCount.current, {
      duration: 1.5,
      innerHTML: 6,
      roundProps: "innerHTML",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: showroomCount.current,
        // markers: true,
        start: "bottom 5%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
      },
    });
  }, []);
  return (
    <div
      className="text-center flex justify-center items-center font-medium text-24xl mb-20 leading-0.8 lg:justify-end lg:mb-0 lg:w-40% lg:text-32xl lg:tracking-tight lg:text-right 1xl:text-36xl 3xl:text-46xl"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      0 <span ref={showroomCount}></span>
    </div>
  );
};

export default LocationCounter;
