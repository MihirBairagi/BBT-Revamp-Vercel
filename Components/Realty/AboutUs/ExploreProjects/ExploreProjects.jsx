"use client";
import React from 'react'
import Link from "next/link";



function ExploreProjects() {
  return (
    
    <section className='bg-[#fff] py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem]' >
        <div className="container"
        
            data-aos="fade-up" 
            data-aos-easing="linear"
            data-aos-duration="500"
        >
            <div className="text-center">
                <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Let’s Just</p>
                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Explore our <strong>projects</strong></h2>
            </div>
            <ul className='flex gap-[3rem] overflow-x-scroll no-scrollbar -mx-[20px] px-[2rem] mt-[4rem] lg:mx-[0] lg:px-[0] lg:overflow-auto lg:gap-[2rem] 3xl:gap-[4rem]' >
                <li className='min-w-[75vw] lg:min-w-[22%]' >
                    <Link href="/realty/bbt-pavilion-vadodara-detail-page" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/realty/images/a-just-1.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >The Pavilion</h4>
                    </Link>
                </li>
                <li className='min-w-[75vw] lg:min-w-[22%]' >
                    <div className="launching-soon-tag relative" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/realty/images/a-just-2.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >BBT One</h4>
                    </div>
                </li>
                <li className='min-w-[75vw] lg:min-w-[22%]' >
                    <div className="launching-soon-tag relative" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/realty/images/a-just-3.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >The Royal Pavilion</h4>
                    </div>
                </li>
                <li className='min-w-[75vw] lg:min-w-[22%]' >
                    <div className="launching-soon-tag relative" >
                        <img className='w-full mb-[2rem] 3xl:mb-[2.5rem]' src="/realty/images/a-just-4.webp" alt="" />
                        <h4 className='max-[1023px]:text-[2.4rem] lg:tracking-tighter lg:font-normal 3xl:text-[3rem] 3xl:font-medium' >Sora</h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>

  )
}

export default ExploreProjects