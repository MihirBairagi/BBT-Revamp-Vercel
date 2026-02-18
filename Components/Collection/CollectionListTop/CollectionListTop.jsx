"use client";
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInfiniteProducts } from "../../../app/lib/hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import { ProductSkeletonGroup } from "../../UI/Skeleton/ProductSkeleton";
import ErrorMessage from "../../UI/Error/ErrorMessage";
import { useCollectionContext } from "../../../app/lib/contexts/CollectionContext";
import NoResults from "../../FilterResults/NoResults/NoResults";
import { useProducts } from "../../../app/lib/hooks/useProducts";
import { getStateQueryFromFilterValue } from "../../../app/lib/constants/registrationStates";
import { pushProductImpressions, pushGoogleAdsViewItemList } from "../../../app/lib/utils/gtm";
import { CarAuctionCard, WatchAuctionCard, NumberPlateAuctionCard } from "../../AuctionProductCards/SingleAuctionCard";
import { auctionsAPI } from "../../../app/lib/services/api";

const CollectionListTop = ({
  initialData,
  isSecondary = false,
  isTopList = false,
  hasActiveFilters = false,
}) => {
  const [isClientMounted, setIsClientMounted] = useState(false);
  const [randomizedProducts, setRandomizedProducts] = useState([]);
  const [randomizedTopProducts, setRandomizedTopProducts] = useState([]);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const isInitialMount = useRef(true);
  const scrollListenerPaused = useRef(false);
  
  // Auction data state
  const [auctionData, setAuctionData] = useState({
    cars: [],
    watches: [],
    carNumbers: [],
    mobileNumbers: [],
    loading: true,
    error: null,
  });

  // console.log('Initial data:', initialData);

  // Get sorting and filter parameters from context
  const { sortBy, sortOrder, filters, topIds, updateTopIds } =
    useCollectionContext();

  // Process images with proper URL handling
  const processImageUrl = (imageUrl, isThumbnail = false) => {
    if (!imageUrl) return null;

    // If already a full URL, return as is
    if (imageUrl.startsWith("http")) {
      return imageUrl;
    }

    const cdnBase = "https://cdn.bigboytoyz.com/new-version/products/";
    if (isThumbnail) {
      // Main product images are in the root products folder
      return `${cdnBase}${imageUrl}`;
    }
    // Gallery images are in a subfolder
    return `${cdnBase}product/${imageUrl}`;
  };

  // Function to get display images for a product
  // Priority: thumbnail first (if available), then up to 4 gallery images
  const getDisplayImages = (product) => {
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
      addImage(
        processImageUrl(product.thumbnail, true),
        product.name || product.title || "Car Image"
      );
    } else if (product.prolistimage && product.prolistimage != null && product.prolistimage != undefined) {
      // Fallback to prolistimage if thumbnail is not available
      addImage(
        processImageUrl(product.prolistimage, true),
        product.name || product.title || "Car Image"
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
          img.alt || product.name || product.title || "Car Image"
        );
      }
    } else if (product.gallery && product.gallery.length > 0 && product.gallery != null && product.gallery != undefined) {
      // Fallback to product.gallery array (for backward compatibility)
      // Add first 4 gallery images (max 4 after thumbnail)
      for (let i = 0; i < product.gallery.length && images.length < 5; i++) {
        const url = product.gallery[i];
        addImage(
          processImageUrl(url),
          `${product.name || product.title} - Image ${i + 1}`
        );
      }
    }

    // 3. If no thumbnail or gallery, try single product.image
    if (images.length === 0 && product.image && product.image != null && product.image != undefined) {
      addImage(
        processImageUrl(product.image),
        product.name || product.title || "Car Image"
      );
    }

    // 4. Placeholder fallback if nothing found
    if (images.length === 0) {
      addImage(
        "https://cdn.bigboytoyz.com/new-version/placeholder-car.png",
        product.name || product.title || "Car Image"
      );
    }

    return images;
  };

  // Check if we have any active filters
  const hasAnyActiveFilters = 
    filters.category ||
    filters.brand ||
    filters.minPrice ||
    filters.maxPrice ||
    filters.yearFrom ||
    filters.yearTo ||
    filters.fuelType ||
    filters.state ||
    filters.kmFrom ||
    filters.kmTo ||
    filters.styles ||
    filters.vehicleType;

  const stateQueryValue = useMemo(
    () => getStateQueryFromFilterValue(filters.state),
    [filters.state]
  );

  // Always call useInfiniteProducts hook (for bottom list or when not isTopList)
  const {
    products,
    isLoading,
    isLoadingMore,
    isValidating,
    isReachingEnd,
    isEmpty,
    isError,
    error,
    loadMore,
    totalItems,
    mutate,
  } = useInfiniteProducts({
    limit: 18, // Fetch more products to enable better randomization
    ...(sortBy && sortOrder
      ? { sort: sortBy, order: sortOrder, random: false }
      : { random: false }),
    // Don't pass initialData if filters are active (including from sessionStorage)
    initialData: !hasAnyActiveFilters && !hasActiveFilters && initialData ? [initialData] : undefined,
    // Apply filters from context
    category: filters.category || "",
    brandId: filters.brand || "",
    minPrice: filters.minPrice || "",
    maxPrice: filters.maxPrice || "",
    yearFrom: filters.yearFrom || "",
    yearTo: filters.yearTo || "",
    fuelType: filters.fuelType || "",
    state: stateQueryValue || "",
    kmFrom: filters.kmFrom || "",
    kmTo: filters.kmTo || "",
    styles: filters.styles || "",
    vehicleType: filters.vehicleType || "",
  });

  // Always call useProducts hook (for top list when isTopList is true)
  const {
    products: topProducts,
    isLoading: topLoading,
    isError: topError,
    error: topErrObj,
    mutate: mutateTop,
    isValidating: topValidating,
  } = useProducts({
    limit: 6,
    ...(sortBy && sortOrder
      ? { sort: sortBy, order: sortOrder, random: false }
      : { random: false }),
    // Apply the same filters
    category: filters.category || "",
    brandId: filters.brand || "",
    minPrice: filters.minPrice || "",
    maxPrice: filters.maxPrice || "",
    yearFrom: filters.yearFrom || "",
    yearTo: filters.yearTo || "",
    fuelType: filters.fuelType || "",
    state: stateQueryValue || "",
    kmFrom: filters.kmFrom || "",
    kmTo: filters.kmTo || "",
    styles: filters.styles || "",
    vehicleType: filters.vehicleType || "",
    // Don't pass initialData if filters are active (including from sessionStorage)
    initialData:
      !hasAnyActiveFilters && !hasActiveFilters && initialData ? { data: initialData.data } : undefined,
    swrOptions: {
      revalidateOnMount: hasAnyActiveFilters || hasActiveFilters, // Revalidate immediately if filters are active
      refreshInterval: 0, // Disable automatic refresh
    },
  });

  // Trigger a revalidation when filters change
  useEffect(() => {
    // We want to skip the initial fetch on mount, as we already have initialData
    if (isClientMounted) {
      if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
      }

      // Reset randomized products when filters or sorting change
      setRandomizedProducts([]);
      setRandomizedTopProducts([]);

      // On subsequent changes to filters or sorting, trigger a re-fetch
      if (isTopList) {
        mutateTop(); // For top list, use the top products mutate function
      } else {
        mutate(); // For infinite list, use the infinite products mutate function
      }
    }
  }, [
    isClientMounted,
    filters,
    sortBy,
    sortOrder,
    mutate,
    mutateTop,
    isTopList,
  ]);

  useEffect(() => {
    AOS.init();
    setIsClientMounted(true);
  }, []);

  // Fetch auction data on mount
  useEffect(() => {
    const fetchAuctionData = async () => {
      try {
        const response = await auctionsAPI.getLiveItems();
        
        if (response.status === 'success' && response.data) {
          // Group items by type
          const cars = response.data.filter(item => item.group === 'CAR');
          const watches = response.data.filter(item => item.group === 'WATCH');
          const carNumbers = response.data.filter(item => item.group === 'CAR_NUMBER');
          const mobileNumbers = response.data.filter(item => item.group === 'MOBILE_NUMBER');
          
          setAuctionData({
            cars,
            watches,
            carNumbers,
            mobileNumbers,
            loading: false,
            error: null,
          });
        } else {
          setAuctionData(prev => ({ ...prev, loading: false, error: 'Invalid response format' }));
        }
      } catch (error) {
        console.error('Failed to fetch auction data:', error);
        setAuctionData(prev => ({ ...prev, loading: false, error: error.message }));
      }
    };

    fetchAuctionData();
  }, []);

  // Memoize shuffled auction pool to prevent infinite re-renders with react-slick
  const shuffledAuctionPool = useMemo(() => {
    const pool = [];
    
    // Add all auction items to pool
    auctionData.cars.forEach(car => {
      pool.push({ type: 'car', item: car });
    });
    
    auctionData.watches.forEach(watch => {
      pool.push({ type: 'watch', item: watch });
    });
    
    auctionData.carNumbers.forEach(carNumber => {
      pool.push({ type: 'number', item: carNumber });
    });
    
    auctionData.mobileNumbers.forEach(mobileNumber => {
      pool.push({ type: 'number', item: mobileNumber });
    });
    
    // Shuffle the pool using Fisher-Yates algorithm
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    
    return pool;
  }, [auctionData.cars, auctionData.watches, auctionData.carNumbers, auctionData.mobileNumbers]);

  // Memoize the render function to prevent recreation on every render
  const renderProductsWithAuctionCards = useCallback((products, interval = 9) => {
    const elements = [];
    let auctionCardIndex = 0;
    
    products.forEach((product, index) => {
      // Add the product card
      elements.push(
        <ProductCard
          key={`${product.id || product._id || product.mongodb_id}-${index}`}
          product={product}
        />
      );
      
      // After every 'interval' products, add an auction card (mobile only)
      // Only add if we have auction data and not the last product
      if ((index + 1) % interval === 0 && index < products.length - 1 && shuffledAuctionPool.length > 0) {
        const auctionItem = shuffledAuctionPool[auctionCardIndex % shuffledAuctionPool.length];
        
        elements.push(
          <div 
            key={`auction-card-${index}-${auctionCardIndex}`} 
            className="w-full md:hidden"
          >
            {auctionItem.type === 'car' && <CarAuctionCard item={auctionItem.item} />}
            {auctionItem.type === 'watch' && <WatchAuctionCard item={auctionItem.item} />}
            {auctionItem.type === 'number' && <NumberPlateAuctionCard item={auctionItem.item} />}
          </div>
        );
        
        auctionCardIndex++;
      }
    });
    
    return elements;
  }, [shuffledAuctionPool]);

  // Randomize products when no specific sorting is applied and no filters are active
  // For price sorting or other specific sorts, maintain the sorted order
  const shouldRandomize = useMemo(() => {
    const hasActiveFilters =
      filters.category ||
      filters.brand ||
      filters.minPrice ||
      filters.maxPrice ||
      filters.yearFrom ||
      filters.yearTo ||
      filters.fuelType ||
      filters.state ||
      filters.kmFrom ||
      filters.kmTo ||
      filters.styles;

    // Randomize when:
    // 1. No specific sorting is applied (default state)
    // 2. OR sorting by 'modified'/'added' with 'desc' order (latest first, then randomize within)
    // 3. AND no filters are active
    const isDefaultSort =
      !sortBy || sortBy === "modified" || sortBy === "added";
    const isDescOrder = !sortOrder || sortOrder === "desc";

    const result = isDefaultSort && isDescOrder && !hasActiveFilters;

    if (isTopList) {
      console.log("Top list shouldRandomize calculation:", {
        isDefaultSort,
        isDescOrder,
        hasActiveFilters,
        sortBy,
        sortOrder,
        filters,
        result,
      });
    }

    return result;
  }, [sortBy, sortOrder, filters, isTopList]);

  // Randomize products only after client has mounted to prevent hydration errors
  // Use Fisher-Yates shuffle for better randomization
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Helper: normalize product id
  const getProductId = useCallback((p) => p?.id || p?.id_ || p?._id || p?.mongodb_id, []);

  // Build a sessionStorage key that is scoped to list type + sort + filters (per-tab persistence)
  const orderKey = useMemo(() => {
    const base = isTopList ? "collectionOrder:top" : "collectionOrder:bottom";
    const sortKey = (sortBy || "default") + ":" + (sortOrder || "desc");
    const f = filters || {};
    const filterKey = JSON.stringify({
      category: f.category || "",
      brand: f.brand || "",
      styles: f.styles || "",
      minPrice: f.minPrice || "",
      maxPrice: f.maxPrice || "",
      yearFrom: f.yearFrom || "",
      yearTo: f.yearTo || "",
      fuelType: f.fuelType || "",
      state: f.state || "",
      kmFrom: f.kmFrom || "",
      kmTo: f.kmTo || "",
      vehicleType: f.vehicleType || "",
    });
    return `${base}:${sortKey}:${filterKey}`;
  }, [isTopList, sortBy, sortOrder, filters]);

  const loadSavedOrder = useCallback(() => {
    try {
      if (typeof window === "undefined") return null;
      const raw = sessionStorage.getItem(orderKey);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }, [orderKey]);

  const saveOrder = useCallback((ids) => {
    try {
      if (typeof window === "undefined") return;
      sessionStorage.setItem(orderKey, JSON.stringify(ids));
    } catch (e) {
      // ignore
    }
  }, [orderKey]);

  // Randomization + session persistence for bottom/infinite scroll products
  useEffect(() => {
    if (!isClientMounted || isTopList) return;
    if (!shouldRandomize) {
      setRandomizedProducts([]);
      return;
    }

    // Don't use initialData if filters are active
    const source = (products && products.length > 0)
      ? products
      : (!hasAnyActiveFilters && initialData && initialData.data && initialData.data.length > 0)
        ? initialData.data
        : [];

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
    const toAppend = products.filter((p) => !existingIds.has(getProductId(p)));
    if (toAppend.length > 0) {
      setRandomizedProducts((prev) => [...prev, ...toAppend]);
      const saved = loadSavedOrder() || randomizedProducts.map(getProductId);
      const updated = [...saved, ...toAppend.map(getProductId)];
      saveOrder(updated);
    }
  }, [isClientMounted, isTopList, shouldRandomize, products, initialData?.data, randomizedProducts, loadSavedOrder, saveOrder, getProductId, shuffleArray, hasAnyActiveFilters]);

  // Randomization + session persistence for top products
  useEffect(() => {
    if (!isClientMounted || !isTopList) return;
    if (!shouldRandomize) {
      setRandomizedTopProducts([]);
      return;
    }

    // Don't use initialData if filters are active
    const source = (topProducts && topProducts.length > 0)
      ? topProducts
      : (!hasAnyActiveFilters && initialData && initialData.data && initialData.data.length > 0)
        ? initialData.data
        : [];

    if (randomizedTopProducts.length === 0) {
      const saved = loadSavedOrder();
      if (saved && source.length > 0) {
        const idToItem = new Map(source.map((p) => [getProductId(p), p]));
        const ordered = [];
        const seen = new Set();
        for (const id of saved) {
          const item = idToItem.get(id);
          if (item) {
            ordered.push(item);
            seen.add(id);
          }
        }
        for (const p of source) {
          const id = getProductId(p);
          if (!seen.has(id)) {
            ordered.push(p);
            saved.push(id);
          }
        }
        setRandomizedTopProducts(ordered);
        saveOrder(saved);
      } else if (source.length > 0) {
        const shuffled = shuffleArray(source);
        setRandomizedTopProducts(shuffled);
        saveOrder(shuffled.map(getProductId));
      }
      return;
    }

    // Top list normally doesn't append beyond 6, but handle any new items anyway
    const existingIds = new Set(randomizedTopProducts.map(getProductId));
    const toAppend = source.filter((p) => !existingIds.has(getProductId(p)));
    if (toAppend.length > 0) {
      setRandomizedTopProducts((prev) => [...prev, ...toAppend]);
      const saved = loadSavedOrder() || randomizedTopProducts.map(getProductId);
      const updated = [...saved, ...toAppend.map(getProductId)];
      saveOrder(updated);
    }
  }, [isClientMounted, isTopList, shouldRandomize, topProducts, initialData?.data, randomizedTopProducts, loadSavedOrder, saveOrder, getProductId, shuffleArray, hasAnyActiveFilters]);

  // Removed auto-load on scroll to use only manual "Load More" button

  // Use original products for SSR, randomized for client after mount (only if should randomize)
  const displayProducts = useMemo(() => {
    // For top list, use randomized top products when appropriate
    if (isTopList) {
      if (
        isClientMounted &&
        shouldRandomize &&
        randomizedTopProducts.length > 0
      ) {
        return randomizedTopProducts;
      }
      // Don't fall back to initialData if filters are active
      return topProducts?.length > 0 ? topProducts : (!hasAnyActiveFilters ? initialData?.data || [] : []);
    }

    // For infinite scroll list, use randomized products when appropriate
    if (isClientMounted && shouldRandomize && randomizedProducts.length > 0) {
      return randomizedProducts;
    }

    // For server-side rendering or when not randomizing, use original order
    // Don't fall back to initialData if filters are active
    return products.length > 0 ? products : (!hasAnyActiveFilters ? initialData?.data || [] : []);
  }, [
    isClientMounted,
    shouldRandomize,
    randomizedProducts,
    randomizedTopProducts,
    products,
    topProducts,
    initialData?.data,
    isTopList,
    hasAnyActiveFilters,
  ]);

  const hasProducts = displayProducts && displayProducts.length > 0;

  // Track product impressions in GTM when products are displayed
  useEffect(() => {
    if (isClientMounted && displayProducts && displayProducts.length > 0) {
      const listName = isTopList ? 'Collection Top List' : 'Collection Product List';
      
      // Standard GTM tracking
      pushProductImpressions(displayProducts, listName);
      
      // Google Ads remarketing
      pushGoogleAdsViewItemList(displayProducts);
    }
  }, [isClientMounted, displayProducts, isTopList]);

  // Get active filter count for display
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.category) count++;
    if (filters.brand) count++;
    if (filters.styles) count++;
    if (filters.minPrice || filters.maxPrice) count++;
    if (filters.yearFrom || filters.yearTo) count++;
    if (filters.fuelType) count++;
    if (filters.state) count++;
    if (filters.kmFrom || filters.kmTo) count++;
    return count;
  }, [filters]);

  // Helper functions for stock partitioning
  const partitionList = useCallback((list) => {
    const inStockArr = [];
    const soldArr = [];
    list.forEach((item) => {
      // Align with backend stock field logic: stock === '0' means out of stock, stock === '1' means in stock
      const isOutOfStock =
        item.stock === "0" ||
        item.stock === 0 ||
        item.isSoldOut === true ||
        item.isSoldOut === "1" ||
        item.inStock === false ||
        item.inStock === "0" ||
        item.price === 0 ||
        item.price === "0";
      (isOutOfStock ? soldArr : inStockArr).push(item);
    });
    return [...inStockArr, ...soldArr];
  }, []);

  // Update context with new top IDs to avoid duplicates when isTopList
  useEffect(() => {
    if (isTopList && topProducts && topProducts.length > 0) {
      const ids = topProducts.map((p) => p.id || p.id_ || p.mongodb_id);
      updateTopIds(ids);
    }
  }, [isTopList, topProducts, updateTopIds]);

  // If isTopList, render top products
  if (isTopList) {
    const isRefetching =
      topValidating && topProducts.length > 0 && !isInitialMount.current;

    // Check if we have active filters and are still loading filtered data
    const hasActiveFilters =
      filters.category ||
      filters.brand ||
      filters.minPrice ||
      filters.maxPrice ||
      filters.yearFrom ||
      filters.yearTo ||
      filters.fuelType ||
      filters.state ||
      filters.kmFrom ||
      filters.kmTo ||
      filters.styles ||
      filters.vehicleType;

    // Show skeleton when:
    // 1. Loading without initial data
    // 2. Refetching with existing data
    // 3. Have active filters but data hasn't loaded yet (navigating back with filters)
    const shouldShowSkeleton = 
      (topLoading && !initialData?.data?.length) || 
      isRefetching ||
      (hasActiveFilters && topLoading);

    if (shouldShowSkeleton) {
      return (
        <section className="bg-white md:bg-[#f3f3f3] lg:pb-14 xl:pb-[5rem] 1xl:pb-[6rem] 2xl:pb-[8rem] 3xl:pb-[10rem] mainCollection-list">
          <div className="max-1920">
            <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] mx-auto lg:w-[83%]">
              <ProductSkeletonGroup count={6} />
            </div>
          </div>
        </section>
      );
    }

    if (topError) {
      return (
        <section className="bg-white md:bg-[#f3f3f3] lg:pb-14 xl:pb-[5rem] 1xl:pb-[6rem] 2xl:pb-[8rem] 3xl:pb-[10rem]">
          <div className="max-1920">
            <ErrorMessage
              message={topErrObj?.message || "Failed to load cars."}
              onRetry={() => window.location.reload()}
            />
          </div>
        </section>
      );
    }

    // Check if we have any products to display (including randomized ones)
    // Don't count initialData if filters are active
    const hasTopProductsToDisplay =
      (topProducts && topProducts.length > 0) ||
      (randomizedTopProducts && randomizedTopProducts.length > 0) ||
      (!hasAnyActiveFilters && initialData?.data && initialData.data.length > 0);

    if (!hasTopProductsToDisplay) {
      return <NoResults />;
    }

    // Use randomized top products if available, otherwise use original top products or initial data
    // Don't fall back to initialData if filters are active
    let productsToPartition =
      isClientMounted && shouldRandomize && randomizedTopProducts.length > 0
        ? randomizedTopProducts
        : topProducts && topProducts.length > 0
        ? topProducts
        : (!hasAnyActiveFilters ? initialData?.data || [] : []);

    // Only apply client-side fuel type normalization if we don't have active filters from the server
    // Server-side filtering already handles this, so we only need to normalize if filters were applied client-side
    // This prevents double-filtering which causes products to disappear
    if (filters.fuelType && !hasActiveFilters) {
      const normalize = (v) => (v || '').toString().trim().toLowerCase();
      const targetFuel = normalize(filters.fuelType);
      productsToPartition = productsToPartition.filter((p) => normalize(p.fuelType) === targetFuel);
    }

    const orderedTop = partitionList(productsToPartition);

    const SOLD_CHECK = (item) =>
      item.stock === "0" ||
      item.stock === 0 ||
      item.isSoldOut === true ||
      item.isSoldOut === "1" ||
      item.inStock === false ||
      item.inStock === "0" ||
      item.price === 0 ||
      item.price === "0";

    let topDisplay = orderedTop;
    if (orderedTop.length > 6) {
      const nonSold = orderedTop.filter((i) => !SOLD_CHECK(i));
      if (nonSold.length >= 6) {
        topDisplay = [...nonSold.slice(0, 6)];
      } else {
        const needed = 6 - nonSold.length;
        topDisplay = [
          ...nonSold,
          ...orderedTop.filter(SOLD_CHECK).slice(0, needed),
        ];
      }
    } else {
      topDisplay = orderedTop.slice(0, 6);
    }

    return (
      <section className="bg-white md:bg-[#f3f3f3] lg:pb-14 xl:pb-[5rem] 1xl:pb-[6rem] 2xl:pb-[8rem] 3xl:pb-[10rem] mainCollection-list">
        <div className="max-1920">
          <div
            className="block md:flex md:flex-wrap md:justify-start md:gap-x-10 md:gap-y-12 md:w-[91%] mx-auto lg:w-[83%]"
            suppressHydrationWarning
          >
            {/* {topDisplay.map((product, index) => (
              <ProductCard
                key={`${
                  product.id || product._id || product.mongodb_id
                }-${index}-top`}
                product={product}
              />
            ))} */}
            {renderProductsWithAuctionCards(topDisplay, 2)}

          </div>
        </div>
      </section>
    );
  }

  // For the bottom list, filter out topIds if provided
  // Use the appropriate product list (randomized or original)
  let sourceProducts =
    isClientMounted && shouldRandomize && randomizedProducts.length > 0
      ? randomizedProducts
      : products;

  let filteredProducts = sourceProducts;
  if (topIds && topIds.length > 0) {
    filteredProducts = sourceProducts.filter(
      (p) => !topIds.includes(p.id || p.id_ || p.mongodb_id)
    );
  }

  // Only apply client-side fuel type normalization if we don't have active filters from the server
  // Server-side filtering already handles this, so we only need to normalize if filters were applied client-side
  // This prevents double-filtering which causes products to disappear
  if (filters.fuelType && !hasActiveFilters) {
    const normalize = (v) => (v || '').toString().trim().toLowerCase();
    const targetFuel = normalize(filters.fuelType);
    filteredProducts = filteredProducts.filter((p) => normalize(p.fuelType) === targetFuel);
  }

  const orderedBottom = useMemo(
    () => partitionList(filteredProducts),
    [filteredProducts, partitionList]
  );

  // Ensure bottom grid always has full rows of 3 real products
  const orderedBottomFullRows = useMemo(() => {
    const total = orderedBottom.length;
    if (total < 3) return orderedBottom;
    const remainder = total % 3;
    return remainder === 0 ? orderedBottom : orderedBottom.slice(0, total - remainder);
  }, [orderedBottom]);

  const isRefetchingBottom =
    isValidating && products.length > 0 && !isInitialMount.current;

  // Check if we have active filters and are still loading filtered data
  const hasActiveFiltersBottom =
    filters.category ||
    filters.brand ||
    filters.minPrice ||
    filters.maxPrice ||
    filters.yearFrom ||
    filters.yearTo ||
    filters.fuelType ||
    filters.state ||
    filters.kmFrom ||
    filters.kmTo ||
    filters.styles ||
    filters.vehicleType;

  useEffect(() => {
    if (!isLoadingMore && isButtonLoading) {
      scrollListenerPaused.current = false;
      setIsButtonLoading(false);
    }
  }, [isLoadingMore, isButtonLoading]);

  // Show skeleton when:
  // 1. Loading without products and not in button loading state
  // 2. Refetching with existing data
  // 3. Have active filters but data hasn't loaded yet (navigating back with filters)
  const shouldShowSkeletonBottom = 
    (isLoading && !products.length && !isButtonLoading) ||
    (isRefetchingBottom && !isButtonLoading && !isLoadingMore) ||
    (hasActiveFiltersBottom && isLoading);

  // Only show full skeleton loading on initial load, not when loading more
  if (shouldShowSkeletonBottom) {
    return (
      <section className="bg-white md:bg-[#f3f3f3] lg:pb-14 xl:pb-[5rem] 1xl:pb-[6rem] 2xl:pb-[8rem] 3xl:pb-[10rem] mainCollection-list">
        <div className="max-1920">
          <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] mx-auto lg:w-[83%]">
            <ProductSkeletonGroup count={9} />
          </div>
        </div>
      </section>
    );
  }

  // Render error state
  if (isError) {
    return (
      <section className="bg-white md:bg-[#f3f3f3] lg:pb-14 xl:pb-[5rem] 1xl:pb-[6rem] 2xl:pb-[8rem] 3xl:pb-[10rem]">
        <div className="max-1920">
          <ErrorMessage
            message={error?.message || "Failed to load car collection."}
            onRetry={() => window.location.reload()}
          />
        </div>
      </section>
    );
  }

  // Render empty state
  if (isEmpty) {
    return <NoResults />;
  }

  // Enhanced load more function that prevents auto-scroll
  const handleLoadMore = async () => {
    if (isButtonLoading || isLoadingMore || isReachingEnd) return;

    setIsButtonLoading(true);
    scrollListenerPaused.current = true;

    const currentScrollY = window.scrollY;

    try {
      const result = await loadMore();

      if (result !== false) {
        requestAnimationFrame(() => {
          try {
            window.scrollTo({ top: currentScrollY, behavior: "auto" });
          } catch (err) {
            window.scrollTo(0, currentScrollY);
          }
        });
      }
    } catch (err) {
      console.error("Failed to load more products:", err);
      scrollListenerPaused.current = false;
      setIsButtonLoading(false);
    }
  };

  return (
    <section className="bg-white md:bg-[#f3f3f3] lg:pb-14 xl:pb-[5rem] 1xl:pb-[6rem] 2xl:pb-[8rem] 3xl:pb-[10rem] mainCollection-list">
      <div className="max-1920">
        {/* {activeFilterCount > 0 && (
          <div className="w-[91%] mx-auto lg:w-[83%] mt-4">
            <div className="bg-white p-3 rounded-md shadow-sm inline-flex items-center">
              <span className="text-gray-700 mr-2">Active Filters: {activeFilterCount}</span>
            </div>
          </div>
        )} */}

        <div
          className="block md:flex md:flex-wrap md:justify-start md:gap-x-10 md:gap-y-12 md:w-[91%] mx-auto lg:w-[83%]"
          suppressHydrationWarning
        >
          {/* Display the products */}
          {/* {orderedBottomFullRows.map((product, index) => (
            <ProductCard
              key={`${
                product.id || product._id || product.mongodb_id
              }-${index}-bottom`}
              product={product}
            />
          ))} */}
          {/* Display the products with rotating auction cards after every 9 products (mobile only) */}
          {renderProductsWithAuctionCards(orderedBottomFullRows, 3)}

          {/* Loading more indicator - only show when auto-infinite scroll is loading */}
          {isLoadingMore && !isButtonLoading && (
            <div className="w-full text-center py-8 clear-both">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-2">Loading more cars...</p>
            </div>
          )}
        </div>

        {/* Load more button (alternative to infinite scroll) */}
        {!isReachingEnd && isSecondary && (
          <div className="mt-20">
            <div className="container w-full my-32 pt-16 clear-both ">
              <div className="hidden lg:block h-1 border-t border-black"></div>
              <div className="px-3 pb-20 lg:pb-0 lg:flex lg:justify-center lg:mt-[-3rem] lg:bg-[#f3f3f3] lg:px-10 lg:w-max lg:mx-auto">
                {isButtonLoading ? (
                  <div className="flex justify-center items-center py-7 text-2xl lg:w-[20rem] lg:h-[5rem] 3xl:min-w-[27rem] 3xl:min-h-[6.5rem]">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                    <span className="ml-3">Loading more cars...</span>
                  </div>
                ) : (
                  <button
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                    className="bg-transparent font-medium text-black flex justify-center items-center border border-black rounded-lg py-7 text-2xl text-center w-full hover:bg-black hover:text-white transition-all duration-300 ease-in lg:inline-flex lg:w-[20rem] lg:h-[5rem] lg:rounded-[4rem] 3xl:text-[1.8rem] 3xl:min-w-[27rem] 3xl:min-h-[6.5rem] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Load More
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* End of results message */}
        {isReachingEnd && filteredProducts.length > 0 && (
          <div className="w-full text-center py-8">
            <p className="text-gray-600">
              {activeFilterCount > 0
                ? "You've viewed all cars matching your filters"
                : "You've viewed all latest added cars"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CollectionListTop;
