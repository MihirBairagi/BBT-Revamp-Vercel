import Link from "next/link";
import React from "react";

const uspList = [
  { title: "Best Offer </br><b>in 29 Minutes</b>" },
  { title: "7600+ Satisfied  </br><b>Customers</b>" },
  { title: "Hassle Free  </br><b>Process</b>" },
  { title: "take and  </br><b>drop services</b>" },
];

const InsuredBanner = () => {
  return (
    <section className="bg-black">
      <div className="max-1920 relative">
        <div className="sm:hidden">
          <img
            src="/images/services/insured-banner-desktop.webp"
            alt="Background Image"
            className="w-full object-cover h-full min-h-[700px]"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/services/insured-banner-desktop.webp"
            alt="Background Image"
            className="w-full object-cover h-auto min-h-[600px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container w-full h-full">
            <div className="flex h-full w-full flex-col justify-between py-[6rem] sm:justify-start  md:pt-[8rem]  xl:pt-[12rem] 2xl:pt-[14rem] 3xl:pt-[22rem] ">
              <div className="text-center text-white sm:text-left">
                <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-2px] text-[2.9rem] xl:text-[3.75rem] 1xl:text-[4.2rem] 1xl:mt-[2rem] 2xl:text-[4.3rem] 3xl:text-[5.8rem] 3xl:tracking-[-3px] capitalize [&>br]:hidden sm:[&>br]:block">
                  get your car <b>insured</b>
                </h2>
                <p className="font-light text-[1.4rem] leading-[1.5] mt-[2rem] sm:mt-[1rem] sm:mb-[1.5rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] xl:mb-[3rem] 1xl:text-[1.28rem] xl:mt-[3rem] 2xl:text-[1.4rem] 2xl:mb-[4.5rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] [&>br]:hidden sm:[&>br]:block">
                  We're not just about making your car look pretty, we're all
                  about <br /> making it perform like a champ too. From
                  turbocharging your engine <br /> to upgrading your suspension
                  for that buttery smooth ride!
                </p>

                <div className="mt-[2rem] max-w-[310px] mx-auto sm:ml-0 xl:max-w-[300px] 1xl:max-w-[332px] 2xl:max-w-[370px] 3xl:max-w-[438px]">
                  <ul className="flex justify-between flex-wrap">
                    {uspList.map((usp, index) => (
                      <li
                        key={index}
                        className="w-[50%] flex items-center text-left py-[0.5rem] my-[1.5rem] border-l border-[#FFFFFF] pl-[2rem] [&:nth-child(odd)]:border-none [&:nth-child(odd)]:pl-0 1xl:pl-[4rem]"
                      >
                        <h6
                          className="flex-[1] pl-[1rem] xl:pl-0 text-[1.5rem] xl:text-[1.7rem] 2xl:text-[1.9rem] 3xl:text-[2.4rem] font-extralight [&>b]:font-medium capitalize"
                          dangerouslySetInnerHTML={{ __html: usp.title }}
                        ></h6>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-center sm:mt-[5rem] sm:text-left 3xl:mt-[5rem]">
                <Link
                  href="/insurances/car-insurance"
                  className="w-full max-w-[31rem] h-[5.5rem] flex justify-center items-center text-[1.4rem] bg-white text-black px-[3rem] py-[1rem] rounded-[3rem] mx-auto tracking-[-1px] font-medium sm:max-w-[20rem] sm:ml-0 xl:h-[4.5rem] xl:max-w-[17rem] xl:text-[1.2rem] 1xl:h-[5rem] 1xl:max-w-[20rem] 1xl:text-[1.4rem] 2xl:max-w-none 2xl:w-max 2xl:px-[6rem] 2xl:text-[1.5rem] 3xl:h-[6.5rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-[#f1f1f1] transition-all duration-500 ease-in-out"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuredBanner;
