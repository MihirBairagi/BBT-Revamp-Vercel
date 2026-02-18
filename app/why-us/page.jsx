import React from "react";

import TopDealer from "../../Components/WhyUs/TopDealer/TopDealer";
import TrustedClients from "../../Components/WhyUs/TrustedClients/TrustedClients";
import SellYourCar from "../../Components/WhyUs/SellYourCar/SellYourCar";
import OurPresence from "../../Components/WhyUs/OurPresence/OurPresence";
import MeetTheTeam from "../../Components/WhyUs/MeetTheTeam/MeetTheTeam";
import TestimonialSection from "../../Components/WhyUs/TestimonialSection/TestimonialSection";

import InfoWithTwoCard from "../../Components/CommonComponents/InfoWithTwoCard/InfoWithTwoCard";
import PageBanner from "../../Components/CommonComponents/PageBanner/PageBanner";

const bannerData = {
  title: `Why We're the <br /> <b>Best Choice</b>`,
  description: `From the finest German engineering to standout Italian designs, our <br /> collection of 24 exotic brands with 75 to 100 cars under one roof will <br /> ignite your passion and get your adrenaline pumping.`,
  breadcrumb: "Why Us",
  bannerImage: "/images/why-us/why-us-banner-desktop.webp",
  bannerImageMobile: "/images/why-us/why-us-banner-mob.webp",
};

const InfoWithTwoCardData = {
  leftCardData: {
    url: "/sell-used-luxury-car",
    title: "Sell Your Car",
    thumbnail: "/images/why-us/cta-card-1.webp",
  },
  rightCardData: {
    url: "/collection",
    title: "Buy Car",
    thumbnail: "/images/why-us/cta-card-2.webp",
  },
  title: "From The <br> <b>BBT World</b>",
  description:
    "Get your dream luxury car in 4 easy steps at Big <br> Boy Toyz, India's trusted used car portal.",
  bg: "#F4F4F1",
};

const WhyUs = () => {
  return (
    <>
      <PageBanner data={bannerData} />
      <TopDealer />
      <TrustedClients />
      <SellYourCar />
      <OurPresence />
      {/* <MeetTheTeam /> */}
      <TestimonialSection />
      <InfoWithTwoCard data={InfoWithTwoCardData} />
    </>
  );
};

export default WhyUs;
