import FloatingButtons from "../Components/FloatingButtons/FloatingButtons";
import BannerSection from "../Components/Homepage/BannerSection/BannerSection";
import NewInclusion from "../Components/Homepage/NewInclusion/NewInclusion";
import OtherServices from "../Components/Homepage/OtherServices/OtherServices";
import OurShowrooms from "../Components/CommonComponents/OurShowrooms/OurShowrooms";
import SellYourCar from "../Components/Homepage/SellYourCar/SellYourCar";
import ExploreSection from "../Components/Homepage/ExploreSection/ExploreSection";
import BbtFeatured from "../Components/Homepage/BbtFeatured/BbtFeatured";
import { productsAPI } from "./lib/services/api";
import { productsService } from "./lib/services/products";
import { fetchMultipleProductGalleries } from "./lib/services/gallery";

// Force dynamic rendering to ensure fresh randomization on every page load
export const dynamic = 'force-dynamic';

// Set revalidation period for ISR (Incremental Static Regeneration)
// Reduced to 1 minute for more frequent updates to ensure randomization of latest added products
export const revalidate = 60;

// Function to fetch featured products for the homepage
async function getFeaturedProducts() {
  try {
    // Fetch featured products from the API
    const response = await productsAPI.getFeatured();
    
    if (response && response.products) {
      // Map products to our frontend format and take the first 6
      const mappedProducts = response.products
        .slice(0, 6)
        .map(product => productsService.mapProductData(product));
      
      // Enhance with gallery images
      const enhancedProducts = await fetchMultipleProductGalleries(mappedProducts);
      
      return {
        success: true,
        data: enhancedProducts
      };
    }
    
    return { success: false, data: [] };
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return { success: false, data: [] };
  }
}

// Function to fetch latest added products for New Inclusion
async function getRandomRecentProducts() {
  try {
    // Fetch latest added products (randomization will happen on client-side)
    const response = await productsAPI.getCollection(1, 12, 'added', 'desc', false, '', '', false, false);
    
    if (response && response.data) {
      // Map products to our frontend format
      const mappedProducts = response.data
        .map(product => productsService.mapProductData(product))
        .filter((p) => p.stock != "0");
      
      // Enhance with gallery images
      const enhancedProducts = await fetchMultipleProductGalleries(mappedProducts);
      
      return {
        success: true,
        data: enhancedProducts
      };
    }
    
    return { success: false, data: [] };
  } catch (error) {
    console.error('Error fetching latest added products:', error);
    return { success: false, data: [] };
  }
}

// Function to fetch latest added products for Recently Added section
async function getRandomRecentlyAdded() {
  try {
    // Fetch latest added products (randomization will happen on client-side)
    const response = await productsAPI.getCollection(1, 16, 'added', 'desc', false, '', '', false, false);
    
    if (response && response.data) {
      // Map products to our frontend format
      const mappedProducts = response.data
        .map(product => productsService.mapProductData(product));
      
      // Enhance with gallery images
      const enhancedProducts = await fetchMultipleProductGalleries(mappedProducts);
      
      return {
        success: true,
        data: enhancedProducts
      };
    }
    
    return { success: false, data: [] };
  } catch (error) {
    console.error('Error fetching recently added products:', error);
    return { success: false, data: [] };
  }
}

export default async function Home() {
  // Fetch data for the homepage with all random products
  const newInclusionProducts = await getRandomRecentProducts();
  
  // Debug logging
  // console.log('Homepage data fetched:', {
  //   featured: featuredProducts.success ? `${featuredProducts.data?.length} products` : 'Failed',
  //   newInclusion: newInclusionProducts.success ? `${newInclusionProducts.data?.length} products` : 'Failed',
  //   recentlyAdded: recentlyAddedProducts.success ? `${recentlyAddedProducts.data?.length} products` : 'Failed'
  // });
  
  return (
    <>
      <FloatingButtons />
      <BannerSection />
      <NewInclusion recentProducts={newInclusionProducts.data || []} />
      <OtherServices />
      <OurShowrooms />
      <SellYourCar />
      <ExploreSection />
      <BbtFeatured />
    </>
  );
}
