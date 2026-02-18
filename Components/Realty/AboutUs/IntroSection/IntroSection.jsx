"use client";
import React, { useEffect } from "react";
import { useRef, useState } from "react";
import AOS from "aos";
import FixedBar from '../../CommonComponents/FixedBar/FixedBar'


function IntroSection() {

    
    useEffect(() => {
        AOS.init();
    }, []);

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
        setIsPlaying(false);
    };

  return (
    <>

    <section className="flex flex-col-reverse lg:flex-col" >    

        <div className='bg-white pb-[8rem] lg:pb-0' >
            <FixedBar/>
        </div>

        <div className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] -mt-[3rem] rounded-t-[3rem] bg-[white] lg:mt-[0] lg:rounded-[0]' >
            <div className="container">
                <div className="flex flex-col lg:flex-row lg:justify-between"
                    data-aos="fade-up" 
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <div className="text-box lg:w-[47%]">
                            <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >ABOUT BIG BOY TOYZ REALTY</p>
                            <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >A Responsible Approach to <strong>Real Estate Development</strong></h2>

                            <div className="items-center flex lg:hidden mt-[2rem]">
                                <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem] mr-[1rem]">
                                    <img className='mr-[0.6rem] w-[1.6rem]' src="/realty/images/a-intro-green-check.png" alt="" />
                                    <p className='text-[1.15rem]' >RERA Approved</p>
                                </div>
                                <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem]">
                                    <img className='mr-[0.6rem] w-[1.6rem]' src="/realty/images/a-intro-green-check.png" alt="" />
                                    <p className='text-[1.15rem]' >Approved Building Plan</p>
                                </div>
                            </div>

                            <p className='para mt-[2rem]' >Big Boy Toyz Realty is the real estate arm of Big Boy Toyz which is one of India’s most trusted names in the premium & luxury segment. Our decision to enter real estate is built on market understanding, customer insights and a commitment to ethical development practices.</p>
                            <p className="para mt-[2rem]"> We are currently active across four cities with a focus on residential, commercial and experiential developments. We will announce more projects soon. </p>

                            <div className="items-center hidden lg:flex mt-[3rem]">
                                <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem] 3xl:-[1.4rem] mr-[1rem] 3xl:mr-[2rem] ">
                                    <img  className='mr-[0.6rem] w-[1.5rem] 3xl:w-[2.2rem]' src="/realty/images/a-intro-green-check.png" alt="" />
                                    <p className='para font-[500]' >RERA Registered</p>
                                </div>
                                <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem] 3xl:-[1.4rem]">
                                    <img  className='mr-[0.6rem] w-[1.5rem] 3xl:w-[2.2rem]' src="/realty/images/a-intro-green-check.png" alt="" />
                                    <p className='para font-[500]' >Designed for Long-Term Living</p>
                                </div>
                            </div>

                            <div className="items-center hidden lg:flex mt-[5rem]">
                                <div className="lg:pr-[2rem] lg:pl-[3.5rem] lg:border-l lg:last:border-r lg:border-[#D9D9D9] 3xl:pl-[5rem]">
                                    <h3 className='2xl:text-[4rem] 3xl:text-[5.5rem]' >04</h3>
                                    <p className='f-26' >Landmark Projects Across India</p>
                                </div>
                                <div className="lg:pr-[2rem] lg:pl-[3.5rem] lg:border-l lg:last:border-r lg:border-[#D9D9D9] 3xl:pl-[5rem]">
                                    <h3 className='2xl:text-[4rem] 3xl:text-[5.5rem]' >1M+ Sq. Ft.</h3>
                                    <p className='f-26' >Planned & Under Development</p>
                                </div>
                            </div>

                    </div>
                    <div className="vid-box mt-[3rem] lg:w-[47%] lg:mt-[0]">
                        <div className="relative rounded-[1.5rem] overflow-hidden 3xl:rounded-[2.5rem]">                     
                            <video
                                ref={videoRef}
                                className={`w-full h-full object-cover cursor-pointer ${
                                isPlaying ? "block" : "hidden"
                                }`}
                                onClick={handlePause}
                            >
                                <source src="/realty/videos/hp-banner-compress-square.mp4" type="video/mp4" />
                            </video>

                            {!isPlaying && (
                                <img
                                src="/realty/images/a-intro-vid-thumb.webp"
                                alt="Building Thumbnail"
                                className="w-full h-full object-cover"
                                />
                            )}

                            {!isPlaying && (
                                <button
                                    onClick={handlePlay}
                                    className="absolute inset-0 flex items-center justify-center"
                                    >
                                    <span className="w-[6rem] h-[6rem] flex items-center justify-center 3xl:w-[10rem] 3xl:h-[10rem]">
                                        <img className='3xl:w-full' src="/realty/images/a-intro-play-btn.webp" alt="" />
                                    </span>
                                </button>
                            )}
                        </div>
                        <div className="items-center flex lg:hidden mt-[3rem]">
                                <div className="pl-[3rem] pr-[1.5rem] py-[0.5rem] border-l border-[#D9D9D9]">
                                    <h3 className='text-[2.5rem] mb-[0.5rem]' >100+</h3>
                                    <p className='text-[1.4rem]' >Luxury Homes Delivered Nationwide</p>
                                </div>
                                <div className="pl-[3rem] pr-[1.5rem] py-[0.5rem] border-l border-[#D9D9D9]">
                                    <h3 className='text-[2.5rem] mb-[0.5rem]' >07+</h3>
                                    <p className='text-[1.4rem]' >Cities & Expanding Presence.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default IntroSection