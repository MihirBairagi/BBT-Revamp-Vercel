"use client";

import React, { useState, useEffect } from "react";

const BlogContent = ({ blogData }) => {
  const [sanitizedContent, setSanitizedContent] = useState('');

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

  // Sanitize HTML content on client side only
  useEffect(() => {
    const sanitizeContent = async () => {
      const rawContent = blogData?.postcontent || blogData?.content || '';
      
      if (!rawContent) {
        setSanitizedContent('');
        return;
      }

      // Only run DOMPurify on client side
      if (typeof window !== 'undefined') {
        try {
          const DOMPurify = (await import('dompurify')).default;
          const clean = DOMPurify.sanitize(rawContent);
          setSanitizedContent(clean);
        } catch (error) {
          console.error('Error sanitizing content:', error);
          // Fallback: use raw content (be careful with this in production)
          setSanitizedContent(rawContent);
        }
      } else {
        // During SSR, use raw content
        setSanitizedContent(rawContent);
      }
    };

    sanitizeContent();
  }, [blogData]);

  const title = blogData?.posttitle || blogData?.title || 'Blog Post';
  const publishDate = formatDate(blogData?.displaydate || blogData?.added);
  const author = blogData?.author || 'Big Boy Toyz';
  const tags = blogData?.posttags ? blogData.posttags.split(',').map(tag => tag.trim()) : [];

  return (
    <section className="bg-white pt-[4rem] xl:pt-[6rem] pb-[6rem] lg:pb-[8rem] xl:pb-[12rem] 3xl:pb-[15rem]">
      <div className="max-1920">
        <div className="container">
          <div className="lg:w-[90%] mx-auto xl:w-[70%]">
            {/* Blog Meta Information */}
            <div className="mb-[3rem] xl:mb-[4rem] text-center border-b border-gray-200 pb-[2rem]">
              {publishDate && (
                <p className="text-[1.1rem] xl:text-[1.2rem] text-gray-600 mb-2">
                  Published on {publishDate}
                </p>
              )}
              {author && (
                <p className="text-[1rem] xl:text-[1.1rem] text-gray-500">
                  By {author}
                </p>
              )}
            </div>

            {/* Blog Content */}
            <div 
              className="blog-content [&>p]:font-light [&>p]:text-[1.3rem] xl:[&>p]:text-[1.4rem] 2xl:[&>p]:text-[1.6rem] 3xl:[&>p]:text-[1.9rem] [&>p]:mb-4 [&>h1]:leading-[1.2] [&>h1]:tracking-[-1.5px] [&>h1]:text-[2.8rem] xl:[&>h1]:text-[3.4rem] 1xl:[&>h1]:text-[3.8rem] 2xl:[&>h1]:text-[4.2rem] 3xl:[&>h1]:text-[4.8rem] [&>h1]:mb-6 [&>h2]:leading-[1.2] [&>h2]:tracking-[-1.5px] [&>h2]:text-[2.4rem] xl:[&>h2]:text-[3rem] 1xl:[&>h2]:text-[3.4rem] 2xl:[&>h2]:text-[3.8rem] 3xl:[&>h2]:text-[4.5rem] [&>h2]:mb-5 [&>h3]:leading-[1.2] [&>h3]:tracking-[-1.5px] [&>h3]:text-[2rem] xl:[&>h3]:text-[2.6rem] 1xl:[&>h3]:text-[3rem] 2xl:[&>h3]:text-[3.4rem] 3xl:[&>h3]:text-[4rem] [&>h3]:mb-4 [&>h4]:leading-[1.2] [&>h4]:text-[1.8rem] xl:[&>h4]:text-[2.2rem] 1xl:[&>h4]:text-[2.6rem] 2xl:[&>h4]:text-[3rem] 3xl:[&>h4]:text-[3.4rem] [&>h4]:mb-3 [&>ul]:mb-4 [&>ol]:mb-4 [&>li]:text-[1.3rem] xl:[&>li]:text-[1.4rem] 2xl:[&>li]:text-[1.6rem] 3xl:[&>li]:text-[1.9rem] [&>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mb-4 [&>strong]:font-semibold [&>b]:font-semibold [&>em]:italic [&>i]:italic [&>a]:text-blue-600 [&>a]:underline [&>a]:hover:text-blue-800 [&>img]:rounded-lg [&>img]:mb-4 [&>img]:mx-auto"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-[3rem] xl:mt-[4rem] pt-[2rem] border-t border-gray-200">
                <h4 className="text-[1.4rem] xl:text-[1.6rem] font-medium mb-3">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-[1rem] xl:text-[1.1rem] hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;

