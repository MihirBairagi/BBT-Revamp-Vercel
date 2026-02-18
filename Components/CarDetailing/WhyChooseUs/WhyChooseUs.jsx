import React from "react";

const usps = [
  {
    thumbnail: "/images/car-detailing/wc-img-1.webp",
    title: "Expertise & Experience",
  },
  {
    thumbnail: "/images/car-detailing/wc-img-2.webp",
    title: "State-of-the-Art Facilities",
  },
  {
    thumbnail: "/images/car-detailing/wc-img-3.webp",
    title: "Customization Options",
  },
  {
    thumbnail: "/images/car-detailing/wc-img-4.webp",
    title: "Quality Assurance",
  },
];

const FeaturedItem = ({ data }) => {
  return (
    <div className="relative block group common-car-item rounded-[2rem] 1xl:rounded-[2.5rem] overflow-hidden">
      <div>
        <img
          src={
            data?.thumbnail ? data.thumbnail : "/images/bbt-world-item-1.webp"
          }
          alt={data?.title ? data.title : "Thumbnail"}
          width="450"
          height="587"
          className="block w-full h-full group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full px-[2rem] py-[3rem] sm:py-[3rem] sm:px-[3rem] xl:px-[3rem] 1xl:py-[4rem] 2xl:pl-[5rem] flex flex-col justify-end 3xl:pb-[6rem] 3xl:pl-[5rem] bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.01)]">
        <h5 className="text-white w-full text-[1.7rem] font-normal text-left xl:text-[2rem] 1xl:text-[2.3rem] 2xl:text-[2.5rem] 3xl:text-[3rem] 3xl:bottom-24 3xl:left-24">
          {data.title}
        </h5>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center lg:text-left xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            Why <b>Choose Us?</b>
          </h2>
          <p className="text-[1.5rem] text-center lg:text-left xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light">
            We're not just car enthusiasts – we're car experts.
          </p>
          <div className="grid grid-cols-2 gap-x-[2rem] gap-y-[2rem] mt-[5rem] sm:grid-cols-3 lg:grid-cols-4 xl:gap-[3rem]">
            {usps.map((item, index) => (
              <FeaturedItem data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
