import React from 'react';
import { notFound } from 'next/navigation';
import { brandsAPI } from '../lib/services/api';
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

async function getBrandModelCityData(brandName, modelName, cityName) {
  try {
    // Get the specific brand-model-city data
    const response = await brandsAPI.getBrandModelInCity(brandName, modelName, cityName);
    
    if (!response || !response.success) {
      return null;
    }
    
    // Also get the complete brand data for models and cities
    let brandWithModelsAndCities = null;
    try {
      const brandResult = await brandsAPI.getBrand(brandName);
      if (brandResult && brandResult.success) {
        brandWithModelsAndCities = brandResult;
      }
    } catch (brandError) {
      console.error('Error fetching complete brand data:', brandError);
    }
    
    // Merge the data
    return {
      ...response,
      brand: {
        ...response.brand,
        models: brandWithModelsAndCities?.models || response.brand?.models || [],
        availableCities: brandWithModelsAndCities?.cities || response.brand?.availableCities || []
      }
    };
  } catch (error) {
    console.error('Error fetching brand model city data:', error);
    return null;
  }
}

// Generate metadata for the page
export async function generateMetadata({ searchParams }) {
  const brandName = searchParams.brandName;
  const modelName = searchParams.modelName;
  const cityName = searchParams.cityName;
  
  if (!brandName || !modelName || !cityName) {
    return {
      title: 'Page Not Found | Big Boy Toyz',
      description: 'The page you are looking for could not be found.'
    };
  }

  const result = await getBrandModelCityData(brandName, modelName, cityName);
  
  if (!result || !result.success) {
    return {
      title: 'Model Not Found | Big Boy Toyz',
      description: 'The model you are looking for could not be found.'
    };
  }

  // Use city-specific metadata if available, otherwise fallback to model metadata
  return {
    title: result.city?.metatitle || `Used ${result.brand.bname} ${result.model.modelname} Cars for Sale | Big Boy Toyz`,
    description: result.city?.metadesc || `Buy used ${result.brand.bname} ${result.model.modelname} cars from Big Boy Toyz - India's trusted luxury car dealership. Wide selection of pre-owned ${result.brand.bname} ${result.model.modelname} vehicles with warranty.`,
    keywords: result.city?.metakeyword || `${result.brand.bname}, ${result.model.modelname}, used ${result.brand.bname} ${result.model.modelname} cars, pre-owned ${result.brand.bname}, luxury cars, Big Boy Toyz`,
    openGraph: {
      title: result.city?.metatitle || `Used ${result.brand.bname} ${result.model.modelname} Cars | Big Boy Toyz`,
      description: result.city?.metadesc || `Buy used ${result.brand.bname} ${result.model.modelname} cars from Big Boy Toyz - India's trusted luxury car dealership.`,
      images: result.brand.bicon ? [{ url: result.brand.bicon }] : []
    }
  };
}

const BrandModelCityPage = async ({ searchParams }) => {
  const brandName = searchParams.brandName;
  const modelName = searchParams.modelName;
  const cityName = searchParams.cityName;

  if (!brandName || !modelName || !cityName) {
    notFound();
  }

  const result = await getBrandModelCityData(brandName, modelName, cityName);
  
  if (!result || !result.success) {
    notFound();
  }

  const { brand, model, city, products, totalProducts } = result;

  // Enhanced brand data for brand-model-city specific content
  const enhancedBrandData = {
    ...brand,
    name: brand.bname, // Map bname to name for component compatibility
    url: brand.posturl || brandName, // Map posturl to url for component compatibility
    description: city?.modeldesc,
    shortDescription: city?.modelsdesc,
    modelName: model.modelname,
    modelData: model,
    cityData: city,
    cityName: city?.city || cityName, // Add cityName for CarModels component
    isModelSpecific: true, // Flag to indicate this is a model-specific page
    isCitySpecific: true, // Flag to indicate this is a city-specific page
    models: brand.models || [],
    availableCities: brand.availableCities || [],
    currentCity: city?.city || cityName
  };

  return (
    <>
      <BannerSection brandData={enhancedBrandData} />
      <PageHeader 
        brandData={enhancedBrandData} 
        totalProducts={totalProducts}
        currentSort="modified"
        currentOrder="desc"
        modelContext={model.modelname}
        cityContext={city?.city}
      />
      <CarList 
        products={products}
        brandData={enhancedBrandData}
        isLoading={false}
        modelContext={model.modelname}
        cityContext={city?.city}
      />
      <CarModels brandData={enhancedBrandData} />
      <UspSection brandData={enhancedBrandData} />
      <GiftYourself brandData={enhancedBrandData} />
      <FaqSection faqHtml={city?.faq || ''} />
      <MostSearched brandData={enhancedBrandData} />
    </>
  );
};

export default BrandModelCityPage; 