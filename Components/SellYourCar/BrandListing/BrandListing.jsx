import Link from "next/link";
import React from "react";

import {brands} from "./brands.js";

const BrandListing = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="relative lg:flex lg:justify-between">
            <h2 className="titleWithLine flex-grow xl:tracking-tighter">
              <span className="lg:bg-[#F4F4F1] lg:pr-10 relative z-10">
                Popular Brands
              </span>
            </h2>
            <div className="hidden lg:inline-block w-max bg-[#F4F4F1] pl-10">
              <a href="#" className="btn btnBlack roundedBtn 3xl:px-[7rem]">
                View All Brands
              </a>
            </div>
          </div>

          <ul
            className={`flex flex-wrap mt-5  lg:mt-20 lg:border-none 2xl:mt-24 3xl:mt-32 [&>*:nth-child(4n)]:border-r lg:[&>*:nth-child(4n)]:border-r-0 lg:[&>*:nth-child(6n)]:border-r xl:[&>*:nth-child(6n)]:border-r-0 xl:[&>*:nth-child(8n)]:border-r`}
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
        </div>
      </div>
    </section>
  );
};

export default BrandListing;
