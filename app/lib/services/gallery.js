import { productsAPI } from './api';

/**
 * Gallery service for handling product image fetching across the application
 */

/**
 * Process image URL to ensure it has the correct CDN prefix
 * @param {string} imageUrl - The image URL to process
 * @param {boolean} isThumbnail - Whether this is a thumbnail (uses root products folder)
 */
function processImageUrl(imageUrl, isThumbnail = false) {
  if (!imageUrl) return null;
  if (typeof imageUrl !== 'string') return null;
  if (imageUrl.startsWith('http')) return imageUrl;
  
  const cdnBase = 'https://cdn.bigboytoyz.com/new-version/products/';
  if (isThumbnail) {
    // Main product images are in the root products folder
    return `${cdnBase}${imageUrl}`;
  }
  // Gallery images are in a subfolder
  return `${cdnBase}product/${imageUrl}`;
}

/**
 * Fetch gallery images for a single product
 * @param {string} productId - The product ID
 * @returns {Promise<Array>} Array of processed gallery images
 */
export async function fetchProductGallery(productId) {
  try {
    if (!productId) {
      console.warn('No product ID provided for gallery fetch');
      return [];
    }
    
    // console.log(`Fetching gallery for product: ${productId}`);
    const galleryResponse = await productsAPI.getProductGallery(productId);
    
    if (galleryResponse && galleryResponse.success && galleryResponse.gallery) {
      // Process gallery images with proper URLs and metadata
      const processedImages = galleryResponse.gallery.map(image => ({
        id: image.id || image.id_,
        url: processImageUrl(image.pgalimage || image.imageUrl),
        alt: image.imgalt || 'Car Image',
        type: image.ptype || '1',
        order: parseInt(image.porder) || 0
      }));
      
      // Sort by order
      processedImages.sort((a, b) => a.order - b.order);
      
      // console.log(`Loaded ${processedImages.length} gallery images for product ${productId}`);
      return processedImages;
    }
    
    console.log(`No gallery images found for product ${productId}`);
    return [];
  } catch (error) {
    console.error(`Error fetching gallery for product ${productId}:`, error);
    return [];
  }
}

/**
 * Fetch gallery images for multiple products in parallel
 * @param {Array} products - Array of product objects with id property
 * @returns {Promise<Array>} Array of products enhanced with gallery images
 */
export async function fetchMultipleProductGalleries(products) {
  try {
    if (!products || products.length === 0) {
      return [];
    }
    
    // console.log(`Fetching gallery images for ${products.length} products...`);
    
    // Fetch gallery images for all products in parallel
    const galleryPromises = products.map(async (product) => {
      try {
        const galleryImages = await fetchProductGallery(product.id);
        
        return {
          ...product,
          images: galleryImages,
          gallery: galleryImages.map(img => img.url) // For backward compatibility
        };
      } catch (error) {
        console.error(`Error fetching gallery for product ${product.id}:`, error);
        return {
          ...product,
          images: [],
          gallery: []
        };
      }
    });
    
    const productsWithGalleries = await Promise.all(galleryPromises);
    // console.log(`Successfully processed gallery images for ${productsWithGalleries.length} products`);
    
    return productsWithGalleries;
  } catch (error) {
    console.error('Error fetching multiple product galleries:', error);
    return products.map(product => ({
      ...product,
      images: [],
      gallery: []
    }));
  }
}

/**
 * Enhance a single product with gallery images
 * @param {Object} product - Product object
 * @returns {Promise<Object>} Product enhanced with gallery images
 */
export async function enhanceProductWithGallery(product) {
  if (!product || !product.id) {
    return {
      ...product,
      images: [],
      gallery: []
    };
  }
  
  const galleryImages = await fetchProductGallery(product.id);
  
  return {
    ...product,
    images: galleryImages,
    gallery: galleryImages.map(img => img.url) // For backward compatibility
  };
}

/**
 * Get display images for a product with fallback logic
 * Priority: thumbnail first (if available), then up to 4 gallery images
 * @param {Object} product - Product object
 * @param {string} placeholderUrl - Placeholder image URL
 * @returns {Array} Array of image objects ready for display (max 5: 1 thumbnail + 4 gallery)
 */
export function getDisplayImages(product, placeholderUrl = 'https://cdn.bigboytoyz.com/new-version/placeholder-car.png') {
  const images = [];
  const addedUrls = new Set();

  const addImage = (url, alt, props = {}) => {
    if (url && !addedUrls.has(url)) {
      images.push({ url, alt, ...props });
      addedUrls.add(url);
    }
  };

  // 1. ALWAYS add thumbnail FIRST if available (even if no gallery images)
  if (product.thumbnail && product.thumbnail != null && product.thumbnail != undefined) {
    const thumbUrl = product.thumbnail.startsWith('http')
      ? product.thumbnail
      : `https://cdn.bigboytoyz.com/new-version/products/${product.thumbnail}`;
    addImage(
      thumbUrl,
      product.name || product.title || 'Car Image',
      { id: 'thumbnail', order: 0 }
    );
  } else if (product.prolistimage && product.prolistimage != null && product.prolistimage != undefined) {
    // Fallback to prolistimage if thumbnail is not available
    const prolistUrl = product.prolistimage.startsWith('http')
      ? product.prolistimage
      : `https://cdn.bigboytoyz.com/new-version/products/${product.prolistimage}`;
    addImage(
      prolistUrl,
      product.name || product.title || 'Car Image',
      { id: 'prolistimage', order: 0 }
    );
  }

  // 2. Add up to 4 gallery images from product.images array (sorted by order)
  if (product.images && product.images.length > 0 && product.images != null && product.images != undefined) {
    const sorted = [...product.images].sort((a, b) => {
      if (a.order === "0" && b.order !== "0") return -1;
      if (a.order !== "0" && b.order === "0") return 1;
      return (a.order || 0) - (b.order || 0);
    });

    // Add first 4 gallery images (max 4 after thumbnail)
    for (let i = 0; i < sorted.length && images.length < 5; i++) {
      const img = sorted[i];
      const imageUrl = img.url || img.pgalimage || img;
      addImage(
        processImageUrl(imageUrl),
        img.alt || product.name || product.title || 'Car Image',
        { id: img.id, type: img.type, order: img.order }
      );
    }
  } else if (product.gallery && product.gallery.length > 0 && product.gallery != null && product.gallery != undefined) {
    // Fallback to product.gallery array (for backward compatibility)
    // Add first 4 gallery images (max 4 after thumbnail)
    for (let i = 0; i < product.gallery.length && images.length < 5; i++) {
      const url = product.gallery[i];
      addImage(
        processImageUrl(url),
        `${product.name || product.title} - Image ${i + 1}`,
        { id: `gallery-${i}`, order: i }
      );
    }
  }

  // 3. If no thumbnail or gallery, try single product.image
  if (images.length === 0 && product.image && product.image != null && product.image != undefined) {
    addImage(
      processImageUrl(product.image),
      product.name || product.title || 'Car Image',
      { id: 'single-image', order: 0 }
    );
  }

  // 4. Placeholder fallback if nothing found
  if (images.length === 0) {
    addImage(
      placeholderUrl,
      product.name || product.title || 'Car Image',
      { id: 'placeholder', order: 0 }
    );
  }

  return images;
}

export default {
  fetchProductGallery,
  fetchMultipleProductGalleries,
  enhanceProductWithGallery,
  getDisplayImages,
  processImageUrl
}; 