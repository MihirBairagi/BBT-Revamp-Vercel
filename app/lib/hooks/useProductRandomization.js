import { useState, useEffect, useCallback, useMemo } from 'react';

/**
 * Custom hook to handle product randomization with sessionStorage persistence
 * Extracted from CollectionListTop to reduce component complexity
 */
export function useProductRandomization(products, isTopList, shouldRandomize, filters) {
  const [randomizedProducts, setRandomizedProducts] = useState([]);
  const [isClientMounted, setIsClientMounted] = useState(false);

  // Build a sessionStorage key that is scoped to list type + sort + filters
  const orderKey = useMemo(() => {
    const base = isTopList ? 'collectionOrder:top' : 'collectionOrder:bottom';
    const f = filters || {};
    const filterKey = JSON.stringify({
      category: f.category || '',
      brand: f.brand || '',
      styles: f.styles || '',
      minPrice: f.minPrice || '',
      maxPrice: f.maxPrice || '',
      yearFrom: f.yearFrom || '',
      yearTo: f.yearTo || '',
      fuelType: f.fuelType || '',
      state: f.state || '',
      kmFrom: f.kmFrom || '',
      kmTo: f.kmTo || '',
      vehicleType: f.vehicleType || '',
    });
    return `${base}:${filterKey}`;
  }, [isTopList, filters]);

  const loadSavedOrder = useCallback(() => {
    try {
      if (typeof window === 'undefined') return null;
      const raw = sessionStorage.getItem(orderKey);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }, [orderKey]);

  const saveOrder = useCallback((ids) => {
    try {
      if (typeof window === 'undefined') return;
      sessionStorage.setItem(orderKey, JSON.stringify(ids));
    } catch (e) {
      // ignore
    }
  }, [orderKey]);

  // Fisher-Yates shuffle for better randomization
  const shuffleArray = useCallback((array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Helper: normalize product id
  const getProductId = useCallback((p) => p?.id || p?.id_ || p?._id || p?.mongodb_id, []);

  // Mount effect
  useEffect(() => {
    setIsClientMounted(true);
  }, []);

  // Randomization + session persistence
  useEffect(() => {
    if (!isClientMounted) return;
    if (!shouldRandomize) {
      setRandomizedProducts([]);
      return;
    }

    const source = products && products.length > 0 ? products : [];

    // Initial mount for this key: load saved order or create and save one
    if (randomizedProducts.length === 0) {
      const saved = loadSavedOrder();
      if (saved && source.length > 0) {
        const idToItem = new Map(source.map((p) => [getProductId(p), p]));
        const ordered = [];
        const seen = new Set();
        
        // Place items by saved order first
        for (const id of saved) {
          const item = idToItem.get(id);
          if (item) {
            ordered.push(item);
            seen.add(id);
          }
        }
        
        // Append any new items not in saved order
        for (const p of source) {
          const id = getProductId(p);
          if (!seen.has(id)) {
            ordered.push(p);
            saved.push(id);
          }
        }
        
        setRandomizedProducts(ordered);
        saveOrder(saved);
      } else if (source.length > 0) {
        const shuffled = shuffleArray(source);
        setRandomizedProducts(shuffled);
        saveOrder(shuffled.map(getProductId));
      }
      return;
    }

    // Subsequent updates: append any new products to state and saved order
    const existingIds = new Set(randomizedProducts.map(getProductId));
    const toAppend = source.filter((p) => !existingIds.has(getProductId(p)));
    if (toAppend.length > 0) {
      setRandomizedProducts((prev) => [...prev, ...toAppend]);
      const saved = loadSavedOrder() || randomizedProducts.map(getProductId);
      const updated = [...saved, ...toAppend.map(getProductId)];
      saveOrder(updated);
    }
  }, [
    isClientMounted,
    shouldRandomize,
    products,
    randomizedProducts,
    loadSavedOrder,
    saveOrder,
    getProductId,
    shuffleArray,
  ]);

  return {
    randomizedProducts,
    isClientMounted,
  };
}
