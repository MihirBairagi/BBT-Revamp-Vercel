import React from "react";

import BannerSection from "../../Components/CheckPoints/BannerSection/BannerSection";
import CheckPointsSection from "../../Components/CheckPoints/CheckPointsSection/CheckPointsSection";
import SellYourCar from "../../Components/CheckPoints/SellYourCar/SellYourCar";
import QuickContact from "../../Components/CheckPoints/QuickContact/QuickContact";

const page = () => {
  return (
    <>
      <BannerSection />
      <CheckPointsSection />
      <div className="xl:hidden">
        <QuickContact />
      </div>
      <SellYourCar />
    </>
  );
};

export default page;
