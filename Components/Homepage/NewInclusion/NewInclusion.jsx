"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useProducts } from "../../../app/lib/hooks/useProducts";

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

const NewInclusion = ({ recentProducts = [] }) => {
  const [isClientMounted, setIsClientMounted] = useState(false);
  const [randomizedProducts, setRandomizedProducts] = useState([]);

  // Use the products hook to fetch latest added products
  const { products, isLoading } = useProducts({
    page: 1,
    limit: 12,
    sort: 'added', // Fetch latest added products
    order: 'desc',
    random: false, // Disable random on API level to prevent hydration issues
    enabled: recentProducts.length === 0,
    initialData: recentProducts.length > 0 ? { data: recentProducts } : undefined
  });

  // Determine which products to use
  const productsToUse = useMemo(() => {
    return products.length > 0 ? products : recentProducts;
  }, [products.length, recentProducts.length]);

  useEffect(() => {
    AOS.init();
    setIsClientMounted(true);
  }, []);

  // Randomize products only after client has mounted to prevent hydration errors
  useEffect(() => {
    if (isClientMounted && productsToUse.length > 0) {
      const shuffled = [...productsToUse]
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
      setRandomizedProducts(shuffled);
    }
  }, [isClientMounted, productsToUse.length]);

  // Use original products for SSR, randomized for client after mount
  const displayProducts = isClientMounted && randomizedProducts.length > 0 
    ? randomizedProducts 
    : productsToUse.slice(0, 6);

  // Configure slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className={`overflow-x-hidden bg-[#F3F3F3] pt-20 sm:pb-20 lg:py-40 xl:py-48 3xl:py-72`}
    >
      <div className="max-1920">
        <div
          className={`px-8 sm:mb-16 md:px-28 lg:px-40 flex flex-wrap justify-between items-center relative lg:mb-24 xl:px-48 1xl:px-52 3xl:px-72 3xl:mb-36`}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          {/* <span className="h-px w-auto grow bg-black lg:hidden"></span> */}
          <h2 className=" pl-8 lg:pl-0 titleWithLine mobileLine text-right lg:text-left xl:pb-[0.5rem] flex-1">
            <span className="bg-[#F3F3F3] pl-5 inline-block relative z-10 tracking-[-1px] lg:pl-0 lg:pr-5 xl:text-[2.4rem] xl:pr-[4rem] 1xl:text-[2.7rem] 3xl:text-[4.5rem] 3xl:tracking-[-0.4rem]">
              Recently Parked
            </span>
          </h2>

          <div className="hidden lg:inline-block lg:pl-[4rem]">
            <Link href="/collection" className="btn btnBlack roundedBtn">
              All Collection
            </Link>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin h-12 w-12 border-4 border-black rounded-full border-t-transparent"></div>
          </div>
        ) : displayProducts.length > 0 ? (
          <div
            className="inclusionSlider"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Slider {...settings}>
              {displayProducts.map((car, index) => (
                <SliderItem product={car} key={`${car.id || car.mongodb_id}-${index}-${isClientMounted}`} />
              ))}
            </Slider>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl">No new cars available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewInclusion;
