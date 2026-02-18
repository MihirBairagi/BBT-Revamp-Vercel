"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { footerService } from "../../../app/lib/services/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Placeholder category icons - used as fallback when no category image is available
const categoryIcons = {
  suv: "/images/detail-page/category-icon-suv.webp",
  sedan: "/images/detail-page/category-icon-sedan.webp",
  convertible: "/images/detail-page/category-icon-convertable.webp",
  coupe: "/images/detail-page/category-icon-coupe.webp",
  sports: "/images/detail-page/category-icon-sports.webp",
  hatchback: "/images/detail-page/category-icon-hatchback.webp",
  luxury: "/images/detail-page/category-icon-luxury.webp",
  wagon: "/images/detail-page/category-icon-wagon.webp",
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

// Configure slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "10%",
        arrows: false,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 2,
        arrows: false,
        centerMode: true,
        centerPadding: "5%",
      },
    },
  ],
};

const ShopByCategory = () => {
  const [styles, setStyles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  // Fetch car styles from the API using the same approach as footer
  useEffect(() => {
    const fetchStyles = async () => {
      try {
        setIsLoading(true);
        // Use the same footer service to fetch styles
        const styles = await footerService.fetchStyles();

        if (styles && styles.length > 0) {
          // Map styles to the component format
          const processedStyles = styles.map((style) => {
            console.log("style", style);
            const styleName = style.name || "";
            const styleSlug =
              style.slug || styleName.toLowerCase().replace(/\s+/g, "-");
            const styleIcon = `https://cdn.bigboytoyz.com/new-version/styles/${style.icon}`;

            return {
              id: style.id || style._id,
              title: styleName,
              // Use the predefined icon or fallback to generic
              icon:
                styleIcon ||
                categoryIcons[styleName.toLowerCase()] ||
                "/images/detail-page/category-icon-generic.webp",
              url: `/collection?style=${style.id}`,
            };
          });

          // Take the top 5 styles
          setStyles(processedStyles);
        } else {
          // Fallback to predefined styles if API returns empty
          const fallbackStyles = Object.entries(categoryIcons).map(
            ([key, icon]) => ({
              id: key,
              title: key.charAt(0).toUpperCase() + key.slice(1),
              icon: icon,
              url: `/category/${key}`,
            })
          );

          setStyles(fallbackStyles.slice(0, 5));
        }

        setError(null);
      } catch (err) {
        console.error("Error loading styles:", err);
        setError(err.message);

        // Fallback to predefined styles on error
        const fallbackStyles = Object.entries(categoryIcons).map(
          ([key, icon]) => ({
            id: key,
            title: key.charAt(0).toUpperCase() + key.slice(1),
            icon: icon,
            url: `/category/${key}`,
          })
        );

        setStyles(fallbackStyles.slice(0, 5));
      } finally {
        setIsLoading(false);
      }
    };

    fetchStyles();
  }, []);

  return (
    <section className="bg-white py-24 lg:pb-36 xl:py-32 xl:pb-44 3xl:pb-60 3xl:pt-36">
      <div className="max-1920">
        <div className="container">
          <h2
            className="titleWithLine xl:tracking-tighter"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <span className="lg:bg-white lg:pr-10 relative z-10 ">
              Shop By Car Style
            </span>
          </h2>

          {/* Loading state */}
          {isLoading && (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin h-8 w-8 border-4 border-black rounded-full border-t-transparent"></div>
            </div>
          )}

          {/* Error state */}
          {error && !isLoading && (
            <div className="text-center text-red-500 py-8">
              Failed to load car styles. Please try again later.
            </div>
          )}

          {/* Display styles if available */}
          {!isLoading && !error && styles.length > 0 && (
            <div
              className="mt-[4rem] lg:mt-[6rem] category-slider"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <Slider {...settings}>
                {styles.map((category) => (
                  <div key={category.id || category.title} className="h-full">
                    <Link
                      href={`/collection?style=${category.id}`}
                      className={`px-2 py-10 w-full h-full rounded-xl border border-neutral-300 mt-5 block text-center lg:py-20 xl:pb-16 xl:pt-20 2xl:py-24 3xl:py-32 hover:bg-black transition-all duration-500 group`}
                    >
                      <img
                        src={category.icon}
                        alt={category.title}
                        className="object-contain block w-full max-h-11 xl:max-h-16 3xl:max-h-20"
                      />
                      <p className="text-black font-medium text-1xl mt-3 xl:text-1.6xl xl:mt-12 1xl:text-3xl 2xl:mt-16 3xl:text-[2.6rem] 3xl:mt-20 group-hover:text-white transition-all duration-500">
                        {category.title}
                      </p>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          )}

          {/* Empty state */}
          {!isLoading && !error && styles.length === 0 && (
            <div className="text-center py-8">
              No car styles available at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
