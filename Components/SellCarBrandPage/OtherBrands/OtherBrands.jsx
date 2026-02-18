"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const brands = [
  {
    title: "BMW",
    logo: "/images/detail-page/brand-icon-bmw.webp",
    url: "/sell-my-used-bmw-car",
  },
  {
    title: "AUDI",
    logo: "/images/detail-page/brand-icon-audi.webp",
    url: "/sell-my-used-audi-car",
  },
  {
    title: "MERCEDES",
    logo: "/images/detail-page/brand-icon-mercedes.webp",
    url: "/sell-my-used-mercedes-car",
  },
  {
    title: "JAGUAR",
    logo: "/images/detail-page/brand-icon-jaguar.webp",
    url: "/sell-my-used-jaguar-car",
  },
  {
    title: "LAND ROVER",
    logo: "/images/detail-page/brand-icon-land-rover.webp",
    url: "/sell-my-used-land-rover-car",
  },
  {
    title: "BENTLEY",
    logo: "/images/detail-page/brand-icon-bentley.webp",
    url: "/sell-my-used-bently-car",
  },
  {
    title: "PORSCHE",
    logo: "/images/detail-page/brand-icon-porsche.webp",
    url: "/sell-my-used-porche-car",
  },
  {
    title: "LAMBORGHINI",
    logo: "/images/detail-page/brand-icon-lambo.webp",
    url: "/sell-my-used-lamborghini-car",
  },
  {
    title: "JEEP",
    logo: "/images/detail-page/brand-icon-jeep.webp",
    url: "/sell-my-used-jeep-car",
  },
  {
    title: "FERRARI",
    logo: "/images/detail-page/brand-icon-ferrari.webp",
    url: "/sell-my-used-ferrari-car",
  },
  {
    title: "ROLLS ROYCE",
    logo: "/images/detail-page/brand-icon-rolls-royace.webp",
    url: "/sell-my-used-rolls-royce-car",
  },
  {
    title: "Honda",
    logo: "/images/detail-page/brand-icon-honda.webp",
    url: "/sell-my-used-honda-car",
  },
  {
    title: "SKODA",
    logo: "/images/detail-page/brand-icon-skoda.webp",
    url: "/sell-my-used-skoda-car",
  },
  {
    title: "TOYOTA",
    logo: "/images/detail-page/brand-icon-toyota.webp",
    url: "/sell-my-used-toyota-car",
  },
  {
    title: "VOLVO",
    logo: "/images/detail-page/brand-icon-volvo.webp",
    url: "/sell-my-used-volvo-car",
  },
  {
    title: "HYUNDAI",
    logo: "/images/detail-page/brand-icon-hyundai.webp",
    url: "/sell-my-used-hyundai-car",
  },
];

const OtherBrands = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#f2f2f2] pb-[6rem] xl:pb-[10rem] 2xl:pb-[12rem]">
      <div className="max-1920">
        <div className="container">
          <div
            className="relative lg:flex lg:justify-between pt-[6rem] border-t border-[#666666] lg:border-0"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h2 className="titleWithLine flex-grow text-center lg:text-left xl:tracking-tighter">
              <span className="lg:bg-[#f2f2f2] lg:pr-10 relative z-10">
                Other Brands
              </span>
            </h2>
          </div>
          <ul
            className={`flex flex-wrap mt-[4rem] lg:mt-20 2xl:mt-24 3xl:mt-32 [&>*:nth-child(4n)]:border-r lg:[&>*:nth-child(4n)]:border-r-0 lg:[&>*:nth-child(6n)]:border-r xl:[&>*:nth-child(6n)]:border-r-0 xl:[&>*:nth-child(8n)]:border-r`}
          >
            {brands.map((brand, index) => (
              <li
                key={index}
                title={brand.title}
                className="w-1/4 h-24 my-8 lg:w-1/6 lg:h-36 xl:w-1/8 1xl:h-40 1xl:my-10 2xl:h-40 3xl:h-60 border-l border-[#D9D9D9] last-of-type:border-r"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <Link
                  href={brand.url}
                  className="flex px-5 py-3 items-center justify-between w-full h-full lg:px-12 lg:py-10 xl:px-12 xl:py-8"
                >
                  <Image
                    src={brand.logo}
                    width="100"
                    height="100"
                    alt={brand.title}
                    className="object-contain block w-full max-h-16 xl:max-h-18 1xl:max-h-20 1xl:max-w-7r 1xl:mx-auto 2xl:max-w-8r 2xl:max-h-24 3xl:max-h-32 hover:scale-110 transition-all duration-500 ease-in-out"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OtherBrands;
