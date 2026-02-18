"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = ({ categoryData }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Extract the last section content from HTML description
  const getAboutSectionContent = () => {
    if (!categoryData?.description) {
      return {
        title: "Second Hand Exotic SUVs are in Trend Now!",
        paragraphs: []
      };
    }
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = categoryData.description;
    
    // Find the second H2 (usually "Second Hand Exotic...")
    const h2Elements = tempDiv.querySelectorAll('h2');
    const secondH2 = h2Elements[1] || h2Elements[0];
    
    if (!secondH2) {
      return {
        title: `Second Hand Exotic ${categoryData.cname || 'SUVs'} are in Trend Now!`,
        paragraphs: []
      };
    }
    
    // Extract title and format it
    const titleText = secondH2.innerHTML;
    const paragraphs = [];
    
    // Get paragraphs after the second H2
    let currentElement = secondH2.nextElementSibling;
    while (currentElement) {
      if (currentElement.tagName === 'P') {
        paragraphs.push(currentElement.textContent);
      }
      currentElement = currentElement.nextElementSibling;
    }
    
    return {
      title: titleText,
      paragraphs
    };
  };

  const aboutContent = getAboutSectionContent();

  // Don't render if there's no meaningful content
  const hasRealContent = aboutContent.paragraphs.length > 0 && 
    aboutContent.paragraphs.some(p => p.trim().length > 10);
  
  if (!hasRealContent) {
    return null;
  }

  return (
    <section className="bg-dark-800 py-28 text-white xl:py-40 2xl:py-48 3xl:py-[20rem]">
      <div className="container">
        <div
          className="lg:flex lg:justify-between lg:items-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="mb-16 lg:w-[25%] lg:mb-0 xl:w-[24%]">
            <Image
              src="/images/bbt-logo-2.webp"
              alt="BBT Logo"
              width="389"
              height="258"
              className=" object-contain w-44 lg:w-full"
            />
          </div>
          <div className="font-light lg:w-[70%] xl:w-[69%] [&>p]:text-xl [&>p]:font-[300] text-justify [&>p]:leading-1.6 xl:[&>p]:text-[1.1rem] xl:[&>p]:tracking-[-0.1px] 1xl:[&>p]:text-[1.22rem] 2xl:[&>p]:text-[1.33rem] 2xl:[&>p]:leading-[1.5] 3xl:[&>p]:text-[1.6rem]">
            <h2 
              className="font-extralight mb-8 tracking-tighter [&>strong]:font-normal leading-1.3 lg:leading-[1.4]"
              dangerouslySetInnerHTML={{ __html: aboutContent.title }}
            />
            {aboutContent.paragraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                <p>{paragraph}</p>
                {index < aboutContent.paragraphs.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
