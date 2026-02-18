import { useState, useEffect } from 'react';
import { productsService } from '../services/products';
import { brandsAPI, categoriesAPI } from '../services/api';

/**
 * Hook to fetch and manage UI assets (logos, icons, etc.)
 * @returns {Object} UI assets and loading state
 */
export function useUIAssets() {
  const [assets, setAssets] = useState({
    // Default assets while loading
    logo: '/images/logo.webp',
    callIcon: '/images/call-icon.svg',
    whatsappIcon: '/images/whatsapp-icon.svg',
    kmIcon: '/images/km-icon-black.webp',
    fuelIcon: '/images/gas-icon-black.webp',
    registerIcon: '/images/register-icon.svg',
    certifiedBadge: '/images/bbt-certified-icon.webp',
    bookedBadge: '/images/collection-booked.webp',
    soldBadge: '/images/collection-sold.webp',
    placeholderCar: 'https://cdn.bigboytoyz.com/new-version/placeholder-car.png'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get UI assets from the products service
    try {
      // Since getUIAssets now returns the assets directly (not in a response object)
      // and doesn't make an API call, we can just call it synchronously
      const uiAssets = productsService.getUIAssets();
      setAssets(uiAssets);
    } catch (err) {
      console.error('Error loading UI assets:', err);
      setError(err.message);
    }
  }, []);

  return { assets, isLoading, error };
}

/**
 * Hook to fetch brands data from the API
 * @returns {Object} Brands data and loading state
 */
export function useBrands() {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBrands() {
      try {
        setIsLoading(true);
        const response = await brandsAPI.getAllWithModels();
        
        if (response && response.brands) {
          setBrands(response.brands);
        } else {
          console.warn('Failed to load brands data');
        }
        
        setError(null);
      } catch (err) {
        console.error('Error loading brands:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchBrands();
  }, []);

  return { brands, isLoading, error };
}

/**
 * Hook to fetch categories data from the API
 * @returns {Object} Categories data and loading state
 */
export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoading(true);
        const response = await categoriesAPI.getAll();
        
        if (response && response.categories) {
          setCategories(response.categories);
        } else {
          console.warn('Failed to load categories data');
        }
        
        setError(null);
      } catch (err) {
        console.error('Error loading categories:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchCategories();
  }, []);

  return { categories, isLoading, error };
}

export default useUIAssets; 