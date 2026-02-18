"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  prevArrow: "",
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "7%",
};

const featured = [
  {
    thumbnail: "/images/team-page/founder-featured-1.webp",
    title: "The Magazine",
  },
  {
    thumbnail: "/images/team-page/founder-featured-2.webp",
    title: "Ted Talks",
  },
  {
    thumbnail: "/images/team-page/founder-featured-3.webp",
    title: "Brand By TMM",
  },
  {
    thumbnail: "/images/team-page/founder-featured-4.webp",
    title: "Elite Magazine",
  },
];
const awards = [
  {
    thumbnail: "/images/team-page/founder-award-1.webp",
    title: "40 Under 40 India Business world",
  },
  {
    thumbnail: "/images/team-page/founder-award-2.webp",
    title: "Tech And Auto Awards 2018",
  },
  {
    thumbnail: "/images/team-page/founder-award-3.webp",
    title: "Brand By TMM",
  },
  {
    thumbnail: "/images/team-page/founder-award-4.webp",
    title: "Brand By Businessworld",
  },
];

const SliderItem = ({ data }) => {
  return (
    <div className="pr-[1.5rem] h-full sm:pr-0 sm:w-[23%] sm:h-[inherit] sm:mt-[1.5rem] 1xl:w-[22%]">
      <div className="bg-[#191919] pt-[1.5rem] h-full text-center px-[1rem] min-h-[18.8rem] sm:min-h-[unset] md:pt-[1rem] md:px-[0.5rem] md:min-h-[15rem] md:flex md:flex-col md:justify-around lg:min-h-[16rem] xl:min-h-none xl:block xl:pt-[1.5rem] xl:px-[0.7rem] 1xl:px-[1.3rem] 3xl:pt-[2rem]">
        <div className="px-[1.7rem] sm:px-[0] lg:px-[0.5rem] xl:px-[0.8rem] 3xl:px-[1.2rem]">
          <img
            src={data.thumbnail}
            alt="Slider Image"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-[1.5rem] w-full tracking-[-1px] font-light mt-[1.5rem] pb-[1.5rem] sm:text-[1.2rem] md:pb-[0.7rem] md:text-[1rem] md:mt-[0.7rem] xl:text-[1.2rem] xl:min-h-[4.2rem] xl:pb-[0] xl:flex xl:items-center xl:justify-center 1xl:text-[1.25rem] 1xl:tracking-[-0.5px] 1xl:min-h-[5.5rem] 1xl:py-[1rem] 3xl:text-[1.8rem] 3xl:tracking-[-1px] 3xl:min-h-[7.5rem]">
          {data.title}
        </p>
      </div>
    </div>
  );
};

const Founder = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black py-[5rem] text-white sm:py-[8rem] xl:py-[12rem] 2xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h3 className="titleWithLine titleWhiteLine mobileLine">
            <span className="bg-[#000] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[2.8rem] xl:tracking-[-1px] xl:pr-[4rem] 1xl:text-[3.3rem] 3xl:text-[4.5rem]">
              The Founder
            </span>
          </h3>
          <div className="mt-[2rem] sm:mt-[3rem] lg:mt-[5rem] xl:mt-[7rem] 1xl:mt-[8rem] 3xl:mt-[11rem]">
            <div className="sm:hidden">
              <h2 className="text-[2.2rem] tracking-[-1.5px]">Jatin Ahuja</h2>
              <p className="text-[1.2rem] font-light">
                Founder & Managing Director
              </p>
            </div>
            <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-between ">
              <div className="mt-[2rem] sm:mt-0 sm:w-[40%] lg:w-[46%]">
                <img
                  src="/images/team-page/founder-img.webp"
                  alt="Chairman"
                  className="w-full h-auto object-cover rounded-[2rem]"
                />
              </div>
              <div className="sm:w-[50%] lg:w-[43.5%]">
                <div className="hidden sm:block">
                  <h2 className="text-[2.2rem] tracking-[-1.5px] lg:text-[3rem] lg:font-[400] 1xl:text-[3.3rem] 2xl:text-[3.5rem] 3xl:text-[4.5rem] 3xl:tracking-[-3px]">
                    Jatin Ahuja
                  </h2>
                  <p className="text-[1.2rem] font-light lg:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.8rem] 3xl:text-[2.2rem]">
                    Founder & Managing Director
                  </p>
                </div>
                <div className="mt-[3rem] sm:flex sm:flex-col-reverse sm:mt-[1rem] xl:pr-[10%] 2xl:mt-[2rem]">
                  <div className="flex items-start">
                    <img
                      src="/images/team-page/team-quote-white-2.webp"
                      alt="Quote Icon"
                      className="h-auto object-contain w-[2.19rem] mt-[0.5rem] xl:w-[3rem] 3xl:w-[4.3rem]"
                    />
                    <p className="flex-1 ml-[1rem] underline text-[1.5rem] leading-[1.4] xl:text-[2rem] 1xl:text-[2.2rem] 3xl:text-[2.8rem] 3xl:ml-[2rem]">
                      Great entrepreneurs are more <br /> born than made.
                    </p>
                  </div>
                  <p className="font-light text-[1.2rem] leading-[1.5] mt-[2rem] sm:mt-[1rem] sm:mb-[1.5rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] xl:mb-[3rem] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 2xl:mb-[4.5rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
                    Mr Jatin Ahuja is an entrepreneur in the true sense of the
                    word. His passion for the industry saw him initiating his
                    career at the young age of 17. With his dedication,
                    relentless pursuit for impeccable service and vehemence we
                    have seen him build & bring Big Boy Toyz today as one of the
                    strongest names in luxury automotive industry across the
                    length & breadth of the country.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* For Desktop */}
          <div className="hidden sm:block md:flex md:flex-wrap md:justify-between md:mt-[5rem] lg:mt-[8rem] 3xl:mt-[11rem]">
            <div className="my-[5rem] w-full md:w-[48.5%] md:my-0">
              <h4 className="mb-[1rem] text-[1.8rem] tracking-[-1.5px] xl:font-normal xl:tracking-[-0.5px] xl:text-[2.1rem] 3xl:text-[3.2rem]">
                Featured In
              </h4>
              <div className="flex flex-wrap justify-between">
                {featured.map((data, index) => (
                  <SliderItem data={data} key={index} />
                ))}
              </div>
            </div>
            <div className=" w-full md:w-[48.5%] ">
              <h4 className="mb-[1rem] text-[1.8rem] tracking-[-1.5px] xl:font-normal xl:tracking-[-0.5px] xl:text-[2.1rem] 3xl:text-[3.2rem]">
                Awards Won
              </h4>
              <div className="flex flex-wrap justify-between">
                {awards.map((data, index) => (
                  <SliderItem data={data} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* For Mobile */}
        <div className="pl-[2rem] sm:hidden">
          <div className="mt-[3rem]">
            <h4 className="mb-[1.8rem] text-[1.8rem] tracking-[-1.5px]">
              Featured In
            </h4>
            <div className="team-founder-slider [&_.slick-track]:flex [&_.slick-slide]:h-[inherit] ">
              <Slider {...settings}>
                {featured.map((data, index) => (
                  <SliderItem data={data} key={index} />
                ))}
              </Slider>
            </div>
          </div>
          <div className="mt-[3rem]">
            <h4 className="mb-[1.8rem] text-[1.8rem] tracking-[-1.5px]">
              Awards Won
            </h4>
            <div className="team-founder-slider [&_.slick-track]:flex [&_.slick-slide]:h-[inherit]">
              <Slider {...settings}>
                {awards.map((data, index) => (
                  <SliderItem data={data} key={index} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
