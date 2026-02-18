"use client";

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import CertifiedPopup from "../../CertifiedPopup/CertifiedPopup";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";
import { getDisplayImages } from "../../../app/lib/services/gallery";
import { useUIAssets } from "../../../app/lib/hooks/useUIAssets";
import useDeviceType from "../../../app/lib/hooks/useDeviceType";
import { formatProductPrice, formatDiscountedPrice } from "../../../app/lib/utils/productUtils";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "5%",
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "5%",
      },
    },
  ],
};

let settingsItem = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  autoplay: false,
  autoplaySpeed: 3000,
};

const RecentlyAdded = ({ products = [] }) => {
  const [certifiedPopup, setCertifiedPopup] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const { assets } = useUIAssets();
  const { isMobile } = useDeviceType();
  
  const togglePopup = () => {
    setCertifiedPopup(!certifiedPopup);
  };

  const toggleRequestPopup = () => {
    setPopupOpen(!popupOpen);
  };
  
  useEffect(() => {
    AOS.init();
  }, []);

  // Transform products data to match component expectations
  const transformedProducts = products.map(product => ({
    _id: product.id || product.id_ || product.mongodb_id,
    category: product.category || '0',
    posturl: product.posturl || product.postUrl || product.slug || '',
    title: product.proname || product.name || '',
    registrationYear: product.registrationYear || 'N/A',
    price: product.proprice || product.price || '',
    kmDriven: product.kmDriven || 'N/A',
    fuelType: product.fuelType || 'N/A',
    registrationState: product.registrationState || product.regstate || 'N/A',
    isBooked: product.isBooked || product.booked === '1' || product.booked === 'yes',
    isSoldOut: product.isSoldOut || product.sold === '1' || product.sold === 'yes',
    isCertified: product.isCertified || product.featured === '1' || product.featured === 'yes',
    images: product.images || [],
    thumbnail: product.thumbnail,
    gallery: product.gallery || []
  }));

  // Don't render if no products
  if (transformedProducts.length === 0) {
    return null;
  }

  return (
    <section
      className={`overflow-x-hidden bg-[#F6F6F6] py-[5rem] md:py-[7rem] lg:py-[8rem] 1xl:py-[10rem] 2xl:py-[12rem] 3xl:py-[14rem]`}
    >
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={toggleRequestPopup} />
      )}
      <div className="max-1920">
        <div
          className={`px-8 mb-[4rem] md:mb-0 md:px-28 lg:w-[90%] lg:mx-auto lg:px-0 lg:flex lg:flex-wrap lg:justify-between lg:items-center relative lg:mb-[2rem] xl:w-[82%] 2xl:mb-[4rem] 3xl:mb-36`}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h2 className="font-light text-[2.9rem] [&>b]:font-[400] leading-[1.1] tracking-[-0.15rem] text-center lg:text-left lg:[&>br]:hidden lg:flex-1 1xl:text-[3.2rem] xl:[&>b]:font-[500] 1xl:leading-[1.2] 2xl:text-[3.6rem] 3xl:text-[4.5rem]">
            {" "}
            <b>Recently Added</b> Cars <br /> to the Garage.
          </h2>

          <div className="hidden lg:inline-block lg:pl-[4rem]">
            <Link href="/collection" className="btn btnBlack roundedBtn">
              Explore All
            </Link>
          </div>
        </div>
        <div className="recently-added-cars lg:w-[90%] xl:w-[85%] lg:mx-auto">
          <Slider {...settings}>
            {transformedProducts.map((data) => (
              <div
                key={data._id}
                className=" rac-item px-[0.5rem] xl:px-[1.7rem] 1xl:px-[2rem]"
              >
                {certifiedPopup && (
                  <CertifiedPopup
                    active={certifiedPopup}
                    togglePopup={togglePopup}
                  />
                )}
                <div className=" pb-16 md:bg-[#fff] md:mt-[4rem] common-car-item transition-all duration-500 ease-in-out">
                  <Link
                    href={data.category == '1' ? `https://cars.co.in/used-luxury-cars/${(data.posturl || data._id)}-detail-page` : `/used-luxury-cars/${(data.posturl || data._id)}-detail-page`}
                    className="block px-[1.5rem] pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem]"
                    target={data.category == '1' ? '_blank' : '_self'}
                  >
                    <p
                      className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-[1.2rem] 3xl:px-10 1xl:py-2`}
                    >
                      Reg.Year : {data.registrationYear}
                    </p>
                    <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[2rem] 2xl:tracking-tighter 3xl:text-[2.5rem] 1xl:mt-6 3xl:mt-8 line-clamp-1">
                      {data.title}
                    </h4>
                    <p
                      className={`text-3xl mt-2 font-medium lg:mt-3 1xl:mt-6 mb-12 sm:mb-8 1xl:text-[1.8rem] 3xl:text-[2.2rem] tracking-[-1px]`}
                    >
                      {formatProductPrice(data)}
                      {formatDiscountedPrice(data) && (
                        <span className="text-lg ml-2 line-through text-gray-500">
                          {formatDiscountedPrice(data)}
                        </span>
                      )}
                    </p>
                  </Link>

                  <div className="relative">
                    {data?.isCertified && (
                      <div
                        className="absolute top-[3rem] left-[3rem] z-10 w-[4.8rem] h-[4.8rem] xl:w-[5.7rem] xl:h-[4.2rem] cursor-pointer"
                        onClick={togglePopup}
                      >
                        <img
                          src={"/images/bbt-certified-icon.webp"}
                          alt="Certified"
                          className="w-full object-contain"
                          width="58"
                          height="42"
                        />
                      </div>
                    )}
                    <Link href={data.category == '1' ? `https://cars.co.in/used-luxury-cars/${(data.posturl || data._id)}-detail-page` : `/used-luxury-cars/${(data.posturl || data._id)}-detail-page`} className="block" 
                    target={data.category == '1' ? '_blank' : '_self'}
                    >
                      <Slider
                        {...settingsItem}
                        className="collection-gallery-slider"
                      >
                        {getDisplayImages(data, assets.placeholderCar).slice(0, 6).map((img, index) => (
                          <div key={index} className="relative pt-2">
                            <img
                              src={img.url}
                              alt={img.alt}
                              className="w-full object-cover block aspect-[4/3]"
                              width="400"
                              height="300"
                              loading="lazy"
                            />
                            {data.isBooked && (
                              <img
                                src={assets.bookedBadge}
                                alt="Booked"
                                width="120"
                                height="45"
                                className="object-contain absolute left-0 top-4 z-10 w-[9rem] h-[3.5rem] collection-sold-mark"
                              />
                            )}
                            {data.isSoldOut && (
                              <img
                                src={assets.soldBadge}
                                alt="Sold"
                                width="120"
                                height="45"
                                className="object-contain absolute left-0 top-4 z-20 w-[9rem] h-[3.5rem] collection-sold-mark"
                              />
                            )}
                          </div>
                        ))}
                      </Slider>
                    </Link>
                  </div>

                  <div className="px-[1.5rem] pt-8 md:px-10 xl:px-[3rem] 1xl:px-[4rem] 3xl:px-[5rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem] ">
                    <Link href={data.category == '1' ? `https://cars.co.in/used-luxury-cars/${(data.posturl || data._id)}-detail-page` : `/used-luxury-cars/${(data.posturl || data._id)}-detail-page`} className="block">
                      <ul className="flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0">
                        <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem]">
                          <img
                            src={"/images/km-icon-black.webp"}
                            alt="Kilometers Icon"
                            width="24"
                            height="25"
                            className="object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem]"
                          />
                          <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                            Kilometers Driven
                          </p>
                          <h6
                            className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                          >
                            {data.kmDriven} km
                          </h6>
                        </li>
                        <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                          <img
                            src={"/images/gas-icon-black.webp"}
                            alt="Fuel Icon"
                            width="24"
                            height="25"
                            className={`object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem]`}
                          />
                          <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                            Fuel / Gas Type
                          </p>
                          <h6
                            className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                          >
                            {data.fuelType}
                          </h6>
                        </li>
                        <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                          <img
                            src={"/images/register-icon-black.webp"}
                            alt="Registration Icon"
                            width="24"
                            height="25"
                            className={`object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem]`}
                          />
                          <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                            Registration State
                          </p>
                          <h6
                            className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
                          >
                            {data.registrationState}
                          </h6>
                        </li>
                      </ul>
                    </Link>

                    <div className="flex items-center justify-between callBtnGroup mt-12 overflow-hidden flex-wrap">
                      {data.isBooked || data.isSoldOut ? (
                        <div className="flex-grow">
                          {isMobile ? (
                            <a
                              href="tel:+919999999983"
                              className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer"
                            >
                              <img
                                src={'/images/square-btn-call-icon.webp'}
                                width="20"
                                height="20"
                                alt="Call Icon"
                                className="object-contain w-[1.57rem] mr-6 h-auto 3xl:w-[2rem] 3xl:mr-[4rem]"
                              />
                              Call BigBoyToyz
                            </a>
                          ) : (
                            <div
                              className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer"
                              onClick={toggleRequestPopup}
                            >
                              <img
                                src={'/images/square-btn-call-icon.webp'}
                                width="20"
                                height="20"
                                alt="Call Icon"
                                className="object-contain w-[1.57rem] mr-6 h-auto 3xl:w-[2rem] 3xl:mr-[4rem]"
                              />
                              Request A Call Back
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex-grow">
                          {isMobile ? (
                            <a
                              href={data.category == '1' ? "tel:+919999999908" : "tel:+919999999983"}
                              className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer"
                            >
                              <img
                                src={'/images/square-btn-call-icon.webp'}
                                width="20"
                                height="20"
                                alt="Call Icon"
                                className="object-contain w-[1.57rem] mr-6 h-auto 3xl:w-[2rem] 3xl:mr-[4rem]"
                              />
                              Call BigBoyToyz
                            </a>
                          ) : (
                            <div
                              className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer"
                              onClick={toggleRequestPopup}
                            >
                              <img
                                src={'/images/square-btn-call-icon.webp'}
                                width="20"
                                height="20"
                                alt="Call Icon"
                                className="object-contain w-[1.57rem] mr-6 h-auto 3xl:w-[2rem] 3xl:mr-[4rem]"
                              />
                              Request A Call Back
                            </div>
                          )}
                        </div>
                      )}

                      <div className="callBtnRight ml-4">
                        <a
                          href={data.category == '1' ? `https://wa.me/919999999908?text=I'm interested in the ${data.title}` : `https://wa.me/919999999983?text=I'm interested in the ${data.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="whatsAppBtn w-[4.5rem] h-[4.5rem] flex justify-center items-center rounded-[5px] 3xl:w-[5.8rem] 3xl:h-[5.8rem]"
                        >
                          <img
                            src={"/images/whatsapp-btn-icon.webp"}
                            width="18"
                            height="18"
                            alt="WhatsApp"
                            className="object-contain w-9 h-auto 1xl:w-[2.6rem]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAdded;
