"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useUIAssets } from "../../../app/lib/hooks/useUIAssets";
import { formatProductPrice, formatDiscountedPrice } from "../../../app/lib/utils/productUtils";

// Import dummy data as fallback only
import { cars } from "../../../public/data/dummyData";
import ProductCard from "../../Collection/ProductCard/ProductCard";

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Next Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Previous Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

const RelatedCarsCard = ({ data }) => {
  const { assets } = useUIAssets();
  const [imgError, setImgError] = useState(false);

  // Handle image loading errors
  const handleImageError = () => {
    setImgError(true);
  };

  // Format price properly
  const formatPrice = (price) => {
    if (!price) return "Call for Price";
    const numPrice =
      typeof price === "string"
        ? parseFloat(price.replace(/[^\d.]/g, ""))
        : price;
    if (isNaN(numPrice) || numPrice === 0) return "Call for Price";
    return numPrice.toLocaleString("en-IN");
  };

  // Get the best available image
  const getProductImage = () => {
    // Try enhanced images first
    if (data.images && data.images.length > 0) {
      // Prioritize front-facing images if we have that data
      const frontImage = data.images.find((img) => img.porder === "1");
      if (frontImage) {
        return frontImage.url || frontImage;
      }

      // Otherwise use the first image (which should be ordered correctly)
      return data.images[0].url || data.images[0];
    }

    // Try gallery array
    if (data.gallery && data.gallery.length > 0) {
      return data.gallery[0];
    }

    // Try direct image properties
    if (data.image) return data.image;
    if (data.thumbnail) return data.thumbnail;
    if (data.prolistimage) return data.prolistimage;

    // Return placeholder
    return assets.placeholderCar || "/images/placeholder-car.webp";
  };

  // Get product name
  const getProductName = () => {
    return data.name || data.title || data.proname || "Car";
  };

  // Get product price
  const getProductPrice = () => {
    return data.price || data.proprice || 0;
  };

  console.log("RelatedCarsCard data:", {
    id: data.id,
    name: getProductName(),
    price: getProductPrice(),
    hasImages: !!(data.images || data.gallery || data.image),
  });

  const slug = data.posturl || data.postUrl || data.slug || data._id || data.id || data.mongodb_id;
  return (
    <Link
      href={data.category == '1' ? `https://cars.co.in/used-luxury-cars/${(data.posturl || data._id)}-detail-page` : `/used-luxury-cars/${slug}-detail-page`}
      className="mr-9 bg-white lg:mx-4 block transition-all duration-500 ease-in-out common-car-item xl:mx-7 1xl:mx-6 2xl:mx-8"
      target={data.category == '1' ? '_blank' : '_self'}
      >
      <div
        className={`bg-white px-8 pt-12 pb-20 sm:px-8 sm:pt-8 sm:pb-16 lg:pb-10 2xl:py-10 3xl:px-20 3xl:pt-12 3xl:pb-16 1xl:px-12 `}
      >
        <p
          className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-xl 3xl:px-8`}
        >
          Reg.Year : {data.registrationYear || "N/A"}
        </p>
        <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 1xl:text-4xl 2xl:tracking-tighter 3xl:text-4.2xl 3xl:mt-8 3xl:text-5xl line-clamp-1">
          {getProductName()}
        </h4>
        <p className="font-medium lg:mt-2 mb-12 sm:mb-8 lg:mb-6 text-1.6xl 1xl:text-3xl 1xl:mt-5 1xl:mb-8 3xl:text-4xl 3xl:mt-7 3xl:mb-10">
          {formatProductPrice(data)}
        </p>

        <div className="[&_li:nth-child(3n)]:hidden [&_li]:w-[45%] sm:[&_li:nth-child(3n)]:block sm:[&_li]:w-[33%]">
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
                {data?.kmDriven || data?.km_driven || "N/A"}{" "}
                {data?.kmDriven || data?.km_driven ? "km" : ""}
              </h6>
            </li>
            <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
              <img
                src={"/images/gas-icon-black.webp"}
                alt="Fuel Icon"
                width="24"
                height="25"
                className={`object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem] `}
              />
              <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                Fuel / Gas Type
              </p>
              <h6
                className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
              >
                {data?.fuelType ||
                  data?.fueltype ||
                  data?.fuel_type ||
                  "N/A"}
              </h6>
            </li>
            <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
              <img
                src={"/images/register-icon-black.webp"}
                alt="Registration Icon"
                width="24"
                height="25"
                className={`object-contain h-[1.2rem] lg:h-[1rem] 3xl:h-[1.3rem] `}
              />
              <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm 2xl:text-base 1xl:mt-4 3xl:text-xl 3xl:mt-6 3xl:mb-3 text-[#767778] tracking-[-0.5px]">
                Registration State
              </p>
              <h6
                className={`text-lg 3xl:text-[1.4rem] font-[600] tracking-[-0.5px]`}
              >
                {data?.registrationState ||
                  data?.state ||
                  data?.regstate ||
                  "N/A"}
              </h6>
            </li>
          </ul>
        </div>
      </div>
      <div className="overflow-hidden">
        {!imgError ? (
          <img
            src={getProductImage()}
            alt={getProductName()}
            width="390"
            height="285"
            className="object-cover w-full block h-full md:max-h-[23rem] xl:max-h-[25rem] 3xl:max-h-[34rem]"
            onError={handleImageError}
          />
        ) : (
          <img
            src={assets.placeholderCar || "/images/placeholder-car.webp"}
            alt={getProductName()}
            width="390"
            height="285"
            className="object-cover w-full block h-full md:max-h-[23rem] xl:max-h-[25rem] 3xl:max-h-[34rem]"
          />
        )}
      </div>
    </Link>
  );
};

const RelatedCars = ({ carId, brand, relatedCars = [] }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    AOS.init();
    setIsMounted(true);
  }, []);

  console.log("RelatedCars received:", {
    carId,
    brand,
    relatedCarsCount: relatedCars.length,
  });
  console.log("RelatedCars data:", relatedCars);

  // Use real related cars if available, otherwise fetch some recent cars as fallback
  const carsToDisplay =
    relatedCars && relatedCars.length > 0 ? relatedCars : cars.slice(2, 7); // Only use dummy data as last resort

  // Filter out the current car if it's in the related cars
  const filteredCars = carsToDisplay.filter((car) => {
    const carIdentifiers = [
      car.id,
      car._id,
      car.mongodb_id,
      car.id_,
      car.posturl,
    ];
    return !carIdentifiers.includes(carId);
  });

  // Ensure we have at least 3 cars to display
  let displayCars = filteredCars;
  if (displayCars.length < 3 && relatedCars.length === 0) {
    // Only use dummy data if we have no real related cars
    displayCars = [
      ...filteredCars,
      ...cars.slice(0, Math.max(3 - filteredCars.length, 0)),
    ];
  }

  // Take maximum 6 cars
  displayCars = displayCars.slice(0, 6);

  console.log(
    "Final display cars:",
    displayCars.length,
    displayCars.map((c) => ({ id: c.id, name: c.name || c.title }))
  );

  let settings = {
    dots: false,
    infinite: displayCars.length >= 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: displayCars.length >= 3,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 989,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: displayCars.length > 1,
          arrows: false,
          centerPadding: "20px",
        },
      },
    ],
  };

  if (!isMounted || displayCars.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#F3F3F3]">
      <div className="max-1920 py-24 lg:py-36 xl:py-44 2xl:py-52 3xl:py-60">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="flex justify-between items-center mb-10 2xl:mb-16 3xl:mb-36">
            <h2 className="lg:pl-0 titleWithLine lg:w-full 2xl:tracking-tighter">
              <span className="lg:bg-[#F3F3F3] lg:pr-5 relative z-10 2xl:pr-16">
                Related Cars
              </span>
            </h2>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          {/* {displayCars.length < 3 ? ( */}
            <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] mx-auto lg:w-[83%]">
              {/* Display the products */}
              {displayCars.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          {/* ) : ( */}
            {/* <Slider
              {...settings}
              className="related-car-slider pl-0 sm:pl-12 lg:px-36 lg:mt-24 xl:px-40 1xl:px-48 3xl:px-60"
            >
              {displayCars.map((data, index) => (
                <ProductCard
                  product={data}
                  key={`${data.id || data._id || data.mongodb_id || index}`}
                />
              ))}
            </Slider>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default RelatedCars;
