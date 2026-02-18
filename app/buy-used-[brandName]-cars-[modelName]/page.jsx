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

// Function to get brand model data
async function getBrandModelData(brandName, modelName) {
  try {
    // First get all brands to find the brand by name/slug
    const brandsResponse = await brandsAPI.getAllWithModels();
    
    if (!brandsResponse || !brandsResponse.success || !brandsResponse.brands) {
      console.error('Failed to fetch brands data');
      return null;
    }
    
    // Find the brand by name or posturl (case-insensitive); "maybach" matches posturl "mercedes-maybach"
    const brandSlug = brandName.toLowerCase();
    const brand = brandsResponse.brands.find(b => {
      const p = b.posturl?.toLowerCase() || '';
      const bnameSlug = (b.bname || b.name || '').toLowerCase().replace(/\s+/g, '-');
      return (
        p === brandSlug ||
        p.endsWith('-' + brandSlug) ||
        bnameSlug === brandSlug ||
        (b.bname || '').toLowerCase() === brandSlug ||
        (b.name || '').toLowerCase() === brandSlug
      );
    });
    
    if (!brand) {
      console.error(`Brand not found: ${brandName}`);
      return null;
    }
    
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
    
    // Get products for this brand (city endpoint may 404 if model not in that city — use aggregated fallback)
    let bModelCityData = await getBrandModelCityData(brandName, modelName, "mumbai");
    const bModelCityProducts = bModelCityData?.products ?? null;
    let products = bModelCityProducts ?? [];
    let isExactModelFound = !!model;
    
    try {
      // Prefer id_ for brandId; gather all pages to avoid missing many model cars
      const brandIdCandidates = [brand.id_ || brand.id, brand.id || brand.id_].filter(Boolean);
      let chosenBrandId = brandIdCandidates[0] || '';
      // If no candidate, resolve canonical brand id via slug
      if (!chosenBrandId) {
        try {
          const canonicalBrand = await brandsAPI.getBrand(brand.posturl || brandName);
          chosenBrandId = canonicalBrand?.brand?.id_ || canonicalBrand?.brand?.id || '';
        } catch (_) {}
      }

      // Aggregate brand products across pages (cap to prevent runaway)
      const aggregatedBrandProducts = [];
      if (chosenBrandId) {
        const pageSize = 200; // large page size to reduce requests
        let currentPage = 1;
        let totalPages = 1;
        const maxPages = 15; // hard cap
        while (currentPage <= totalPages && currentPage <= maxPages) {
          const res = await productsAPI.getCollection(
            currentPage,
            pageSize,
            'modified',
            'desc',
            false,
            '',
            chosenBrandId,
            false
          );
          if (!res || !res.success || !Array.isArray(res.data)) break;
          aggregatedBrandProducts.push(...res.data);
          const totalCount = res.totalCount || res.total || 0;
          if (totalCount && pageSize > 0) {
            totalPages = Math.max(totalPages, Math.ceil(totalCount / pageSize));
          } else if (res.data.length < pageSize) {
            // No more pages
            break;
          }
          currentPage += 1;
        }
      }
      
      const sourceProducts = aggregatedBrandProducts.length > 0 ? aggregatedBrandProducts : (productsResponse?.data || []);
      if (Array.isArray(sourceProducts)) {
                 // Filter products by model - works for all brands and models
         const filteredProducts = sourceProducts.filter(product => {
           const productTitle = product.proname || product.name || '';
           
           if (!model) {
             // If no exact model found, try broader matching
             const urlModelName = modelName.toLowerCase();
             const brandSlug = (brand.posturl || brand.bname || brand.name || '')
               .toLowerCase()
               .replace(/\s+/g, '-');
             let modelPart = urlModelName;
             if (brandSlug && modelPart.startsWith(`${brandSlug}-`)) {
               modelPart = modelPart.slice(brandSlug.length + 1);
             }
             const cleanModelName = modelPart.replace(/-/g, ' ');
             const titleLower = productTitle.toLowerCase();
             if (titleLower.includes(cleanModelName)) {
               return true;
             }
             // Handle Mercedes-style Class models (e.g., "s-class", "e-class", "c-class")
             if (/^[a-z]-class$/.test(modelPart)) {
               const classLetter = modelPart[0];
               const patterns = [
                 new RegExp(`\\b${classLetter}[-\\s]class\\b`),
                 new RegExp(`\\b${classLetter}[-\\s]?\\d`), // S350, S 350
                 new RegExp(`\\bmaybach[-\\s]+${classLetter}[-\\s]?\\d`) // Maybach S 560
               ];
               for (const p of patterns) {
                 if (p.test(titleLower)) {
                   return true;
                 }
               }
             }
             return false;
           }
           
           const modelId = model.id || model.id_;
           const modelNameToMatch = (model.modelname || '').toLowerCase();
           const titleLower = productTitle.toLowerCase();
           
           // 1. Exact model ID match (most reliable)
           if (product.bmodelid === modelId) {
             return true;
           }
           
           // 2. Model name in product title
           if (modelNameToMatch && titleLower.includes(modelNameToMatch)) {
             return true;
           }
           
           // 3. URL model name variations
           const urlModelName = modelName.toLowerCase();
           
           // Remove brand prefix only when slug starts with brand slug
           const brandSlug2 = (brand.posturl || brand.bname || brand.name || '') 
             .toLowerCase()
             .replace(/\s+/g, '-');
           let modelWithoutBrand = urlModelName;
           if (brandSlug2 && modelWithoutBrand.startsWith(`${brandSlug2}-`)) {
             modelWithoutBrand = modelWithoutBrand.slice(brandSlug2.length + 1);
           }
           
           // Try different variations
           const modelVariations = [
             modelWithoutBrand,
             modelWithoutBrand.replace(/-/g, ' '),
             modelWithoutBrand.replace(/-/g, ''),
             modelWithoutBrand.replace(/\s+/g, '-')
           ];
           
           for (const variation of modelVariations) {
             if (variation && titleLower.includes(variation)) {
               return true;
             }
           }
           
           // Handle Mercedes-style Class models (e.g., "s-class", "e-class", "c-class")
           if (/^[a-z]-class$/.test(modelWithoutBrand)) {
             const classLetter = modelWithoutBrand[0];
             const patterns = [
               new RegExp(`\\b${classLetter}[-\\s]class\\b`),
               new RegExp(`\\b${classLetter}[-\\s]?\\d`),
               new RegExp(`\\bmaybach[-\\s]+${classLetter}[-\\s]?\\d`)
             ];
             for (const p of patterns) {
               if (p.test(titleLower)) {
                 return true;
               }
             }
           }
           
           // 4. Handle series/numeric model patterns (e.g., "3-series" matches "320", "330")
           if (modelWithoutBrand.includes('series') || modelWithoutBrand.includes('-series')) {
             const seriesNumber = modelWithoutBrand.match(/(\d+)/)?.[1];
             if (seriesNumber) {
               // Look for models that start with the series number
               const seriesPattern = new RegExp(`\\b${seriesNumber}\\d{1,2}\\b`, 'i');
               if (seriesPattern.test(titleLower)) {
                 return true;
               }
               
               // Also check for "X series" format
               if (titleLower.includes(`${seriesNumber} series`)) {
                 return true;
               }
             }
           }
           
           // 5. Handle specific model patterns (remove common suffixes/prefixes)
           const cleanTitle = titleLower.replace(/\b(used|pre-owned|certified)\b/g, '').trim();
           const cleanModelName2 = modelNameToMatch.replace(/\b(series|model|edition)\b/g, '').trim();
           
           if (cleanModelName2 && cleanTitle.includes(cleanModelName2)) {
             return true;
           }
           
           return false;
         });
         
         // Only use filtered products if we have matches, otherwise return empty array
         // This ensures we don't show random cars from the brand
        // Deduplicate by product id if needed
        const deduped = [];
        const seen = new Set();
        for (const p of filteredProducts) {
          const pid = p.id || p.id_ || p.mongodb_id || p._id || p.pid;
          if (!pid || !seen.has(pid)) {
            if (pid) seen.add(pid);
            deduped.push(p);
          }
        }
        products = await fetchMultipleProductGalleries(deduped);
          
          console.log(`Model filtering for ${brandName} ${modelName}:`, {
          totalBrandProducts: sourceProducts.length,
          filteredProducts: deduped.length,
          isExactModelFound,
          modelSearchTerm: modelName
          });
       }
    } catch (productsError) {
      console.error('Error fetching brand model products:', productsError);
    }
    
    // Create model object (either found or fallback)
    const finalModel = model || {
      id: 'fallback',
      modelname: modelName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      posturl: modelName
    };
    
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

    const finalProducts = Array.isArray(products) ? products : (bModelCityProducts || []);
    const totalCount = finalProducts.length;

    return {
      success: true,
      brand,
      model: finalModel,
      products: finalProducts,
      totalProducts: totalCount,
      isExactModelFound,
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
    description: model.modeldesc || `Discover premium used ${brand.bname} ${model.modelname} cars`,
    shortDescription: model.modelsdesc || `Premium pre-owned ${brand.bname} ${model.modelname} vehicles`,
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