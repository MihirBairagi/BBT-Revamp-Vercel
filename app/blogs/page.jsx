import React from "react";
import { blogsAPI } from "../lib/services/api";
import { notFound } from "next/navigation";
import PageHeader from "../../Components/Blogs/PageHeader/PageHeader";
import BlogList from "../../Components/Blogs/BlogList/BlogList";
import AboutUs from "../../Components/Blogs/AboutUs/AboutUs";
import NewsLetterSection from "../../Components/Blogs/NewsLetterSection/NewsLetterSection";
import { blogs as dummyBlogs } from "../../public/data/dummyData";

// Set the revalidation time for ISR
export const revalidate = 3600; // Revalidate every hour

// Function to fetch blogs data from the API with fallback to dummy data
async function getBlogsData(page = 1, limit = 12, sort = 'modified', order = 'desc') {
  try {
    console.log(`Fetching blogs data - Page: ${page}, Limit: ${limit}`);
    console.log(`API URL: ${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'}`);
    
    const blogsResponse = await blogsAPI.getAll(page, limit, sort, order);
    
    if (!blogsResponse) {
      console.error('Failed to fetch blogs data:', blogsResponse);
      throw new Error('API response failed');
    }
    
    return {
      blogs: blogsResponse.data || blogsResponse.blogs || [],
      totalBlogs: blogsResponse.total || blogsResponse.totalCount || 0,
      currentPage: blogsResponse.currentPage || page,
      totalPages: blogsResponse.totalPages || 1,
      source: 'api'
    };
  } catch (error) {
    console.error('Error in getBlogsData, falling back to dummy data:', error);
    
    // Fallback to dummy data
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedBlogs = dummyBlogs.slice(startIndex, endIndex);
    const totalPages = Math.ceil(dummyBlogs.length / limit);
    
    return {
      blogs: paginatedBlogs,
      totalBlogs: dummyBlogs.length,
      currentPage: page,
      totalPages: totalPages,
      source: 'dummy'
    };
  }
}

// Generate metadata for the page
export async function generateMetadata() {
  return {
    title: 'Blogs | Big Boy Toyz - Latest Automotive News & Insights',
    description: 'Read the latest automotive blogs, luxury car reviews, industry insights, and expert advice from Big Boy Toyz - India\'s premier luxury car dealership.',
    keywords: 'automotive blogs, luxury car news, car reviews, Big Boy Toyz blogs, automobile insights, luxury car tips',
    openGraph: {
      title: 'Blogs | Big Boy Toyz',
      description: 'Read the latest automotive blogs, luxury car reviews, and industry insights from Big Boy Toyz.',
      type: 'website',
      images: [
        {
          url: '/images/blogs/blog-og-image.webp',
          width: 1200,
          height: 630,
          alt: 'Big Boy Toyz Blogs'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blogs | Big Boy Toyz',
      description: 'Read the latest automotive blogs and luxury car insights from Big Boy Toyz.',
      images: ['/images/blogs/blog-og-image.webp']
    }
  };
}

const Blogs = async ({ searchParams }) => {
  // Extract search parameters
  const page = parseInt(searchParams?.page) || 1;
  const limit = parseInt(searchParams?.limit) || 12;
  const sort = searchParams?.sort || 'modified';
  const order = searchParams?.order || 'desc';
  
  // Fetch blogs data
  const blogsData = await getBlogsData(page, limit, sort, order);
  
  console.log(`Blogs loaded from ${blogsData.source}: ${blogsData.blogs.length} blogs`);
  
  return (
    <>
      <PageHeader totalBlogs={blogsData.totalBlogs} />
      <BlogList 
        blogs={blogsData.blogs}
        currentPage={blogsData.currentPage}
        totalPages={blogsData.totalPages}
        totalBlogs={blogsData.totalBlogs}
        isLoading={false}
      />
      <AboutUs />
      <NewsLetterSection />
    </>
  );
};

export default Blogs;
