import Link from "next/link";
import React from "react";
import "./top-dealer.css"

const usps = [
  {
    icon: "/images/why-us/why-usp-1.webp",
    title: `Extensive Inventory <br> <b>of Premium Vehicles</b>`,
    description:
      "We offer a wide range of luxury cars from the most prestigious brands, ensuring you have access to the finest selection available.",
  },
  {
    icon: "/images/why-us/why-usp-2.webp",
    title: `Competitive Pricing and <br>  <b> Financing Options </b>`,
    description:
      "We offer attractive pricing and flexible financing solutions to make luxury car ownership accessible and convenient for our clients.",
  },
  {
    icon: "/images/why-us/why-usp-3.webp",
    title: `Uncompromising <br> <b> Quality Assurance  </b>`,
    description:
      "Each vehicle undergoes rigorous inspections and maintenance to meet the highest standards of performance, safety, and aesthetics.",
  },
  {
    icon: "/images/why-us/why-usp-4.webp",
    title: `Industry Expertise <br> <b>and Experience</b>`,
    description:
      "With over 30 years in the industry, our extensive knowledge and expertise allow us to understand and cater to the unique needs of luxury car buyers.",
  },
  {
    icon: "/images/why-us/why-usp-5.webp",
    title: `Exceptional <br> <b>Customer Service</b>`,
    description:
      "Our dedicated team provides personalized support throughout your buying journey, ensuring a seamless and satisfying experience.",
  },
  {
    icon: "/images/why-us/why-usp-6.webp",
    title: `Transparent and <br> Trustworthy  <b> Transactions </b>`,
    description:
      "Our transparent processes and commitment to integrity ensure that every transaction is straightforward and trustworthy, giving you peace of mind with your purchase.",
  },
];

const TopDealer = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize [&>br]:hidden md:[&>br]:block">
              Why We are the Top <br /> <b>Luxury car Dealers India</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              Our commitment to quality, exceptional customer service, and an
              extensive selection of <br /> premium vehicles have made us the
              top luxury car dealers in India.
            </p>
            <div className="lg:hidden mt-[4rem] max-w-[280px] mx-auto">
              <img src="/images/why-us/bbt-big-logo-mob.webp" alt="" className="w-full object-contain h-auto" />
            </div>
          </div>
          {/* USP WRAPPER */}
          <div className="mt-[2rem] relative 2xl:mt-[5rem]">
            <div className="hidden lg:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[37%] xl:w-[45%] 2xl:top-[6.5rem] 2xl:translate-y-0 3xl:top-[10rem]">
              <img src="/images/why-us/bbt-big-logo.webp" alt="BBT Logo" className="w-full h-auto object-contain" />
            </div>
            <ul className="flex flex-wrap justify-between top-dealer-usp-list">
              {usps.map((usp, index) => (
                <li key={index} className="w-full py-[2rem] border-b border-b-[#D9D9D9] lg:border-none lg:mt-[4rem] sm:w-[47%] xl:mt-[7rem] 2xl:mt-[4rem] 3xl:mt-[7rem]">
                  <div className="flex flex-wrap lg:w-[65%] xl:w-[55%]">
                  <div className="w-[8rem] h-[8rem] bg-white rounded-[0.7rem] flex justify-center items-center p-[1.6rem] lg:bg-transparent lg:w-[4rem] lg:p-0 lg:pt-[1rem] icon xl:w-[5rem] 3xl:w-[6.2rem]">
                    <img
                      src={usp.icon}
                      alt="USP Icon"
                      className="w-full h-auto object-contain max-h-[4rem] lg:max-h-[3rem] xl:max-h-[3.7rem] 3xl:max-h-[5rem]"
                    />
                  </div>
                  <div className="flex-[1] pl-[2rem] text-box 3xl:pl-[3rem]">
                    <h6
                      dangerouslySetInnerHTML={{ __html: usp.title }}
                      className="text-[1.4rem] font-medium [&>b]:font-medium lg:text-[1.6rem] 1xl:text-[1.8rem] 2xl:text-[1.9rem] 3xl:text-[2.4rem] lg:font-light lg:[&>b]:font-normal capitalize [&>br]:hidden xl:[&>br]:block xl:leading-[1.2] xl:tacking-tight"
                    ></h6>
                    <p className="text-[1.2rem] lg:text-[1.1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] font-light mt-[1rem] xl:tacking-tighter">
                      {usp.description}
                    </p>
                  </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center mt-[6rem] lg:mt-[1rem]">
            <Link
              href="/contact-us"
              className="bg-black border border-black flex justify-center items-center text-white h-[5rem] rounded-[4rem] text-[1.4rem] border-none outline-none  mx-auto cursor-pointer px-[4rem] w-full max-w-[344px] lg:w-max xl:text-[1.2rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.8rem] 1xl:h-[5.5rem] 2xl:h-[6rem] 3xl:h-[7.4rem] 3xl:px-[5rem] capitalize hover:bg-[#ffffff] hover:text-black transition-all duration-500"
            >
              Reach Out To Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDealer;
