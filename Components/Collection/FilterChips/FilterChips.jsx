"use client";
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { useCollectionContext } from "../../../app/lib/contexts/CollectionContext";
import { useBrands } from "../../../app/lib/hooks/useProducts";
import { footerService } from "../../../app/lib/services/footer";
import { getStateLabelFromFilterValue } from "../../../app/lib/constants/registrationStates";

const FilterChips = ({ onEditClick }) => {
  const { filters, removeFilter, resetFilters } = useCollectionContext();
  const { brands: apiBrands } = useBrands();
  const [categories, setCategories] = useState([]);
  const [isClientMounted, setIsClientMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Set client mounted flag to prevent hydration mismatch
  useEffect(() => {
    setIsClientMounted(true);
  }, []);

  // Track scroll to match header sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch categories/styles for display names
  useEffect(() => {
    if (!isClientMounted) return;
    
    const fetchCategories = async () => {
      try {
        const styles = await footerService.fetchStyles();
        if (styles && styles.length > 0) {
          setCategories(styles);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, [isClientMounted]);

  // Get filter chips data
  const filterChips = useMemo(() => {
    const chips = [];

    // Brand filter
    if (filters.brand) {
      const brandValues = filters.brand.split(',');
      const firstBrandValue = brandValues[0];
      const brand = apiBrands?.find(b => 
        (b.id_ || b.id) === firstBrandValue || 
        (b.posturl || '').toLowerCase() === firstBrandValue.toLowerCase()
      );
      chips.push({
        id: 'brand',
        label: brand ? brand.bname || brand.name : firstBrandValue,
        filterKey: 'brand',
      });
    }

    // Styles/Categories filter
    if (filters.styles) {
      const styleIds = filters.styles.split(',').map(id => id.trim());
      const selectedCategories = categories
        .filter(cat => {
          const catId = String(cat.id || cat._id);
          return styleIds.includes(catId);
        })
        .map(cat => cat.name);
      
      // Show the filter chip even if category names aren't loaded yet
      if (selectedCategories.length > 0) {
        chips.push({
          id: 'styles',
          label: selectedCategories.join(', '),
          filterKey: 'styles',
        });
      } else if (styleIds.length > 0 && categories.length === 0) {
        // Categories still loading, show generic label
        chips.push({
          id: 'styles',
          label: `${styleIds.length} Style${styleIds.length > 1 ? 's' : ''}`,
          filterKey: 'styles',
        });
      } else if (styleIds.length > 0) {
        // Categories loaded but no match found, show IDs
        chips.push({
          id: 'styles',
          label: `Style${styleIds.length > 1 ? 's' : ''}: ${styleIds.join(', ')}`,
          filterKey: 'styles',
        });
      }
    }

    // Price filter
    const minPrice = filters.minPrice || filters.priceMin;
    const maxPrice = filters.maxPrice || filters.priceMax;
    if (minPrice || maxPrice) {
      let priceLabel = 'Price: ';
      if (!minPrice && maxPrice === '5000000') {
        priceLabel += 'Less Than ₹50L';
      } else if (minPrice === '5000000' && maxPrice === '10000000') {
        priceLabel += '₹50L - ₹1Cr';
      } else if (minPrice === '10000000' && maxPrice === '15000000') {
        priceLabel += '₹1Cr - ₹1.5Cr';
      } else if (minPrice === '15000000' && !maxPrice) {
        priceLabel += '₹1.5Cr & Above';
      } else {
        // Custom range
        const formatPrice = (price) => {
          if (!price) return '';
          const num = parseInt(price);
          if (num >= 10000000) return `₹${num / 10000000}Cr`;
          if (num >= 100000) return `₹${num / 100000}L`;
          return `₹${num}`;
        };
        const parts = [];
        if (minPrice) parts.push(formatPrice(minPrice));
        if (maxPrice) parts.push(formatPrice(maxPrice));
        priceLabel += parts.join(' - ');
      }
      chips.push({
        id: 'price',
        label: priceLabel,
        filterKey: 'price',
      });
    }

    // Year filter
    if (filters.yearFrom || filters.yearTo) {
      let yearLabel = 'Year: ';
      if (filters.yearFrom === '2000' && filters.yearTo === '2010') {
        yearLabel += '2000-2010';
      } else if (filters.yearFrom === '2011' && filters.yearTo === '2020') {
        yearLabel += '2011-2020';
      } else if (filters.yearFrom === '2021' && filters.yearTo === '2025') {
        yearLabel += '2021-2025';
      } else {
        const parts = [];
        if (filters.yearFrom) parts.push(filters.yearFrom);
        if (filters.yearTo) parts.push(filters.yearTo);
        yearLabel += parts.join('-');
      }
      chips.push({
        id: 'year',
        label: yearLabel,
        filterKey: 'year',
      });
    }

    // KM Driven filter
    if (filters.kmFrom || filters.kmTo) {
      let kmLabel = 'KM: ';
      if (filters.kmFrom === '0' && filters.kmTo === '0') {
        kmLabel += 'Brand New';
      } else if (filters.kmFrom === '0' && filters.kmTo === '5000') {
        kmLabel += '0-5000 Km';
      } else if (filters.kmFrom === '5000' && filters.kmTo === '10000') {
        kmLabel += '5000-10000 Km';
      } else if (filters.kmFrom === '10000' && filters.kmTo === '15000') {
        kmLabel += '10000-15000 Km';
      } else if (filters.kmFrom === '15000' && filters.kmTo === '20000') {
        kmLabel += '15000-20000 Km';
      } else if (filters.kmFrom === '20000' && !filters.kmTo) {
        kmLabel += '20000+ Km';
      } else {
        const parts = [];
        if (filters.kmFrom) parts.push(`${filters.kmFrom} Km`);
        if (filters.kmTo) parts.push(`${filters.kmTo} Km`);
        kmLabel += parts.join('-');
      }
      chips.push({
        id: 'km',
        label: kmLabel,
        filterKey: 'km',
      });
    }

    // Fuel Type filter
    if (filters.fuelType) {
      const fuelType = filters.fuelType.charAt(0).toUpperCase() + filters.fuelType.slice(1);
      chips.push({
        id: 'fuelType',
        label: `Fuel: ${fuelType}`,
        filterKey: 'fuelType',
      });
    }

    // State filter
    if (filters.state) {
      const stateLabel = getStateLabelFromFilterValue(filters.state) || filters.state;
      chips.push({
        id: 'state',
        label: `State: ${stateLabel}`,
        filterKey: 'state',
      });
    }

    // Vehicle Type filter
    if (filters.vehicleType) {
      chips.push({
        id: 'vehicleType',
        label: `Type: ${filters.vehicleType}`,
        filterKey: 'vehicleType',
      });
    }

    return chips;
  }, [filters, apiBrands, categories]);

  // Don't render on server-side or if no active filters
  if (!isClientMounted || filterChips.length === 0) {
    return null;
  }

  return (
    <div 
      className={`w-full transition-all duration-500 ease-in-out bg-white md:bg-[#f3f3f3] ${
        isSticky 
          ? "sticky top-[70px] md:top-[75px] lg:top-[85px] z-50 shadow-sm" 
          : "relative z-10"
      }`}
    >
      <div className="border-b border-[#D9D9D9] sm:mt-[3rem]">
        <div className="container sm:border-t sm:border-[#D9D9D9]">
          <div className="py-4 lg:py-6">
            {/* Applied Filters Label */}
            <div className="mb-3 lg:mb-4">
              <span className="text-[15px] font-medium 1xl:text-[17px] 3xl:text-[20px]">
                Applied Filters:
              </span>
            </div>

            {/* Scrollable chips container - horizontal scroll on mobile, wrap on desktop */}
            <div 
              className="overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              <div className="flex items-center gap-3 lg:flex-wrap min-w-max lg:min-w-0">
              {/* Filter chips */}
              {filterChips.map((chip) => (
                <div
                  key={chip.id}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded-[5px] bg-black text-white transition-all duration-300  group cursor-pointer text-[12px] md:text-[14px] xl:text-[15px] 1xl:text-[16px] 3xl:text-[18px] whitespace-nowrap flex-shrink-0"
                  onClick={() => removeFilter(chip.filterKey)}
                >
                  <span className="font-normal inline-block mr-[8px]">{chip.label}</span>
                  <div className="w-4 h-4 relative flex items-center justify-center min-w-[1rem] min-h-[1rem] xl:w-5 xl:h-5 xl:min-w-[1.25rem] xl:min-h-[1.25rem]">
                    <Image
                      src="/images/mobile-search-close.svg"
                      width={12}
                      height={12}
                      alt="Remove filter"
                      className="w-[9px] h-[9px] object-contain transition-all duration-300  xl:w-[12px] xl:h-[12px]"
                    />
                  </div>
                </div>
              ))}

              {/* Edit button */}
              <button
                onClick={onEditClick}
                className="inline-flex items-center gap-2 px-5 py-2 border border-black rounded-[5px] bg-white text-black transition-all duration-300 hover:bg-black hover:text-white group cursor-pointer text-[12px] md:text-[14px] xl:text-[15px] 1xl:text-[16px] 3xl:text-[18px]  font-medium whitespace-nowrap flex-shrink-0"
              >
                <span className="inline-block mr-[8px]">Edit</span>
                <div className="w-4 h-4 relative flex items-center justify-center min-w-[1rem] min-h-[1rem] xl:w-5 xl:h-5 xl:min-w-[1.25rem] xl:min-h-[1.25rem]">
                  <Image
                    src="/images/collection-filter-icon.svg"
                    width={18}
                    height={18}
                    alt="Edit filters"
                    className="w-[12px] h-[12px] object-contain transition-all duration-300 group-hover:invert xl:w-[18px] xl:h-[18px]"
                  />
                </div>
              </button>

              {/* Clear All button - only show if filters exist */}
              {filterChips.length > 0 && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 px-5 py-2 border border-black rounded-[5px] bg-white text-black transition-all duration-300 group cursor-pointer hover:bg-black hover:text-white text-[12px] md:text-[14px] xl:text-[15px] 1xl:text-[16px] 3xl:text-[18px] font-medium whitespace-nowrap flex-shrink-0"
                >
                  <span className="inline-block mr-[8px]">Clear All</span>
                  <div className="w-4 h-4 relative flex items-center justify-center min-w-[1rem] min-h-[1rem] xl:w-5 xl:h-5 xl:min-w-[1.25rem] xl:min-h-[1.25rem]">
                    <Image
                      src="/images/filter-reset.webp"
                      width={18}
                      height={18}
                      alt="Clear all filters"
                      className="w-[14px] h-[14px] object-contain group-hover:invert transition-all duration-300 xl:w-[18px] xl:h-[18px]"
                    />
                  </div>
                </button>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterChips;

