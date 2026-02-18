import React from "react";

const data = [
  {
    image: "/images/associates/sneak-img-6.webp",
  },
  {
    image: "/images/associates/sneak-img-7.webp",
  },
  {
    image: "/images/associates/sneak-img-8.webp",
  },
  {
    image: "/images/associates/sneak-img-9.webp",
  },
  {
    image: "/images/associates/sneak-img-10.webp",
  },
  {
    image: "/images/associates/sneak-img-11.webp",
  },
  {
    image: "/images/associates/sneak-img-12.webp",
  },
  {
    image: "/images/associates/sneak-img-13.webp",
  },
  {
    image: "/images/associates/sneak-img-1.webp",
  },
  {
    image: "/images/associates/sneak-img-2.webp",
  },
  {
    image: "/images/associates/sneak-img-3.webp",
  },
  {
    image: "/images/associates/sneak-img-4.webp",
  },
  // {
  //   image: "/images/associates/sneak-img-5.webp",
  // }
];

const SneakPeak = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[10rem] 1xl:py-[12rem] 3xl:py-[16rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-end">
            <div className="text-center lg:w-[50%] lg:text-left">
              <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem]  [&>br]:hidden text-black md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
                our events & <br /> collaborations <b>sneak peek!</b>
              </h2>
              <p className="font-light text-[1.2rem] leading-[1.5] mt-[2rem] [&>b]:font-medium lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0]">
                At each progression without a doubt Directly from the time you
                enter the <b>paradise of extravagance vehicles,</b> rubberneck
                at the most loved pick of the parcel, steer away the difficulty
                runs and choke your pre cherished or new first light adored
                outlandish home.
              </p>
            </div>
            <div className="lg:w-max lg:ml-auto">
              <ul className="flex items-center mt-[3rem] justify-end">
                <li>
                  <a href="https://instagram.com/bigboytoyz_india" className={styles.socialItem} target="_blank">
                    <div className={styles.socialIconWrapper}>
                      <img
                        src="/images/associates/insta-icon-white.webp"
                        alt=""
                        className={styles.socialIconImg}
                      />
                    </div>
                    <p className={styles.socialTitle}>Bigboytoyz_india</p>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/BBToyz" className={styles.socialItem} target="_blank">
                    <div className={styles.socialIconWrapper}>
                      <img
                        src="/images/associates/fb-icon-white.webp"
                        alt=""
                        className={styles.socialIconImg}
                      />
                    </div>
                    <p className={styles.socialTitle}>BBToyz</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="masonry sm:masonry-sm md:masonry-md 3xl:masonry-3xl mt-[5rem] 3xl:mt-[8rem]">
            {data.map((item, index) => (
              <div
                className="rounded-[1rem] break-inside mb-[2rem] group 1xl:mb-[4rem] 3xl:rounded-[1.5rem] overflow-hidden"
                key={index}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full object-cover h-auto transition-all duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default SneakPeak;

const styles = {
  socialItem:
    "flex items-center py-[0.7rem] px-[1rem] rounded-[3rem] bg-[#F3F3F3] min-w-[13rem] mr-[1rem] md:mr-0 md:ml-[1.5rem] 1xl:pr-[2.5rem] 3xl:min-w-[19.8rem] 3xl:py-[1rem] 3xl:px-[1.5rem] 3xl:pr-[3rem]",
  socialIconWrapper:
    "bg-black flex items-center justify-center w-[3rem] h-[3rem] rounded-[50%] p-[0.7rem] 3xl:w-[4rem] 3xl:h-[4rem]",
  socialIconImg: "w-full h-auto object-contain max-h-[1.6rem] 3xl:max-h-[1.95rem]",
  socialTitle: "font-light text-[1.3rem] flex-[1] pl-[1rem] 1xl:text-[1.5rem] 3xl:text-[2rem]",
  paginationList:
  "w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer group border border-[#555555]  bg-transparent rounded-[8px] m-[0.5rem] hover:bg-[#161616] xl:w-[5rem] xl:h-[5rem] xl:rounded-[1.2rem] 2xl:w-[6.2rem] 2xl:h-[6.2rem] 2xl:rounded-[1.6rem] 3xl:w-[8.2rem] 2xl:m-[1rem] 3xl:h-[8.2rem] 3xl:rounded-[2rem]",
paginationBtn:
  "bg-transparent border-0 outline-none w-full h-full p-[5px] flex justify-center items-center text-[#333333] group-hover:text-[#fff] transition-all duration-500 text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.6rem] 3xl:text-[2rem] font-medium",
};
