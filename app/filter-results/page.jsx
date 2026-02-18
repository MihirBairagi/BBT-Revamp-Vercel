import React from "react";
import { productsAPI, brandsAPI } from "../lib/services/api";
import { fetchMultipleProductGalleries } from "../lib/services/gallery";
import { notFound } from "next/navigation";
import PageHeader from "../../Components/FilterResults/PageHeader/PageHeader";
import CarList from "../../Components/FilterResults/CarList/CarList";
import NoResults from "../../Components/FilterResults/NoResults/NoResults";
import OurShowrooms from "../../Components/FilterResults/OurShowrooms/OurShowrooms";

// Set the revalidation time for ISR
export const revalidate = 300; // Revalidate every 5 minutes for filter results

// Function to fetch filtered results from the API
async function getFilteredResults(searchParams) {
  try {
    const {
      page = 1,
      limit = 12,
      sort = 'modified',
      order = 'desc',
      brand = '',
      brandId = '',
      category = '',
      minPrice = '',
      maxPrice = '',
      fuelType = '',
      state = '',
      yearFrom = '',
      yearTo = '',
      kmFrom = '',
      kmTo = '',
      featured = '',
      condition = '',
      transmission = '',
      bodyType = '',
      color = '',
      city = ''
    } = searchParams;
    
    console.log('Applying filters:', searchParams);
    
    // Start with the basic collection endpoint
    let results = await productsAPI.getCollection(
      parseInt(page),
      parseInt(limit),
      sort,
      order,
      featured === 'true' || featured === '1',
      category,
      brandId || brand, // Use brandId if available, otherwise brand
      false // random
    );
    
    console.log('Filter results API call with params:', {
      page: parseInt(page),
      limit: parseInt(limit),
      sort,
      order,
      featured: featured === 'true' || featured === '1',
      category,
      brandId: brandId || brand,
      searchParams
    });
    
    if (!results || !results.success) {
      return {
        success: false,
        data: [],
        totalCount: 0,
        currentPage: 1,
        totalPages: 0,
        appliedFilters: searchParams
      };
    }
    
    let filteredData = results.data || [];
    
    // Apply additional client-side filtering for more specific criteria
    // Price filtering
    if (minPrice) {
      const minPriceNum = parseInt(minPrice);
      filteredData = filteredData.filter(product => {
        const price = parseInt(product.price || product.specialPrice || 0);
        return price >= minPriceNum;
      });
    }
    
    if (maxPrice) {
      const maxPriceNum = parseInt(maxPrice);
      filteredData = filteredData.filter(product => {
        const price = parseInt(product.price || product.specialPrice || 0);
        return price <= maxPriceNum;
      });
    }
    
    // Fuel type filtering (normalize for case/whitespace)
    if (fuelType && fuelType !== 'all') {
      const normalize = (v) => (v || '').toString().trim().toLowerCase();
      const targetFuel = normalize(fuelType);
      filteredData = filteredData.filter(product => 
        normalize(product.fuelType) === targetFuel
      );
    }
    
    // State filtering
    if (state && state !== 'all') {
      filteredData = filteredData.filter(product => 
        product.registrationState && product.registrationState.toLowerCase().includes(state.toLowerCase())
      );
    }
    
    // Year filtering
    if (yearFrom) {
      const yearFromNum = parseInt(yearFrom);
      filteredData = filteredData.filter(product => {
        const year = parseInt(product.registrationYear || 0);
        return year >= yearFromNum;
      });
    }
    
    if (yearTo) {
      const yearToNum = parseInt(yearTo);
      filteredData = filteredData.filter(product => {
        const year = parseInt(product.registrationYear || 0);
        return year <= yearToNum;
      });
    }
    
    // KM driven filtering
    if (kmFrom) {
      const kmFromNum = parseInt(kmFrom);
      filteredData = filteredData.filter(product => {
        const km = parseInt(product.kmDriven || 0);
        return km >= kmFromNum;
      });
    }
    
    if (kmTo) {
      const kmToNum = parseInt(kmTo);
      filteredData = filteredData.filter(product => {
        const km = parseInt(product.kmDriven || 0);
        return km <= kmToNum;
      });
    }
    
    // Transmission filtering
    if (transmission && transmission !== 'all') {
      filteredData = filteredData.filter(product => 
        product.transmission && product.transmission.toLowerCase().includes(transmission.toLowerCase())
      );
    }
    
    // Body type filtering
    if (bodyType && bodyType !== 'all') {
      filteredData = filteredData.filter(product => 
        product.bodyType && product.bodyType.toLowerCase().includes(bodyType.toLowerCase()) ||
        product.category && product.category.toLowerCase().includes(bodyType.toLowerCase())
      );
    }
    
    // Color filtering
    if (color && color !== 'all') {
      filteredData = filteredData.filter(product => 
        product.color && product.color.toLowerCase().includes(color.toLowerCase())
      );
    }
    
    // City filtering
    if (city && city !== 'all') {
      filteredData = filteredData.filter(product => 
        product.city && product.city.toLowerCase().includes(city.toLowerCase()) ||
        product.location && product.location.toLowerCase().includes(city.toLowerCase())
      );
    }
    
    // Condition filtering
    if (condition && condition !== 'all') {
      if (condition === 'excellent') {
        filteredData = filteredData.filter(product => 
          product.condition && product.condition.toLowerCase().includes('excellent')
        );
      } else if (condition === 'good') {
        filteredData = filteredData.filter(product => 
          product.condition && product.condition.toLowerCase().includes('good')
        );
      } else if (condition === 'fair') {
        filteredData = filteredData.filter(product => 
          product.condition && product.condition.toLowerCase().includes('fair')
        );
      }
    }
    
    // Calculate pagination for filtered results
    const totalFilteredItems = filteredData.length;
    const totalPages = Math.ceil(totalFilteredItems / parseInt(limit));
    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = startIndex + parseInt(limit);
    const paginatedData = filteredData.slice(startIndex, endIndex);
    
    // Enhance paginated data with gallery images
    const enhancedData = await fetchMultipleProductGalleries(paginatedData);
    
    return {
      success: true,
      data: enhancedData,
      totalCount: totalFilteredItems,
      currentPage: parseInt(page),
      totalPages: totalPages,
      appliedFilters: searchParams
    };
    
  } catch (error) {
    console.error('Error in getFilteredResults:', error);
    return {
      success: false,
      data: [],
      totalCount: 0,
      currentPage: 1,
      totalPages: 0,
      appliedFilters: searchParams
    };
  }
}

// Function to get filter options (brands, categories, etc.)
async function getFilterOptions() {
  try {
    const [brandsResponse] = await Promise.all([
      brandsAPI.getAllWithModels()
    ]);
    
    let brands = [];
    if (brandsResponse && brandsResponse.success && brandsResponse.brands) {
      brands = brandsResponse.brands.map(brand => ({
        id: brand.id || brand.id_,
        name: brand.bname || brand.name,
        value: brand.id || brand.id_
      }));
    }
    
    // Common filter options
    const fuelTypes = [
      { value: 'petrol', label: 'Petrol' },
      { value: 'diesel', label: 'Diesel' },
      { value: 'electric', label: 'Electric' },
      { value: 'hybrid', label: 'Hybrid' },
      { value: 'cng', label: 'CNG' }
    ];
    
    const transmissions = [
      { value: 'automatic', label: 'Automatic' },
      { value: 'manual', label: 'Manual' },
      { value: 'cvt', label: 'CVT' },
      { value: 'amt', label: 'AMT' }
    ];
    
    const bodyTypes = [
      { value: 'suv', label: 'SUV' },
      { value: 'sedan', label: 'Sedan' },
      { value: 'coupe', label: 'Coupe' },
      { value: 'convertible', label: 'Convertible' },
      { value: 'hatchback', label: 'Hatchback' },
      { value: 'wagon', label: 'Wagon' }
    ];
    
    const priceRanges = [
      { value: '0-1000000', label: 'Under ₹10 Lakh' },
      { value: '1000000-2500000', label: '₹10-25 Lakh' },
      { value: '2500000-5000000', label: '₹25-50 Lakh' },
      { value: '5000000-10000000', label: '₹50 Lakh - ₹1 Crore' },
      { value: '10000000-99999999', label: 'Above ₹1 Crore' }
    ];
    
    return {
      brands,
      fuelTypes,
      transmissions,
      bodyTypes,
      priceRanges
    };
    
  } catch (error) {
    console.error('Error fetching filter options:', error);
    return {
      brands: [],
      fuelTypes: [],
      transmissions: [],
      bodyTypes: [],
      priceRanges: []
    };
  }
}

// Generate metadata for the page
export async function generateMetadata({ searchParams }) {
  const appliedFilters = Object.keys(searchParams || {}).length;
  
  return {
    title: `Filter Results | Big Boy Toyz ${appliedFilters > 0 ? `- ${appliedFilters} filters applied` : ''}`,
    description: 'Find your perfect luxury car with advanced filtering options at Big Boy Toyz - India\'s trusted pre-owned luxury car dealership.',
    keywords: 'filter cars, search luxury cars, Big Boy Toyz, advanced search, used cars filter',
    robots: 'noindex, follow', // Prevent indexing of filter result pages
  };
}

const FilterResults = async ({ searchParams }) => {
  // Fetch filtered results and filter options
  const [filteredData, filterOptions] = await Promise.all([
    getFilteredResults(searchParams || {}),
    getFilterOptions()
  ]);
  
  const { data: results, totalCount, currentPage, totalPages, appliedFilters } = filteredData;
  
  return (
    <>
      <PageHeader 
        totalResults={totalCount} 
        appliedFilters={appliedFilters}
        filterOptions={filterOptions}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      
      {totalCount > 0 ? (
        <CarList 
          results={results}
          totalCount={totalCount}
          currentPage={currentPage}
          totalPages={totalPages}
          appliedFilters={appliedFilters}
          filterOptions={filterOptions}
        />
      ) : (
        <NoResults 
          appliedFilters={appliedFilters}
          filterOptions={filterOptions}
        />
      )}
      
      <OurShowrooms />
    </>
  );
};

export default FilterResults;
