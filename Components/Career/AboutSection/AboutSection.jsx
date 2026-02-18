import React from "react";

const usps = [
  {
    title: "150<span>+</span>",
    description: "Employees at BBT",
  },
  {
    title: "15<span>+</span>",
    description: "Years of Dealing Car",
  },
  {
    title: "7600<span>+</span>",
    description: "Satisfied Customers",
  },
];

const AboutSection = () => {
  return (
    <section className="py-[6rem] bg-[#F6F6F6] md:py-[8rem] lg:py-[10rem] xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="md:flex md:justify-between">
            <div className="md:flex-[1] md:pr-[3rem]">
              <h2 className="font-light leading-[1.2] tracking-tighter text-center md:text-left [&>br]:hidden text-black md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
                Accelerate Your Career <br /> with <b>Big Boy Toyz!</b>
              </h2>
            </div>
            <div className="mt-[4rem] hidden md:inline-block w-max md:mt-0">
              <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="inline-block w-[5rem]  object-contain  invert xl:w-[8.5rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem]"
              />
            </div>
          </div>
          <div className="flex flex-wrap md:mt-[6rem]">
            <div className="mt-[4rem] w-full max-w-[420px] mx-auto md:ml-0 md:w-[40%] md:mt-0 xl:w-[45%] xl:ml-0 xl:max-w-none 1xl:w-[47%]">
              <img
                src="/images/career/about-thumb.webp"
                alt="Featured Image"
                className="w-full object-cover h-auto rounded-[2rem]"
              />
            </div>
            <div className="w-full md:w-[50%] xl:w-[47%] 1xl:w-[45%]">
              <div className="mt-[4rem] w-full md:mt-0">
                <p className="text-[1.2rem] text-center md:text-left xl:text-[1.3rem] 1xl:text-[1.4rem] 2xl:text-[1.48rem] 3xl:text-[1.9rem] font-light">
                  Do terms like 'horsepower,' 'downforce,' or 'carbon fiber
                  monocoque' excite you? At Big Boy Toyz, we understand that a
                  true car enthusiast feels the thrill behind these technical
                  jargons.
                  <br />
                  <br />
                  Imagine working with supercars where every detail matters,
                  from engines with immense power to fascinating aerodynamic
                  designs that set new standards for speed and performance.
                  Here, your passion for cars meets a dynamic team of
                  like-minded individuals.
                  <br />
                  <br />
                  Join our team and be part of a world where your love for
                  technical precision and high-performance vehicles meets
                  unmatched career opportunities. If you live and breathe cars,
                  this is the place for you. Let’s drive the future together!
                </p>
              </div>
              <div className=" mt-[5rem] 1xl:mt-[7rem] 3xl:mt-[9rem]">
                <ul className="grid grid-cols-2 gap-x-[2rem] gap-y-[2rem] sm:grid-cols-3">
                  {usps.map((usp, index) => (
                    <li
                      key={index}
                      className="px-[1rem] sm:px-[3rem] md:pl-0 lg:border-0 lg:p-0"
                    >
                      <h3
                        className="text-[3rem] flex items-start [&>span]:text-[2rem] leading-[1.2] sm:text-[4rem] sm:[&>span]:text-[3rem] font-normal xl:text-[5rem] xl:[&>span]:text-[4rem] 1xl:text-[6rem] 1xl:[&>span]:text-[4rem] 1xl:tracking-tight 3xl:text-[7.5rem] 3xl:[&>span]:text-[6rem] [&>span]:font-light xl:leading-[1.1]"
                        dangerouslySetInnerHTML={{ __html: usp.title }}
                      ></h3>
                      <p className="text-[1.2rem] font-medium xl:text-[1.3rem] 1xl:text-[1.4rem] 3xl:text-[1.9rem]">
                        {usp.description}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-[4rem] xl:mt-[6rem] 1xl:mt-[8rem]">
                  <div className="flex items-start md:mt-[2rem] xl:mt-0">
                    <img
                      src="/images/team/team-quote-icon-black.png"
                      alt="Quote Icon"
                      className="h-auto object-contain w-[2.19rem] mt-[0.5rem] xl:w-[3rem] 3xl:w-[4.3rem]"
                    />
                    <p className="flex-1 ml-[1rem] underline text-[1.5rem] leading-[1.4] xl:text-[2.3rem] 1xl:text-[2.9rem] 3xl:text-[3.4rem] 3xl:ml-[2rem]">
                     Join us in leading the global transformation of the automotive landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
