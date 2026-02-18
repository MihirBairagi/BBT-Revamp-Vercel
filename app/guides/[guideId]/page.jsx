import React from "react";
import { notFound } from 'next/navigation';
import BannerSection from "../../../Components/GuideDetails/BannerSection/BannerSection";
import GuideContent from "../../../Components/GuideDetails/GuideContent/GuideContent";
import WorkshopSection from "../../../Components/GuideDetails/WorkshopSection/WorkshopSection";
import AboutUs from "../../../Components/GuideDetails/AboutUs/AboutUs";
import RelatedBlogs from "../../../Components/BlogDetail/RelatedBlogs/RelatedBlogs";
import { autoguidesAPI } from "../../lib/services/api";

// Set revalidation time for ISR
export const revalidate = 3600; // Revalidate every hour

// Function to fetch individual guide data
async function getGuideData(guideId) {
  try {
    const response = await autoguidesAPI.getBySlug(guideId);
    
    if (response && response.success && response.autoguide) {
      return {
        success: true,
        guide: response.autoguide
      };
    }
    
    return { success: false, guide: null };
  } catch (error) {
    console.error('Error fetching guide data:', error);
    return { success: false, guide: null };
  }
}

// Function to fetch related guides
async function getRelatedGuides(currentGuideId, type = '', limit = 3) {
  try {
    const response = await autoguidesAPI.getAll(1, limit * 2, type); // Get more to filter out current
    
    if (response && response.success && response.autoguides) {
      // Filter out current guide and return only the requested number
      const relatedGuides = response.autoguides
        .filter(guide => guide.id !== currentGuideId && guide._id !== currentGuideId)
        .slice(0, limit);
      
      return relatedGuides;
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching related guides:', error);
    return [];
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const guideId = params.guideId;
  
  if (!guideId) {
    return {
      title: 'Guide Not Found | Big Boy Toyz',
      description: 'The guide you are looking for could not be found.'
    };
  }

  const result = await getGuideData(guideId);
  
  if (!result.success || !result.guide) {
    return {
      title: 'Guide Not Found | Big Boy Toyz',
      description: 'The guide you are looking for could not be found.'
    };
  }

  const guide = result.guide;
  
  return {
    title: guide.metaTitle || guide.title || 'Auto Guide | Big Boy Toyz',
    description: guide.metaDescription || guide.description || 'Read expert automotive guides from Big Boy Toyz.',
    keywords: guide.metaKeywords || 'auto guide, car advice, Big Boy Toyz, automotive tips',
    openGraph: {
      title: guide.title || 'Auto Guide | Big Boy Toyz',
      description: guide.description || 'Read expert automotive guides from Big Boy Toyz.',
      type: 'article',
      images: guide.thumbnail ? [{ url: guide.thumbnail }] : []
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title || 'Auto Guide | Big Boy Toyz',
      description: guide.description || 'Read expert automotive guides from Big Boy Toyz.',
      images: guide.thumbnail ? [guide.thumbnail] : []
    }
  };
}

const GuideDetail = async ({ params }) => {
  const guideId = params.guideId;
  
  if (!guideId) {
    notFound();
  }

  const result = await getGuideData(guideId);
  
  if (!result.success || !result.guide) {
    notFound();
  }

  const guide = result.guide;
  
  // Fetch related guides
  const relatedGuides = await getRelatedGuides(guideId, guide.type);

  console.log('Guide detail page loaded:', {
    guideId,
    title: guide.title,
    hasRelated: relatedGuides.length > 0
  });

  return (
    <>
      <BannerSection guideData={guide} />
      <GuideContent guideData={guide} />
      <RelatedBlogs
        sectionTitle="Other Related <b>Auto Guide</b>"
        data={relatedGuides}
        sectionBg="#F4F4F1"
        cardBg="#ffffff"
        isGuides={true}
      />
      <WorkshopSection />
      <AboutUs />
    </>
  );
};

export default GuideDetail;
