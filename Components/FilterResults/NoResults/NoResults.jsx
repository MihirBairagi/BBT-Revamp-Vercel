"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useCollectionContextOptional } from "../../../app/lib/contexts/CollectionContext";

const NoResults = () => {
  const router = useRouter();
  const collectionContext = useCollectionContextOptional();

  const handleClear = () => {
    try {
      // Reset filters and sorting in context if available
      collectionContext?.resetAll?.();
    } catch (_) {}

    // Remove any query params from the URL to fully clear filters
    try {
      router.replace("/collection");
    } catch (_) {}

    // Ensure user is brought to the top
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (_) {}
  };

  return (
    <section className="bg-white md:bg-[#f3f3f3] ">
      <div className="max-1920">
        <div className="container">
          <div className="text-center py-[5rem] border-t border-[#D9D9D9] lg:mt-[3rem] 3xl:mt-[4rem] 1xl:pt-[9rem] 1xl:pb-[12rem]">
            <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-2px] text-[2.9rem] xl:text-[3.75rem] 1xl:text-[4.2rem] 1xl:mt-[2rem] 2xl:text-[4.3rem] 3xl:text-[5.8rem]">
              <b>
                Oops! No Supercars Found! <br />
              </b>{" "}
              Check out our latest supercar arrivals!
            </h2>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClear}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleClear();
              }}
              className="flex justify-center items-center border border-black px-[2.5rem] py-[1rem] w-max mx-auto cursor-pointer mt-[2rem] md:h-[4rem] rounded-[3rem] lg:w-max 1xl:h-[4.3rem] 2xl:px-[3rem] 3xl:h-[5.6rem] 3xl:px-[4rem] 3xl:mt-[4rem]"
            >
              <p className="text-[1.2rem] mr-[1.5rem] 3xl:text-[1.5rem]">Clear Filters</p>
              <img
                src="/images/clear-filter-icon.webp"
                alt="Clear Filters"
                width="12"
                height="12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoResults;
