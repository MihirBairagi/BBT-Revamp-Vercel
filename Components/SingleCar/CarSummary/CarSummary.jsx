"use client";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CarSummary.module.css";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 1500,
  swipeToSlide: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: "9%",
      },
    },
  ],
};

const CarSummaryCard = ({ data }) => {
  return (
    <div className="py-8 rounded-2xl border border-[#CCCCCC] px-5 sm:border-0 xl:py-[2rem] 3xl:py-[3rem] h-full">
      <img
        src={data.icon}
        width="61"
        height="50"
        alt="Icon"
        className="object-contain h-12 xl:h-13 1xl:w-20 3xl:w-28 3xl:h-16"
      />
      <p className="text-[1.2rem] text-[#989898] my-5 sm:text-lg xl:mt-14 1xl:mt-[2rem] 1xl:text-xl 1xl:mb-7 2xl:text-1xl 3xl:text-3xl">
        {data.title}
      </p>
      <p
        className="text-[1.4rem] font-normal sm:text-lg xl:text-1.6xl xl:leading-normal 1xl:text-2xl 2xl:text-3xl 2xl:leading-1.4 3xl:text-4xl 3xl:leading-1.6"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  );
};

const CarSummary = ({
  description,
  silentFeatures,
  ownerQuote,
  exhaustNote,
  attributes,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const generateCardData = () => {
    const cardData = [];

    if (attributes && attributes.length > 0) {
      const icons = [
        "/images/detail-page/detail-summery-usp-1.webp",
        "/images/detail-page/detail-summery-usp-2.webp",
        "/images/detail-page/detail-summery-usp-3.webp",
        "/images/detail-page/detail-summery-usp-4.webp",
        "/images/detail-page/detail-summery-usp-5.webp",
        "/images/detail-page/detail-summery-usp-6.webp",
        "/images/detail-page/detail-summery-usp-7.webp",
        "/images/detail-page/detail-summery-usp-8.webp",
      ];
      const getAttributeId = (attr) => {
        const raw = attr?.id_ ?? attr?.id ?? attr?.attid ?? "";
        return String(raw);
      };

      const orderedAttributes = Array.isArray(attributes) ? [...attributes] : [];
      const manufacturingIdx = orderedAttributes.findIndex(
        (attr) => getAttributeId(attr) === "15"
      );
      if (manufacturingIdx > 0) {
        const [manufacturingAttr] = orderedAttributes.splice(manufacturingIdx, 1);
        orderedAttributes.unshift(manufacturingAttr);
      }

      orderedAttributes.forEach((attr, index) => {
        if (attr.value) {
          cardData.push({
            icon: attr.icon || icons[index % icons.length],
            title: attr.attname,
            description: attr.value,
          });
        }
      });
    } else {
      // Add description card
      if (description) {
        cardData.push({
          icon: "/images/detail-page/detail-summery-usp-1.webp",
          title: "Description",
          description:
            description.length > 200
              ? description.substring(0, 200) + "..."
              : description,
        });
      }

      // Add features cards
      if (silentFeatures && silentFeatures.length > 0) {
        // Group features in sets of 3 for better display
        const featureGroups = [];
        for (let i = 0; i < silentFeatures.length; i += 3) {
          featureGroups.push(silentFeatures.slice(i, i + 3));
        }

        featureGroups.forEach((group, groupIndex) => {
          cardData.push({
            icon: `/images/detail-page/detail-summery-usp-${
              groupIndex + 2
            }.webp`,
            title: `Key Features ${groupIndex + 1}`,
            description: group.map((feature) => `✓ ${feature}`).join("<br>"),
          });
        });
      }

      // Add owner quote card
      if (ownerQuote) {
        cardData.push({
          icon: "/images/detail-page/detail-summery-usp-7.webp",
          title: "Owner's Note",
          description: `"${
            ownerQuote.length > 150
              ? ownerQuote.substring(0, 150) + "..."
              : ownerQuote
          }"`,
        });
      }

      // Add exhaust note card
      if (exhaustNote) {
        cardData.push({
          icon: "/images/detail-page/detail-summery-usp-8.webp",
          title: "Exhaust Note",
          description:
            exhaustNote.length > 150
              ? exhaustNote.substring(0, 150) + "..."
              : exhaustNote,
        });
      }
    }

    return cardData;
  };

  const cardData = generateCardData();

  if (cardData.length === 0) {
    return null;
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      className="lg:pt-16 lg:pb-16 xl:pt-[5rem] xl:pb-[5rem] 2xl:pt-[6rem] 3xl:pt-[8rem]"
    >
      <div className="container">
        <h6
          className={`font-medium pt-10 mt-16 border-t border-gray-300 mb-8 lg:border-none lg:relative lg:mb-0 lg:pt-0 titleWithLine 1xl:tracking-tighter text-[2.5rem] md:text-[3rem] xl:text-4xl 1xl:text-4.5xl 3xl:text-5.5xl`}
        >
          <span className="lg:bg-white lg:pr-5 relative z-10 3xl:pr-16">
            Car Summary
          </span>
        </h6>
      </div>

      {/* <div className="block sm:hidden mb-[5rem] sm:mb-0">
        <Slider {...settings} className="details-summary-slider pl-8">
          {cardData.map((data, index) => (
            <CarSummaryCard data={data} key={index} />
          ))}
        </Slider>
      </div> */}
      <div className="container block lg:mt-[5rem] xl:mt-[7rem] 3xl:mt-[9rem]">
        <ul className="flex flex-wrap mx-[-1rem] lg:mx-0">
          {cardData.map((data, index) => (
            <li
              key={index}
              className={`w-[50%] sm:w-1/3 mb-8 px-[1rem] lg:mb-16 lg:w-1/4 xl:px-12 xl:mb-20 1xl:px-16 3xl:px-24 3xl:mb-24 ${styles.carSummeryItem}`}
            >
              <CarSummaryCard data={data} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarSummary;
