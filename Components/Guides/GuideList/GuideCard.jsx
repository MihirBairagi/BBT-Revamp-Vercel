import Link from "next/link";
import React from "react";

const GuideCard = ({ data }) => {
  return (
    <Link
      href={`/guides/${data._id}`}
      className="relative block group common-car-item rounded-[4rem] 1xl:rounded-[5rem] 3xl:rounded-[5.8rem] overflow-hidden min-h-[350px]"
    >
      <div>
        <img
          src={
            data?.thumbnail ? data.thumbnail : "/images/bbt-world-item-1.webp"
          }
          alt="Thumbnail"
          width="475"
          height="620"
          className="block object-cover w-full h-full group-hover:scale-[1.1] transition-all duration-500 ease-in-out min-h-[300px] aspect-[9/12]"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full px-[4rem] py-[4rem] sm:py-[6rem] sm:px-[6rem] md:py-[4rem] md:px-[4rem] xl:px-[3rem] 1xl:py-[5rem] 2xl:pl-[4rem] flex flex-col justify-end 3xl:pb-[7rem] 3xl:pl-[5rem] bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.2)]">
        <p className="font-light text-white text-[1.2rem] mb-[1rem] xl:text-[1.4rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]">
          {data.publishedDate}
        </p>
        <h5 className="text-white w-full font-normal text-[2rem] sm:text-[2.4rem] md:text-[2.2rem] xl:text-[2.2rem] 1xl:text-[2.5rem] 2xl:leading-[1.28] 2xl:tracking-[-1px] 2xl:text-[2.7rem] 3xl:text-[3.5rem]">
          {data.title}
        </h5>
      </div>
      <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center sm:w-[6rem] sm:h-[6rem] p-1 absolute top-[2.5rem] right-[2.5rem] sm:right-[4rem] sm:top-[4rem] md:top-12 md:right-12 xl:w-[4.3rem] xl:h-[4.3rem] 1xl:w-[5.5rem] 1xl:h-[5.5rem] 1xl:top-[2.5rem] 1xl:right-[2.5rem] 3xl:w-[6.7rem] 3xl:h-[6.7rem] 3xl:top-16 3xl:right-16 group-hover:bg-black transition-all duration-500 ease-in">
        <img
          src="/images/showroom-location-arrow.webp"
          className="object-contain w-4 sm:w-[2rem] xl:w-[1.5rem] 2xl:w-6 3xl:w-[2.2rem] group-hover:invert transition-all duration-500 ease-in"
          width="22"
          height="22"
          alt="Arrow Icon"
        />
      </span>
    </Link>
  );
};

export default GuideCard;
