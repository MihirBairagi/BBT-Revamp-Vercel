import Link from "next/link";
import React from "react";

const cars = [
  {
    title: `I want to sell my used <b>Audi car</b>`,
    link: "/sell-my-used-audi",
    image: "/images/sell-your-car/car-1.webp",
  },
  {
    title: `I want to sell my used  <b>Mercedes Benz car</b>`,
    link: "/sell-my-used-mercedes-benz",
    image: "/images/sell-your-car/car-2.webp",
  },
  {
    title: `I want to sell my used <b>BMW car </b>`,
    link: "/sell-my-used-bmw",
    image: "/images/sell-your-car/car-3.webp",
  },
  {
    title: `I want to sell my used <b>Land Rover </b>`,
    link: "/sell-my-used-land-rover",
    image: "/images/sell-your-car/car-4.webp",
  },
  {
    title: `I want to sell my used  <b>Porsche</b>`,
    link: "/sell-my-used-porsche",
    image: "/images/sell-your-car/car-5.webp",
  },
];

const CarSelection = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center lg:text-left">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize sm:[&>br]:hidden">
              Which luxury car would you <b>like to sell</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              Our list of Associates share a common vision for <br /> Automotive
              Excellence.
            </p>
          </div>

          <div className="flex justify-between flex-wrap mt-[3rem] sm:grid sm:grid-cols-3 sm:gap-[2rem] md:grid-cols-4 lg:max-w-[1025px] xl:max-w-none xl:grid-cols-5 xl:gap-[1.5rem] 1xl:mt-[5rem] 2xl:gap-[2rem] 3xl:gap-[2.5rem]">
            {cars.map((car, index) => (
                <div key={index} className="w-[47%] h-[inherit] flex flex-col justify-between border border-[#D6D6D6] rounded-[1.5rem] mt-[2rem] px-[2rem] py-[2rem] sm:w-full sm:mt-0 xl:py-[3.5rem] 1xl:px-[3rem] 2xl:pt-[5rem] 2xl:pb-[4rem]">
                    <h5 dangerouslySetInnerHTML={{__html:car.title}} className="text-[1.4rem] lg:text-[1.6rem] xl:text-[1.9rem] 1xl:text-[2.3rem] 1xl:tracking-tighter 1xl:leading-[1.2] 2xl:text-[2.5rem] 3xl:text-[3rem] font-light [&>b]:font-medium text-center"></h5>

                    <div>
                        <div className=" mt-[3rem] mb-[1rem] xl:mb-[2rem] 2xl:mb-[3rem]">
                            <img src={car.image} alt="Car Image" className="w-full object-contain h-auto" />
                        </div>
                        <Link href={car.link} className="border border-[#000] rounded-[4rem] text-[1.2rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] px-[1rem] py-[1rem] flex justify-center items-center h-[4rem] max-w-[90%] mx-auto xl:max-w-none xl:w-max xl:px-[3rem] 2xl:h-[4.8rem] 3xl:h-[5.3rem] 2xl:px-[4rem] hover:bg-black hover:text-white transition-all duration-500">Click Here</Link>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSelection;
