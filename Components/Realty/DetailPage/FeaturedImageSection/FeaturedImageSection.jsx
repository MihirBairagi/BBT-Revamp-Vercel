"use client";
import React from 'react'

function FeaturedImageSection() {
  return (
    <section className='max-w-[1920px] mx-auto' >
        <img className='hidden w-full lg:block' src="/realty/images/dp-featured-img-new.webp" alt="" />
        <img className='lg:hidden w-full' src="/realty/images/dp-featured-mob-img-new.webp" alt="" />
    </section>

  )
}

export default FeaturedImageSection