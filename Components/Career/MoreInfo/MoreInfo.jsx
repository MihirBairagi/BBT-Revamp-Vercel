import Link from "next/link";
import React from "react";

const contact = {
  url: "/wallpapers",
  title: "Wallpapers",
  thumbnail: "/images/career/more-info-img-1.webp",
};
const careers = {
  url: "/guides",
  title: "Auto Guide",
  thumbnail: "/images/career/more-info-img-2.webp",
};
const Showrooms = {
  url: "/collection",
  title: "Browse Cars",
  thumbnail: "/images/career/more-info-img-3.webp",
};

const FeaturedItem = ({ data }) => {
  return (
    <Link
      href={data?.url ? data.url : "#"}
      className="relative block group common-car-item rounded-[2rem] lg:rounded-[3rem] xl:my-5 1xl:rounded-[4rem] 2xl:rounded-[5rem] overflow-hidden"
    >
      <div>
        <img
          src={
            data?.thumbnail ? data.thumbnail : "/images/bbt-world-item-1.webp"
          }
          alt={data?.title ? data.title : "BBT World"}
          width="450"
          height="587"
          className="block w-full h-full group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full px-[3rem] py-[3rem] sm:py-[3rem] sm:px-[3rem] xl:px-[3rem] 1xl:py-[4rem] 2xl:pl-[5rem] flex flex-col justify-end 3xl:pb-[7rem] 3xl:pl-[5rem]">
        <h5 className="text-white w-full font-normal text-left xl:text-[2.2rem] 1xl:text-[2.5rem] 2xl:text-4.5xl 3xl:text-6xl 3xl:bottom-24 3xl:left-24">
          {data.title}
        </h5>
      </div>
      <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center p-1 absolute top-[3rem] right-[3rem] md:top-12 md:right-12 xl:w-[4.3rem] xl:h-[4.3rem] 1xl:w-[5rem] 1xl:h-[5rem] 3xl:w-[6.7rem] 3xl:h-[6.7rem] 3xl:top-16 3xl:right-16 group-hover:bg-black transition-all duration-500 ease-in">
        <img
          src="/images/showroom-location-arrow.webp"
          className="object-contain w-4 xl:w-[1.5rem] 2xl:w-6 3xl:w-[2rem] group-hover:invert transition-all duration-500 ease-in"
          width="20"
          height="20"
          alt="Arrow Icon"
        />
      </span>
    </Link>
  );
};

const MoreInfo = () => {
  return (
    <section className="bg-[#F4F4F1] py-[5rem] sm:py-[8rem] md:pb-[12rem] lg:pb-[15rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full sm:w-[47%] md:w-[28.5%] order-2 md:order-1 mt-[3rem] md:translate-y-[-9.5rem] xl:translate-y-[-8.5rem] 3xl:translate-y-[-11rem]">
              <FeaturedItem data={contact} />
            </div>
            <div className="w-full md:w-[28.5%] text-center order-1 md:order-2">
              <div className="xl:px-[2rem] 3xl:px-[4rem]">
              <h2 className="font-light [&>b]:font-medium md:text-[2.5rem] xl:text-[3rem] xl:leading-[1.2] xl:mb-[1rem] 1xl:text-[3.4rem] 2xl:text-[3.7rem] 3xl:text-[4.5rem] tracking-tighter capitalize my-[2rem]">
                Looking for <b>Some <br /> More Info</b>
              </h2>
              <p className="font-[300] text-[1.2rem] leading-[1.5] mb-[3rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] [&>b]:font-[500] 3xl:mb-[4rem]">
                BBT started in 2009 as a benchmark model for the Pre-Used, or
                how we prefer to see it as, Pre-Loved Car Brand.
              </p>
              </div>
              <div className="sm:w-[47%] md:w-full sm:mx-auto">
                <FeaturedItem data={careers} />
              </div>
            </div>
            <div className="w-full sm:w-[47%] md:w-[28.5%] order-3 mt-[3rem] md:translate-y-[-9.5rem] xl:translate-y-[-8.5rem] 3xl:translate-y-[-11rem]">
              <FeaturedItem data={Showrooms} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
