"use client";
import React, { useState } from "react";

const tabs = [
  "Understanding Fixed Price Policy",
  "Some of the Rebuttals",
  "Benefits to Customers",
  "Advantages",
  "Disadvantages",
];

const FixedPriceContent = () => {
  const [activeTab, setActiveTab] = useState("checkPoint-1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex justify-between relative items-start flex-wrap">
            <div className="w-full lg:w-[23%] relative xl:h-full xl:sticky xl:top-[3rem] xl:left-0">
              <p className="text-black text-[3rem] font-medium leading-[1.2] text-center lg:text-left lg:text-[1.35rem] xl:tracking-[-0.2px] xl:text-[1.45rem] lg:leading-[1.3] 1xl:text-[1.6rem] 2xl:text-[1.75rem] 3xl:text-[2.2rem] 3xl:tracking-[-0.5px] [&>br]:hidden lg:[&>br]:block">
                Reliable Fixed Pricing Since <br /> February 2014
              </p>

              <div>
                <ul className="flex flex-wrap mt-[2rem] justify-center lg:justify-start xl:flex-col xl:mt-[3rem] 3xl:mt-[5rem]">
                  {tabs.map((tab, index) => (
                    <li
                      onClick={() =>
                        handleTabChange(`policySection-${index + 1}`)
                      }
                      key={index}
                      className="lg:w-full"
                    >
                      <a
                        href={`#policySection-${index + 1}`}
                        className={`${styles.tabMenu} ${
                          activeTab === `policySection-${index + 1}`
                            ? " bg-black text-white lg:bg-black"
                            : " text-black"
                        }`}
                      >
                        {tab}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-[72%] text-[#040404]">
              <div
                className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem] 3xl:mt-[6rem]"
                id="policySection-1"
              >
                <h3 className={styles.sectionTitle}>
                  Understanding Fixed Price Policy
                </h3>
                <div className={`mt-[3rem]`}>
                  <h4 className="text-[1.7rem] mb-[2rem] xl:text-[2rem] xl:tracking-tighter 1xl:text-[2.4rem] 3xl:text-[3rem] font-normal">
                    1. Fixed Price Policy at BBT refers to Cost plus Pricing The
                    selling price of a car at BBT is determined by the following
                    2 steps
                  </h4>
                  <ul className={styles.unorderedList}>
                    <li>Cost of Procuring the Vehicle</li>
                    <li>
                      5-7% Operating Margin (depending on vehicle make and
                      model)
                    </li>
                  </ul>
                </div>
                <div className="mt-[3rem]">
                  <h4 className="text-[1.7rem] mb-[2rem] xl:text-[2rem] xl:tracking-tighter 1xl:text-[2.4rem] 3xl:text-[3rem] font-normal">
                    1. The addition of the above given costs results in the
                    selling price or the retail price of the vehicle. We are
                    here to help the customer understand how standardisation and
                    fixing of costs would help them more rather than us.
                  </h4>
                </div>
              </div>

              <div
                className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem] 3xl:mt-[6rem]"
                id="policySection-2"
              >
                <h3 className={styles.sectionTitle}>Some of the Rebuttals</h3>
                <div className="mt-[2rem] text-[#040404] xl:mt-0">
                  <ol className={styles.orderedList}>
                    <li>
                      We don't believe in Brands , but "we believe in Quality
                      and quality has one definition".
                    </li>
                    <li>We sell quality not price.</li>
                    <li>
                      Life isn't about finding yourself. Life is about creating
                      yourself.
                    </li>
                    <li>
                      Too many people overvalue what they are not and undervalue
                      what they are.
                    </li>
                  </ol>
                </div>
              </div>

              <div
                className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem] 3xl:mt-[6rem]"
                id="policySection-3"
              >
                <h3 className={styles.sectionTitle}>Benefits to Customers</h3>
                <div className="mt-[2rem] text-[#040404] xl:mt-0">
                  <ol className={styles.orderedList}>
                    <li>
                      Insulation from market fluctuations: The price risk is
                      with us and not with the customer.
                    </li>
                    <li>
                      Certainty of final price: With the exact price in front of
                      the customer, they can do budgeting accordingly.
                    </li>
                    <li>No Hidden Charges.</li>
                    <li>
                      Consistency in top quality and exceptional customer
                      services.
                    </li>
                  </ol>
                </div>
              </div>

              <div
                className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem] 3xl:mt-[6rem]"
                id="policySection-4"
              >
                <h3 className={styles.sectionTitle}>Advantages</h3>
                <div className="mt-[2rem] text-[#040404] xl:mt-0">
                  <ol className={styles.orderedList}>
                    <li>Simplicity</li>
                    <li>Transparency</li>
                    <li>Predictability</li>
                    <li>Fast Feedback</li>
                    <li>
                      Increase in Efficiency & Decision Making Power amongst
                      Sales Employees
                    </li>
                    <li>
                      Increase of Confidence in Quality by both Employees and
                      Customers
                    </li>
                    <li>
                      Product is strategically priced taking into consideration
                      the operating cost, fluctuation in the industry and
                      demand.
                    </li>
                    <li>Pull Factor Pricing</li>
                  </ol>
                </div>
              </div>

              <div
                className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem] 3xl:mt-[6rem]"
                id="policySection-5"
              >
                <h3 className={styles.sectionTitle}>Disadvantages</h3>
                <div className="mt-[2rem] text-[#040404] xl:mt-0">
                  <ol className={styles.orderedList}>
                    <li>
                      The current clients and referrals may find it difficult to
                      adapt.
                    </li>
                    <li>
                      Accuracy is critical component in Cost plus Pricing/Fixed
                      Price Policy. This model relies on variable costs such as
                      logistics, insurance, car servicing and other such
                      factors, and fixed costs i.e. buying cost. If either of
                      these estimates is inaccurate then the entire cost
                      structure is incorrect
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedPriceContent;

const styles = {
  tabMenu:
    "text-center text-[1.2rem] text-black border border-[#D2D2D2] rounded-[3rem] leading-[1] px-[1.6rem] py-[0.7rem] block mr-[0.6rem] mt-[0.8rem] xl:text-[1.4rem] xl:px-[1rem] xl:py-[1rem] xl:mx-[0.7rem] xl:mb-[0.6rem] lg:bg-[#F4F4F1] 1xl:text-[1.45rem] 1xl:py-[1.2rem] 2xl:text-[1.6rem] xl:tracking-tight 3xl:text-[2rem] 3xl:py-[1.7rem] 3xl:mx-[0.8rem] 3xl:mb-[1rem]",
  sectionTitle:
    "mb-[2rem] xl:mb-[3rem] tracking-[-2px] xl:tracking-[-1px] 1xl:text-[3.3rem] 2xl:text-[3.5rem] 3xl:text-[4.5rem] 3xl:tracking-[-2px]",
  unorderedList:
    "[&_li]:mb-[1rem] [&_li]:pl-[1.7rem] [&_li]:text-[1.2rem] [&_li]:relative [&_li]:before:content-[''] [&_li]:before:w-[1rem] [&_li]:before:h-[1rem] [&_li]:before:rounded-full [&_li]:before:border-[3px] [&_li]:before:border-[#4E4E4E] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.5rem]  xl:[&_li]:text-[1.35rem] 1xl:[&_li]:text-[1.45rem] 3xl:[&_li]:text-[2rem] 2xl:[&_li]:text-[1.55rem] 2xl:[&_li]:before:w-[1.2rem] 2xl:[&_li]:before:h-[1.2rem] 2xl:[&_li]:before:border-[3.5px] 2xl:[&_li]:pl-[2rem] 3xl:[&_li]:before:w-[1.5rem] 3xl:[&_li]:before:h-[1.5rem] 3xl:[&_li]:pl-[2.5rem] 3xl:[&_li]:mb-[2rem]",
  orderedList:
    "list-decimal pl-[2rem] text-[1.4rem] [&>li]:py-[0.5rem] xl:[&>li]:py-[0.8rem] xl:text-[1.7rem] 1xl:text-[1.8rem] 2xl:text-[2rem] 3xl:text-[2.5rem] xl:[&>li]:tracking-tighter 3xl:pl-[3rem]",
  accordionHeader:
    "flex justify-between relative items-center w-full md:py-[1rem] 1xl:py-[2rem]",
  accordionTitle:
    "flex-[1] pr-[20px] xl:pr-[30px] 3xl:pr-[40px] text-[1.7rem] xl:text-[2rem] xl:tracking-tighter 1xl:text-[2.4rem] 2xl:text-[2.5rem] 3xl:text-[3rem] font-normal",
  accordionIconBox:
    "w-[10px] h-[10px] flex justify-center items-center xl:w-[18px] xl:h-[18px] 1xl:w-[22px] 1xl:h-[22px] 3xl:w-[30px] 3xl:h-[30px] relative",
  accordionPlus:
    "w-[1px] h-full inline-block bg-black absolute top-0 left-[4.5px] xl:left-[9px] 1xl:left-[10px] 3xl:left-[14px]",
};
