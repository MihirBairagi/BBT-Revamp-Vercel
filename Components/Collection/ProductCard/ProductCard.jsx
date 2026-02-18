"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CertifiedPopup from "../../CertifiedPopup/CertifiedPopup";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";
import useDeviceType from "../../../app/lib/hooks/useDeviceType";
import { useUIAssets } from "../../../app/lib/hooks/useUIAssets";
import {
  formatProductPrice,
  formatDiscountedPrice,
} from "../../../app/lib/utils/productUtils";
import { pushProductClick } from "../../../app/lib/utils/gtm";
import Image from "next/image";

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
    onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      onClick && onClick(e);
    }}
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
    onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      onClick && onClick(e);
    }}
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
  swipe: true,
  swipeToSlide: true,
  touchThreshold: 10,
  accessibility: true,
};

const ProductCard = ({ product }) => {
  const router = useRouter();
  const [popupOpen, setPopupOpen] = useState(false);
  const [certifiedPopup, setCertifiedPopup] = useState(false);
  const { assets } = useUIAssets();
  const { isMobile } = useDeviceType();

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const toggleCertifiedPopup = () => {
    setCertifiedPopup(!certifiedPopup);
  };

  // Handle product navigation
  const handleProductClick = (e) => {
    console.log('Product clicked!', e.target);
    
    // Don't navigate if clicking on slider controls or action buttons
    const target = e.target;
    const isSliderControl = target.closest('button') || 
                           target.closest('.slick-dots') || 
                           target.closest('.request-call-btn') ||
                           target.closest('.whatsAppBtn');
    
    if (isSliderControl) {
      console.log('Slider control clicked, ignoring');
      e.stopPropagation();
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    
    // Track product click in GTM
    pushProductClick(product, 0, 'Product Grid');
    
    const carId = product?.id || product?._id || product?.mongodb_id || "";
    const internalSlug = (product?.postUrl || product?.posturl || product?.slug || carId);
    const href = product.category == "1"
      ? `https://cars.co.in/used-luxury-cars/${internalSlug}-detail-page`
      : `/used-luxury-cars/${internalSlug}-detail-page`;
    
    console.log('Navigating to:', href);
    
    if (product.category == '1') {
      window.open(href, '_blank');
    } else {
      // Use window.location for internal navigation as a workaround for router issues after state changes
      window.location.href = href;
    }
  };

  if (!product) return null;

  // Debug log the product IDs
  if (process.env.NODE_ENV === "development") {
    console.log(`Product Card: ${product.name}`, {
      mongodbId: product.mongodb_id,
      databaseId: product.id_ || product.id,
      _id: product._id,
    });
  }

  // Determine the best ID to use for links
  const carId = product?.id || product?._id || product?.mongodb_id || "";
  const internalSlug = (product?.postUrl || product?.posturl || product?.slug || carId);
  const internalHref = `/used-luxury-cars/${internalSlug}-detail-page`;

  // Process images with proper URL handling
  const processImageUrl = (imageUrl, isThumbnail = false) => {
    if (!imageUrl) return null;

    // If already a full URL, return as is
    if (imageUrl.startsWith("http")) {
      return imageUrl;
    }

    const cdnBase = "https://cdn.bigboytoyz.com/new-version/products/";
    if (isThumbnail) {
      // Main product images are in the root products folder
      return `${cdnBase}${imageUrl}`;
    }
    // Gallery images are in a subfolder
    return `${cdnBase}product/${imageUrl}`;
  };

  // Determine which images to display
  const displayImages = (() => {
    const images = [];
    const addedUrls = new Set();

    const addImage = (url, alt, props = {}) => {
      if (url && !addedUrls.has(url)) {
        images.push({ url, alt, ...props });
        addedUrls.add(url);
      }
    };

    // 1. ALWAYS add thumbnail FIRST if available (even if no gallery images)
    if (
      product.thumbnail &&
      product.thumbnail != null &&
      product.thumbnail != undefined
    ) {
      addImage(
        processImageUrl(product.thumbnail, true),
        product.name || product.title || "Car Image"
      );
    } else if (
      product.prolistimage &&
      product.prolistimage != null &&
      product.prolistimage != undefined
    ) {
      // Fallback to prolistimage if thumbnail is not available
      addImage(
        processImageUrl(product.prolistimage, true),
        product.name || product.title || "Car Image"
      );
    }

    // 2. Add up to 4 gallery images from product.images array (sorted by order)
    if (
      product.images &&
      product.images.length > 0 &&
      product.images != null &&
      product.images != undefined
    ) {
      const sorted = [...product.images].sort((a, b) => {
        if (a.order === "0" && b.order !== "0") return -1;
        if (a.order !== "0" && b.order === "0") return 1;
        return (a.order || 0) - (b.order || 0);
      });

      // Add first 4 gallery images (max 4 after thumbnail)
      for (let i = 0; i < sorted.length && images.length < 5; i++) {
        const img = sorted[i];
        const imageUrl = img.url || img.pgalimage || img;
        addImage(
          processImageUrl(imageUrl),
          img.alt || product.name || product.title || "Car Image",
          { type: img.type, order: img.order }
        );
      }
    } else if (
      product.gallery &&
      product.gallery.length > 0 &&
      product.gallery != null &&
      product.gallery != undefined
    ) {
      // Fallback to product.gallery array (for backward compatibility)
      // Add first 4 gallery images (max 4 after thumbnail)
      for (let i = 0; i < product.gallery.length && images.length < 5; i++) {
        const url = product.gallery[i];
        addImage(
          processImageUrl(url),
          `${product.name || product.title} - Image ${i + 1}`
        );
      }
    }

    // 3. If no thumbnail or gallery, try single product.image
    if (images.length === 0 && product.image && product.image != null && product.image != undefined) {
      addImage(processImageUrl(product.image), product.name || product.title);
    }

    // 4. Placeholder fallback if nothing found
    if (images.length === 0) {
      addImage(
        assets.placeholderCar,
        product.name || product.title || "Car Image"
      );
    }

    return images;
  })();

  return (
    <div
      className="w-full md:w-[48%] xl:w-[31%] [&_.item-divider]:hidden"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      style={{ height: "fit-content" }}
    >
      {certifiedPopup && (
        <CertifiedPopup
          active={certifiedPopup}
          togglePopup={toggleCertifiedPopup}
        />
      )}
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
      <div className="h-full pb-16 md:bg-[#fff] md:mt-[4rem] common-car-item transition-all duration-500 ease-in-out">
        <div className="item-divider max-w-[90%] mx-auto h-[1px] border-t border-[#D9D9D9] md:hidden"></div>
        <div
          className="block px-14 pt-16 md:px-10 1xl:pl-[3rem] 3xl:pl-[4rem] cursor-pointer"
          onClick={handleProductClick}
          >
          <p
            className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-[1.2rem] 3xl:px-10 1xl:py-2`}
            suppressHydrationWarning
          >
            Reg.Year :{" "}
            {product.yearOfRegistration || product.registrationYear || "2023"}
          </p>
          <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[2rem] 2xl:tracking-tighter 3xl:text-[2.5rem] 1xl:mt-6 3xl:mt-8 line-clamp-1" suppressHydrationWarning>
            {product.name || product.title}
          </h4>
          <p
            className={`text-3xl mt-2 font-medium lg:mt-3 1xl:mt-6 mb-12 sm:mb-8 1xl:text-[1.8rem] 3xl:text-[2.2rem] tracking-[-1px]`}
            suppressHydrationWarning
          >
            {formatProductPrice(product)}
            {formatDiscountedPrice(product) && (
              <span className="text-lg ml-2 line-through text-gray-500">
                {formatDiscountedPrice(product)}
              </span>
            )}
          </p>
        </div>

        <div className="relative">
          {product?.isCertified && (
            <div
              className="absolute top-[3rem] left-[3rem] z-10 w-[4.8rem] h-[4.8rem] xl:w-[5.7rem] xl:h-[4.2rem] cursor-pointer"
              onClick={toggleCertifiedPopup}
            >
              <Image
                src={"/images/bbt-certified-icon.webp"}
                alt="Certified"
                className="w-full object-contain"
                width="58"
                height="42"
              />
            </div>
          )}

          {(product.isSoldOut ||
            product.isSoldOut === "1" ||
            product.price === 0 ||
            product.price === "0" ||
            product.inStock === false ||
            product.inStock === "0" ||
            product.stock === "0") && (
            <img
              src="/images/collection-sold.webp"
              alt="Sold"
              width="120"
              height="45"
              className="object-contain absolute left-[-7px] top-[-3.5px] md:left-[-5px] md:top-2 z-20 w-[9rem] h-[3.5rem] collection-sold-mark"
            />
          )}
          {(product.isBooked || product.booked === "1") && (
            <Image
              src="/images/collection-booked.webp"
              alt="Booked"
              width="120"
              height="45"
              className="object-contain absolute left-[-7px] top-[-3.5px] md:left-[-5px] md:top-2 z-10 w-[9rem] h-[3.5rem] collection-sold-mark"
            />
          )}
          <div 
            className="relative cursor-pointer"
            onClick={handleProductClick}
          >
            {/* <div className="h-[29rem] md:h-[31rem] xl:h-[33rem] 3xl:h-[36rem]"> */}
            <Slider {...sliderSettings} className="collection-gallery-slider">
              {displayImages.map((img, index) => (
                <div key={index} className="relative pt-2">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    className="w-full object-cover block h-full md:h-[25rem] lg:h-[33rem] xl:h-[25rem] 1xl:h-[28rem] 3xl:h-[34rem]"
                    width="490"
                    height="357"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
            {/* </div> */}
          </div>
        </div>

        <div className="px-[2.5rem] pt-8 md:px-10 xl:px-[2rem] 1xl:px-[3rem] 3xl:px-[5rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem] ">
          <div
            className="block cursor-pointer"
            onClick={handleProductClick}
            >
            <ul className="flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0">
              <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem]">
                <Image
                  src="/images/km-icon-black.webp"
                  alt="Kilometers Icon"
                  width="24"
                  height="25"
                  className="object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem]"
                />
                <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                  Kilometers Driven
                </p>
                <h6
                  className={`text-lg 3xl:text-[1.4rem] font-[500] tracking-[-0.5px]`}
                >
                  {product?.kmDriven || product?.km_driven || "N/A"} km
                </h6>
              </li>
              <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                <Image
                  src="/images/gas-icon-black.webp"
                  alt="Fuel Icon"
                  width="24"
                  height="25"
                  className={`object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem] `}
                />
                <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                  Fuel / Gas Type
                </p>
                <h6
                  className={`text-lg 3xl:text-[1.4rem] font-[500] tracking-[-0.5px]`}
                >
                  {product?.fuelType || "N/A"}
                </h6>
              </li>
              <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                <Image
                  src="/images/register-icon-black.webp"
                  alt="Registration Icon"
                  width="24"
                  height="25"
                  className={`object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem] `}
                />
                <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 xl:text-[1.05rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                  Registration State
                </p>
                <h6
                  className={`text-lg 3xl:text-[1.4rem] font-[500] tracking-[-0.5px]`}
                >
                  {product?.location ||
                    product?.state ||
                    product?.registrationState ||
                    product?.stateOfRegistration ||
                    "N/A"}
                </h6>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between callBtnGroup mt-12 overflow-hidden flex-wrap">
            <div className="flex-grow">
              {isMobile ? (
                <a
                  href={product.category == '1' ? "tel:+919999999908" : "tel:+919999999983"}
                  className="call bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer request-call-btn border-black border transition-all"
                >
                  <Image
                    src={"/images/square-btn-call-icon.webp"}
                    width="20"
                    height="20"
                    alt="Call Icon"
                    className="call object-contain w-[1.57rem] mr-6 h-auto 3xl:w-[2rem] 3xl:mr-[4rem] transition-all"
                  />
                  Call BigBoyToyz
                </a>
              ) : (
                <div
                  className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] 3xl:h-[5.8rem] 3xl:text-[1.7rem] cursor-pointer request-call-btn border-black border transition-all"
                  onClick={togglePopup}
                >
                  <Image
                    src={"/images/square-btn-call-icon.webp"}
                    width="20"
                    height="20"
                    alt="Call Icon"
                    className="call object-contain w-[1.57rem] mr-6 h-auto 3xl:w-[2rem] 3xl:mr-[4rem] transition-all"
                  />
                  Request A Call Back
                </div>
              )}
            </div>

            <div className="whatsapp callBtnRight ml-[2rem]">
              <a
                href={product.category == '1' ? `https://wa.me/919999999908?text=Hello,%20Big%20Boy%20Toyz%20Team.%20I%20would%20like%20to%20know%20more%20about%20${
                  product.name || product.title
                }` : `https://wa.me/919999999983?text=Hello,%20Big%20Boy%20Toyz%20Team.%20I%20would%20like%20to%20know%20more%20about%20${
                  product.name || product.title
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp whatsAppBtn w-[4.5rem] h-[4.5rem] flex justify-center items-center rounded-[5px] 3xl:w-[5.8rem] 3xl:h-[5.8rem]"
              >
                <Image
                  src={"/images/whatsapp-btn-icon.webp"}
                  width="25"
                  height="25"
                  alt="WhatsApp"
                  className="whatsapp object-contain w-9 h-auto 1xl:w-[2.6rem] transition-all"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
