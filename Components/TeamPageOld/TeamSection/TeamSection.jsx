"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const styles = {
  tabMenu:
    "text-center text-[1.2rem] border border-[#D2D2D2] rounded-[3rem] leading-[1] px-[1.6rem] py-[0.7rem] block mr-[0.6rem] mt-[0.8rem] xl:text-[1.4rem] xl:px-[2rem] xl:py-[1rem] xl:mx-[0.7rem] 1xl:text-[1.6rem] 2xl:text-[1.8rem] 2xl:px-[2.3rem] 2xl:py-[1.2rem] 3xl:text-[2.19rem] 3xl:px-[2.8rem] 3xl:py-[1.7rem] 3xl:mx-[0.8rem]",
  teamMemberItem:
    "grid grid-cols-2 auto-rows-fr gap-[2rem] md:grid-cols-3 lg:grid-cols-4 xl:gap-[3.5rem] xl:[&_img]:max-h-[26rem] 1xl:[&_img]:max-h-[30rem] 2xl:[&_img]:max-h-[32rem] 3xl:xl:gap-[5.5rem] 3xl:[&_img]:max-h-[39.5rem]",
  teamMemberTitle:
    "text-[1.5rem] tracking-[-0.5px] font-medium xl:text-[2rem] xl:tracking-[-1px] 1xl:text-[2.3rem] 2xl:text-[2.5rem] 3xl:text-[3rem]",
  teamMemberSub:
    "font-light text-[1.1rem] mt-[0.2rem] xl:text-[1.35rem] 1xl:text-[1.5rem] 2xl:text-[1.7rem] 3xl:text-[2rem]",
};

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  prevArrow: "",
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "3%",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#F4F4F1] py-[5rem] sm:py-[8rem] md:pb-[12rem] lg:pb-[15rem]  1xl:pb-[18rem] 3xl:pt-[12rem]">
      <div className="max-1920">
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h3 className="titleWithLine mobileLine hidden md:block">
              <span className="bg-[#F4F4F1] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[3rem] xl:pr-[4rem] 1xl:text-[3.7rem] 3xl:text-[4.5rem]">
                Meet The Team
              </span>
            </h3>
            <h2 className="font-light [&>b]:font-normal leading-[1.1] tracking-[-1.2px] md:hidden">
              The <b>Team</b>
            </h2>
            <div className="md:mt-[2rem] xl:mt-[4rem] 2xl:mt-[6rem] 3xl:mt-[7rem]">
              <p className="font-light text-[1.2rem] leading-[1.4] mt-[1rem] [&>br]:hidden md:text-center md:text-[2rem] md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1] 2xl:text-[4.6rem] 3xl:text-[5.9rem] 3xl:leading-[1.1]">
                We believe that without the key <br /> value of{" "}
                <b>our people.</b>
              </p>

              <div>
                <ul className="flex flex-wrap mt-[1.5rem] md:justify-center 1xl:mt-[3rem] 3xl:mt-[5rem]">
                  <li onClick={() => handleTabChange(`tab-1`)}>
                    <a
                      href="#loanFinance"
                      className={`${styles.tabMenu} ${
                        activeTab === `tab-1`
                          ? " bg-black text-white"
                          : " text-black"
                      }`}
                    >
                      Loan & Finance
                    </a>
                  </li>
                  <li onClick={() => handleTabChange(`tab-2`)}>
                    <a
                      href="#accountsTeam"
                      className={`${styles.tabMenu} ${
                        activeTab === `tab-2`
                          ? " bg-black text-white"
                          : " text-black"
                      }`}
                    >
                      Accounts
                    </a>
                  </li>
                  <li onClick={() => handleTabChange(`tab-3`)}>
                    <a
                      href="#afterSales"
                      className={`${styles.tabMenu} ${
                        activeTab === `tab-3`
                          ? " bg-black text-white"
                          : " text-black"
                      }`}
                    >
                      After Sales
                    </a>
                  </li>
                  <li onClick={() => handleTabChange(`tab-4`)}>
                    <a
                      href="#marketingTeam"
                      className={`${styles.tabMenu} ${
                        activeTab === `tab-4`
                          ? " bg-black text-white"
                          : " text-black"
                      }`}
                    >
                      Marketing
                    </a>
                  </li>
                  <li onClick={() => handleTabChange(`tab-5`)}>
                    <a
                      href="#salesTeam"
                      className={`${styles.tabMenu} ${
                        activeTab === `tab-5`
                          ? " bg-black text-white"
                          : " text-black"
                      }`}
                    >
                      Sales
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Loan & Finance */}
          <div
            id="loanFinance"
            className="mt-[5rem] 1xl:mt-[7rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] xl:text-[2.8rem] 1xl:text-[3.05rem] 2xl:text-[3.4rem] 3xl:text-[4.2rem] xl:mb-[4rem]">
              Loans & Finance Team
            </h3>
            <div className={styles.teamMemberItem}>
              <div>
                <img
                  src="/images/team-page/lf-img-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
                  <p className={styles.teamMemberTitle}>
                    Mohd. Danish Siddique
                  </p>
                  <p className={styles.teamMemberSub}>Loan & Finance</p>
                </div>
              </div>

              <div>
                <img
                  src="/images/team-page/lf-img-2.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
                  <p className={styles.teamMemberTitle}>Ajay Khirwar</p>
                  <p className={styles.teamMemberSub}>Head - Finance & Loans</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accounts Team */}
          <div
            id="accountsTeam"
            className="mt-[10rem] xl:mt-[12rem] 1xl:mt-[14rem] 3xl:mt-[10rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] xl:text-[2.8rem] 1xl:text-[3.05rem] 2xl:text-[3.4rem] 3xl:text-[4.2rem] xl:mb-[4rem]">
              Accounts Team
            </h3>
            <div className={styles.teamMemberItem}>
              <div>
                <img
                  src="/images/team-page/accounts-img-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
                  <p className={styles.teamMemberTitle}>Suraj Mandal</p>
                  <p className={styles.teamMemberSub}>Accounts</p>
                </div>
              </div>

              <div>
                <img
                  src="/images/team-page/accounts-img-2.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
                  <p className={styles.teamMemberTitle}>Thersiamma Jhony</p>
                  <p className={styles.teamMemberSub}>Head - Accounts</p>
                </div>
              </div>
            </div>
          </div>

          {/* After Sales */}
          <div
            id="afterSales"
            className="mt-[10rem] xl:mt-[12rem] 1xl:mt-[14rem] 3xl:mt-[10rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] xl:text-[2.8rem] 1xl:text-[3.05rem] 2xl:text-[3.4rem] 3xl:text-[4.2rem] xl:mb-[4rem]">
              After Sales
            </h3>
            <div className={styles.teamMemberItem}>
              <div>
                <img
                  src="/images/team-page/after-sales-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
                  <p className={styles.teamMemberTitle}>Mukesh Kumar</p>
                  <p className={styles.teamMemberSub}>After Sales</p>
                </div>
              </div>

              <div>
                <img
                  src="/images/team-page/after-sales-2.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
                  <p className={styles.teamMemberTitle}>Vikram Singh Dhaiya</p>
                  <p className={styles.teamMemberSub}>
                    HOD - After Sales & Service
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing */}
          <div
            id="marketingTeam"
            className="mt-[10rem] xl:mt-[12rem] 1xl:mt-[14rem] 3xl:mt-[10rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] xl:text-[2.8rem] 1xl:text-[3.05rem] 2xl:text-[3.4rem] 3xl:text-[4.2rem] xl:mb-[4rem]">
              Marketing Team
            </h3>
            <div className={styles.teamMemberItem}>
              <div>
                <img
                  src="/images/team-page/marketing-img-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
                  <p className={styles.teamMemberTitle}>Amit Kumar Das</p>
                  <p className={styles.teamMemberSub}>SR. Visual Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sales Team */}
        <div
          id="salesTeam"
          className=" mt-[10rem] xl:mt-[12rem] 1xl:mt-[14rem] 3xl:mt-[10rem]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] xl:text-[2.8rem] 1xl:text-[3.05rem] 2xl:text-[3.4rem] 3xl:text-[4.2rem] xl:mb-[4rem] pl-[2rem] md:pl-[4.5%] lg:pl-[8.5%]">
            Sales Team
          </h3>

          {/* For Desktop */}
          <div className="hidden md:block container">
            <div className={styles.teamMemberItem}>
              <div>
                <img
                  src="/images/team-page/sales-img-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
                  <p className={styles.teamMemberTitle}>Steven Sweeney</p>
                  <p className={styles.teamMemberSub}>Business Head - West</p>
                </div>
              </div>
              <div>
                <img
                  src="/images/team-page/sales-img-2.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
                  <p className={styles.teamMemberTitle}>Anchal Kundra</p>
                  <p className={styles.teamMemberSub}>GM Sales - North</p>
                </div>
              </div>
              <div>
                <img
                  src="/images/team-page/sales-img-3.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
                  <p className={styles.teamMemberTitle}>Dharam Vora</p>
                  <p className={styles.teamMemberSub}>Executive Sales</p>
                </div>
              </div>
            </div>
          </div>

          {/* For Mobile */}
          <div className="sales-team-slider [&_.slick-track]:flex [&_.slick-slide]:h-[inherit] pl-[1rem] md:hidden">
            <Slider {...settings}>
              <div className="pr-[2rem]">
                <img
                  src="/images/team-page/sales-img-1.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Steven Sweeney
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    Business Head - West
                  </p>
                </div>
              </div>
              <div className="pr-[2rem]">
                <img
                  src="/images/team-page/sales-img-2.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Anchal Kundra
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    GM Sales - North
                  </p>
                </div>
              </div>
              <div className="pr-[2rem]">
                <img
                  src="/images/team-page/sales-img-3.webp"
                  alt="Team member"
                  className="w-full object-cover h-full block"
                />
                <div className="mt-[0.8rem]">
                  <p className="text-[1.5rem] tracking-[-0.5px] font-medium">
                    Dharam Vora
                  </p>
                  <p className="font-light text-[1.1rem] mt-[0.2rem]">
                    Executive Sales
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
