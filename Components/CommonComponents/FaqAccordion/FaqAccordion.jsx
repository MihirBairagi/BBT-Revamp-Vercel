"use client"
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FaqAccordion = ({ data , index }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <Accordion
     
      open={open === index + 1}
      className="border-b border-b-blue-gray-100 first-of-type:border-t first-of-type:border-t-blue-gray-100"
    >
      <AccordionHeader
        onClick={() => handleOpen(index + 1)}
        className="w-full py-8 border-none xl:py-7 1xl:py-8 2xl:py-9 3xl:py-11"
      >
        <div
          className={`${
            open === index + 1
              ? "flex items-center justify-between w-full  active"
              : "flex items-center justify-between w-full "
          }`}
        >
          <h3 className="text-2xl pr-24 1xl:text-[1.8rem] 3xl:text-[2rem]">{data?.question}</h3>
          <div className="w-6 h-full faq-toggle-icon relative">
            <span ></span>
            <span ></span>
          </div>
        </div>
      </AccordionHeader>
      <AccordionBody>
        <div className="pb-8">
            <p className="text-1xl font-normal 1xl:text-[1.3rem] 3xl:text-[1.65rem]">{data?.answer}</p>
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default FaqAccordion;
