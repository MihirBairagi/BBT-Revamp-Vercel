import React from "react";

const ServiceItem = ({ data, toggleModal }) => {
  return (
    <div
      className="relative rounded-[1rem] md:rounded-[2rem] overflow-hidden group mt-[2rem] xl:mt-[3rem] 2xl:mt-[3.5rem] 3xl:mt-[4.5rem] 2xl:rounded-[2.5rem] cursor-pointer h-[28rem] md:h-[32rem] lg:h-[37rem] 1xl:h-[43rem] 2xl:h-[45rem] 3xl:h-[53rem]"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      onClick={() => {
        toggleModal(data._id);
      }}
    >
      <div className="h-full">
        <img src={data.image} alt="" className="w-full h-full block object-cover" />
      </div>
      <div className="w-full h-full hidden xl:block bg-[rgba(0,0,00,.3)] absolute left-0 top-0"></div>
      <div className="w-full h-full absolute bg-[rgba(0,0,00,.3)] xl:bg-transparent left-0 bottom-0 xl:bottom-[-40%] 2xl:bottom-[-45%] xl:hover:bottom-0 flex flex-col justify-end px-[2rem] py-[2rem] text-white lg:pb-[3rem] lg:pl-[3rem] 2xl:pb-[5rem] transition-all duration-500 3xl:bottom-[-42%]">
        <h3 className="capitalize font-normal text-[1.7rem] xl:text-[2rem] 2xl:text-[2.1rem] 3xl:text-[2.8rem] ">
          {data.title}
        </h3>
        <div className="relative overflow-hidden pt-[1.5rem] text-[1.2rem] font-light  xl:text-[1.3rem] 1xl:text-[1.4rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem] hidden xl:block xl:pt-[2.5rem] 3xl:pt-[3.5rem]">
          <div className=" line-clamp-4"  dangerouslySetInnerHTML={{__html: data.description}}></div>
          <div className="hidden xl:block max-w-[2.5rem] 2xl:max-w-[3rem] 3xl:max-w-[3.7rem] xl:mt-[3rem] 1xl:pb-[1rem] 2xl:mt-[2.5rem]">
            <img
              src="/images/modifications/service-arrow.webp"
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
