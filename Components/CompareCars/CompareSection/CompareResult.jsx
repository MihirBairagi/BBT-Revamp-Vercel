"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const specifications = [
  {
    title: "Overview",
    icon: "/images/detail-page/detail-tab-icon-1.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Engine & Transmission",
    icon: "/images/detail-page/detail-bbt-engine-black.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Hybrid System",
    icon: "/images/detail-page/detail-tab-icon-3.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Performance & Efficiency",
    icon: "/images/detail-page/detail-tab-icon-4.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Exterior Equipment",
    icon: "/images/detail-page/detail-tab-icon-5.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Interior Equipment",
    icon: "/images/detail-page/detail-tab-icon-6.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Seats & Upholstery",
    icon: "/images/detail-page/detail-tab-icon-7.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Entertainment Front",
    icon: "/images/detail-page/detail-tab-icon-8.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
];

const CompareResult = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="flex justify-between items-center mb-[3rem] 1xl:mb-[4rem] 3xl:mb-[6rem]">
        <h4 className="text-[2rem] lg:text-[2.5rem] xl:text-[2.2rem] 1xl:text-[2.6rem] xl:tracking-tighter 2xl:text-[2.9rem] 3xl:text-[3.5rem] 2xl:tracking-[-3px]">
          Result
        </h4>
        <div className="flex items-center">
          <label for="hideCommon" className="flex items-center cursor-pointer">
            <div className="mr-[8px] lg:mr-[10px] text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem] 1xl:text-[1.8rem] 2xl:text-[2rem] 3xl:text-[2.4rem] font-medium xl:tracking-tight 2xl:mr-[12px]">
              Hide Common Features
            </div>
            <div className="relative">
              <input id="hideCommon" type="checkbox" className="sr-only" />

              <div className="w-[20px] h-[6px] bg-[#C7C7C7] rounded-full shadow-inner xl:w-[23px] xl:h-[7px] 1xl:w-[27px] 2xl:w-[30px] 2xl:h-[8px] 3xl:w-[35px] 3xl:h-[9px]"></div>

              <div className="dot absolute w-[12px] h-[12px] bg-black rounded-full shadow -left-1 -top-[3.5px] transition xl:w-[15px] xl:h-[15px] xl:-top-[4px] 2xl:w-[17px] 2xl:h-[17px] 3xl:w-[21px] 3xl:h-[21px] 3xl:-top-[6px]"></div>
            </div>
          </label>
        </div>
      </div>
      <div className="accordion-box">
        {specifications?.map((item, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            className="border-b border-b-[#D9D9D9] first-of-type:border-t first-of-type:border-t-[#D9D9D9]"
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="w-full py-[1.2rem] border-none xl:py-7 1xl:py-8 2xl:py-9 3xl:py-11"
            >
              <div
                className={`${
                  open === index + 1
                    ? "flex items-center justify-between w-full  active"
                    : "flex items-center justify-between w-full "
                }`}
              >
                <p className="font-normal text-[1.4rem] xl:text-[1.85rem] xl:tracking-tight 1xl:text-[2rem] 2xl:text-[2.2rem] 3xl:text-[2.8rem] 2xl:tracking-tighter">
                  {item.title}
                </p>
                <div className="w-max">
                  <img
                    src="/images/dropdown-icon.webp"
                    alt="Arrow Icon"
                    width="17"
                    height="9"
                    className="w-[1rem] object-contain transition-all duration-500 ease-in-out accordion-arrow lg:w-[1.2rem] xl:w-[1.4rem] 3xl:w-[1.7rem]"
                  />
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <ul className="pb-5">
                {item.detailList.map((listItem, index) => (
                  <li key={index} className={`flex justify-between py-5 3xl:py-[2rem]`}>
                    <p className="text-lg w-[35%] font-medium sm:text-xl xl:text-[1.4rem] 1xl:text-[1.7rem] 3xl:text-[2rem]">
                      {listItem.title}
                    </p>
                    <p className="text-lg text-right w-[60%] font-normal text-gray-500 sm:text-xl xl:text-[1.4rem] 1xl:text-[1.7rem] 3xl:text-[2rem]">
                      {listItem.description}
                    </p>
                  </li>
                ))}
              </ul>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default CompareResult;
