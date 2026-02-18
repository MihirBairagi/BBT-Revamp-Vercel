import React from "react";
import PageHeader from "../../Components/Wallpapers/PageHeader/PageHeader";
import WallpaperList from "../../Components/Wallpapers/WallpaperList/WallpaperList";
import SquadBanner from "../../Components/Wallpapers/SquadBanner/SquadBanner";
import RelatedBlogs from "../../Components/BlogDetail/RelatedBlogs/RelatedBlogs";
import { wallpapersAPI, blogsAPI } from "../lib/services/api";

// Set revalidation time for ISR
export const revalidate = 1800; // Revalidate every 30 minutes

// Function to get wallpapers stats for the header
async function getWallpapersStats() {
  try {
    const statsResponse = await wallpapersAPI.getStats();
    if (statsResponse && statsResponse.success) {
      return {
        totalWallpapers: statsResponse.stats?.totalWallpapers || 0,
        totalViews: statsResponse.stats?.totalViews || 0,
        totalDownloads: statsResponse.stats?.totalDownloads || 0
      };
    }
    return {
      totalWallpapers: 0,
      totalViews: 0,
      totalDownloads: 0
    };
  } catch (error) {
    console.error('Error fetching wallpapers stats:', error);
    return {
      totalWallpapers: 0,
      totalViews: 0,
      totalDownloads: 0
    };
  }
}

// Function to get latest blogs for RelatedBlogs section
async function getLatestBlogs() {
  try {
    const blogsResponse = await blogsAPI.getAll(1, 4); // Get 4 latest blogs
    if (blogsResponse && blogsResponse.success && blogsResponse.blogs) {
      return blogsResponse.blogs;
    }
    return [];
  } catch (error) {
    console.error('Error fetching latest blogs:', error);
    return [];
  }
}

// Generate metadata for the page
export async function generateMetadata() {
  return {
    title: 'Car Wallpapers | Big Boy Toyz - HD Luxury Car Wallpapers',
    description: 'Download high-quality luxury car wallpapers from Big Boy Toyz. Get stunning HD wallpapers of premium and exotic cars for your desktop and mobile.',
    keywords: 'car wallpapers, luxury car wallpapers, HD car images, exotic car wallpapers, Big Boy Toyz wallpapers, premium car backgrounds, desktop wallpapers, mobile wallpapers',
    openGraph: {
      title: 'Car Wallpapers | Big Boy Toyz',
      description: 'Download high-quality luxury car wallpapers from Big Boy Toyz. Get stunning HD wallpapers of premium and exotic cars.',
      type: 'website',
      images: [
        {
          url: '/images/wallpapers/wallpapers-og-image.webp',
          width: 1200,
          height: 630,
          alt: 'Big Boy Toyz Car Wallpapers'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Car Wallpapers | Big Boy Toyz',
      description: 'Download high-quality luxury car wallpapers from Big Boy Toyz.',
      images: ['/images/wallpapers/wallpapers-og-image.webp']
    }
  };
}

const Wallpapers = async () => {
  // Fetch wallpapers stats and latest blogs
  const [wallpapersStats, latestBlogs] = await Promise.all([
    getWallpapersStats(),
    getLatestBlogs()
  ]);
  
  console.log('Wallpapers page loaded with stats:', wallpapersStats);
  console.log('Latest blogs fetched:', latestBlogs.length);
  
  return (
    <main>
      <PageHeader 
        totalWallpapers={wallpapersStats.totalWallpapers}
        totalViews={wallpapersStats.totalViews}
        totalDownloads={wallpapersStats.totalDownloads}
      />
      <WallpaperList />
      <RelatedBlogs
        sectionTitle=" latest <b>blogs</b>"
        data={latestBlogs}
        sectionBg="#F4F4F1"
        cardBg="#ffffff"
      />
      <SquadBanner />
    </main>
  );
};

export default Wallpapers;
