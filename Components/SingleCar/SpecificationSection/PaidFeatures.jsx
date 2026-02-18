"use client";
import React, { useEffect } from "react";
import styles from "./SpecificationSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  "Six-DVD changer.",
  "Rear Theatre Configuration.",
  " USB & Bluetooth with Assist.",
  " RR all headrests - Contrast.",
  "Silver Satin Bonnet finish.",
];

const PaidFeatures = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="lg:bg-black lg:py-28 lg:text-white xl:py-40 1xl:py-48 3xl:py-56">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <h6 className="font-medium pt-10 mt-16 border-t border-gray-300 mb-8 titleWithLine titleWhiteLine lg:pt-0 lg:mt-0 lg:border-none md:text-3.5rem xl:text-5xl 1xl:text-5.5xl 3xl:text-7xl">
          <span className="lg:bg-black lg:pr-5 relative z-10 3xl:pr-16 ">
            Paid Feature
          </span>
        </h6>
        <p className="hidden md:block text-5xl font-normal md:mb-20 md:mt-10 leading-normal xl:text-5.5xl xl:mt-16 xl:leading-relaxed xl:pr-16 1xl:text-6xl 1xl:leading-1.3 1xl:mb-32 1xl:mt-20  2xl:text-[4rem] 2xl:leading-1.4 2xl:tracking-tighter 3xl:mt-28 3xl:text-5.5rem 3xl:leading-1.2 3xl:mb-40 [&>br]:hidden xl:[&>br]:block">
          The mission was simple, direct and drove effect - delivering <br /> a
          new dimension of luxury while standardising & raising <br /> platforms for
          the used car market in India.
        </p>
        <ul className={styles.paidFeatureList}>
          {features.map((feature, index) => (
            <li key={index} className="relative pl-8 text-2xl font-light my-5 xl:text-3.5xl tracking-wide xl:pl-16 xl:mt-8 1xl:text-4xl 1xl:pl-20 1xl:mt-7 2xl:text-[2.4rem] 2xl:tracking-wider 3xl:text-5xl 3xl:mt-9 3xl:pl-24">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaidFeatures;
