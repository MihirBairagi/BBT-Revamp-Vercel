import Image from "next/image";
import React from "react";

const certifiedUsp = [
  {
    icon: "/images/bbt-certified-popup-icon-1.webp",
    title: "Zero Tolerance Policy",
    description:
      "We believe in transparent and fair dealings, no refurbished cars.",
  },
  {
    icon: "/images/bbt-certified-popup-icon-2.webp",
    title: "Ncr Check",
    description:
      "Every car goes through a National Crime Record check at the time of procurement to eliminate any possibility of purchasing a car with an NCR case.",
  },
  {
    icon: "/images/bbt-certified-popup-icon-3.webp",
    title: "151 Check Points",
    description:
      "Car comes with 360° inspection report with comfort and ease in driving pleasure.",
  },
  {
    icon: "/images/bbt-certified-popup-icon-4.webp",
    title: "Non Accidental Cars.",
    description:
      "We don't buy car's with any accidental record not even a body part been changed as per service.",
  },
  {
    icon: "/images/bbt-certified-popup-icon-5.webp",
    title: "RTO Physical Check",
    description:
      "We do a complete check of owner and vehicle history with no litigation case on it.",
  },
  {
    icon: "/images/bbt-certified-popup-icon-6.webp",
    title: "Buy Back Agreement",
    description:
      "Assured buy back policy - drive any car from BBT for a year with 25% depreciation with kms limitation on it & 75% will be refunded back to your account.",
  },
  {
    icon: "/images/bbt-certified-popup-icon-7.webp",
    title: "Client’s Confidentiality",
    description:
      "We never disclose our customer details with any third-party as we respect your privacy.",
  },
  {
    icon: "/images/bbt-certified-popup-icon-8.webp",
    title: "Service & Insurance History Check",
    description:
      "Cars include full service history from authorized dealerships. We verify insurance for accident-free claims. Your peace of mind is our priority.",
  },
];

const CertifiedPopup = ({ active, togglePopup }) => {
  return (
    <div
      className={`${
        active ? "opacity-100 flex" : ""
      } fixed w-full h-full left-0 top-0 min-h-screen items-center justify-center opacity-0 transition-all duration-500 z-100`}
    >
      <div
        className={` bg-[#00000099] w-full h-full fixed left-0 top-0 z-10 block opacity-100 transition-all duration-500`}
        onClick={togglePopup}
      ></div>
      <div className="w-[90%] bg-white h-screen max-h-[90vh] rounded-[1rem] z-20 mx-auto relative overflow-x-hidden lg:w-[85%] lg:rounded-[1.5rem] xl:w-[80%] 2xl:max-w-[1600px]">
        <div
          className=" absolute top-[2rem] right-[2rem] w-[5rem] h-[5rem] 1xl:w-[6rem] 1xl:h-[6rem] xl:top-[3rem] xl:right-[3rem] cursor-pointer rounded-[50%] bg-white p-[10px] 3xl:top-[4rem] z-10 2xl:p-[1.5rem]"
          onClick={togglePopup}
        >
          <Image
            src="/images/bbt-certified-popup-close.webp"
            alt="Close Popup"
            className="w-full object-contain"
            width="29"
            height="29"
          />
        </div>
        <div className="popupScrollbar overflow-y-auto h-full px-8 pb-10 xl:px-12 3xl:px-[4rem] 3xl:py-[4rem]">
          <h3 className="text-[2.9rem] lg:text-[3.4rem] xl:text-[3.8rem] 1xl:text-[4rem] 3xl:text-[4.5rem] my-6 xl:my-12">
            BBT Certified
          </h3>
          <div className="flex flex-wrap justify-between">
            {certifiedUsp.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[49%] h-[inherit] px-5 py-10 border border-[#DEDEDE] rounded-[1rem] my-5 lg:w-[31%] xl:w-[24%] relative"
              >
                <div className=" absolute top-[1.4rem] right-[1.4rem] w-[2.5rem] h-[2.5rem] 3xl:w-[3.5rem] 3xl:h-[3.5rem]">
                  <Image
                    src="/images/bbt-certified-popup-green-mark.webp"
                    alt="USP Icon"
                    className="w-full object-contain"
                    width="40"
                    height="40"
                  />
                </div>
                <div className=" max-w-[5rem] 3xl:max-w-[7rem] mb-10">
                  <Image
                    src={item.icon}
                    alt="USP Icon"
                    className="w-full object-contain"
                    width="70"
                    height="68"
                  />
                </div>
                <h4 className="text-[2rem] 3xl:text-[2.5rem]">{item.title}</h4>
                <p className="mt-5 text-[1.6rem] text-[#515151] font-light 3xl:text-[2rem]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertifiedPopup;
