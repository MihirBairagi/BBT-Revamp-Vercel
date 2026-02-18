"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import MarqueeSlider from "./MarqueeSlider";
import styles from "./SellYourCar.module.css";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

const usps = [
  {
    title: `Best Offer <strong>in 29 Minutes</strong>`,
    icon: "/images/sell-plan-usp-icon-1.webp",
  },
  {
    title: `Outright  <strong>Sale</strong>`,
    icon: "/images/sell-plan-usp-icon-2.webp",
  },
  {
    title: `7600+ Satisfied <strong>Customers</strong>`,
    icon: "/images/sell-plan-usp-icon-3.webp",
  },
  {
    title: `Hassle Free <strong>Process</strong>`,
    icon: "/images/sell-plan-usp-icon-4.webp",
  },
];

gsap.registerPlugin(ScrollTrigger);

const SellYourCar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const count1 = useRef();
  const count2 = useRef();

  useEffect(() => {
    gsap.to(count1.current, {
      duration: 1,
      innerHTML: 2,
      roundProps: "innerHTML",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: count1.current,
        // markers: true,
        start: "top 100%",
        end: "top 82%",
        toggleActions: "restart none none none",
      },
    });

    gsap.to(count1.current, {
      duration: 1,
      innerHTML: 2,
      roundProps: "innerHTML",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: count1.current,
        // markers: true,
        start: "bottom 5%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
      },
    });

    gsap.to(count2.current, {
      duration: 2,
      innerHTML: 9,
      roundProps: "innerHTML",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: count2.current,
        // markers: true,
        start: "top 100%",
        end: "top 82%",
        toggleActions: "restart none none none",
      },
    });

    gsap.to(count2.current, {
      duration: 2,
      innerHTML: 9,
      roundProps: "innerHTML",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: count2.current,
        // markers: true,
        start: "bottom 5%",
        end: "bottom 20%",
        toggleActions: "restart none restart none",
      },
    });
  }, []);

  return (
    <section className="pt-20 pb-24 bg-dark-800 lg:py-40 3xl:py-64">
      <div className="container">
        <h2
          className={`text-white mb-16 tracking-tighter relative xl:mb-20 3xl:mb-32 ${styles.sectionHeading}`}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Planning To Sell?
        </h2>
      </div>

      <div className="relative lg:mb-14">
        <div className="mb-8 lg:mb-0 lg:w-max lg:relative z-20 mx-auto">
          <div
            className={`${styles.sellCarNumber} text-center`}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <span className=" text-white relative font-black" ref={count1}>
              0
            </span>
            <span className=" text-white relative font-black" ref={count2}>
              0
            </span>
            <div className={`${styles.sellCarImg}`}>
              <Image
                src="/images/sell-car-desktop.webp"
                width="301"
                height="544"
                alt="Car Image"
                className="hidden lg:block object-contain"
              />
              <Image
                src="/images/sell-car-mob.webp"
                width="327"
                height="181"
                alt="Car Image"
                className="lg:hidden block object-contain w-full"
              />
            </div>
          </div>
        </div>
        <div
          className={`lg:absolute left-0 w-full ${styles.marqueeWrapper}`}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <MarqueeSlider />
        </div>
      </div>

      <div className="container">
        <p
          className="hidden text-white text-center mx-auto text-5xl lg:block font-light leading-snug xl:mt-28 2xl:text-6xl 2xl:leading-normal 2xl:tracking-tighter 3xl:text-7xl 3xl:leading-relaxed"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Accelerate your selling journey with our <br />{" "}
          <span className="font-normal">29-minute car-selling magic!</span>
          Transform your car <br /> into cash in record time, hassle-free.
        </p>
        <ul
          className="flex flex-wrap justify-between mt-10 mb-16 lg:max-w-7xl lg:mx-auto xl:max-w-8xl 1xl:max-w-9xl 2xl:max-w-10xl 3xl:max-w-16xl 3xl:mt-16"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          {usps.map((usp, index) => (
            <li
              key={index}
              className="bg-dark-600 pl-8 pr-2 py-12 rounded-xl w-5.5/12 mt-8 lg:w-2.7/12 lg:rounded-2xl lg:pl-10 lg:py-16 3xl:pl-14 3xl:py-20 3xl:rounded-3xl group hover:bg-white transition-all duration-500 ease-in-out"
            >
              <Image
                src={usp.icon}
                width="25"
                height="25"
                alt="Car Image"
                className="w-10 object-contain mb-6 xl:w-11 xl:mb-12 2xl:w-12 3xl:w-16 group-hover:invert transition-all duration-500 ease-in-out"
              />
              <p
                className="text-white font-extralight text-2xl mt-4 [&>strong]:font-medium [&>strong]:block leading-normal xl:text-3xl xl:leading-relaxed 3xl:text-4xl 3xl:leading-relaxed group-hover:text-black transition-all duration-500 ease-in-out"
                dangerouslySetInnerHTML={{ __html: usp.title }}
              ></p>
            </li>
          ))}
        </ul>

        <div
          className="text-center mt-24 3xl:mt-32"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <Link href="/sell-used-luxury-car" className="btn btnWhite roundedBtn">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SellYourCar;
