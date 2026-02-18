import React from "react";
import GuideList from "../../Components/Guides/GuideList/GuideList";
import NewsletterSection from "../../Components/Guides/NewsletterSection/NewsletterSection";
import RecentUploads from "../../Components/CommonComponents/RecentUploads/RecentUploads";
import { autoguidesAPI } from "../lib/services/api";

// Set revalidation time for ISR
export const revalidate = 3600; // Revalidate every hour

// Function to get guides stats and types for the page
async function getGuidesData() {
  try {
    const [statsResponse, typesResponse] = await Promise.all([
      autoguidesAPI.getStats(),
      autoguidesAPI.getTypes()
    ]);
    
    const stats = statsResponse && statsResponse.success ? {
      totalGuides: statsResponse.stats?.totalGuides || 0,
      totalViews: statsResponse.stats?.totalViews || 0,
      totalTypes: statsResponse.stats?.totalTypes || 0
    } : {
      totalGuides: 0,
      totalViews: 0,
      totalTypes: 0
    };
    
    const types = typesResponse && typesResponse.success ? 
      (typesResponse.types || []) : [];
    
    return {
      stats,
      types
    };
  } catch (error) {
    console.error('Error fetching guides data:', error);
    return {
      stats: {
        totalGuides: 0,
        totalViews: 0,
        totalTypes: 0
      },
      types: []
    };
  }
}

// Generate metadata for the page
export async function generateMetadata() {
  return {
    title: 'Auto Guides | Big Boy Toyz - Expert Car Buying & Maintenance Guides',
    description: 'Read expert auto guides from Big Boy Toyz. Get professional advice on car buying, maintenance, luxury car care, and automotive insights from industry experts.',
    keywords: 'auto guides, car buying guide, car maintenance guide, luxury car care, automotive advice, Big Boy Toyz guides, car tips, vehicle maintenance, expert automotive advice',
    openGraph: {
      title: 'Auto Guides | Big Boy Toyz',
      description: 'Read expert auto guides from Big Boy Toyz. Get professional advice on car buying, maintenance, and luxury car care.',
      type: 'website',
      images: [
        {
          url: '/images/guides/guides-og-image.webp',
          width: 1200,
          height: 630,
          alt: 'Big Boy Toyz Auto Guides'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Auto Guides | Big Boy Toyz',
      description: 'Read expert auto guides from Big Boy Toyz. Get professional advice on car buying and maintenance.',
      images: ['/images/guides/guides-og-image.webp']
    }
  };
}

// Custom page header for guides
const GuidesHeader = ({ stats, types }) => {
  return (
    <section className="bg-black text-white py-20 lg:py-40 xl:py-48 2xl:py-56 3xl:py-72">
      <div className="max-1920">
        <div className="container text-center">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-light mb-8 tracking-tight">
            Auto <span className="font-medium">Guides</span>
          </h1>
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Expert insights, tips, and guides from Big Boy Toyz professionals. 
            Everything you need to know about luxury cars, maintenance, and automotive excellence.
          </p>
          
          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                {stats.totalGuides}+
              </div>
              <div className="text-sm lg:text-base text-gray-400 uppercase tracking-wider">
                Expert Guides
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                {stats.totalViews}+
              </div>
              <div className="text-sm lg:text-base text-gray-400 uppercase tracking-wider">
                Total Views
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                {types.length}
              </div>
              <div className="text-sm lg:text-base text-gray-400 uppercase tracking-wider">
                Categories
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Guides = async () => {
  // Fetch guides data for the header
  const guidesData = await getGuidesData();
  
  console.log('Guides page loaded with data:', {
    stats: guidesData.stats,
    typesCount: guidesData.types.length
  });
  
  return (
    <>
      <GuidesHeader 
        stats={guidesData.stats}
        types={guidesData.types}
      />
      <GuideList />
      {/* <RecentUploads /> */}
      <NewsletterSection />
    </>
  );
};

export default Guides;
