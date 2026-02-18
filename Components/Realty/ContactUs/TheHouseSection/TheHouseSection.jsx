"use client";
import React from 'react'
import Link from "next/link";


function TheHouseSection() {
  return (
    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-[#161616]' >
        <div className="container">
            <div className="flex justify-between items-center flex-wrap text-white"
              data-aos="fade-up" 
              data-aos-easing="linear"
              data-aos-duration="500"
            >
                <div className="mb-[5rem] w-full lg:w-[45%]">
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >The House</p>
                    <h2 className='h2-big font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem] 3xl:mb-[2rem]' >Experience luxury at the <strong>Big Boy Toyz house.</strong></h2>
                    <p className='para font-[300]' >The House of Big Boy Toyz represents a world where luxury, lifestyle, and passion come together seamlessly. More than India’s most trusted destination for pre-owned supercars, BBT has transformed into a lifestyle universe offering exclusive experiences and premium verticals for those who appreciate refined living. It celebrates the spirit of speed, design, craftsmanship, and individuality. From rare high-performance machines to ultra-luxury living concepts, each offering under the BBT umbrella is built with uncompromising quality and forward-thinking vision. Every brand reflects the values of excellence, exclusivity, and aspiration, creating a journey that goes far beyond ownership. The House of Big Boy Toyz is where luxury becomes personal, experiences become unforgettable, and desire becomes reality.</p>
                    <div className='mt-[2.5rem]' >
                        <Link href="/realty/about-us" className='max-[1023px]:text-[1.5rem] max-[1023px]:h-[5rem] com-btn bg-transparent text-white border-[white] font-normal justify-center hover:bg-[#000]' >About Us</Link>
                    </div>
                </div>
                <div className="img mx-auto w-full sm:w-[60%] lg:w-[48%] lg:mr-[0]">
                    <img className='w-full hidden lg:block' src="/realty/images/c-about-img.webp" alt="" />
                    <img className='w-full lg:hidden' src="/realty/images/c-about-mob-img.webp" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TheHouseSection