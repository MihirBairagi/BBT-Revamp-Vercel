"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GiftYourself = ({ brandData }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Use brand data or fallback
  const brandName = brandData?.name || "BMW";
  const displayName = brandName.charAt(0).toUpperCase() + brandName.slice(1).toLowerCase();

  return (
    <section className="bg-[#F6F6F6] ">
      <div className="max-1920">
        <div className="container">
          <div
          className="py-24 xl:py-36 3xl:py-[15rem] border-t border-t-[#d9d9d9]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h2 className="text-[2.9rem] font-normal leading-[1.1] mb-8 xl:text-[3.4rem] 1xl:text-[4rem] 1xl:mb-14 3xl:text-[4.5rem]  md:[&_br]:hidden">
              Gift Yourself <br />
              The Best Used {displayName}!
            </h2>
            <p className="text-[1.3rem] font-light [&>strong]:font-medium [&>b]:font-medium xl:text-[1.8rem] xl:leading-[1.6] 1xl:text-[2.2rem] 3xl:text-[2.8rem]">
              You already have a wish to fulfill of buying a {displayName}, then complete
              it by buying the best used {displayName} at the best deal. Big Boy Toyz's
              mission is to deliver the pre-owned extravagant vehicle with the
              best quality at a minimal price. Having the showroom across India,
              you can visit to buy used {displayName} cars, by inspecting in-person.
              Customer satisfaction is our priority, and your utmost affection
              lies in buying the best used {displayName} cars at a minimal price, then Big
              Boy Toyz is the one-stop hub for all second-hand luxury cars.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftYourself;
