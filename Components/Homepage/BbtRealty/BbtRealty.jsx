import Link from "next/link";
import React from "react";

const usps = [
  { title: "04", description: `<span>Landmark Luxury </span> Projects` },
  {
    title: "15+",
    description: `<span>Sprawling Multi-city </span>  Development Portfolio`,
  },
  {
    title: "04",
    description: `<span>Iconic Destinations </span>  Delhi • Lucknow <br/> Himachal • Vadodara`,
  },
  {
    title: "100%",
    description: `<span>BBT-Level Precision </span> Across Every Project`,
  },
];

const BbtRealty = () => {
  return (
    <section className="bg-black overflow-hidden">
      <div className="max-[3000px] mx-auto relative">
        <div className="sm:hidden">
          <img
            src="/images/bbt-realty-bg-mob.webp"
            alt="Background Image"
            className="w-full object-cover block max-h-[120vh]"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/bbt-realty-bg-desk.webp"
            alt="Background Image"
            className="w-full object-cover block h-full md:min-h-[60rem]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full py-[6rem] md:py-[8rem] xl:py-[10rem] 3xl:py-[18rem]">
          <div className="container h-full">
            <div className="flex flex-col justify-between h-full">
              <div className="text-white text-center md:text-left w-full  md:flex md:flex-col md:justify-between ">
                <div className="xl:w-[53%] xl:max-w-[40rem] 1xl:max-w-[45rem] 3xl:max-w-[53rem]">
                  <p className="text-[1.4rem] uppercase font-light xl:text-[1.37rem] 1xl:text-[1.6rem] 3xl:text-[2.2rem]">
                    Bbt reality
                  </p>
                  <h2 className="text-[2.8rem] font-light [&>b]:font-normal tracking-[-1.5px] lg:text-[3rem] 1xl:text-[3.3rem] 2xl:text-[3.5rem] md:[&>b]:block 3xl:text-[4.5rem] 3xl:tracking-[-3px] mt-[2rem] leading-[1.3]">
                    Where Luxury Living Meets <b>Unmatched Craftsmanship</b>
                  </h2>
                  <p className="font-light text-[1.4rem] leading-[1.5] mt-[2rem] sm:mt-[1rem] lg:text-[1.3rem] lg:tracking-tight xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:mt-[2rem] 3xl:text-[1.7rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
                    From India’s iconic luxury car brand comes a new chapter in
                    luxury living. BBT Realty brings the same precision, detail
                    & elegance to landmark spaces across India.
                  </p>
                  <Link
                    href="/realty"
                    className="w-max mx-auto mt-[2rem] h-[4.5rem] flex justify-center items-center text-[1.4rem] bg-white text-black px-[3rem] py-[1rem] rounded-[3rem] tracking-[-1px] font-medium  md:ml-0 xl:h-[4.5rem] xl:text-[1.2rem] 1xl:h-[5rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:h-[6.5rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] hover:bg-[#111111] hover:text-white transition-all duration-500 ease-in-out 1xl:mt-[3rem] 3xl:mt-[4rem]"
                  >
                    Discover BBT Realty
                  </Link>
                </div>
              </div>
              <div className="mt-[3rem] w-full md:mt-[6rem] text-white">
                <ul className="grid grid-cols-2 gap-y-[3rem] max-w-[500px] mx-auto md:max-w-none md:grid-cols-4">
                  {usps.map((usp, index) => (
                    <li
                      key={index}
                      className="px-[1.5rem] py-[1rem] border-l border-l-[#dddddd] even:border-r even:border-r-[#dddddd] xl:px-[2.5rem] 1xl:px-[3.5rem] 3xl:px-[5rem]"
                    >
                      <h6 className="text-[4.5rem] font-[700] xl:text-[5rem] 1xl:text-[5.5rem] 2xl:text-[6rem] 3xl:text-[7rem] leading-[1]">
                        {" "}
                        {usp.title}{" "}
                      </h6>{" "}
                      <p
                        className="text-[1.4rem] md:text-[1.3rem] mt-[1rem] font-medium [&>span]:font-light [&>span]:text-[#ffffffec] md:[&>span]:block lg:text-[1.5rem] xl:text-[1.7rem] 1xl:text-[1.8rem] 2xl:text-[2rem] 3xl:text-[2.4rem] 3xl:mt-[2rem]"
                        dangerouslySetInnerHTML={{ __html: usp.description }}
                      ></p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BbtRealty;
