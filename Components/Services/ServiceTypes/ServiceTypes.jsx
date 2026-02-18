import React from "react";

const services = [
  {
    icon: "/images/services/service-icon-1.webp",
    title: "Periodic Service",
  },
  {
    icon: "/images/services/service-icon-2.webp",
    title: "Air Conditioning & Heating Repair",
  },
  {
    icon: "/images/services/service-icon-3.webp",
    title: "Battery Replacement",
  },
  {
    icon: "/images/services/service-icon-4.webp",
    title: "Brake Repair Service",
  },
  {
    icon: "/images/services/service-icon-5.webp",
    title: "Suspension & Fitments",
  },
  {
    icon: "/images/services/service-icon-6.webp",
    title: "Accident Repair",
  },
  {
    icon: "/images/services/service-icon-7.webp",
    title: "Clutch & Body Parts",
  },
  {
    icon: "/images/services/service-icon-8.webp",
    title: "MMI® Software Update",
  },
  {
    icon: "/images/services/service-icon-9.webp",
    title: "Air suspension, repairs & modifications",
  },
];

const ServiceTypes = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center sm:text-left">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] md:text-left xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize">
              with Over 50+ services <b>available at Big Boy Toyz</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              Our list of Associates share a common vision for Automotive
              Excellence <br /> and a deep passion for Exotic cars.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[2rem] mt-[4rem] auto-rows-fr md:grid-cols-3 lg:gap-x-[2rem] xl:gap-x-[3rem] xl:gap-y-[3.5rem] 3xl:gap-y-[4.5rem] 3xl:gap-x-[4rem]">
            {services.map((service, index) => (
              <li
                key={index}
                className="bg-white rounded-[1rem] px-[1.5rem] py-[2rem] flex items-center flex-col justify-center text-center  sm:text-left lg:px-[2.5rem] lg:rounded-[1.5rem] xl:px-[4rem] xl:rounded-[2rem] 1xl:py-[4rem] 1xl:rounded-[2.5rem] 3xl:px-[5rem] 3xl:rounded-[3.5rem] 3xl:py-[5rem]"
              >
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="w-[3rem] mb-[2rem] sm:mb-0 lg:w-[max-content] ">
                    <img
                      src={service.icon}
                      alt="Icon"
                      className="object-contain h-auto w-full 1xl:max-h-[7rem] lg:max-w-[3.5rem] xl:max-w-[6rem] 1xl:max-w-[8.5rem] 3xl:max-w-[9rem] 3xl:max-h-[9rem]"
                    />
                  </div>
                  <h6 className="flex-[1] text-[1.3rem] lg:text-[1.6rem] xl:text-[2rem] 1xl:text-[2.5rem] 2xl:text-[2.7rem] 3xl:text-[3.2rem] xl:tracking-tighter xl:leading-[1.2] xl:font-normal font-medium capitalize sm:pl-[2rem] 1xl:tracking-[-2px] 3xl:pl-[3rem]">
                    {service.title}
                  </h6>
                </div>
              </li>
            ))}
          </ul>
          {/* <div className="mt-[4rem] xl:mt-[5.5rem] 3xl:mt-[8rem]">
            <button className="w-max mx-auto h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] xl:px-[4.5rem] xl:h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[7.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[8rem] hover:bg-[#333333] transition-all duration-500 ease-in-out">
              Load More
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceTypes;
