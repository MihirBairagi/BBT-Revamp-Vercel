import Link from "next/link";
import React from "react";

const ArtEquipment = () => {
  return (
    <section className="bg-white py-[5rem] sm:py-[8rem] md:pb-[12rem] lg:pb-[15rem] xl:py-[12rem] 2xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light leading-[1.4] mt-[1rem] [&>br]:hidden text-center md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            State of the{" "}
            <b>
              {" "}
              art <br /> equipment
            </b>
          </h2>
          <div className="flex flex-wrap justify-between md:grid md:grid-cols-3 gap-[2rem] 3xl:gap-[3rem] mt-[1rem] 3xl:mt-[2rem]">
            <div className="w-[47%] md:w-[unset]">
              <div className="rounded-[1rem] overflow-hidden my-[2rem] 3xl:rounded-[1.5rem] 3xl:my-[3rem] group">
                <img
                  src="/images/workshop/art-equipment-1.webp"
                  alt="Gallery Image"
                  className="w-full object-cover h-auto group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="rounded-[1rem] overflow-hidden my-[2rem] 3xl:rounded-[1.5rem] 3xl:my-[3rem] group">
                <img
                  src="/images/workshop/art-equipment-2.webp"
                  alt="Gallery Image"
                  className="w-full object-cover h-auto group-hover:scale-110 transition-all duration-500"
                />
              </div>
            </div>
            <div className="md:pt-[2.5rem] w-full md:w-[unset] 3xl:pt-[5rem] order-3 md:order-2">
              <div className="rounded-[1rem] overflow-hidden md:my-[2rem] 3xl:rounded-[1.5rem] 3xl:my-[3rem] group">
                <img
                  src="/images/workshop/art-equipment-3.webp"
                  alt="Gallery Image"
                  className="w-full object-cover h-auto group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="rounded-[1rem] overflow-hidden my-[2rem] 3xl:rounded-[1.5rem] 3xl:my-[3rem] group">
                <img
                  src="/images/workshop/art-equipment-4.webp"
                  alt="Gallery Image"
                  className="w-full object-cover h-auto group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="xl:px-[2.5rem] 3xl:px-[4rem] text-center">
                <p className="font-[300] text-[1.2rem] leading-[1.5] mt-[2rem] py-[2rem] xl:py-[2.5rem] md:mt-0 lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 2xl:py-[3.5rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] [&>b]:font-[500] 3xl:py-[5rem]">
                  At each progression without a doubt Directly from the time you
                  enter the <b>paradise of extravagance vehicles,</b> rubberneck
                  at the most loved pick of the parcel, steer away the
                  difficulty runs and choke your pre cherished or new first
                  light adored outlandish home.
                </p>
                <div className="w-max min-w-[170px] xl:min-w-[200px] 3xl:min-w-[310px] mx-auto">
                  <Link
                    href="/contact-us"
                    className="bg-black w-full text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] px-[3rem] h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] transition-all duration-500 hover:bg-[#333]"
                  >
                    Book Visit
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-2 w-[47%] md:w-[unset] md:order-3">
              <div className="rounded-[1rem] overflow-hidden my-[2rem] 3xl:rounded-[1.5rem] 3xl:my-[3rem] group">
                <img
                  src="/images/workshop/art-equipment-5.webp"
                  alt="Gallery Image"
                  className="w-full object-cover h-auto group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="rounded-[1rem] overflow-hidden my-[2rem] 3xl:rounded-[1.5rem] 3xl:my-[3rem] group">
                <img
                  src="/images/workshop/art-equipment-6.webp"
                  alt="Gallery Image"
                  className="w-full object-cover h-auto group-hover:scale-110 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtEquipment;
