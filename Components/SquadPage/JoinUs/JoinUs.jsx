"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const styles = {
  listStyle:
    "flex flex-wrap items-center py-[1.8rem] border-t border-[#D9D9D9] last-of-type:border-b md:first-of-type:border-t-0 md:last-of-type:border-b-0 2xl:py-[2rem] 3xl:py-[2.5rem]",
  iconStyle:
    "usp-icon w-[7.94rem] h-[7.94rem] rounded-[50%] bg-white flex justify-center items-center p-[2.2rem] xl:w-[8.5rem] xl:h-[8.5rem] 1xl:w-[10rem] 1xl:h-[10rem] 1xl:p-[3.2rem] 2xl:w-[10.5rem] 2xl:h-[10.5rem] 3xl:w-[13.3rem] 3xl:h-[13.3rem] 3xl:p-[4rem]",
  textStyle:
    "flex-1 font-light [&>b]:font-normal text-[1.8rem] pl-[1.5rem] tracking-[-0.02rem] leading-[1.3] xl:text-[1.6rem] 1xl:text-[1.8rem] xl:[&>br]:hidden 2xl:pl-[1.8rem] 2xl:text-[1.9rem] 3xl:text-[2.4rem] 3xl:pl-[2.5rem]",
};

const JoinUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#F3F3F3] py-[6rem] md:py-[10rem] 1xl:py-[12rem] 2xl:py-[14rem] 3xl:py-[16rem]">
      <div className="max-1920">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <p className="uppercase text-center text-[1.12rem] mb-[1.5rem] md:hidden">
            Join us Now
          </p>
          <h2 className=" hidden md:block titleWithLine mobileLine text-left 1xl:tracking-[-0.2rem]  xl:pb-[0.5rem]">
            <span className="bg-[#F3F3F3] inline-block relative z-10  md:pr-10 xl:text-[3rem] xl:pr-[4rem] xl:tracking-tight 1xl:text-[3.5rem] 2xl:text-[4rem] 3xl:text-[4.5rem] 3xl:tracking-[-3px]">
              Join Us
            </span>
          </h2>
          <h2 className=" font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.05rem] mb-[2rem] md:hidden ">
            Join The <b>Best Team</b> <br /> of Car Enthusiast.
          </h2>
          <div className="sm:max-w-[410px] sm:mx-auto md:max-w-none md:flex md:flex-wrap md:justify-between md:flex-row-reverse md:mt-[4rem] 1xl:mt-[5rem] 3xl:mt-[8rem]">
            <div className="join-us-usp md:w-[45%] lg:w-[34%]">
              <ul>
                <li className={styles.listStyle}>
                  <div className={styles.iconStyle}>
                    <img
                      src="/images/bbt-squad/squad-join-usp-1.webp"
                      alt="USP Icon"
                      className="w-full object-contain h-auto"
                      width="37"
                      height="37"
                    />
                  </div>
                  <p className={styles.textStyle}>
                    Connect: Virtual Interviews and <b>Onboarding BBT Squad</b>
                  </p>
                </li>
                <li className={styles.listStyle}>
                  <div className={styles.iconStyle}>
                    <img
                      src="/images/bbt-squad/squad-join-usp-2.webp"
                      alt="USP Icon"
                      className="w-full object-contain h-auto"
                      width="37"
                      height="37"
                    />
                  </div>
                  <p className={styles.textStyle}>
                    Freelance with BBT <br />
                    in a Business <b>Development Job Role</b>
                  </p>
                </li>
                <li className={styles.listStyle}>
                  <div className={styles.iconStyle}>
                    <img
                      src="/images/bbt-squad/squad-join-usp-3.webp"
                      alt="USP Icon"
                      className="w-full object-contain h-auto"
                      width="37"
                      height="37"
                    />
                  </div>
                  <p className={styles.textStyle}>
                    Get Paid For Every <b>Transaction Closed</b>
                  </p>
                </li>
              </ul>
            </div>
            <div className="join-us-text text-center mt-[3rem] md:w-[52%] md:text-left">
              <h2 className=" font-light [&>b]:font-normal leading-[1.1] tracking-[-0.05rem] mb-[2rem] hidden md:block 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] 2xl:mb-[2.5rem]">
                Join the best team <br /> of <b> car enthusiast.</b>
              </h2>
              <p className="font-light text-[1.2rem] px-[1.2rem] mb-[2rem] md:px-0 md:mb-[3rem] xl:mb-[1rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem]">
                At BBT, we strive to provide the quickest and most hassle free
                car selling service available. Getting a great deal on the
                client’s vehicle can often be tricky to do by themselves, here
                the BBT Squad comes into picture and connects us to value their
                vehicle based on its condition and current market value.
              </p>
              <p className="font-light text-[1.2rem] px-[1.2rem] mb-[2rem] md:px-0 md:mb-[3rem] hidden xl:block 1xl:mb-[4rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] 2xl:mb-[5rem]">
                You can grow with us by expanding your existing freelance and
                agency relationships by working across PAN India, furthermore to
                improve accessibility one can firm their presence on various
                social media platforms on behalf of us. Our target is to
                simplify processing to succeed.
              </p>
              <Link
                href="/career"
                className="w-full flex text-center justify-center items-center bg-black border border-black text-white rounded-[3rem] font-normal text-[1.4rem] py-[1.5rem] px-[2rem] md:max-w-[27rem] lg:max-w-none lg:w-max lg:px-[5rem] lg:py-[1.2rem] 1xl:px-[6rem] 2xl:py-[1.4rem] 2xl:xl:px-[7rem] 3xl:h-[6.5rem] 3xl:text-[1.8rem] 3xl:px-[8rem] 3xl:rounded-[3.5rem] hover:bg-[#f1f1f1] hover:text-black transition-all duration-500 ease-in-out"
              >
                Join Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
