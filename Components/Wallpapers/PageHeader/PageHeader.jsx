import Link from "next/link";
import React from "react";

const PageHeader = () => {
  return (
    <section className="bg-white py-[5rem] md:py-[7rem] lg:py-[9rem] 1xl:pt-[8rem] 1xl:pb-[10rem] 2xl:pt-[9rem] 2xl:pb-[12rem] 3xl:pt-[11rem] 3xl:pb-[13rem]">
      <div className="max-1920 overflow-hidden">
        <div className="container">
          <div className="text-center">
            <div className="hidden md:block text-center mb-[2rem] lg:mb-[1.7rem]">
              <p className="flex flex-wrap justify-center items-center font-light">
                <Link
                  href="/"
                  className="text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
                >
                  Home
                </Link>
                <img
                  src="/images/breadcrumb-arrow.webp"
                  className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                  width="6"
                  height="11"
                  alt="Arrow Icon"
                />
                <span className="text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
                  Wallpapers
                </span>
              </p>
            </div>
            <h1 className="font-[200] text-[4.5rem] [&>b]:font-[400] leading-[1] tracking-[-0.2rem] lg:text-[5rem] 1xl:text-[6rem] 1xl:tracking-[-0.4rem] 2xl:text-[6.3rem] 3xl:text-[7.5rem] 2xl:tracking-[-0.5rem]">
              BBT Luxury Car <br /> <b> Wallpaper Collection</b>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
