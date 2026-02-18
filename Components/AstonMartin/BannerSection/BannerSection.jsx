import React from "react";
import Image from "next/image";
import BreadCrumb from "../../CommonComponents/BreadCrumb/BreadCrumb";

const BannerSection = () => {
  return (
    <section className="bg-white py-16 text-center">
      <div className="container">
        <div className="flex justify-center">
          <BreadCrumb pageTitle="Aston Martin" />
        </div>
        <h1 className="font-light [&>strong]:font-normal text-3.3rem text-zinc-950 tracking-tighter leading-1.2 my-6">
          Looking to buy a <strong>used aston martin car?</strong> <br /> take a
          look..
        </h1>
        <p className="text-1.4rem font-light tracking-tight">
          'Bond with the Best'. Our inventory is the live example.
        </p>

        <div
          className="mt-10 flex flex-col justify-center items-center"
        >
          <Image
            src="/images/banner-scroll-icon-white.webp"
            alt="Scroll Down"
            width="19"
            height="29"
            className="inline-block invert object-contain w-8 1xl:w-6"
          />
          <span className="uppercase text-black mt-5 text-base 1xl:leading-relaxed">
            Scroll Down
          </span>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
