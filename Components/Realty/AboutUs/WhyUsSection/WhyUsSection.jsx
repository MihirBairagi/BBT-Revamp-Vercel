"use client";
import React from 'react'

function WhyUsSection() {
  return (
       
   <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-black text-white' >
        <div className="container">
            <div 
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="head-box flex justify-between flex-col lg:flex-row lg:mb-[3rem] 3xl:mb-[5rem]">
                    <div className="text lg:w-[48%]">
                        <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Why Us</p>
                        <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >What sets us apart is not scale, <strong>but intent.</strong></h2>
                    </div>
                    <p className='para my-[2rem] lg:w-[45%]' >We build selectively, design deliberately, and deliver with clarity. Every BBT Realty project is shaped by thoughtful planning, disciplined execution, and an uncompromising focus on long-term value—not short-term volume.</p>
                </div>
                <div className="img-box">
                    <img className='w-full hidden lg:block' src="/realty/images/a-why-img.webp" alt="" />
                    <img className='w-full lg:hidden' src="/realty/images/a-why-mob-img.webp" alt="" />
                </div>
                <ul className="usp-list mt-[3rem] flex flex-wrap justify-between"
                    data-aos="fade-up" 
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <li className='w-full lg:w-[48%] flex items-center mt-[3rem] pt-[3rem] border-t border-[#484848] last:border-b last:pb-[3rem] 3xl:pt-[4rem] 3xl:mt-[4rem] 3xl:last:pb-[4rem]' >
                        <div className="icon mr-[2.5rem]">
                            <img className='w-[20rem] object-contain lg:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem]' src="/realty/images/a-why-usp-1.webp" alt="" />
                        </div>
                        <div className="text">
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Curated development, not mass construction</p>
                            <p className='para' >Every project is intentionally limited in scale—allowing deeper attention to design, quality, and individuality rather than volume-driven execution.</p>
                        </div>
                    </li>
                     <li className='w-full lg:w-[48%] flex items-center mt-[3rem] pt-[3rem] border-t border-[#484848] last:border-b last:pb-[3rem] 3xl:pt-[4rem] 3xl:mt-[4rem] 3xl:last:pb-[4rem]' >
                        <div className="icon mr-[2.5rem]">
                            <img className='w-[20rem] object-contain lg:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem]' src="/realty/images/a-why-usp-2.webp" alt="" />
                        </div>
                        <div className="text">
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Turnkey living, thoughtfully delivered</p>
                            <p className='para' >Homes are planned to be lifestyle-ready—from finishes and layouts to shared amenities—ensuring ease, comfort, and a seamless ownership experience.</p>
                        </div>
                    </li>
                     <li className='w-full lg:w-[48%] flex items-center mt-[3rem] pt-[3rem] border-t border-[#484848] last:border-b last:pb-[3rem] 3xl:pt-[4rem] 3xl:mt-[4rem] 3xl:last:pb-[4rem]' >
                        <div className="icon mr-[2.5rem]">
                            <img className='w-[20rem] object-contain lg:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem]' src="/realty/images/a-why-usp-3.webp" alt="" />
                        </div>
                        <div className="text">
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Design-first approach</p>
                            <p className='para' >Architecture, interiors, and shared spaces are shaped by design thinking—where aesthetics, functionality, and livability are treated with equal importance.</p>
                        </div>
                    </li>
                     <li className='w-full lg:w-[48%] flex items-center mt-[3rem] pt-[3rem] border-t border-[#484848] last:border-b last:pb-[3rem] 3xl:pt-[4rem] 3xl:mt-[4rem] 3xl:last:pb-[4rem]' >
                        <div className="icon mr-[2.5rem]">
                            <img className='w-[20rem] object-contain lg:w-[8rem] 2xl:w-[10rem] 3xl:w-[12rem]' src="/realty/images/a-why-usp-4.webp" alt="" />
                        </div>
                        <div className="text">
                            <p className=' max-[1023px]:text-[1.7rem] f-24 mb-[1rem] lg:w-[50%] lg:leading-[1.4]' >Quality with complete transparency</p>
                            <p className='para' >From materials and construction practices to timelines and communication, our processes are guided by clarity, consistency, and ethical execution.</p>
                        </div>
                    </li>
                </ul>


            </div>
        </div>
   </section>
  )
}

export default WhyUsSection