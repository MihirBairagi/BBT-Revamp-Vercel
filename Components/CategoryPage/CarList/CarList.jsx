"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CertifiedPopup from "../../CertifiedPopup/CertifiedPopup";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { getDisplayImages } from "../../../app/lib/services/gallery";
import { useUIAssets } from "../../../app/lib/hooks/useUIAssets";
import { formatProductPrice, formatDiscountedPrice } from "../../../app/lib/utils/productUtils";
import { pushProductClick, pushProductImpressions, pushGoogleAdsViewItemList } from "../../../app/lib/utils/gtm";

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
    onClick={onClick}
    type="button"
    aria-label="Next image"
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
    onClick={onClick}
    type="button"
    aria-label="Previous image"
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  autoplay: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const CarList = ({ products = [], isLoading = false, categoryData }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [certifiedPopup, setCertifiedPopup] = useState(false);
  const { assets } = useUIAssets();
  
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const toggleCertifiedPopup = () => {
    setCertifiedPopup(!certifiedPopup);
  };

  // Track product click in GTM
  const handleProductClick = (product, index) => {
    pushProductClick(product, index, 'Category Page');
  };
  
  useEffect(() => {
    AOS.init();
  }, []);

  // Track product impressions in GTM
  useEffect(() => {
    if (products && products.length > 0) {
      // Standard GTM tracking
      pushProductImpressions(products, 'Category Page');
      
      // Google Ads remarketing
      pushGoogleAdsViewItemList(products);
    }
  }, [products]);

  // Transform products data to match component expectations
  const transformedProducts = products.map(product => ({
    _id: product.id || product.id_ || product.mongodb_id,
    category: product.category || '0',
    title: product.proname || product.name || '',
    registrationYear: product.registrationYear || 'N/A',
    price: product.proprice || product.price || '',
    kmDriven: product.kmDriven || 'N/A',
    fuelType: product.fuelType || 'N/A',
    registrationState: product.registrationState || product.regstate || 'N/A',
    isBooked: product.isBooked || product.booked === '1' || product.booked === 'yes',
    isSoldOut: product.isSoldOut || product.sold === '1' || product.sold === 'yes',
    isCertified: product.isCertified || product.featured === '1' || product.featured === 'yes' || product.certified === '1' || product.certified === 'yes',
    images: product.images || [],
    thumbnail: product.thumbnail,
    gallery: product.gallery || []
  }));

  return (
    <section className="bg-white md:bg-[#f3f3f3]">
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
      <div className="max-1920">
        <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] mx-auto md:pb-20 lg:w-[83%] xl:pb-[12rem]">
          {isLoading ? (
            // Loading state
            <div className="w-full flex justify-center items-center py-20">
              <div className="animate-spin h-12 w-12 border-4 border-black rounded-full border-t-transparent"></div>
            </div>
          ) : transformedProducts.length > 0 ? (
            transformedProducts.map((data, idx) => (
              <div
                key={data._id}
                className="w-full md:w-[48%] xl:w-[31%] [&_.item-divider]:hidden"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                {certifiedPopup && (
                  <CertifiedPopup
                    active={certifiedPopup}
                    togglePopup={toggleCertifiedPopup}
                  />
                )}
                <div className=" pb-16 md:bg-[#fff] md:mt-[4rem] common-car-item transition-all duration-500 ease-in-out">
                  <div className="item-divider max-w-[90%] mx-auto h-[1px] border-t border-[#D9D9D9] md:hidden"></div>
                  <Link
                    href={data.category == '1' ? `https://cars.co.in/used-luxury-cars/${(data.posturl || data._id)}-detail-page` : `/used-luxury-cars/${(data.posturl || data._id)}-detail-page`}
                    className="block px-14 pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem]"
                    target={data.category == '1' ? '_blank' : '_self'}
                    onClick={() => handleProductClick(data, idx)}
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
                        onClick={toggleCertifiedPopup}
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
                    <Link href={data.category == '1' ? `https://cars.co.in/used-luxury-cars/${(data.posturl || data._id)}-detail-page` : `/used-luxury-cars/${(data.posturl || data._id)}-detail-page`} 
                    className="block"
                    target={data.category == '1' ? '_blank' : '_self'}
                    onClick={() => handleProductClick(data, idx)}
                    >
                      <Slider {...settings} className="collection-gallery-slider">
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
                                src={"/images/collection-booked.webp"}
                                alt="Booked"
                                width="120"
                                height="45"
                                className="object-contain absolute left-0 top-4 z-10 w-[9rem] h-[3.5rem] collection-sold-mark"
                              />
                            )}
                            {data.isSoldOut && (
                              <img
                                src={"/images/collection-sold.webp"}
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

                  <div className="px-16 pt-8 md:px-10 xl:px-[3rem] 1xl:px-[4rem] 3xl:px-[5rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem] ">
                    <Link href={data.category == '1' ? `https://cars.co.in/used-luxury-cars/${(data.posturl || data._id)}-detail-page` : `/used-luxury-cars/${(data.posturl || data._id)}-detail-page`} className="block"
                    target={data.category == '1' ? '_blank' : '_self'}
                    onClick={() => handleProductClick(data, idx)}
                    >
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
                          <div
                            className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer"
                            onClick={togglePopup}
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
                        </div>
                      ) : (
                        <div className="flex-grow">
                          <a
                            href={data.category == '1' ?  "tel:+919999999908" : "tel:+919999999983"}
                            className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer"
                          >
                            <img
                              src={'/images/square-btn-call-icon.webp'}
                              width="20"
                              height="20"
                              alt="Call Icon"
                              className="object-contain w-[1.57rem] mr-6 h-auto 3xl:w-[2rem] 3xl:mr-[4rem]"
                            />
                            Call Big Boy Toyz
                          </a>
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
                            src={'/images/whatsapp-btn-icon.webp'}
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
            ))
          ) : (
            // Empty state
            <div className="w-full text-center py-20">
              <div className="max-w-md mx-auto">
                <Image
                  src="/images/no-cars-found.webp"
                  alt="No cars found"
                  width="200"
                  height="200"
                  className="mx-auto mb-6 opacity-50"
                />
                <h3 className="text-2xl font-semibold mb-4">No Cars Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any {categoryData?.name || 'category'} cars at the moment. 
                  Please check back later or explore other categories.
                </p>
                <a href="/collection" className="btn btnBlack roundedBtn">
                  View All Cars
                </a>
              </div>
            </div>
          )}
        </div>
        
        {/* Pagination - only show if there are products */}
        {/* {!isLoading && transformedProducts.length > 0 && (
          <div className="container">
            <div className="pagination py-12 border-t border-[#D9D9D9] lg:pt-0 lg:mb-[6rem]">
              <ul className="flex fle-wrap items-center justify-center [&>li]:mx-[4px] [&>li]:my-3 w-max px-10 lg:max-w-[43rem] mx-auto lg:bg-[#f3f3f3] lg:mt-[-3rem] [&>li]:bg-white">
                <li className="">
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:px-6 lg:h-16 xl:px-8 xl:h-20 3xl:px-12 3xl:h-24"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-2.5 h-2.5 lg:w-4 lg:h-4 xl:w-6 xl:h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:px-6 lg:h-16 xl:px-8 xl:h-20 3xl:px-12 3xl:h-24 xl:text-[1.8rem] lg:text-[1.3rem]"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white lg:px-6 lg:h-16 xl:px-8 xl:h-20 3xl:px-12 3xl:h-24 xl:text-[1.8rem] lg:text-[1.3rem]"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:px-6 lg:h-16 xl:px-8 xl:h-20 3xl:px-12 3xl:h-24 xl:text-[1.8rem] lg:text-[1.3rem]"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:px-6 lg:h-16 xl:px-8 xl:h-20 3xl:px-12 3xl:h-24"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-2.5 h-2.5 lg:w-4 lg:h-4 xl:w-6 xl:h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default CarList;
