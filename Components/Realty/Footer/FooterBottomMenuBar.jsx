"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BottomSheetMenu from "./BottomSheetMenu";

function FooterBottomMenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const applyPadding = () => {
      if (window.innerWidth < 1024) {
        footer.style.paddingBottom = "10rem";
      } else {
        footer.style.paddingBottom = "";
      }
    };

    applyPadding();
    
    window.addEventListener("resize", applyPadding);

    return () => {
      footer.style.paddingBottom = "";
      window.removeEventListener("resize", applyPadding);
    };
  }, []);

  return (
    <>
      <div className="lg:hidden w-[100vw] overflow-hidden" >
        {/* Bottom Bar */}
        <div  className={`fixed bottom-0 left-0  w-full bg-[#232323] flex items-center text-white z-[101] `}>

          <a
            href="tel:+91 99999 990 30"
            className="flex items-center justify-center w-1/3 px-8 py-9"
          >
            <Image
              width={30}
              height={30}
              className="w-9 h-9 object-contain mr-4"
              src="/realty/images/footer-bar-icon-2.png"
              alt="Call"
            />
            <p className="text-xl">Call Us</p>
          </a>

          <a
            href="https://wa.me/919999999030?text=Hi%20there"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-1/3 px-8 py-3 border-l border-r border-[#676767]"
          >

            <Image
              width={30}
              height={30}
              className="w-9 h-9 object-contain mr-4"
              src="/realty/images/footer-bar-icon-1.png"
              alt="Whatsapp"
            />
            <p className="text-xl">Whatsapp</p>
          </a>


          {/* MORE INFO */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="flex items-center justify-center w-1/3 px-8 py-9"
          >
            <Image
              width={30}
              height={30}
              className="w-9 h-9 object-contain mr-4"
              src="/realty/images/footer-bar-icon-3.png"
              alt="More Info"
            />
            <p className="text-xl">More Info</p>
          </button>
        </div>

        {/* Bottom Sheet Menu */}
        <BottomSheetMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
      </div>
    </>
  );
}

export default FooterBottomMenuBar;
