import Link from "next/link";
import React from "react";

const styles = {
  uspItem:
    "w-[33%] px-[1.5rem] rounded-[0.7rem] overflow-hidden md:w-[10rem] md:h-[10rem] md:mx-0 md:px-0 md:mb-[2rem] lg:w-[12rem] lg:h-[12rem] lg:mb-0 last-of-type:mb-0 xl:w-[14rem] xl:h-[14rem] 1xl:w-[16rem] 1xl:h-[16rem] 2xl:w-[17rem] 2xl:h-[17rem] 3xl:w-[18.9rem] 3xl:h-[18.9rem] 1xl:rounded-[1rem] 2xl:rounded-[1.3rem] 3xl:rounded-[1.7rem]",
};

const TestimonialSection = () => {
  return (
    <section className="bg-black">
      <div className="max-[3000px] mx-auto relative">
        <div className="sm:hidden">
          <img
            src="/images/team/team-banner-desktop.webp"
            alt="Background Image"
            className="w-full object-cover h-[90vh] min-h-[600px]"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/team/team-banner-desktop.webp"
            alt="Background Image"
            className="w-full object-cover h-auto min-h-[700px] md:min-h-[500px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full py-[6rem] md:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 2xl:py-[16rem] 3xl:py-[20rem]">
          <div className="container h-full">
            <div className="flex flex-col flex-wrap justify-between h-full">
              <div className="text-white text-center md:text-left w-full md:w-[70%] md:flex md:flex-col md:justify-between md:h-full lg:w-[60%] xl:w-[53%]">
                <div>
                  <p className="text-[1.4rem] capitalize font-light xl:text-[1.37rem] 1xl:text-[1.6rem] 3xl:text-[2.2rem]">
                    Top Preowned Exotic Car Company
                  </p>
                  <h2 className="text-[2.8rem] tracking-[-1.5px] lg:text-[3rem] lg:font-[400] 1xl:text-[3.3rem] 2xl:text-[3.5rem] 3xl:text-[4.5rem] 3xl:tracking-[-3px] mt-[2rem]">
                    They’ll pamper you too much and arrest you in a comfort zone
                    that you’ll never be able to work anywhere else :)
                  </h2>
                  <div className="relative w-max mx-auto text-left mt-[2rem] pl-[4rem] md:ml-0 xl:mt-[3rem]">
                    <span className="bg-white h-[1px] w-[3rem] absolute top-[1rem] left-0 1xl:top-[1.4rem]"></span>
                    <h6 className="text-[1.4rem] xl:text-[1.6rem] 1xl:text-[1.9rem] 2xl:text-[2.4rem] 3xl:text-[2.9rem]">
                      Vikas kumar
                    </h6>
                    <p className="text-[1.2rem] xl:text-[1.25rem] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                      Design team
                    </p>
                  </div>
                </div>
                <div className="mt-[3rem] 3xl:mt-[5rem]">
                  <Link
                    href="/showrooms"
                    className="w-full max-w-[31rem] h-[5.5rem] flex justify-center items-center text-[1.4rem] bg-white text-black px-[3rem] py-[1rem] rounded-[3rem] mx-auto tracking-[-1px] font-medium sm:max-w-[27.3rem] md:ml-0 xl:h-[4.5rem] xl:max-w-[17rem] xl:text-[1.2rem] 1xl:h-[5rem] 1xl:max-w-[20rem] 1xl:text-[1.4rem] 2xl:max-w-none 2xl:w-max 2xl:px-[6rem] 2xl:text-[1.5rem] 3xl:h-[6.5rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-[#111111] hover:text-white transition-all duration-500 ease-in-out"
                  >
                    Explore
                  </Link>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
