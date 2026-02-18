import React from "react";
import { esteems } from "../../../public/data/dummyData";

const EsteemsSection = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[10rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] [&>br]:hidden text-center md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
              Few of <b>our esteems</b>
            </h2>
            <p className="font-light text-[1.2rem] leading-[1.5] mt-[2rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.3rem] xl:leading-[1.5] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.9rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
              Our list of Associates share a common vision for Automotive <br />
              Excellence and a deep passion for Exotic cars.
            </p>
          </div>
          {esteems && esteems.length > 0 ? (
            <ul className="grid grid-cols-2 gap-[2rem] sm:grid-cols-3 lg:grid-cols-5 md:mt-[4rem] lg:mt-0 xl:gap-x-[3rem] 3xl:gap-x-[4.5rem]">
              {esteems.map((item, index) => (
                <li
                  key={item}
                  className="mt-[2rem] lg:mt-[4rem] xl:mt-[5rem] 1xl:mt-[6rem] cursor-pointer group 3xl:mt-[8rem]"
                >
                  <div className="border border-[#AAAAAA] rounded-[1rem] p-[1rem] flex justify-center items-center xl:p-[2rem] xl:rounded-[1.5rem] overflow-hidden 3xl:p-[3rem]">
                    <div className="overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="block w-full h-auto object-contain group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="pt-[1rem] pl-[1.5rem]">
                    <p className="text-[1rem] xl:text-[1.1rem] 1xl:text-[1.2rem]  3xl:text-[1.6rem]">
                      {item.category}
                    </p>
                    <h6 className="text-[1.4rem] leading-[1.2] xl:text-[1.6rem] 1xl:font-[600] 1xl:tracking-[-1px] 1xl:text-[1.8rem] 3xl:text-[2.4rem]">
                      {item.title}
                    </h6>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-[7rem] text-center">
              <h2>No Esteems Found!</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EsteemsSection;
