"use client"
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";

const list = [
  { title: "Paint Correction" },
  { title: "Teflon Coating" },
  { title: "Ceramic Coating" },
  { title: "Graphene Coating" },
  { title: "PPF" },
  { title: "Coloured PPF" },
];

const ChooseWhatsRight = () => {
  const [open, setOpen] = useState("");

  const handleOpen = (value) => setOpen(open === value ? "" : value);

  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div>
            <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center lg:text-left xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
              Choose what’s <b>right for you?</b>
            </h2>
            <p className="text-[1.5rem] text-center lg:text-left xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              Our list of Associates share a common vision for Automotive <br />{" "}
              Excellence and a deep passion for Exotic cars.
            </p>
          </div>
          <div className="mt-[5rem] border-t border-[#e5e7eb]">
            {list.map((item, index) => (
              <div key={index}>
                <Accordion
                  open={open === `tab-${index + 1}`}
                  className="border-b border-[#e5e7eb] py-[2rem]"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(`tab-${index + 1}`)}
                    className="border-none"
                  >
                    <div className="flex justify-between relative items-center w-full md:py-[1rem] 1xl:py-[2rem]">
                      <div className="w-[4rem] text-[1.2rem] font-light sm:w-[6rem] xl:text-[1.4rem] xl:w-[7rem] 1xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[2.2rem] 1xl:w-[8rem] 3xl:w-[11rem]">
                        0{index + 1}.
                      </div>
                      <div className="flex-[1] pr-[3rem] xl:pr-0">
                        <h4 className="font-normal text-[2rem] xl:text-[3rem] xl:tracking-tighter 1xl:text-[3.5rem] 2xl:text-[3.8rem] 3xl:text-[4.5rem]">{item.title}</h4>
                      </div>
                      <div className="hidden md:block md:w-[45%]">
                        <p className="font-light italic text-[#4E4E4E] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[2.2rem]">Benefits</p>
                      </div>
                      <div className="w-[10px] h-[10px] flex justify-center items-center xl:w-[18px] xl:h-[18px] 1xl:w-[22px] 1xl:h-[22px] 3xl:w-[30px] 3xl:h-[30px] relative">
                        <span className="w-full h-[1px] inline-block bg-black"></span>
                        <span
                          className={`w-[1px] h-full inline-block bg-black absolute top-0 left-[4px] xl:left-[9px] 1xl:left-[10px] 3xl:left-[14px] opacity-[${
                            open === "tab" + "-" + (index + 1) ? "0" : "1"
                          }]`}
                        ></span>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>

                    {/* Content is dummy */}
                    <div className="flex flex-col py-[2rem] md:flex-row md:justify-between md:pr-[5%] xl:px-[7rem] xl:pt-[1rem] xl:pb-[5rem] 3xl:pb-[7rem]">
                      <div className="md:w-[45%] xl:w-[43%]">
                        <h4 className="text-[1.7rem] mb-[2rem] xl:text-[2rem] xl:tracking-tighter 1xl:text-[2.4rem] 2xl:text-[2.5rem] 3xl:text-[3rem] font-normal">
                          What is {item.title}?
                        </h4>
                        <p className="text-[1.2rem] xl:text-[1.3rem] 1xl:text-[1.42rem] 2xl:text-[1.52rem] 3xl:text-[1.9rem]">
                          Teflon coating, also known as
                          poly-tetra-fluoro-ethylene (PTFE) coating, is a
                          synthetic sealant designed to protect your car's
                          paintwork. Originally developed for its non-stick and
                          heat-resistant properties in industrial applications.{" "}
                          <br /> <br />
                          Teflon coating forms a protective layer over the
                          surface of your car's paintwork. This layer acts as a
                          barrier against environmental pollutants, UV rays, and
                          oxidation, helping to maintain the shine and
                          appearance of your vehicle. Additionally, Teflon
                          coating has hydrophobic properties, meaning it repels
                          water, resulting in a self-cleaning effect as water
                          rolls away without settling on the surface.
                        </p>
                      </div>
                      <div className="mt-[3rem] [&_li]:mb-[1rem] [&_li]:pl-[1.7rem] [&_li]:text-[1.2rem] [&_li]:relative [&_li]:before:content-[''] [&_li]:before:w-[1rem] [&_li]:before:h-[1rem] [&_li]:before:rounded-full [&_li]:before:border-[3px] [&_li]:before:border-[#4E4E4E] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.5rem] md:w-[45%] md:mt-0 xl:w-[46%] xl:[&_li]:text-[1.35rem] 1xl:[&_li]:text-[1.45rem] 3xl:[&_li]:text-[2rem] 2xl:[&_li]:text-[1.55rem] 2xl:[&_li]:before:w-[1.2rem] 2xl:[&_li]:before:h-[1.2rem] 2xl:[&_li]:before:border-[3.5px] 2xl:[&_li]:pl-[2rem] 3xl:[&_li]:before:w-[1.5rem] 3xl:[&_li]:before:h-[1.5rem] 3xl:[&_li]:pl-[2.5rem]" >
                        <h4 className="text-[1.7rem] mb-[2rem] xl:text-[2rem] xl:tracking-tighter 1xl:text-[2.4rem] 3xl:text-[3rem] font-normal">
                          When you should get it?
                        </h4>
                        <ul>
                          <li>
                            Teflon coating offers durable protection against UV
                            rays,
                          </li>
                          <li>Environmental pollutants, and oxidation,</li>
                          <li>
                            Bonding with the paintwork for long-lasting results.
                          </li>
                          <li> The hydrophobic nature of Teflon coating.</li>
                          <li>Ensures water rolls off the surface, </li>
                          <li>
                            Providing a self-cleaning effect and reducing water
                            spots.
                          </li>
                        </ul>
                        <div className="mt-[3rem] 1xl:mt-[4rem] 3xl:mt-[5rem]">
                          <Link
                            href="#"
                            className="w-max h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-black border-black border text-white px-[3rem] py-[1rem] rounded-[3rem] xl:px-[4rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:px-[5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[6.5rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-white hover:text-black transition-all duration-500 ease-in-out"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
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

export default ChooseWhatsRight;
