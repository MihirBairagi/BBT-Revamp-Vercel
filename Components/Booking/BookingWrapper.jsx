import React from "react";
import BookingCar from "./BookingCar";
import BookingProcess from "./BookingProcess";
const usps = [
  {
    title: `10000+ Satisfied <b>Customers</b>`,
    icon: "/images/booking/usp-icon-1.webp",
  },
  {
    title: `151 Quality  <b>Checkpoints</b>`,
    icon: "/images/booking/usp-icon-2.webp",
  },
  {
    title: `30 Luxury  <b>Car Brands</b>`,
    icon: "/images/booking/usp-icon-3.webp",
  },
  {
    title: `100% Payment  <b>Secured</b>`,
    icon: "/images/booking/usp-icon-2.webp",
  },
];

const BookingWrapper = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] xl:pt-[8rem] xl:pb-[12rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-wrap justify-between max-w-[450px] mx-auto lg:max-w-none">
            <div className="w-full lg:w-[35%] xl:w-[31%]">
              <BookingCar />
            </div>
            <div className="w-full pt-[5rem] lg:w-[55%] lg:pt-0 xl:w-[64%]">
              <div>
                <h2 className="font-extralight text-center lg:text-left [&>b]:font-normal text-[2.5rem] tracking-[-2px] xl:text-[3.8rem] ] 1xl:text-[4.5rem] 2xl:text-[4.9rem] 3xl:text-[5.5rem] mb-[0.5rem] xl:mb-0">
                  Reserve Your <b>Own Luxury</b>
                </h2>
                <p className="text-[1.5rem] text-center lg:text-left xl:text-[2rem] 1xl:text-[2.3rem] 2xl:text-[2.5rem] 3xl:text-[3rem] font-light [&>br]:hidden md:[&>br]:block text-[#6E6E6E]">
                  Brand Trusted by the Elites
                </p>

                {/* USP */}
                <ul className="grid grid-cols-2 gap-x-[1rem] gap-y-[2rem] mt-[3rem] xl:grid-cols-4 3xl:mt-[5rem]">
                  {usps.map((usp, index) => (
                    <li className="flex flex-wrap items-center" key={index}>
                      <div className="bg-white rounded-full w-[4.5rem] h-[4.5rem] p-[1rem] 2xl:p-[1.3rem] flex justify-center items-center 1xl:w-[5rem] 1xl:h-[5rem] 2xl:w-[5.7rem] 2xl:h-[5.7rem] 3xl:w-[6.9rem] 3xl:h-[6.9rem]">
                        <img
                          src={usp.icon}
                          alt="USP Icon"
                          className="w-full h-auto object-contain max-h-[2rem] 1xl:max-h-[2.4rem] 2xl:max-h-[2.7rem] 3xl:max-h-[3.2rem]"
                        />
                      </div>
                      <h4
                        className="flex-[1] pl-[1rem] text-[1.4rem] xl:text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[2rem] font-light [&>b]:font-medium xl:[&>b]:block 2xl:tracking-tighter"
                        dangerouslySetInnerHTML={{ __html: usp.title }}
                      ></h4>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-[5rem] 3xl:mt-[8rem]">
                <BookingProcess />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWrapper;
