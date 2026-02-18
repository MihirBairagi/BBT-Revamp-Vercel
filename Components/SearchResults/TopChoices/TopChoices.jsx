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
const brands = [
  {
    title: "BMW",
    logo: "/images/detail-page/brand-icon-bmw.webp",
    url: "/buy-used-bmw-cars",
  },
  {
    title: "AUDI",
    logo: "/images/detail-page/brand-icon-audi.webp",
    url: "/buy-used-audi-cars",
  },
  {
    title: "MERCEDES",
    logo: "/images/detail-page/brand-icon-mercedes.webp",
    url: "/buy-used-mercedes-benz-cars",
  },
  {
    title: "JAGUAR",
    logo: "/images/detail-page/brand-icon-jaguar.webp",
    url: "/buy-used-jaguar-cars",
  },
  {
    title: "LAND ROVER",
    logo: "/images/detail-page/brand-icon-land-rover.webp",
    url: "/buy-used-land-rover-cars",
  },
  {
    title: "BENTLEY",
    logo: "/images/detail-page/brand-icon-bentley.webp",
    url: "/buy-used-bentley-cars",
  },
  {
    title: "PORSCHE",
    logo: "/images/detail-page/brand-icon-porsche.webp",
    url: "/buy-used-porsche-cars",
  },
  {
    title: "LAMBORGHINI",
    logo: "/images/detail-page/brand-icon-lambo.webp",
    url: "/buy-used-lamborghini-cars",
  },
];


const TopChoices = () => {
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
    <section className="bg-white py-[5rem] md:py-[7rem] border-t border-[#D9D9D9] md:border-0 lg:py-[8rem] 1xl:py-[10rem] 2xl:py-[12rem] 3xl:py-[14rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center mb-[3rem] xl:flex xl:justify-between xl:text-left xl:mb-[5rem] 2xl:mb-[8rem] 3xl:mb-[10rem]">
            <h2 className="font-light text-[2.9rem] [&>b]:font-[400] leading-[1.1] tracking-[-0.15rem] 1xl:text-[3.2rem] xl:[&>b]:font-[500] 1xl:leading-[1.2] 2xl:text-[3.6rem] 3xl:text-[4.5rem] xl:flex-1 [&>br]:hidden xl:[&>br]:block">
              You May Also Like <br /> <b>Explore Top Choices</b>
            </h2>
            <p className="hidden xl:block xl:w-[53%] font-light text-[1.15rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:w-[55%]">
              BBT started in 2009 as a benchmark model for the Pre-Used, or how
              we prefer to see it as, Pre-Loved Car Brand. The mission was
              simple, direct and drove effect - delivering a new dimension of
              luxury while standardising & raising platforms for the used car
              market in India.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h3 className="titleWithLine mobileLine">
              <span className="bg-[#fff] pr-[2rem] inline-block relative z-10 text-[1.51rem] tracking-[-1px] mb-[1rem] xl:text-[2rem] xl:pr-[4rem] 1xl:text-[2.5rem] 3xl:text-[3.2rem]">
                Top Brands
              </span>
            </h3>
            <ul
              className={`flex flex-wrap [&>*:nth-child(4n)]:border-r lg:[&>*:nth-child(4n)]:border-r-0 lg:[&>*:nth-child(6n)]:border-r xl:[&>*:nth-child(6n)]:border-r-0 xl:[&>*:nth-child(8n)]:border-r 1xl:mt-[2rem] 3xl:mt-[2.5rem]`}
            >
              {brands.map((brand, index) => (
                <li
                  key={index}
                  title={brand.title}
                  className="w-1/4 h-24 my-8 lg:w-1/6 lg:h-36 xl:w-1/8 1xl:h-40 1xl:my-10 2xl:h-40 3xl:h-60 border-l border-[#D9D9D9] last-of-type:border-r"
                >
                  <Link
                    href={brand.url}
                    className="flex px-5 py-3 items-center justify-between w-full h-full lg:px-12 lg:py-10 xl:px-12 xl:py-8"
                  >
                    <Image
                      src={brand.logo}
                      width="100"
                      height="100"
                      alt={brand.title}
                      className="object-contain block w-full max-h-16 xl:max-h-18 1xl:max-h-20 1xl:max-w-7r 1xl:mx-auto 2xl:max-w-8r 2xl:max-h-24 3xl:max-h-32 hover:scale-110 transition-all duration-500 ease-in-out"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {!isLoading && !error && styles.length > 0 && (
            <div
              className="mt-[4rem] lg:mt-[6rem] category-slider"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <h3 className="titleWithLine mobileLine">
              <span className="bg-[#fff] pr-[2rem] inline-block relative z-10 text-[1.51rem] tracking-[-1px] mb-[1rem] xl:text-[2rem] xl:pr-[4rem] 1xl:text-[2.5rem] 3xl:text-[3.2rem]">
                Top Categories
              </span>
            </h3>
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

          {/* <div
            className="mt-[3rem] xl:mt-[5rem] 2xl:mt-[8rem]"
            // data-aos="fade-up"
            // data-aos-easing="linear"
            // data-aos-duration="500"
          >
            <h3 className="titleWithLine mobileLine">
              <span className="bg-[#fff] pr-[2rem] inline-block relative z-10 text-[1.51rem] tracking-[-1px] mb-[1rem] xl:text-[2rem] xl:pr-[4rem] 1xl:text-[2.5rem] 3xl:text-[3.2rem]">
                Top Categories
              </span>
            </h3>
            <ul className="flex items-center flex-wrap [&>*:nth-child(3n)]:mr-0 lg:[&>*:nth-child(3n)]:mr-[2.5%] lg:[&>*:nth-child(5n)]:mr-0 1xl:mt-[2.5rem] 3xl:mt-[3rem] ">
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
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TopChoices;
