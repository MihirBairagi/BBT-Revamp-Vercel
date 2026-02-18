import React from "react";

import EmiCalculator from "../../Components/EmiCalculator/EmiCalculator";
import RecentUploads from "../../Components/CommonComponents/RecentUploads/RecentUploads";
import InfoWithTwoCard from "../../Components/CommonComponents/InfoWithTwoCard/InfoWithTwoCard";

const InfoWithTwoCardData = {
  leftCardData: {
    url: "/sell-used-luxury-car",
    title: "Sell Your Car",
    thumbnail: "/images/emi-calculator/sell-your-car.webp",
  },
  rightCardData: {
    url: "/showrooms",
    title: "Our Showrooms",
    thumbnail: "/images/emi-calculator/car-showroom.webp",
  },
  title: "From The <br/> <b>BBT World</b>",
  description:
    "Get your dream luxury car in 4 easy steps at Big <br/> Boy Toyz, India's trusted used car portal.",
  bg: "#fff",
};

const page = () => {
  return (
    <>

      <EmiCalculator />
      <RecentUploads bgColor="#fafaf8" />
      <InfoWithTwoCard data={InfoWithTwoCardData} />
    </>
  );
};

export default page;
