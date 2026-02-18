import React from "react";

const BannerSection = ({ guideData }) => {
  // Fallback data if no guide data is provided
  const defaultData = {
    title: "Do You Know What Torque Vectoring Is?",
    thumbnail: "/images/guide-detail/guide-detail-banner.webp"
  };

  const guide = guideData || defaultData;

  return (
    <section className="bg-white pt-[6rem] lg:pt-[8rem] xl:pt-[10rem] 3xl:pt-[15rem]">
      <div className="max-1920">
        <div className="container">
          <h1 className="font-[200] [&>b]:font-[400] text-[3rem] [&>br]:hidden md:[&>br]:block text-center leading-[1.1] tracking-[-2px] xl:text-[5rem] xl:tracking-[-3px] 1xl:text-[5.5rem] 2xl:text-[5.8rem] 3xl:text-[7.5rem] 3xl:tracking-[-5px]">
            {guide.title || defaultData.title}
          </h1>
          <div className="rounded-[1.5rem] overflow-hidden mt-[4rem] xl:mt-[6rem] lg:rounded-[3rem] 3xl:rounded-[5rem]">
            <img 
              src={guide.thumbnail || defaultData.thumbnail} 
              alt={guide.title || "Guide Banner"} 
              className="w-100 object-cover h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
