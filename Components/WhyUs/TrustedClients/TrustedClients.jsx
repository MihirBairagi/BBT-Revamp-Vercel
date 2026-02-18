import React from "react";

const TrustedClients = () => {
  return (
    <section className="bg-[#161616] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize md:[&>br]:hidden">
              We have been <br /> trusted <b>by many</b>
            </h2>
            <p className="hidden xl:block text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block text-[#B5B5B5]">
              BBT's showroom has become a hot destination for Bollywood stars
              and well known <br /> celebrities. Stars of the likes of Neha
              Dhupia and Yuvraj Singh have come down to catch a <br /> glimpse
              of BBT's exotic collection of dazzling high-performance cars.
            </p>
          </div>

          {/* For Desktop */}
          <div className="flex-wrap justify-between hidden xl:flex xl:mt-[9rem] 2xl:mt-[11rem] 3xl:mt-[12rem]">
            <div className="xl:w-[22%] 1xl:w-[22.3%] xl:pt-[6rem] 2xl:pt-[7rem] 3xl:pt-[8rem]">
              <div className="rounded-[1.5rem] xl:rounded-[2.5rem] 3xl:rounded-[3.5rem] overflow-hidden group">
                <img
                  src="/images/why-us/trust-img-1.webp"
                  alt="Client Image"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110"
                  width="352"
                  height="550"
                />
              </div>
              <div className="w-full bg-[#212121] border border-[#383838] px-[2rem] py-[3rem] rounded-[1rem] xl:rounded-[1.5rem] 3xl:rounded-[2.5rem] mt-[1.5rem] flex justify-center items-center xl:py-[1.7rem] 3xl:py-[2rem]">
                <p className=" [&>b]:block font-extralight [&>b]:font-medium text-white text-[1.4rem] text-center xl:text-[1.6rem] 1xl:text-[1.8rem] 3xl:text-[2.4rem]">
                  320 Celebrities <b>Partnerships</b>
                </p>
              </div>
            </div>

            <div className=" xl:w-[22%] 1xl:w-[22.3%]">
              <div className="rounded-[1.5rem] xl:rounded-[2.5rem] 3xl:rounded-[3.5rem] overflow-hidden group">
                <img
                  src="/images/why-us/trust-img-2.webp"
                  alt="Client Image"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110"
                  width="352"
                  height="420"
                />
              </div>
              <div className="rounded-[1.5rem] xl:rounded-[2.5rem] 3xl:rounded-[3.5rem] overflow-hidden mt-[2rem] xl:mt-[3.5rem] 3xl:mt-[5rem] group">
                <img
                  src="/images/why-us/trust-img-3.webp"
                  alt="Client Image"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110"
                  width="352"
                  height="300"
                />
              </div>
            </div>

            <div className="xl:w-[22%] 1xl:w-[22.3%]">
              <div className="rounded-[1.5rem] xl:rounded-[2.5rem] 3xl:rounded-[3.5rem] overflow-hidden group">
                <img
                  src="/images/why-us/trust-img-4.webp"
                  alt="Client Image"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110"
                  width="352"
                  height="300"
                />
              </div>
              <div className="rounded-[1.5rem] xl:rounded-[2.5rem] overflow-hidden mt-[2rem] xl:mt-[3.5rem] 3xl:mt-[5rem] group">
                <img
                  src="/images/why-us/trust-img-5.webp"
                  alt="Client Image"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110"
                  width="352"
                  height="283"
                />
              </div>
              <div className="w-full bg-[#212121] border border-[#383838] px-[2rem] py-[3rem] rounded-[1rem] xl:rounded-[1.5rem] 3xl:rounded-[2.5rem] mt-[1.5rem] justify-center items-center hidden xl:flex xl:py-[1.7rem] 3xl:py-[2rem]">
                <p className="font-extralight [&>b]:block [&>b]:font-medium text-white text-[1.4rem] text-center xl:text-[1.6rem] 1xl:text-[1.8rem] 3xl:text-[2.4rem]">
                  5000+ <b>Supercars Sold</b>
                </p>
              </div>
            </div>

            <div className="xl:w-[22%] 1xl:w-[22.3%]">
              <div className="w-full bg-[#212121] border border-[#383838] px-[2rem] rounded-[1.5rem] 3xl:rounded-[2.5rem] flex justify-center items-center xl:mt-0 xl:mb-[1.5rem] xl:py-[2.5rem] 3xl:py-[4rem]">
                <p className="font-extralight [&>b]:block xl:[&>b]:inline [&>b]:font-medium text-white text-[1.4rem] text-center xl:text-[1.6rem] 1xl:text-[1.8rem] 3xl:text-[2.4rem]">
                  2 Lakh+ <b> Clients</b>
                </p>
              </div>
              <div className="rounded-[1.5rem] xl:rounded-[2.5rem] 3xl:rounded-[3.5rem] overflow-hidden group">
                <img
                  src="/images/why-us/trust-img-6.webp"
                  alt="Client Image"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110"
                  width="352"
                  height="500"
                />
              </div>
            </div>
          </div>

          {/* For Mobile */}
          <div className="xl:hidden mt-[5rem] md:max-w-[650px] md:mx-auto">
            <div className="grid grid-cols-2 gap-[1.5rem] sm:grid-cols-3">
              <div className="h-[23rem] sm:h-[30rem] overflow-auto rounded-[1rem]">
                <img
                  src="/images/why-us/trust-img-1.webp"
                  alt="Client Image"
                  className="w-full h-full object-cover"
                  width="352"
                  height="550"
                />
              </div>
              <div className="h-[23rem] sm:h-[30rem] overflow-auto rounded-[1rem]">
                <img
                  src="/images/why-us/trust-img-2.webp"
                  alt="Client Image"
                  className="w-full h-full object-cover"
                  width="352"
                  height="550"
                />
              </div>
              <div className="h-[23rem] sm:h-[30rem] overflow-auto rounded-[1rem]">
                <img
                  src="/images/why-us/trust-img-3.webp"
                  alt="Client Image"
                  className="w-full h-full object-cover"
                  width="352"
                  height="550"
                />
              </div>
              <div className="h-[23rem] sm:h-[30rem] overflow-auto rounded-[1rem]">
                <img
                  src="/images/why-us/trust-img-4.webp"
                  alt="Client Image"
                  className="w-full h-full object-cover"
                  width="352"
                  height="550"
                />
              </div>
              <div className="h-[23rem] sm:h-[30rem] overflow-auto rounded-[1rem]">
                <img
                  src="/images/why-us/trust-img-5.webp"
                  alt="Client Image"
                  className="w-full h-full object-cover"
                  width="352"
                  height="550"
                />
              </div>
              <div className="h-[23rem] sm:h-[30rem] overflow-auto rounded-[1rem]">
                <img
                  src="/images/why-us/trust-img-6.webp"
                  alt="Client Image"
                  className="w-full h-full object-cover"
                  width="352"
                  height="550"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-[1.5rem]">
              <div className="w-full bg-[#212121] border border-[#383838] px-[2rem] sm:px-[1rem] py-[3rem] rounded-[1rem] mt-[1.5rem] flex justify-center items-center">
                <p className="font-extralight [&>b]:font-medium text-white text-[2rem] sm:text-[1.5rem] text-center">
                  5000+ <b>Supercars Sold </b>
                </p>
              </div>
              <div className="w-full bg-[#212121] border border-[#383838] px-[2rem] sm:px-[1rem] py-[3rem] rounded-[1rem] mt-[1.5rem] flex justify-center items-center">
                <p className="font-extralight [&>b]:font-medium text-white text-[2rem] sm:text-[1.5rem] text-center">
                  320 Celebrities <b>Partnerships</b>
                </p>
              </div>
              <div className="w-full bg-[#212121] border border-[#383838] px-[2rem] sm:px-[1rem] py-[3rem] rounded-[1rem] mt-[1.5rem] flex justify-center items-center">
                <p className="font-extralight [&>b]:font-medium text-white text-[2rem] sm:text-[1.5rem] text-center">
                  2 Lakh+ <b>Clients</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
