"use client";
import React from 'react'
import AOS from "aos";
import { useState, useEffect } from "react";



function TowerSection() {

    // toggle Tower code 
    const [activeTower, setActiveTower] = useState("1");

    const towers = [
        { id: "1", label: "Tower A" },
        { id: "2", label: "Tower B" },
        { id: "3", label: "Tower C" },
        { id: "4", label: "Tower D" },
    ];

    useEffect(() => {
    // Wait for DOM update
    setTimeout(() => {
        AOS.refreshHard(); // recalculates positions & height
    }, 50);
    }, [activeTower]);
    

  return (
     <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-white'
        data-aos="fade-up" 
        data-aos-easing="linear"
        data-aos-duration="500"
    >
        <div className="container">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="mb-[1.5rem] lg:w-[45%]">
                    <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem]' >choose what suits you</p>
                    <h2 className='font-[300] leading-[1.2] tracking-[-0.2rem]' >Explore pavilion <strong>floor designs</strong></h2>
                </div>
                <p className='para lg:w-[30%]' >Whether it's a cozy 2 BHK a family-sized 3 BHK, or a grand 4 BHK, your new home is crafted to suit everystage of life. With thoughtful layouts and premium amenities, every detail is designed for modern living.</p>
            </div>
            {/* TOGGLE BUTTONS */}
            <ul className="btn-toggle-box flex items-center gap-[0.5rem] mt-[2.5rem] lg:gap-[1rem]">
                {towers.map((tower) => (
                <li key={tower.id}>
                    <button
                    type="button"
                    onClick={() => setActiveTower(tower.id)}
                    className={`com-toggle-btn transition-all
                        ${
                        activeTower === tower.id
                            ? "bg-black text-white border-white"
                            : "bg-transparent text-[#676767] border-[#000000ab]"
                        }`}
                    >
                    {tower.label}
                    </button>
                </li>
                ))}
            </ul>

            {/* TOWER 1 DATA */}
            {activeTower === "1" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                    <img className='w-full' src="/realty/images/tower-1-img-0.webp" alt="" />
                    <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                    Tower Plan A
                    </p>
                </li>
                <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                    <img className='w-full' src="/realty/images/tower-1-img-1.webp" alt="" />
                    <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                    Typical floor plan ( 1st to 7th )
                    </p>
                </li>
                <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%]  lg:p-[3rem] flex flex-col justify-between">
                    <img className='w-full' src="/realty/images/tower-1-img-2.webp" alt="" />
                    <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                    Pent house lower (8th)
                    </p>
                </li>
                <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%]  lg:p-[3rem] flex flex-col justify-between">
                    <img className='w-full' src="/realty/images/tower-1-img-3.webp" alt="" />
                    <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                    Pent house upper (8th)
                    </p>
                </li>
                <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                    <p className="max-[1023px]:text-[2rem] f-28">Basement Plan</p>
                    <p className="max-[1023px]:text-[1.5rem] f-20 mb-[2rem]">
                    BUA:3296.66
                    </p>
                    <img className='w-full' src="/realty/images/dp-floor-4.webp" alt="" />
                </li>
                <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                    <p className="max-[1023px]:text-[2rem] f-28 mb-[2rem]">
                    Layout plans
                    </p>
                    <img className='w-full' src="/realty/images/dp-floor-5.webp" alt="" />
                </li>
                </ul>
            )}

            {/* TOWER 2 DATA */}
            {activeTower === "2" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-2-img-0.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Tower Plan B
                        </p>
                    </li>
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-2-img-1.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Typical floor plan ( 1st to 7th )
                        </p>
                    </li>
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-2-img-2.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house lower (8th)
                        </p>
                    </li>
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-2-img-3.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house upper (8th)
                        </p>
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28">Basement Plan</p>
                        <p className="max-[1023px]:text-[1.5rem] f-20 mb-[2rem]">
                        BUA:3296.66
                        </p>
                        <img className='w-full' src="/realty/images/dp-floor-4.webp" alt="" />
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28 mb-[2rem]">
                        Layout plans
                        </p>
                        <img className='w-full' src="/realty/images/dp-floor-5.webp" alt="" />
                    </li>
                </ul>
            )}

            {/* TOWER 3 DATA */}
            {activeTower === "3" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-3-img-0.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Tower Plan C
                        </p>
                    </li>
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-3-img-1.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Typical floor plan ( 1st to 7th )
                        </p>
                    </li>
                     <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-3-img-2.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house lower (8th)
                        </p>
                    </li>
                     <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-3-img-3.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house upper (8th)
                        </p>
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28">Basement Plan</p>
                        <p className="max-[1023px]:text-[1.5rem] f-20 mb-[2rem]">
                        BUA:3296.66
                        </p>
                        <img className='w-full' src="/realty/images/dp-floor-4.webp" alt="" />
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28 mb-[2rem]">
                        Layout plans
                        </p>
                        <img className='w-full' src="/realty/images/dp-floor-5.webp" alt="" />
                    </li>
                </ul>
            )}

            {/* TOWER 4 DATA */}
            {activeTower === "4" && (
                <ul className="flex flex-wrap gap-y-[2rem] gap-x-[1rem] mt-[3rem] lg:gap-y-[4rem] lg:justify-between 3xl:mt-[5rem]">
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-4-img-0.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Tower Plan D
                        </p>
                    </li>
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-4-img-1.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Typical floor plan ( 1st to 7th )
                        </p>
                    </li>
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-4-img-2.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house lower (8th)
                        </p>
                    </li>
                    <li className="text-center bg-[#F6F6F6] rounded-[1rem] p-[4rem] w-[100%] lg:w-[32%] lg:p-[3rem] flex flex-col justify-between">
                        <img className='w-full' src="/realty/images/tower-4-img-3.webp" alt="" />
                        <p className="max-[1023px]:text-[2rem] f-28 mt-[2rem]">
                        Pent house upper (8th)
                        </p>
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28">Basement Plan</p>
                        <p className="max-[1023px]:text-[1.5rem] f-20 mb-[2rem]">
                        BUA:3296.66
                        </p>
                        <img className='w-full' src="/realty/images/dp-floor-4.webp" alt="" />
                    </li>
                    <li className="bg-[#F6F6F6] rounded-[1rem] p-[2rem] w-[100%] lg:p-[3rem]">
                        <p className="max-[1023px]:text-[2rem] f-28 mb-[2rem]">
                        Layout plans
                        </p>
                        <img className='w-full' src="/realty/images/dp-floor-5.webp" alt="" />
                    </li>
                </ul>
            )}
        </div>
    </section>
  )
}

export default TowerSection