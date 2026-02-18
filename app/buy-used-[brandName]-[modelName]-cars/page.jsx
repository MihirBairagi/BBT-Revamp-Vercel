import React from 'react';
import { notFound } from 'next/navigation';
import { brandsAPI, productsAPI } from '../lib/services/api';
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

// Function to get brand model data
async function getBrandModelData(brandName, modelName) {
  try {
    console.log(`Fetching data for brand: ${brandName}, model: ${modelName}`);
    
    // First get all brands to find the brand by name/slug
    const brandsResponse = await brandsAPI.getAllWithModels();
    
    if (!brandsResponse || !brandsResponse.success || !brandsResponse.brands) {
      console.error('Failed to fetch brands data');
      return null;
    }
    
    // Find the brand by name (case-insensitive)
    const brand = brandsResponse.brands.find(b => 
      b.bname?.toLowerCase().replace(/\s+/g, '-') === brandName.toLowerCase() ||
      b.name?.toLowerCase().replace(/\s+/g, '-') === brandName.toLowerCase() ||
      b.bname?.toLowerCase() === brandName.toLowerCase() ||
      b.name?.toLowerCase() === brandName.toLowerCase()
    );
    
    if (!brand) {
      console.error(`Brand not found: ${brandName}`);
      return null;
    }
    
    console.log(`Found brand: ${brand.bname || brand.name}`);
    console.log(`Available models:`, brand.models?.map(m => ({ 
      id: m.id || m.id_, 
      name: m.modelname || m.name, 
      posturl: m.posturl 
    })) || []);
    
    // Find the model within the brand with flexible matching
    const normalizeModelName = (name) => name?.toLowerCase().replace(/[\s\-_]+/g, '').replace(/[^a-z0-9]/g, '');
    const normalizedSearchModel = normalizeModelName(modelName);
    
    const model = brand.models?.find(m => {
      const modelname = m.modelname || m.name || '';
      const posturl = m.posturl || '';
      
      // Try multiple matching strategies
      return (
        // Exact match (case-insensitive)
        modelname.toLowerCase() === modelName.toLowerCase() ||
        posturl.toLowerCase() === modelName.toLowerCase() ||
        
        // Hyphen/space variations
        modelname.toLowerCase().replace(/\s+/g, '-') === modelName.toLowerCase() ||
        modelname.toLowerCase().replace(/\-+/g, ' ') === modelName.toLowerCase() ||
        
        // Normalized comparison (remove all spaces, hyphens, special chars)
        normalizeModelName(modelname) === normalizedSearchModel ||
        normalizeModelName(posturl) === normalizedSearchModel ||
        
        // Partial match for common patterns
        modelname.toLowerCase().includes(modelName.toLowerCase()) ||
        modelName.toLowerCase().includes(modelname.toLowerCase())
      );
    });
    
    if (!model) {
      console.error(`Model not found: ${modelName} for brand: ${brandName}`);
      console.log('Available model names:', brand.models?.map(m => m.modelname || m.name) || []);
      
      // For now, let's create a fallback using the first available model or a generic one
      const fallbackModel = brand.models?.[0] || {
        id: 'fallback',
        modelname: modelName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        posturl: modelName
      };
      
      console.log('Using fallback model:', fallbackModel);
      return {
        success: true,
        brand,
        model: fallbackModel,
        products: [],
        totalProducts: 0
      };
    }
    
    console.log(`Found model: ${model.modelname || model.name}`);
    
    // Get products for this brand and model
    let products = [];
    try {
      const productsResponse = await productsAPI.getCollection(
        1, // page
        20, // limit
        'modified', // sort
        'desc', // order
        false, // featured
        '', // category
        brand.id || brand.id_, // brandId
        false // random
      );
      
      if (productsResponse && productsResponse.success && productsResponse.data) {
        // Filter products by model if we have model information
        let filteredProducts = productsResponse.data;
        if (model.id || model.id_) {
          filteredProducts = productsResponse.data.filter(product => 
            product.model === (model.id || model.id_) ||
            product.modelId === (model.id || model.id_) ||
            product.model?.toLowerCase().includes(modelName.toLowerCase()) ||
            product.modelname?.toLowerCase().includes(modelName.toLowerCase())
          );
        }
        
        // If no model-specific products found, use all brand products
        if (filteredProducts.length === 0) {
          console.log('No model-specific products found, using all brand products');
          filteredProducts = productsResponse.data;
        }
        
        // Enhance products with gallery images
        products = await fetchMultipleProductGalleries(filteredProducts);
      }
    } catch (productsError) {
      console.error('Error fetching brand model products:', productsError);
    }
    
    // Get city data for the brand
    let cities = [];
    try {
      const brandResult = await brandsAPI.getBrand(brandName);
      if (brandResult && brandResult.success && brandResult.cities) {
        cities = brandResult.cities;
      }
    } catch (cityError) {
      console.error('Error fetching city data:', cityError);
    }

    return {
      success: true,
      brand,
      model,
      products,
      totalProducts: products.length,
      cities
    };
  } catch (error) {
    console.error('Error fetching brand model data:', error);
    return null;
  }
}

// Generate metadata for the page
export async function generateMetadata({ searchParams }) {
  const brandName = searchParams.brandName;
  const modelName = searchParams.modelName;
  
  if (!brandName || !modelName) {
    return {
      title: 'Page Not Found | Big Boy Toyz',
      description: 'The page you are looking for could not be found.'
    };
  }

  const result = await getBrandModelData(brandName, modelName);
  
  if (!result || !result.success) {
    return {
      title: 'Model Not Found | Big Boy Toyz',
      description: 'The model you are looking for could not be found.'
    };
  }

  const { brand, model } = result;
  const brandDisplayName = brand.bname || brand.name;
  const modelDisplayName = model.modelname || model.name;
  
  return {
    title: `Used ${brandDisplayName} ${modelDisplayName} Cars for Sale | Big Boy Toyz`,
    description: `Buy used ${brandDisplayName} ${modelDisplayName} cars from Big Boy Toyz - India's trusted luxury car dealership. Wide selection of pre-owned ${brandDisplayName} ${modelDisplayName} vehicles with warranty.`,
    keywords: `${brandDisplayName}, ${modelDisplayName}, used ${brandDisplayName} ${modelDisplayName} cars, pre-owned ${brandDisplayName}, luxury cars, Big Boy Toyz`,
    openGraph: {
      title: `Used ${brandDisplayName} ${modelDisplayName} Cars | Big Boy Toyz`,
      description: `Buy used ${brandDisplayName} ${modelDisplayName} cars from Big Boy Toyz - India's trusted luxury car dealership.`,
      images: brand.bicon ? [{ url: brand.bicon }] : []
    }
  };
}

const BrandModelPage = async ({ searchParams }) => {
  const brandName = searchParams.brandName;
  const modelName = searchParams.modelName;
  
  if (!brandName || !modelName) {
    notFound();
  }

  const result = await getBrandModelData(brandName, modelName);
  
  if (!result || !result.success) {
    notFound();
  }

  const { brand, model, products, totalProducts, cities } = result;

  // Enhanced brand data for brand-model specific content
  const enhancedBrandData = {
    ...brand,
    name: brand.bname, // Map bname to name for component compatibility
    url: brand.posturl || brandName, // Map posturl to url for component compatibility
    description: brand.bdesc || `Discover premium used ${brand.bname} ${model.modelname} cars`,
    shortDescription: brand.bsdesc || `Premium pre-owned ${brand.bname} ${model.modelname} vehicles`,
    modelName: model.modelname,
    modelData: model,
    isModelSpecific: true, // Flag to indicate this is a model-specific page
    models: brand.models || [],
    availableCities: cities || []
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
      />
      <CarList 
        products={products}
        brandData={enhancedBrandData}
        isLoading={false}
        modelContext={model.modelname}
      />
      <CarModels brandData={enhancedBrandData} />
      <UspSection brandData={enhancedBrandData} />
      <GiftYourself brandData={enhancedBrandData} />
      <FaqSection faqHtml={model?.faq || ''} />
      <MostSearched brandData={enhancedBrandData} />
    </>
  );
};

export default BrandModelPage; 