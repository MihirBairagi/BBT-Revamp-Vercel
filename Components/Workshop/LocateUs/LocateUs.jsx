import React from "react";

const LocateUs = () => {
  return (
    <section className="bg-white">
      <div className="max-1920 relative pl-0 xl:pl-[10rem] 3xl:pl-[20rem] py-[5rem] md:py-[8rem] lg:py-0 min-h-[600px]">
        <div>
          <img
            src="/images/workshop/location-map.webp"
            alt="Map Image"
            className="w-full hidden lg:block object-contain h-auto"
          />
        </div>
        <div className="relative lg:absolute lg:top-0 left-0 w-full h-full lg:py-[12rem] 1xl:pt-[14rem] 3xl:py-[18rem]">
          <div className="container">
            <div className="flex flex-wrap max-w-[640px] mx-auto lg:max-w-[unset]">
              <div className="w-full lg:w-[41%] text-center lg:text-left">
                <div className="xl:max-w-[270px] 1xl:max-w-[295px] 2xl:max-w-[300px] 3xl:max-w-[403px]">
                  <img
                    src="/images/down-circle-arrow-white.webp"
                    width="123"
                    height="123"
                    alt="Arrow Icon"
                    className="hidden xl:inline-block object-contain  invert xl:mb-[2rem] 1xl:mb-[3rem] xl:w-[8.5rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem] 3xl:mb-[4rem]"
                  />
                  <h2 className="font-light  leading-[1.4] mt-[1rem] [&>br]:hidden md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
                    Locate Our <br /> <b>Workshop</b>
                  </h2>
                  <p className="font-[300] text-[1.2rem] leading-[1.5] lg:text-[1.1rem] lg:tracking-tight mt-[1rem] xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] [&>b]:font-[500] 3xl:mt-[2rem]">
                    BBT or Big Boy Toyz is a division of Magus Group and is the
                    leading player in the world of pre-owned luxury car segment,
                    which has online presence across pan-India.
                  </p>
                  <div className="w-max mx-auto lg:ml-0 mt-[3rem] xl:mt-[4rem] xl:min-w-[170px] 2xl:min-w-[190px] 3xl:min-w-[240px] 3xl:mt-[6rem]">
                    <a
                      href="https://maps.app.goo.gl/8N3rYCtmjYZGs1eh7"
                      target="_blank"
                      className="bg-black w-full text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] px-[3rem] h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] transition-all duration-500 hover:bg-[#333]"
                    >
                      View On Map
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-[7rem] mx-auto lg:mt-0 lg:ml-[5rem] xl:ml-0 xl:w-[26%] xl:pt-[5rem]">
                <div className="bg-white p-[0.5rem] 1xl:p-[0.8rem] 3xl:p-[1rem] rounded-[1rem] 3xl:rounded-[1.5rem] shadow-xl">
                  <div>
                    <img
                      src="/images/workshop/location-thumb.webp"
                      alt="Location Image"
                      className="w-full block object-cover h-auto"
                    />
                  </div>
                  <div className="px-[2rem] py-[2rem] 3xl:px-[3rem]">
                    <h5 className="xl:text-[1.7rem] 3xl:text-[2.5rem] mb-[1rem] 3xl:mb-[1.5rem]">
                      Big Boy Toyz Workshop
                    </h5>
                    <p className="font-[300] text-[1.2rem] leading-[1.5] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
                      Plot No. 134, Sector 37, Pace City 1, <br /> Gurgaon, Haryana -
                      122001
                    </p>
                    <ul className="mt-[2rem] 3xl:mt-[3rem]">
                        <li className="flex items-center py-[0.6rem] 3xl:py-[0.8rem]">
                            <img src="/images/workshop/phone-icon.webp" alt="Phone Icon" className="w-[1.5rem] 3xl:w-[1.8rem] h-auto object-contain" />
                            <span className="text-[1.2rem] xl:text-[1.1rem] 1xl:text-[1.3rem] xl:tracking-tight 2xl:text-[1.4rem] 3xl:text-[1.6rem] inline-block ml-[1rem]">(+91) 9999 9999 83</span>
                        </li>
                        <li className="flex items-center py-[0.6rem] 3xl:py-[0.8rem]">
                            <img src="/images/workshop/clock-icon.webp" alt="Phone Icon" className="w-[1.5rem] 3xl:w-[1.8rem] h-auto object-contain" />
                            <span className="text-[1.2rem] xl:text-[1.1rem] 1xl:text-[1.3rem] xl:tracking-tight 2xl:text-[1.4rem] 3xl:text-[1.6rem] inline-block ml-[1rem]">We are happy to help (10am to 10pm)</span>
                        </li>
                    </ul>
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

export default LocateUs;
