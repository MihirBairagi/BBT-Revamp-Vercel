"use client";
import React from 'react'

function HighlightSection() {
  return (
     
   <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-white'
        data-aos="fade-up" 
        data-aos-easing="linear"
        data-aos-duration="500"
    >
        <div className="container">
            <div className="flex flex-wrap lg:justify-between">
                <div className="lg:w-[48%]">
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >HIGHLIGHT FEATURES</p>
                    <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1.5rem]' >A promise of <strong>considered design</strong> and <strong>lasting quality.</strong></h2>
                    <p className='para lg:w-[80%]' >Every residence at Pavilion is thoughtfully planned with an emphasis on natural light, ventilation, spatial balance, and enduring materials—ensuring homes that feel refined today and relevant tomorrow.</p>

                    <ul className='flex items-center flex-wrap justify-between mt-[3rem]' >
                        <li className='px-[1rem] py-[3rem] border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%]  h-[19rem] flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/realty/images/dp-feature-icon-1.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Vastu-Aligned Spatial Planning</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%]  h-[19rem] flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/realty/images/dp-feature-icon-2.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Abundant Natural Light & Airflow</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%]  h-[19rem] flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/realty/images/dp-feature-icon-3.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Optimised Room Proportions</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%]  h-[19rem] flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/realty/images/dp-feature-icon-4.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Spacious Balconies & Open Views</p>
                        </li>
                        
                    </ul>
                </div>
                <div className="lg:w-[48%] flex flex-col">
                    <ul className='flex items-center flex-wrap justify-between' >
                        <li className='px-[1rem] py-[3rem] border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%]  h-[19rem] flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/realty/images/dp-feature-icon-5.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Enhanced Privacy & Acoustic Comfort</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%]  h-[19rem] flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/realty/images/dp-feature-icon-6.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Durable Materials & Timeless Finishes</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%]  h-[19rem] flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/realty/images/dp-feature-icon-7.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Robust Plumbing & Electrical Infrastructure</p>
                        </li>
                        <li className='px-[1rem] py-[3rem] border border-[#5d5d5da2] mt-[1.5rem] rounded-[1rem] w-[48%]  h-[19rem] flex justify-center flex-col lg:w-[47%] lg:min-h-[18rem] lg:mt-[2.8rem] xl:mt-[3.2rem] xl:min-h-[24rem] 3xl:min-h-[34rem] 3xl:mt-[4.5rem]' >
                            <img className='w-[4rem] mb-[2rem] mx-auto xl:w-[5.5rem] ' src="/realty/images/dp-feature-icon-8.webp" alt="" />
                            <p className='max-[1023px]:text-[1.7rem] f-26 text-center font-[300] leading-[1.4]' >Designed for Every Stage of Life</p>
                        </li>
                    </ul>
                    <div className="mt-[4rem] mb-[2.5rem] border-l-[0.3rem] border-[#7C7C7C] pl-[3rem] lg:mb-[0]"
                        data-aos="fade-up" 
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <h3 className='max-[1023px]:text-[2.5rem] mb-[2rem] font-[300] lg:leading-[1.3] lg:tracking-tighter 3xl:text-[3.5rem]' >“Great homes are not defined by luxury alone, but by how effortlessly they fit into everyday life.”</h3>
                        <p className='max-[1023px]:text-[1.6rem] f-24 text-[#959595]' >— Pavilion by BBT Realty</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HighlightSection