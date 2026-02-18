import React from "react";
import CommonInfoUsp from "../CommonComponents/CommonInfoUsp/CommonInfoUsp";
import { formatProductPrice, formatDiscountedPrice } from "../../app/lib/utils/productUtils";

// Fallback dummy data (used when carData is not available)
const dummyCarData = {
  _id: "003",
  title: "Mercedes-Benz SLC 43 AMG",
  brand: "Mercedes Benz",
  model: "SLC 43 AMG",
  price: "4,99,00,000",
  registrationYear: "2022",
  registrationState: "Delhi",
  registrationNumber: "112233",
  kmDriven: "3500",
  fuelType: "Petrol",
  engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
  torque: "440 NM @ 1800 RPM",
  power: "197PS / 194BHP @ 3600 RPM",
  transmission: "9G-TRONIC Automatic Transmission",
  driveTrain: "RWD",
  thumbnail: "/images/inclusion-item-3.webp",
  gallery: [
    "/images/inclusion-item-3.webp",
    "/images/inclusion-item-2.webp",
    "/images/inclusion-item-1.webp",
  ],
  isBooked: false,
  isSoldOut: true,
  isCertified: false,
};

/**
 * BookingCar component
 * Displays selected car information on the booking page.
 * If real car data (carData prop) is provided, it shows that; otherwise, it falls back to dummy data.
 */
const BookingCar = ({ carData }) => {
  // Prefer real data if available, else use fallback
  const data = carData || dummyCarData;

  return (
    <div className="bg-white block transition-all ease-in-out common-car-item duration-500">
      <div
        className={`px-14 pt-12 pb-20 sm:px-8 sm:pt-8 sm:pb-16 lg:pb-10 3xl:px-20 3xl:pt-12 3xl:pb-16`}
      >
        <p
          className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-lg 3xl:px-8`}
        >
          Reg.Year : {data.registrationYear}
        </p>
        <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:tracking-tighter 3xl:text-[2.8rem] 3xl:mt-8">
          {data.title}
        </h4>
        <p className="text-[1.8rem] font-medium sm:text-[1.7rem] lg:text-[1.5rem] xl:text-[1.875rem] lg:mt-2 3xl:mt-4 mb-12 sm:mb-8 lg:mb-6 3xl:text-[2.2rem] 3xl:mb-10">
          {formatProductPrice(data)}
          {formatDiscountedPrice(data) && (
            <span className="text-lg ml-2 line-through text-gray-500">
              {formatDiscountedPrice(data)}
            </span>
          )}
        </p>

        {/* ---- Common Components ---- */}
        <CommonInfoUsp data={data} />
        {/* ---- Common Components ---- */}
      </div>
      <div className=" overflow-hidden">
        <img
          src={data.thumbnail}
          alt="Car Thumbnail"
          width="390"
          height="285"
          className="object-cover w-full block h-full"
        />
      </div>
    </div>
  );
};

export default BookingCar;
