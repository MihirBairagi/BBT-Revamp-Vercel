"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "aos/dist/aos.css";

function SiteProgressSection() {

        // realtime slider 
    let settings = {
        centerMode: true,            
        centerPadding: "15%",        
        slidesToShow: 1,             
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        pauseOnHover: true,
        responsive: [
            {
            breakpoint: 1400,
            settings: { centerPadding: "12%" },
            },
            {
            breakpoint: 1024,
            settings: { centerPadding: "8%" },
            },
            {
            breakpoint: 768,
            settings: { centerPadding: "4%" },
            }

        ],
    };

  
        function NextArrow(props) {
            const { onClick, className } = props;
            return (
                <div className={`realtime-slider-arrow ${className}`} onClick={onClick}></div>
            );
        }
        
        function PrevArrow(props) {
            const { onClick, className } = props;
            return (
                <div className={`realtime-slider-arrow ${className}`} onClick={onClick}></div>
            );
        }
    

  return (
    <>
    <section className='pb-[7rem] xl:pb-[10rem] 1xl:pb-[11rem] 3xl:pb-[14rem] bg-white overflow-hidden' >
        <div className="m-auto"
            data-aos="fade-up" 
            data-aos-easing="linear"
            data-aos-duration="500"
        >
            <div className="text-center mb-[3rem] xl:mb-[4rem]">
                <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Realtime updates</p>
                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Current site <strong>progress</strong></h2>
                <p className='para mt-[2rem] lg:w-[50%] lg:mx-auto' >Follow verified on-site updates highlighting construction milestones and ongoing progress at Pavilion.</p>
            </div>

            <Slider className='cd-realtive-arrow relative' {...settings} >
                <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full block"
                            src="/realty/images/dp-realtime-list-1.webp"
                            alt=""
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.81%, #000000 100%)",
                            }}
                        />
                        <div className="absolute inset-0 text-white p-[1.5rem] flex items-end xl:p-[3rem]">
                            <p className="max-[1023px]:text-[1.6rem] f-22">
                                Current site progress on November 2025
                            </p>
                        </div>

                    </div>
                </div>
                 <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full block"
                            src="/realty/images/dp-realtime-list-2.webp"
                            alt=""
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.81%, #000000 100%)",
                            }}
                        />
                        <div className="absolute inset-0 text-white p-[1.5rem] flex items-end xl:p-[3rem]">
                            <p className="max-[1023px]:text-[1.6rem] f-22">
                                Current site progress on October 2025
                            </p>
                        </div>

                    </div>
                </div>
                 <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full block"
                            src="/realty/images/dp-realtime-list-4.webp"
                            alt=""
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.81%, #000000 100%)",
                            }}
                        />
                        <div className="absolute inset-0 text-white p-[1.5rem] flex items-end xl:p-[3rem]">
                            <p className="max-[1023px]:text-[1.6rem] f-22">
                                Current site progress on July 2025
                            </p>
                        </div>

                    </div>
                </div>
                 <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full block"
                            src="/realty/images/dp-realtime-list-3.webp"
                            alt=""
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.81%, #000000 100%)",
                            }}
                        />
                        <div className="absolute inset-0 text-white p-[1.5rem] flex items-end xl:p-[3rem]">
                            <p className="max-[1023px]:text-[1.6rem] f-22">
                                Current site progress on September 2025
                            </p>
                        </div>

                    </div>
                </div>
                 <div className="px-[1rem] lg:px-[2rem]">
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full block"
                            src="/realty/images/dp-realtime-list-5.webp"
                            alt=""
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.81%, #000000 100%)",
                            }}
                        />
                        <div className="absolute inset-0 text-white p-[1.5rem] flex items-end xl:p-[3rem]">
                            <p className="max-[1023px]:text-[1.6rem] f-22">
                                Current site progress on July 2025
                            </p>
                        </div>

                    </div>
                </div>

            </Slider>
        </div>
    </section>
    </>
  )
}

export default SiteProgressSection