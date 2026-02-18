"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const DescriptionSection = ({ categoryData }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Extract the first paragraph from the HTML description
  const getFirstParagraph = () => {
    if (!categoryData?.description) return categoryData?.shortDescription || '';
    
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = categoryData.description;
    
    // Get the first paragraph
    const firstParagraph = tempDiv.querySelector('p');
    return firstParagraph ? firstParagraph.textContent : categoryData.shortDescription || '';
  };

  const styleName = categoryData?.cname?.toLowerCase() || 'suv';
  const firstParagraphText = getFirstParagraph();

  // Don't render if there's no meaningful content (less than 20 characters or just the category name)
  if (!firstParagraphText || 
      firstParagraphText.trim().length < 20 || 
      firstParagraphText.trim().toLowerCase() === categoryData?.cname?.toLowerCase() ||
      firstParagraphText.trim().toLowerCase() === styleName) {
    return null;
  }

  return (
    <section className="bg-black py-24 xl:py-36 3xl:py-[15rem]">
      <div className="container">
        <div
          className="relative pb-[10rem] sm:pb-[26rem] md:pb-[14rem] xl:pb-[10rem] 3xl:pb-[5rem]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="flex flex-wrap justify-between">
            <div className=" w-50% md:w-[25%] lg:w-[30%] xl:w-[28%] 1xl:w-[30%]">
              <Image
                src={`/images/${styleName}/${styleName}-description-img-1.webp`}
                width="445"
                height="587"
                alt="Description Image"
                className="w-full object-contain h-auto"
                onError={(e) => {
                  e.target.src = "/images/suv/suv-description-img-1.webp";
                }}
              />
            </div>
            <div className="w-full mt-14 md:w-[70%] md:pr-[14rem] lg:w-[65%] xl:w-[68%] 1xl:w-[65%] 3xl:pr-[20rem] 3xl:pl-[3rem]">
              <p className="text-neutral-300 text-center text-xl leading-1.6 font-light md:text-left lg:text-2xl lg:leading-[1.7] xl:text-[2rem] 3xl:text-[2.8rem]">
                {firstParagraphText}
              </p>
              <div className="max-w-[3rem] mx-auto mt-8 md:mr-auto md:ml-0 xl:max-w-[5rem] xl:mt-16 3xl:max-w-[8rem] 3xl:mt-[7rem]">
                <Image
                  src="/images/suv-down-arrow.webp"
                  width="80"
                  height="96"
                  alt="Arrow Icon"
                  className="w-full inline-block object-contain h-auto "
                />
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[10rem] sm:w-[20rem] md:w-[14rem] xl:w-[15rem] 3xl:w-[16rem]">
            <Image
              src={`/images/${styleName}/${styleName}-description-img-2.webp`}
              width="162"
              height="214"
              alt="Description Image"
              className="w-full inline-block object-contain h-auto"
              onError={(e) => {
                e.target.src = "/images/suv/suv-description-img-2.webp";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
