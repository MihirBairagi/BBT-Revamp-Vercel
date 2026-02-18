"use client";
import React from 'react'
import Counter from './Counter'

function IntroSection() {


  return (
    <>
     <section className='h-intro-section py-[7rem] lg:pt-[12rem] lg:pb-[8rem] bg-white -mt-10 md:-mt-16 lg:-mt-24 1xl:-mt-[7.8rem]  1xl:pt-[15rem] 1xl:pb-[10rem] 3xl:-mt-[9.5rem] 3xl:pt-[20rem] 3xl:pb-[13rem]' >
        <div className="container">
            <div className="h-intro-box"
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="head-box relative mb-[2rem]">
                    <h2 className='max-[1023px]:text-[2rem] h2 font-[500] hp-intro-after relative' >Introduction</h2>
                </div>
                <div className="content-box lg:w-[40%] lg:mt-[5rem]">
                    <h2 className='h2 mb-[2rem] font-[300] leading-[1.2] tracking-[-0.2rem] 1xl:w-[77%] 3xl:w-[80%]' >Crafting landmark spaces with the <strong>precision of a luxury legacy.</strong></h2>
                    <p className='hidden lg:block para' >BBT Realty extends the trusted excellence of Big Boy Toyz into modern living, premium commercial developments, and serene wellness destinations—designed for those who expect more from life.</p>
                    <img className=' hidden lg:block lg:w-[9rem] xl:w-[10rem] mt-[3rem] mb-[7rem] 1xl:w-[12rem] 1xl:mt-[4rem] 1xl:mb-[8rem] 3xl:w-[15rem] 3xl:mt-[5rem] 3xl:mb-[11rem]' src="/realty/images/h-intro-logo.webp" alt="" />
                </div>
                <div className="h-intro-listing flex flex-col-reverse lg:flex-row lg:justify-between">
                    <div className="h-intro-list lg:w-[45%]">
                        <div className="img-box">
                            <img className='w-[100%]' src="/realty/images/h-intro-img-1.webp" alt="" />
                        </div>
                    </div>
                    <div className="h-intro-list-2 lg:w-[45%] lg:-mt-[35rem] 1xl:-mt-[46rem] 3xl:-mt-[57rem]">
                        <div className="img-box mt-[2rem] mb-[3rem] 1xl:mb-[5rem]" >
                            <img className='w-[100%]' src="/realty/images/h-intro-img-2.webp" alt="" />
                        </div>
                        <p className='lg:hidden para font-[300]' >BBT Realty extends the trusted excellence of Big Boy Toyz into modern living, premium commercial developments, and serene wellness destinations—designed for those who expect more from life.</p>
                        <div className="h-intro-inner-box flex flex-col-reverse lg:flex-col"
                        data-aos="fade-up" 
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        >
                            <div className="flex my-[4rem] items-center lg:mt-[2rem] lg:mb-[0]">
                                <div className="icon">
                                    <img className='w-[15rem] max-w-[80px] xl:max-w-[10rem] 3xl:max-w-[15rem]' src="/realty/images/h-intro-qoute.png" alt="" />
                                </div>
                                <div className="text ml-[3rem] 3xl:ml-[5rem]">
                                    <h4 className='max-[1023px]:text-[2rem] h3 tracking-[-0.1rem] font-[400] leading-[1.2] mb-[1rem]' >Every space we build carries the promise of exceptional living.</h4>
                                    <a target='_blank' href="https://www.bigboytoyz.com/" >
                                        <p className='max-[1023px]:text-[1.4rem] f-24 text-[#959595]' >@bigboytoyz_india</p>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="line-box grey-line relative my-[3rem] 1xl:my-[5rem] 3xl:my-[7rem]">
                                    <p className='max-[1023px]:text-[1.2rem] para uppercase  text-[#545454] font-[500] hp-promise-after relative'  >Our Promise</p>
                                </div>
                                <ul className="flex items-center gap-[1.2rem] 1xl:gap-[1.8rem]">
                                    <li className="bg-[#F3F3F3] w-[31.5%] px-[1.2rem] py-[1.5rem]  lg:p-[1.5rem] rounded-[1rem] 1xl:p-[2.5rem] 1xl:rounded-[1.5rem]">
                                        <p className="h3 font-[500]">
                                        0<Counter end={4} once />
                                        </p>
                                        <p className="f-24 mt-[1rem] font-[300] tracking-tighter">
                                        <strong>Projects</strong> Across India
                                        </p>
                                    </li>

                                    <li className="bg-[#F3F3F3] w-[31.5%] px-[1.2rem] py-[1.5rem]  lg:p-[1.5rem] rounded-[1rem] 1xl:p-[2.5rem] 1xl:rounded-[1.5rem]">
                                        <p className="h3 font-[500]">
                                        <Counter end={15} suffix="+" once />
                                        </p>
                                        <p className="f-24 mt-[1rem] font-[300] tracking-tighter">
                                        Combined <strong>Portfolio</strong>
                                        </p>
                                    </li>

                                    <li className="bg-[#F3F3F3] w-[31.5%] px-[1.2rem] py-[1.5rem]  lg:p-[1.5rem] rounded-[1rem] 1xl:p-[2.5rem] 1xl:rounded-[1.5rem]">
                                        <p className="h3 font-[500]">
                                        <Counter end={100} suffix="%" once />
                                        </p>
                                        <p className="f-24 mt-[1rem] font-[300] tracking-tighter">
                                        <strong>Quality</strong> Commitment
                                        </p>
                                    </li>
                                </ul>

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