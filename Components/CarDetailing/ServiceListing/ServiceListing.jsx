import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Ferrari Car Detailing",
    description:
      "With Service Inclusive, you have complete peace of mind for a period of  your choice. During this time, you don’t have to waste a moment thinking.",
    image: "/images/car-detailing/detail-list-1.webp",
  },
  {
    title: "Mercedes Car Detailing",
    description:
      "With Service Inclusive, you have complete peace of mind for a period of  your choice. During this time, you don’t have to waste a moment thinking.",
    image: "/images/car-detailing/detail-list-2.webp",
  },
  {
    title: "Jaguar Car Detailing",
    description:
      "With Service Inclusive, you have complete peace of mind for a period of  your choice. During this time, you don’t have to waste a moment thinking.",
    image: "/images/car-detailing/detail-list-3.webp",
  },
  {
    title: "Audi Car Detailing",
    description:
      "With Service Inclusive, you have complete peace of mind for a period of  your choice. During this time, you don’t have to waste a moment thinking.",
    image: "/images/car-detailing/detail-list-4.webp",
  },
  {
    title: "BMW Car Detailing",
    description:
      "With Service Inclusive, you have complete peace of mind for a period of  your choice. During this time, you don’t have to waste a moment thinking.",
    image: "/images/car-detailing/detail-list-5.webp",
  },
];

const ServiceListing = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div>
            <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center lg:text-left xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
              We are top 3 best luxury car{" "}
              <b>
                Detailing <br /> Services In India
              </b>
            </h2>
            <p className="text-[1.5rem] text-center lg:text-left xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light">
              Automotive Excellence and a deep passion
            </p>
          </div>
          <ul className="border-t border-[#B2B2B2] mt-[5rem]">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex justify-between flex-wrap text-center sm:text-left py-[3rem] xl:py-[3.5rem] border-b border-[#B2B2B2] 1xl:py-[4rem]"
              >
                <div className="w-full sm:w-[25%] md:w-[20%]">
                  <img
                    src={service.image}
                    alt="Thumbnail"
                    className="max-w-[17rem] xl:max-w-[12rem] 1xl:max-w-[13rem] 2xl:max-w-[14rem] 3xl:max-w-[17rem] mx-auto sm:ml-0 w-full h-auto rounded-[1.5rem] object-cover"
                  />
                </div>
                <div className="w-full mt-[2rem] sm:w-[70%] md:w-[73%] flex justify-between flex-col md:flex-row sm:mt-0 md:mt-[1rem] xl:w-[75%] xl:pr-[6rem] 3xl:pr-[9rem]">
                  <h4 className="text-[2rem] font-normal w-full mb-[1rem] md:w-[52%] xl:w-[55%] xl:tracking-tighter xl:text-[2.5rem] 1xl:text-[2.9rem] 2xl:text-[3.3rem] 3xl:text-[4rem] 3xl:w-[57%]">
                    {service.title}
                  </h4>
                  <p className="text-[1.2rem] font-normal w-full md:flex-[1] xl:text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {/* <div className="mt-[4rem] xl:mt-[6rem] 3xl:mt-[8rem]">
            <Link
              href="/services"
              className="w-max mx-auto h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-black border border-black text-white px-[3rem] py-[1rem] rounded-[3rem] xl:px-[6rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[6.5rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[8rem] hover:bg-[#f1f1f1] hover:text-black transition-all duration-500 ease-in-out"
            >
              View More
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceListing;
