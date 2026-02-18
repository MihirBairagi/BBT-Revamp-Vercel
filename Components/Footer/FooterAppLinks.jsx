import Image from "next/image";
import React from "react";

const socialLinks = [
  {
    title: "Facebook",
    icon: "/images/fb-icon-white.webp",
    link: "https://www.facebook.com/BBToyz",
  },
  {
    title: "Twitter",
    icon: "/images/x-icon-white.webp",
    link: "https://x.com/BigBoyToyz",
  },
  {
    title: "Linked In",
    icon: "/images/linkedin-icon-white.webp",
    link: "https://www.linkedin.com/company/bigboytoyz/",
  },
  {
    title: "Instagram",
    icon: "/images/insta-icon-white.webp",
    link: "https://www.instagram.com/bigboytoyz_india/",
  },
  {
    title: "YouTube",
    icon: "/images/youtube-icon-white.webp",
    link: "https://www.youtube.com/@bigboytoyz_india",
  },
    {
    title: "SnapChat",
    icon: "/images/snapchat-icon-white.webp",
    link: "https://snapchat.com/t/X4QEdtzQ",
  },
];

const FooterAppLinks = () => {
  return (
    <div className="py-16 footer-app-links text-white sm:text-center lg:flex lg:justify-between lg:flex-wrap lg:text-left lg:items-center border-b border-b-[#ebebf01a]">
      <div className="w-full lg:w-max lg:flex lg:flex-wrap">
        <div className="lg:mr-20">
          <h4 className="font-medium text-3xl lg:text-xl 1xl:text-1xl 3xl:text-1.9xl">
            Download Big Boy Toyz App!
          </h4>
          <p className="font-light mt-3 mb-8 text-zinc-400 text-2xl lg:text-lg lg:mb-0 3xl:text-1xl 3xl:mt-6">
            Application available on both platforms
          </p>
        </div>
        <div className="flex items-center sm:justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.bigboytoyzapp&pcampaignid=web_share"
            target="_blank"
            className="group transition-all duration-500 ease-in-out hover:bg-[#222] inline-block"
          >
            <Image
              src="/images/play-store-footer.webp"
              width="138"
              height="40"
              alt="Google Play"
              className=" 3xl:w-64 object-contain transition-all duration-500 ease-in-out"
            />
          </a>
          <span className="w-7 h-7 footerAppDivider flex items-center justify-center text-xs p-2 mx-5 opacity-50 3xl:w-9 3xl:h-9 rounded-[50%] leading-[1] border border-[#fff]">
            OR
          </span>
          <a
            href="https://apps.apple.com/in/app/big-boy-toyz/id1529588618"
            target="_blank"
            className="group transition-all duration-500 ease-in-out hover:bg-[#222] inline-block"
          >
            <Image
              src="/images/app-store-footer.webp"
              width="138"
              height="40"
              alt="App Store"
              className=" 3xl:w-64 object-contain transition-all duration-500 ease-in-out"
            />
          </a>
        </div>
      </div>
      <ul className="w-full lg:w-max flex items-center gap-[2rem] mt-[5rem] lg:mt-0">
        {socialLinks.map((item ,index) => (
          <li key={index}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-[5px]"
          >
            <img src={item.icon} alt={item.title} className="object-contain max-h-[2rem] 2xl:max-h-[2.4rem] transition-all duration-500 hover:scale-110" />
          </a>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterAppLinks;
