"use client";

import React from "react";
import Image from "next/image";

const BannerSection = ({ blogData }) => {
  // Validate image URL
  const validateImageUrl = (url) => {
    if (!url || typeof url !== 'string') return '/images/blogs/blog-banner.webp';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    // if (url.startsWith('/')) return url;
    return `https://cdn.bigboytoyz.com/new-version/article/${url}`;
  };

  const title = blogData?.posttitle || blogData?.title || 'Blog Post';
  const bannerImage = validateImageUrl(blogData?.featuredimage || blogData?.banner);
  const imageAlt = blogData?.imgalt || title;

  return (
    <section className="bg-white pt-[6rem] lg:pt-[8rem] xl:pt-[10rem] 3xl:pt-[15rem]">
      <div className="max-1920">
        <div className="container">
          <h1 className="font-[200] [&>b]:font-[400] text-[3rem] [&>br]:hidden md:[&>br]:block text-center leading-[1.1] tracking-[-2px] xl:text-[5rem] xl:tracking-[-3px] 1xl:text-[5.5rem] 2xl:text-[5.8rem] 3xl:text-[7.5rem] 3xl:tracking-[-5px]">
            {title}
          </h1>
          <div className="rounded-[1.5rem] overflow-hidden mt-[4rem] xl:mt-[6rem] lg:rounded-[3rem] 3xl:rounded-[5rem] relative aspect-[16/9]">
            <Image 
              src={bannerImage} 
              alt={imageAlt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              onError={(e) => {
                e.target.src = '/images/blogs/blog-banner.webp';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
