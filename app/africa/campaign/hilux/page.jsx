import React from "react";
import './custom.css'
import BannerSection from "../../../../Components/Hilux/BannerSection/BannerSection";
import TopMarquee from "../../../../Components/Hilux/TopMarquee/TopMarquee";
import IntroSection from "../../../../Components/Hilux/IntroSection/IntroSection";
import WhyUs from "../../../../Components/Hilux/WhyUs/WhyUs";
import ReliabilitySection from "../../../../Components/Hilux/ReliabilitySection/ReliabilitySection";
import AboutSection from "../../../../Components/Hilux/AboutSection/AboutSection";
import BottomBanner from "../../../../Components/Hilux/BottomBanner/BottomBanner";
import PageFooter from "../../../../Components/Hilux/PageFooter/PageFooter";
import "aos/dist/aos.css";

const page = () => {
  return (
    <>
      <TopMarquee />
      <BannerSection />
      <IntroSection />
      <WhyUs />
      <ReliabilitySection />
      <AboutSection />
      <BottomBanner />
      <PageFooter />
    </>
  );
};

export default page;
