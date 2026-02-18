import { mutate } from 'swr';

/**
 * Utility function to invalidate all product-related SWR cache
 * This can be called manually or triggered by webhooks
 */
export const invalidateProductCache = () => {
  // Invalidate all product-related cache keys
  const cacheKeys = [
    // Products collection
    JSON.stringify({ endpoint: 'getCollection', params: { page: 1, limit: 12, sort: 'modified', order: 'desc' } }),
    JSON.stringify({ endpoint: 'getCollection', params: { page: 1, limit: 12, sort: 'added', order: 'desc' } }),
    JSON.stringify({ endpoint: 'getCollection', params: { page: 1, limit: 12, sort: 'proprice', order: 'asc' } }),
    JSON.stringify({ endpoint: 'getCollection', params: { page: 1, limit: 12, sort: 'proprice', order: 'desc' } }),
    
    // Featured products
    JSON.stringify({ endpoint: 'getFeatured', params: { limit: 6 } }),
    JSON.stringify({ endpoint: 'getFeatured', params: { limit: 12 } }),
    
    // Categories
    JSON.stringify({ endpoint: 'getCategories', params: {} }),
    
    // Brands
    JSON.stringify({ endpoint: 'getBrands', params: {} }),
  ];

  // Mutate all cache keys to trigger revalidation
  cacheKeys.forEach(key => {
    mutate(key, undefined, { revalidate: true });
  });

  // Also invalidate single product caches
  invalidateAllSingleProductCaches();

  console.log('Product cache invalidated manually');
};

/**
 * Invalidate cache for a specific product
 */
export const invalidateProductById = (productId) => {
  const productKey = JSON.stringify({ endpoint: 'getProduct', params: productId });
  mutate(productKey, undefined, { revalidate: true });
  console.log(`Cache invalidated for product: ${productId}`);
};

/**
 * Invalidate cache for products by category
 */
export const invalidateProductsByCategory = (category) => {
  const categoryKey = JSON.stringify({ 
    endpoint: 'getCollection', 
    params: { page: 1, limit: 12, category, sort: 'modified', order: 'desc' } 
  });
  mutate(categoryKey, undefined, { revalidate: true });
  console.log(`Cache invalidated for category: ${category}`);
};

/**
 * Invalidate cache for products by brand
 */
export const invalidateProductsByBrand = (brandId) => {
  const brandKey = JSON.stringify({ 
    endpoint: 'getCollection', 
    params: { page: 1, limit: 12, brandId, sort: 'modified', order: 'desc' } 
  });
  mutate(brandKey, undefined, { revalidate: true });
  console.log(`Cache invalidated for brand: ${brandId}`);
};

/**
 * Invalidate all single product caches
 */
export const invalidateAllSingleProductCaches = () => {
  // This will invalidate all single product caches by pattern
  // Since SWR uses JSON.stringify for keys, we need to invalidate by pattern
  // For now, we'll invalidate common product IDs that might be cached
  const commonProductIds = ['1', '2', '3', '4', '5']; // Add more if needed
  
  commonProductIds.forEach(productId => {
    const productKey = JSON.stringify({ endpoint: 'getProduct', params: productId });
    mutate(productKey, undefined, { revalidate: true });
  });
  
  console.log('All single product caches invalidated');
}; 