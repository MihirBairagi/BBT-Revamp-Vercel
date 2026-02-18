"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const brands = [
  {
    title: "BMW",
    logo: "/images/brands/bmw-logo.png",
    url: "/collection?brand=4",
  },
  {
    title: "AUDI",
    logo: "/images/brands/audi-logo.png",
    url: "/collection?brand=audi",
  },
  {
    title: "MERCEDES",
    logo: "/images/brands/mercedes-logo.png",
    url: "/collection?brand=mercedes",
  },
  {
    title: "JAGUAR",
    logo: "/images/brands/jaguar-logo.png",
    url: "/collection?brand=jaguar",
  },
  {
    title: "LAND ROVER",
    logo: "/images/brands/land-rover-logo.png",
    url: "/collection?brand=land-rover",
  },
  {
    title: "BENTLEY",
    logo: "/images/brands/bentley-logo.png",
    url: "/collection?brand=bentley",
  },
  {
    title: "PORSCHE",
    logo: "/images/brands/porsche-logo.png",
    url: "/collection?brand=porsche",
  },
  {
    title: "LAMBORGHINI",
    logo: "/images/brands/lamborghini-logo.png",
    url: "/collection?brand=lamborghini",
  },
  {
    title: "JEEP",
    logo: "/images/brands/jeep-logo.png",
    url: "/collection?brand=jeep",
  },
  {
    title: "FERRARI",
    logo: "/images/brands/ferrari-logo.png",
    url: "/collection?brand=ferrari",
  },
  {
    title: "ROLLS ROYCE",
    logo: "/images/brands/rolls-royce-logo.png",
    url: "/collection?brand=rolls-royce",
  },
  {
    title: "Maybach",
    logo: "/images/brands/maybach-logo.png",
    url: "/collection?brand=maybach",
  },
  {
    title: "Range Rover",
    logo: "/images/brands/range-rover-logo.png",
    url: "/collection?brand=range-rover",
  },
  {
    title: "TOYOTA",
    logo: "/images/brands/toyota-logo.png",
    url: "/collection?brand=toyota",
  },
  {
    title: "VOLVO",
    logo: "/images/brands/volvo-logo.png",
    url: "/collection?brand=volvo",
  },
  {
    title: "Hummer",
    logo: "/images/brands/hummer-logo.png",
    url: "/collection?brand=hummer",
  },
];

const PopularBrands = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="pt-24 bg-white lg:pt-40 2xl:pt-52 3xl:pt-60">
      <div className="max-1920">
        <div className="container">
          <div
            className="relative lg:flex lg:justify-between"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h2 className="titleWithLine flex-grow xl:tracking-tighter">
              <span className="lg:bg-white lg:pr-10 relative z-10">
              Our Portfolio
              </span>
            </h2>
            <div className="hidden lg:inline-block w-max bg-white pl-10">
              <a href="#" className="btn btnBlack roundedBtn 3xl:px-[7rem]">
                View All Brands
              </a>
            </div>
          </div>
          <ul
            className={`flex flex-wrap mt-5 pb-20 border-b border-stone-300 lg:mt-20 lg:border-none lg:pb-0 2xl:mt-24 3xl:mt-32 [&>*:nth-child(4n)]:border-r lg:[&>*:nth-child(4n)]:border-r-0 lg:[&>*:nth-child(6n)]:border-r xl:[&>*:nth-child(6n)]:border-r-0 xl:[&>*:nth-child(8n)]:border-r`}
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

export default PopularBrands;
