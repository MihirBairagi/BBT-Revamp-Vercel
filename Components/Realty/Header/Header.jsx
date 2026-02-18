"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderMenu from './HeaderMenu';

const styles = {
  menuItem:
    "text-white relative px-[1.5rem] uppercase text-sm transition-all ease-in-out duration-300 lg:border-l lg:border-l-[#fff] hover:text-[#DFAD60] lg:text-[1.2rem] xl:text-[1.3rem] 1xl:px-[1.8rem] 1xl:text-[1.45rem] 3xl:text-[1.8rem] 2xl:tracking-[0.4px] 3xl:tracking-[0.3px] 3xl:px-[2.3rem]",
};
 
const Header = ({}) => {
  const pathName = usePathname();

  const [openMenu , setOpenMenu] = useState(false);

  // Define static routes and dynamic route prefixes
  const staticRoutes = [
    "/realty/about-us",
    "/realty/privacy-policy",
    "/realty/terms-and-conditions",
    "/realty/disclaimer",
    "/realty/contact-us",
    "/realty/faq",
  ];
  const dynamicPrefixes = [
    "/realty/bbt-pavilion",
  ];

  // Check for matching static or dynamic routes
  const isPageHeader =
    staticRoutes.includes(pathName) ||
    dynamicPrefixes.some((prefix) => pathName.startsWith(prefix)) ||
    (pathName.startsWith("/guides") &&
      pathName.split("/").filter(Boolean).length === 2);

  return (
    <header
      className={`header w-full h-auto z-[99] ${
        isPageHeader
          ? "page-header absolute bg-[#0000]"
          : "absolute bg-transparent"
      }`}
      id="header"
    >
      <HeaderMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="max-1920">
        <div
          className={`relative header-wrapper w-full p-[3rem] mx-auto lg:py-[2rem] lg:px-[4rem] 1xl:py-[2.5rem] 2xl:px-[4.3rem] 3xl:py-[3rem] 3xl:px-[5.5rem] ${
            isPageHeader
              ? "py-[2rem] px-[2rem] 2xl:pt-[2.5rem] 2xl:pb-[3rem] 2xl:pr-[4rem] 2xl:pl-[3.5rem] 3xl:py-[3.5rem] 3xl:px-[5.5rem]"
              : ""
          }`}
        >
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center menu-toggler cursor-pointer lg:order-3 justify-end lg:w-[15rem] xl:w-[22rem] 3xl:w-[28.5rem] `}
              onClick={() => setOpenMenu(true)}
            >
              <span className="text-white uppercase mr-5 hidden lg:inline-block text-base xl:text-lg 3xl:text-2xl 3xl:mr-6">
                Menu
              </span>
              <div className="menu-bar w-12 lg:w-10 xl:w-[3rem] 3xl:w-[3.9rem] [&>span]:h-[1.5px] [&>span]:bg-white [&>span]:block [&>span]:rounded-[5px] group">
                <span className="w-[80%] mb-[7px] 3xl:mb-[8px]"></span>
                <span className="w-[100%] mb-[7px] 3xl:mb-[8px] group-hover:ml-[5px] transition-all duration-500 ease-in-out"></span>
                <span className="w-[65%]"></span>
              </div>
            </div>
            <div className="header-logo  lg:order-1 ">
              <Link href="/realty" className="block">
                <img
                  src="/realty/images/bbt-realty-logo.webp"
                  width="105"
                  height="70"
                  alt="BBT Logo"
                  className="w-[18rem] object-contain lg:w-[15rem] xl:w-[22rem] 3xl:w-[28.5rem]"
                  priority="high"
                />
              </Link>
            </div>
            <div
              className={`lg:flex items-center justify-center header-phone-list hidden lg:order-2`}
            >
             <div className="group">
                <Link href="#" className={`${styles.menuItem} flex items-center lg:border-l-0`}>
                  Projects
                  <span className="ml-2 text-base transition-transform duration-300 group-hover:rotate-180">
                    ▼
                  </span>
                </Link>

                {/* Dropdown */}
                <ul
                  className="
                    flex items-center justify-between
                    absolute 
                    left-1/2 
                    top-[90%]
                    -translate-x-1/2
                    w-[95%]
                    xl:w-[80%]
                    bg-[#202020c9]
                    border border-white/20 
                    rounded-[3rem]
                    opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible 
                    transition-all duration-300 
                    z-50
                    p-[2rem]
                  "
                >

                  <li className="w-[25%] h-[-webkit-fill-available]" >
                    <Link
                      href="/realty/bbt-pavilion-vadodara-detail-page"
                      className="block p-[1rem] text-white text-sm rounded-[2rem] transition h-full"
                    >
                     <div className="h-pro-list relative overflow-hidden rounded-[2rem] h-full">
                            <div className="img-box h-full">
                                <img className='w-[100%] h-full object-cover' src="/realty/images/h-pro-slider-1.webp" alt="" />
                            </div>
                            <div className="text-box absolute bottom-[-12%] hover:bottom-0 w-full h-full flex flex-col justify-end p-[1.5rem] bg-[linear-gradient(180deg,rgba(0,0,0,0)_35.83%,rgba(0,0,0,0.477963)_59.16%,#000_100%)] transition-all">
                                <h4 className="f-22" >Pavilion</h4>
                                <h5 className="f-18 mt-[0.8rem] xl:mt-[1rem] 3xl:mt-[1.5rem] font-normal" >Launching In April</h5>
                                <div className="loc flex items-center mt-[1.2rem] mb-[1.5rem] xl:mt-[1.5rem] xl:mb-[2.5rem] 3xl:mt-[1.7rem] 3xl:mb-[3rem]">
                                    <span>
                                        <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/realty/images/h-pro-location.png" alt="" />
                                    </span>
                                    <p className='para' >Vadodara</p>
                                </div>
                                <div className='max-[1023px]:text-[1.5rem] f-18 flex items-center'>
                                    View Project <span><img className='invert ml-[1rem] lg:w-[1.5rem]' src="/realty/images/h-btn-blk-arrow-.png" alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </Link>
                  </li>

                  <li className="w-[25%] h-[-webkit-fill-available] grayscale hover:grayscale-0" >
                    <div
                      className="block p-[1rem] text-white text-sm rounded-[2rem] transition  h-full"
                    >
                      <div className="h-pro-list relative overflow-hidden rounded-[2rem] h-full">
                            <div className="img-box h-full">
                                <img className='w-[100%] h-full object-cover' src="/realty/images/h-pro-list-2.webp" alt="" />
                            </div>
                            <div className="text-box absolute bottom-[-12%] w-full h-full flex flex-col justify-end p-[1.5rem] bg-[linear-gradient(180deg,rgba(0,0,0,0)_35.83%,rgba(0,0,0,0.477963)_59.16%,#000_100%)] transition-all">
                                <h4 className="f-22" >BBT ONE</h4>
                                <div className="loc flex items-center mt-[1.2rem] mb-[1.5rem] xl:mt-[1.5rem] xl:mb-[2.5rem] 3xl:mt-[1.7rem] 3xl:mb-[3rem]">
                                    <span>
                                        <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/realty/images/h-pro-location.png" alt="" />
                                    </span>
                                    <p className='para' >Karol Bagh, Delhi</p>
                                </div>
                                <div className='max-[1023px]:text-[1.5rem] f-18 flex items-center opacity-0'>
                                    View Project <span><img className='invert ml-[1rem] lg:w-[1.5rem]' src="/realty/images/h-btn-blk-arrow-.png" alt="" /></span>
                                </div>
                            </div>
                            <div className="absolute top-[5%] right-[5%] bg-[#080808] py-4 px-6 rounded-full">
                              <p className="f-18" >Launching Soon</p>
                            </div>
                        </div>
                    </div>
                  </li>

                  <li className="w-[25%] h-[-webkit-fill-available] grayscale hover:grayscale-0" >
                    <div
                      className="block p-[1rem] text-white text-sm rounded-[2rem] transition  h-full"
                    >
                      <div className="h-pro-list relative overflow-hidden rounded-[2rem] h-full">
                            <div className="img-box h-full">
                                <img className='w-[100%] h-full object-cover' src="/realty/images/h-pro-list-3.webp" alt="" />
                            </div>
                            <div className="text-box absolute bottom-[-12%] w-full h-full flex flex-col justify-end p-[1.5rem] bg-[linear-gradient(180deg,rgba(0,0,0,0)_35.83%,rgba(0,0,0,0.477963)_59.16%,#000_100%)] transition-all">
                                <h4 className="f-22" >The Royale Pavilion</h4>
                                <div className="loc flex items-center mt-[1.2rem] mb-[1.5rem] xl:mt-[1.5rem] xl:mb-[2.5rem] 3xl:mt-[1.7rem] 3xl:mb-[3rem]">
                                    <span>
                                        <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/realty/images/h-pro-location.png" alt="" />
                                    </span>
                                    <p className='para' >Lucknow</p>
                                </div>
                                <div className='max-[1023px]:text-[1.5rem] f-18 flex items-center opacity-0'>
                                    View Project <span><img className='invert ml-[1rem] lg:w-[1.5rem]' src="/realty/images/h-btn-blk-arrow-.png" alt="" /></span>
                                </div>
                            </div>
                            <div className="absolute top-[5%] right-[5%] bg-[#080808] py-4 px-6 rounded-full">
                              <p className="f-18" >Launching Soon</p>
                            </div>
                        </div>
                    </div>
                  </li>

                  <li className="w-[25%] h-[-webkit-fill-available] grayscale hover:grayscale-0" >
                    <div
                      className="block p-[1rem] text-white text-sm rounded-[2rem] transition  h-full"
                    >
                      <div className="h-pro-list relative overflow-hidden rounded-[2rem] h-full">
                            <div className="img-box h-full">
                                <img className='w-[100%] h-full object-cover' src="/realty/images/h-sora-img-1.webp" alt="" />
                            </div>
                            <div className="text-box absolute bottom-[-12%] w-full h-full flex flex-col justify-end p-[1.5rem] bg-[linear-gradient(180deg,rgba(0,0,0,0)_35.83%,rgba(0,0,0,0.477963)_59.16%,#000_100%)] transition-all">
                                <h4 className="f-22" >Sora</h4>
                                <div className="loc flex items-center mt-[1.2rem] mb-[1.5rem] xl:mt-[1.5rem] xl:mb-[2.5rem] 3xl:mt-[1.7rem] 3xl:mb-[3rem]">
                                    <span>
                                        <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/realty/images/h-pro-location.png" alt="" />
                                    </span>
                                    <p className='para' >Mandi, Himachal Pradesh</p>
                                </div>
                                <div className='max-[1023px]:text-[1.5rem] f-18 flex items-center opacity-0'>
                                    View Project <span><img className='invert ml-[1rem] lg:w-[1.5rem]' src="/realty/images/h-btn-blk-arrow-.png" alt="" /></span>
                                </div>
                            </div>
                            <div className="absolute top-[5%] right-[5%] bg-[#080808] py-4 px-6 rounded-full">
                              <p className="f-18" >Launching Soon</p>
                            </div>
                        </div>
                    </div>
                  </li>
                </ul>
              </div>

              <Link href="/realty/about-us" className={styles.menuItem}>
                About Us{" "}
              </Link>
              <Link href="/realty/faq" className={styles.menuItem}>
                FAQ
              </Link>
              <Link href="/realty/contact-us" className={styles.menuItem}>
                Contact Us{" "}
              </Link>
              <a href="tel:(+91) 99999 990 30" className={styles.menuItem} >
                (+91) 99999 990 30
              </a>

              {/* <div className="contact items-center hidden lg:flex lg:w-max text-white">
                <img className='lg:w-[3rem] lg:ml-[1.5rem] xl:ml-[2rem] 1xl:ml-[3rem] lg:mr-[1rem] xl:w-[4rem] 1xl:w-[5.2rem]' src="/realty/images/hp-head-tel.webp" alt="" />
                  <div className="text">
                    <p className='f-18 font-[300] lg:mb-[0] xl:mb-[0.2rem]' > Connect with us</p>
                    <a className='f-20' href="tel:+91 99999 990 30">(+91) 99999 990 30</a>
                  </div>
              </div> */}

            </div>

            <div className="mobile-search-bar lg:hidden">
              <Image
                src="/realty/images/banner-search-icon-white.webp"
                width="20"
                height="20"
                alt="Header Search Icon"
                className="w-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
