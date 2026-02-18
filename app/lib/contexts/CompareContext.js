"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// Create the context
const CompareContext = createContext();

// Hook to use the compare context
export function useCompareContext() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompareContext must be used within a CompareProvider');
  }
  return context;
}

// Hook to use the compare context that returns null if not available (for optional usage)
export function useCompareContextOptional() {
  const context = useContext(CompareContext);
  return context; // Returns null if no provider
}

// Provider component
export function CompareProvider({ children }) {
  const [compareList, setCompareList] = useState([]);
  const [toast, setToast] = useState(null);
  const [toastTimeout, setToastTimeout] = useState(null);
  const router = useRouter();

  // Load saved comparison from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('compareCarsList');
      if (stored) {
        const savedCars = JSON.parse(stored);
        if (Array.isArray(savedCars) && savedCars.length > 0) {
          setCompareList(savedCars);
        }
      }
    } catch (error) {
      console.error('Error loading saved comparison:', error);
    }
  }, []);

  // Save to localStorage whenever compareList changes
  useEffect(() => {
    try {
      localStorage.setItem('compareCarsList', JSON.stringify(compareList));
    } catch (error) {
      console.error('Error saving comparison to localStorage:', error);
    }
  }, [compareList]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }
    };
  }, [toastTimeout]);

  // Show toast notification
  const showToast = useCallback((message, type = 'info', actionText = null, actionCallback = null) => {
    // Clear any existing timeout
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }
    
    setToast({ message, type, actionText, actionCallback });
    
    // Auto-hide toast after 3 seconds regardless of action button
    const timeout = setTimeout(() => {
      setToast(null);
      setToastTimeout(null);
    }, 3000);
    
    setToastTimeout(timeout);
  }, [toastTimeout]);

  // Hide toast
  const hideToast = useCallback(() => {
    // Clear timeout when manually closing
    if (toastTimeout) {
      clearTimeout(toastTimeout);
      setToastTimeout(null);
    }
    setToast(null);
  }, [toastTimeout]);

  // Add car to comparison
  const addToCompare = useCallback((carData) => {
    if (!carData || !carData.id) {
      showToast('Invalid car data', 'error');
      return { success: false, message: 'Invalid car data' };
    }

    // Create a car object compatible with the comparison system
    const carForComparison = {
      id: carData.id || carData._id || carData.mongodb_id,
      title: carData.name || carData.title,
      price: parseFloat(carData.price || carData.specialPrice || 0),
      thumbnail: carData?.images?.[0]?.url || carData?.prolistimage || carData?.thumbnail || '',
      url: carData?.postUrl || carData?.url || '',
      brandId: carData?.brand?.id || carData?.brandId || '',
      brandName: carData?.brand?.name || carData?.brandName || '',
      category: carData?.category || '',
      inStock: carData?.stock === '1' || !carData?.isBooked,
    };

    // Check if car is already in comparison
    const exists = compareList.some(car => car.id === carForComparison.id);

    if (exists) {
      showToast(
        `${carForComparison.title} is already in comparison`,
        'warning',
        'Go to Compare',
        () => {
          router.push('/compare-cars');
          hideToast();
        }
      );
      return { success: false, message: `${carForComparison.title} is already in comparison` };
    }

    // Check if we've reached the maximum
    if (compareList.length >= 4) {
      showToast(
        'You can compare maximum 4 cars at a time',
        'error',
        'Go to Compare',
        () => {
          router.push('/compare-cars');
          hideToast();
        }
      );
      return { success: false, message: 'You can compare maximum 4 cars at a time' };
    }

    // Add to comparison
    const newCompareList = [...compareList, carForComparison];
    setCompareList(newCompareList);

    showToast(
      `${carForComparison.title} added to comparison`,
      'success',
      'Go to Compare',
      () => {
        router.push('/compare-cars');
        hideToast();
      }
    );

    return { 
      success: true, 
      message: `${carForComparison.title} added to comparison successfully!`,
      totalCars: newCompareList.length
    };
  }, [compareList, showToast, hideToast, router]);

  // Remove car from comparison
  const removeFromCompare = useCallback((carId) => {
    const newCompareList = compareList.filter(car => car.id !== carId);
    setCompareList(newCompareList);
    showToast('Car removed from comparison', 'info');
    
    return { success: true, totalCars: newCompareList.length };
  }, [compareList, showToast]);

  // Clear all comparisons
  const clearComparison = useCallback(() => {
    setCompareList([]);
    showToast('All cars removed from comparison', 'info');
    
    // Clear localStorage
    try {
      localStorage.removeItem('compareCarsList');
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }, [showToast]);

  // Navigate to compare page
  const goToCompare = useCallback(() => {
    router.push('/compare-cars');
  }, [router]);

  const value = {
    // State
    compareList,
    compareCount: compareList.length,
    toast,
    maxCompareReached: compareList.length >= 4,
    canCompare: compareList.length > 1,
    
    // Actions
    addToCompare,
    removeFromCompare,
    clearComparison,
    goToCompare,
    showToast,
    hideToast,
  };

  return (
    <CompareContext.Provider value={value}>
      {children}
    </CompareContext.Provider>
  );
} 