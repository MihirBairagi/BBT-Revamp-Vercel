import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { productsAPI, brandsAPI, categoriesAPI } from '../services/api';
import { ensureFullImageUrl } from '../services/products';
import React, { useMemo } from 'react';

// Generate a random shuffle seed for consistent pagination within a session
const generateShuffleSeed = () => `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

/**
 * Generic SWR fetcher function for product data
 */
const fetcher = async (key) => {
  try {
    // Extract the endpoint and parameters from the key
    const parsedKey = JSON.parse(key);
    const { endpoint, params } = parsedKey;
    
    console.log(`SWR fetcher calling ${endpoint} with:`, params);
    
    let response;
    
    // Route to the correct API method based on the endpoint
    switch (endpoint) {
      case 'getCollection':
        const { 
          page = 1, 
          limit = 12, 
          sort = 'modified', 
          order = 'desc', 
          featured = false, 
          category = '', 
          brandId = '', 
          brand = '',
          random = false,
          styles = '',
          minPrice = '',
          maxPrice = '',
          yearFrom = '',
          yearTo = '',
          fuelType = '',
          state = '',
          kmFrom = '',
          kmTo = '',
          vehicleType = '',
          shuffleSeed = ''
        } = params;
        
        // Use brand parameter if provided, otherwise fallback to brandId
        let finalBrandId = brandId || brand;
        
        // Resolve non-numeric brand (slug) to numeric ID
        if (finalBrandId && !/^\d+$/.test(String(finalBrandId))) {
          try {
            const allBrands = await brandsAPI.getAll();
            const match = allBrands?.brands?.find(
              (b) => (b.posturl || '').toLowerCase() === String(finalBrandId).toLowerCase()
            );
            if (match) {
              finalBrandId = match.id_ || match.id || '';
            } else {
              finalBrandId = '';
            }
          } catch (e) {
            console.warn('Failed to resolve brand slug to ID in fetcher:', e);
            finalBrandId = '';
          }
        }
        
        response = await productsAPI.getCollection(
          page, limit, sort, order, featured, category, finalBrandId, random, false, 
          minPrice, maxPrice, yearFrom, yearTo, fuelType, state, kmFrom, kmTo, styles, vehicleType, shuffleSeed
        );
        break;
        
      case 'getProduct':
        response = await productsAPI.getOne(params);
        break;
        
      case 'getFeatured':
        response = await productsAPI.getFeatured();
        break;
        
      case 'getGallery':
        response = await productsAPI.getProductGallery(params);
        break;
        
      case 'getBrands':
        response = await brandsAPI.getAllWithModels();
        break;
        
      case 'getCategories':
        response = await categoriesAPI.getAll();
        break;
        
      default:
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
    
    // Process the response to ensure consistent format
    if (endpoint === 'getCollection') {
      // The backend now returns data in the expected format
      return {
        success: response.success,
        data: response.data || [],
        totalCount: response.totalCount || 0,
        totalPages: response.totalPages || 0,
        currentPage: response.currentPage || params.page || 1
      };
    } else if (endpoint === 'getProduct') {
      // Format response for single product endpoint
      return {
        success: true,
        product: response.product ? response.product : null
      };
    } else if (endpoint === 'getFeatured') {
      // Format response for featured products
      return {
        success: response.success,
        data: response.products?.map(product => product) || [],
        totalCount: response.products?.length || 0
      };
    } else if (endpoint === 'getGallery') {
      // Format response for gallery
      return {
        success: response.success,
        gallery: response.gallery?.map(img => ({
          id: img.id || img.id_,
          url: img.pgalimage,
          order: img.porder || 0,
          alt: img.imgalt || '',
          pid: img.pid
        })) || []
      };
    } else if (endpoint === 'getBrands') {
      // Return brands data directly
      return response;
    } else if (endpoint === 'getCategories') {
      // Return categories data directly
      return response;
    }
    
    // Default response
    return response;
  } catch (error) {
    console.error('Error in SWR fetcher:', error);
    // Return a valid error response that won't break the UI
    return {
      success: false, 
      data: [],
      totalCount: 0,
      totalPages: 0,
      currentPage: 1,
      error: error.message
    };
  }
};

/**
 * Hook for fetching products with pagination
 */
export function useProducts(options = {}) {
  const { 
    page = 1, 
    limit = 12, 
    sort = 'modified', 
    order = 'desc',
    featured = false,
    category = '',
    brandId = '',
    styles = '',
    minPrice = '',
    maxPrice = '',
    yearFrom = '',
    yearTo = '',
    fuelType = '',
    state = '',
    kmFrom = '',
    kmTo = '',
    vehicleType = '',
    random = false,
    shuffleSeed: providedShuffleSeed = '',  // Allow external seed for SSR consistency
    enabled = true, 
    initialData = null,
    swrOptions = {},
    ...otherParams 
  } = options;
  
  // Determine if this is price sorting (no shuffle needed)
  const isPriceSort = sort === 'price' || sort === 'proprice' || sort === 'proprice_numeric';
  
  // Generate a stable shuffle seed for this component instance (stays same across page changes)
  // Only generate for non-price sorting; price sorting doesn't need it
  const shuffleSeed = useMemo(() => {
    if (isPriceSort) return '';
    return providedShuffleSeed || generateShuffleSeed();
  }, [isPriceSort, providedShuffleSeed]); // Only regenerate if sort type changes or external seed provided
  
  // Create a unique cache key - include shuffleSeed for non-price sorting
  const key = enabled 
    ? JSON.stringify({ 
        endpoint: 'getCollection', 
        params: { 
          page, 
          limit, 
          sort, 
          order, 
          featured, 
          category, 
          brandId, 
          random, 
          styles, 
          minPrice,
          maxPrice,
          yearFrom,
          yearTo,
          fuelType,
          state,
          kmFrom,
          kmTo,
          vehicleType,
          shuffleSeed,  // Include shuffle seed in params
          ...otherParams 
        } 
      })
    : null;
  
  const { data, error, isLoading, isValidating, mutate } = useSWR(key, fetcher, {
    revalidateOnFocus: false, // Don't refetch on focus for non-price (preserves shuffle order)
    revalidateOnReconnect: true,
    revalidateIfStale: isPriceSort, // Only revalidate stale for price sorting
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    dedupingInterval: isPriceSort ? 30000 : 0, // No deduping for non-price sorting
    focusThrottleInterval: 2000,
    errorRetryCount: 3,
    errorRetryInterval: 3000,
    keepPreviousData: true,
    fallbackData: initialData,
    ...swrOptions,
  });
  
  return {
    products: data?.data || [],
    totalPages: data?.totalPages || 0,
    totalItems: data?.totalCount || 0,
    currentPage: data?.currentPage || page,
    isLoading,
    isValidating,
    isError: !!error || data?.success === false,
    error: error || (data?.success === false ? data?.error : null),
    mutate,
    shuffleSeed, // Return the seed so it can be passed to pagination
  };
}

/**
 * Hook for fetching products with infinite scrolling
 */
export function useInfiniteProducts(options = {}) {
  const { 
    limit = 12, 
    sort = 'modified', 
    order = 'desc',
    featured = false,
    category = '',
    brandId = '',
    styles = '',
    random = false,
    shuffleSeed: providedShuffleSeed = '',  // Allow external seed for consistency
    enabled = true, 
    initialData = null,
    minPrice = '',
    maxPrice = '',
    yearFrom = '',
    yearTo = '',
    fuelType = '',
    state = '',
    kmFrom = '',
    kmTo = '',
    vehicleType = '',
    ...otherParams 
  } = options;
  
  // Determine if this is price sorting (no shuffle needed)
  const isPriceSort = sort === 'price' || sort === 'proprice' || sort === 'proprice_numeric';
  
  // Generate a stable shuffle seed for this component instance
  const shuffleSeed = useMemo(() => {
    if (isPriceSort) return '';
    return providedShuffleSeed || generateShuffleSeed();
  }, [isPriceSort, providedShuffleSeed]);
  
  // Define key generator function for SWRInfinite
  const getKey = (pageIndex, previousPageData) => {
    // Reached the end
    if (previousPageData && 
        (!previousPageData.data || previousPageData.data.length === 0)) {
      return null;
    }
    
    // First page, no previous data
    if (pageIndex === 0) {
      return JSON.stringify({
        endpoint: 'getCollection',
        params: { 
          page: 1, 
          limit, 
          sort, 
          order, 
          featured, 
          category, 
          brandId, 
          random,
          styles,
          minPrice,
          maxPrice,
          yearFrom,
          yearTo,
          fuelType,
          state,
          kmFrom,
          kmTo,
          vehicleType,
          shuffleSeed,  // Include shuffle seed
          ...otherParams 
        }
      });
    }
    
    // Add page to key for subsequent requests
    return JSON.stringify({
      endpoint: 'getCollection',
      params: { 
        page: pageIndex + 1, 
        limit, 
        sort, 
        order, 
        featured, 
        category, 
        brandId, 
        random,
        styles,
        minPrice,
        maxPrice,
        yearFrom,
        yearTo,
        fuelType,
        state,
        kmFrom,
        kmTo,
        vehicleType,
        shuffleSeed,  // Include shuffle seed
        ...otherParams 
      }
    });
  };
  
  const { data, error, isLoading, isValidating, size, setSize, mutate } = useSWRInfinite(
    enabled ? getKey : () => null,
    fetcher,
    {
      revalidateOnFocus: false, // Don't refetch on focus (preserves shuffle order)
      dedupingInterval: isPriceSort ? 15000 : 0, // No deduping for non-price sorting
      errorRetryCount: 3,
      fallbackData: initialData,
    }
  );
  
  // Flatten all products from all pages, preserving the order of pages
  const products = React.useMemo(() => {
    if (!data) return [];
    
    // Ensure we're concatenating pages in the correct order (earlier pages first)
    let allProducts = [];
    for (let i = 0; i < data.length; i++) {
      const page = data[i];
      if (page && page.data && Array.isArray(page.data)) {
        allProducts = [...allProducts, ...page.data];
      }
    }
    return allProducts;
  }, [data]);
  
  const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = !data || !data[0] || !data[0].data || data[0].data.length === 0;
  const isReachingEnd = isEmpty || (data && data.length > 0 && 
    (data[data.length - 1]?.data?.length < limit || 
     data[data.length - 1]?.currentPage >= data[data.length - 1]?.totalPages));
  
  return {
    products,
    isLoading,
    isLoadingMore,
    isValidating,
    isReachingEnd,
    isEmpty,
    isError: !!error || data?.some(page => page?.success === false),
    error,
    size,
    setSize,
    loadMore: () => !isReachingEnd && setSize(size + 1),
    mutate,
    totalItems: data?.[0]?.totalCount || 0,
  };
}

/**
 * Hook for fetching a single product by ID
 */
export function useProduct(id, options = {}) {
  const { enabled = true, initialData = null } = options;
  
  const key = enabled && id 
    ? JSON.stringify({ endpoint: 'getProduct', params: id })
    : null;
  
  const { data, error, isLoading, isValidating, mutate } = useSWR(key, fetcher, {
    revalidateOnFocus: true, // Changed to true for more responsive updates
    dedupingInterval: 5000, // Reduced from 10000 to 5000 (5 seconds)
    fallbackData: initialData,
  });
  
  // Process the product data
  let product = data?.product || null;
  
  // If we have product and productImages in the response, process them
  if (product && data.productImages && Array.isArray(data.productImages)) {
    // Clear existing images if present to avoid duplicates
    product.images = [];
    
    // Add product images from the response
    data.productImages.forEach(image => {
      product.images.push({
        url: ensureFullImageUrl(image.pgalimage),
        alt: image.imgalt || product.title || 'Car Image',
        id: image.id || image.id_,
        type: image.ptype || '1',
        order: parseInt(image.porder) || 0
      });
    });
    
    // Sort images by order
    product.images.sort((a, b) => a.order - b.order);
  }
  
  // Gallery key - ALWAYS create the key to avoid conditional hook calls
  const galleryKey = enabled && id 
    ? JSON.stringify({ endpoint: 'getGallery', params: id })
    : null;
  
  // Fetch gallery separately - ALWAYS call useSWR
  const { data: galleryData } = useSWR(galleryKey, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 30000, // 30 seconds
  });
  
  // If product has no images yet, merge in gallery data if available
  if (product && (!product.images || product.images.length === 0) && galleryData?.success && galleryData.gallery) {
    product.gallery = galleryData.gallery;
    
    // Initialize images array if needed
    if (!product.images) {
      product.images = [];
    }
    
    // Update images array with any additional gallery images
    const existingUrls = new Set(product.images.map(img => img.url));
    
    galleryData.gallery.forEach(galleryImage => {
      const galleryUrl = galleryImage.url || galleryImage.pgalimage;
      if (galleryUrl && !existingUrls.has(galleryUrl)) {
        product.images.push({
          url: ensureFullImageUrl(galleryUrl),
          id: galleryImage.id || galleryImage._id,
          alt: galleryImage.alt || product.title
        });
        existingUrls.add(galleryUrl);
      }
    });
  }
  
  return {
    product,
    gallery: product?.gallery || [],
    isLoading,
    isValidating,
    isError: !!error || data?.success === false,
    error: error || (data?.success === false ? data?.error : null),
    mutate,
  };
}

/**
 * Hook for fetching featured products
 */
export function useFeaturedProducts(limit = 6, options = {}) {
  const { enabled = true, initialData = null } = options;
  
  const key = enabled 
    ? JSON.stringify({ endpoint: 'getFeatured', params: { limit } })
    : null;
  
  const { data, error, isLoading, isValidating, mutate } = useSWR(key, fetcher, {
    revalidateOnFocus: true, // Changed to true for more responsive updates
    dedupingInterval: 30000, // Reduced from 60000 to 30000 (30 seconds)
    fallbackData: initialData,
  });
  
  return {
    products: data?.data?.slice(0, limit) || [],
    isLoading,
    isValidating,
    isError: !!error || data?.success === false,
    error: error || (data?.success === false ? data?.error : null),
    mutate,
  };
}

/**
 * Hook for fetching all brands with their models
 */
export function useBrands(options = {}) {
  const { enabled = true, initialData = null } = options;
  
  const key = enabled 
    ? JSON.stringify({ endpoint: 'getBrands', params: {} })
    : null;
  
  const { data, error, isLoading, isValidating, mutate } = useSWR(key, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 3600000, // 1 hour
    fallbackData: initialData,
  });
  
  return {
    brands: data?.brands || [],
    isLoading,
    isValidating,
    isError: !!error || data?.success === false,
    error: error || (data?.success === false ? data?.error : null),
    mutate,
  };
}

/**
 * Hook for fetching all categories
 */
export function useCategories(options = {}) {
  const { enabled = true, initialData = null } = options;
  
  const key = enabled 
    ? JSON.stringify({ endpoint: 'getCategories', params: {} })
    : null;
  
  const { data, error, isLoading, isValidating, mutate } = useSWR(key, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 3600000, // 1 hour
    fallbackData: initialData,
  });
  
  return {
    categories: data?.categories || [],
    isLoading,
    isValidating,
    isError: !!error || data?.success === false,
    error: error || (data?.success === false ? data?.error : null),
    mutate,
  };
} 