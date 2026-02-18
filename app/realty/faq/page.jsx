import React from "react";
import FaqMain from "../../../Components/Realty/Faq/FaqMain/FaqMain";
import PageBannerSmall from "../../../Components/Realty/CommonComponents/PageBannerSmall/PageBannerSmall";

const bannerData = {
  title: `Frequently <br /> <b>Asked questions</b>`,
  description: `Hello, How we can help`,
  breadcrumb: "FAQ",
  bannerImage: "/realty/images/faq-banner.webp",
  bannerImageMobile: "/realty/images/faq-mob-banner.webp",
};

const Faqs = () => {
  return (
    <>
      <PageBannerSmall data={bannerData} />
      <FaqMain />
    </>
  );
};

export default Faqs;

