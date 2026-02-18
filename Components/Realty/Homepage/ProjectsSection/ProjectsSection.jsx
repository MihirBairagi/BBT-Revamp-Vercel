"use client";
import React from 'react'
import Link from "next/link";
import Slider from 'react-slick';

 
    // projects slider 
    let settings = {
        centerMode: false,            
        slidesToShow: 1,             
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        pauseOnHover: true,
    };
           
    function NextArrow(props) {
        const { onClick, className } = props;
        return (
            <div className={`hp-slider-arrow pro-desk-slider-arrow ${className}`} onClick={onClick}>
                <img src="/realty/images/hp-slider-arrow.png" alt="" />
            </div>
        );
    }
    
    function PrevArrow(props) {
        const { onClick, className } = props;
        return (
            <div className={`hp-slider-arrow pro-desk-slider-arrow ${className}`} onClick={onClick}>
                <img src="/realty/images/hp-slider-arrow.png" alt="" />
            </div>
        );
    }


function ProjectsSection() {
  return (
    <section className='h-projects-section bg-[#161616]' >
        <div className="container">
            <div className="h-projects-box text-white py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 1xl:pb-[13rem] 3xl:py-[14rem] 3xl:pb-[17rem]"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="head-box flex justify-between border-b border-[#474747] pb-[5rem] mb-[5rem] 1xl:pb-[8rem] 1xl:mb-[8rem]">
                    <div className="text lg:w-[45%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[2rem]' >Our Projects</p>
                        <h2 className='h2 font-[300] leading-[1.2] tracking-[-0.2rem]' >Discover our projects <strong>showcasing modern excellence.</strong></h2>
                    </div>
                    <div className="contact items-center hidden lg:flex lg:w-max">
                        <img className='lg:w-[4.5rem] lg:mr-[1.5rem] xl:w-[5.2rem] 1xl:w-[5.8rem]' src="/realty/images/h-pro-call.png" alt="" />
                        <div className="text">
                            <p className='f-22 font-[300] lg:mb-[0.2rem]' > Speak With Us</p>
                            <a className='f-28' href="tel:+91 99999 990 30">(+91) 99999 990 30</a>
                        </div>
                    </div>
                </div>
                <div className="h-projects-main-box">
                    <div className="h-pro-inner-head flex justify-between flex-col lg:flex-row lg:items-center">
                        <div className="head-text">
                            <h3 className='h3' >PAVILION</h3>
                            <div className="loc flex items-center mt-[1rem] mb-[1.5rem] lg:mt-[0.2rem] lg:mb-[0rem] ">
                                <span>
                                    <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/realty/images/h-pro-location.png" alt="" />
                                </span>
                                <p className='max-[1023px]:text-[1.6rem] f-20' >Vadodara, Gujarat</p>
                            </div>
                        </div>
                       <div className="text lg:w-[55%]">
                            <p className='para font-[300]' >Modern residential development that is designed around functionality, comfort and community living.</p>
                       </div>
                        <div className="btn-box hidden lg:block">
                            <Link href="/realty/bbt-pavilion-vadodara-detail-page" className='com-btn'>
                                View Project
                                <span>
                                    <img className='btn-arrow' src="/realty/images/h-btn-blk-arrow-.png" alt="" />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="h-pro-list-1 flex flex-col-reverse lg:flex-col lg:mt-[5rem]">
                        <div className="ups-box max-[1023px]:mt-[5rem]">
                            <ul className='flex flex-wrap items-center gap-y-[3rem]' >
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-pro-pav-1.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3] lg:tracking-[-0.04rem]' > 2 & 3 BHK Luxury Residences</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-pro-pav-2.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3] lg:tracking-[-0.04rem]' > 3-4 BHK Duplex Penthouse</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-pro-pav-5.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3] lg:tracking-[-0.04rem]' > Sky Club & Panoramic Views</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-pro-pav-4.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3] lg:tracking-[-0.04rem]' > Vadodara’s <br/>Largest Pool</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-pro-pav-3.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3] lg:tracking-[-0.04rem]' > Courtyard <br/>Green Zones</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-pro-pav-6.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3] lg:tracking-[-0.04rem]' > 24/7 Secure, <br/>Quality-Assured</p>
                                </li>   
                            </ul>
                        </div>
                        <div className="h-pro-slider-box my-[2rem] lg:my-[5rem] 2xl:my-[8rem] relative "
                            data-aos="fade-up" 
                            data-aos-easing="linear"
                            data-aos-duration="500"
                        > 
                            <Slider {...settings} className='w-full overflow-hidden rounded-[1rem] lg:rounded-[2rem]' >
                                <div className="relative">
                                    <Link href="/realty/bbt-pavilion-vadodara-detail-page" >
                                        {/* Desktop image */}
                                        <div className="hidden lg:block relative">
                                            <img
                                            className="desktop-img rounded-[2rem] w-full"
                                            src="/realty/images/h-pro-slider-1.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[2rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>

                                        {/* Mobile image */}
                                        <div className="lg:hidden relative">
                                            <img
                                            className="mobile-img rounded-[1rem] w-full"
                                            src="/realty/images/h-pro-slider-mob-1.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[1rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Link href="/realty/bbt-pavilion-vadodara-detail-page" >
                                        {/* Desktop image */}
                                        <div className="hidden lg:block relative">
                                            <img
                                            className="desktop-img rounded-[2rem] w-full"
                                            src="/realty/images/h-pro-slider-2.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[2rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>

                                        {/* Mobile image */}
                                        <div className="lg:hidden relative">
                                            <img
                                            className="mobile-img rounded-[1rem] w-full"
                                            src="/realty/images/h-pro-slider-mob-2.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[1rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Link href="/realty/bbt-pavilion-vadodara-detail-page" >
                                        {/* Desktop image */}
                                        <div className="hidden lg:block relative">
                                            <img
                                            className="desktop-img rounded-[2rem] w-full"
                                            src="/realty/images/h-pro-slider-3.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[2rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>

                                        {/* Mobile image */}
                                        <div className="lg:hidden relative">
                                            <img
                                            className="mobile-img rounded-[1rem] w-full"
                                            src="/realty/images/h-pro-slider-mob-3.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[1rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Link href="/realty/bbt-pavilion-vadodara-detail-page" >
                                        {/* Desktop image */}
                                        <div className="hidden lg:block relative">
                                            <img
                                            className="desktop-img rounded-[2rem] w-full"
                                            src="/realty/images/h-pro-slider-4.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[2rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>

                                        {/* Mobile image */}
                                        <div className="lg:hidden relative">
                                            <img
                                            className="mobile-img rounded-[1rem] w-full"
                                            src="/realty/images/h-pro-slider-mob-4.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[1rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Link href="/realty/bbt-pavilion-vadodara-detail-page" >
                                        {/* Desktop image */}
                                        <div className="hidden lg:block relative">
                                            <img
                                            className="desktop-img rounded-[2rem] w-full"
                                            src="/realty/images/h-pro-slider-5.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[2rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>

                                        {/* Mobile image */}
                                        <div className="lg:hidden relative">
                                            <img
                                            className="mobile-img rounded-[1rem] w-full"
                                            src="/realty/images/h-pro-slider-mob-5.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[1rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Link href="/realty/bbt-pavilion-vadodara-detail-page" >
                                        {/* Desktop image */}
                                        <div className="hidden lg:block relative">
                                            <img
                                            className="desktop-img rounded-[2rem] w-full"
                                            src="/realty/images/h-pro-slider-7.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[2rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>

                                        {/* Mobile image */}
                                        <div className="lg:hidden relative">
                                            <img
                                            className="mobile-img rounded-[1rem] w-full"
                                            src="/realty/images/h-pro-slider-mob-7.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[1rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Link href="/realty/bbt-pavilion-vadodara-detail-page" >
                                        {/* Desktop image */}
                                        <div className="hidden lg:block relative">
                                            <img
                                            className="desktop-img rounded-[2rem] w-full"
                                            src="/realty/images/h-pro-slider-8.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[2rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>

                                        {/* Mobile image */}
                                        <div className="lg:hidden relative">
                                            <img
                                            className="mobile-img rounded-[1rem] w-full"
                                            src="/realty/images/h-pro-slider-mob-8.webp"
                                            alt=""
                                            />

                                            {/* Gradient overlay */}
                                            <div
                                            className="absolute inset-0 rounded-[1rem] pointer-events-none"
                                            style={{
                                                background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 56.74%, #000000 107.54%)",
                                            }}
                                            />
                                        </div>
                                    </Link>
                                </div>


                            </Slider>
                        </div>
                    </div>
                    <div className="btn-box lg:hidden">
                            <Link href="/realty/bbt-pavilion-vadodara-detail-page" className='com-btn mt-[5rem]' >
                                View Project
                                <span>
                                    <img className='btn-arrow' src="/realty/images/h-btn-blk-arrow-.png" alt="" />
                                </span>
                            </Link>
                    </div>
                    <div className="h-pro-list-2 flex flex-wrap mt-[5rem] lg:mt-[3rem] gap-[5rem] lg:justify-between lg:gap-[3rem]" 
                        data-aos="fade-up" 
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <div className="h-pro-list relative overflow-hidden rounded-[2rem] w-[100%] lg:w-[48%]">
                            <div className="img-box launching-soon-tag relative ">
                                <img className='w-[100%]' src="/realty/images/h-pro-list-2.webp" alt="" />
                            </div>
                            <div className="text-box absolute bottom-0 w-full h-full flex flex-col justify-end p-[3rem] bg-[linear-gradient(180deg,rgba(0,0,0,0)_35.83%,rgba(0,0,0,0.477963)_59.16%,#000_100%)]">
                                <h3 className='h3' >BBT ONE</h3>
                                <div className="loc flex items-center mt-[0.5rem] mb-[1.5rem] lg:mt-[0.5rem] lg:mb-[0rem]">
                                    <span>
                                        <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/realty/images/h-pro-location.png" alt="" />
                                    </span>
                                    <p className='max-[1023px]:text-[1.6rem] f-20' >Karol Bagh, Delhi</p>
                                </div>
                                <p className='max-[1023px]:text-[1.4rem] f-18 font-[300] lg:mt-[1.5rem]' >A boutique commercial development offering well-designed business and retail spaces.</p>
                                {/* <Link href="/realty/bbt-pavilion-vadodara-detail-page" className='max-[1023px]:text-[1.5rem] f-18 flex items-center mt-[1.5rem]'>
                                    View Project <span><img className='invert ml-[1rem] lg:w-[1.5rem]' src="/realty/images/h-btn-blk-arrow-.png" alt="" /></span>
                                </Link> */}
                            </div>
                        </div>
                        <div className="h-pro-list relative overflow-hidden rounded-[2rem] w-[100%] lg:w-[48%]">
                            <div className="img-box launching-soon-tag relative">
                                <img className='w-[100%]' src="/realty/images/h-pro-list-3.webp" alt="" />
                            </div>
                            <div className="text-box absolute bottom-0 w-full h-full flex flex-col justify-end p-[3rem] bg-[linear-gradient(180deg,rgba(0,0,0,0)_35.83%,rgba(0,0,0,0.477963)_59.16%,#000_100%)]">
                                <h3 className='h3' >The Royale Pavilion</h3>
                                <div className="loc flex items-center mt-[0.5rem] mb-[1.5rem] lg:mt-[0.5rem] lg:mb-[0rem]">
                                    <span>
                                        <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/realty/images/h-pro-location.png" alt="" />
                                    </span>
                                    <p className='max-[1023px]:text-[1.6rem] f-20' >Lucknow, Uttar Pradesh</p>
                                </div>
                                <p className='max-[1023px]:text-[1.4rem] f-18 font-[300] lg:mt-[1.5rem] ' >A thoughtfully planned residential project integrating contemporary architecture with cultural relevance</p>
                                {/* <Link href="/realty/bbt-pavilion-vadodara-detail-page" className='max-[1023px]:text-[1.5rem] f-18 flex items-center mt-[1.5rem]'>
                                    View Project <span><img className='invert ml-[1rem] lg:w-[1.5rem]' src="/realty/images/h-btn-blk-arrow-.png" alt="" /></span>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="h-projects-main-box mt-[6rem] 2xl:mt-[8rem]"
                    data-aos="fade-up" 
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <div className="h-pro-inner-head flex justify-between flex-col lg:flex-row lg:items-center">
                        <div className="head-text">
                            <h3 className='h3' >SORA</h3>
                            <div className="loc flex items-center mt-[1rem] mb-[1.5rem] lg:mt-[0.2rem] lg:mb-[0rem] ">
                                <span>
                                    <img className='mr-[1rem] w-[1.5rem] lg:w-[1rem] lg:mr-[0.5rem]' src="/realty/images/h-pro-location.png" alt="" />
                                </span>
                                <p className='max-[1023px]:text-[1.6rem] f-20' >Mandi, Himachal Pradesh</p>
                            </div>
                        </div>
                        <div className="text lg:w-max">
                            <p className='para font-[300]' >An experiential residential concept focused on wellness, nature, and sustainable living.</p>
                       </div>
                        {/* <div className="btn-box hidden lg:block">
                            <Link href="/realty/bbt-pavilion-vadodara-detail-page" className='com-btn'>
                                View Project
                                <span>
                                    <img className='btn-arrow' src="/realty/images/h-btn-blk-arrow-.png" alt="" />
                                </span>
                            </Link>
                        </div> */}
                    </div>
                    <div className="h-pro-list-1 flex flex-col-reverse lg:flex-col lg:mt-[5rem]">
                        <div className="ups-box max-[1023px]:mt-[5rem]">
                            <ul className='flex flex-wrap items-center gap-y-[3rem]  ' >
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-sora-icon-1.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > 11+ Acre <br/> Hilltop Estate</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-sora-icon-2.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Panoramic Valley & Cloud Views</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-sora-icon-3.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Wellness-Focused Architecture</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-sora-icon-4.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Nature Trails & Outdoor Zones</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-sora-icon-5.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Quiet, Secluded Surroundings</p>
                                </li>   
                                <li className='border-l border-[#676767] w-[33.33%] lg:w-[16.6%] pl-[2rem] pr-[1rem] 1xl:pl-[2.5rem] ' >        
                                    <img className='mb-[2rem] w-[3.5rem] h-[3.5rem] object-contain 1xl:w-[4.6rem] 1xl:h-[4.6rem] 1xl:mb-[2.5rem]' src="/realty/images/h-sora-icon-6.webp" alt="" />
                                    <p className='max-[1023px]:text-[1.2rem] f-24 font-[300] leading-[1.3]' > Year-Round Pleasant Climate</p>
                                </li>   
                            </ul>
                        </div>
                        <div className="h-pro-slider-box my-[2rem] lg:mt-[5rem] lg:mb-[0rem] launching-soon-tag relative "> 
                            <Slider {...settings} className='w-full h-full overflow-hidden ' >
                                <div>
                                    <div className='hidden lg:block' >
                                        <img className='desktop-img rounded-[2rem] w-[100%] h-full' src="/realty/images/h-sora-img-1.webp" alt="" />
                                    </div>
                                    <div className='lg:hidden' >
                                        <img className='mobile-img rounded-[1rem] w-[100%] h-full' src="/realty/images/h-sora-mob-img-1.webp" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='hidden lg:block' >
                                        <img className='desktop-img rounded-[2rem] w-[100%]' src="/realty/images/h-sora-img-1.webp" alt="" />
                                    </div>
                                    <div className='lg:hidden' >
                                        <img className='mobile-img rounded-[1rem] w-[100%]' src="/realty/images/h-sora-mob-img-1.webp" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='hidden lg:block' >
                                        <img className='desktop-img rounded-[2rem] w-[100%]' src="/realty/images/h-sora-img-1.webp" alt="" />
                                    </div>
                                    <div className='lg:hidden' >
                                        <img className='mobile-img rounded-[1rem] w-[100%]' src="/realty/images/h-sora-mob-img-1.webp" alt="" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    {/* <div className="btn-box lg:hidden">
                            <Link href="/realty/bbt-pavilion-vadodara-detail-page" className='com-btn mt-[5rem]' >
                                View Project
                                <span>
                                    <img className='btn-arrow' src="/realty/images/h-btn-blk-arrow-.png" alt="" />
                                </span>
                            </Link>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection