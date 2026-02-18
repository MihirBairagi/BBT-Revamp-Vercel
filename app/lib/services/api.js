// Base API service for making requests to the backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

/**
 * Generic fetch function with error handling
 */
export async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      next: options?.method && options.method !== 'GET' ? undefined : { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = new Error(`API error: ${response.status}`);
      error.status = response.status;
      error.info = await response.json().catch(() => ({}));
      throw error;
    }

    return response.json();
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
}

// Submit form helper - handles JSON and multipart with files
export async function submitForm({ formType, data = {}, files = {} }) {
  const endpoint = '/api/forms';

  const hasFiles = files && Object.keys(files).some((k) => !!files[k]);
  if (hasFiles) {
    const form = new FormData();
    form.append('form_type', formType);
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        form.append(key, String(value));
      }
    });
    Object.entries(files).forEach(([key, file]) => {
      if (file) form.append(key, file);
    });

    const res = await fetch(endpoint, { method: 'POST', body: form });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(text || `Request failed: ${res.status}`);
    }
    return res.json();
  }

  // JSON fallback
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ form_type: formType, data }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json();
}

/**
 * Helper methods for common HTTP methods
 */
export const API = {
  get: (endpoint, params = {}) => {
    const query = new URLSearchParams(params).toString();
    const url = query ? `${endpoint}?${query}` : endpoint;
    return fetchAPI(url);
  },
  
  post: (endpoint, data) => {
    return fetchAPI(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  
  patch: (endpoint, data) => {
    return fetchAPI(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },
  
  delete: (endpoint) => {
    return fetchAPI(endpoint, {
      method: 'DELETE',
    });
  },
};

// Module-specific API services
export const productsAPI = {
  getAll: async () => {
    return fetchAPI('/products');
  },
  
  getAllWithRelations: async () => {
    return fetchAPI('/products/with-relations');
  },
  
  getByCategory: async (categoryId) => {
    return fetchAPI(`/products/category/${categoryId}`);
  },
  
  getFeatured: async () => {
    return fetchAPI('/products/featured');
  },
  
  getCollection: async (page = 1, limit = 12, sort = 'modified', order = 'desc', featured = false, category = '', brandId = '', random = false, inStock = false, minPrice = '', maxPrice = '', yearFrom = '', yearTo = '', fuelType = '', state = '', kmFrom = '', kmTo = '', styles = '', vehicleType = '', shuffleSeed = '') => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      sort,
      order,
      featured: featured ? '1' : '0',
      random: random ? '1' : '0',
      inStock: inStock ? '1' : '0'
    });

    // Add optional filters if provided
    if (category) params.append('category', category);
    if (brandId) params.append('brandId', brandId);
    
    // Add price range filters
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    
    // Add year range filters
    if (yearFrom) params.append('yearFrom', yearFrom);
    if (yearTo) params.append('yearTo', yearTo);
    
    // Add other filters
    if (fuelType) {
      const normalizedFuel = (fuelType || '').toString().trim().toLowerCase();
      if (normalizedFuel) params.append('fuelType', normalizedFuel);
    }
    if (state) params.append('state', state);
    if (kmFrom) params.append('kmFrom', kmFrom);
    if (kmTo) params.append('kmTo', kmTo);
    
    // Add styles (body type) filters
    if (styles) params.append('styles', styles);
    
    // Add vehicle type filter
    if (vehicleType) params.append('vehicleType', vehicleType);
    
    // Add shuffle seed for consistent pagination (fresh on each page load)
    if (shuffleSeed) params.append('shuffleSeed', shuffleSeed);
    
    // console.log(`Fetching collection with params: ${params.toString()}`);
    
    // Use revalidation cache for better performance
    const isPriceSort = sort === 'price' || sort === 'proprice' || sort === 'proprice_numeric';
    const fetchOptions = { 
      next: { revalidate: isPriceSort ? 60 : 30 }  // Cache for 30-60 seconds
    };
    
    const response = await fetch(`${API_BASE_URL}/products/debug/collection?${params.toString()}`, fetchOptions);
    const data = await response.json();
    
    return data;
  },
  
  getOne: async (id) => {
    return fetchAPI(`/products/debug/${id}`);
  },

  // Exact posturl match (case-sensitive)
  getBySlugExact: async (slug) => {
    return fetchAPI(`/products/slug/${slug}`);
  },
  
  getProductGallery: async (productId) => {
    return fetchAPI(`/products/${productId}/gallery`);
  },

  getBatchProductGalleries: async (productIds) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/galleries/batch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productIds }),
        next: { revalidate: 600 } // Cache for 10 minutes
      });
      
      if (!response.ok) {
        console.error(`Batch gallery fetch failed: ${response.status}`);
        return { success: false, galleries: {} };
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching batch galleries:', error);
      return { success: false, galleries: {} };
    }
  },

  // NEW: Combined method that includes galleries - optimized for collection page
  getCollectionWithGalleries: async (
    page = 1,
    limit = 24,
    sort = 'modified',
    order = 'desc',
    featured = false,
    category = '',
    brandId = '',
    random = false,
    inStock = false,
    minPrice = '',
    maxPrice = '',
    yearFrom = '',
    yearTo = '',
    fuelType = '',
    state = '',
    kmFrom = '',
    kmTo = '',
    styles = '',
    vehicleType = '',
    shuffleSeed = ''
  ) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      sort,
      order,
      featured: featured ? '1' : '0',
      random: random ? '1' : '0',
      inStock: inStock ? '1' : '0'
    });

    // Add optional filters if provided
    if (category) params.append('category', category);
    if (brandId) params.append('brandId', brandId);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (yearFrom) params.append('yearFrom', yearFrom);
    if (yearTo) params.append('yearTo', yearTo);
    if (fuelType) {
      const normalizedFuel = (fuelType || '').toString().trim().toLowerCase();
      if (normalizedFuel) params.append('fuelType', normalizedFuel);
    }
    if (state) params.append('state', state);
    if (kmFrom) params.append('kmFrom', kmFrom);
    if (kmTo) params.append('kmTo', kmTo);
    if (styles) params.append('styles', styles);
    if (vehicleType) params.append('vehicleType', vehicleType);
    if (shuffleSeed) params.append('shuffleSeed', shuffleSeed);
    
    const response = await fetch(
      `${API_BASE_URL}/products/collection-with-galleries?${params.toString()}`,
      { next: { revalidate: 300 } } // Cache for 5 minutes
    );
    
    const data = await response.json();
    return data;
  },
  
  getProductAttributes: async (productId) => {
    return fetchAPI(`/products/debug/${productId}/attributes`);
  },
  
  getDiagnostic: async (id) => {
    return fetchAPI(`/products/diagnostic/${id}`);
  },
  
  search: async (searchParams = {}) => {
    const {
      query = '',
      page = 1,
      limit = 12,
      sort = 'modified',
      order = 'desc',
      brand = '',
      category = '',
      minPrice,
      maxPrice,
      fuelType = '',
      state = ''
    } = searchParams;
    
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      sort,
      order
    });
    
    // Add search query
    if (query) params.append('q', query);
    
    // Add optional filters
    if (brand) params.append('brand', brand);
    if (category) params.append('category', category);
    if (minPrice !== undefined) params.append('minPrice', minPrice.toString());
    if (maxPrice !== undefined) params.append('maxPrice', maxPrice.toString());
    if (fuelType) {
      const normalizedFuel = (fuelType || '').toString().trim().toLowerCase();
      if (normalizedFuel) params.append('fuelType', normalizedFuel);
    }
    if (state) params.append('state', state);
    
    try {
      return fetchAPI(`/products/debug/search?${params.toString()}`);
    } catch (error) {
      console.error('Search endpoint not available:', error);
      // Return failure so fallback logic can be used
      return { success: false };
    }
  },

  // Compare Cars API methods
  getBrandsForComparison: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/compare/brands`, { next: { revalidate: 600 } });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching brands for comparison:', error);
      return { success: false, brands: [] };
    }
  },

  getCarsByBrand: async (brandId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/compare/cars-by-brand/${brandId}`, { next: { revalidate: 600 } });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching cars by brand:', error);
      return { success: false, cars: [] };
    }
  },

  getAllCarsForComparison: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/compare/all-cars`, { next: { revalidate: 600 } });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching all cars for comparison:', error);
      return { success: false, cars: [] };
    }
  },

  getCarSpecifications: async (carIds) => {
    try {
      const carIdsString = Array.isArray(carIds) ? carIds.join(',') : carIds;
      const response = await fetch(`${API_BASE_URL}/products/compare/specifications?carIds=${carIdsString}`, { next: { revalidate: 600 } });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching car specifications:', error);
      return { success: false, specifications: [] };
    }
  },
};

export const brandsAPI = {
  getAll: async () => {
    return fetchAPI('/brands');
  },
  
  getAllWithModels: async () => {
    return fetchAPI('/brands/with-models');
  },
  
  getAllModels: async () => {
    return fetchAPI('/brands/models');
  },
  
  getModelsByBrandId: async (brandId) => {
    return fetchAPI(`/brands/models/${brandId}`);
  },
  
  getOne: async (id) => {
    return fetchAPI(`/brands/${id}`);
  },
  
  getOneWithModels: async (id) => {
    return fetchAPI(`/brands/${id}/with-models`);
  },

  // Get brand by slug
  getBrand: async (brandSlug) => {
    try {
      console.log(`Fetching brand data for slug: ${brandSlug}`);
      
      // First get all brands to find by slug
      const allBrands = await fetchAPI('/brands');
      
      if (!allBrands || !allBrands.success || !allBrands.brands) {
        console.error('Failed to fetch brands');
        return { success: false, message: 'Failed to fetch brands' };
      }
      
      // Find brand by slug (posturl)
      const brand = allBrands.brands.find(b => 
        b.posturl?.toLowerCase() === brandSlug.toLowerCase()
      );
      
      if (!brand) {
        console.error(`Brand not found with slug: ${brandSlug}`);
        return { success: false, message: 'Brand not found' };
      }
      
      console.log(`Found brand: ${brand.bname} (ID: ${brand.id_})`);
      
      // Get brand details with models
      const brandDetails = await fetchAPI(`/brands/${brand.id_}/with-models`);
      console.log('brandDetails', brandDetails);
      
      if (!brandDetails || !brandDetails.success) {
        console.error('Failed to fetch brand details');
        return { success: false, message: 'Failed to fetch brand details' };
      }
      
      console.log('Brand details with models:', {
        brand: brandDetails.brand?.bname,
        brandId: brandDetails.brand?.id_,
        modelsCount: brandDetails.models?.length || 0,
        models: brandDetails.models?.map(m => ({ id: m.id || m.id_, name: m.modelname })) || []
      });
      
      // Get products for this brand using the correct brand ID
      let products = [];
      let totalProducts = 0;
      
      try {
        const brandId = brand.id_ || brand.id;
        console.log(`Fetching products for brand ID: ${brandId}`);
        
        // Use the collection endpoint with proper parameters
        const productsResponse = await productsAPI.getCollection(
          1, // page
          100, // limit - increased to get more products for brand pages
          'modified', // sort
          'desc', // order
          false, // featured
          '', // category
          brandId, // brandId - use the brand ID directly
          false, // random
          false, // inStock - don't filter by stock here, backend will handle it
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
        
        console.log('Products response for brand:', {
          success: productsResponse?.success,
          dataLength: productsResponse?.data?.length || 0,
          total: productsResponse?.totalCount || 0,
          message: productsResponse?.message
        });
        
        if (productsResponse && productsResponse.success && productsResponse.data) {
          products = productsResponse.data;
          totalProducts = productsResponse.totalCount || products.length;
          console.log(`Successfully fetched ${products.length} products for brand ${brand.bname}`);
        } else {
          console.warn(`No products found for brand ${brandSlug}:`, productsResponse?.message);
          // Don't return error here, just empty products array
          products = [];
          totalProducts = 0;
        }
      } catch (error) {
        console.warn('Error fetching brand products:', error.message);
        // Don't fail the entire request, just return empty products
        products = [];
        totalProducts = 0;
      }
      
      // Get available cities for this brand using the correct endpoint
      let cities = [];
      try {
        console.log(`Fetching cities for brand: ${brandSlug}`);
        const citiesResponse = await fetchAPI(`/brands/${brandSlug}/cities`);
        console.log('Cities response:', {
          success: citiesResponse?.success,
          citiesCount: citiesResponse?.cities?.length || 0,
          message: citiesResponse?.message
        });
        
        if (citiesResponse && citiesResponse.success) {
          cities = citiesResponse.cities || [];
        } else {
          console.warn(`Failed to fetch cities for brand ${brandSlug}:`, citiesResponse?.message);
        }
      } catch (error) {
        console.warn('Error fetching brand cities:', error.message);
        // Don't fail the entire request, just return empty cities
        cities = [];
      }
      
      console.log(`Final result for brand ${brandSlug}:`, {
        brandName: brandDetails.brand?.bname,
        modelsCount: brandDetails.models?.length || 0,
        productsCount: products.length,
        totalProducts,
        citiesCount: cities.length
      });
      
      return {
        success: true,
        brand: brandDetails.brand,
        models: brandDetails.models || [],
        products,
        totalProducts,
        cities
      };
      
    } catch (error) {
      console.error('Error in getBrand:', error);
      return { success: false, message: 'Server error' };
    }
  },

  getAllBrandCities: async () => {
    return fetchAPI('/brands/cities');
  },

  getCitiesByBrandName: async (brandName) => {
    return fetchAPI(`/brands/${brandName}/cities`);
  },

  getBrandInCity: async (brandName, cityName) => {
    return fetchAPI(`/brands/${brandName}/city/${cityName}`);
  },

  getBrandModelInCity: async (brandName, modelName, cityName) => {
    return fetchAPI(`/brands/${brandName}/models/${modelName}/city/${cityName}`);
  },
};

export const categoriesAPI = {
  getAll: async () => {
    return fetchAPI('/categories');
  },
  
  getOne: async (id) => {
    return fetchAPI(`/categories/${id}`);
  },
  
  getSubcategories: async (parentId) => {
    return fetchAPI(`/categories/sub/${parentId}`);
  }
};

export const blogsAPI = {
  getAll: async (page = 1, limit = 12, sort = 'modified', order = 'desc', featured = false, category = '') => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString()
    });

    // Add optional filters if provided
    if (category) params.append('category', category);
    
    try {
      const response = await fetchAPI(`/blogs?${params.toString()}`);
      
      if (response && response.blogs) {
        // Map the blog data to frontend format with correct CDN URLs
        const mappedBlogs = response.blogs.map(blog => {
          // Construct the correct CDN URLs for blog images
          const baseCDN = 'https://cdn.bigboytoyz.com/new-version/article/';
          
          return {
            id: blog.id || blog.id_,
            _id: blog.id || blog.id_,
            title: blog.posttitle || blog.title || '',
            description: blog.postdesc || blog.description || '',
            content: blog.postcontent || blog.content || '',
            thumbnail: blog.featuredimage ? `${baseCDN}${blog.featuredimage}` : (blog.postimage ? `${baseCDN}${blog.postimage}` : '/images/placeholder-blog.jpg'),
            image: blog.featuredimage ? `${baseCDN}${blog.featuredimage}` : (blog.postimage ? `${baseCDN}${blog.postimage}` : '/images/placeholder-blog.jpg'),
            author: blog.authorname || blog.author || 'Big Boy Toyz Team',
            publishedDate: blog.added ? new Date(parseInt(blog.added) * 1000).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) : 'Recently Published',
            category: blog.cid || blog.category || '',
            views: blog.total_views || blog.views || 0,
            status: blog.status || 'active',
            published: blog.published === '1',
            slug: blog.posturl || blog.slug || `blog-${blog.id}`,
            metaTitle: blog.metatitle || blog.title,
            metaDescription: blog.metadesc || blog.description,
            metaKeywords: blog.metakeyword || '',
            tags: blog.posttags || blog.tags || '',
            commentCount: blog.commentcount || 0
          };
        });
        
        return {
          success: true,
          data: mappedBlogs,
          blogs: mappedBlogs, // For backward compatibility
          total: response.meta?.total || mappedBlogs.length,
          totalCount: response.meta?.total || mappedBlogs.length,
          currentPage: response.meta?.page || page,
          totalPages: response.meta?.totalPages || 1,
          hasNextPage: response.meta?.hasNextPage || false,
          hasPrevPage: response.meta?.hasPrevPage || false
        };
      }
      
      return {
        success: false,
        data: [],
        blogs: [],
        total: 0,
        totalCount: 0,
        currentPage: page,
        totalPages: 1
      };
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return {
        success: false,
        data: [],
        blogs: [],
        total: 0,
        totalCount: 0,
        currentPage: page,
        totalPages: 1
      };
    }
  },
  
  getFeatured: async () => {
    return fetchAPI('/blogs/featured');
  },
  
  getOne: async (id) => {
    try {
      const response = await fetchAPI(`/blogs/${id}`);
      if (response && response.blog) {
        // Map the blog data to frontend format with correct CDN URLs
        const blog = response.blog;
        const baseCDN = 'https://cdn.bigboytoyz.com/new-version/article/';
        
        return {
          success: true,
          blog: {
            id: blog.id || blog.id_,
            title: blog.posttitle || blog.title || '',
            description: blog.postdesc || blog.description || '',
            content: blog.postcontent || blog.content || '',
            thumbnail: blog.featuredimage ? `${baseCDN}${blog.featuredimage}` : (blog.postimage ? `${baseCDN}${blog.postimage}` : '/images/placeholder-blog.jpg'),
            image: blog.featuredimage ? `${baseCDN}${blog.featuredimage}` : (blog.postimage ? `${baseCDN}${blog.postimage}` : '/images/placeholder-blog.jpg'),
            author: blog.authorname || blog.author || 'Big Boy Toyz Team',
            publishedDate: blog.added ? new Date(parseInt(blog.added) * 1000).toLocaleDateString() : 'Recently Published',
            category: blog.cid || blog.category || '',
            views: blog.total_views || blog.views || 0,
            status: blog.status || 'active',
            published: blog.published === '1',
            slug: blog.posturl || blog.slug || `blog-${blog.id}`,
            metaTitle: blog.metatitle || blog.title,
            metaDescription: blog.metadesc || blog.description,
            tags: blog.posttags || blog.tags || ''
          }
        };
      }
      return { success: false, blog: null };
    } catch (error) {
      console.error('Error fetching blog:', error);
      return { success: false, blog: null };
    }
  },
  
  getBySlug: async (slug) => {
    return fetchAPI(`/blogs/slug/${slug}`);
  },
  
  getRelated: async (blogId, limit = 4) => {
    return fetchAPI(`/blogs/${blogId}/related?limit=${limit}`);
  },
  
  getCategories: async () => {
    return fetchAPI('/blogs/categories');
  },
  
  getByCategory: async (categoryId, page = 1, limit = 12) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      category: categoryId
    });
    
    return fetchAPI(`/blogs?${params.toString()}`);
  },
  
  search: async (query, page = 1, limit = 12) => {
    const params = new URLSearchParams({
      q: query,
      page: page.toString(),
      limit: limit.toString()
    });
    
    return fetchAPI(`/blogs/search?${params.toString()}`);
  }
};

export const wallpapersAPI = {
  getAll: async (page = 1, limit = 12) => {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString()
      });
      
      const response = await fetchAPI(`/wallpapers?${params.toString()}`);
      
      if (response && response.data) {
        const wallpapers = response.data.map(wallpaper => {
          // Construct the correct CDN URLs for wallpaper images
          const baseCDN = 'https://cdn.bigboytoyz.com/new-version/wallpapers/';
          
          // Create download options with real URLs
          const downloadOptions = [];
          
          if (wallpaper.android) {
            downloadOptions.push({
              title: 'Android',
              dimension: 'Mobile',
              url: `${baseCDN}${wallpaper.android}`,
              filename: wallpaper.android
            });
          }
          
          if (wallpaper.iphone) {
            downloadOptions.push({
              title: 'iPhone',
              dimension: 'Mobile',
              url: `${baseCDN}${wallpaper.iphone}`,
              filename: wallpaper.iphone
            });
          }
          
          if (wallpaper.iphonex) {
            downloadOptions.push({
              title: 'iPhone X',
              dimension: 'Mobile',
              url: `${baseCDN}${wallpaper.iphonex}`,
              filename: wallpaper.iphonex
            });
          }
          
          if (wallpaper.dversion1) {
            downloadOptions.push({
              title: 'Desktop HD',
              dimension: 'HD',
              url: `${baseCDN}${wallpaper.dversion1}`,
              filename: wallpaper.dversion1
            });
          }
          
          if (wallpaper.dversion2) {
            downloadOptions.push({
              title: 'Desktop FHD',
              dimension: 'FHD',
              url: `${baseCDN}${wallpaper.dversion2}`,
              filename: wallpaper.dversion2
            });
          }
          
          if (wallpaper.dversion3) {
            downloadOptions.push({
              title: 'Desktop 4K',
              dimension: '4K',
              url: `${baseCDN}${wallpaper.dversion3}`,
              filename: wallpaper.dversion3
            });
          }
          
          if (wallpaper.others) {
            downloadOptions.push({
              title: 'Others',
              dimension: 'Other',
              url: `${baseCDN}${wallpaper.others}`,
              filename: wallpaper.others
            });
          }
          
          return {
            id: wallpaper.id_ || wallpaper.id,
            _id: wallpaper.id_ || wallpaper.id,
            title: wallpaper.title || 'Wallpaper',
            description: wallpaper.fulldesc || wallpaper.contenttext || '',
            // Use featuredimage for thumbnails
            thumbnail: wallpaper.featuredimage ? `${baseCDN}${wallpaper.featuredimage}` : '/images/placeholder-wallpaper.jpg',
            image: wallpaper.featuredimage ? `${baseCDN}${wallpaper.featuredimage}` : '/images/placeholder-wallpaper.jpg',
            popupThumbnail: wallpaper.featuredimage ? `${baseCDN}${wallpaper.featuredimage}` : '/images/placeholder-wallpaper.jpg',
            // Author and social info
            author: wallpaper.photographer_name || 'Big Boy Toyz',
            instagramName: wallpaper.photographer_name || 'Big Boy Toyz',
            instagramLink: wallpaper.linkedin || 'https://www.instagram.com/bigboytoyz_india/',
            // Stats and metadata
            views: parseInt(wallpaper.total_views || '0'),
            status: wallpaper.status || 'active',
            added: wallpaper.added || wallpaper.postdate,
            modified: wallpaper.modified,
            postdate: wallpaper.postdate,
            // Download options with real CDN URLs
            downloadOptions: downloadOptions,
            // Raw data for download popup
            rawData: {
              android: wallpaper.android ? `${baseCDN}${wallpaper.android}` : null,
              iphone: wallpaper.iphone ? `${baseCDN}${wallpaper.iphone}` : null,
              iphonex: wallpaper.iphonex ? `${baseCDN}${wallpaper.iphonex}` : null,
              dversion1: wallpaper.dversion1 ? `${baseCDN}${wallpaper.dversion1}` : null,
              dversion2: wallpaper.dversion2 ? `${baseCDN}${wallpaper.dversion2}` : null,
              dversion3: wallpaper.dversion3 ? `${baseCDN}${wallpaper.dversion3}` : null,
              others: wallpaper.others ? `${baseCDN}${wallpaper.others}` : null
            }
          };
        });

        return {
          success: true,
          wallpapers,
          data: wallpapers, // For backward compatibility
          meta: {
            total: response.meta?.total || wallpapers.length,
            page: response.meta?.page || page,
            limit: response.meta?.limit || limit,
            totalPages: response.meta?.totalPages || Math.ceil((response.meta?.total || wallpapers.length) / limit),
            hasNextPage: (response.meta?.page || page) < (response.meta?.totalPages || 1)
          }
        };
      }
      
      return { 
        success: false, 
        wallpapers: [], 
        data: [],
        meta: { total: 0, page: 1, limit, totalPages: 0, hasNextPage: false } 
      };
    } catch (error) {
      console.error('Error fetching wallpapers:', error);
      return { 
        success: false, 
        wallpapers: [], 
        data: [],
        meta: { total: 0, page: 1, limit, totalPages: 0, hasNextPage: false } 
      };
    }
  },

  getOne: async (id) => {
    try {
      // Get all wallpapers and find the specific one
      const response = await wallpapersAPI.getAll(1, 100);
      
      if (response && response.success && response.wallpapers) {
        const wallpaper = response.wallpapers.find(w => w.id == id || w._id == id);
        
        if (wallpaper) {
          return {
            success: true,
            wallpaper: wallpaper
          };
        }
      }
      
      return { success: false, wallpaper: null };
    } catch (error) {
      console.error('Error fetching wallpaper:', error);
      return { success: false, wallpaper: null };
    }
  },

  getStats: async () => {
    try {
      const response = await fetchAPI('/wallpapers/stats');
      return response;
    } catch (error) {
      console.error('Error fetching wallpaper stats:', error);
      return null;
    }
  },

  incrementViewCount: async (id) => {
    try {
      const response = await fetchAPI(`/wallpapers/${id}/view`, {
        method: 'POST'
      });
      return response;
    } catch (error) {
      console.error('Error incrementing view count:', error);
      return null;
    }
  }
};

export const autoguidesAPI = {
  getAll: async (page = 1, limit = 12, type = '') => {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString()
      });
      
      if (type) params.append('type', type);
      
      const response = await fetchAPI(`/autoguides?${params.toString()}`);
      
      // Backend returns: { autoguides: [...], meta: { total, page, limit, totalPages, hasNextPage, hasPrevPage } }
      if (response && response.autoguides) {
        // Map the autoguides data to frontend format with correct field names
        const mappedGuides = response.autoguides.map(guide => {
          // Construct the correct CDN URLs for guide images
          const baseCDN = 'https://cdn.bigboytoyz.com/new-version/article/';
          
          return {
            id: guide.id_ || guide.id,
            _id: guide.id_ || guide.id,
            title: guide.title || 'Auto Guide',
            description: guide.fulldesc || guide.contenttext || '',
            content: guide.contenttext || '',
            thumbnail: guide.featuredimage ? `${baseCDN}${guide.featuredimage}` : '/images/bbt-world-item-1.webp',
            author: 'Big Boy Toyz Team',
            publishedDate: guide.displaydate ? new Date(guide.displaydate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) : (guide.added ? new Date(parseInt(guide.added) * 1000).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) : 'Recently Published'),
            category: 'General',
            type: guide.guidetype || 'general',
            tags: '',
            views: parseInt(guide.total_views || '0'),
            status: guide.status || 'active',
            published: guide.published === '1',
            slug: guide.posturl || `guide-${guide.id_ || guide.id}`,
            metaTitle: guide.metatitle || guide.title,
            metaDescription: guide.metadesc || guide.fulldesc || guide.contenttext,
            metaKeywords: guide.metakeyword || '',
            imgalt: guide.imgalt || guide.title,
            added: guide.added,
            modified: guide.modified
          };
        });
        
        return {
          success: true,
          autoguides: mappedGuides,
          data: mappedGuides, // For backward compatibility
          total: response.meta?.total || mappedGuides.length,
          totalCount: response.meta?.total || mappedGuides.length,
          currentPage: response.meta?.page || page,
          totalPages: response.meta?.totalPages || 1,
          hasNextPage: response.meta?.hasNextPage || false,
          hasPrevPage: response.meta?.hasPrevPage || false
        };
      }
      
      return {
        success: false,
        autoguides: [],
        data: [],
        total: 0,
        totalCount: 0,
        currentPage: page,
        totalPages: 1
      };
    } catch (error) {
      console.error('Error fetching autoguides:', error);
      return {
        success: false,
        autoguides: [],
        data: [],
        total: 0,
        totalCount: 0,
        currentPage: page,
        totalPages: 1
      };
    }
  },
  
  getOne: async (id) => {
    return fetchAPI(`/autoguides/${id}`);
  },
  
  getById: async (id) => {
    try {
      const response = await fetchAPI(`/autoguides/${id}`);
      
      if (response && response.autoguide) {
        const guide = response.autoguide;
        // Construct the correct CDN URLs for guide images
        const baseCDN = 'https://cdn.bigboytoyz.com/new-version/article/';
        
        const formattedGuide = {
          id: guide.id_ || guide.id,
          _id: guide.id_ || guide.id,
          title: guide.title || 'Auto Guide',
          description: guide.fulldesc || guide.contenttext || '',
          content: guide.contenttext || '',
          thumbnail: guide.featuredimage ? `${baseCDN}${guide.featuredimage}` : '/images/bbt-world-item-1.webp',
          author: 'Big Boy Toyz Team',
          publishedDate: guide.displaydate ? new Date(guide.displaydate).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }) : (guide.added ? new Date(parseInt(guide.added) * 1000).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }) : 'Recently Published'),
          category: 'General',
          type: guide.guidetype || 'general',
          tags: '',
          views: parseInt(guide.total_views || '0'),
          status: guide.status || 'active',
          published: guide.published === '1',
          slug: guide.posturl || `guide-${guide.id_ || guide.id}`,
          metaTitle: guide.metatitle || guide.title,
          metaDescription: guide.metadesc || guide.fulldesc || guide.contenttext,
          metaKeywords: guide.metakeyword || '',
          imgalt: guide.imgalt || guide.title,
          added: guide.added,
          modified: guide.modified
        };
        
        return {
          success: true,
          autoguide: formattedGuide
        };
      }
      
      return {
        success: false,
        autoguide: null
      };
    } catch (error) {
      console.error('Error fetching autoguide by ID:', error);
      return {
        success: false,
        autoguide: null
      };
    }
  },
  
  getBySlug: async (slug) => {
    try {
      // Get all guides and find by slug since backend doesn't have slug endpoint
      const response = await fetchAPI('/autoguides?limit=100'); // Get more to find the right one
      
      if (response && response.autoguides) {
        // Find guide by slug (posturl)
        const guide = response.autoguides.find(g => 
          g.posturl === slug || 
          g.posturl === decodeURIComponent(slug) ||
          (g.id_ && g.id_.toString() === slug) ||
          (g.id && g.id.toString() === slug)
        );
        
        if (guide) {
          // Construct the correct CDN URLs for guide images
          const baseCDN = 'https://cdn.bigboytoyz.com/new-version/article/';
          
          const formattedGuide = {
            id: guide.id_ || guide.id,
            _id: guide.id_ || guide.id,
            title: guide.title || 'Auto Guide',
            description: guide.fulldesc || guide.contenttext || '',
            content: guide.contenttext || '',
            thumbnail: guide.featuredimage ? `${baseCDN}${guide.featuredimage}` : '/images/bbt-world-item-1.webp',
            author: 'Big Boy Toyz Team',
            publishedDate: guide.displaydate ? new Date(guide.displaydate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) : (guide.added ? new Date(parseInt(guide.added) * 1000).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) : 'Recently Published'),
            category: 'General',
            type: guide.guidetype || 'general',
            tags: '',
            views: parseInt(guide.total_views || '0'),
            status: guide.status || 'active',
            published: guide.published === '1',
            slug: guide.posturl || `guide-${guide.id_ || guide.id}`,
            metaTitle: guide.metatitle || guide.title,
            metaDescription: guide.metadesc || guide.fulldesc || guide.contenttext,
            metaKeywords: guide.metakeyword || '',
            imgalt: guide.imgalt || guide.title,
            added: guide.added,
            modified: guide.modified
          };
          
          return {
            success: true,
            autoguide: formattedGuide
          };
        }
      }
      
      return {
        success: false,
        autoguide: null
      };
    } catch (error) {
      console.error('Error fetching autoguide by slug:', error);
      return {
        success: false,
        autoguide: null
      };
    }
  },
  
  getTypes: async () => {
    try {
      const response = await fetchAPI('/autoguides/types');
      if (response && Array.isArray(response)) {
        return {
          success: true,
          types: response
        };
      }
      return {
        success: false,
        types: []
      };
    } catch (error) {
      console.error('Error fetching guide types:', error);
      return {
        success: false,
        types: []
      };
    }
  },
  
  getStats: async () => {
    try {
      const response = await fetchAPI('/autoguides/stats');
      if (response && response.totalGuides !== undefined) {
        return {
          success: true,
          stats: {
            totalGuides: response.totalGuides || 0,
            totalViews: response.totalViews || 0,
            totalTypes: response.guideTypeStats?.length || 0,
            publishedGuides: response.publishedGuides || 0,
            draftGuides: response.draftGuides || 0,
            guideTypeStats: response.guideTypeStats || []
          }
        };
      }
      return {
        success: false,
        stats: {
          totalGuides: 0,
          totalViews: 0,
          totalTypes: 0
        }
      };
    } catch (error) {
      console.error('Error fetching autoguides stats:', error);
      return {
        success: false,
        stats: {
          totalGuides: 0,
          totalViews: 0,
          totalTypes: 0
        }
      };
    }
  }
};

export const videosAPI = {
  getAll: async (page = 1, limit = 12) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString()
    });
    
    return fetchAPI(`/videos?${params.toString()}`);
  },
  
  getOne: async (id) => {
    return fetchAPI(`/videos/${id}`);
  },
  
  getStats: async () => {
    return fetchAPI('/videos/stats');
  }
};

// Sell Car Contents API
export const sellCarContentsAPI = {
  getAll: async (page = 1, limit = 50) => {
    const params = new URLSearchParams({ page: page.toString(), limit: limit.toString() });
    return fetchAPI(`/sellcarcontents?${params.toString()}`);
  },

  getOne: async (id) => {
    return fetchAPI(`/sellcarcontents/${id}`);
  },

  getByBrandId: async (brandId) => {
    try {
      const response = await fetchAPI(`/sellcarcontents/brand/${brandId}`);
      if (!response) return { success: false, sellCarContent: null };
      // Map image URLs to full CDN paths
      const baseCDN = 'https://cdn.bigboytoyz.com/new-version/sellcarcontents/';
      const mapped = {
        id: response.id_ || response.id,
        bid: response.bid,
        bannerimg: response.bannerimg ? `${baseCDN}${response.bannerimg}` : null,
        sellcarlogo: response.sellcarlogo ? `${baseCDN}${response.sellcarlogo}` : null,
        logocontent: response.logocontent || '',
        shortdescription: response.shortdescription || '',
        description: response.description || '',
        metatitle: response.metatitle || '',
        metakeyword: response.metakeyword || '',
        metadesc: response.metadesc || ''
      };
      return { success: true, sellCarContent: mapped };
    } catch (error) {
      console.error('Error fetching sell car content by brand:', error);
      return { success: false, sellCarContent: null };
    }
  }
};

export const carnewsAPI = {
  getAll: async (page = 1, limit = 12) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString()
    });
    
    return fetchAPI(`/carnews?${params.toString()}`);
  },
  
  getOne: async (id) => {
    return fetchAPI(`/carnews/${id}`);
  },
  
  getStats: async () => {
    return fetchAPI('/carnews/stats');
  }
};

export const storiesAPI = {
  getAll: async (page = 1, limit = 12) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString()
    });
    
    return fetchAPI(`/stories?${params.toString()}`);
  },
  
  getOne: async (id) => {
    return fetchAPI(`/stories/${id}`);
  },
  
  getStats: async () => {
    return fetchAPI('/stories/stats');
  }
};

export const teamAPI = {
  getAll: async () => {
    return fetchAPI('/teammanagements');
  },
  
  getOne: async (id) => {
    return fetchAPI(`/teammanagements/${id}`);
  }
};

export const careersAPI = {
  getAll: async (page = 1, limit = 10) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString()
    });
    
    // Fetch fresh data (no cache) to ensure latest sorting order
    const url = `${API_BASE_URL}/careers?${params.toString()}`;
    const response = await fetch(url, {
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) throw new Error('Failed to fetch careers');
    return response.json();
  },
  
  getOne: async (id) => {
    return fetchAPI(`/careers/${id}`);
  }
};

export const cmsPagesAPI = {
  getAll: async () => {
    return fetchAPI('/cmspages');
  },
  
  getOne: async (id) => {
    return fetchAPI(`/cmspages/${id}`);
  },
  
  getBySlug: async (slug) => {
    return fetchAPI(`/cmspages/slug/${slug}`);
  }
};

export const paymentsAPI = {
  createOrder: async (orderData) => {
    return fetchAPI('/payments/create-order', {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
  },
  
  verifyPayment: async (orderId) => {
    return fetchAPI('/payments/verify-payment', {
      method: 'POST',
      body: JSON.stringify({ orderId })
    });
  },
  
  getOrder: async (orderId) => {
    return fetchAPI(`/payments/order/${orderId}`);
  }
};

// Auction API - Live items (cars, watches, car numbers, mobile numbers)
export const auctionsAPI = {
  getLiveItems: async () => {
    return fetchAPI('/auctions/live-items');
  },
};