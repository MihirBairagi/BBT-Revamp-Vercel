import React from 'react';
const uspList = [
    {
        icon:'/images/services/banner-usp-1.webp',
        title:'at your </br><b>comfort</b>'
    },
    {
        icon:'/images/services/banner-usp-2.webp',
        title:'easy and  </br><b>hassle free</b>'
    },
    {
        icon:'/images/services/banner-usp-3.webp',
        title:'cost effectively </br><b>solution</b>'
    },
    {
        icon:'/images/services/banner-usp-4.webp',
        title:'100% transparent  </br><b>process</b>'
    },
    {
        icon:'/images/services/banner-usp-5.webp',
        title:'Pick and  </br><b>drop services</b>'
    }
]

const UspSection = () => {
  return (
    <section className='bg-[#F4F4F1] py-[3rem] xl:py-[1rem] 1xl:py-[1.5rem] 3xl:py-[2rem]'>
        <div className="max-1920">
            <div className="container">
                <ul className='flex justify-between flex-wrap sm:justify-start'>
                {uspList.map((usp , index)=>(
                    <li key={index} className='w-[50%] sm:w-[33%] lg:w-[20%] flex items-center py-[0.5rem] xl:py-[1rem] my-[1.5rem] border-l border-[#BFBFBF] pl-[2rem] [&:nth-child(odd)]:border-none [&:nth-child(odd)]:pl-0 sm:[&:nth-child(odd)]:pl-[2.5rem] sm:[&:nth-child(odd)]:border-solid lg:first:!pl-0 lg:first:!border-none xl:items-start 3xl:py-[2rem]'>
                        <div className='w-[3rem] xl:w-[3.5rem] 1xl:w-[3.8rem] 3xl:w-[5.5rem]'>
                            <img src={usp.icon} alt="Icon" className='object-contain h-auto w-full xl:max-h-[2.8rem] 1xl:max-h-[3.4rem] 3xl:max-h-[4.2rem]' />
                        </div>
                        <h6 className='flex-[1] pl-[1rem] text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem] 3xl:text-[2.2rem] font-light [&>b]:font-medium capitalize' dangerouslySetInnerHTML={{__html:usp.title}}></h6>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default UspSection