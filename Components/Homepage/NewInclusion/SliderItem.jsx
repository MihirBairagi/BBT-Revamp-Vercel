import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useUIAssets } from "../../../app/lib/hooks/useUIAssets";
import { formatProductPrice, formatDiscountedPrice } from "../../../app/lib/utils/productUtils";
import { getDisplayImages } from "../../../app/lib/services/gallery";

const SliderItem = ({ product }) => {
  const { assets } = useUIAssets();
  
  if (!product) {
    console.log('SliderItem: No product data received');
    return null;
  }

  // Determine the best ID to use for links
  const carId = product?.id || product?._id || product?.mongodb_id || "";
  const slug = product?.posturl || product?.postUrl || product?.slug || carId;

  // Use shared gallery utility for consistent image selection and URLs
  const displayImages = getDisplayImages(product, assets.placeholderCar).slice(0, 6);
  
  // console.log('SliderItem received product:', { 
  //   id: product.id, 
  //   name: product.name, 
  //   title: product.title,
  //   price: product.price,
  //   registrationYear: product.registrationYear,
  //   yearOfRegistration: product.yearOfRegistration,
  //   kmDriven: product.kmDriven,
  //   fuelType: product.fuelType,
  //   registrationState: product.registrationState,
  //   images: product.images?.length || 0,
  //   gallery: product.gallery?.length || 0,
  //   fullProduct: product
  // });
  
  // Get the product name with fallbacks
  const productName = product.name || product.title || "Car Name";
  
  // Format price for display with better handling
  let formattedPrice = "Call for Price";
  if (product.price) {
    const numPrice = typeof product.price === 'string' 
      ? parseFloat(product.price.replace(/[^\d.]/g, '')) 
      : parseFloat(product.price);
    
    if (!isNaN(numPrice) && numPrice > 0) {
      formattedPrice = numPrice.toLocaleString('en-IN');
    }
  }
  
  // Get registration year with better fallbacks
  const regYear = product.registrationYear || "N/A";
  
  // Get KM driven with better fallbacks
  const kmValue = product.kmDriven ? 
    (product.kmDriven.toString().includes('km') ? product.kmDriven : `${product.kmDriven} km`) : 
    "N/A";
  
  // Get fuel type with better fallbacks
  const fuelValue = product.fuelType || "N/A";
  
  // Get registration state with better fallbacks
  const stateValue = product.registrationState || "N/A";
  
  // Get display images with fallback logic
  // const displayImages = getDisplayImages(product, assets.placeholderCar);
  const imageUrl = displayImages.length > 0 ? displayImages[0].url : assets.placeholderCar;
  
  return (
    <Link
      href={product.category == '1' ? `https://cars.co.in/used-luxury-cars/${slug}-detail-page` : `/used-luxury-cars/${slug}-detail-page`}
      className="sm:mx-3 sm:bg-white lg:mx-8 block transition-all ease-in-out common-car-item duration-500 3xl:mx-0"
      target={product.category == '1' ? '_blank' : '_self'}
      >
      <div className="px-14 pt-12 pb-20 sm:px-8 sm:pt-8 sm:pb-16 lg:pb-10 3xl:px-20 3xl:pt-12 3xl:pb-16">
        <p
          className={`inline-block bg-black text-white text-center rounded-[5rem] text-base px-5 py-2 leading-4 lg:text-sm xl:text-[1.2rem] lg:py-1 3xl:text-[1.4rem] 3xl:px-8 3xl:py-[7px]`}
        >
          Reg.Year : {regYear}
        </p>
        <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:tracking-tighter 3xl:text-[2.8rem] 3xl:mt-8 line-clamp-1">
          {productName}
        </h4>
        <p className="text-[1.8rem] font-medium sm:text-[1.7rem] lg:text-[1.5rem] xl:text-[1.875rem] lg:mt-2 3xl:mt-4 mb-12 sm:mb-8 lg:mb-6 3xl:text-[2.2rem] 3xl:mb-10">
          {formatProductPrice(product)}
          {formatDiscountedPrice(product) && (
            <span className="text-lg ml-2 line-through text-gray-500">
              {formatDiscountedPrice(product)}
            </span>
          )}
        </p>

        <ul className="flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0">
          <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem]">
            <img
              src="/images/km-icon-black.webp"
              alt="Kilometers Icon"
              width="24"
              height="25"
              className="object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem]"
            />
            <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm xl:text-[1rem] 2xl:text-[1.15rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
              Kilometers Driven
            </p>
            <h6
              className={`text-lg 3xl:text-[1.4rem] font-[500] tracking-[-0.5px]`}
            >
              {kmValue}
            </h6>
          </li>
          <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
            <img
              src="/images/gas-icon-black.webp"
              alt="Fuel Icon"
              width="24"
              height="25"
              className={`object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem] `}
            />
            <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm xl:text-[1rem] 2xl:text-[1.15rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
              Fuel / Gas Type
            </p>
            <h6
              className={`text-lg 3xl:text-[1.4rem] font-[500] tracking-[-0.5px]`}
            >
              {fuelValue}
            </h6>
          </li>
          <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
            <img
              src="/images/register-icon-black.webp"
              alt="Registration Icon"
              width="24"
              height="25"
              className={`object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem] `}
            />
            <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm xl:text-[1rem] 2xl:text-[1.15rem] 3xl:text-[1.3rem] 1xl:mt-4 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
              Registration State
            </p>
            <h6
              className={`text-lg 3xl:text-[1.4rem] font-[500] tracking-[-0.5px]`}
            >
              {stateValue}
            </h6>
          </li>
        </ul>
      </div>
      <div className="relative pt-2 overflow-hidden">
        <img
          src={imageUrl}
          alt={productName}
          width="490"
          height="357"
          loading="lazy"
          className="w-full object-cover block h-full md:max-h-[23rem] xl:max-h-[25rem] 3xl:max-h-[34rem] 3xl:h-[34rem]"
        />
        {product.isBooked && (
          <img
            src="/images/booked-badge.webp"
            alt="Booked"
            width="48"
            height="120"
            className="object-contain absolute right-6 z-10 w-16 top-0 collection-sold-mark"
          />
        )}
      </div>
    </Link>
  );
};

export default SliderItem;
