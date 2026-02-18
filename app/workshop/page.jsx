import React from "react";
import BannerSection from "../../Components/Workshop/BannerSection/BannerSection";
import ExcellenceSection from "../../Components/Workshop/ExcellenceSection/ExcellenceSection";
import CraftingSection from "../../Components/Workshop/CraftingSection/CraftingSection";
import ServicesSection from "../../Components/Workshop/ServicesSection/ServicesSection";
import ArtEquipment from "../../Components/Workshop/ArtEquipment/ArtEquipment";
import Testimonials from "../../Components/Workshop/Testimonials/Testimonials";
import LocateUs from "../../Components/Workshop/LocateUs/LocateUs";
import AboutUs from "../../Components/Workshop/AboutUs/AboutUs";

const Workshop = () => {
  return (
    <>
      <BannerSection />
      <ExcellenceSection />
      <CraftingSection />
      <ServicesSection />
      <ArtEquipment />
      <Testimonials />
      <LocateUs />
      <AboutUs />
    </>
  );
};

export default Workshop;
