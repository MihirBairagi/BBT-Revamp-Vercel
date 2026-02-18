"use client";
import React from 'react'
import { useRef, useState, useEffect } from "react";


function ShowreelSection() {

    
    // 2 video code 
    const desktopRef = useRef(null);
    const mobileRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Play the correct video depending on current viewport width (lg breakpoint = 1024px)
    const handlePlay = () => {
        const isDesktop = typeof window !== "undefined" && window.matchMedia("(min-width:1024px)").matches;
        const vid = isDesktop ? desktopRef.current : mobileRef.current;
        if (!vid) return;
        // ensure other video is paused
        if (desktopRef.current && desktopRef.current !== vid) desktopRef.current.pause();
        if (mobileRef.current && mobileRef.current !== vid) mobileRef.current.pause();

        vid.currentTime = 0;
        vid.play().catch((err) => {
        // handle play error (autoplay policies etc.)
        console.warn("Play failed:", err);
        });
        setIsPlaying(true);
    };

    const handlePause = () => {
        if (desktopRef.current) desktopRef.current.pause();
        if (mobileRef.current) mobileRef.current.pause();
        setIsPlaying(false);
    };

    // When video ends, reset playing state
    useEffect(() => {
        const d = desktopRef.current;
        const m = mobileRef.current;
        const onEnded = () => setIsPlaying(false);

        if (d) d.addEventListener("ended", onEnded);
        if (m) m.addEventListener("ended", onEnded);

        return () => {
        if (d) {
            d.removeEventListener("ended", onEnded);
            d.pause();
        }
        if (m) {
            m.removeEventListener("ended", onEnded);
            m.pause();
        }
        };
    }, []);

    // classes based on isPlaying — keep simple and explicit
    const desktopVideoClass = isPlaying ? "hidden lg:block" : "hidden";
    const mobileVideoClass = isPlaying ? "block lg:hidden" : "hidden";

    const desktopThumbClass = !isPlaying ? "hidden lg:block" : "hidden";
    const mobileThumbClass = !isPlaying ? "block lg:hidden" : "hidden";


  return (
    
    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-black' >
        <div className="container">
            <div className="text-center text-white" 
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem]' >Our project <strong>showreel </strong></h2>
                <p className='para' >Watch Pavilion Overview Video - Let’s not call it SHOWREEL.</p>
            </div>
            <div className="vid-box mt-[3rem] xl:mt-[4rem] 3xl:mt-[5rem]"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="relative rounded-[1.5rem] overflow-hidden 3xl:rounded-[2.5rem]">
                    <video
                    ref={desktopRef}
                    className={`w-full h-full object-cover cursor-pointer ${desktopVideoClass}`}
                    onClick={handlePause}
                    playsInline
                    >
                    <source src="/realty/videos/hp-banner-compress.mp4" type="video/mp4" />
                    </video>

                    {/* Mobile video */}
                    <video
                    ref={mobileRef}
                    className={`w-full h-full object-cover cursor-pointer ${mobileVideoClass}`}
                    onClick={handlePause}
                    playsInline
                    >
                    <source src="/realty/videos/hp-banner-mob-compress.mp4" type="video/mp4" />
                    </video>

                    <img
                    src="/realty/images/dp-showreel-new-mob.webp"
                    alt="Building Thumbnail"
                    className={`w-full h-full object-cover ${mobileThumbClass}`}
                    />
                    <img
                    src="/realty/images/dp-showreel-new-img.webp"
                    alt="Building Thumbnail"
                    className={`w-full h-full object-cover ${desktopThumbClass}`}
                    />
                    {!isPlaying && (
                    <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label="Play video"
                        type="button"
                    >
                        <span className="w-[6rem] h-[6rem] flex items-center justify-center xl:w-[8rem] xl:h-[8rem] 3xl:w-[10rem] 3xl:h-[10rem]">
                            <img className="w-full" src="/realty/images/a-intro-play-btn.webp" alt="Play" />
                        </span>
                    </button>
                    )}
                </div>
            </div>
        </div>
    </section>

    
  )
}

export default ShowreelSection