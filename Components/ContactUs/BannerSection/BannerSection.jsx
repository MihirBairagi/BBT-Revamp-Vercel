import Link from "next/link";
import React from "react";

const contactOptions = [
  {
    icon: "/images/contact-us/banner-icon-1.webp",
    title: "(+91) 9999 9999 83",
    subtitle: "Buy Cars",
  },
  {
    icon: "/images/contact-us/banner-icon-2.webp",
    title: "(+91) 9999 9999 15",
    subtitle: "Sell Cars",
  },
  {
    icon: "/images/contact-us/banner-icon-3.webp",
    title: "(+91) 9999 9999 08",
    subtitle: "cars.co.in",
  },
  {
    icon: "/images/contact-us/banner-icon-4.webp",
    title: "(+91) 8999 9996 27",
    subtitle: "Car Detailing",
  },
  {
    icon: "/images/contact-us/banner-icon-5.webp",
    title: "(+91) 9999 9999 99",
    subtitle: "Modifications & Upgrade",
  },
  {
    icon: "/images/contact-us/banner-icon-6.webp",
    title: "(+91) 89999 992 64",
    subtitle: "Service",
  },
  {
    icon: "/images/contact-us/banner-icon-7.webp",
    title: "(+91) 9999 9999 99",
    subtitle: "Insurance",
  },
  {
    icon: "/images/contact-us/banner-icon-8.webp",
    title: "sales@bigboytoyz.com",
    subtitle: "Email Us",
  },
];

const BannerSection = () => {
  return (
    <section className="bg-[#F4F4F1] py-[5rem] lg:py-[7rem] xl:py-[9rem] 1xl:py-[10rem] 3xl:py-[12rem]">
      <div className="max-1920">
        <div className="container text-center ">
          <div className=" mb-[2rem] lg:mb-[1.7rem]">
            <p className="flex flex-wrap justify-center items-center font-light breadcrumbs">
              <Link
                href="/"
                className="text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]"
              >
                Home
              </Link>

              <img
                src="/images/breadcrumb-arrow.webp"
                className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]"
                width="6"
                height="11"
                alt="Arrow Icon"
              />
              <span className="text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
                Contact Us
              </span>
            </p>
          </div>
          <h1 className="font-[200] text-[4.5rem] [&>b]:font-[400] leading-[1] tracking-[-0.2rem] lg:[&>br]:hidden lg:text-[5rem] 1xl:text-[6rem] 1xl:tracking-[-0.4rem] 2xl:text-[6.3rem] 3xl:text-[7.5rem] 2xl:tracking-[-0.5rem]">
            Get in <b>Touch</b>
          </h1>
          <p className="text-[1.2rem] mt-[1rem] font-light md:text-[1.5rem] lg:text-[1.77rem] 1xl:text-[2rem] 2xl:text-[2.2rem] 3xl:text-[2.8rem]">
            This may be beginning of our journey
          </p>

          <div className="grid grid-cols-2 gap-x-[1rem] gap-y-[1.5rem] mt-[4rem] sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-[1.5rem] lg:gap-y-[2rem] xl:gap-x-[2rem] xl:gap-y-[2.5rem] xl:mt-[5rem] 1xl:gap-x-[3rem] 1xl:gap-y-[3.5rem] 3xl:mt-[7rem] 3xl:gap-y-[4.5rem]" >
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-[1rem] px-[1rem] py-[2.5rem] text-center flex flex-col items-center justify-center lg:px-[1.5rem] lg:py-[3rem] lg:rounded-[1.5rem] xl:py-[4rem] xl:px-[2rem] xl:rounded-[2rem] 1xl:py-[5rem] 3xl:py-[5rem] 3xl:rounded-[2.5rem]"
              >
                <img
                  src={option.icon}
                  alt="Icon"
                  className="h-auto w-[3.5rem] inline-block mx-auto xl:w-[4.5rem] 1xl:w-[5.5rem] 2xl:w-[6rem] 3xl:w-[8rem]"
                  width="80"
                  height="70"
                />
                <h6 className="text-[1.2rem] sm:text-[1.4rem] xl:text-[1.8rem] 1xl:text-[2rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[1.5rem] mb-[0.5rem] lg:mt-[2rem] xl:mt-[3rem] 1xl:mt-[4rem] 3xl:mt-[5rem]">{option.title}</h6>
                <p className="text-[1rem] sm:text-[1.2rem] xl:text-[1.6rem] 2xl:text-[1.7rem] 3xl:text-[2rem]">{option.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
