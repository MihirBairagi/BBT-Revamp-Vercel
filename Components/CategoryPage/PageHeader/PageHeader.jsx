"use client";
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FilterPopup from "../../FilterPopup/FilterPopup";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PageHeader = ({ bannerTitle }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSorBy] = useState("");
  const [sortTitle, setSorTitle] = useState("Price");

  const togglePopup = () => {
    setFilterOpen(!filterOpen);
  };

  const sortChangeHandle = (title, value) => {
    setSorTitle(title);
    setSorBy(value);
  };
  return (
    <section className="bg-white md:bg-[#f3f3f3] pt-16 xl:pt-28 xl:pb-10 3xl:pt-44 3xl:pb-20">
      <div className="container">
        <div className=" block xl:flex xl:flex-wrap xl:items-center xl:justify-between px-5">
          <p className="text-center text-1.4rem xl:text-left xl:text-[1.6rem] 3xl:text-[2.4rem]" >
            {bannerTitle}
          </p>
          <div className="flex flex-wrap items-center mt-16 pt-16 border-t border-[#D9D9D9] justify-end xl:mt-0 xl:pt-0 xl:border-0">
            <div className="md:flex cursor-pointer md:items-center brand-page-filter">
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
                <FilterPopup active={filterOpen} togglePopup={togglePopup} />
              )}
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
