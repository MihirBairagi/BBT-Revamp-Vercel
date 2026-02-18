"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import FixedBar from '../../CommonComponents/FixedBar/FixedBar'


function OfferingSection() {

  return (
    <>

    <section className='flex flex-col-reverse lg:flex-col' >

        <div className='bg-white pb-[8rem] lg:pb-0' >
            <FixedBar/>
        </div>

        <div className='py-[7rem] xl:pb-[10rem] 1xl:pb-[11rem] 3xl:pb-[14rem] -mt-[3rem] rounded-t-[3rem] bg-[white] lg:rounded-[0]  lg:-mt-24 lg:pt-[12rem] 1xl:-mt-[7.8rem] xl:pt-[15rem] 1xl:pt-[18rem] 3xl:-mt-[9.5rem] 3xl:pt-[20rem]' >
            <div className="container">
                <div className="flex flex-col lg:flex-row lg:justify-between"
                    data-aos="fade-up" 
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <div className="text-box lg:w-[47%]">
                            <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem] lg:text-[#6C6C6C]' >OUR OFFERING</p>
                            <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Refined living, <strong>thoughtfully designed.</strong></h2>

                            <p className='para mt-[2rem]' >Pavilion is built around intelligent planning, enduring quality, and everyday comfort. From well-proportioned residences to carefully selected amenities, every element is designed to elevate how you live—today and for years to come.</p>

                            <div className="items-center flex mt-[2rem] lg:mt-[3rem]">
                                <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem] 3xl:-[1.4rem] mr-[1rem] 3xl:mr-[2rem]">
                                    <img className='mr-[0.6rem] w-[1.6rem] lg:w-[1.5rem] 3xl:w-[2.2rem]' src="/realty/images/a-intro-green-check.png" alt="" />
                                    <p className='max-[1023px]:text-[1.15rem] para lg:font-[500]' >RERA Approved</p>
                                </div>
                                <div className="flex items-center bg-[#E5E5E5] p-[1rem] rounded-[0.5rem]">
                                    <img className='mr-[0.6rem] w-[1.6rem] lg:w-[1.5rem] 3xl:w-[2.2rem]' src="/realty/images/a-intro-green-check.png" alt="" />
                                    <p className='max-[1023px]:text-[1.15rem] para lg:font-[500]' >Designed for Long-Term Living</p>
                                </div>
                            </div>                     
                    </div>
                    <div className="list-box mt-[3rem] lg:mt-[0] lg:w-[45%] ">
                            <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem] lg:text-[#6C6C6C]' >The Promise</p>
                            <ul>
                                <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                        <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/realty/images/cd-offer-1.png" alt="" />
                                        <div className="text">
                                            <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Engineered layouts that maximise space</p>
                                            <p className='para mt-[0.6rem]' > Homes designed for natural light, airflow, and efficient movement.</p>
                                        </div>
                                </li>
                                <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                        <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/realty/images/cd-offer-2.png" alt="" />
                                        <div className="text">
                                            <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Curated amenities for everyday comfort</p>
                                            <p className='para mt-[0.6rem]' >  Spaces that support relaxation, wellness, and community living.</p>
                                        </div>
                                </li>
                                <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                        <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/realty/images/cd-offer-3.png" alt="" />
                                        <div className="text">
                                            <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Built with long-term quality in mind</p>
                                            <p className='para mt-[0.6rem]' >Strong construction standards with attention to durability and detail.</p>
                                        </div>
                                </li>
                                <li className='flex items-center mt-[1.2rem] pt-[1.2rem] lg:pt-[1.5rem] lg:mt-[1.5rem] border-t last:border-b last:pb-[1.5rem] border-[#D9D9D9] xl:pt-[1.8rem] xl:mt-[1.8rem] 3xl:pt-[2.2rem] 3xl:mt-[2.2rem]' >
                                        <img className='mr-[1.5rem] w-[4rem] lg:w-[3.5rem] object-contain xl:w-[3.8rem] 3xl:w-[5rem] 3xl:mr-[2.5rem]' src="/realty/images/cd-offer-4.png" alt="" />
                                        <div className="text">
                                            <p className='max-[1023px]:text-[1.7rem] f-26 font-medium lg:font-[400]' >Designed for every stage of life</p>
                                            <p className='para mt-[0.6rem]' > A balanced environment suitable for families, professionals, and future needs.</p>
                                        </div>
                                </li>
                            </ul>

                    </div>
                </div>
            </div>
        </div>

    </section>

  


  

  

   



    </>
  )
}

export default OfferingSection