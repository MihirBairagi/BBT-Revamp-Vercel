import Link from "next/link";
import React from "react";

const ExploreSection = () => {
  return (
    <section className="bg-black py-[6rem] lg:py-[8rem] xl:py-[12rem] 3xl:py-[15rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="hidden lg:block w-[25%] xl:w-[28.5%]">
              <div className="rounded-[1.5rem] overflow-hidden lg:rounded-[3rem] 3xl:rounded-[5rem]">
                <img
                  src="/images/blogs/blog-explore-1.webp"
                  alt="BBT WorkShop"
                  className="w-full object-cover h-auto"
                  width="451"
                  height="588"
                />
              </div>
            </div>
            <div className="w-full lg:w-[30%] xl:w-[32%] text-center text-white">
              <h2 className="font-light [&>b]:font-medium 3xl:text-[4.5rem] tracking-tighter capitalize lg:mb-[2rem]">
                Explore Our <b>World Class Infra & Showroom</b>
              </h2>
              <div className="lg:hidden flex justify-between flex-wrap my-[4rem]">
                <div className="rounded-[1rem] w-[47%] overflow-hidden">
                  <img
                    src="/images/blogs/blog-explore-1.webp"
                    alt="BBT WorkShop"
                    className="w-full object-cover h-auto"
                    width="451"
                    height="588"
                  />
                </div>
                <div className="rounded-[1rem] w-[47%] overflow-hidden">
                  <img
                    src="/images/blogs/blog-explore-2.webp"
                    alt="BBT WorkShop"
                    className="w-full object-cover h-auto"
                    width="451"
                    height="588"
                  />
                </div>
              </div>
              <p className="font-[300] text-[1.2rem] leading-[1.5] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] [&>b]:font-[500] 3xl:mb-[4rem]">
                BBT started in 2009 as a benchmark model for the Pre-Used, or
                how we prefer to see it as, Pre-Loved Car Brand. The mission was
                simple, direct and drove effect - delivering a new dimension of
                luxury while standardising & raising platforms for the used car
                market in India.
              </p>
              <div className="text-center mt-[4rem] xl:mt-[5rem] mx-auto max-w-[258px]">
                <Link
                  href="/workshop"
                  className="w-full max-w-[31rem] h-[5.5rem] flex justify-center items-center text-[1.4rem] bg-white border border-white  text-black px-[3rem] py-[1rem] rounded-[3rem] mx-auto tracking-[-1px] font-medium sm:max-w-[27.3rem] xl:h-[5rem] xl:max-w-[17rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:max-w-[20rem] 1xl:text-[1.4rem] 2xl:max-w-none 2xl:w-max 2xl:px-[6rem] 2xl:text-[1.5rem] 3xl:h-[6.5rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-[#111111] hover:text-white transition-all duration-500 ease-in-out"
                >
                  View Our Workshop
                </Link>
              </div>
            </div>

            <div className="hidden lg:block w-[25%] xl:w-[28.5%]">
              <div className="rounded-[1.5rem] overflow-hidden lg:rounded-[3rem] 3xl:rounded-[5rem]">
                <img
                  src="/images/blogs/blog-explore-2.webp"
                  alt="BBT WorkShop"
                  className="w-full object-cover h-auto"
                  width="451"
                  height="588"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
