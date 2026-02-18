"use client";
import React, { useState } from "react";
import CollectionItem from "../../CommonComponents/CollectionItem/CollectionItem";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";

const cars = [
  {
    _id: "001",
    title: "2011 Aston Martin Vantage V8",
    brand: "Aston Martin",
    model: "Vantage V8",
    price: "2,49,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/aston-martin/aston-martin/aston-martin-vintage.webp",
    gallery: [
      "/images/aston-martin/aston-martin-vintage.webp",
      "/images/aston-martin/aston-martin-vintage.webp",
      "/images/aston-martin/aston-martin-vintage.webp",
    ],
    isBooked: false,
    isSoldOut: true,
  },
  {
    _id: "002",
    title: "2011 Aston Martin Vantage",
    brand: "Aston Martin",
    model: "Vantage",
    price: "2,49,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/aston-martin/aston-martin/aston-martin-vintage.webp",
    gallery: [
      "/images/aston-martin/aston-martin-vintage.webp",
      "/images/aston-martin/aston-martin-vintage.webp",
      "/images/aston-martin/aston-martin-vintage.webp",
    ],
    isBooked: false,
    isSoldOut: true,
  },
  {
    _id: "003",
    title: "Aston Martin Rapide S",
    brand: "Aston Martin",
    model: "Rapide S",
    price: "2,49,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/aston-martin/aston-martin/aston-martin-rapide-s.webp",
    gallery: [
      "/images/aston-martin/aston-martin-rapide-s.webp",
      "/images/aston-martin/aston-martin-rapide-s.webp",
      "/images/aston-martin/aston-martin-rapide-s.webp",
    ],
    isBooked: false,
    isSoldOut: true,
  },
  {
    _id: "004",
    title: "Aston Martin Rapide",
    brand: "Aston Martin",
    model: "Rapide",
    price: "2,49,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/aston-martin/aston-martin/aston-martin-rapide.webp",
    gallery: [
      "/images/aston-martin/aston-martin-rapide.webp",
      "/images/aston-martin/aston-martin-rapide.webp",
      "/images/aston-martin/aston-martin-rapide.webp",
    ],
    isBooked: false,
    isSoldOut: true,
  },
  {
    _id: "005",
    title: "Aston Martin Rapide",
    brand: "Aston Martin",
    model: "Rapide",
    price: "2,49,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/aston-martin/aston-martin/aston-martin-rapide-2.webp",
    gallery: [
      "/images/aston-martin/aston-martin-rapide-2.webp",
      "/images/aston-martin/aston-martin-rapide-2.webp",
      "/images/aston-martin/aston-martin-rapide-2.webp",
    ],
    isBooked: false,
    isSoldOut: true,
  },
  {
    _id: "006",
    title: "Aston Martin Rapide S",
    brand: "Aston Martin",
    model: "Rapide S",
    price: "2,49,00,000",
    registrationYear: "2022",
    registrationState: "Gujarat",
    registrationNumber: "112233",
    kmDriven: "12500",
    fuelType: "Petrol",
    engineType: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
    torque: "440 NM @ 1800 RPM",
    power: "197PS / 194BHP @ 3600 RPM",
    transmission: "9G-TRONIC Automatic Transmission",
    driveTrain: "RWD",
    thumbnail: "/images/aston-martin/aston-martin/aston-martin-rapide-s-2.webp",
    gallery: [
      "/images/aston-martin/aston-martin-rapide-s-2.webp",
      "/images/aston-martin/aston-martin-rapide-s-2.webp",
      "/images/aston-martin/aston-martin-rapide-s-2.webp",
    ],
    isBooked: false,
    isSoldOut: true,
  },
];

const CarList = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  return (
    <section className="bg-white">
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
      <div className="container">
        <h3 className="text-3xl py-8 border-t border-neutral-400 tracking-tight">
          Total 7 Results Found
        </h3>
      </div>
      <div>
        {cars.map((item) => (
          <CollectionItem
            data={item}
            key={item._id}
            popupToggler={togglePopup}
          />
        ))}
      </div>
    </section>
  );
};

export default CarList;
