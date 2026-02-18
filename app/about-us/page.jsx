import React from "react";

import BannerSection from "../../Components/AboutUs/BannerSection/BannerSection";
import MissionSection from "../../Components/AboutUs/MissionSection/MissionSection";
import UspSection from "../../Components/AboutUs/UspSection/UspSection";
import ServiceCenter from "../../Components/AboutUs/ServiceCenter/ServiceCenter";
import VisionSection from "../../Components/AboutUs/VisionSection/VisionSection";
import TeamSection from "../../Components/AboutUs/TeamSection/TeamSection";
import OurShowrooms from "../../Components/CommonComponents/OurShowrooms/OurShowrooms";

export const generateMetadata = () => {
  return {
    title: "About BBT",
    description: "Best used luxury car dealers India",
    isPageHeader: true,
  };
};

const AboutUs = () => {
  return (
    <>
      <BannerSection />
      <MissionSection />
      <UspSection />
      <OurShowrooms />
      <ServiceCenter />
      <VisionSection />
      <TeamSection />
    </>
  );
};

export default AboutUs;
