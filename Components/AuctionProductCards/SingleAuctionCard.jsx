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

// Helper function to format price
const formatPrice = (price) => {
  if (!price) return '₹ 0';
  return `₹ ${price.toLocaleString('en-IN')}`;
};

// Helper function to parse text with asterisks as bold
const parseBoldText = (text) => {
  if (!text) return text;
  
  // Split by asterisks and create elements
  const parts = text.split(/(\*.*?\*)/g);
  
  return parts.map((part, index) => {
    // If part starts and ends with *, make it bold
    if (part.startsWith('*') && part.endsWith('*')) {
      const boldText = part.slice(1, -1); // Remove asterisks
      return <strong key={index}>{boldText}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

// Car Auction Card
export const CarAuctionCard = ({ item }) => {
  // If no item data, don't render
  if (!item) return null;

  // Extract car-specific data
  const uniqueId = item.uniqueId || item._id || 'N/A';
  const model = item.model || 'Car';
  const variant = item.variant || '';
  const title = variant ? `${model} ${variant}` : model;
  const price = item.highestBid || 0;
  const images = item.images || [];
  const odometerReading = item.odometerReading || 0;
  const fuelType = item.fuelType || 'Petrol';
  const transmission = item.transmission || 'Automatic';

  return (
    <div className="w-full [&_.item-divider]:hidden auction-product-card mb-8">
      <div className="pb-16 md:bg-[#fff] md:mt-[4rem] common-car-item transition-all duration-500 ease-in-out">
        <div className="item-divider max-w-[90%] mx-auto h-[1px] border-t border-[#D9D9D9] md:hidden"></div>
        <Link
          href="/deeplinking?sectionName=CarAuction"
          className="block px-14 pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem]"
        >
          <p
            className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-[1.2rem] 3xl:px-10 1xl:py-2`}
          >
            ID : {uniqueId}
          </p>
          <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[2rem] 2xl:tracking-tighter 3xl:text-[2.5rem] 1xl:mt-6 3xl:mt-8 line-clamp-1">
            {parseBoldText(title)}
          </h4>
          <p
            className={`text-3xl mt-2 font-medium lg:mt-3 1xl:mt-6 mb-12 sm:mb-8 1xl:text-[1.8rem] 3xl:text-[2.2rem] tracking-[-1px]`}
          >
            Current Bid: {formatPrice(price)}
          </p>
        </Link>

        <div className="relative">
          <Link href="/deeplinking?sectionName=CarAuction" className="block">
            {images.length > 0 ? (
              <Slider {...settings} className="collection-gallery-slider">
                {images.map((img, index) => (
                  <div key={index} className="relative pt-2 outline-none">
                    <img
                      src={img.url || '/images/auction-car-img-1.jpeg'}
                      alt={`${title} - Image ${index + 1}`}
                      className="w-full object-cover block border-t border-b border-gray-300"
                      width="400"
                      height="310"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="relative pt-2">
                <img
                  src="/images/auction-car-img-1.jpeg"
                  alt={title}
                  className="w-full object-cover block border-t border-b border-gray-300"
                  width="400"
                  height="310"
                />
              </div>
            )}
          </Link>
        </div>

        <div className="px-16 pt-8 md:px-10 xl:px-[3rem] 1xl:px-[4rem] 3xl:px-[5rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem]">
          <Link href="/deeplinking?sectionName=CarAuction" className="block">
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
                <h6 className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}>
                  {odometerReading.toLocaleString('en-IN')}km
                </h6>
              </li>
              <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                <img
                  src="/images/gas-icon-black.webp"
                  alt="Icon"
                  width="24"
                  height="25"
                  className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem]`}
                />
                <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                  Fuel / Gas Type
                </p>
                <h6 className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}>
                  {fuelType}
                </h6>
              </li>
              <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                <img
                  src="/images/register-icon-black.webp"
                  alt="Icon"
                  width="24"
                  height="25"
                  className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem]`}
                />
                <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                  Transmission
                </p>
                <h6 className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}>
                  {transmission}
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
  );
};

// Watch Auction Card
export const WatchAuctionCard = ({ item }) => {
  // If no item data, don't render
  if (!item) return null;

  // Extract watch-specific data
  const laxId = item.laxId || item._id || 'N/A';
  const title = item.title || 'Watch';
  const price = item.highestBid || 0;
  const images = item.images || [];
  const brand = item.brand || 'N/A';
  const model = item.model || 'N/A';
  const condition = item.condition || 'Good';

  return (
    <div className="w-full [&_.item-divider]:hidden auction-product-card mb-8">
      <div className="pb-16 md:bg-[#fff] md:mt-[4rem] common-car-item transition-all duration-500 ease-in-out">
        <div className="item-divider max-w-[90%] mx-auto h-[1px] border-t border-[#D9D9D9] md:hidden"></div>
        <Link
          href="/deeplinking?sectionName=CarAuction"
          className="block px-14 pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem]"
        >
          <p
            className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-[1.2rem] 3xl:px-10 1xl:py-2`}
          >
            ID : {laxId}
          </p>
          <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[2rem] 2xl:tracking-tighter 3xl:text-[2.5rem] 1xl:mt-6 3xl:mt-8 line-clamp-1">
            {parseBoldText(title)}
          </h4>
          <p
            className={`text-3xl mt-2 font-medium lg:mt-3 1xl:mt-6 mb-12 sm:mb-8 1xl:text-[1.8rem] 3xl:text-[2.2rem] tracking-[-1px]`}
          >
            Current Bid: {formatPrice(price)}
          </p>
        </Link>

        <div className="relative">
          <Link href="/deeplinking?sectionName=CarAuction" className="block">
            {images.length > 0 ? (
              <Slider {...settings} className="collection-gallery-slider black-dots">
                {images.map((img, index) => (
                  <div key={index} className="relative pt-2 outline-none">
                    <img
                      src={img.url || '/images/auction-watch-img-1.jpeg'}
                      alt={`${title} - Image ${index + 1}`}
                      className="w-full object-cover block border-t border-b border-gray-300"
                      width="400"
                      height="310"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="relative pt-2">
                <img
                  src="/images/auction-watch-img-1.jpeg"
                  alt={title}
                  className="w-full object-cover block border-t border-b border-gray-300"
                  width="400"
                  height="310"
                />
              </div>
            )}
          </Link>
        </div>

        <div className="px-16 pt-8 md:px-10 xl:px-[3rem] 1xl:px-[4rem] 3xl:px-[5rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem]">
          <Link href="/deeplinking?sectionName=CarAuction" className="block">
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
                <h6 className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}>
                  {brand}
                </h6>
              </li>
              <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                <img
                  src="/images/auction-model-icon.png"
                  alt="Icon"
                  width="24"
                  height="25"
                  className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem]`}
                />
                <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                  Model
                </p>
                <h6 className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}>
                  {model}
                </h6>
              </li>
              <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                <img
                  src="/images/auction-condition-icon.png"
                  alt="Icon"
                  width="24"
                  height="25"
                  className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem]`}
                />
                <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                  Condition
                </p>
                <h6 className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}>
                  {condition}
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
  );
};

// Number Plate Auction Card (supports both Car Numbers and Mobile Numbers)
export const NumberPlateAuctionCard = ({ item }) => {
  // If no item data, don't render
  if (!item) return null;

  // Extract data (works for both CAR_NUMBER and MOBILE_NUMBER)
  const laxId = item.laxId || item._id || 'N/A';
  const number = item.number || item.title || 'N/A';
  const price = item.highestBid || 0;
  const images = item.images || [];
  const state = item.state || 'N/A';
  const rto = item.rto || item.operator || 'N/A'; // Use operator for mobile numbers
  const category = item.category || 'N/A';
  const isMobileNumber = item.group === 'MOBILE_NUMBER';

  return (
    <div className="w-full [&_.item-divider]:hidden auction-product-card mb-8">
      <div className="pb-16 md:bg-[#fff] md:mt-[4rem] common-car-item transition-all duration-500 ease-in-out">
        <div className="item-divider max-w-[90%] mx-auto h-[1px] border-t border-[#D9D9D9] md:hidden"></div>
        <Link
          href="/deeplinking?sectionName=CarAuction"
          className="block px-14 pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem]"
        >
          <p
            className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-[1.2rem] 3xl:px-10 1xl:py-2`}
          >
            ID : {laxId}
          </p>
          <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[2rem] 2xl:tracking-tighter 3xl:text-[2.5rem] 1xl:mt-6 3xl:mt-8 line-clamp-1">
            {parseBoldText(number)}
          </h4>
          <p
            className={`text-3xl mt-2 font-medium lg:mt-3 1xl:mt-6 mb-12 sm:mb-8 1xl:text-[1.8rem] 3xl:text-[2.2rem] tracking-[-1px]`}
          >
            Current Bid: {formatPrice(price)}
          </p>
        </Link>

        <div className="relative">
          <Link href="/deeplinking?sectionName=CarAuction" className="block">
            {images.length > 0 ? (
              images.length > 1 ? (
                <Slider {...settings} className="collection-gallery-slider black-dots">
                  {images.map((img, index) => (
                    <div key={index} className="relative pt-2 outline-none">
                      <img
                        src={img.url || '/images/auction-number-plate-img.png'}
                        alt={`${number} - Image ${index + 1}`}
                        className="w-full object-cover block border-t border-b border-gray-300"
                        width="400"
                        height="310"
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="relative pt-2">
                  <img
                    src={images[0].url || '/images/auction-number-plate-img.png'}
                    alt={number}
                    className="w-full object-cover block border-t border-b border-gray-300"
                    width="400"
                    height="310"
                  />
                </div>
              )
            ) : (
              <div className="relative pt-2">
                <img
                  src="/images/auction-number-plate-img.png"
                  alt={number}
                  className="w-full object-cover block border-t border-b border-gray-300"
                  width="400"
                  height="310"
                />
              </div>
            )}
          </Link>
        </div>

        <div className="px-16 pt-8 md:px-10 xl:px-[3rem] 1xl:px-[4rem] 3xl:px-[5rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem]">
          <Link href="/deeplinking?sectionName=CarAuction" className="block">
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
                  {isMobileNumber ? 'Operator' : 'State'}
                </p>
                <h6 className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}>
                  {state}
                </h6>
              </li>
              <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                <img
                  src="/images/auction-rto-icon.png"
                  alt="Icon"
                  width="24"
                  height="25"
                  className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem]`}
                />
                <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                  {isMobileNumber ? 'Type' : 'RTO'}
                </p>
                <h6 className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}>
                  {rto}
                </h6>
              </li>
              <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                <img
                  src="/images/auction-category-icon.png"
                  alt="Icon"
                  width="24"
                  height="25"
                  className={`object-contain h-[1.2rem] lg:h-[1.2rem] xl:h-[1.3rem]`}
                />
                <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                  Category
                </p>
                <h6 className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}>
                  {category}
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
  );
};
