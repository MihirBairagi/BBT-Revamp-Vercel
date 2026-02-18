import Link from "next/link";
import React from "react";

const brands = [
  {
    title: "BMW",
    logo: "/images/detail-page/brand-icon-bmw.webp",
    url: "/brand/bmw",
  },
  {
    title: "AUDI",
    logo: "/images/detail-page/brand-icon-audi.webp",
    url: "/brand/audi",
  },
  {
    title: "MERCEDES",
    logo: "/images/detail-page/brand-icon-mercedes.webp",
    url: "/brand/mercedes",
  },
  {
    title: "JAGUAR",
    logo: "/images/detail-page/brand-icon-jaguar.webp",
    url: "/brand/jaguar",
  },
  {
    title: "LAND ROVER",
    logo: "/images/detail-page/brand-icon-land-rover.webp",
    url: "/brand/land-rover",
  },
  {
    title: "BENTLEY",
    logo: "/images/detail-page/brand-icon-bentley.webp",
    url: "/brand/bently",
  },
  {
    title: "PORSCHE",
    logo: "/images/detail-page/brand-icon-porsche.webp",
    url: "/brand/porche",
  },
  {
    title: "LAMBORGHINI",
    logo: "/images/detail-page/brand-icon-lambo.webp",
    url: "/brand/lamborghini",
  },
  {
    title: "JEEP",
    logo: "/images/detail-page/brand-icon-jeep.webp",
    url: "/brand/jeep",
  },
  {
    title: "FERRARI",
    logo: "/images/detail-page/brand-icon-ferrari.webp",
    url: "/brand/ferrari",
  },
  {
    title: "ROLLS ROYCE",
    logo: "/images/detail-page/brand-icon-rolls-royace.webp",
    url: "/brand/rolls-royce",
  },
  {
    title: "Honda",
    logo: "/images/detail-page/brand-icon-honda.webp",
    url: "/brand/honda",
  },
  {
    title: "SKODA",
    logo: "/images/detail-page/brand-icon-skoda.webp",
    url: "/brand/skoda",
  },
  {
    title: "TOYOTA",
    logo: "/images/detail-page/brand-icon-toyota.webp",
    url: "/brand/toyota",
  },
  {
    title: "VOLVO",
    logo: "/images/detail-page/brand-icon-volvo.webp",
    url: "/brand/volvo",
  },
  {
    title: "HYUNDAI",
    logo: "/images/detail-page/brand-icon-hyundai.webp",
    url: "/brand/hyundai",
  },
];

const PopularBrands = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize">
              We are one stop shop for <b>many luxury</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              Our list of Associates share a common vision for Automotive <br />{" "}
              Excellence and a deep passion for Exotic cars.
            </p>
          </div>

          <ul
            className={`flex flex-wrap mt-[4rem] lg:mt-20 lg:border-none lg:pb-0 2xl:mt-24 3xl:mt-32 [&>*:nth-child(4n)]:border-r lg:[&>*:nth-child(4n)]:border-r-0 lg:[&>*:nth-child(6n)]:border-r xl:[&>*:nth-child(6n)]:border-r-0 xl:[&>*:nth-child(8n)]:border-r`}
          >
            {brands.map((brand, index) => (
              <li
                key={index}
                title={brand.title}
                className="w-1/4 h-24 my-8 lg:w-1/6 lg:h-36 xl:w-1/8 1xl:h-40 1xl:my-10 2xl:h-40 3xl:h-60 border-l border-[#D9D9D9] last-of-type:border-r"
              >
                <Link
                  href={brand.url}
                  className="flex px-5 py-3 items-center justify-between w-full h-full lg:px-12 lg:py-10 xl:px-12 xl:py-8"
                >
                  <img
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
          <div className="mt-[4rem]">
            <img
              src="/images/services/brands-banner.webp"
              alt=""
              className="w-full h-auto object-contain rounded-[1.5rem]"
              width="1580"
              height="475"
            />
          </div>
          <div className="mt-[4rem] 1xl:mt-[6rem] 3xl:mt-[8rem]">
            <Link
              href="/contact-us"
              className="w-max mx-auto h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] xl:px-[4.5rem] xl:h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[7.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[8rem] hover:bg-[#333333] transition-all duration-500 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
