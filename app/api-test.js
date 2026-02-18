// Simple API test script
import axios from 'axios';

// Test different endpoints to find which ones work
export async function testProductEndpoints() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
  
  console.log('Testing basic product endpoints...');
  
  const endpoints = [
    '/products',
    '/products/with-relations',
    '/products/collection',
    '/products/featured'
  ];
  
  const results = {};
  
  for (const endpoint of endpoints) {
    try {
      console.log(`Testing ${endpoint}...`);
      const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
        timeout: 5000
      });
      
      results[endpoint] = {
        status: response.status,
        success: true,
        dataSize: response.data?.products?.length || response.data?.data?.length || 0,
        time: new Date().toISOString()
      };
      
      console.log(`✅ ${endpoint} - Success: ${results[endpoint].dataSize} items`);
    } catch (error) {
      results[endpoint] = {
        status: error.response?.status,
        success: false,
        error: error.message,
        time: new Date().toISOString()
      };
      
      console.log(`❌ ${endpoint} - Error: ${error.message}`);
    }
  }
  
  console.log('Test results:', results);
  return results;
}

// Mock data for development and fallback
export const mockProducts = [
  {
    id_: '1001',
    proname: 'Ferrari 488 GTB',
    proprice: '29500000',
    prospprice: '27900000',
    prolistimage: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=500&h=300',
    regstate: 'Delhi',
    brandid: '101',
    brand: { name: 'Ferrari' },
    bmodelid: '1001',
    booked: 'no',
    stock: 'yes',
    certified: 'yes',
    featured: 'yes',
    popular: 'yes',
    category: 'sports',
    vehicle_type: 'car',
    km_driven: '3500',
    fueltype: 'Petrol',
    regdate: '2021',
    silentfeatures: 'Twin-Turbo V8~670 HP~760 Nm Torque~0-100 km/h in 3.0s',
    paidfeatures: 'Carbon Fiber Trim~Racing Seats~Premium Sound System~Track Telemetry',
    imgalt: 'Ferrari 488 GTB Red Supercar'
  },
  {
    id_: '1002',
    proname: 'Lamborghini Huracan Evo',
    proprice: '34500000',
    prospprice: '32900000',
    prolistimage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&h=300',
    regstate: 'Maharashtra',
    brandid: '102',
    brand: { name: 'Lamborghini' },
    bmodelid: '1002',
    booked: 'no',
    stock: 'yes',
    certified: 'yes',
    featured: 'yes',
    popular: 'yes',
    category: 'sports',
    vehicle_type: 'car',
    km_driven: '2800',
    fueltype: 'Petrol',
    regdate: '2022',
    silentfeatures: 'Naturally Aspirated V10~640 HP~600 Nm Torque~0-100 km/h in 2.9s',
    paidfeatures: 'Alcantara Interior~Carbon Ceramic Brakes~Lifting System~Sensonum Audio',
    imgalt: 'Lamborghini Huracan Evo Yellow Supercar'
  },
  {
    id_: '1003',
    proname: 'Porsche 911 Turbo S',
    proprice: '19900000',
    prospprice: '18500000',
    prolistimage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=300',
    regstate: 'Haryana',
    brandid: '103',
    brand: { name: 'Porsche' },
    bmodelid: '1003',
    booked: 'no',
    stock: 'yes',
    certified: 'yes',
    featured: 'yes',
    popular: 'yes',
    category: 'sports',
    vehicle_type: 'car',
    km_driven: '1200',
    fueltype: 'Petrol',
    regdate: '2023',
    silentfeatures: 'Twin-Turbo Flat-Six~650 HP~800 Nm Torque~0-100 km/h in 2.7s',
    paidfeatures: 'Sport Chrono Package~Burmester Sound System~Rear Axle Steering~Sport Exhaust',
    imgalt: 'Porsche 911 Turbo S Silver Sports Car'
  },
  {
    id_: '1004',
    proname: 'Mercedes-Benz S-Class',
    proprice: '15500000',
    prospprice: '14800000',
    prolistimage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300',
    regstate: 'Delhi',
    brandid: '104',
    brand: { name: 'Mercedes-Benz' },
    bmodelid: '1004',
    booked: 'no',
    stock: 'yes',
    certified: 'yes',
    featured: 'yes',
    popular: 'yes',
    category: 'luxury',
    vehicle_type: 'car',
    km_driven: '5000',
    fueltype: 'Petrol',
    regdate: '2022',
    silentfeatures: '4.0L V8 Biturbo~496 HP~700 Nm Torque~0-100 km/h in 4.9s',
    paidfeatures: 'Burmester 4D Surround Sound~Rear Seat Entertainment~MBUX Interior Assistant~Energizing Comfort',
    imgalt: 'Mercedes-Benz S-Class Black Luxury Sedan'
  },
  {
    id_: '1005',
    proname: 'BMW M5 Competition',
    proprice: '17500000',
    prospprice: '16800000',
    prolistimage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300',
    regstate: 'Karnataka',
    brandid: '105',
    brand: { name: 'BMW' },
    bmodelid: '1005',
    booked: 'no',
    stock: 'yes',
    certified: 'yes',
    featured: 'yes',
    popular: 'yes',
    category: 'sports',
    vehicle_type: 'car',
    km_driven: '8000',
    fueltype: 'Petrol',
    regdate: '2021',
    silentfeatures: '4.4L Twin-Turbo V8~625 HP~750 Nm Torque~0-100 km/h in 3.3s',
    paidfeatures: 'M Driver\'s Package~Bowers & Wilkins Sound~Carbon Ceramic Brakes~M Sport Exhaust',
    imgalt: 'BMW M5 Competition Blue Performance Sedan'
  },
  {
    id_: '1006',
    proname: 'Audi RS7 Sportback',
    proprice: '19800000',
    prospprice: '18900000',
    prolistimage: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&h=300',
    regstate: 'Delhi',
    brandid: '106',
    brand: { name: 'Audi' },
    bmodelid: '1006',
    booked: 'no',
    stock: 'yes',
    certified: 'yes',
    featured: 'yes',
    popular: 'yes',
    category: 'sports',
    vehicle_type: 'car',
    km_driven: '6500',
    fueltype: 'Petrol',
    regdate: '2022',
    silentfeatures: '4.0L Twin-Turbo V8~600 HP~800 Nm Torque~0-100 km/h in 3.6s',
    paidfeatures: 'Bang & Olufsen 3D Sound~RS Sport Suspension~Night Vision Assistant~HD Matrix LED Headlights',
    imgalt: 'Audi RS7 Sportback Red Performance Car'
  },
];

// Add this helper function to ensure consistent image URL handling for both real and mock data
export function ensureFullImageUrl(imageUrl) {
  if (!imageUrl) return '';
  
  // If it's a full URL, return it as is
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  
  // If it's a relative path, prepend the image base URL
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || 'http://localhost:3001';
  return `${baseUrl}/${imageUrl.replace(/^\//, '')}`;
}

// Add this after the mockProducts array
// Process each mock product to ensure consistent image URLs
mockProducts.forEach(product => {
  // Ensure main list image has full URL
  if (product.prolistimage && !product.prolistimage.startsWith('http')) {
    product.prolistimage = ensureFullImageUrl(product.prolistimage);
  }
  
  // If the product has images array, process them
  if (product.images && Array.isArray(product.images)) {
    product.images = product.images.map(img => {
      if (typeof img === 'string') {
        return ensureFullImageUrl(img);
      }
      if (img.pgalimage) {
        img.pgalimage = ensureFullImageUrl(img.pgalimage);
      }
      if (img.url) {
        img.url = ensureFullImageUrl(img.url);
      }
      return img;
    });
  }
});

// Update the GET function to handle images consistently
export async function getProducts(page = 1, limit = 12) {
  try {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
    
    try {
      console.log('Attempting to fetch real products from API...');
      const response = await axios.get(`${API_BASE_URL}/products`, {
        timeout: 5000
      });
      
      if (response.data?.products && response.data.products.length > 0) {
        console.log(`Found ${response.data.products.length} real products from API`);
        
        // Process image URLs 
        const processedProducts = response.data.products.map(product => {
          // Ensure main list image has full URL
          if (product.prolistimage) {
            product.prolistimage = ensureFullImageUrl(product.prolistimage);
          }
          
          // If the product has images array, ensure full URLs
          if (product.images && Array.isArray(product.images)) {
            product.images = product.images.map(img => {
              if (typeof img === 'string') {
                return ensureFullImageUrl(img);
              }
              if (img.pgalimage) {
                img.pgalimage = ensureFullImageUrl(img.pgalimage);
              }
              if (img.url) {
                img.url = ensureFullImageUrl(img.url);
              }
              return img;
            });
          }
          
          return product;
        });
        
        // Basic client-side pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedProducts = processedProducts.slice(startIndex, endIndex);
        
        return {
          data: paginatedProducts,
          totalCount: processedProducts.length,
          totalPages: Math.ceil(processedProducts.length / limit)
        };
      } else {
        console.log('API returned empty or invalid response, using mock data');
        throw new Error('Invalid response format');
      }
    } catch (error) {
      // If API call fails or returns invalid data, use mock data as fallback
      console.log('Using mock data as fallback:', error.message);
      
      // Basic pagination for mock data
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedProducts = mockProducts.slice(startIndex, endIndex);
      
      return {
        data: paginatedProducts,
        totalCount: mockProducts.length,
        totalPages: Math.ceil(mockProducts.length / limit),
        isMockData: true
      };
    }
  } catch (error) {
    console.error('Error in getProducts:', error);
    
    // Final fallback - empty data
    return { data: [], totalCount: 0, totalPages: 0 };
  }
}

// Default export the test function
export default testProductEndpoints;
