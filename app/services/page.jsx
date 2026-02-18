import React from "react";

import UspSection from "../../Components/Services/UspSection/UspSection";
import AboutSection from "../../Components/Services/AboutSection/AboutSection";
import OurProcess from "../../Components/Services/OurProcess/OurProcess";
import WorkshopGallery from "../../Components/Services/WorkshopGallery/WorkshopGallery";
import ServiceTypes from "../../Components/Services/ServiceTypes/ServiceTypes";
import Partnership from "../../Components/Services/Partnership/Partnership";
import PopularBrands from "../../Components/Services/PopularBrands/PopularBrands";
import GlimpseSection from "../../Components/Services/GlimpseSection/GlimpseSection";
import ContactSection from "../../Components/Services/ContactSection/ContactSection";
import InsuredBanner from "../../Components/Services/InsuredBanner/InsuredBanner";
import BrandServices from "../../Components/Services/BrandServices/BrandServices";
import PageBanner from "../../Components/CommonComponents/PageBanner/PageBanner";

const bannerData = {
  title: `Top Luxury <b> Cars <br /> Services In India. </b>`,
  description: `If your heart races at the sight of a sleek chassis or the purr of <br /> a finely-tuned engine, then buckle up, because you're in for a <br /> wild ride!`,
  breadcrumb: "Car Services",
  bannerImage: "/images/services/banner-desktop.webp",
  bannerImageMobile: "/images/services/banner-desktop.webp",
};

const Services = () => {
  return (
    <>
      <PageBanner data={bannerData} />
      <UspSection />
      <AboutSection />
      <OurProcess />
      <WorkshopGallery />
      <ServiceTypes />
      <Partnership />
      <PopularBrands />
      <GlimpseSection />
      <ContactSection />
      <InsuredBanner />
      <div className="hidden">
        <BrandServices />
      </div>
    </>
  );
};

export default Services;
