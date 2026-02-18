import React from "react";

const uspList = [
  {
    title: "Exemplary <b>Expertise</b>",
    description:
      "Our workshop is staffed with highly skilled technicians and engineers who specialize in luxury vehicles.",
    icon: "/images/workshop/crafting-icon-1.webp",
  },
  {
    title: "Cutting-Edge  <b>Technology</b>",
    description:
      "We invest in state-of-the-art diagnostic tools, equipment, and technology to deliver precise and accurate services.",
    icon: "/images/workshop/crafting-icon-2.webp",
  },
  {
    title: "Transparent  <b>Communication</b>",
    description:
      "We believe in clear and transparent communication with our customers.",
    icon: "/images/workshop/crafting-icon-3.webp",
  },
  {
    title: "Quality  <b>Assurance</b>",
    description:
      "Our commitment to excellence extends to a rigorous quality assurance process.",
    icon: "/images/workshop/crafting-icon-4.webp",
  },
];

const CraftingSection = () => {
  return (
    <section className="bg-[#161616] text-white">
      <div className="max-1920 relative overflow-hidden py-[6rem] lg:py-[10rem] xl:py-[13rem] 2xl:py-[15rem] 3xl:py-[18rem]">
        <img
          src="/images/workshop/crafting-before.png"
          alt=""
          className="hidden xl:inline-block object-contain absolute top-[-9rem] left-0 w-[40%] max-w-[64rem] 1xl:max-w-[69rem] 2xl:max-w-[72rem]"
        />
        <div className="mx-auto w-full px-[15px] lg:w-[90%] xl:w-[72.5%] 3xl:w-[71.5%] relative z-20">
          <h2 className="font-light [&>b]:font-[400] leading-[1.3] mb-[3rem] tracking-[-1.2px] lg:tracking-[-2px] capitalize text-center xl:mb-[4rem] 1xl:mb-[5rem] 3xl:mb-[6rem] [&>br]:hidden lg:[&>br]:block">
            <b> Crafting Exceptional Luxury: </b>
            Our Workshop <br /> Ensures a Premium Experience
          </h2>
          <div className="rounded-[1rem] 3xl:rounded-[1.5rem] overflow-hidden">
            <img
              src="/images/workshop/crafting-thumb.webp"
              alt="Banner Image"
              className="w-100 h-auto object-cover block"
              width="1310"
              hight="642"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-[3rem] xl:gap-[2.5rem] 3xl:gap-[4rem] 3xl:mt-[4rem]">
            {uspList.map((item, index) => (
              <div
                key={index}
                className={`bg-[#212121] pt-[3rem] pb-[2rem] px-[1rem] lg:pl-[2rem] rounded-[1rem]  xl:py-[4rem] xl:px-[3rem] 3xl:px-[4.5rem] 3xl:py-[4.5rem] 3xl:rounded-[1.3rem]  group transition-all duration-500 ease-in-out cursor-pointer`}
              >
                <div className="h-[2.8rem] xl:h-[3.2rem] 1xl:h-[4rem]">
                  <img
                    src={item.icon}
                    alt="Icon"
                    width="32"
                    height="32"
                    className="object-contain h-auto max-w-[3.2rem] max-h-[2.77rem] w-full xl:max-h-[3rem] xl:max-w-[4rem] 1xl:max-w-[4rem] 1xl:max-h-[3.8rem] 2xl:max-w-[4.6rem] 2xl:max-h-[4.4rem] 3xl:max-w-[6rem] 3xl:max-h-[4.8rem]"
                  />
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: item.title }}
                  className="text-[1.5rem] font-[200] [&>b]:font-[500] mt-[1.5rem] [&>b]:block leading-[1.4] lg:text-[1.8rem] xl:text-[1.6rem] xl:mt-[2rem] 1xl:text-[1.8rem] 1xl:mt-[3rem] 2xl:text-[2rem] 3xl:text-[2.4rem] 3xl:mt-[4rem] 3xl:leading-[1.6]"
                ></p>
                <p className="font-light text-[1rem] tracking-tight leading-[1.5] 1xl:text-[1.15rem] 2xl:text-[1.25rem] 3xl:text-[1.45rem] mt-[1rem] 1xl:mt-[1.5rem] 3xl:mt-[2rem]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/images/workshop/crafting-after.png"
          alt=""
          className="hidden xl:inline-block object-contain absolute bottom-[-8rem] right-[-3rem] w-[40%] max-w-[64rem] 1xl:max-w-[69rem] 2xl:max-w-[72rem]"
        />
      </div>
    </section>
  );
};

export default CraftingSection;
