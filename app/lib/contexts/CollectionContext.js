"use client";
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// Create the context
const CollectionContext = createContext();

// Hook to use the collection context
export function useCollectionContext() {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error('useCollectionContext must be used within a CollectionProvider');
  }
  return context;
}

// Hook to use the collection context that returns null if not available (for optional usage)
export function useCollectionContextOptional() {
  const context = useContext(CollectionContext);
  return context; // Returns null if no provider
}

// Provider component
export function CollectionProvider({ children, initialFilters = {} }) {
  // Load filters from sessionStorage if available, but disregard if initialFilters (from URL) has any keys
  function getInitialFilters() {
    const hasUrlFilters = initialFilters && Object.keys(initialFilters).length > 0 && Object.values(initialFilters).some(v => v !== undefined && v !== '');
    if (hasUrlFilters) {
      return initialFilters;
    }
    if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem('collectionFilters');
        if (stored) {
          return { ...initialFilters, ...JSON.parse(stored) };
        }
      } catch (e) {
        // ignore
      }
    }
    return initialFilters;
  }

  // Sorting state
  const [sortBy, setSortBy] = useState(''); // Default: no sort
  const [sortOrder, setSortOrder] = useState(''); // Default: no order
  const [sortTitle, setSortTitle] = useState('Sort by'); // Default label

  // Filter state - initialize with URL parameters if provided, or localStorage
  const [filters, setFilters] = useState(getInitialFilters());

  // Top list IDs to exclude from bottom list
  const [topIds, setTopIds] = useState([]);

  // Persist filters to sessionStorage whenever they change (clears on tab close)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('collectionFilters', JSON.stringify(filters));
      } catch (e) {
        // ignore
      }
    }
  }, [filters]);

  // Update sorting
  const updateSort = useCallback((field, order, title) => {
    setSortBy(field);
    setSortOrder(order);
    setSortTitle(title);
  }, []);

  // Sort handlers for specific types
  const sortByPrice = useCallback((order) => {
    const title = order === 'asc' ? 'Low to High' : 'High to Low';
    updateSort('proprice_numeric', order, title);
  }, [updateSort]);

  // Reset sorting to default
  const resetSort = useCallback(() => {
    setSortBy('');
    setSortOrder('');
    setSortTitle('Sort by');
  }, []);

  // Update filters
  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  // Remove a specific filter
  const removeFilter = useCallback((filterKey) => {
    setFilters(prev => {
      const updated = { ...prev };
      // Handle compound filters
      if (filterKey === 'price') {
        updated.minPrice = '';
        updated.maxPrice = '';
        updated.priceMin = '';
        updated.priceMax = '';
      } else if (filterKey === 'year') {
        updated.yearFrom = '';
        updated.yearTo = '';
      } else if (filterKey === 'km') {
        updated.kmFrom = '';
        updated.kmTo = '';
      } else {
        updated[filterKey] = '';
      }
      return updated;
    });
  }, []);

  // Reset filters
  const resetFilters = useCallback(() => {
    setFilters({
      category: '',
      brand: '',
      styles: '',
      priceMin: '',
      priceMax: '',
      minPrice: '',
      maxPrice: '',
      yearFrom: '',
      yearTo: '',
      fuelType: '',
      state: '',
      kmFrom: '',
      kmTo: '',
      vehicleType: ''
    });
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem('collectionFilters');
      } catch (e) {
        // ignore
      }
    }
  }, []);

  // Reset all (sorting and filters)
  const resetAll = useCallback(() => {
    resetSort();
    resetFilters();
  }, [resetSort, resetFilters]);

  const updateTopIds = useCallback((ids) => {
    setTopIds(ids || []);
  }, []);

  const value = {
    // Sorting state
    sortBy,
    sortOrder,
    sortTitle,
    
    // Filter state
    filters,
    
    // Top list ids
    topIds,
    updateTopIds,
    
    // Sorting actions
    updateSort,
    sortByPrice,
    resetSort,
    
    // Filter actions
    updateFilters,
    removeFilter,
    resetFilters,
    
    // Combined actions
    resetAll
  };

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
} 