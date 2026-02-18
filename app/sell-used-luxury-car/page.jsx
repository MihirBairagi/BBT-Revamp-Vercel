"use client";
import React, { useEffect, useState } from "react";

import BannerSection from "../../Components/SellYourCar/BannerSection/BannerSection";
import HowToSell from "../../Components/SellYourCar/HowToSell/HowToSell";
import FloatingForm from "../../Components/SellYourCar/FloatingForm/FloatingForm";
import ProcessSection from "../../Components/SellYourCar/ProcessSection/ProcessSection";
import PresenceSection from "../../Components/SellYourCar/PresenceSection/PresenceSection";
import BenefitsSection from "../../Components/SellYourCar/BenefitsSection/BenefitsSection";
import Prerequisites from "../../Components/SellYourCar/Prerequisites/Prerequisites";
import CarSelection from "../../Components/SellYourCar/CarSelection/CarSelection";
import BrandListing from "../../Components/SellYourCar/BrandListing/BrandListing";
import FaqSection from "../../Components/SellYourCar/FaqSection/FaqSection";
import InfoWithTwoCard from "../../Components/CommonComponents/InfoWithTwoCard/InfoWithTwoCard";

const InfoWithTwoCardData = {
  leftCardData: {
    url: "/showrooms",
    title: "Our Showrooms",
    thumbnail: "/images/sell-your-car/cta-img-1.webp",
  },
  rightCardData: {
    url: "/team",
    title: "Our Team",
    thumbnail: "/images/sell-your-car/cta-img-2.webp",
  },
  title: "BBT Custom Car <b>Detailing and Services</b>",
  description:
    "Your car isn't just a machine, it's your trusty steed, your partner in crime, and your ticket to endless adventures. And guess what? We totally get it.",
  bg: "#F4F4F1",
};

const SellYourCar = () => {
  const [showForm, setShowForm] = useState(false);
  const [forceHide, setForceHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("afterInsBanner");
      const footer = document.getElementById("footer");

      if (
        secondSection &&
        footer &&
        secondSection.getBoundingClientRect().top <= 0 &&
        footer.getBoundingClientRect().top > window.innerHeight
      ) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="sell-car-page">
      <BannerSection />
      <div id="afterInsBanner">
        <HowToSell />
        <ProcessSection />
        <PresenceSection />
        <BenefitsSection />
        <Prerequisites />
        <CarSelection />
        <BrandListing />
        <FaqSection />
        <InfoWithTwoCard data={InfoWithTwoCardData} />
      </div>
      {!forceHide && (
        <div
          className={`z-[20] fixed  left-0 w-full transition-all duration-500 ease-in-out ${
            showForm
              ? "bottom-[5rem] show-from-bottom opacity-[1] hidden xl:block"
              : "opacity-[0] bottom-[100rem]"
          }`}
        >
          <FloatingForm setForceHide={setForceHide} />
        </div>
      )}
    </div>
  );
};

export default SellYourCar;
