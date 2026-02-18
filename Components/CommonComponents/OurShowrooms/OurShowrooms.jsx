"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./OurShowrooms.module.css";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    city: "DEL",
    sector: "Gurgaon, Sector 37",
    url: "#",
    video: "/videos/showroom-vid-gurgaon.webm",
  },
  {
    city: "BOM",
    sector: "Mumbai, Andheri East",
    url: "#",
    video: "/videos/showroom-vid-mumbai.webm",
  },
  {
    city: "HYD",
    sector: "Hyderabad,  Banjara Hills",
    url: "#",
    video: "/videos/showroom-vid-hyderabad.webm",
  },
  {
    city: "AMD",
    sector: "Gujarat, Ahmedabad",
    url: "#",
    video: "/videos/showroom-vid-ahemdabad.webm",
  },
  {
    city: "BLR",
    sector: "Bengaluru, Residency Road",
    url: "#",
    video: "/videos/showroom-vid-bangalore.webm",
  },
];

const OurShowrooms = ({ bg }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const showroomCount = useRef();
  const videoRefs = useRef([]);

  useEffect(() => {
    // gsap.to(showroomCount.current, {
    //   duration: 1.5,
    //   innerHTML: 6,
    //   roundProps: "innerHTML",
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: showroomCount.current,
    //     // markers: true,
    //     start: "top 100%",
    //     end: "top 82%",
    //     toggleActions: "restart none none none",
    //   },
    // });

    // gsap.to(showroomCount.current, {
    //   duration: 1.5,
    //   innerHTML: 6,
    //   roundProps: "innerHTML",
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: showroomCount.current,
    //     // markers: true,
    //     start: "bottom 5%",
    //     end: "bottom 20%",
    //     toggleActions: "restart none restart none",
    //   },
    // });

    gsap.registerPlugin(ScrollTrigger);

    function animateCounter(counterEl, finalNumber, duration = 3) {
      const characters = finalNumber.toString().split("");
      counterEl.innerHTML = ""; // Clear

      characters.forEach((char) => {
        if (char === ".") {
          const dot = document.createElement("div");
          dot.classList.add("decimal-point");
          dot.textContent = ".";
          counterEl.appendChild(dot);
        } else {
          const container = document.createElement("div");
          container.classList.add("digit-container");

          const wrapper = document.createElement("div");
          wrapper.classList.add("digit-wrapper");

          for (let i = 0; i <= 9; i++) {
            const numDiv = document.createElement("div");
            numDiv.textContent = i;
            wrapper.appendChild(numDiv);
          }

          const finalDiv = document.createElement("div");
          finalDiv.textContent = char;
          wrapper.appendChild(finalDiv);

          container.appendChild(wrapper);
          counterEl.appendChild(container);

          requestAnimationFrame(() => {
            const digitHeight = wrapper.children[0].offsetHeight;
            const totalDigits = wrapper.children.length;

            gsap.set(wrapper, { y: 0 });
            gsap.to(wrapper, {
              y: `-${(totalDigits - 1) * digitHeight}px`,
              duration: duration,
              ease: "power4.out",
              scrollTrigger: {
                trigger: counterEl,
                start: "top 90%",

                //   toggleActions: "play reset play reset",
                toggleActions: "play none none reset",
              },
            });
          });
        }
      });
    }

    // Animate all counters on the page
    document.querySelectorAll(".counter").forEach((counter) => {
      const count = counter.getAttribute("data-count");
      animateCounter(counter, count);
    });
  }, []);

  // Video on Hover
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, locations.length);
  }, [locations]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section
      className={`${
        bg ? `bg-[${bg}]` : "lg:bg-white"
      } py-24 lg:py-40 2xl:py-52 3xl:py-72 showroom-counter-section`}
    >
      <div className="max-1920">
        <div className="container">
          <h2
            className={`mb-16 text-black tracking-tighter relative titleWithLine`}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <span
              className={`${
                bg ? `lg:bg-[${bg}]` : "lg:bg-white"
              } lg:pr-10 relative z-10`}
            >
              Our Showrooms
            </span>
          </h2>
          <p
            className={`hidden lg:block mt-5 text-6xl leading-snug tracking-tight font-normal 2xl:tracking-[-3px] 2xl:text-[4.4rem] 2xl:leading-1.3 2xl:mt-8 3xl:mt-16 [&>br]:hidden xl:[&>br]:block 3xl:text-[5.5rem]`}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
           Our mission is to redefine the automotive landscape by setting new standards of innovation and impact. Feel free to visit our showrooms and explore our fascinating collection of supercars, and stay tuned as we gear up to expand even more!
          </p>
          <div className="lg:flex flex-row-reverse items-center lg:mt-24 3xl:mt-36">
            {/* <LocationCounter /> */}
            <div className="text-center flex justify-center items-center font-[500] text-24xl mb-20 leading-0.8 lg:justify-end lg:mb-0 lg:w-[45%] lg:text-[27rem] lg:tracking-tight lg:text-right 1xl:text-[35rem] 3xl:text-[45rem]">
              {/* 0 <span ref={showroomCount}></span> */}0
              <span className="counter" data-count={locations.length}>
                6
              </span>
            </div>

            <ul
              className="[&>*:last-child]:border-b border-gray-300 lg:w-[53%] lg:pr-10 xl:w-55% xl:mr-auto"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              {locations.map((location, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className={`border-t border-gray-300 ${styles.listItem} sm:mx-[0] px-[3rem] sm:px-[0]`}
                >
                  <Link href="/showrooms" className="transition-all duration-500 ease-in relative block">
                    <div
                      className={`${styles.mapImageBox} hidden lg:block absolute z-10`}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={location?.video}
                        width="330"
                        height="440"
                        className="block object-contain w-full h-full"
                        preload="auto"
                        playsInline
                        muted
                        loop
                      ></video>
                    </div>
                    <div
                      href="#"
                      className="flex justify-between py-8 xl:px-8 xl:py-10 2xl:py-12 3xl:py-16"
                    >
                      <div className="w-9/12 lg:flex lg:items-center">
                        <h3 className="text-[2.4rem] font-semibold lg:w-5.5/12 xl:text-4.5xl 2xl:text-5xl 3xl:text-[3.8rem] transition-all duration-300 ease-in">
                          {location.city}
                        </h3>
                        <p className="text-[1.5rem] font-light text-gray-500 mt-2 lg:mt-0 lg:text-xl 3xl:text-[1.8rem] transition-all duration-300 ease-in 1xl:text-2xl">
                          {location.sector}
                        </p>
                      </div>
                      <img
                        src="/images/showroom-location-arrow.webp"
                        className="w-6 object-contain xl:w-8 1xl:w-9 2xl:w-10 2xl:max-h-[2.7rem] rotate-[45deg] sm:rotate-0"
                        width="27"
                        height="27"
                        alt="Arrow Icon"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurShowrooms;
