import Link from "next/link";
import React from "react";

const FooterCopyRight = () => {
  return (
    <div className="pt-[3rem] text-zinc-400 sm:text-center lg:flex lg:flex-wrap lg:text-left lg:items-center lg:justify-between lg:py-14 3xl:py-24">
      <div className="block lg:flex items-center">
        <p className="mb-4 text-2xl lg:text-lg lg:mb-0 3xl:text-1.6xl">Copyright ©{new Date().getFullYear()} Big Boy Toyz</p>
        <ul className="hidden lg:flex items-center ml-5 footerPrivacyMenu">
          <li><Link href="/privacy-policy" className="text-base relative px-2 xl:text-[1.2rem] 3xl:text-[1.6rem]">Privacy Policy</Link></li>
          <li><Link href="/refund-policy" className="text-base relative px-2 xl:text-[1.2rem] 3xl:text-[1.6rem]">Conditions & Refund</Link></li>
          <li><Link href="/terms-and-conditions" className="text-base relative px-2 xl:text-[1.2rem] 3xl:text-[1.6rem]">Terms of Use</Link></li>
         
        </ul>
      </div>
      <p className="text-2xl lg:text-lg text-zinc-600 3xl:text-1.6xl">
        Website Designed by{" "}
        <a href="https://www.artattackk.com/" target="_blank" className="underline transition-all duration-500 ease-in-out hover:text-[#f1f1f1]">
          Art Attackk
        </a>
      </p>
    </div>
  );
};

export default FooterCopyRight;
