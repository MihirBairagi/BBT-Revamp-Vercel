import Link from "next/link";
import React from "react";

const PageHeader = ({ project }) => {
  console.log("project", project);
  const workList = project?.workDone || ["Dual Tone Paint", "PPF"];
  const title = project?.title || "Blue Rolls Royce";
  return (
    <section className="bg-[#F3F3F3] py-[5rem] lg:py-[8rem] xl:py-[10rem] 3xl:py-[12rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-wrap justify-between">
            <div className="w-full text-center mb-[4rem] lg:w-[50%] lg:mb-0 lg:text-left">
              <div className="mb-[2rem] lg:mb-[1.7rem]">
                <p className="flex flex-wrap justify-center items-center font-light lg:justify-start">
                  <Link
                    href="/"
                    className="text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
                  >
                    Home
                  </Link>
                  <img
                    src="/images/breadcrumb-arrow.webp"
                    className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                    width="6"
                    height="11"
                    alt="Arrow Icon"
                  />
                   <Link
                    href="/modifiactions"
                    className="text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
                  >
                    Modifications
                  </Link>
                  <img
                    src="/images/breadcrumb-arrow.webp"
                    className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                    width="6"
                    height="11"
                    alt="Arrow Icon"
                  />
                  <Link
                    href="/projects"
                    className="text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
                  >
                    Projects
                  </Link>
                  <img
                    src="/images/breadcrumb-arrow.webp"
                    className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                    width="6"
                    height="11"
                    alt="Arrow Icon"
                  />
                  <span className="text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
                    {title}
                  </span>
                </p>
              </div>
              <h1 className="font-[200] text-[4.5rem] [&>b]:font-[400] leading-[1.2] tracking-[-0.2rem] lg:text-[5rem] 1xl:text-[6rem] 1xl:tracking-[-0.4rem] 2xl:text-[6.3rem] 3xl:text-[7.5rem] 2xl:tracking-[-0.5rem] [&>br]:hidden">
                {title.split(" ")[0]} <br /> <b>{title.split(" ").slice(1).join(" ")}</b>
              </h1>
            </div>
            <div className="w-full lg:w-[42%] border-t border-[#ddd] pt-[4rem] lg:border-none lg:pt-0">
              <h3 className="text-[2.2rem] mb-[1rem] text-center lg:text-left xl:text-[3.5rem] 1xl:text-[3.9rem] 2xl:text-[4.2rem] 3xl:text-[4.5rem] 3xl:mb-[2rem]">
                Work Done
              </h3>
              <ul className="flex flex-wrap justify-center mx-[-5px] lg:justify-start">
                {workList.map((work, index) => (
                  <li
                    key={index}
                    className="text-[1.3rem] px-[15px] py-[5px] bg-[#F2F2F2] rounded-full border border-[#D2D2D2] my-[6px] mx-[5px] xl:py-[6px] xl:px-[18px] xl:text-[1.6rem] 1xl:text-[1.7rem] 2xl:text-[1.8rem] 3xl:text-[2.2rem] 2xl:px-[23px] 3xl:px-[27px]"
                  >
                    {work}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
