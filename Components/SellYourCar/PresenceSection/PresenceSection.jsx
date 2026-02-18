import React from "react";
import Link from "next/link";

const PresenceSection = () => {
  return (
    <section className="bg-[#161616] text-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-wrap justify-between">
            <div className="text-center text-white lg:text-left w-full lg:w-[30%] xl:w-[28%]">
              <p className="text-[1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem] mb-[1rem]">
                Presence
              </p>
              <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize sm:[&>br]:hidden">
                We have a <br /> <b>presence in this</b>
              </h2>
              <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
                Our customization process begins with you specifying your
                requirements.
              </p>
              <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="inline-block object-contain mt-[3rem] w-[6rem] xl:w-[8.5rem] xl:mt-[5rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem] 3xl:mt-[7rem]"
              />

              <div className="lg:hidden mt-[5rem] md:max-w-[640px] md:mx-auto">
                <img
                  src="/images/sell-your-car/presence-map.webp"
                  alt=""
                  className="block w-full h-auto object-contain"
                />
              </div>

              <div className="mt-[5rem] xl:mt-[8rem] 3xl:mt-[10rem]">
                <Link
                  href="/showrooms"
                  className="w-max mx-auto h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-white text-black px-[3rem] py-[1rem] rounded-[3rem] xl:px-[3.5rem] xl:h-[5rem] xl:text-[1.2rem] xl:font-medium 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[7.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[5rem] hover:bg-[#f1f1f1] transition-all duration-500 ease-in-out lg:ml-0"
                >
                  View Our Showrooms
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:w-[65%] xl:w-[66%]">
              <img
                src="/images/sell-your-car/presence-map.webp"
                alt=""
                className="block w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;
