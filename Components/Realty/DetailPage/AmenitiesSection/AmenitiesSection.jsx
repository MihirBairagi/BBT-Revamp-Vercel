"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import AmenitiesSlider from "./AmenitiesSlider";
import { amenitiesTabs, lifestyleAmenities, communityAmenities, fitnessAmenities, infraAmenities, saftyAmenities } from "../../data/dummyData";

export default function AmenitiesSection() {
  const [activeAmenities, setActiveAmenities] = useState("amenities1");

  useEffect(() => {
    setTimeout(() => AOS.refreshHard(), 50);
  }, [activeAmenities]);

  return (
    <section
      className="py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-white overflow-x-hidden"
      data-aos="fade-up"
      id="amenities-scroll"
    >
      <div className="container dp-pro-mob">
        <div className="lg:flex lg:items-center text-center lg:text-start lg:justify-between ">
            <div className="mb-[1.5rem]">
                <p className="max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]">Project Amenities</p>
                <h2 className="font-[300] leading-[1.2] tracking-[-0.2rem]">
                Spaces curated for <strong>comfort, community, and everyday living.</strong>
                </h2>
            </div>
        </div>

        {/* TOGGLE */}
        <ul className="flex gap-[1rem] mt-[2.5rem] overflow-x-scroll no-scroll-bar mx-[-3rem] px-[3rem]">
          {amenitiesTabs.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveAmenities(item.id)}
                className={`com-toggle-btn ${
                  activeAmenities === item.id
                    ? "bg-black text-white"
                    : "text-[#676767]"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* SLIDER */}
        {activeAmenities === "amenities1" && (
          <AmenitiesSlider data={lifestyleAmenities} />
        )}
        {activeAmenities === "amenities2" && (
          <AmenitiesSlider data={communityAmenities} />
        )}
        {activeAmenities === "amenities3" && (
          <AmenitiesSlider data={fitnessAmenities} />
        )}
        {activeAmenities === "amenities4" && (
          <AmenitiesSlider data={infraAmenities} />
        )}
        {activeAmenities === "amenities5" && (
          <AmenitiesSlider data={saftyAmenities} />
        )}


      </div>
    </section>
  );
}
