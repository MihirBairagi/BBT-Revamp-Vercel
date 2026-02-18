"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import FilterPopup from "../../FilterPopup/FilterPopup";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PageHeader = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSorBy] = useState("");
  const [sortTitle, setSorTitle] = useState("Price");

  const sortChangeHandle = (title, value) => {
    setSorTitle(title);
    setSorBy(value);
  };

  const togglePopup = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <section className="bg-white md:bg-[#f3f3f3]">
      <div className="container">
        <div className="pt-16 xl:pt-[7rem] 1xl:pt-[8rem] 3xl:pt-[11rem]">
          <p className="hidden lg:flex flex-wrap items-center font-normal">
            <Link
              href="/"
              className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]"
            >
              Home
            </Link>
            <Image
              src="/images/breadcrumb-arrow.webp"
              className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
              width="6"
              height="11"
              alt="Arrow Icon"
            />
            <span className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]">
              Collection
            </span>
          </p>
          <div className="lg:mt-[1rem] 1xl:mt-[2rem] 3xl:mt-[3rem]">
            <h1 className="font-[200] [&>b]:font-[400] text-[4.5rem] leading-[1.1] tracking-[-2px] xl:text-[5rem] xl:tracking-[-3px] 1xl:text-[5.5rem] 2xl:text-[5.8rem] 3xl:text-[7.5rem] 3xl:tracking-[-5px]">
              All Cars At BBT <b>Used Luxury</b>{" "}
            </h1>
            <p className="font-[300] text-[1.2rem] mt-[2rem] pr-[4rem] lg:text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.25rem] 3xl:text-[2.8rem] text-[#000000]">
              At BBT, we strive to provide the quickest and most hassle free car
              selling service available.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-[5rem] border-t border-[#D9D9D9] py-[3rem] lg:pb-0 xl:mt-[7rem] 1xl:mt-[7.5rem] 3xl:mt-[9.5rem] 3xl:pt-[4rem] 3xl:mb-[2rem]">
            <div className="flex flex-wrap items-center lg:flex-row-reverse">
              <div className="flex flex-wrap items-center ">
                <div className="md:flex cursor-pointer md:items-center lg:mx-[2rem] lg:px-[2rem] lg:border-x lg:border-[#D9D9D9] 1xl:px-[2.5rem] 1xl:mx-[2.5rem] 3xl:px-[3.5rem] 3xl:mx-[3.5rem]">
                  <p className="hidden md:inline-block md:mr-4 xl:text-[1.35rem] 1xl:text-[1.6rem] 3xl:text-[2rem]">
                    Filters:
                  </p>
                  <div
                    className="w-[2.3rem] h-[2.3rem] p-[0.3rem] border border-[#E0E0E0] rounded-[5px] md:w-[4rem] md:h-[4rem] md:p-[1rem] xl:w-[4rem] xl:h-[4rem] 1xl:w-[4.3rem] 1xl:h-[4.3rem] 3xl:w-[5.6rem] 3xl:h-[5.6rem] flex justify-center items-center filter-icon-box"
                    onClick={togglePopup}
                  >
                    <img
                      src="/images/collection-filter-icon.webp"
                      width="20"
                      height="20"
                      className="w-full object-contain h-auto xl:w-[2.8rem]"
                      alt="Filter Icon"
                    />
                  </div>

                  {filterOpen && (
                    <FilterPopup
                      active={filterOpen}
                      togglePopup={togglePopup}
                    />
                  )}
                </div>
                <div className="flex justify-center items-center border border-black rounded-[50%] w-[2.4rem] h-[2.4rem] p-[0.7rem] ml-[1rem] mr-[2rem] cursor-pointer md:w-[4rem] md:h-[4rem] lg:ml-0 lg:rounded-[3rem] lg:w-max lg:px-[2.5rem] 1xl:h-[4.3rem] 2xl:px-[3rem] 3xl:h-[5.6rem] 3xl:px-[4rem]">
                  <p className="hidden lg:block text-[1.2rem] lg:mr-[1.5rem] 3xl:text-[1.5rem]">
                    Clear Fiters
                  </p>
                  <img
                    src="/images/clear-filter-icon.webp"
                    alt="Clear FIlter"
                    width="12"
                    height="12"
                  />
                </div>
              </div>

              <h2 className="text-[1.5rem] md:text-[1.6rem] xl:text-[1.4rem] xl:tracking-[-0.5px] 1xl:text-[1.5rem] 1xl:tracking-[-1px] 2xl:text-[1.8rem] 3xl:text-[2rem]">
                Total 2052 Results Found
              </h2>
            </div>

            <div className="flex flex-wrap items-center">
              <div className="ml-5 md:flex cursor-pointer md:items-center md:ml-8">
                <p className="hidden md:inline-block md:mr-4 xl:text-[1.35rem] 1xl:text-[1.6rem] 3xl:text-[2rem]">
                  Sort by:
                </p>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className=" w-[8rem] whitespace-nowrap  inline-flex justify-between items-center gap-x-1.5 outline-none border border-neutral-400 pl-[1rem] py-[0.4rem] text-[1.04rem] rounded-[0.4rem] md:border md:border-[#E0E0E0] md:h-[4rem] md:min-w-[12rem] md:rounded-[5px] md:bg-transparent md:text-xl xl:text-[1.35rem] 1xl:min-w-[15rem] 3xl:min-w-[19rem] 1xl:text-[1.6rem] 1xl:py-6 xl:h-[4rem] 1xl:h-[4.5rem] 3xl:h-[5.7rem] 3xl:text-[2rem]">
                      {sortTitle}
                      <ChevronDownIcon
                        className="h-8 w-8 object-contain  1xl:w-[2.8rem] 1xl:h-[2.8rem] 3xl:w-[3.5rem] 3xl:h-[3.5rem] text-[#333] font-light"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-[8rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:w-[12rem] 1xl:min-w-[15rem]">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-[0.95rem] md:px-5 md:py-4  md:text-xl xl:text-[1.35rem] xl:py-6 1xl:text-[1.6rem] 3xl:text-[1.8rem]"
                              )}
                              onClick={() =>
                                sortChangeHandle("High To Low", "high")
                              }
                            >
                              High To Low
                            </span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-[0.95rem] md:px-5 md:py-4  md:text-xl xl:text-[1.35rem] xl:py-4 1xl:text-[1.6rem] 3xl:text-[1.8rem]"
                              )}
                              onClick={() =>
                                sortChangeHandle("Low To High", "low")
                              }
                            >
                              Low To High
                            </span>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
