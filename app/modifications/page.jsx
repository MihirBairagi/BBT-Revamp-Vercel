import React from "react";
import "aos/dist/aos.css";
import BannerSection from "../../Components/Modifications/BannerSection/BannerSection";
import ServicesSection from "../../Components/Modifications/ServicesSection/ServicesSection";
import ProcessSection from "../../Components/Modifications/ProcessSection/ProcessSection";
import OurPhilosophy from "../../Components/Modifications/OurPhilosophy/OurPhilosophy";
import PastProjects from "../../Components/Modifications/PastProjects/PastProjects";
import OurAssociates from "../../Components/Modifications/OurAssociates/OurAssociates";
import FormSection from "../../Components/Modifications/FormSection/FormSection";
import SecondaryBanner from "../../Components/CommonComponents/SecondaryBanner/SecondaryBanner";
import RecentUploads from "../../Components/CommonComponents/RecentUploads/RecentUploads";
import InfoWithTwoCard from "../../Components/CommonComponents/InfoWithTwoCard/InfoWithTwoCard";

const secondaryBanner = {
  mobileBanner: "/images/associates/about-bg-mobile.webp",
  desktopBanner: "/images/modifications/services-banner-desktop.webp",
  subtitle: "premium services",
  title:
    "Looking For Something Subtle <br/> <b>Explore Our Car Detailing <br/> Service</b>",
  description:
    "A budding entrepreneur, Mrs. Ritika Jatin Ahuja spearheads the Merchandising <br/> section at Big Boy Toyz. She has been an avid collector of miniature perfumes <br/> since childhood which she cultivated as a hobby and a passion",
  ctaLink: "/car-detailing",
  ctaText: "Explore",
};
const InfoWithTwoCardData = {
  leftCardData: {
    url: "/wallpapers",
    title: "BBT Wallpapers",
    thumbnail: "/images/modifications/bbt-world-1.webp",
  },
  rightCardData: {
    url: "/about-us",
    title: "About Big BoyToyz",
    thumbnail: "/images/modifications/bbt-world-2.webp",
  },
  title: "Explore The <b>BBT World</b>",
  description:
    "BBT started in 2009 as a benchmark model for the Pre-Used, or how we  prefer to see it as, Pre-Loved Car Brand. The mission was simple, direct  and drove effect - delivering a new dimension of luxury while  standardising & raising platforms for the used car market in India.",
    bg:'#fff'
};

const Modifications = () => {
  return (
    <>
      <BannerSection />
      <ServicesSection />
      <ProcessSection />
      {/* <OurPhilosophy /> */}
      <PastProjects />
      <OurAssociates />
      <FormSection />
      <SecondaryBanner data={secondaryBanner} />
      {/* <RecentUploads /> */}
      <InfoWithTwoCard data={InfoWithTwoCardData} />
    </>
  );
};

export default Modifications;
