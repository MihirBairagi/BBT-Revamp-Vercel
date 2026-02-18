/**
 * URL generation utilities for consistent routing across the application
 */

/**
 * Remove brand name from model name if it's already included to avoid duplication
 * @param {string} brandName - The brand name (e.g., "Audi", "BMW")
 * @param {string} modelName - The model name (e.g., "Audi A4", "A4", "BMW X5", "X5")
 * @returns {string} - Clean model name without brand duplication
 */
export function cleanModelName(brandName, modelName) {
  if (!brandName || !modelName) return modelName || '';
  
  // Check if model name starts with brand name (case-insensitive)
  if (modelName.toLowerCase().startsWith(brandName.toLowerCase())) {
    // Remove brand name and any following space/hyphen
    const cleanName = modelName.substring(brandName.length).replace(/^[\s\-]+/, '');
    return cleanName || modelName; // Fallback to original if result is empty
  }
  
  return modelName;
}

/**
 * Convert string to URL-friendly slug
 * @param {string} str - The string to convert
 * @returns {string} - URL-friendly slug
 */
export function createSlug(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

/**
 * Generate brand page URL
 * @param {string} brandName - The brand name
 * @returns {string} - Brand page URL
 */
export function createBrandUrl(brandName) {
  if (!brandName) return '';
  const brandSlug = createSlug(brandName);
  return `/buy-used-${brandSlug}-cars`;
}

/**
 * Generate brand-model page URL
 * @param {string} brandName - The brand name
 * @param {string} modelName - The model name
 * @returns {string} - Brand-model page URL
 */
export function createBrandModelUrl(brandName, modelName) {
  if (!brandName || !modelName) return '';
  
  const brandSlug = createSlug(brandName);
  const cleanModel = cleanModelName(brandName, modelName);
  const modelSlug = createSlug(cleanModel);
  
  return `/buy-used-${brandSlug}-cars-${modelSlug}`;
}

/**
 * Generate brand-city page URL
 * @param {string} brandName - The brand name
 * @param {string} cityName - The city name
 * @returns {string} - Brand-city page URL
 */
export function createBrandCityUrl(brandName, cityName) {
  if (!brandName || !cityName) return '';
  
  const brandSlug = createSlug(brandName);
  const citySlug = createSlug(cityName);
  
  return `/buy-used-${brandSlug}-cars-in-${citySlug}`;
}

/**
 * Generate brand-model-city page URL
 * @param {string} brandName - The brand name
 * @param {string} modelName - The model name
 * @param {string} cityName - The city name
 * @returns {string} - Brand-model-city page URL
 */
export function createBrandModelCityUrl(brandName, modelName, cityName) {
  if (!brandName || !modelName || !cityName) return '';
  
  const brandSlug = createSlug(brandName);
  const cleanModel = cleanModelName(brandName, modelName);
  const modelSlug = createSlug(cleanModel);
  const citySlug = createSlug(cityName);
  
  return `/buy-used-${brandSlug}-cars-${modelSlug}-in-${citySlug}`;
}

export default {
  cleanModelName,
  createSlug,
  createBrandUrl,
  createBrandModelUrl,
  createBrandCityUrl,
  createBrandModelCityUrl
}; 