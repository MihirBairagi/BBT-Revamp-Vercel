import React from 'react';
import { notFound } from 'next/navigation';
import { brandsAPI } from '../lib/services/api';
import { fetchMultipleProductGalleries } from '../lib/services/gallery';
import BannerSection from '../../Components/BrandPage/BannerSection/BannerSection';
import PageHeader from '../../Components/BrandPage/PageHeader/PageHeader';
import CarList from '../../Components/BrandPage/CarList/CarList';
import CarModels from '../../Components/BrandPage/CarModels/CarModels';
import UspSection from '../../Components/BrandPage/UspSection/UspSection';
import GiftYourself from '../../Components/BrandPage/GiftYourself/GiftYourself';
import FaqSection from '../../Components/BrandPage/FaqSection/FaqSection';
import MostSearched from '../../Components/BrandPage/MostSearched/MostSearched';

// Set revalidation time for ISR
export const revalidate = 3600; // Revalidate every hour

// Function to get brand data
async function getBrandData(brandName) {
  try {
    const result = await brandsAPI.getBrand(brandName);
    
    if (!result || !result.success) {
      return null;
    }

    // Enhance products with gallery images
    const enhancedProducts = await fetchMultipleProductGalleries(result.products || []);
    
    return {
      ...result,
      products: enhancedProducts
    };
  } catch (error) {
    console.error('Error fetching brand data:', error);
    return null;
  }
}

// Generate metadata for the page
export async function generateMetadata({ searchParams }) {
  const brandName = searchParams.brandName;
  
  if (!brandName) {
    return {
      title: 'Page Not Found | Big Boy Toyz',
      description: 'The page you are looking for could not be found.'
    };
  }

  const result = await getBrandData(brandName);
  
  if (!result || !result.success) {
    return {
      title: 'Brand Not Found | Big Boy Toyz',
      description: 'The brand you are looking for could not be found.'
    };
  }

  const { brand } = result;
  
  return {
    title: `Used ${brand.bname} Cars for Sale | Big Boy Toyz`,
    description: `Buy used ${brand.bname} cars from Big Boy Toyz - India's trusted luxury car dealership. Wide selection of pre-owned ${brand.bname} vehicles with warranty.`,
    keywords: `${brand.bname}, used ${brand.bname} cars, pre-owned ${brand.bname}, luxury cars, Big Boy Toyz, ${brand.bname} for sale`,
    openGraph: {
      title: `Used ${brand.bname} Cars | Big Boy Toyz`,
      description: `Buy used ${brand.bname} cars from Big Boy Toyz - India's trusted luxury car dealership.`,
      images: brand.bicon ? [{ url: brand.bicon }] : []
    }
  };
}

const BrandPage = async ({ searchParams }) => {
  const brandName = searchParams.brandName;
  
  if (!brandName) {
    notFound();
  }

  const result = await getBrandData(brandName);
  
  if (!result || !result.success) {
    notFound();
  }

  const { brand, products, totalProducts, cities } = result;

  // Enhanced brand data for generic brand page
  const enhancedBrandData = {
    ...brand,
    name: brand.bname, // Map bname to name for component compatibility
    url: brand.posturl || brandName, // Map posturl to url for component compatibility
    description: brand.bdesc || `Discover premium used ${brand.bname} cars`,
    shortDescription: brand.bsdesc || `Premium pre-owned ${brand.bname} vehicles`,
    isGenericPage: true, // Flag to indicate this is a generic brand page
    availableCities: cities || [],
    models: result.models || [] // Include models from API response
  };

  return (
    <>
      <BannerSection brandData={enhancedBrandData} />
      <PageHeader 
        brandData={enhancedBrandData} 
        totalProducts={totalProducts}
        currentSort="modified"
        currentOrder="desc"
        isGenericPage={true}
      />
      <CarList 
        products={products}
        brandData={enhancedBrandData}
        isLoading={false}
        isGenericPage={true}
      />
      <CarModels brandData={enhancedBrandData} />
      <UspSection brandData={enhancedBrandData} />
      {/* <GiftYourself brandData={enhancedBrandData} /> */}
      <FaqSection faqHtml={brand?.faq || ''} />
      <MostSearched brandData={enhancedBrandData} />
    </>
  );
};

export default BrandPage; 