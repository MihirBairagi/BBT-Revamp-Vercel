import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const BlogCard = ({ data }) => {
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
  const extractTextContent = (htmlContent, maxLength = 122) => {
    if (!htmlContent) return '';
    // Remove HTML tags and get plain text
    const textContent = htmlContent.replace(/<[^>]*>/g, '');
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength) + '...'
      : textContent;
  };

  // Get blog URL slug or ID
  const getBlogUrl = () => {
    return data.posturl || data.slug || data.id || data._id;
  };

  const imageUrl = validateImageUrl(data.featuredimage || data.thumbnail);
  const title = data.posttitle || data.title || 'Untitled Blog';
  const description = extractTextContent(data.postcontent || data.description || '');
  const publishDate = formatDate(data.displaydate || data.added);

  return (
    <Link href={`/blogs/${getBlogUrl()}`} className='block transition-all duration-500 group rounded-[1.5rem] xl:rounded-[2.5rem] overflow-hidden bg-[#F4F4F1] 3xl:rounded-[5rem]'>
      <div className='rounded-[1.5rem] xl:rounded-[2.5rem] overflow-hidden 3xl:rounded-[5rem] relative aspect-[735/682]'>
        <Image 
          src={imageUrl} 
          alt={data.imgalt || title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className='object-cover transition-transform duration-500 group-hover:scale-105' 
          onError={(e) => {
            e.target.src = '/images/blogs/blog-placeholder.webp';
          }}
        />
      </div>
      <div className='px-[2rem] pt-[2rem] pb-[3rem] xl:px-[3.5rem] xl:pt-[3rem] xl:pb-[4.5rem] 3xl:px-[6rem] 3xl:pt-[4rem] 3xl:pb-[6rem]'>
        {publishDate && (
          <div className='text-[1rem] text-gray-500 mb-[1rem] xl:text-[1.1rem] 3xl:text-[1.4rem]'>
            {publishDate}
          </div>
        )}
        <h4 className='text-[1.8rem] leading-[1.3] mb-[2rem] line-clamp-2 xl:text-[2.5rem] xl:tracking-[-1px] 3xl:text-[3.8rem] 1xl:text-[2.8rem] 2xl:text-[3.2rem] group-hover:text-gray-700 transition-colors duration-300'>
          {title}
        </h4>
        {description && (
          <p className='text-[1.2rem] font-light text-gray-600 line-clamp-3 3xl:text-[1.9rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 2xl:text-[1.6rem]'>
            {description}
          </p>
        )}
      </div>
    </Link>
  )
}

export default BlogCard