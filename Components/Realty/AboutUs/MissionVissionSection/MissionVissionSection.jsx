"use client";
import React from 'react'

function MissionVissionSection() {
  return (
    
    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-[#F6F6F6]' >
            <div className="container">
                <div >
                        <div className="relative"
                            data-aos="fade-up" 
                            data-aos-easing="linear"
                            data-aos-duration="500"
                         >
                            <div className="img-box">
                                <img className='w-full hidden lg:block' src="/realty/images/a-commitment-bg.webp" alt="" />
                                <img className='w-full lg:hidden' src="/realty/images/a-commitment-mobile-bg.webp" alt="" />
                            </div>  
                            <div className="text-white absolute h-full w-full flex flex-col justify-end bottom-[0%] p-[3.2rem] lg:px-[5rem] lg:py-[6rem] lg:w-[60%] 3xl:pl-[11rem] 3xl:pb-[8rem]">
                                <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >Our Commitments</p>
                                <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Quality-driven execution, transparent pricing, clear communication, and long-term maintenance support ensure trust and lasting value.</h2>
                            </div>
                        </div>
                        <div className="flex justify-end flex-wrap">
                            <div className="flex flex-col text-center w-100 mt-[3rem] py-[5rem] px-[3rem] rounded-[2rem] bg-[#CFCFCF] lg:flex-row lg:text-start lg:justify-between lg:rounded-[4rem] lg:px-[6rem] lg:pt-[4rem] lg:pb-[7rem] 3xl:pt-[7rem] 3xl:pb-[15rem] 3xl:px-[10rem] 3xl:rounded-[7rem]"
                                data-aos="fade-up" 
                                data-aos-easing="linear"
                                data-aos-duration="500"
                            >
                                <h3 className='mb-[2rem] 3xl:text-[3.6rem] lg:w-max' >Our Mission</h3>
                                <p className='max-[1023px]:text-[1.4rem] f-26 font-[300] lg:w-[60%]' >To create well-designed, value-driven developments supported by strong governance and customer-centric processes.</p>
                            </div>
                            <div className="flex flex-col text-center w-100 mt-[3rem] py-[5rem] px-[3rem] rounded-[2rem] bg-[#E8E8E8] lg:flex-row lg:text-start lg:justify-between lg:rounded-[4rem] lg:px-[6rem] lg:pt-[4rem] lg:pb-[7rem] 3xl:pt-[7rem] 3xl:pb-[15rem] 3xl:px-[10rem] 3xl:rounded-[7rem] lg:-mt-[4rem] lg:w-[90%] 3xl:-mt-[8rem]" 
                                data-aos="fade-up" 
                                data-aos-easing="linear"
                                data-aos-duration="500"
                            >
                                <h3 className='mb-[2rem] 3xl:text-[3.6rem]' >Our Vision</h3>
                                <p className='max-[1023px]:text-[1.4rem] f-26 font-[300] lg:w-[60%]' >To be recognized as a reliable, future-ready real estate developer delivering projects that meet modern lifestyle, commercial and community needs.</p>
                            </div>
                            <div className="flex flex-col text-center w-100 mt-[3rem] py-[5rem] px-[3rem] rounded-[2rem] bg-[#ffff] lg:rounded-[4rem] lg:w-[70%] lg:-mt-[4rem] lg:text-start 3xl:-mt-[8rem] 3xl:px-[10rem] 3xl:py-[6rem] 3xl:rounded-[7rem]"
                                data-aos="fade-up" 
                                data-aos-easing="linear"
                                data-aos-duration="500"
                            >
                                <h3 className='mb-[2rem] 3xl:text-[3.6rem] lg:mb-[0rem]' >Our Ethical Promises</h3>
                                <p className='max-[1023px]:text-[1.4rem] f-26 font-[300]' >Principles that guide every decision, partnership, and delivery.</p>
                                <ul className='flex flex-wrap lg:justify-between' >
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/realty/images/a-commitment-usp-1.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' ><strong>RERA </strong>Project Registration</p>
                                    </li>
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/realty/images/a-commitment-usp-2.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' ><strong>Stage-wise </strong><br/>Progress Updates</p>
                                    </li>
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/realty/images/a-commitment-usp-3.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' ><strong>Eco-Conscious </strong>Planning</p>
                                    </li>
                                    <li className='w-[50%] lg:w-[24%] border-l border-[#C6C6C6] mt-[3rem] pl-[2rem] even:border-r lg:even:border-r-0 lg:first:border-l-0 ' >
                                        <img className='w-[4rem] h-[4rem] lg:w-[3.5rem] lg:h-[3.5rem] object-contain 2xl:h-[4rem] 2xl:w-[4rem] 3xl:w-[6rem] 3xl:h-[6rem] 3xl:mb-[2rem]' src="/realty/images/a-commitment-usp-4.webp" alt="" />
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-start mt-[1rem] text-[#494949] font-light lg:leading-[1.3]' ><strong>Grievance </strong><br/>Redressal </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
    </section>
  )
}

export default MissionVissionSection