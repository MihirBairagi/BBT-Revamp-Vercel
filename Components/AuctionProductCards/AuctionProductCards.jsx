"use client";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const AuctionProductCards = () => {
  return (
    <div className="py-[8rem]">
      <div className="md:w-[91%] mx-auto lg:w-[83%] max-w-[1920px]">
        {/* Cards Wrapper */}
        <div className="block md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-[4rem]">
          {/* Product Card 1 */}
          <div className="w-full [&_.item-divider]:hidden auction-product-card">
            <div className=" pb-16 md:bg-[#fff] md:mt-[4rem] common-car-item transition-all duration-500 ease-in-out">
              <div className="item-divider max-w-[90%] mx-auto h-[1px] border-t border-[#D9D9D9] md:hidden"></div>
              <Link
                href="#"
                className="block px-14 pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem]"
              >
                <p
                  className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-[1.2rem] 3xl:px-10 1xl:py-2`}
                >
                  ID : 25825918
                </p>
                <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[2rem] 2xl:tracking-tighter 3xl:text-[2.5rem] 1xl:mt-6 3xl:mt-8 line-clamp-1">
                  2015 Dinesh Karthik’s Range Rover
                </h4>
                <p
                  className={`text-3xl mt-2 font-medium lg:mt-3 1xl:mt-6 mb-12 sm:mb-8 1xl:text-[1.8rem] 3xl:text-[2.2rem] tracking-[-1px]`}
                >
                  FMV: ₹ 90,00,000
                </p>
              </Link>

              <div className="relative">
                <Link href="#" className="block">
                  <Slider {...settings} className="collection-gallery-slider">
                    <div className="relative pt-2 outline-none">
                      <img
                        src="/images/auction-car-img.png"
                        alt="Product Image"
                        className="w-full object-cover block"
                        width="400"
                        height="310"
                      />
                    </div>
                    <div className="relative pt-2 outline-none">
                      <img
                        src="/images/auction-car-img.png"
                        alt="Product Image"
                        className="w-full object-cover block"
                        width="400"
                        height="310"
                      />
                    </div>
                    <div className="relative pt-2 outline-none">
                      <img
                        src="/images/auction-car-img.png"
                        alt="Product Image"
                        className="w-full object-cover block"
                        width="400"
                        height="310"
                      />
                    </div>
                  </Slider>
                </Link>
              </div>

              <div className="px-16 pt-8 md:px-10 xl:px-[3rem] 1xl:px-[4rem] 3xl:px-[5rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem] ">
                <Link href="#" className="block">
                  <ul className="flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0">
                    <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem]">
                      <img
                        src="/images/km-icon-black.webp"
                        alt="Icon"
                        width="24"
                        height="25"
                        className="object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem]"
                      />
                      <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                        Kilometers Driven
                      </p>
                      <h6
                        className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                      >
                        28,900km
                      </h6>
                    </li>
                    <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                      <img
                        src="/images/gas-icon-black.webp"
                        alt="Icon"
                        width="24"
                        height="25"
                        className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem] `}
                      />
                      <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                        Fuel / Gas Type
                      </p>
                      <h6
                        className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                      >
                        Petrol
                      </h6>
                    </li>
                    <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                      <img
                        src="/images/register-icon-black.webp"
                        alt="Icon"
                        width="24"
                        height="25"
                        className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem] `}
                      />
                      <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                        Owner
                      </p>
                      <h6
                        className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                      >
                        Ist Owner
                      </h6>
                    </li>
                  </ul>
                </Link>

                <div className="mt-12">
                  <Link
                    href="/deeplinking?sectionName=CarAuction"
                    className="bg-red-500 text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer border-black border transition-all hover:bg-transparent hover:text-black duration-300"
                  >
                    Join The Auction
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="w-full [&_.item-divider]:hidden auction-product-card">
            <div className=" pb-16 md:bg-[#fff] md:mt-[4rem] common-car-item transition-all duration-500 ease-in-out">
              <div className="item-divider max-w-[90%] mx-auto h-[1px] border-t border-[#D9D9D9] md:hidden"></div>
              <Link
                href="#"
                className="block px-14 pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem]"
              >
                <p
                  className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-[1.2rem] 3xl:px-10 1xl:py-2`}
                >
                  ID : 25825918
                </p>
                <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[2rem] 2xl:tracking-tighter 3xl:text-[2.5rem] 1xl:mt-6 3xl:mt-8 line-clamp-1">
                  Hublot Spirit of Big Bang King Gold Blue Ceramic 42mm
                </h4>
                <p
                  className={`text-3xl mt-2 font-medium lg:mt-3 1xl:mt-6 mb-12 sm:mb-8 1xl:text-[1.8rem] 3xl:text-[2.2rem] tracking-[-1px]`}
                >
                  FMV: ₹ 0
                </p>
              </Link>

              <div className="relative">
                <Link href="#" className="block">
                  <Slider
                    {...settings}
                    className="collection-gallery-slider black-dots"
                  >
                    <div className="relative pt-2 outline-none">
                      <img
                        src="/images/auction-watch-img.png"
                        alt="Product Image"
                        className="w-full object-cover block"
                        width="400"
                        height="310"
                      />
                    </div>
                    <div className="relative pt-2 outline-none">
                      <img
                        src="/images/auction-watch-img.png"
                        alt="Product Image"
                        className="w-full object-cover block"
                        width="400"
                        height="310"
                      />
                    </div>
                    <div className="relative pt-2 outline-none">
                      <img
                        src="/images/auction-watch-img.png"
                        alt="Product Image"
                        className="w-full object-cover block"
                        width="400"
                        height="310"
                      />
                    </div>
                  </Slider>
                </Link>
              </div>

              <div className="px-16 pt-8 md:px-10 xl:px-[3rem] 1xl:px-[4rem] 3xl:px-[5rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem] ">
                <Link href="#" className="block">
                  <ul className="flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0">
                    <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem]">
                      <img
                        src="/images/auction-brand-icon.png"
                        alt="Icon"
                        width="24"
                        height="25"
                        className="object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem]"
                      />
                      <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                        Brand
                      </p>
                      <h6
                        className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                      >
                        Hublot
                      </h6>
                    </li>
                    <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                      <img
                        src="/images/auction-model-icon.png"
                        alt="Icon"
                        width="24"
                        height="25"
                        className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem] `}
                      />
                      <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                        Model
                      </p>
                      <h6
                        className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                      >
                        King Gold
                      </h6>
                    </li>
                    <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                      <img
                        src="/images/auction-condition-icon.png"
                        alt="Icon"
                        width="24"
                        height="25"
                        className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem] `}
                      />
                      <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                        Condition
                      </p>
                      <h6
                        className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                      >
                        Excellent
                      </h6>
                    </li>
                  </ul>
                </Link>

                <div className="mt-12">
                  <Link
                    href="/deeplinking?sectionName=CarAuction"
                    className="bg-red-500 text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer border-black border transition-all hover:bg-transparent hover:text-black duration-300"
                  >
                    Join The Auction
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="w-full [&_.item-divider]:hidden auction-product-card">
            <div className=" pb-16 md:bg-[#fff] md:mt-[4rem] common-car-item transition-all duration-500 ease-in-out">
              <div className="item-divider max-w-[90%] mx-auto h-[1px] border-t border-[#D9D9D9] md:hidden"></div>
              <Link
                href="#"
                className="block px-14 pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem]"
              >
                <p
                  className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-[1.2rem] 3xl:px-10 1xl:py-2`}
                >
                 ID : CNL011
                </p>
                <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[2rem] 2xl:tracking-tighter 3xl:text-[2.5rem] 1xl:mt-6 3xl:mt-8 line-clamp-1">
                HR30Z0099
                </h4>
                <p
                  className={`text-3xl mt-2 font-medium lg:mt-3 1xl:mt-6 mb-12 sm:mb-8 1xl:text-[1.8rem] 3xl:text-[2.2rem] tracking-[-1px]`}
                >
                  FMV: ₹ 0
                </p>
              </Link>

              <div className="relative">
                <Link href="#" className="block">
                  <Slider
                    {...settings}
                    className="collection-gallery-slider black-dots"
                  >
                    <div className="relative pt-2 outline-none">
                      <img
                        src="/images/auction-number-plate-img.png"
                        alt="Product Image"
                        className="w-full object-cover block"
                        width="400"
                        height="310"
                      />
                    </div>
                    <div className="relative pt-2 outline-none">
                      <img
                        src="/images/auction-number-plate-img.png"
                        alt="Product Image"
                        className="w-full object-cover block"
                        width="400"
                        height="310"
                      />
                    </div>
                    <div className="relative pt-2 outline-none">
                      <img
                        src="/images/auction-number-plate-img.png"
                        alt="Product Image"
                        className="w-full object-cover block"
                        width="400"
                        height="310"
                      />
                    </div>
                  </Slider>
                </Link>
              </div>

              <div className="px-16 pt-8 md:px-10 xl:px-[3rem] 1xl:px-[4rem] 3xl:px-[5rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem] ">
                <Link href="#" className="block">
                  <ul className="flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0">
                    <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem]">
                      <img
                        src="/images/auction-state-icon.png"
                        alt="Icon"
                        width="24"
                        height="25"
                        className="object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem]"
                      />
                      <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                        State
                      </p>
                      <h6
                        className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                      >
                        Haryana
                      </h6>
                    </li>
                    <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                      <img
                        src="/images/auction-rto-icon.png"
                        alt="Icon"
                        width="24"
                        height="25"
                        className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem] `}
                      />
                      <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                        RTO
                      </p>
                      <h6
                        className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                      >
                       Palwal
                      </h6>
                    </li>
                    <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                      <img
                        src="/images/auction-category-icon.png"
                        alt="Icon"
                        width="24"
                        height="25"
                        className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem] `}
                      />
                      <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                        Category
                      </p>
                      <h6
                        className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                      >
                        Repeating
                      </h6>
                    </li>
                  </ul>
                </Link>

                <div className="mt-12">
                  <Link
                    href="/deeplinking?sectionName=CarAuction"
                    className="bg-red-500 text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer border-black border transition-all hover:bg-transparent hover:text-black duration-300"
                  >
                    Join The Auction
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionProductCards;
