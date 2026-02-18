"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import parse, { domToReact } from 'html-react-parser';

const UspSection = ({ brandData }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const brandName = brandData?.name || "Luxury Brand";
  const displayName = brandName.charAt(0).toUpperCase() + brandName.slice(1);
  const bdescHtml = brandData?.description;

  const parserOptions = {
    replace: domNode => {
      if (domNode.type === 'tag') {
        if (domNode.name === 'a' && domNode.attribs?.href) {
          return (
            <Link href={domNode.attribs.href} className="text-yellow-500 hover:text-yellow-600 underline transition-colors duration-300">
              {domToReact(domNode.children, parserOptions)}
            </Link>
          );
        }
        if (domNode.name === 'h2') {
          return (
            <h2 className="text-[2.2rem] font-semibold leading-tight my-6 xl:text-[2.8rem] 1xl:text-[3.2rem] 3xl:text-[3.5rem]">
              {domToReact(domNode.children, parserOptions)}
            </h2>
          );
        }
        if (domNode.name === 'h3') {
          return (
            <h3 className="text-[1.8rem] font-semibold leading-snug my-5 xl:text-[2.2rem] 1xl:text-[2.5rem] 3xl:text-[2.8rem]">
              {domToReact(domNode.children, parserOptions)}
            </h3>
          );
        }
        if (domNode.name === 'h4') {
          return (
            <h4 className="text-[1.5rem] font-semibold leading-snug my-4 xl:text-[1.8rem] 1xl:text-[2rem] 3xl:text-[2.2rem]">
              {domToReact(domNode.children, parserOptions)}
            </h4>
          );
        }
        if (domNode.name === 'p') {
          return (
            <p className="text-[1.3rem] font-light leading-relaxed my-4 xl:text-[1.6rem] 1xl:text-[1.8rem] 2xl:text-[1.9rem] 3xl:text-[2rem]">
              {domToReact(domNode.children, parserOptions)}
            </p>
          );
        }
        if (domNode.name === 'ul') {
          let customClass = "list-disc pl-5 my-4";
          if (domNode.attribs?.class?.includes('aboutAreaBoxList')) {
            customClass = "list-none pl-0 my-6";
          }
          return (
            <ul className={customClass}>
              {domToReact(domNode.children, parserOptions)}
            </ul>
          );
        }
        if (domNode.name === 'ol') {
          return (
            <ol className="list-decimal pl-5 my-4">
              {domToReact(domNode.children, parserOptions)}
            </ol>
          );
        }
        if (domNode.name === 'li') {
          if (domNode.parent && domNode.parent.attribs?.class?.includes('aboutAreaBoxList')) {
            return (
              <li className="mb-3">
                {domToReact(domNode.children, parserOptions)}
              </li>
            );
          }
          return (
            <li className="mb-2 text-[1.3rem] font-light leading-relaxed xl:text-[1.6rem] 1xl:text-[1.8rem] 2xl:text-[1.9rem] 3xl:text-[2rem]">
              {domToReact(domNode.children, parserOptions)}
            </li>
          );
        }
      }
    }
  };

  const fallbackContent = (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
      <div className="pb-16">
        <h2 className="text-[2.9rem] font-normal leading-[1.1] mb-8 xl:text-[3.4rem] 1xl:text-[4rem] 1xl:mb-14 3xl:text-[4.5rem] capitalize">
          More About Pre-Owned {displayName} Cars
        </h2>
        <p className="text-[1.3rem] font-light xl:text-[1.8rem] xl:leading-[1.6] 1xl:text-[2.2rem] 3xl:text-[2.8rem]">
          Discover the quality and performance of our certified pre-owned {displayName} vehicles. Each car is meticulously inspected to ensure you receive the best value and a seamless buying experience.
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#f3f3f3] pb-24 pt-[2rem] 1xl:py-36 3xl:py-44 brand-page-parse-text">
      <div className="max-1920">
        <div className="container">
          {bdescHtml ? (
            <div 
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
              className="prose prose-lg max-w-none prose-headings:font-semibold prose-a:text-yellow-500 prose-a:no-underline hover:prose-a:underline prose-li:marker:text-neutral-700"
            >
              {parse(bdescHtml, parserOptions)}
            </div>
          ) : (
            fallbackContent
          )}
        </div>
      </div>
    </section>
  );
};

export default UspSection;
