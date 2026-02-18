"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./BannerSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import FilterPopup from "../../FilterPopup/FilterPopup";
import CollectionButton from "./CollectionButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mobLinksSlides = [
  {
    icon: "/images/hp-banner-link-icon-2.webp",
    title: "Sell Your Car",
    link: "/sell-used-luxury-car",
  },
  {
    icon: "/images/hp-banner-link-icon-3.webp",
    title: "Cars.co.in",
    link: "https://cars.co.in/",
    openNewWindow: true,
  },
  {
    icon: "/images/hp-banner-link-icon-4.webp",
    title: "Car Service",
    link: "/services",
  },
  {
    icon: "/images/hp-banner-link-icon-1.webp",
    title: "BBT Realty",
    link: "#",
    isComing: true,
  },
  {
    icon: "/images/hp-banner-link-icon-5.webp",
    title: "Modifications",
    link: "/modifications",
  },
];

const BannerSection = () => {
  const [mobSearchOpen, setMobSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const togglePopup = () => {
    setFilterOpen(!filterOpen);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to search results page with the query (using 'q' parameter as expected by search-results page)
      router.push(
        `/search-results?q=${encodeURIComponent(searchQuery.trim())}`
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/homepage.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error("Error fetching banner data:", error));
  }, []);

  const mobLinksSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    autoplay: false,
  };

  const [slideMounted, setSliderMounted] = useState(false);

  // Wait until after hydration
  useEffect(() => {
    const timer = setTimeout(() => setSliderMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-black">
      <div className="max-1920">
        <div className={`relative`}>
          <div>
            <img
              src="/images/hp-banner-desk.webp"
              alt="Banner Image"
              width="1920"
              height="1100"
              className="hidden md:block object-cover"
              fetchPriority="high"
            />
            <img
              src="/images/hp-banner-mob.webp"
              alt="Banner Image"
              width="390"
              height="775"
              className="block w-full h-[94vh] md:hidden object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute top-0 left-0 text-center w-full h-full pt-[12.5rem] pb-[5rem] lg:pt-[10.5rem] lg:pb-[5rem]">
            <div className="flex flex-col justify-between h-full">
              <div className="container">
                <div
                  className="lg:pt-5 xl:pt-9 1xl:pt-11 2xl:pt-14 3xl:pt-28"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <p className="banner-sub-title text-white font-light text-base mb-6 hidden lg:block lg:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] 3xl:mb-8">
                    Welcome to the Dream Destination for Supercar Lovers.
                  </p>
                  <h1 className="banner-title text-white font-normal leading-tight">
                    Supercars{" "}
                    <span className="font-thin block lg:inline-block">
                      for Superstars
                    </span>
                  </h1>
                  <img
                    src="/images/hp-banner-tagline.webp"
                    alt=""
                    className="hidden sm:w-[90%] object-contain mx-auto invert xl:max-h-[13rem]"
                  />

                  <div className="banner-filter-desktop lg:flex flex-wrap items-center hidden justify-center mt-12 1xl:mt-14 3xl:mt-20">
                    <div
                      className={`${
                        styles.bannerSearchBox
                      } relative flex items-center w-[29rem] h-[4.5rem] rounded-[3rem] mr-[1.5rem] border border-[#808080] 1xl:w-[31rem] 1xl:h-[4.9rem] 2xl:w-[33rem] 2xl:h-[5rem] 3xl:w-[42rem] 3xl:h-[6.3rem] 3xl:rounded-[4rem] ${
                        searchActive ? styles.searchActive : ""
                      }`}
                    >
                      <span className="absolute left-8 top-[50%] translate-y-[-50%] 3xl:left-[3rem]">
                        <Image
                          src="/images/banner-search-icon-white.webp"
                          width="17"
                          height="17"
                          alt="Search Icon"
                          className="w-5 object-contain 2xl:w-[1.4rem] 3xl:w-[1.72rem]"
                        />
                      </span>
                      <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search Your Dream Car Here... "
                        onFocus={() => setSearchActive(true)}
                        onBlur={() => setSearchActive(false)}
                        className="w-full border-0 outline-none bg-transparent text-lg text-white xl:text-[1.4rem] 1xl:text-[1.6rem] py-[1.4rem] pr-[8rem] pl-[5rem] 3xl:py-[1.4rem] 3xl:pl-[6.5rem] 3xl:text-[1.9rem] placeholder:text-lg placeholder:1xl:text-[1.4rem] placeholder:3xl:text-[1.7rem] placeholder:text-[#ffffff] placeholder:font-thin"
                      />
                      {/* Clear Search button */}
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          className="absolute lg:right-[6rem] 3xl:xl:right-[7.5rem] top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-all text-[1.8rem] leading-none 3xl:text-[2.2rem]"
                        >
                          &#x2715; {/* or use an icon from your icon set */}
                        </button>
                      )}

                      {/* Search Button */}
                      {/* <button
                        onClick={handleSearch}
                        className="absolute right-[4.5rem] top-[50%] translate-y-[-50%] z-10 cursor-pointer bg-white text-black px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-100 3xl:right-[6rem] 3xl:px-6 3xl:py-3 3xl:text-base"
                      >
                        Search
                      </button> */}
                      <div
                        className="top-[50%] translate-y-[-50%] absolute right-8 z-10 cursor-pointer 3xl:right-10 p-3 rounded-50% hover:bg-white transition-all duration-500 group"
                        onClick={togglePopup}
                      >
                        <Image
                          src="/images/banner-filter-icon-white.webp"
                          width="25"
                          height="25"
                          alt="Filter Button"
                          className="w-6 1xl:w-[1.5rem] 2xl:w-7 hover:scale-110 transition-all duration-500 group-hover:invert 3xl:w-[2.3rem]"
                        />
                      </div>
                    </div>
                    <div>
                      <CollectionButton />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`w-full ${
                  slideMounted ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="container">
                  <Link
                    href="/collection"
                    className={`${styles.hpBannerBtnMob} text-white flex relative w-full text-left text-xl lg:hidden max-w-[29rem] mx-auto py-[1.8rem] px-[3rem] rounded-[4rem] group overflow-hidden z-[10]`}
                  >
                    <span className="absolute z-[5] text-white text-[1.6rem] font-medium inset-0 bg-transparent flex items-center pl-[2rem]">Explore Collection</span>
                    Explore Collection
                    <span className="flex arrow items-center justify-center bg-white absolute w-[6.6rem] h-[3.8rem] rounded-[3rem] top-[50%] -translate-y-[50%] right-[1rem] transition-all duration-500 group-hover:right-[1rem] z-[2]">
                      <Image
                        src="/images/banner-btn-arrow-mob.webp"
                        alt="Button Arrow"
                        width="25"
                        height="21"
                        className="object-contain max-h-[1.9rem]"
                      />
                    </span>
                  </Link>
                </div>
                <div className="sm:hidden mt-[4rem] relative">
                  <img src="/images/hp-slide-shadow-left.png" alt="Shadow" className="absolute -left-[2px] top-0 w-[3.5rem] h-[10.2rem] object-contain z-10" />
                  <Slider {...mobLinksSlider} className="hp-mob-links-slider">
                    {mobLinksSlides.map((item, index) => (
                      <div key={index}>
                        <Link
                          href={item.link}
                          target={item?.openNewWindow && "_blank"}
                          className="h-full block slide-item w-full relative p-[1.5rem] rounded-[1rem] border border-[#888786]"
                        >
                          {item?.isComing && (
                            <img
                              src="/images/hp-banner-link-comming-soon.webp"
                              alt="Coming Soon"
                              className="object-contain absolute top-[-3px] right-[1rem] inline-block h-[8rem]"
                            />
                          )}
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="object-contain inline-block max-w-[1.6rem] h-[2rem]"
                          />
                          <span className="block text-white font-medium text-[1.2rem] my-[1rem] text-left">
                            {item.title}
                          </span>
                          <img
                            src="/images/hp-banner-link-arrow.webp"
                            alt="arrow"
                            className="object-contain inline-block max-w-[1.2rem]"
                          />
                        </Link>
                      </div>
                    ))}
                  </Slider>
                    <img src="/images/hp-slide-shadow-right.png" alt="Shadow" className="absolute -right-[3px] top-0 w-[3.5rem] h-[10.2rem] object-contain z-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 left-[50%] translate-x-[-50%] text-center w-max lg:flex flex-col justify-center items-center hidden 3xl:bottom-24 scroll-animation">
            <Image
              src="/images/banner-scroll-icon-white.webp"
              alt="Scroll Down"
              width="19"
              height="29"
              className="inline-block object-contain w-8 1xl:w-6"
            />
            <span className="uppercase text-white mt-5 text-xs 1xl:leading-relaxed 2xl:text-lg">
              Scroll Down
            </span>
          </div>
        </div>
        {filterOpen && (
          <FilterPopup active={filterOpen} togglePopup={togglePopup} />
        )}
      </div>
    </section>
  );
};

export default BannerSection;
