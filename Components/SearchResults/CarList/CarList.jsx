"use client";
import React, { useState, useEffect } from "react";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CertifiedPopup from "../../CertifiedPopup/CertifiedPopup";
import { getDisplayImages } from "../../../app/lib/services/gallery";
import { useUIAssets } from "../../../app/lib/hooks/useUIAssets";
import {
  formatProductPrice,
  formatDiscountedPrice,
  isProductSoldOut,
} from "../../../app/lib/utils/productUtils";
import { pushProductClick, pushProductImpressions, pushGoogleAdsViewSearchResults } from "../../../app/lib/utils/gtm";

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
    onClick={onClick}
    type="button"
    aria-label="Next image"
  >
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  autoplay: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const CarList = ({
  products = [],
  isLoading = false,
  totalCount = 0,
  currentPage = 1,
  totalPages = 1,
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [certifiedPopup, setCertifiedPopup] = useState(false);
  const { assets } = useUIAssets();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Build href preserving existing filters/query except page
  const buildPageHref = (pageNumber) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    if (pageNumber && Number(pageNumber) > 1) {
      params.set("page", String(pageNumber));
    } else {
      params.delete("page");
    }
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  };

  // Create list of page numbers to render
  const getPageList = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    pages.push(1);
    if (currentPage > 3) pages.push("ellipsis-start");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push("ellipsis-end");
    pages.push(totalPages);
    return pages;
  };

  const toggleCertifiedPopup = () => {
    setCertifiedPopup(!certifiedPopup);
  };

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  // Track product click in GTM
  const handleProductClick = (product, index) => {
    pushProductClick(product, index, 'Search Results');
  };

  useEffect(() => {
    AOS.init();
  }, []);

  // Track product impressions in GTM
  useEffect(() => {
    if (products && products.length > 0) {
      // Standard GTM tracking
      pushProductImpressions(products, 'Search Results');
      
      // Google Ads remarketing - use view_search_results event
      pushGoogleAdsViewSearchResults(products);
    }
  }, [products]);

  // Transform products data to match component expectations
  const transformedProducts = products.map((product) => {
    const transformed = {
      category: product.category || "2",
      _id: product.id || product.id_ || product.mongodb_id,
      posturl:
        product.posturl || product.postUrl || product.url || product.slug || "",
      title: product.proname || product.name || product.title || "",
      registrationYear: product.registrationYear || "N/A",
      price: product.proprice || product.price || "",
      kmDriven: product.kmDriven || "N/A",
      fuelType: product.fuelType || "N/A",
      registrationState: product.registrationState || product.regstate || "N/A",
      isBooked:
        product.isBooked ||
        product.booked === "1" ||
        product.booked === "yes" ||
        product.isBooked === true ||
        product.isBooked === "1" ||
        product.booked === "1",
      isSoldOut:
        product.isSoldOut ||
        product.sold === "1" ||
        product.sold === "yes" ||
        product.isSoldOut === true ||
        product.isSoldOut === "1" ||
        product.stock === "0" ||
        product.stock === 0,
      isCertified:
        product.isCertified ||
        product.featured === "1" ||
        product.featured === "yes",
      images: product.images || [],
      thumbnail: product.thumbnail,
      gallery: product.gallery || [],
    };

    // Debug logging
    console.log("Transformed product:", {
      id: transformed._id,
      title: transformed.title,
      isSoldOut: transformed.isSoldOut,
      isBooked: transformed.isBooked,
      stock: product.stock,
      price: transformed.price,
    });

    return transformed;
  });

  // Ensure in-stock products appear before sold-out products while preserving original order within each group
  const partitioned = transformedProducts.reduce(
    (acc, item, index) => {
      const original = products[index];
      const soldOut =
        isProductSoldOut(original) ||
        item.isSoldOut === true ||
        item.isSoldOut === "1";
      if (soldOut) {
        acc.sold.push(item);
      } else {
        acc.inStock.push(item);
      }
      return acc;
    },
    { inStock: [], sold: [] }
  );
  const displayProducts = [...partitioned.inStock, ...partitioned.sold];

  return (
    <section className="bg-white md:bg-[#f3f3f3] pb-[5rem] lg:pb-[8rem] 2xl:pb-[10rem]">
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
      <div className="max-1920">
        <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] mx-auto md:pb-20 lg:w-[83%] lg:pb-[6rem] 1xl:pt-[2rem] 2xl:pb-[8rem] 3xl:pt-[4rem]">
          {isLoading ? (
            // Loading state
            <div className="w-full flex justify-center items-center py-20">
              <div className="animate-spin h-12 w-12 border-4 border-black rounded-full border-t-transparent"></div>
            </div>
          ) : displayProducts.length > 0 ? (
            displayProducts.map((data) => (
              <div
                key={data._id}
                className="w-full md:w-[48%] xl:w-[31%]"
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
                    href={
                      data.category == "1"
                        ? `https://cars.co.in/used-luxury-cars/${(data.posturl || data._id)}-detail-page`
                        : `/used-luxury-cars/${(data.posturl || data._id)}-detail-page`
                    }
                    className="block px-10 pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem]"
                    target={data.category == "1" ? "_blank" : "_self"}
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
                    <Link
                      href={
                        data.category == "1"
                          ? `https://cars.co.in/used-luxury-cars/${(data.posturl || data._id)}-detail-page`
                          : `/used-luxury-cars/${(data.posturl || data._id)}-detail-page`
                      }
                      className="block relative"
                      target={data.category == "1" ? "_blank" : "_self"}
                      onClick={() => handleProductClick(data, idx)}
                    >
                      <Slider
                        {...sliderSettings}
                        className="collection-gallery-slider"
                      >
                        {getDisplayImages(data, assets.placeholderCar)
                          .slice(0, 6)
                          .map((img, index) => (
                            <div key={index} className="relative pt-2">
                              <img
                                src={img.url}
                                alt={img.alt}
                                className="w-full object-cover block h-full md:max-h-[23rem] xl:max-h-[25rem] 3xl:max-h-[34rem] 3xl:h-[34rem]"
                                width="490"
                                height="357"
                                loading="lazy"
                              />
                              {/* Temporarily force badges to show for debugging */}
                              {/* <img
                      src="/images/collection-sold.webp"
                      alt="Sold"
                      width="120"
                      height="45"
                      className="object-contain absolute left-0 top-4 z-20 w-[9rem] h-[3.5rem] collection-sold-mark"
                      style={{ border: '2px solid red' }}
                    />
                    <img
                      src="/images/collection-booked.webp"
                      alt="Booked"
                      width="120"
                      height="45"
                      className="object-contain absolute left-0 top-4 z-10 w-[9rem] h-[3.5rem] collection-sold-mark"
                      style={{ border: '2px solid blue' }}
                    /> */}
                            </div>
                          ))}
                      </Slider>
                       {(data.isSoldOut ||
                                data.isSoldOut === "1" ||
                                data.price === 0 ||
                                data.price === "0" ||
                                data.inStock === false ||
                                data.inStock === "0" ||
                                data.stock === "0") && (
                                <>
                                  {console.log(
                                    "Rendering sold badge for:",
                                    data.title,
                                    "isSoldOut:",
                                    data.isSoldOut,
                                    "price:",
                                    data.price,
                                    "stock:",
                                    data.stock
                                  )}
                                  <img
                                    src="/images/collection-sold.webp"
                                    alt="Sold"
                                    width="120"
                                    height="45"
                                    className="object-contain absolute left-[-3px] top-[4px] xl:left-[-5px] z-20 w-[9rem] h-[3.5rem] collection-sold-mark"
                                    // style={{ border: '2px solid red' }}
                                  />
                                </>
                              )}
                              {(data.isBooked ||
                                data.isBooked === "1" ||
                                data.booked === "1" ||
                                data.booked === "1") && (
                                <>
                                  {console.log(
                                    "Rendering booked badge for:",
                                    data.title,
                                    "isBooked:",
                                    data.isBooked
                                  )}
                                  <img
                                    src="/images/collection-booked.webp"
                                    alt="Booked"
                                    width="120"
                                    height="45"
                                    className="object-contain absolute left-[-3px] top-[4px] xl:left-[-5px] z-10 w-[9rem] h-[3.5rem] collection-sold-mark"
                                  />
                                </>
                              )}
                    </Link>
                  </div>

                  <div className="px-10 pt-8 md:px-10 xl:px-[2rem] 1xl:px-[3rem] 3xl:px-[4rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem] ">
                    <Link
                      href={
                        data.category == "1"
                          ? `https://cars.co.in/used-luxury-cars/${(data.posturl || data._id)}-detail-page`
                          : `/used-luxury-cars/${(data.posturl || data._id)}-detail-page`
                      }
                      className="block"
                      target={data.category == "1" ? "_blank" : "_self"}
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
                          <p className="text-[1.2rem] mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-[1.2rem] 1xl:mt-4 3xl:text-[1.35rem] 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                            Kilometers Driven
                          </p>
                          <h6
                            className={`text-[1.3rem] 3xl:text-[1.5rem] font-[600] tracking-[-0.5px]`}
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
                          <p className="text-[1.2rem] mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-[1.2rem] 1xl:mt-4 3xl:text-[1.35rem] 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                            Fuel / Gas Type
                          </p>
                          <h6
                            className={`text-[1.3rem] 3xl:text-[1.5rem] font-[600] tracking-[-0.5px]`}
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
                          <p className="text-[1.2rem] mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-[1.2rem] 1xl:mt-4 3xl:text-[1.35rem] 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                            Registration State
                          </p>
                          <h6
                            className={`text-[1.3rem] 3xl:text-[1.5rem] font-[600] tracking-[-0.5px]`}
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
                              src={"/images/square-btn-call-icon.webp"}
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
                            href={
                              data.category == "1"
                                ? "tel:+919999999908"
                                : "tel:+919999999983"
                            }
                            className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer"
                          >
                            <img
                              src={"/images/square-btn-call-icon.webp"}
                              width="20"
                              height="20"
                              alt="Call Icon"
                              className="object-contain w-[1.57rem] mr-6 h-auto 3xl:w-[2rem] 3xl:mr-[4rem]"
                            />
                            Call Big Boy Toyz
                          </a>
                        </div>
                      )}

                      <div className="callBtnRight ml-[2rem]">
                        <a
                          href={
                            data.category == "1"
                              ? `https://wa.me/919999999908?text=I'm interested in the ${data.title}`
                              : `https://wa.me/919999999983?text=I'm interested in the ${data.title}`
                          }
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
                  We couldn't find any cars matching your search criteria.
                  Please try adjusting your filters or search terms.
                </p>
                <a href="/collection" className="btn btnBlack roundedBtn">
                  View All Cars
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Pagination - show only if more than one page and results exist */}
        {!isLoading && displayProducts.length > 0 && totalPages > 1 && (
          <div className="container">
            <div className="pagination pt-[3rem] border-t border-[#D9D9D9] lg:pt-0">
              <ul className="flex fle-wrap items-center justify-center [&>li]:mx-[4px] [&>li]:my-3 w-max px-10 lg:max-w-[43rem] mx-auto lg:bg-[#f3f3f3] lg:mt-[-3rem] [&>li]:bg-white">
                {/* Prev */}
                <li>
                  {currentPage > 1 ? (
                    <Link
                      href={buildPageHref(currentPage - 1)}
                      className="flex items-center justify-center rounded-[5px] border border-[#C8C8C8] w-[2.7rem] h-[2.7rem] transition-all ease-in-out duration-500 hover:bg-black hover:text-white text-lg group lg:w-[4.2rem] lg:h-[4.2rem] lg:text-[1.6rem]"
                      aria-label="Previous page"
                    >
                      <Image
                        src="/images/pagination-arrow-prev.webp"
                        alt="Previous"
                        width="9"
                        height="17"
                        className="w-auto h-[1.2rem] lg:h-[1.7rem] object-contain group-hover:invert transition-all duration-500 ease-in-out"
                      />
                    </Link>
                  ) : (
                    <div className="flex items-center justify-center rounded-[5px] border border-[#C8C8C8] w-[2.7rem] h-[2.7rem] text-lg opacity-50 pointer-events-none lg:w-[4.2rem] lg:h-[4.2rem] lg:text-[1.6rem]">
                      <Image
                        src="/images/pagination-arrow-prev.webp"
                        alt="Previous"
                        width="9"
                        height="17"
                        className="w-auto h-[1.2rem] lg:h-[1.7rem] object-contain"
                      />
                    </div>
                  )}
                </li>

                {/* Page numbers */}
                {getPageList().map((p, idx) => (
                  <li key={`${p}-${idx}`}>
                    {typeof p === "number" ? (
                      <Link
                        href={buildPageHref(p)}
                        aria-current={p === currentPage ? "page" : undefined}
                        className={`flex items-center justify-center rounded-[5px] border border-[#C8C8C8] w-[2.7rem] h-[2.7rem] transition-all ease-in-out duration-500 text-lg lg:w-[4.2rem] lg:h-[4.2rem] lg:text-[1.6rem] ${
                          p === currentPage
                            ? "bg-black text-white"
                            : "hover:bg-black hover:text-white"
                        }`}
                      >
                        {p}
                      </Link>
                    ) : (
                      <div className="flex items-center justify-center rounded-[5px] border border-transparent w-[2.7rem] h-[2.7rem] text-lg text-[#767778] lg:w-[4.2rem] lg:h-[4.2rem] lg:text-[1.6rem]">
                        …
                      </div>
                    )}
                  </li>
                ))}

                {/* Next */}
                <li>
                  {currentPage < totalPages ? (
                    <Link
                      href={buildPageHref(currentPage + 1)}
                      className="flex items-center justify-center rounded-[5px] border border-[#C8C8C8] w-[2.7rem] h-[2.7rem] transition-all ease-in-out duration-500 hover:bg-black hover:text-white text-lg group lg:w-[4.2rem] lg:h-[4.2rem] lg:text-[1.6rem]"
                      aria-label="Next page"
                    >
                      <Image
                        src="/images/pagination-arrow-next.webp"
                        alt="Next"
                        width="9"
                        height="17"
                        className="w-auto h-[1.2rem] lg:h-[1.7rem] object-contain group-hover:invert transition-all duration-500 ease-in-out"
                      />
                    </Link>
                  ) : (
                    <div className="flex items-center justify-center rounded-[5px] border border-[#C8C8C8] w-[2.7rem] h-[2.7rem] text-lg opacity-50 pointer-events-none lg:w-[4.2rem] lg:h-[4.2rem] lg:text-[1.6rem]">
                      <Image
                        src="/images/pagination-arrow-next.webp"
                        alt="Next"
                        width="9"
                        height="17"
                        className="w-auto h-[1.2rem] lg:h-[1.7rem] object-contain"
                      />
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default CarList;
