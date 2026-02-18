"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import VisitPopup from "./VisitPopup";

function FixedBar() {
  const sentinelRef = useRef(null);
  const lastScrollY = useRef(0);
  const footerRef = useRef(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);


  const [isFixed, setIsFixed] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  // ===============================
  // DESKTOP ONLY behavior
  // ===============================
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 🚫 DO NOTHING ON MOBILE
    if (window.innerWidth < 1024) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY.current;

        // Show only when scrolling DOWN past section
        if (scrollingDown && !entry.isIntersecting) {
          setIsFixed(true);
        }

        // Hide when scrolling UP or section visible
        if (!scrollingDown || entry.isIntersecting) {
          setIsFixed(false);
        }

        lastScrollY.current = currentScrollY;
      },
      { threshold: 0 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  if (typeof window === "undefined") return;
  if (window.innerWidth < 1024) return;

  footerRef.current = document.querySelector("footer");
  if (!footerRef.current) return;

  const footerObserver = new IntersectionObserver(
    ([entry]) => {
      setIsFooterVisible(entry.isIntersecting);
    },
    {
      threshold: 0,
    }
  );

  footerObserver.observe(footerRef.current);

  return () => footerObserver.disconnect();
}, []);


  return (
    <>
      {/* Sentinel — desktop only */}
      <div ref={sentinelRef} className="hidden lg:block h-[1px] w-full" />

      {/* Floating Bar */}
      <div
        className={`visit-floating-box  z-80 lg:z-100
          left-1/2 -translate-x-1/2 w-max bg-[#161616] rounded-[3rem] text-white
          flex items-center justify-center
          
          ${
            isFixed && !isFooterVisible
              ? "hidden lg:flex fixed bottom-[3rem] opacity-100 py-[1.2rem] px-[1.5rem] transition-all duration-300"
              : "relative bottom-[45vh] lg:opacity-0 lg:pointer-events-none h-0 overflow-hidden py-[0] px-[0] transition-all duration-0"
          }


          // Mobile behavior
          lg:rounded-full `
        }
      >
        <div className="icon-box mr-[2.5rem]">
          <img
            className="w-[8rem] lg:w-[7rem] 3xl:w-[10rem]"
            src="/realty/images/dp-proj-dp.webp"
            alt=""
          />
        </div>

        <div className="lg:flex lg:items-center">
          <div>
            <p className="max-[1023px]:text-[2rem] f-26 font-medium mb-[0.5rem]">
              Plan a private walkthrough
            </p>
            <p className="max-[1023px]:text-[1.4rem] f-24 text-[#808080]">
              Limited visit slots available
            </p>
          </div>

          <div className="lg:ml-[3rem] 3xl:ml-[4.5rem]">
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                setOpenPopup(true);
              }}
              className="com-btn bg-black text-white border-[white]
                font-normal justify-center"
            >
              Request Visit
            </Link>
          </div>
        </div>
      </div>

      <VisitPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </>
  );
}

export default FixedBar;
