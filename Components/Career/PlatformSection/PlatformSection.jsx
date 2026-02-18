import React from "react";

const usps = [
  {
    icon: "/images/career/platform-icon-1.webp",
    title: "Team <b>Spirit</b>",
  },
  {
    icon: "/images/career/platform-icon-2.webp",
    title: "Passion To  <b>Perform</b>",
  },
  {
    icon: "/images/career/platform-icon-3.webp",
    title: "Customer  <b>Centrism</b>",
  },
  {
    icon: "/images/career/platform-icon-4.webp",
    title: "Social &  <b>Well-being</b>",
  },
];

const PlatformSection = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] md:py-[8rem] lg:py-[10rem] xl:py-[14rem] 1xl:py-[16rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-col mx-auto max-w-[400px] md:w-full md:max-w-none md:flex-row md:justify-between xl:items-end">
            <div className="md:w-[50%] xl:w-[47%]">
              <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center md:text-left [&>br]:hidden text-black md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
                Igniting Passion   <br /> and <b>Performance</b>
              </h2>
              <p className="text-[1.2rem] text-center md:text-left mt-[2rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 3xl:text-[1.9rem] font-light [&>br]:hidden lg:[&>br]:block 3xl:mt-[4rem]">
               We believe our future thrives on the passion, out-of-the-box thinking, and <br /> dedication of its people. As a team, we are always working towards <br /> propelling the business to greater heights
              </p>
              <div className="mt-[4rem] rounded-[2rem] overflow-hidden md:hidden">
                <img
                  src="/images/career/platform-thumb.webp"
                  alt=""
                  className="block object-contain h-auto"
                />
              </div>
              <ul className="grid grid-cols-2 gap-x-[2rem] gap-y-[1.5rem] mt-[4rem] xl:gap-x-[4rem] xl:gap-y-[3rem] xl:mt-[6rem] 3xl:mt-[9rem]">
                {usps.map((usp, index) => (
                  <li
                    key={index}
                    className="border border-[#9E9E9E] rounded-[1.5rem] px-[1rem] py-[2rem] sm:px-[3rem] xl:py-[4rem] xl:pl-[4rem] 3xl:py-[5.5rem] 3xl:pl-[5.5rem]"
                  >
                    <div className="w-[3rem] sm:w-[3.5rem] 1xl:w-[4rem] 3xl:w-[5.7rem]">
                      <img
                        src={usp.icon}
                        alt="Icon"
                        className="w-full object-contain h-auto"
                      />
                    </div>
                    <div className="mt-[1rem] xl:mt-[2rem]">
                      <h6
                        className="text-[1.1rem] font-light capitalize [&>b]:font-medium sm:text-[1.3rem] xl:text-[1.5rem] 1xl:text-[1.8rem] 3xl:text-[2.4rem]"
                        dangerouslySetInnerHTML={{ __html: usp.title }}
                      ></h6>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-[41%] hidden md:block xl:w-[44%]">
              <div className="mt-[4rem] rounded-[2rem] overflow-hidden md:mt-0">
                <img
                  src="/images/career/platform-thumb.webp"
                  alt=""
                  className="block object-contain h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
