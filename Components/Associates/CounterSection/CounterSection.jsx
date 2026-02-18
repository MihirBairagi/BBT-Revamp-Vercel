import React from "react";
import Link from "next/link";

const usps = [
    {
        title:"1200<span>+</span>",
        description:"Employees at BBT"
    },
    {
        title:"7600<span>+</span>",
        description:"Satisfied Customers"
    },
    {
        title:"317<span>+</span>",
        description:"More Than Luxury Cars"
    },
    {
        title:"30<span>+</span>",
        description:"years of dealing car"
    }
]

const CounterSection = () => {
  return (
    <section className="bg-[#F3F3F3] py-[6rem] lg:py-[10rem] xl:py-[12rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-col md:max-w-[600px] md:mx-auto lg:max-w-none lg:flex-row lg:flex-wrap lg:justify-between">
            <div className="lg:w-[40%] xl:w-[37%]">
              <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center lg:text-left [&>br]:hidden text-black md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
                i have 20 years of experience in <b>building relations</b>
              </h2>
              <p className="text-[1.2rem] text-center lg:text-left mt-[2rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 3xl:text-[1.9rem]">
                Our list of Associates share a common vision for Automotive
                Excellence and a deep passion for Exotic cars. Most of our
                associates are or have been a part of the automobile industry in
                the past and have made a name for themselves in their respected
                industries.
              </p>
              <div className="w-max mt-[3rem] hidden lg:block xl:mt-[5rem] 1xl:mt-[7rem] xl:min-w-[170px] 2xl:min-w-[190px] 3xl:min-w-[240px] 3xl:mt-[6rem]">
                <Link
                  href="#"
                  className="bg-black w-full text-white border border-black text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] px-[3rem] h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] transition-all duration-500 hover:bg-[#ffffff] hover:text-black"
                >
                  View Brands
                </Link>
              </div>
            </div>
            <div className="lg:w-[50%] xl:w-[45%]">
                <ul className="grid grid-cols-2 gap-x-[2rem] gap-y-[1rem] mt-[4rem] xl:gap-x-[3rem] xl:pt-[4rem] xl:gap-y-[1.5rem] 3xl:gap-[5rem] 3xl:gap-y-[2.5rem]">
                    {usps.map((usp,index)=>(
                        <li key={index} className="border border-[#AAAAAA] rounded-[1.5rem] px-[1rem] py-[2rem] sm:px-[3rem] xl:py-[4rem] xl:pl-[4rem] 3xl:py-[5.5rem] 3xl:pl-[5.5rem]">
                            <h3 className="text-[3rem] flex items-start [&>span]:text-[2rem] leading-[1.2] sm:text-[4rem] sm:[&>span]:text-[3rem] font-medium xl:text-[5rem] xl:[&>span]:text-[3rem] 1xl:text-[6rem] 1xl:[&>span]:text-[4rem] 1xl:tracking-tight 3xl:text-[7.5rem] 3xl:[&>span]:text-[6rem] [&>span]:font-light xl:leading-[1.1]" dangerouslySetInnerHTML={{__html:usp.title}}></h3>
                            <p className="text-[1.2rem] font-medium xl:text-[1.3rem] 1xl:text-[1.4rem] 3xl:text-[1.9rem]">{usp.description}</p>
                        </li>
                    ))}
                </ul>
                <div className="w-max mx-auto mt-[3rem] lg:hidden">
                <Link
                  href="#"
                  className="bg-black w-full text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] px-[3rem] h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] transition-all duration-500 hover:bg-[#333]"
                >
                  View Brands
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
