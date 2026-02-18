"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { faqs } from "../../../../public/realty/data/dummyData";

const styles = {
  tabMenu:
    "text-center text-[1.2rem] border border-[#D2D2D2] rounded-[3rem] leading-[1] px-[1.6rem] py-[0.7rem] block mr-[0.6rem] mt-[0.8rem] xl:text-[1.3rem] xl:px-[1rem] xl:py-[1rem] xl:mx-[0.7rem] xl:mb-[0.6rem] xl:bg-[#F4F4F1] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 2xl:px-[2.3rem] 2xl:py-[1.2rem] 3xl:text-[2rem] 3xl:py-[1.7rem] 3xl:mx-[0.8rem] 3xl:mb-[1rem]",
};

const FaqMain = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [open, setOpen] = React.useState("");

  const handleOpen = (value) => setOpen(open === value ? "" : value);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="bg-white py-[6rem] lg:py-[10rem] xl:py-[14rem]">
      <div className="max-1920 ">
        <div className="container"
          data-aos="fade-up" 
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          {faqs.length > 0 ? (
            <div className="flex justify-between items-start flex-wrap">
              {/* <div className="w-full lg:w-[22%] xl:w-[17%]">
                <p className="text-black text-[3rem] font-medium leading-[1.2] text-center lg:text-left lg:text-[1.35rem] xl:tracking-[-0.2px] 1xl:text-[1.51rem] 2xl:text-[1.6rem] 3xl:text-[2.2rem] 3xl:tracking-[-0.5px]">
                  Choose a category to find the answers you’re looking for
                </p>

                <div>
                  <ul className="flex flex-wrap mt-[2rem] justify-center lg:justify-start xl:flex-col xl:mt-[3rem] 3xl:mt-[5rem]">
                    {faqs.map((faq, index) => (
                      <li
                        onClick={() => handleTabChange(`tab-${index + 1}`)}
                        key={index}
                        className="lg:w-full"
                      >
                        <a
                          href={`#${faq.title
                            .replace(/\s/g, "")
                            .toLowerCase()}`}
                          className={`${styles.tabMenu} ${
                            activeTab === `tab-${index + 1}`
                              ? " bg-black text-white xl:bg-black"
                              : " text-black"
                          }`}
                        >
                          {faq.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
              <div className="w-full lg:w-[100%] xl:w-[100%]">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    id={faq.title.replace(/\s/g, "").toLowerCase()}
                    className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem]"
                  >
                    <h3 className="mb-[2rem] xl:mb-[4rem] tracking-[-2px] 2xl:text-[3.5rem] 3xl:text-[4.5rem]">{faq.title}</h3>
                    {faq.faqs.map((item, itemIndex) => (
                      <div className=" [&>*:nth-child(1)]:border-t [&>*:nth-child(1)]:border-t-[#ddd]"   key={itemIndex}>
                        <Accordion
                          open={
                            open ===
                            `${faq.title.replace(/\s/g, "").toLowerCase()}-${
                              itemIndex + 1
                            }`
                          }
                        
                          className="border-b border-b-[#ddd]"
                        >
                          <AccordionHeader
                            onClick={() =>
                              handleOpen(
                                `${faq.title
                                  .replace(/\s/g, "")
                                  .toLowerCase()}-${itemIndex + 1}`
                              )
                            }
                            className="border-0 [&_.ml-4]:hidden"
                          >
                            <div className="pr-[2rem] py-[1rem] relative w-full 3xl:py-[1.7rem]">
                              <p className="text-[1.3rem] font-normal md:text-[1.4rem] lg:font-medium lg:text-[1.5rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[2rem]">
                                {item.question}
                              </p>

                              <div className="absolute right-0 w-[10px] h-[10px] flex justify-center items-center top-[50%] translate-y-[-50%] 1xl:w-[12px] 1xl:h-[12px] 3xl:w-[17px] 3xl:h-[17px]">
                                <span className="w-full h-[1px] inline-block bg-black"></span>
                                <span
                                  className={`w-[1px] h-full inline-block bg-black absolute top-0 left-[4px] 1xl:left-[5.5px] 3xl:left-[8px] opacity-[${
                                    open ===
                                    faq.title.replace(/\s/g, "").toLowerCase() +
                                      "-" +
                                      (itemIndex + 1)
                                      ? "0"
                                      : "1"
                                  }]`}
                                ></span>
                              </div>
                            </div>
                          </AccordionHeader>
                          <AccordionBody >
                            <div className="pr-[2rem] faq-body text-[#161616] text-[1.2rem] [&_li]:my-[0.5rem] [&_ul]:mt-[2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 3xl:text-[1.6rem] xl:pb-[2rem]" dangerouslySetInnerHTML={{__html:item.answer}}>
                              
                            </div>
                          </AccordionBody>
                        </Accordion>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-[7rem] text-center">
              <h2>No FAQ Found!</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqMain;
