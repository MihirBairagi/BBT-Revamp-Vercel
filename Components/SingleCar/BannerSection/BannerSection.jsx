"use client";

import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

// import { processImageUrl } from "@/utils/imageUtils";

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

const getSliderSettings = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.8,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "25rem",
    initialSlide: isMobile ? 0 : -1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1.7,
          centerPadding: "5rem",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  };
};

const BannerSection = ({
  carData,
  images = [],
  thumbnail = "",
  setSlideScrolled,
  slideScrolled,
}) => {
  const scrollRef = useRef(null);
  // Sort images by order if not already sorted
  const sortedImages = [...images].sort((a, b) => a.order - b.order);

  // Ensure we have at least one image
  if (sortedImages.length === 0) {
    sortedImages.push({
      url: "https://cdn.bigboytoyz.com/new-version/placeholder-car.png",
      alt: carData.name || "Car Image",
      id: "placeholder",
    });
  }

  if (thumbnail) {
    sortedImages.unshift({
      url: processImageUrl(thumbnail, true),
      alt: carData.name || "Car Image",
      id: "placeholder",
    });
  }

  // Ensure we have at least 3 images for the effect to work properly
  while (sortedImages.length < 3) {
    sortedImages.push(sortedImages[0]);
  }

  // Get slider settings based on device type
  const sliderSettings = getSliderSettings();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      if (scrollTop > lastScrollTop) {
        setSlideScrolled(true);
      } else if (scrollTop < lastScrollTop) {
        setSlideScrolled(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    el.addEventListener("scroll", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="productPageBanner overflow-hidden bg-white">
      <div className="max-1920 relative hidden md:block">
        <Slider {...sliderSettings} className="details-banner-slider">
          {sortedImages.map((image, index) => (
            <div key={image.id || index} className="md:px-[1.3rem]">
              <img
                src={image.url}
                alt={image.alt || carData.name || "Car Image"}
                className="w-full object-cover block"
                width="1025"
                height="730"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="block w-full h-[100vh] pb-[24rem] absolute top-[7rem] left-0 overflow-y-auto md:hidden bg-black z-10"
        ref={scrollRef}
      >
        {sortedImages.map((image, index) => (
          <div key={image.id || index} className="">
            <img
              src={image.url}
              alt={image.alt || carData.name || "Car Image"}
              className="w-full object-cover block"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
