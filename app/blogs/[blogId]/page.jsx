import React from "react";
import { blogsAPI } from "../../lib/services/api";
import { notFound } from "next/navigation";
import BannerSection from "../../../Components/BlogDetail/BannerSection/BannerSection";
import BlogContent from "../../../Components/BlogDetail/BlogContent/BlogContent";
import NewsLetterSection from "../../../Components/BlogDetail/NewsLetterSection/NewsLetterSection";
import RecentUploads from "../../../Components/CommonComponents/RecentUploads/RecentUploads";
import ExploreSection from "../../../Components/BlogDetail/ExploreSection/ExploreSection";
import RelatedBlogs from "../../../Components/BlogDetail/RelatedBlogs/RelatedBlogs";

// Set the revalidation time for ISR
export const revalidate = 3600; // Revalidate every hour

// Function to fetch blog data from the API
async function getBlogData(blogId) {
  try {
    console.log(`Fetching blog data for: ${blogId}`);
    
    let blogResponse;
    
    // Try to fetch by slug first, then by ID
    try {
      blogResponse = await blogsAPI.getBySlug(blogId);
    } catch (error) {
      console.log('Failed to fetch by slug, trying by ID...');
      blogResponse = await blogsAPI.getOne(blogId);
    }
    
    if (!blogResponse || !blogResponse.success || !blogResponse.blog) {
      console.error('Failed to fetch blog data:', blogResponse);
      return null;
    }
    
    const blog = blogResponse.blog;
    
    // Get related blogs using the general getAll method
    let relatedBlogs = [];
    try {
      const relatedResponse = await blogsAPI.getAll(1, 4);
      if (relatedResponse && relatedResponse.success && relatedResponse.data) {
        // Filter out the current blog and take the first 3
        relatedBlogs = relatedResponse.data
          .filter(relatedBlog => relatedBlog.id !== blog.id && relatedBlog._id !== blog._id)
          .slice(0, 3);
      }
    } catch (error) {
      console.error('Error fetching related blogs:', error);
    }
    
    return {
      blog,
      relatedBlogs
    };
  } catch (error) {
    console.error('Error in getBlogData:', error);
    return null;
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { blogId } = params;
  const result = await getBlogData(blogId);
  
  if (!result || !result.blog) {
    return {
      title: 'Blog Not Found | Big Boy Toyz',
      description: 'The blog you are looking for could not be found.'
    };
  }
  
  const { blog } = result;
  const title = blog.posttitle || blog.title || 'Blog Post';
  const description = blog.metadesc || blog.metaDescription ||
    (blog.postcontent ? blog.postcontent.replace(/<[^>]*>/g, '').substring(0, 160) + '...' : '') ||
    'Read this insightful blog post from Big Boy Toyz.';
  const keywords = blog.metakeyword || blog.metaKeywords || blog.posttags || blog.tags || 'automotive blog, luxury cars, Big Boy Toyz';
  
  // Use the full CDN URL for images
  const imageUrl = blog.featuredimage || blog.image || blog.thumbnail;
  
  return {
    title: `${title} | Big Boy Toyz Blog`,
    description,
    keywords,
    openGraph: {
      title: `${title} | Big Boy Toyz`,
      description,
      type: 'article',
      images: imageUrl ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.imgalt || title
        }
      ] : [],
      publishedTime: blog.displaydate || blog.added,
      modifiedTime: blog.modified
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Big Boy Toyz`,
      description,
      images: imageUrl ? [imageUrl] : []
    }
  };
}

// Generate static paths for static generation (optional)
export async function generateStaticParams() {
  try {
    // Get first 50 blogs for static generation
    const blogsResponse = await blogsAPI.getAll(1, 50);
    
    if (!blogsResponse || !blogsResponse.success || !blogsResponse.data) {
      return [];
    }
    
    return blogsResponse.data.map((blog) => ({
      blogId: blog.posturl || blog.slug || blog.id.toString()
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

const BlogDetail = async ({ params }) => {
  const { blogId } = params;
  const result = await getBlogData(blogId);
  
  // Handle not found case
  if (!result || !result.blog) {
    notFound();
  }
  
  const { blog, relatedBlogs } = result;
  
  return (
    <>
      <BannerSection blogData={blog} />
      <BlogContent blogData={blog} />
      <NewsLetterSection />
      <RelatedBlogs blogs={relatedBlogs} />
      <ExploreSection />
      <RecentUploads />
    </>
  );
};

export default BlogDetail;
