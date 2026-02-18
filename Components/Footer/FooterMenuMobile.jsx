"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";

const FooterMenuMobile = ({ brands = [], styles = [], loading = false }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="text-white FooterMenuWrapper pt-20 [&>div]:border-t [&>div]:border-t-[#ebebf01a] [&>div:last-of-type]:border-b [&>div:last-of-type]:border-b-[#ebebf01a]">
      <div className="footerMenuBox py-7 [&_button]:block [&_button]:w-full [&_button]:border-0 [&_span.ml-4]:hidden ">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            <div
              className={`${
                open === 1
                  ? "flex items-center justify-between active-menu"
                  : "flex items-center justify-between"
              }`}
            >
              <h3 className="font-normal text-3xl">BBT World</h3>
              <div className="footerAccordionIcon relative w-[1.5rem] h-[1.5rem] [&>span]:w-[14px] [&>span]:h-[2px] [&>span]:bg-[#fff] [&>span]:absolute [&>span]:left-0 [&>span]:top-[6px]">
                <span></span>
                <span></span>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="footer-menu mt-5">
              <ul>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/team"
                  >
                    The Team
                  </Link>
                </li>
                 <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/why-us"
                  >
                    Why Us
                  </Link>
                </li>
                 <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/career"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/associates"
                  >
                    Associates
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/bbt-squad"
                  >
                    BBT Squad
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/wallpapers"
                  >
                    BBT Wallpapers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/151-check-points"
                  >
                    151 Check Points
                  </Link>
                </li>
              </ul>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="footerMenuBox py-7 [&_button]:block [&_button]:w-full [&_button]:border-0 [&_span.ml-4]:hidden">
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <div
              className={`${
                open === 2
                  ? "flex items-center justify-between active-menu"
                  : "flex items-center justify-between"
              }`}
            >
              <h3 className="font-normal text-3xl">General</h3>
              <div className="footerAccordionIcon relative w-[1.5rem] h-[1.5rem] [&>span]:w-[14px] [&>span]:h-[2px] [&>span]:bg-[#fff] [&>span]:absolute [&>span]:left-0 [&>span]:top-[6px]">
                <span></span>
                <span></span>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="footer-menu mt-5">
              <ul>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/faq"
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/guides"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/insurances/car-insurance"
                  >
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/modifications"
                  >
                    Modifications
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/car-detailing"
                  >
                    Car Detailing
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/car-news"
                  >
                    Car News
                  </Link>
                </li> */}
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/showrooms"
                  >
                    Showrooms
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-2xl py-1 mt-4 block text-white"
                    href="/workshop"
                  >
                    Workshop
                  </Link>
                </li>
              </ul>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="footerMenuBox py-7 [&_button]:block [&_button]:w-full [&_button]:border-0 [&_span.ml-4]:hidden">
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <div
              className={`${
                open === 3
                  ? "flex items-center justify-between active-menu"
                  : "flex items-center justify-between"
              }`}
            >
              <h3 className="font-normal text-3xl">Brands</h3>
              <div className="footerAccordionIcon relative w-[1.5rem] h-[1.5rem] [&>span]:w-[14px] [&>span]:h-[2px] [&>span]:bg-[#fff] [&>span]:absolute [&>span]:left-0 [&>span]:top-[6px]">
                <span></span>
                <span></span>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="footer-menu mt-5">
              {loading ? (
                <div className="text-gray-400 text-2xl py-1 mt-4">Loading brands...</div>
              ) : (
                <ul>
                  {brands.map((brand) => (
                    <li key={brand.id}>
                      <Link
                        className="text-2xl py-1 mt-4 block text-white"
                        href={`/buy-used-${brand.slug}-cars`}
                      >
                        {brand.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="footerMenuBox py-7 [&_button]:block [&_button]:w-full [&_button]:border-0 [&_span.ml-4]:hidden">
        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            <div
              className={`${
                open === 4
                  ? "flex items-center justify-between active-menu"
                  : "flex items-center justify-between"
              }`}
            >
              <h3 className="font-normal text-3xl">Styles</h3>
              <div className="footerAccordionIcon relative w-[1.5rem] h-[1.5rem] [&>span]:w-[14px] [&>span]:h-[2px] [&>span]:bg-[#fff] [&>span]:absolute [&>span]:left-0 [&>span]:top-[6px]">
                <span></span>
                <span></span>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="footer-menu mt-5">
              {loading ? (
                <div className="text-gray-400 text-2xl py-1 mt-4">Loading styles...</div>
              ) : (
                <ul>
                  {styles.map((style) => (
                    <li key={style.id}>
                      <Link
                        className="text-2xl py-1 mt-4 block text-white"
                        href={`/category/${style.slug}`}
                      >
                        {style.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default FooterMenuMobile;
