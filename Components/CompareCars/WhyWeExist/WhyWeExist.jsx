import Link from "next/link";
import React from "react";

const uspList = [
  {
    icon: "/images/compare-cars/usp-icon-1.webp",
    title: "151 Check  </br><b>Points</b> ",
  },
  {
    icon: "/images/compare-cars/usp-icon-2.webp",
    title: "Hassle free   </br><b>buying process</b> ",
  },
  {
    icon: "/images/compare-cars/usp-icon-3.webp",
    title: "100% Payment  <b> </br> Secured</b> ",
  },
  {
    icon: "/images/compare-cars/usp-icon-4.webp",
    title: "RTO Physical  <b> </br> Check</b> ",
  },
];

const WhyWeExist = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <h3 className="titleWithLine mobileLine block">
            <span className="bg-[#ffffff] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[3rem] xl:pr-[4rem] 1xl:text-[3.7rem] 3xl:text-[4.5rem]">
              Why We Exist
            </span>
          </h3>
          <div className="flex flex-wrap mt-[3rem] md:justify-between 3xl:mt-[8rem] xl:mt-[6rem]">
            <div className="w-full md:w-[60%] lg:w-[57%] xl:w-[43%] 2xl:w-[44%]">
              <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize mb-[3rem]">
                Sell Your Car In <b>29 Minutes</b>
              </h2>
              <p className="font-[300] text-[1.2rem] leading-[1.5] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] [&>b]:font-[500]">
                At BBT, we strive to provide the quickest and most hassle free
                car selling service available. Getting a great deal on the
                client’s vehicle can often be tricky to do by themselves, here
                the BBT Squad comes into picture and connects us to value their
                vehicle based on its condition and current market value. <br />
                <br />
                You can grow with us by expanding your existing freelance and
                agency relationships by working across PAN India, furthermore to
                improve accessibility one can firm their presence on various
                social media platforms on behalf of us. Our target is to
                simplify processing to succeed.
              </p>
              <div className="hidden md:block md:mt-[3rem] xl:mt-[5rem] 3xl:mt-[6rem]">
                <Link
                  href="/sell-used-luxury-car"
                  className="w-max h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] xl:px-[6rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[6.5rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[8rem] hover:bg-[#333333] transition-all duration-500 ease-in-out"
                >
                  Explore
                </Link>
              </div>
            </div>
            <div className="w-full mt-[4rem] md:mt-0 md:w-[30%] xl:w-[51%] 3xl:w-[50%]">
              <ul className="flex justify-between flex-wrap md:flex-col lg:w-[87%] xl:flex-row xl:w-full">
                {uspList.map((usp, index) => (
                  <li
                    key={index}
                    className="w-[50%] sm:w-[33%] md:w-full flex items-center py-[0.5rem] my-[1.5rem] pl-[2rem] [&:nth-child(odd)]:pl-0 sm:pl-0 md:border-b md:border-[#D9D9D9] md:last:border-none md:py-[2rem] md:my-0 xl:w-[47%] xl:border-none"
                  >
                    <div className="w-[4rem] h-[4rem] p-[0.9rem] flex justify-center items-center rounded-full bg-[#F4F4F1] lg:w-[6rem] lg:h-[6rem] lg:p-[1.5rem] xl:w-[8rem] xl:h-[8rem] xl:p-[2.5rem] 3xl:w-[12.5rem] 3xl:h-[12.5rem] 1xl:w-[10rem] 1xl:h-[10rem] 1xl:p-[3rem] 3xl:p-[4rem]">
                      <img
                        src={usp.icon}
                        alt="Icon"
                        className="object-contain h-auto w-full"
                      />
                    </div>
                    <h6
                      className="flex-[1] pl-[1rem] leading-[1.2] lg:pl-[2rem] xl:pl-[2rem] text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] font-light [&>b]:font-medium capitalize 1xl:text-[1.9rem] 1xl:tracking-tight"
                      dangerouslySetInnerHTML={{ __html: usp.title }}
                    ></h6>
                  </li>
                ))}
              </ul>
              <div className="mt-[3rem] md:hidden">
                <Link
                  href="/sell-used-luxury-car"
                  className="w-max mx-auto h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] xl:px-[6rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[6.5rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[8rem] hover:bg-[#333333] transition-all duration-500 ease-in-out"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
