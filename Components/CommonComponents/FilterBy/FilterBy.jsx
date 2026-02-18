
import React, { useState } from "react";
import FilterPopup from "../../FilterPopup/FilterPopup";

const FilterBy = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const togglePopup = () => {
    setFilterOpen(!filterOpen);
  };
  return (
    <>
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
    </>
  );
};

export default FilterBy;
