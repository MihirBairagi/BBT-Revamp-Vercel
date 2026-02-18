"use client";

import React, { useEffect, useState } from "react";

import AboutSection from "../../../Components/Insurances/AboutSection/AboutSection";
import InsuranceDetails from "../../../Components/Insurances/InsuranceDetails/InsuranceDetails";
import PopularBrands from "../../../Components/SingleCar/PopularBrands/PopularBrands";
import ShopByCategory from "../../../Components/SingleCar/ShopByCategory/ShopByCategory";
import FloatingForm from "../../../Components/Insurances/FloatingForm/FloatingForm";

import PageBannerSmall from "../../../Components/CommonComponents/PageBannerSmall/PageBannerSmall";

const bannerData = {
  bannerImage: "/images/insurance/life-ins-banner.webp",
  bannerImageMobile: "/images/insurance/life-ins-banner-mob.webp",
  breadcrumb: "Life Insurance",
  title: "With us,<br/> <b>you’re safe</b>",
  description: "A brighter future for the one’s you love",
};
const insuranceDetail = {
  title: `Celebrate life &  <b> secure your tomorrow  with us</b>`,
  usp: [
    {
      title: "Renewal Discounts",
      description:
        "Insure your home and everything in it. BBT’s Home Secure provides all-inclusive protection for your biggest investment and protects you from all your related worries.",
      icon: "/images/insurance/ins-detail-icon-1.webp",
    },
    {
      title: "Accidental Cover",
      description:
        "It provides  compensation in case the owner-driver of the car suffers from bodily  injuries, permanent disability or death following the car accident.",
      icon: "/images/insurance/ins-detail-icon-2.webp",
    },
    {
      title: "Depreciation Cover ",
      description:
        "BBT’s Home Secure provides  all-inclusive protection for your biggest investment and protects you from all your related worries.",
      icon: "/images/insurance/ins-detail-icon-3.webp",
    },
    {
      title: "Third Party Cover",
      description:
        "Third-party insurance is a mandatory motor insurance policy that covers third-party related financial and legal liabilities caused due to an accident from an insured vehicle.",
      icon: "/images/insurance/ins-detail-icon-4.webp",
    },
    {
      title: "Personal Accident Cover",
      description:
        "Personal Accident Insurance policy provides complete financial protection to the insured members against uncertainties such as accidental death.",
      icon: "/images/insurance/ins-detail-icon-5.webp",
    },
  ],
  sidebarUsp: [
    {
      text: "We compare top insurers impartially with insurers.",
      icon: "/images/insurance/ins-sidebar-icon-1.webp",
    },
    {
      text: "Explore Home Insurance plans and get expert.",
      icon: "/images/insurance/ins-sidebar-icon-2.webp",
    },
    {
      text: "Optimize savings with our varied plans & products.",
      icon: "/images/insurance/ins-sidebar-icon-3.webp",
    },
  ],
};

const LifeInsurance = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("afterInsBanner");
      const footer = document.getElementById("footer");

      if (
        secondSection &&
        footer &&
        secondSection.getBoundingClientRect().top <= 0 &&
        footer.getBoundingClientRect().top > window.innerHeight
      ) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <PageBannerSmall data={bannerData} />

      <div id="afterInsBanner">
        <InsuranceDetails data={insuranceDetail} />
        <div className="block xl:hidden bg-black py-[5rem]">
          <FloatingForm />
        </div>
        <AboutSection />
        <div className="bg-white lg:pb-[8rem] xl:pb-[10rem]">
          <PopularBrands />
        </div>
        {/* <ShopByCategory /> */}
      </div>
      <div
        className={`z-100 fixed  left-0 w-full transition-all duration-500 ease-in-out ${
          showForm
            ? "bottom-[5rem] show-from-bottom opacity-[1] hidden xl:block"
            : "opacity-[0] bottom-[100rem]"
        }`}
      >
        <FloatingForm />
      </div>
    </>
  );
};

export default LifeInsurance;
