"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const reqList = [
  {
    title: "Communication Skills",
    description:
      "Being able to communicate effectively is perhaps the most important of all life skills. It is what enables us to pass information to other people, and to understand what is said to us.",
  },
  {
    title: "Passion For Car",
    description:
      "I once read that when a car enthusiast explains their love of cars to a “normal” person, it sounds the same as someone who really loved washing machines explaining their passion.",
  },
  {
    title: "Presentation Skills",
    description:
      "Confused about how to 'Dress for Success'? If you are a job seeker or a promotion seeker, knowing how to dress professionally and avoid image blunders at work, can provide the competitive edge you are looking for.",
  },
  {
    title: "Negotiation Skills",
    description:
      "Negotiation is a type of discussion used to settle disputes and reach agreements between two or more parties. Generally, a negotiation results in a compromise where each party makes a concession for the benefit of everyone involved.",
  },
  {
    title: "BBTude",
    description:
      "It is the attitude to never give up! Not everyone born on Earth is successful. Success comes to those who pursue their goal with perseverance, purpose and dedication.",
  },
];

const UspItem = ({ usp, count }) => {
  return (
    <div className="pr-[2rem] h-full sm:pr-0">
      <div className="bg-[#131313] text-white py-[2.2rem] px-[1.8rem] h-full xl:bg-[#212121] xl:rounded-[1rem] xl:pb-[4rem] xl:px-[3rem] 1xl:pb-[6rem] 2xl:px-[3.3rem] 3xl:pt-[3.5rem] 3xl:pr-[3.5rem] 3xl:rounded-[2rem] 3xl:pl-[4.3rem]">
        <div className="count text-[5.5rem] font-medium text-[#343434] text-right leading-[1] xl:mr-[-1rem] xl:text-[6rem] 1xl:text-[7rem] 3xl:text-[9rem]">
          {count && count < 10 ? `0${count}` : count}
        </div>
        <div>
          <h4 className="text-[1.6rem] mt-[4rem] mb-[1.5rem] xl:mt-[2.1rem] xl:mb-[1.2rem] 1xl:text-[1.75rem] 2xl:text-[1.85rem] 3xl:text-[2.4rem] 3xl:mt-[2.5rem]">
            {usp.title}
          </h4>
          <p className="text-[1rem] leading-[1.6] font-light md:text-[1.3rem] xl:text-[1.1rem] 1xl:text-[1.2rem] 1xl:pr-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] 2xl:pr-[0.5rem] 2xl:leading-[1.4]">
            {usp.description}
          </p>
        </div>
      </div>
    </div>
  );
};

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`flex justify-center items-center w-[3.7rem] h-[3.7rem] rounded-[50%] border border-[#4C4C4C] absolute bottom-[-8.8rem] right-[2rem]`}
      onClick={onClick}
    >
      <img
        src="/images/bbt-squad/squad-slider-next.webp"
        alt="Arrow icon"
        className="object-contain"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`flex justify-center items-center w-[3.7rem] h-[3.7rem] rounded-[50%] border border-[#4C4C4C] absolute bottom-[-8.8rem] right-[6.5rem]`}
      onClick={onClick}
    >
      <img
        src="/images/bbt-squad/squad-slider-prev.webp"
        alt="Arrow icon"
        className="object-contain"
      />
    </div>
  );
}

const Requirements = () => {
  const [progressWidth, setProgressWidth] = useState(25);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "17%",
    afterChange: (index) => {
      setProgressWidth((100 / reqList.length) * (index + 1));
    },
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black pt-[7rem] pb-[6rem] mt-[-1px] sm:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[17rem]">
      <div className="max-1920">
        <div
          className="sm:w-[91%] sm:mx-auto xl:w-[82%]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="text-white px-[2rem] sm:px-0 lg:pr-[3rem] lg:w-[42%]">
            <h2 className="font-light [&>b]:font-normal leading-[1.2] tracking-[-0.2rem] xl:text-[3.5rem] 1xl:text-[4.2rem] 1xl:tracking-[-0.1rem] 3xl:text-[5.8rem]">
              What it takes to <br /> be <b>at BBT</b>
            </h2>
            <p className="font-light text-[1.2rem] mt-[1.2rem] pr-[1rem] max-w-[29.1rem] md:max-w-[30rem] xl:max-w-[36rem] xl:text-[1.1rem] xl:leading-[1.8] 1xl:text-[1.2rem] 1xl:max-w-[41rem] 1xl:mt-[2.5rem] 2xl:max-w-[44rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] 3xl:max-w-[53rem] 3xl:mt-[3rem]">
              BBT believes that its future depends on its people who are capable
              enough to generate new ideas & plans that will help in taking the
              business to a new height altogether.
            </p>
            <div className="hidden lg:block mt-[4rem] 2xl:mt-[4.5rem] 3xl:mt-[6rem]">
              <img
                src="/images/bbt-squad/down-arrow-white.webp"
                alt="Arrow"
                className="object-contain h-auto w-[3rem] xl:w-[4rem] 2xl:w-[4.5rem] 3xl:w-[5.29rem]"
                width="53"
                height="84"
              />
            </div>
          </div>
          <div className="hidden sm:block mt-[4rem] lg:mt-[-26rem] lg:w-[90%] lg:ml-auto xl:w-[82%] 1xl:mt-[-29rem] 3xl:mt-[-38rem]">
            <div className="grid grid-cols-3 auto-rows-fr gap-[2rem] xl:gap-[3.5rem] 3xl:gap-[4.5rem]">
              <div className="hidden lg:block"></div>
              {reqList.map((usp, index) => (
                <UspItem key={index} usp={usp} count={index + 1} />
              ))}
            </div>
          </div>

          {/* Slider */}
          <div className="pl-[2rem] mt-[5rem] sm:hidden">
            <Slider
              {...settings}
              className="squad-requirements-slider [&_.slick-track]:flex [&_.slick-slide]:h-[inherit]"
            >
              {reqList.map((usp, index) => (
                <UspItem key={index} usp={usp} count={index + 1} />
              ))}
            </Slider>
          </div>

          <div className="container sm:hidden">
            <div className="flex flex-wrap items-center justify-between mt-[7rem]">
              <div className="flex-1">
                <div
                  className="progress"
                  style={{
                    backgroundColor: "#4C4C4C",
                    height: "2px",
                  }}
                >
                  <div
                    style={{
                      width: `${progressWidth}%`,
                      backgroundColor: "#FFFFFF",
                      height: "100%",
                    }}
                    className="progressFill"
                  ></div>
                </div>
              </div>
              <div className="w-[10rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
