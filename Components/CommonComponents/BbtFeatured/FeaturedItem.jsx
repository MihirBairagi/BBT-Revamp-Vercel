import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedItem = ({ data }) => {
  return (
    <Link
      href={data?.url ? data.url : "#"}
      className="relative block group mr-7 md:mx-10 lg:ml-0 lg:mr-16 xl:mr-20 3xl:mr-28 common-car-item rounded-[3rem] xl:my-5 1xl:rounded-[4rem] 2xl:rounded-[5rem] overflow-hidden"
    >
      <div>
        <Image
          src={
            data?.thumbnail ? data.thumbnail : "/images/bbt-world-item-1.webp"
          }
          alt={data?.title ? data.title : 'BBT World'}
          width="450"
          height="587"
          className="block w-full h-full group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
        />
      </div>
      <h5 className="text-white absolute bottom-14 left-14 2xl:text-4.5xl 3xl:text-6xl 3xl:bottom-24 3xl:left-24">
        {data?.title ? data.title : "BBT World"}
      </h5>
      <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center p-1 absolute top-12 right-12 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 3xl:top-16 3xl:right-16 group-hover:bg-black transition-all duration-500 ease-in">
        <Image
          src="/images/showroom-location-arrow.webp"
          className="object-contain w-4 2xl:w-6 3xl:w-8 group-hover:invert transition-all duration-500 ease-in"
          width="20"
          height="20"
          alt="Arrow Icon"
        />
      </span>
    </Link>
  );
};

export default FeaturedItem;
