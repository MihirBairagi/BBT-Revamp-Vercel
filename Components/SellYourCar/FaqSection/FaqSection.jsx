"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const faqList = [
  {
    question: "What Makes Your Company One of the Top 3 in Luxury Car Sales?",
    answer:
      "We have earned our position among the top 3 luxury car sellers through our extensive selection of premium vehicles, exceptional customer service, and a commitment to quality. Our reputation is built on trust, reliability, and delivering an unparalleled buying experience.",
  },
  {
    question: "How Do You Ensure the Quality of Your Luxury Cars?",
    answer:
      "We have earned our position among the top 3 luxury car sellers through our extensive selection of premium vehicles, exceptional customer service, and a commitment to quality. Our reputation is built on trust, reliability, and delivering an unparalleled buying experience.",
  },
  {
    question: "What Kind of Customer Service Can I Expect?",
    answer:
      "We have earned our position among the top 3 luxury car sellers through our extensive selection of premium vehicles, exceptional customer service, and a commitment to quality. Our reputation is built on trust, reliability, and delivering an unparalleled buying experience.",
  },
  {
    question: "Do You Offer Financing Options for Luxury Car Purchases?",
    answer:
      "We have earned our position among the top 3 luxury car sellers through our extensive selection of premium vehicles, exceptional customer service, and a commitment to quality. Our reputation is built on trust, reliability, and delivering an unparalleled buying experience.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState("");

  const handleOpen = (value) => setOpen(open === value ? "" : value);
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center mb-[5rem] 1xl:mb-[6rem]">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] [&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize sm:[&>br]:block">
              We are among top 3 <br /> company <b>sell luxury car</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              We are proud to be ranked among the top 3 companies in <br /> the
              luxury car sales industry.
            </p>
          </div>

          <div className="xl:w-[74%] xl:mx-auto">
            {faqList.map((item, itemIndex) => (
              <div
                className=" [&>*:nth-child(1)]:border-t [&>*:nth-child(1)]:border-t-[#ddd]"
                key={itemIndex}
              >
                <Accordion
                  open={open === `faq-${itemIndex + 1}`}
                  className="border-b border-b-[#ddd]"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(`faq-${itemIndex + 1}`)}
                    className="border-0 [&_.ml-4]:hidden"
                  >
                    <div className="pr-[2rem] py-[1rem] relative w-full 2xl:py-[1.5rem] 3xl:py-[1.8rem]">
                      <p className="text-[1.3rem] font-normal md:text-[1.4rem] lg:font-medium lg:text-[1.5rem] xl:text-[1.4rem] 1xl:text-[1.6rem] 2xl:text-[1.7rem] 3xl:text-[2rem]">
                        {item.question}
                      </p>

                      <div className="absolute right-0 w-[10px] h-[10px] flex justify-center items-center top-[50%] translate-y-[-50%] 1xl:w-[12px] 1xl:h-[12px] 3xl:w-[17px] 3xl:h-[17px]">
                        <span className="w-full h-[1px] inline-block bg-black"></span>
                        <span
                          className={`w-[1px] h-full inline-block bg-black absolute top-0 left-[4px] 1xl:left-[5.5px] 3xl:left-[8px] opacity-[${
                            open === "faq-" + (itemIndex + 1) ? "0" : "1"
                          }]`}
                        ></span>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div
                      className="pr-[2rem] faq-body text-[#161616] text-[1.2rem] [&_li]:my-[0.5rem] [&_ul]:mt-[2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 3xl:text-[1.6rem] xl:pb-[2rem]"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></div>
                  </AccordionBody>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
