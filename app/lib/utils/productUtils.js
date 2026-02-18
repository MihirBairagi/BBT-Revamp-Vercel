/**
 * Utility functions for product-related operations
 */

/**
 * Check if a product is sold out
 * @param {Object} product - The product object
 * @returns {boolean} - True if the product is sold out
 */
export const isProductSoldOut = (product) => {
  if (!product) return false;
  
  return (
    product.isSoldOut === true || 
    product.isSoldOut === "1" || 
    product.price === 0 || 
    product.price === "0" || 
    product.inStock === false || 
    product.inStock === "0" || 
    product.stock === "0" || 
    product.stock === 0
  );
};

/**
 * Format price for display, showing "Call for Price" if product is sold out
 * @param {Object} product - The product object
 * @returns {string} - Formatted price string
 */
export const formatProductPrice = (product) => {
  if (!product) return "Call for Price";
  
  // If product is sold out, always show "Call for Price"
  if (isProductSoldOut(product)) {
    return "Call for Price";
  }
  
  // If no price or price is 0, show "Call for Price"
  if (!product.price || product.price === 0 || product.price === "0") {
    return "Call for Price";
  }
  
  // Format the price with Indian number formatting
  const numPrice = typeof product.price === 'string' 
    ? parseFloat(product.price.replace(/[^\d.]/g, '')) 
    : parseFloat(product.price);
    
  if (isNaN(numPrice) || numPrice <= 0) {
    return "Call for Price";
  }
  
  return `₹ ${numPrice.toLocaleString('en-IN')}`;
};

/**
 * Format discounted price for display
 * @param {Object} product - The product object
 * @returns {string|null} - Formatted discounted price or null
 */
export const formatDiscountedPrice = (product) => {
  if (!product || !product.discountedPrice || !product.specialPrice) {
    return null;
  }
  
  const discountedPrice = product.discountedPrice || product.specialPrice;
  const numPrice = typeof discountedPrice === 'string' 
    ? parseFloat(discountedPrice.replace(/[^\d.]/g, '')) 
    : parseFloat(discountedPrice);
    
  if (isNaN(numPrice) || numPrice <= 0) {
    return null;
  }
  
  return `₹${numPrice.toLocaleString('en-IN')}`;
}; 