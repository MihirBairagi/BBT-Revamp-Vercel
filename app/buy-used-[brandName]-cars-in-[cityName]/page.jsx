import React from 'react';
import { notFound } from 'next/navigation';
import { brandsAPI, productsAPI } from '../lib/services/api';
import { isProductSoldOut } from '../lib/utils/productUtils';
import BannerSection from '../../Components/BrandPage/BannerSection/BannerSection';
import PageHeader from '../../Components/BrandPage/PageHeader/PageHeader';
import CarList from '../../Components/BrandPage/CarList/CarList';
import CarModels from '../../Components/BrandPage/CarModels/CarModels';
import UspSection from '../../Components/BrandPage/UspSection/UspSection';
import GiftYourself from '../../Components/BrandPage/GiftYourself/GiftYourself';
import FaqSection from '../../Components/BrandPage/FaqSection/FaqSection';
import MostSearched from '../../Components/BrandPage/MostSearched/MostSearched';
import { fetchMultipleProductGalleries } from '../lib/services/gallery';

// Set revalidation time for ISR
export const revalidate = 3600; // Revalidate every hour

// Function to get brand city data
async function getBrandCityData(brandName, cityName) {
  try {
    console.log(`=== Fetching brand city data for: ${brandName}, ${cityName} ===`);
    
    // Normalize city name for API call (replace dashes with spaces for API)
    const normalizedCityName = cityName.replace(/-/g, ' ');
    console.log(`Normalized city name for API: "${normalizedCityName}"`);
    
    // Try the API endpoint first
    try {
      console.log(`Calling API: /brands/${brandName}/city/${normalizedCityName}`);
      const response = await brandsAPI.getBrandInCity(brandName, normalizedCityName);
      console.log('🔥 API Response:', JSON.stringify(response, null, 2));
      
      if (response && response.success) {
        console.log('✅ API call successful! Using API data.');
        
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
        const finalResult = {
          ...response,
          brand: {
            ...response.brand,
            models: brandWithModelsAndCities?.models || response.models || [],
            availableCities: brandWithModelsAndCities?.cities || []
          }
        };
        
        console.log('🎯 Final API result structure:', {
          hasCity: !!finalResult.city,
          cityFields: finalResult.city ? Object.keys(finalResult.city) : [],
          hasBrand: !!finalResult.brand,
          hasProducts: !!finalResult.products,
          totalProducts: finalResult.totalProducts
        });
        
        return finalResult;
      } else {
        console.log('❌ API call failed or returned no success flag');
      }
    } catch (apiError) {
      console.error('🚨 API endpoint failed:', apiError);
    }
    
    // Fallback to manual approach
    console.log('🔄 Falling back to manual brand-city data fetching');
    
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
      b.name?.toLowerCase() === brandName.toLowerCase() ||
      b.posturl?.toLowerCase() === brandName.toLowerCase()
    );
    
    if (!brand) {
      console.error(`Brand not found: ${brandName}`);
      return null;
    }
    
    console.log(`✅ Found brand: ${brand.bname} (posturl: ${brand.posturl})`);
    
    // Get brand details to get cities
    let cities = [];
    try {
      const brandResult = await brandsAPI.getBrand(brandName);
      if (brandResult && brandResult.success && brandResult.cities) {
        cities = brandResult.cities;
        console.log(`📍 Found ${cities.length} cities for brand:`, cities.map(c => c.city));
      }
    } catch (cityError) {
      console.error('Error fetching city data:', cityError);
    }
    
    // Find matching city
    const normalizedSearchCity = cityName.replace(/-/g, ' ').toLowerCase();
    console.log(`🔍 Looking for city: "${normalizedSearchCity}"`);
    
    const matchingCity = cities.find(c => {
      const cityLower = c.city?.toLowerCase();
      const cityNormalized = cityLower?.replace(/\s+/g, '-');
      const isMatch = cityLower === normalizedSearchCity || cityNormalized === cityName.toLowerCase();
      console.log(`  Checking "${c.city}" (${cityLower}) -> ${isMatch}`);
      return isMatch;
    });
    
    if (matchingCity) {
      console.log(`✅ Found matching city data:`, matchingCity);
    } else {
      console.log(`❌ No matching city found, creating fallback`);
    }
    
    // Get products for this brand
    let products = [];
    
    try {
      const productsResponse = await productsAPI.getCollection(
        1, // page
        100, // limit
        'modified', // sort
        'desc', // order
        false, // featured
        '', // category
        brand.id || brand.id_, // brandId
        false // random
      );
      
      if (productsResponse && productsResponse.success && productsResponse.data) {
        products = productsResponse.data;
        console.log(`📦 Found ${products.length} products for brand`);
      }
    } catch (productsError) {
      console.error('Error fetching brand products:', productsError);
    }
    
    const fallbackResult = {
      success: true,
      brand,
      city: matchingCity || {
        id: 'fallback',
        city: cityName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        bcity: cityName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        bdesc: `Explore our premium collection of used ${brand.bname} cars in ${cityName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}. Find the perfect luxury vehicle with Big Boy Toyz.`,
        bsdesc: `Premium used ${brand.bname} cars in ${cityName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`
      },
      products,
      totalProducts: products.length,
      models: brand.models || [],
      cities
    };
    
    console.log('🎯 Final fallback result structure:', {
      hasCity: !!fallbackResult.city,
      cityFields: fallbackResult.city ? Object.keys(fallbackResult.city) : [],
      hasBrand: !!fallbackResult.brand,
      hasProducts: !!fallbackResult.products,
      totalProducts: fallbackResult.totalProducts
    });
    
    return fallbackResult;
  } catch (error) {
    console.error('🚨 Error fetching brand city data:', error);
    return null;
  }
}

// Generate metadata for the page
export async function generateMetadata({ searchParams }) {
  const brandName = searchParams.brandName;
  const cityName = searchParams.cityName;
  
  if (!brandName || !cityName) {
    return {
      title: 'Page Not Found | Big Boy Toyz',
      description: 'The page you are looking for could not be found.'
    };
  }

  const result = await getBrandCityData(brandName, cityName);
  
  if (!result || !result.success) {
    return {
      title: 'Brand Not Found | Big Boy Toyz',
      description: 'The brand you are looking for could not be found.'
    };
  }

  const { brand, city } = result;
  const brandDisplayName = brand.bname || brand.name;
  const formattedCityName = city?.city || city?.bcity || cityName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Debug: Log metadata
  console.log('Metadata - city data:', { 
    metatitle: city?.metatitle, 
    metadesc: city?.metadesc, 
    metakeyword: city?.metakeyword 
  });
  
  // Use city-specific metadata if available, otherwise fallback to generic metadata
  return {
    title: city?.metatitle || `Used ${brandDisplayName} Cars in ${formattedCityName} | Big Boy Toyz`,
    description: city?.metadesc || `Buy used ${brandDisplayName} cars in ${formattedCityName} from Big Boy Toyz - India's trusted luxury car dealership. Wide selection of pre-owned ${brandDisplayName} vehicles in ${formattedCityName}.`,
    keywords: city?.metakeyword || `${brandDisplayName}, ${formattedCityName}, used ${brandDisplayName} cars, pre-owned ${brandDisplayName}, luxury cars, Big Boy Toyz`,
    openGraph: {
      title: city?.metatitle || `Used ${brandDisplayName} Cars in ${formattedCityName} | Big Boy Toyz`,
      description: city?.metadesc || `Buy used ${brandDisplayName} cars in ${formattedCityName} from Big Boy Toyz - India's trusted luxury car dealership.`,
      images: brand.bicon ? [{ url: brand.bicon }] : []
    }
  };
}

const BrandCityPage = async ({ searchParams }) => {
  const brandName = searchParams.brandName;
  const cityName = searchParams.cityName;
  
  if (!brandName || !cityName) {
    notFound();
  }

  const result = await getBrandCityData(brandName, cityName);
  
  if (!result || !result.success) {
    notFound();
  }

  const { brand, city, products, totalProducts, models, cities } = result;

  const toShowProducts = await fetchMultipleProductGalleries(products);

  // Ensure in-stock cars appear before out-of-stock
  const sortedProducts = Array.isArray(toShowProducts)
    ? [...toShowProducts].sort((a, b) => {
        const aSold = isProductSoldOut(a);
        const bSold = isProductSoldOut(b);
        if (aSold === bSold) return 0;
        return aSold ? 1 : -1;
      })
    : [];

  // Enhanced brand data for brand-city specific content
  // Debug: Log the city data structure
  console.log('🏙️ City data structure:', {
    hasCity: !!city,
    cityName: city?.city || city?.bcity,
    hasBdesc: !!city?.bdesc,
    hasBsdesc: !!city?.bsdesc,
    hasMetadata: !!(city?.metatitle || city?.metadesc)
  });

  const enhancedBrandData = {
    ...brand,
    name: brand.bname, // Map bname to name for component compatibility
    url: brand.posturl || brandName, // Map posturl to url for component compatibility
    description: city?.bdesc || city?.metadesc || brand?.bdesc,
    shortDescription: city?.bsdesc || city?.metadesc || brand?.bsdesc,
    cityData: city,
    cityName: city?.city || city?.bcity || cityName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    isCitySpecific: true, // Flag to indicate this is a city-specific page
    models: models || brand.models || [],
    availableCities: cities || brand.availableCities || [],
    currentCity: city?.city || city?.bcity || cityName
  };

  return (
    <>
      <BannerSection brandData={enhancedBrandData} />
      <PageHeader 
        brandData={enhancedBrandData} 
        totalProducts={totalProducts}
        currentSort="modified"
        currentOrder="desc"
        cityContext={city?.city || city?.bcity}
      />
      <CarList 
        products={sortedProducts}
        brandData={enhancedBrandData}
        isLoading={false}
        cityContext={city?.city || city?.bcity}
      />
      <CarModels brandData={enhancedBrandData} />
      <UspSection brandData={enhancedBrandData} />
      <GiftYourself brandData={enhancedBrandData} />
      <FaqSection faqHtml={city?.faq || ''} />
      <MostSearched brandData={enhancedBrandData} />
    </>
  );
};

export default BrandCityPage; 