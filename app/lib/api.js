// Base API service for making requests to the backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Brands API
export const brandsAPI = {
  getAllBrands: async () => {
    const response = await fetch(`${API_BASE_URL}/brands`);
    return response.json();
  },
  
  getAllBrandsWithModels: async () => {
    const response = await fetch(`${API_BASE_URL}/brands/with-models`);
    return response.json();
  },
  
  getBrandById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/brands/${id}`);
    return response.json();
  },
  
  getBrandWithModels: async (id) => {
    const response = await fetch(`${API_BASE_URL}/brands/${id}/with-models`);
    return response.json();
  },

  getAllBrandCities: async () => {
    const response = await fetch(`${API_BASE_URL}/brands/cities`);
    return response.json();
  },

  getCitiesByBrandName: async (brandName) => {
    const response = await fetch(`${API_BASE_URL}/brands/${brandName}/cities`);
    return response.json();
  },

  getBrandInCity: async (brandName, cityName) => {
    const response = await fetch(`${API_BASE_URL}/brands/${brandName}/city/${cityName}`);
    return response.json();
  },

  getBrandModelInCity: async (brandName, modelName, cityName) => {
    const response = await fetch(`${API_BASE_URL}/brands/${brandName}/models/${modelName}/city/${cityName}`);
    return response.json();
  },
}; 