import { API, productsAPI, brandsAPI, categoriesAPI } from './api';
// import { ensureFullImageUrl } from './api';


/**
 * Ensure an image URL is a full URL by prepending the base URL if necessary
 * @param {string} imageUrl - The image URL or path (like 'cci340-17.jpg' from pgalimage)
 * @returns {string} - The full image URL
 */
export function ensureFullImageUrl(imageUrl) {
  if (!imageUrl) return '';
  
  // Return as-is if it's already a full URL
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // For relative URLs (like 'cci340-17.jpg' from pgalimage), use the specific products/product path
  return `https://cdn.bigboytoyz.com/new-version/products/product/${imageUrl}`;
} 

/**
 * Service for interacting with the products (cars) API
 */
export const productsService = {
  /**
   * Get all products with pagination and sorting
   * @param {Object} params - Query parameters
   * @param {number} params.page - Page number (starts from 1)
   * @param {number} params.limit - Number of items per page
   * @param {string} params.sort - Field to sort by (e.g. 'createdAt')
   * @param {string} params.order - Sort order ('asc' or 'desc')
   * @param {string} params.category - Filter by category
   * @param {string} params.brand - Filter by brand
   * @param {boolean} params.featured - Filter by featured status
   * @param {boolean} params.inStock - Filter by in-stock status
   */
  getProducts: async (params = {}) => {
    try {
      // Convert params object to expected format
      const { page = 1, limit = 12, sort = 'modified', order = 'desc', featured = false, random = false } = params;
      
      console.log('Fetching products with params:', { page, limit, sort, order, featured, random });
      
      // Call the optimized collection endpoint
      const response = await productsAPI.getCollection(
        page,
        limit,
        sort,
        order,
        featured,
        params.category || '',
        params.brand || params.brandId || '',
        random,
        false,
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        params.styles || ''
      );
      
      if (response && response.success && Array.isArray(response.data)) {
        console.log(`Collection endpoint returned ${response.data.length} products`);
        
        // Map the response to our frontend format
        return {
          success: true,
          data: response.data.map(product => this.mapProductData(product)),
          totalCount: response.totalCount || 0,
          totalPages: response.totalPages || 0,
          currentPage: page
        };
      }
      
      // If collection endpoint didn't work, fall back to basic products endpoint
      console.log('Collection endpoint failed, trying basic products endpoint');
      const allProductsResponse = await productsAPI.getAll();
      
      if (!allProductsResponse || !allProductsResponse.products) {
        console.error('Invalid response format:', allProductsResponse);
        throw new Error('Invalid response format from API');
      }
      
      console.log(`Received ${allProductsResponse.products.length} products from API`);
      
      // Process all products
      const allProducts = allProductsResponse.products.map(product => this.mapProductData(product));
      
      // Handle client-side filtering
      let filteredProducts = [...allProducts];
      
      // Filter by category if specified
      if (params.category) {
        filteredProducts = filteredProducts.filter(
          p => p.category === params.category
        );
      }
      
      // Filter by brand if specified
      if (params.brand) {
        filteredProducts = filteredProducts.filter(
          p => p.brand === params.brand || p.brandid === params.brand
        );
      }
      
      // Filter featured products if specified
      if (featured) {
        filteredProducts = filteredProducts.filter(
          p => p.featured === true || p.featured === 'yes' || p.featured === '1'
        );
      }
      
      // Sort products
      const sortField = sort === 'createdAt' ? 'modified' : sort;
      const sortOrder = order.toLowerCase() === 'asc' ? 1 : -1;
      
      filteredProducts.sort((a, b) => {
        // Handle date fields
        if (sortField === 'modified' || sortField === 'added' || sortField === 'createdAt') {
          const dateA = new Date(a[sortField] || 0);
          const dateB = new Date(b[sortField] || 0);
          return (dateA < dateB ? -1 : dateA > dateB ? 1 : 0) * sortOrder;
        }
        
        // Handle numeric fields
        if (sortField === 'price' || sortField === 'proprice') {
          const priceA = parseFloat(a.price || a.proprice || 0);
          const priceB = parseFloat(b.price || b.proprice || 0);
          return (priceA - priceB) * sortOrder;
        }
        
        // Handle string fields
        const valA = a[sortField] || '';
        const valB = b[sortField] || '';
        return valA.localeCompare(valB) * sortOrder;
      });
      
      // Apply randomization if requested
      if (random) {
        filteredProducts = this.getRandomizedArray(filteredProducts);
      }
      
      // Paginate the results
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      
      // Get paginated subset
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
      
      // Return in the expected format
      return {
        success: true,
        data: paginatedProducts,
        totalCount: filteredProducts.length,
        totalPages: Math.ceil(filteredProducts.length / limit),
        currentPage: page
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      // Return a valid response even on error
      return {
        success: false,
        error: error.message,
        data: [],
        totalCount: 0,
        totalPages: 0,
        currentPage: parseInt(params.page || 1)
      };
    }
  },
  
  /**
   * Get a single product by ID
   * @param {string} id - Product ID
   */
  getProduct: async (id) => {
    try {
      // Call the direct endpoint
      const response = await productsAPI.getOne(id);
      
      if (response && response.product) {
        return {
          success: true,
          product: productsService.mapProductData(response.product)
        };
      }
      
      throw new Error(`Product with ID ${id} not found`);
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      return {
        success: false,
        error: error.message
      };
    }
  },
  
  /**
   * Get featured products (featured=true)
   * @param {number} limit - Number of featured products to get
   */
  getFeaturedProducts: async (limit = 6) => {
    try {
      const response = await productsAPI.getFeatured();
      
      if (response && response.products) {
        const mappedProducts = response.products.slice(0, limit).map(product => 
          productsService.mapProductData(product)
        );
        
        return {
          success: true,
          data: mappedProducts,
          totalCount: mappedProducts.length
        };
      }
      
      return {
        success: false,
        data: [],
        totalCount: 0
      };
    } catch (error) {
      console.error('Error fetching featured products:', error);
      return {
        success: false,
        error: error.message,
        data: [],
        totalCount: 0
      };
    }
  },
  
  /**
   * Get product gallery images
   * @param {string} id - Product ID
   */
  getProductGallery: async (id) => {
    try {
      const response = await productsAPI.getProductGallery(id);
      
      if (response && response.gallery) {
        // Ensure all image URLs are full URLs
        const processedGallery = response.gallery.map(image => ({
          ...image,
          url: ensureFullImageUrl(image.url || image.pgalimage || image.image || '')
        }));
        
        return {
          success: true,
          gallery: processedGallery
        };
      }
      
      return {
        success: false,
        gallery: []
      };
    } catch (error) {
      console.error(`Error fetching gallery for product ${id}:`, error);
      return {
        success: false,
        error: error.message,
        gallery: []
      };
    }
  },
  
  /**
   * Get random products for recommendations
   * @param {number} limit - Number of random products to get
   */
  getRandomProducts: async (limit = 6) => {
    try {
      const response = await productsAPI.getCollection(
        1, // page
        limit, // limit
        'modified', // sort
        'desc', // order
        false, // featured
        '', // category
        '', // brandId
        true, // random
        false, // inStock
        '', // minPrice
        '', // maxPrice
        '', // yearFrom
        '', // yearTo
        '', // fuelType
        '', // state
        '', // kmFrom
        '', // kmTo
        '' // styles
      );
      
      if (response && response.data) {
        return {
          success: true,
          data: response.data.map(product => productsService.mapProductData(product)),
          totalCount: response.totalCount || response.data.length
        };
      }
      
      return {
        success: false,
        data: [],
        totalCount: 0
      };
    } catch (error) {
      console.error('Error fetching random products:', error);
      return {
        success: false,
        error: error.message,
        data: [],
        totalCount: 0
      };
    }
  },
  
  /**
   * Get similar products based on the same brand or category
   * @param {string} id - Current product ID
   * @param {string} brandId - Brand ID
   * @param {string} categoryId - Category ID
   * @param {number} limit - Number of similar products to get
   */
  getSimilarProducts: (id, brandId, categoryId, limit = 6) => {
    return API.get('/products/collection', {
      limit,
      brandId,
      category: categoryId,
      exclude: id,
    });
  },
  
  /**
   * Search products by name, description, or tags
   * @param {string} query - Search query
   * @param {number} limit - Number of results to return
   */
  searchProducts: (query, limit = 12) => {
    return API.get('/products/collection', {
      search: query,
      limit,
    });
  },
  
  /**
   * Map raw product data from API to frontend format
   */
  mapProductData: (product) => {
    if (!product) return null;
    
    // Helper to safely process array fields that might be strings
    const processArrayField = (field) => {
      if (!field) return [];
      if (Array.isArray(field)) return field;
      return field.split(/[~,|]/).map(item => item.trim()).filter(Boolean);
    };
    
    // Log the raw product data to debug
    // console.log('Mapping product data:', {
    //   id: product.id || product.id_ || product.mongodb_id,
    //   proname: product.proname,
    //   name: product.name,
    //   title: product.title,
    //   proprice: product.proprice,
    //   price: product.price,
    //   registrationYear: product.registrationYear,
    //   kmDriven: product.kmDriven,
    //   fuelType: product.fuelType,
    //   registrationState: product.registrationState,
    //   regstate: product.regstate
    // });
    
    return {
      id: product.id || product.id_ || product.mongodb_id || '',
      // Handle multiple possible field names for product name
      name: product.name || product.proname || product.title || '',
      description: product.description || product.prodesc || '',
      // Handle multiple possible field names for price
      price: product.price || product.proprice || '',
      specialPrice: product.specialPrice || product.prospprice || '',
      images: product.images || [],  // This will be populated from productImages in the car detail page
      featured: product.featured === '1' || product.featured === 'yes' || product.featured === 'true' || product.featured === true,
      category: product.category || '',
      // Handle registration year from API response
      yearOfRegistration: product.registrationYear || '',
      registrationYear: product.registrationYear || '', // Alternative field name
      // Handle KM driven from API response
      kmDriven: product.kmDriven || '',
      // Handle fuel type from API response
      fuelType: product.fuelType || '',
      // Handle registration state from multiple possible sources
      registrationState: product.registrationState || product.regstate || '',
      metaTitle: product.metatitle || '',
      metaDescription: product.metadesc || '',
      metaKeyword: product.metakeyword || '',
      postUrl: product.posturl || product.slug || '',
      status: product.status || '',
      isBooked: product.isBooked || product.booked === '1' || product.booked === 'yes' || product.booked === 'true',
      // Handle brand data from multiple possible sources
      brand: product.brand || {
        id: product.brandid || '',
        name: product.brand?.name || '', // Will be populated from brand object in car detail page
      },
      // Process array fields that might be strings or arrays
      silentFeatures: processArrayField(product.silentfeatures || product.silentFeatures || ''),
      paidFeatures: processArrayField(product.paidfeatures || product.paidFeatures || ''),
      requiredMaintenance: processArrayField(product.required_maintenance || product.requiredMaintenance || ''),
      preventiveMaintenance: processArrayField(product.preventive_maintenance || product.preventiveMaintenance || ''),
      partsReplaced: processArrayField(product.parts_replaced || product.partsReplaced || ''),
      ownerQuote: product.ownerquote || '',
      exhaustNote: product.exhaustnote || '',
      added: product.added || '',
      modified: product.modified || '',
      
      // For backwards compatibility with existing components
      title: product.name || product.proname || product.title || '',
      subtitle: product.subtitle || '',
      url: product.posturl || product.slug || '',
      date: product.modified || product.added || '',
      isFeatured: product.featured === '1' || product.featured === 'yes' || product.featured === 'true' || product.featured === true,
    };
  },
  
  /**
   * Get assets and UI images from the backend
   * @returns {Object} - UI assets including logos and icons
   */
  getUIAssets: () => {
    return {
      certifiedBadge: '/images/certified-badge.png',
      bookedBadge: '/images/booked-badge.png',
      soldBadge: '/images/sold-badge.png',
      kmIcon: '/images/km-icon.svg',
      fuelIcon: '/images/fuel-icon.svg',
      registerIcon: '/images/register-icon.svg',
      callIcon: '/images/call-icon.svg',
      placeholderCar: 'https://cdn.bigboytoyz.com/new-version/placeholder-car.png'
    };
  },
  
  /**
   * Get all brands with their models
   */
  getAllBrands: async () => {
    try {
      const response = await brandsAPI.getAllWithModels();
      return {
        success: true,
        brands: response.brands || []
      };
    } catch (error) {
      console.error('Error fetching brands:', error);
      return {
        success: false,
        error: error.message,
        brands: []
      };
    }
  },
  
  /**
   * Get all categories
   */
  getAllCategories: async () => {
    try {
      const response = await categoriesAPI.getAll();
      return {
        success: true,
        categories: response.categories || []
      };
    } catch (error) {
      console.error('Error fetching categories:', error);
      return {
        success: false,
        error: error.message,
        categories: []
      };
    }
  },
  
  /**
   * Helper function to randomize an array using Fisher-Yates algorithm
   */
  getRandomizedArray: (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },
};
