"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import QuickContact from "../QuickContact/QuickContact";

const tabs = [
  "Vehicle History",
  "Road Test",
  "Underhood  Maintenance",
  "Vehicle Exterior",
  "Vehicle Interior",
  "Underbody",
];

const CheckPointsSection = () => {
  const [activeTab, setActiveTab] = useState("checkPoint-1");
  const [open, setOpen] = useState("");

  const sectionRefs = useRef([]);

  const handleOpen = (value) => setOpen(open === value ? "" : value);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      threshold: 0.5, // 50% of section visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe each section
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex justify-between relative items-start flex-wrap">
            <div className="w-full lg:w-[23%] relative xl:h-full xl:sticky xl:top-[3rem] xl:left-0">
              <p className="text-black text-[3rem] font-medium leading-[1.2] text-center lg:text-left lg:text-[1.35rem] xl:tracking-[-0.2px] xl:text-[1.45rem] lg:leading-[1.3] 1xl:text-[1.6rem] 2xl:text-[1.75rem] 3xl:text-[2.2rem] 3xl:tracking-[-0.5px] [&>br]:hidden lg:[&>br]:block">
                Thorough 151-Point Check <br /> and 360° Report for <br />{" "}
                Optimal Driving Pleasure
              </p>

              <div>
                <ul className="flex flex-wrap mt-[2rem] justify-center lg:justify-start xl:flex-col xl:mt-[3rem] 3xl:mt-[5rem]">
                  {tabs.map((tab, index) => (
                    <li
                      onClick={() => handleTabChange(`checkPoint-${index + 1}`)}
                      key={index}
                      className="lg:w-full"
                    >
                      <a
                        href={`#checkPoint-${index + 1}`}
                        className={`${styles.tabMenu} ${
                          activeTab === `checkPoint-${index + 1}`
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
              <div className="hidden xl:block xl:mt-[3rem]">
                <QuickContact />
              </div>
            </div>

            <div className="w-full lg:w-[72%] text-[#040404]">
              <div
                className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem] 3xl:mt-[6rem]"
                id="checkPoint-1"
                ref={(el) => (sectionRefs.current[0] = el)}
              >
                <h3 className={styles.sectionTitle}>Vehicle History</h3>
                <div className={`mt-[3rem]`}>
                  <h4 className="text-[1.7rem] mb-[2rem] xl:text-[2rem] xl:tracking-tighter 1xl:text-[2.4rem] 3xl:text-[3rem] font-normal">
                    Vehicle service History
                  </h4>
                  <ul className={styles.unorderedList}>
                    <li>Service Recalls (OASIS) performed</li>
                    <li>Scheduled Maintenance Performed</li>
                  </ul>
                </div>
                <div className="mt-[3rem]">
                  <h4 className="text-[1.7rem] mb-[2rem] xl:text-[2rem] xl:tracking-tighter 1xl:text-[2.4rem] 3xl:text-[3rem] font-normal">
                    Vehicle History Report
                  </h4>
                  <ul className={styles.unorderedList}>
                    <li>VIN inspection (Chassis Number)</li>
                    <li>Vehicle Emissions Sticker</li>
                    <li>Vehicle MIleage</li>
                    <li>Integrity</li>
                  </ul>
                </div>
              </div>

              <div
                className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem] 3xl:mt-[6rem]"
                id="checkPoint-2"
                ref={(el) => (sectionRefs.current[1] = el)}
              >
                <h3 className={styles.sectionTitle}>Road Test</h3>
                <div className="mt-[2rem] text-[#040404] xl:mt-0">
                  <ol className={styles.orderedList}>
                    <li>Engine starts</li>
                    <li>Idle Quality</li>
                    <li>Engine Accelerates and Cruises Properly</li>
                    <li>Engine Noise Cold/Hot & High /Low Speeds</li>
                    <li>
                      Auto/Manual Transmission/ Transaxle Noise Operation- Cold
                      and Hot Shift Quality
                    </li>
                    <li>
                      Auto/Manual Transmission/Transaxle Noise Normal- Cold and
                      Hot
                    </li>
                    <li>Shift Interlock Operates Properly</li>
                    <li>Drive Axle/Transfer Case Operation Noise</li>
                    <li>Clutch Operates Properly</li>
                    <li>Remote Start System Operation</li>
                    <li>Steering Response, Centering and Free Play</li>
                    <li>Body and Suspension Squeaks and Rattles</li>
                    <li>Struts/Shocks Operate Properly</li>
                    <li>Brakes/ ABS Operate Properly</li>
                    <li>Cruise Control</li>
                    <li>Gauges Operate Properly</li>
                    <li>Driver Select/ Memory Profile Systems</li>
                    <li>Wind Noise</li>
                    <li>Traction Control</li>
                    <li>Defrost</li>
                    <li>Ease of Turning</li>
                  </ol>
                </div>
              </div>

              <div
                className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem] 3xl:mt-[6rem]"
                id="checkPoint-3"
                ref={(el) => (sectionRefs.current[2] = el)}
              >
                <h3 className={styles.sectionTitle}>Underhood Maintenance</h3>

                <div className="checkPoint-accordion">
                  <Accordion
                    open={open === `underhood-1`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`underhood-1`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>Fluids</h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "underhood-1" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>Engine Oil/Filter Change and Chassis Lube</li>
                          <li>Coolant</li>
                          <li>Brake Fluid</li>
                          <li>Automatic Transaxle/Transmission Fluid</li>
                          <li>Transfer Case Fluid</li>
                          <li>Drive Axle Fluid</li>
                          <li>Power Steering Fluid</li>
                          <li>Transmission Hydraulic Clutch Fluid</li>
                          <li>Washer Fluid</li>
                          <li>Air Conditioning System Charge</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `underhood-2`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`underhood-2`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>Engine</h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "underhood-2" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>Engine Oil/Filter Change and Chassis Lube</li>
                          <li>Coolant</li>
                          <li>Brake Fluid</li>
                          <li>Automatic Transaxle/Transmission Fluid</li>
                          <li>Transfer Case Fluid</li>
                          <li>Drive Axle Fluid</li>
                          <li>Power Steering Fluid</li>
                          <li>Transmission Hydraulic Clutch Fluid</li>
                          <li>Washer Fluid</li>
                          <li>Air Conditioning System Charge</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `underhood-3`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`underhood-3`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Cooling System
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "underhood-3" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>Engine Oil/Filter Change and Chassis Lube</li>
                          <li>Coolant</li>
                          <li>Brake Fluid</li>
                          <li>Automatic Transaxle/Transmission Fluid</li>
                          <li>Transfer Case Fluid</li>
                          <li>Drive Axle Fluid</li>
                          <li>Power Steering Fluid</li>
                          <li>Transmission Hydraulic Clutch Fluid</li>
                          <li>Washer Fluid</li>
                          <li>Air Conditioning System Charge</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `underhood-4`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`underhood-4`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>Fuel System</h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "underhood-4" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>Engine Oil/Filter Change and Chassis Lube</li>
                          <li>Coolant</li>
                          <li>Brake Fluid</li>
                          <li>Automatic Transaxle/Transmission Fluid</li>
                          <li>Transfer Case Fluid</li>
                          <li>Drive Axle Fluid</li>
                          <li>Power Steering Fluid</li>
                          <li>Transmission Hydraulic Clutch Fluid</li>
                          <li>Washer Fluid</li>
                          <li>Air Conditioning System Charge</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `underhood-5`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`underhood-5`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Electric AI System
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "underhood-5" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>Engine Oil/Filter Change and Chassis Lube</li>
                          <li>Coolant</li>
                          <li>Brake Fluid</li>
                          <li>Automatic Transaxle/Transmission Fluid</li>
                          <li>Transfer Case Fluid</li>
                          <li>Drive Axle Fluid</li>
                          <li>Power Steering Fluid</li>
                          <li>Transmission Hydraulic Clutch Fluid</li>
                          <li>Washer Fluid</li>
                          <li>Air Conditioning System Charge</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              </div>

              <div
                className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem] 3xl:mt-[6rem]"
                id="checkPoint-4"
                ref={(el) => (sectionRefs.current[3] = el)}
              >
                <h3 className={styles.sectionTitle}>Vehicle Exterior</h3>
                <div className="checkPoint-accordion">
                  <Accordion
                    open={open === `exterior-1`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`exterior-1`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Body Panels and Bumpers
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "exterior-1" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `exterior-2`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`exterior-2`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Doors, Hood, Decklid, Tailgate
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "exterior-2" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `exterior-3`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`exterior-3`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Grille, Trim and Roof Rack
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "exterior-3" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `exterior-4`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`exterior-4`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Glass and Outside Mirrors
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "exterior-4" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `exterior-5`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`exterior-5`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Exterior Lights
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "exterior-5" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              </div>

              <div
                className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem] 3xl:mt-[6rem]"
                id="checkPoint-5"
                ref={(el) => (sectionRefs.current[4] = el)}
              >
                <h3 className={styles.sectionTitle}>Vehicle Interior</h3>
                <div className="checkPoint-accordion">
                  <Accordion
                    open={open === `interior-1`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`interior-1`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Carpets, Seats, Sunroof/ Convertible Windows, Door
                          Locks, Luggage
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "interior-1" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `interior-2`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`interior-2`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Audio and Alarm Systems
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "interior-2" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `interior-3`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`interior-3`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Exterior Lights
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "interior-3" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `interior-4`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`interior-4`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Carpets, Seats, Sunroof/ Convertible Windows, Door
                          Locks, Luggage
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "interior-4" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `interior-5`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`interior-5`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Exterior Lights
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "interior-5" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              </div>

              <div
                className="pt-[4rem] mt-[2rem] faq-item xl:mt-[4rem] 3xl:mt-[6rem]"
                id="checkPoint-6"
                ref={(el) => (sectionRefs.current[5] = el)}
              >
                <h3 className={styles.sectionTitle}>Underbody</h3>
                <div className="checkPoint-accordion">
                  <Accordion
                    open={open === `underbody-1`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`underbody-1`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>Frame</h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "underbody-1" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `underbody-2`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`underbody-2`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Exhaust System
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "underbody-2" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>

                  <Accordion
                    open={open === `underbody-3`}
                    className="border-b border-[#787878]"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(`underbody-3`)}
                      className="border-none"
                    >
                      <div className={styles.accordionHeader}>
                        <h4 className={styles.accordionTitle}>
                          Tires and Wheels
                        </h4>

                        <div className={styles.accordionIconBox}>
                          <span className="w-full h-[1px] inline-block bg-black"></span>
                          <span
                            className={`${styles.accordionPlus} opacity-[${
                              open === "underbody-3" ? "0" : "1"
                            }]`}
                          ></span>
                        </div>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-[#040404] font-normal pb-[2rem]">
                        <ol className={styles.orderedList}>
                          <li>
                            No Evidence of Flood Fire, Major or Hail Damage
                          </li>
                          <li>Body Panel Inspection</li>
                          <li>Bumper/Fascia Inspection</li>
                        </ol>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckPointsSection;

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
