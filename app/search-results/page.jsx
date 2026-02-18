import React from "react";
import { productsAPI } from "../lib/services/api";
import { fetchMultipleProductGalleries } from "../lib/services/gallery";
import { notFound } from "next/navigation";
import PageHeader from "../../Components/SearchResults/PageHeader/PageHeader";
import CarList from "../../Components/SearchResults/CarList/CarList";
import NoResults from "../../Components/SearchResults/NoResults/NoResults";
import TopChoices from "../../Components/SearchResults/TopChoices/TopChoices";
import RecentlyAdded from "../../Components/SearchResults/RecentlyAdded/RecentlyAdded";

// Set the revalidation time for ISR
export const revalidate = 300; // Revalidate every 5 minutes for search results

// Function to fetch search results from the API
async function getSearchResults(searchParams) {
  try {
    const {
      q: query = '',
      page = 1,
      limit = 12,
      sort = 'modified',
      order = 'desc',
      brand = '',
      category = '',
      minPrice = '',
      maxPrice = '',
      fuelType = '',
      state = ''
    } = searchParams;
    
    // Sanitize pagination params
    const pageNum = Math.max(1, parseInt(page) || 1);
    const limitNum = Math.max(1, parseInt(limit) || 12);
    
    console.log(`Searching for: "${query}" with filters:`, {
      brand, category, minPrice, maxPrice, fuelType, state
    });
    
    // If no search query and no filters, get recent products
    if (!query && !brand && !category && !minPrice && !maxPrice && !fuelType && !state) {
      const response = await productsAPI.getCollection(
        pageNum,
        limitNum,
        sort,
        order,
        false, // featured
        '', // category
        '', // brandId
        false // random
      );
      
      if (response && response.success) {
        return {
          success: true,
          data: response.data || [],
          totalCount: response.totalCount || 0,
          currentPage: response.currentPage || parseInt(page),
          totalPages: response.totalPages || 0,
          searchQuery: query,
          filters: { brand, category, minPrice, maxPrice, fuelType, state }
        };
      }
    }
    
    // For actual search, we'll use the search endpoint if available
    // Otherwise, filter the collection based on the query and filters
    let searchResults = await productsAPI.search({
      query,
      page: pageNum,
      limit: limitNum,
      sort,
      order,
      brand,
      category,
      minPrice: minPrice ? parseInt(minPrice) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
      fuelType,
      state
    });
    
    // If search endpoint doesn't exist, fall back to collection with basic filtering
    if (!searchResults || !searchResults.success) {
      console.log('Search endpoint not available, using collection with filters');
      
      const response = await productsAPI.getCollection(
        pageNum,
        limitNum,
        sort,
        order,
        false, // featured
        category, // category filter
        brand, // brand filter (if brand is ID)
        false // random
      );
      
      if (response && response.success) {
        let filteredData = response.data || [];
        
        // Client-side filtering for search query if backend doesn't support it
        if (query) {
          const queryLower = query.toLowerCase();
          filteredData = filteredData.filter(product => 
            (product.name && product.name.toLowerCase().includes(queryLower)) ||
            (product.description && product.description.toLowerCase().includes(queryLower)) ||
            (product.brand && product.brand.toLowerCase().includes(queryLower)) ||
            (product.model && product.model.toLowerCase().includes(queryLower))
          );
        }
        
        // Additional client-side filtering
        if (minPrice) {
          const minPriceNum = parseInt(minPrice);
          filteredData = filteredData.filter(product => 
            product.price && parseInt(product.price) >= minPriceNum
          );
        }
        
        if (maxPrice) {
          const maxPriceNum = parseInt(maxPrice);
          filteredData = filteredData.filter(product => 
            product.price && parseInt(product.price) <= maxPriceNum
          );
        }
        
        if (fuelType) {
          filteredData = filteredData.filter(product => 
            product.fuelType && product.fuelType.toLowerCase() === fuelType.toLowerCase()
          );
        }
        
        if (state) {
          filteredData = filteredData.filter(product => 
            product.registrationState && product.registrationState.toLowerCase().includes(state.toLowerCase())
          );
        }
        
        // Calculate pagination over filtered results
        const totalFilteredItems = filteredData.length;
        const calculatedTotalPages = totalFilteredItems === 0 ? 0 : Math.ceil(totalFilteredItems / limitNum);
        const safePage = calculatedTotalPages > 0 ? Math.min(pageNum, calculatedTotalPages) : 1;
        const startIndex = (safePage - 1) * limitNum;
        const endIndex = startIndex + limitNum;
        const paginatedData = filteredData.slice(startIndex, endIndex);

        searchResults = {
          success: true,
          data: paginatedData,
          totalCount: totalFilteredItems,
          currentPage: safePage,
          totalPages: calculatedTotalPages
        };
      }
    }
    
    if (searchResults && searchResults.success) {
      // Enhance search results with gallery images
      const enhancedSearchData = await fetchMultipleProductGalleries(searchResults.data || []);
      
      return {
        success: true,
        data: enhancedSearchData,
        totalCount: searchResults.totalCount || 0,
        currentPage: searchResults.currentPage || pageNum,
        totalPages: searchResults.totalPages || 0,
        searchQuery: query,
        filters: { brand, category, minPrice, maxPrice, fuelType, state }
      };
    }
    
    return {
      success: false,
      data: [],
      totalCount: 0,
      currentPage: 1,
      totalPages: 0,
      searchQuery: query,
      filters: { brand, category, minPrice, maxPrice, fuelType, state }
    };
    
  } catch (error) {
    console.error('Error in getSearchResults:', error);
    return {
      success: false,
      data: [],
      totalCount: 0,
      currentPage: 1,
      totalPages: 0,
      searchQuery: '',
      filters: {}
    };
  }
}

// Function to get top choices (featured or popular products)
async function getTopChoices() {
  try {
    const response = await productsAPI.getFeatured();
    
    if (response && response.success && response.products) {
      const enhancedProducts = await fetchMultipleProductGalleries(response.products.slice(0, 6));
      return enhancedProducts;
    }
    
    // Fallback to popular products
    const popularResponse = await productsAPI.getCollection(1, 6, 'modified', 'desc', false);
    
    if (popularResponse && popularResponse.success) {
      const enhancedProducts = await fetchMultipleProductGalleries(popularResponse.data || []);
      return enhancedProducts;
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching top choices:', error);
    return [];
  }
}

// Function to get recently added products
async function getRecentlyAdded() {
  try {
    // Fetch latest added products with randomization for variety
    const response = await productsAPI.getCollection(1, 10, 'added', 'desc', false, '', '', true);
    
    if (response && response.success) {
      const enhancedProducts = await fetchMultipleProductGalleries(response.data || []);
      
      // Shuffle latest added products for random display order
      const shuffledProducts = enhancedProducts.sort(() => Math.random() - 0.5).filter((p) => p.stock != "0")
      
      // Take 6 products for display
      return shuffledProducts.slice(0, 6);
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching recently added products:', error);
    return [];
  }
}

// Generate metadata for the page
export async function generateMetadata({ searchParams }) {
  const query = searchParams?.q || '';
  
  if (query) {
    return {
      title: `Search Results for "${query}" | Big Boy Toyz`,
      description: `Find luxury cars matching "${query}" at Big Boy Toyz - India's trusted pre-owned luxury car dealership.`,
      keywords: `${query}, search results, luxury cars, Big Boy Toyz, used cars`,
    };
  }
  
  return {
    title: 'Search Results | Big Boy Toyz',
    description: 'Search results for luxury cars at Big Boy Toyz - India\'s trusted pre-owned luxury car dealership.',
    keywords: 'search, luxury cars, Big Boy Toyz, used cars, pre-owned cars',
  };
}

const SearchResults = async ({ searchParams }) => {
  // Fetch search results
  const searchData = await getSearchResults(searchParams || {});
  
  // Fetch additional data for recommendations
  const [topChoices, recentlyAdded] = await Promise.all([
    getTopChoices(),
    getRecentlyAdded()
  ]);
  
  const { data: results, totalCount, searchQuery, filters, currentPage, totalPages } = searchData;
  console.log('results', searchData);
  return (
    <>
      <PageHeader 
        totalResults={totalCount} 
        searchQuery={searchQuery}
        filters={filters}
      />
      
      {totalCount > 0 ? (
        <CarList 
          products={results}
          isLoading={false}
          totalCount={totalCount}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      ) : (
        <NoResults 
          searchQuery={searchQuery}
          filters={filters}
        />
      )}
      
      <TopChoices products={topChoices} />
      <RecentlyAdded products={recentlyAdded} />
    </>
  );
};

export default SearchResults;
