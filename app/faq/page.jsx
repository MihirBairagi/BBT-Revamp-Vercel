import React from "react";

import FaqMain from "../../Components/Faq/FaqMain/FaqMain";
import LatestAddition from "../../Components/Faq/LatesAddition/LatestAddition";
import MoreInfo from "../../Components/Faq/MoreInfo/MoreInfo";
import PageBannerSmall from "../../Components/CommonComponents/PageBannerSmall/PageBannerSmall";

const bannerData = {
  title:`Frequently <br /> <b>Asked questions</b>`,
  description: `  Hello, How we can help`,
  breadcrumb: "FAQ",
  bannerImage:"/images/faq/faq-banner.webp",
  bannerImageMobile:"/images/faq/faq-banner-mobile.webp"
}

const Faqs = () => {
  return (
    <>
   
      <PageBannerSmall data={bannerData} />
      <FaqMain />
      <LatestAddition />
      <MoreInfo />
  
    </>
  );
};

export default Faqs;
