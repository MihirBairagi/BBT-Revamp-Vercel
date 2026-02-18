import React from "react";
import Image from "next/image";
import Link from "next/link";

const CarModelsCard = () => {
  return (
    <div className="mr-4 lg:mr-10 xl:mr-20 1xl:mr-28 3xl:mr-32">
      <Link href="#">
        <div className="bg-white rounded-xl overflow-hidden">
          <Image
            src="/images/aston-martin/aston-martin-model-1.webp"
            width="282"
            height="179"
            className="w-full object-cover block"
            alt="Car Image"
          />
          <div className="py-16 px-10 flex justify-between 3xl:py-28 3xl:px-20">
            <h3 className="font-medium text-4xl 3xl:text-6xl">DB 9</h3>
            <Image
              src="/images/showroom-location-arrow.webp"
              width="12"
              height="12"
              className="w-8 object-contain 3xl:w-12"
              alt="Arrow Icon"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarModelsCard;
