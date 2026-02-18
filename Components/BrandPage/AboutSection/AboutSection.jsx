"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = ({ brandData }) => {
  const [sanitizedAboutContent, setSanitizedAboutContent] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  // Use brand data or fallback
  const brandName = brandData?.name || "BMW";
  const displayName = brandName.charAt(0).toUpperCase() + brandName.slice(1).toLowerCase();
  
  // Use custom description if available, otherwise use default template
  const aboutContent = brandData?.description || 
    `What if we say that your second-hand ${displayName} car is still a new one? Yes! You read it right, we offer you used ${displayName} cars that are still new in look (polished) and resemble all the features that a luxury car needs. Along with that, you get certified and pre-owned ${displayName} passed through checkpoints. Which gives you a feel of new at a reasonable price range. We offer you one of the best deals across India with high quality and we are the most trusted company in the nation for used luxury cars, while we offer myriad brands.`;

  // Handle DOMPurify on client side only
  useEffect(() => {
    const sanitizeContent = async () => {
      if (typeof window !== 'undefined') {
        // Dynamic import DOMPurify only on client side
        const DOMPurify = (await import('dompurify')).default;
        setSanitizedAboutContent(DOMPurify.sanitize(aboutContent));
      } else {
        // Server-side fallback - use the content as is
        setSanitizedAboutContent(aboutContent);
      }
    };
    
    sanitizeContent();
  }, [aboutContent]);

  return (
    <section className="bg-dark-800 py-28 text-white xl:py-40 2xl:py-48 3xl:py-[20rem]">
      <div className="container">
        <div
          className="lg:flex lg:justify-between lg:items-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="mb-16 lg:w-[25%] lg:mb-0 xl:w-[20%] 1xl:w-[23%]">
            <Image
              src="/images/bbt-logo-2.webp"
              alt="BBT Logo"
              width="389"
              height="258"
              className=" object-contain w-44 lg:w-full"
            />
          </div>
          <div className="font-light [&>p]:text-xl [&>p]:leading-1.6 lg:w-[70%] xl:w-[75%] 1xl:w-[70%] 2xl:[&>p]:text-[1.6rem]">
            <h2 className="font-light mb-8 tracking-tighter [&>strong]:font-normal leading-1.3 lg:leading-[1.4] [&>br]:hidden lg:[&>br]:block">
              Why Buy{" "}
              <strong>
                Second Hand <br /> {displayName}
              </strong>{" "}
              Cars From Big Boy Toyz?
            </h2>
            <div 
              className="1xl:text-[1.55rem] 3xl:text-[1.65rem] font-light [&>p]:mb-4 [&>p]:leading-[1.6] [&>strong]:font-semibold [&>a]:text-blue-400 [&>a]:underline [&>a]:hover:text-blue-300"
              dangerouslySetInnerHTML={{ __html: sanitizedAboutContent }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
