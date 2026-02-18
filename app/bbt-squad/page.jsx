import React from "react";
import JoinUs from "../../Components/SquadPage/JoinUs/JoinUs";
import BenefitsSection from "../../Components/SquadPage/BenefitsSection/BenefitsSection";
import Requirements from "../../Components/SquadPage/Requirements/Requirements";
import FormSection from "../../Components/SquadPage/FormSection/FormSection";
import LifeStyle from "../../Components/SquadPage/Lifestyle/LifeStyle";
import CarrierBanner from "../../Components/SquadPage/CarrierBanner/CarrierBanner";
import PageBanner from "../../Components/CommonComponents/PageBanner/PageBanner";

const bannerData = {
  title:`The <b>BBT Squad</b> <br /> - Join Us`,
  description: ` BBT Squad is a new platform inviting car enthusiasts to pursue their passion <br /> for automobiles without compromising on their existing work areas.`,
  breadcrumb: "BBT Squad",
  bannerImage:"/images/bbt-squad/squad-banner-desktop.webp",
  bannerImageMobile:"/images/bbt-squad/squad-banner-mobile.webp"
}

const BbtSquad = () => {
  return (
    <>
      <PageBanner data={bannerData} />
      <JoinUs />
      <BenefitsSection />
      <Requirements />
      <FormSection />
      {/* <LifeStyle /> */}
      <CarrierBanner />
  
    </>
  );
};

export default BbtSquad;
