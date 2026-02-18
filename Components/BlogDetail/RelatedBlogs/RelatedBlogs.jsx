"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const RelatedBlogs = ({ sectionBg, sectionTitle, cardBg, blogs = [], data = [], isGuides = false }) => {
  // Use either blogs or data prop (for backward compatibility)
  const items = blogs.length > 0 ? blogs : data;
  
  // Validate image URL
  const validateImageUrl = (url) => {
    if (!url || typeof url !== 'string') return '/images/blogs/blog-placeholder.webp';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    if (url.startsWith('/')) return url;
    return `/${url}`;
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return '';
    }
  };

  // Extract text content from HTML safely
  const extractTextContent = (htmlContent, maxLength = 100) => {
    if (!htmlContent) return '';
    const textContent = htmlContent.replace(/<[^>]*>/g, '');
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength) + '...'
      : textContent;
  };

  // Get item URL slug or ID
  const getItemUrl = (item) => {
    if (isGuides) {
      return `/guides/${item.slug || item.posturl || item.id || item._id}`;
    }
    return `/blogs/${item.posturl || item.slug || item.id || item._id}`;
  };

  // Get item fields based on type
  const getItemData = (item) => {
    if (isGuides) {
      return {
        image: validateImageUrl(item.thumbnail || item.featuredimage),
        title: item.title || 'Untitled Guide',
        description: extractTextContent(item.description || item.content || ''),
        publishDate: item.publishedDate || formatDate(item.displaydate || item.added),
        alt: item.imgalt || item.title
      };
    } else {
      return {
        image: validateImageUrl(item.featuredimage || item.thumbnail),
        title: item.posttitle || item.title || 'Untitled Blog',
        description: extractTextContent(item.postcontent || item.description || ''),
        publishDate: formatDate(item.displaydate || item.added),
        alt: item.imgalt || item.title
      };
    }
  };

  // Use the provided items or limit to first 3
  const relatedItems = items.slice(0, 3);

  return (
    <section
      className={`${
        sectionBg ? `bg-[${sectionBg}]` : "bg-white"
      } py-[6rem] lg:py-[8rem] xl:py-[12rem] 3xl:py-[15rem]`}
    >
      <div className="max-1920">
        <div className="container">
          <h2
            className="font-light text-center [&>b]:font-medium text-[2.5rem] xl:text-[3.5rem] 1xl:text-[4rem] 2xl:text-[4.2rem] 3xl:text-[4.5rem] tracking-tighter capitalize mb-[3rem] xl:mb-[4rem]"
            dangerouslySetInnerHTML={{
              __html: sectionTitle
                ? sectionTitle
                : isGuides 
                  ? "Other Related <b>Guides</b>"
                  : "Other Related <b>blogs</b>",
            }}
          ></h2>

          {relatedItems && relatedItems.length > 0 ? (
            <>
              <ul className="flex flex-wrap justify-between">
                {relatedItems.map((item, index) => {
                  const itemData = getItemData(item);

                  return (
                    <li
                      key={item.id || item._id || index}
                      className="w-full mt-[4rem] md:w-[48%] xl:mt-[5rem] h-[inherit] xl:w-[31%]"
                    >
                      <Link
                        href={getItemUrl(item)}
                        className={`bg-[${cardBg || 'F4F4F1'}] block transition-all h-full duration-500 group rounded-[1.5rem] xl:rounded-[2.5rem] overflow-hidden 3xl:rounded-[5rem] hover:shadow-lg`}
                      >
                        <div className="rounded-[1.5rem] xl:rounded-[2.5rem] overflow-hidden 3xl:rounded-[5rem] relative aspect-[735/682]">
                          <Image
                            src={itemData.image}
                            alt={itemData.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              e.target.src = '/images/blogs/blog-placeholder.webp';
                            }}
                          />
                        </div>
                        <div className="px-[2rem] pt-[2rem] pb-[3rem] xl:px-[3.5rem] xl:pt-[3rem] xl:pb-[4.5rem] 3xl:px-[6rem] 3xl:pt-[4rem] 3xl:pb-[6rem]">
                          <h4 className="text-[1.8rem] leading-[1.3] mb-[1rem] line-clamp-2 xl:text-[1.5rem] xl:tracking-[-1px] 3xl:text-[2.4rem] 1xl:text-[1.8rem] 2xl:text-[2rem] group-hover:text-gray-700 transition-colors duration-300">
                            {itemData.title}
                          </h4>
                          {itemData.description && (
                            <p className="text-[1.1rem] font-light text-gray-600 mb-[1rem] line-clamp-2 xl:text-[1.2rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                              {itemData.description}
                            </p>
                          )}
                          {itemData.publishDate && (
                            <p className="text-[1rem] font-light text-gray-500 xl:text-[1.1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
                              {itemData.publishDate}
                            </p>
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <div className="py-[7rem] text-center">
              <h2 className="text-[2.5rem] font-light mb-4">
                No Related {isGuides ? 'Guides' : 'Blogs'} Found!
              </h2>
              <p className="text-[1.2rem] text-gray-600">Check back later for more related content.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;
