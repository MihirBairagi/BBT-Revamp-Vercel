import React from "react";

const socialLinks = [
  {
    title: "Facebook",
    icon: "/images/contact-us/fb-icon.webp",
    link: "https://www.facebook.com/BBToyz",
  },
  {
    title: "Twitter",
    icon: "/images/contact-us/x-icon.webp",
    link: "https://x.com/BigBoyToyz",
  },
  {
    title: "Linked In",
    icon: "/images/contact-us/linkedin-icon.webp",
    link: "https://www.linkedin.com/company/bigboytoyz/",
  },
  {
    title: "Instagram",
    icon: "/images/contact-us/insta-icon.webp",
    link: "https://www.instagram.com/bigboytoyz_india/",
  },
  {
    title: "Whatsapp",
    icon: "/images/contact-us/whatsapp-icon.webp",
    link: "https://wa.me/919999999983",
  },
];

const contactUsp = [
  {
    title: "(+91) 9999 9999 83",
    subtitle: "Buy Cars",
    icon: "/images/contact-us/contact-icon-1.webp",
    link: "tel:+919999999983",
  },
  {
    title: "(+91) 9999 9999 15",
    subtitle: "Sell Cars",
    icon: "/images/contact-us/contact-icon-2.webp",
    link: "tel:+919999999915",
  },
  {
    title: "(+91) 9999 9999 08",
    subtitle: "cars.co.in",
    icon: "/images/contact-us/contact-icon-3.webp",
    link: "tel:+919999999908",
  },
  {
    title: "(+91) 89999 99627",
    subtitle: "Car Detailing & Modifications",
    icon: "/images/contact-us/contact-icon-5.webp",
    link: "tel:+918999999627",
  },
  {
    title: "(+91) 9999 9999 64",
    subtitle: "Service",
    icon: "/images/contact-us/contact-icon-6.webp",
    link: "tel:+919999999964",
  },
  {
    title: "(+91) 99999 990 30",
    subtitle: "Big Boy Toyz Realty",
    icon: "/images/contact-us/con-bbt-reality-icon.webp",
    link: "tel:+919999999030",
  },
  {
    title: "sales@bigboytoyz.com",
    subtitle: "Email Us",
    icon: "/images/contact-us/contact-icon-8.webp",
    link: "mailto:sales@bigboytoyz.com",
  },
];
const ContactSection = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[10rem] 1xl:py-[12rem] 3xl:py-[15rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex justify-between items-end flex-wrap">
            <div className="w-full text-center md:w-[50%] md:text-left">
              <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] xl:text-[3.7rem] [&>br]:hidden lg:[&>br]:block 1xl:text-[4.2rem] 2xl:text-[4.7rem] 3xl:text-[5.8rem] capitalize lg:leading-[1.2]">
                Drop us A message or call <br /> us on <b>our direct Number</b>
              </h2>
            </div>
            <div className="w-full mt-[3rem] md:w-[50%]">
              <ul className="flex justify-center items-center md:w-max md:ml-auto">
                {socialLinks.map((social, index) => (
                  <li key={index} className="m-[5px] 1xl:m-[6px] 3xl:m-[8px]">
                    <a
                      href={social.link}
                      target="_blank"
                      className="w-[4rem] h-[4rem] flex justify-center items-center p-[9px] border border-[#989898] rounded-[10px] group overflow-hidden hover:bg-white transition-all duration-500 1xl:w-[4.3rem] 1xl:h-[4.3rem] 1xl:p-[1.18rem] 1xl:rounded-[12px] 2xl:w-[4.8rem] 2xl:h-[4.8rem] 2xl:p-[1.35rem] 3xl:w-[5.8rem] 3xl:h-[5.8rem] 3xl:p-[1.7rem]"
                    >
                      <img
                        src={social.icon}
                        alt={social?.title ? social.title : "Social Icon"}
                        className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-y-[1.5rem] mt-[5rem] max-w-[390px] mx-auto sm:max-w-[640px] sm:grid-cols-2 sm:gap-x-[1rem] sm:gap-y-[2.5rem] lg:grid-cols-3 lg:max-w-none lg:mt-[7rem] xl:grid-cols-4 xl:gap-y-[4rem] 1xl:gap-y-[6rem] xl:gap-x-0 1xl:mt-[8rem] 2xl:gap-y-[6.5rem] 3xl:gap-y-[8rem] 3xl:mt-[10rem]">
            {contactUsp.map((usp, index) => (
              <li key={index} className="bg-white px-[2rem] rounded-xl shadow-sm sm:bg-transparent sm:p-0 sm:shadow-none">
                <a href={usp.link} className="flex flex-wrap items-center py-[2rem] sm:py-0">
                  <div className="w-[5.5rem] h-[5.5rem] bg-white rounded-[50%] overflow-hidden p-[1.2rem] flex items-center justify-center border border-[#777777] sm:border-none sm:w-[6.5rem] sm:h-[6.5rem] sm:p-[1.6rem] xl:w-[6rem] xl:h-[6rem] 1xl:w-[7rem] 1xl:h-[7rem] 3xl:w-[9rem] 3xl:h-[9rem] 3xl:p-[1.9rem]">
                    <img
                      src={usp.icon}
                      alt={usp.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-[1] pl-[1.5rem] xl:pl-[1rem]">
                    <p className="text-[1.2rem] font-normal mb-[0.2rem] sm:text-[1.3rem] xl:tracking-tight 1xl:text-[1.4rem] 3xl:text-[1.8rem]">{usp.subtitle}</p>
                    <h6 className="text-[1.4rem] font-medium sm:text-[1.6rem] 1xl:text-[1.9rem] 2xl:text-[2.1rem] 2xl:tracking-tight 3xl:text-[2.6rem]">{usp.title}</h6>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
