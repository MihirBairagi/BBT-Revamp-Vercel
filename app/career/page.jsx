import React from "react";

import AboutSection from "../../Components/Career/AboutSection/AboutSection";
import ParksSection from "../../Components/Career/ParksSection/ParksSection";
import PlatformSection from "../../Components/Career/PlatformSection/PlatformSection";
import OpeningSection from "../../Components/Career/OpeningSection/OpeningSection";
import MoreInfo from "../../Components/Career/MoreInfo/MoreInfo";

import PageBanner from "../../Components/CommonComponents/PageBanner/PageBanner";

const bannerData = {
  title: `Join Our  <br /> <b>High-Performance Team</b>`,
  description: `We believe true car enthusiasts will always have a place at BBT. Work with passionate professionals, <br/> engage with world-class supercars, and elevate your career. If you love cars and are driven by passion, <br/> join us and help accelerate our business to new heights.`,
  breadcrumb: "Career",
  bannerImage: "/images/career/career-banner-desktop.webp",
  bannerImageMobile: "/images/career/career-banner-desktop.webp",
};

const Career = () => {
  return (
    <>
      <PageBanner data={bannerData} />
      <AboutSection />
      <ParksSection />
      <PlatformSection />
      <OpeningSection />
      <MoreInfo />
    </>
  );
};

export default Career;
