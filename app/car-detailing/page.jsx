import React from "react";

import AboutSection from "../../Components/CarDetailing/AboutSection/AboutSection";
import WhyChooseUs from "../../Components/CarDetailing/WhyChooseUs/WhyChooseUs";
import OurProcess from "../../Components/CarDetailing/OurProcess/OurProcess";
import ChooseWhatsRight from "../../Components/CarDetailing/ChooseWhatsRight/ChooseWhatsRight";
import ComparisonChart from "../../Components/CarDetailing/ComparisonChart/ComparisonChart";
import SneakPeek from "../../Components/CarDetailing/SneakPeek/SneakPeek";
import ModifyRide from "../../Components/CarDetailing/ModifyRide/ModifyRide";
import FormSection from "../../Components/CarDetailing/FormSection/FormSection";
import ServiceListing from "../../Components/CarDetailing/ServiceListing/ServiceListing";

import PageBanner from "../../Components/CommonComponents/PageBanner/PageBanner";

const bannerData = {
  title: `We're As Crazy <br /> <b> About  Cars As <br /> You Are! </b>`,
  description: `If your heart races at the sight of a sleek chassis or the purr <br /> of a finely-tuned  engine, then buckle up, because you're in <br /> for a wild ride!`,
  breadcrumb: "Car Detailing",
  bannerImage: "/images/car-detailing/banner-desktop.webp",
  bannerImageMobile: "/images/car-detailing/banner-desktop.webp",
};

const CarDetailing = () => {
  return (
    <>
      <PageBanner data={bannerData} />
      <AboutSection />
      <WhyChooseUs />
      <OurProcess />
      <ChooseWhatsRight />
      <ComparisonChart />
      {/* <SneakPeek /> */}
      <ModifyRide />
      <FormSection />
      <div className="hidden">
        <ServiceListing />
      </div>
    </>
  );
};

export default CarDetailing;
