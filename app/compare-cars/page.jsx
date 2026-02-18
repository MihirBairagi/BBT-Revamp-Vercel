import React from "react";
import BannerSection from "../../Components/CompareCars/BannerSection/BannerSection";
import CompareSection from "../../Components/CompareCars/CompareSection/CompareSection";
import RecentUploads from "../../Components/CommonComponents/RecentUploads/RecentUploads";
import WhyWeExist from "../../Components/CompareCars/WhyWeExist/WhyWeExist";
import ExploreBBTWorld from "../../Components/CompareCars/ExploreBBTWorld/ExploreBBTWorld";

const CompareCars = () => {
  return (
    <>
      <BannerSection />
      <CompareSection />
      <RecentUploads bgColor="#F4F4F1" />
      <WhyWeExist />
      <ExploreBBTWorld />
    </>
  );
};

export default CompareCars;
