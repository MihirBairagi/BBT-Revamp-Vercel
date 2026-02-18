import Link from "next/link";
import React from "react";

const ourShowroom = {
  url: "/showrooms",
  title: "Our Showrooms",
  thumbnail: "/images/workshop/showroom-bg.webp",
};
const ourTeam = {
  url: "/team",
  title: "Our Team",
  thumbnail: "/images/workshop/team-bg.webp",
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
      <h5 className="text-white w-full absolute bottom-[2rem] left-0 text-center md:text-left md:bottom-14 md:left-14 xl:text-[2.2rem] 1xl:text-[2.5rem] 2xl:text-4.5xl 3xl:text-6xl 3xl:bottom-24 3xl:left-24">
        {data?.title ? data.title : "BBT World"}
      </h5>
      <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center p-1 absolute top-[1.5rem] right-[1.5rem] md:top-12 md:right-12 xl:w-[4.3rem] xl:h-[4.3rem] 1xl:w-[5rem] 1xl:h-[5rem] 3xl:w-[6.7rem] 3xl:h-[6.7rem] 3xl:top-16 3xl:right-16 group-hover:bg-black transition-all duration-500 ease-in">
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

const AboutUs = () => {
  return (
    <section className="bg-[#F4F4F1] py-[5rem] sm:py-[8rem] md:pb-[12rem] lg:pb-[15rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-[48%] md:w-[28.5%] order-2 md:order-1">
              <FeaturedItem data={ourShowroom} />
            </div>
            <div className="w-full md:w-[32%] text-center order-1 md:order-2">
              <div className="max-w-[10rem] xl:max-w-[13rem] 1xl:max-w-[15rem] 2xl:max-w-[16rem] 3xl:max-w-[20rem] mx-auto">
                <img
                  src="/images/workshop/15-years-bond.webp"
                  alt="Icon"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h2 className="font-light [&>b]:font-medium 3xl:text-[4.5rem] tracking-tighter capitalize my-[2rem]">
                Know More <b>About Us</b>
              </h2>
              <p className="font-[300] text-[1.2rem] leading-[1.5] mb-[3rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] [&>b]:font-[500] 3xl:mb-[4rem]">
                BBT started in 2009 as a benchmark model for the Pre-Used, or
                how we prefer to see it as, Pre-Loved Car Brand. The mission was
                simple, direct and drove effect - delivering a new dimension of
                luxury while standardising & raising platforms for the used car
                market in India.
              </p>
              <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="hidden xl:inline-block object-contain  invert xl:w-[8.5rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem]"
              />
            </div>
            <div className="w-[48%] md:w-[28.5%] order-3">
              <FeaturedItem data={ourTeam} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
