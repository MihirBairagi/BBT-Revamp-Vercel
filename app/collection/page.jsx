import React from "react";
import { productsAPI, brandsAPI } from "../lib/services/api";
import { productsService } from "../lib/services/products";
import { getStateQueryFromFilterValue } from "../lib/constants/registrationStates";
// Import the direct API test function for fallback
import { getProducts } from "../api-test";

import PageHeader from "../../Components/Collection/PageHeader/PageHeader";
import CollectionListTop from "../../Components/Collection/CollectionListTop/CollectionListTop";
import CollectionListBottom from "../../Components/Collection/CollectionListBottom/CollectionListBottom";
// import FormSection from "../../Components/Collection/FormSection/FormSection";
import ContactSection from "../../Components/Collection/ContactSection/ContactSection";
import OurShowrooms from "../../Components/Collection/OurShowrooms/OurShowrooms";
import { CollectionProvider } from "../lib/contexts/CollectionContext";

// Enable ISR with revalidation (removes force-dynamic for better performance)
// This allows caching while keeping content fresh
export const revalidate = 300; // Revalidate every 5 minutes (increased from 60s for better caching)

/**
 * Generate static params for the default collection page
 * This enables static generation at build time for instant loading
 */
export async function generateStaticParams() {
  return [{}]; // Generate the default /collection page at build time
}

/**
 * Helper function to log debug information
 */
function logDebug(label, data) {
  if (process.env.NEXT_PUBLIC_DEBUG === "true") {
    console.log(`DEBUG: ${label}`, data);
  }
}

// REMOVED: fetchProductGalleries function - now handled by backend in single call

/**
 * Helper function to extract and validate filters from search params
 */
function extractFiltersFromSearchParams(searchParams) {
  const filters = {};

  if (!searchParams) return filters;

  // Extract all the possible filter parameters
  const filterMapping = {
    category: "category",
    brand: "brand",
    brandId: "brand", // Handle both brand and brandId
    styles: "styles",
    priceMin: "priceMin",
    priceMax: "priceMax",
    minPrice: "priceMin", // Handle both formats
    maxPrice: "priceMax", // Handle both formats
    yearFrom: "yearFrom",
    yearTo: "yearTo",
    fuelType: "fuelType",
    state: "state",
    kmFrom: "kmFrom",
    kmTo: "kmTo",
    vehicleType: "vehicleType",
  };

  Object.entries(filterMapping).forEach(([paramKey, filterKey]) => {
    // Handle both URLSearchParams object and plain object
    const value =
      typeof searchParams.get === "function"
        ? searchParams.get(paramKey)
        : searchParams[paramKey];
    if (value && value.trim() !== "") {
      filters[filterKey] = value.trim();
    }
  });

  console.log("Extracted filters from URL:", filters);
  return filters;
}

/**
 * Function to fetch filtered products based on search params
 * OPTIMIZED: Now uses single API call with galleries included
 */
async function getFilteredProducts(searchParams, page = 1, limit = 24) {
  try {
    const filters = extractFiltersFromSearchParams(searchParams);

    console.log("Fetching products with filters:", filters);

    // Resolve brand param: allow either numeric ID or slug (posturl)
    let resolvedBrandId = filters.brand || "";
    if (resolvedBrandId) {
      const isNumericId = /^\d+$/.test(resolvedBrandId);
      if (!isNumericId) {
        try {
          const allBrands = await brandsAPI.getAll();
          const match = allBrands?.brands?.find(
            (b) => (b.posturl || "").toLowerCase() === resolvedBrandId.toLowerCase()
          );
          if (match) {
            resolvedBrandId = match.id_ || match.id || "";
          } else {
            console.warn(
              `Brand slug not found: ${resolvedBrandId}. Proceeding without brand filter.`
            );
            resolvedBrandId = "";
          }
        } catch (e) {
          console.warn("Failed to resolve brand slug to ID:", e);
          resolvedBrandId = "";
        }
      }
    }

    // Generate a fresh shuffle seed for this page render
    const shuffleSeed = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
    
    // OPTIMIZED: Fetch products WITH galleries in single call
    const response = await productsAPI.getCollectionWithGalleries(
      page,
      limit,
      "modified", // sort
      "desc", // order
      false, // featured
      filters.category || "",
      resolvedBrandId || "",
      false, // random
      false, // inStock
      filters.priceMin || "",
      filters.priceMax || "",
      filters.yearFrom || "",
      filters.yearTo || "",
      filters.fuelType || "",
      getStateQueryFromFilterValue(filters.state) || "",
      filters.kmFrom || "",
      filters.kmTo || "",
      filters.styles || "",
      filters.vehicleType || "",
      shuffleSeed
    );

    if (response && response.success && response.data) {
      console.log(
        `Collection API returned ${response.data.length} products with galleries`
      );

      return {
        success: true,
        data: response.data,
        totalCount: response.totalCount || response.data.length,
        totalPages:
          response.totalPages ||
          Math.ceil((response.totalCount || response.data.length) / limit),
        currentPage: response.currentPage || page,
      };
    }

    console.log("No filtered products returned from endpoint");
    return {
      success: false,
      data: [],
      totalCount: 0,
      totalPages: 0,
      currentPage: 1,
    };
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    return {
      success: false,
      data: [],
      totalCount: 0,
      totalPages: 0,
      currentPage: 1,
    };
  }
}

/**
 * Collection page component
 */
const Collection = async ({ searchParams }) => {
  // PERFORMANCE LOGGING: Track page generation time
  const pageStartTime = Date.now();
  console.log("[PERF] Collection page SSR started");

  // Extract filters from URL parameters
  const urlFilters = extractFiltersFromSearchParams(searchParams || {});
  console.log("Collection page URL Filters:", urlFilters);

  // Check if we have any active filters
  const hasActiveFilters = Object.keys(urlFilters).length > 0;

  let topProducts = [];
  let bottomProducts = [];
  let totalResults = 0;

  if (hasActiveFilters) {
    // If filters are active, fetch filtered products and split them
    console.log("Active filters detected, fetching filtered products...");
    const filteredResult = await getFilteredProducts(searchParams, 1, 30);
    totalResults = filteredResult.totalCount;

    if (filteredResult.success && filteredResult.data.length > 0) {
      // Split filtered results - first 6 for top, rest for bottom
      topProducts = filteredResult.data.slice(0, 6);
      bottomProducts = filteredResult.data.slice(6);

      console.log(
        `Filtered results: ${topProducts.length} top products, ${bottomProducts.length} bottom products`
      );
    }
  } else {
    // No filters, fetch default products
    console.log("No filters active, fetching default products...");

    // Generate fresh shuffle seed for this page render
    const defaultShuffleSeed = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

    // OPTIMIZED: Fetch ALL 24 products WITH galleries in ONE call
    // SMART RANDOMIZATION: Fetches recent 200 products, randomizes them (fast!)
    // This avoids loading all 2,279 products into memory
    const allProductsResult = await productsAPI.getCollectionWithGalleries(
      1, // page
      24, // limit - fetch all 24 at once
      "modified", // sort - used for fetching recent products
      "desc", // order
      false, // featured
      "", // category
      "", // brandId
      true, // random - now uses SMART randomization (fetch 200, randomize)
      false, // inStock
      "", "", "", "", "", "", "", "", "", "", // other filters
      defaultShuffleSeed
    );
    
    totalResults = allProductsResult.totalCount;
    
    if (allProductsResult && allProductsResult.success && allProductsResult.data) {
      // Split into top 6 and bottom 18 on server
      topProducts = allProductsResult.data.slice(0, 6);
      bottomProducts = allProductsResult.data.slice(6);
      
      console.log(
        `OPTIMIZED: Fetched ${allProductsResult.data.length} products with galleries in ONE call`
      );
      console.log(
        `Split into: ${topProducts.length} top products, ${bottomProducts.length} bottom products`
      );
    } else {
      topProducts = [];
      bottomProducts = [];
    }
  }

  const pageEndTime = Date.now();
  console.log(`[PERF] Collection page SSR completed in ${pageEndTime - pageStartTime}ms`);
  console.log(`[PERF] Products fetched: top=${topProducts.length}, bottom=${bottomProducts.length}, total=${totalResults}`);

  return (
    <CollectionProvider initialFilters={urlFilters}>
      <PageHeader totalResults={totalResults} />
      {/* Top list: 6 products with filters applied */}
      <div className="top-collection-list bg-white md:bg-[#f3f3f3]  lg:pt-8 3xl:pt-12">
        <CollectionListTop
          initialData={{ data: topProducts }}
          isTopList={true}
          hasActiveFilters={hasActiveFilters}
        />
      </div>
      {/* <ContactSection /> */}
      {/* Bottom list: remaining products with infinite scroll */}
      <CollectionListTop
        initialData={{ data: bottomProducts }}
        isSecondary={true}
        hasActiveFilters={hasActiveFilters}
      />
      <OurShowrooms />
    </CollectionProvider>
  );
};

export default Collection;
