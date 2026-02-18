"use client";
import { useState, useEffect } from "react";
import { productsAPI } from "../services/api";

export const useCompareCars = () => {
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [allSelectedCars, setAllSelectedCars] = useState([]);
  const [specifications, setSpecifications] = useState([]);
  const [hideCommonFeatures, setHideCommonFeatures] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load brands on hook initialization
  useEffect(() => {
    const loadBrands = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await productsAPI.getBrandsForComparison();
        if (response.success) {
          setBrands(response.brands);
        } else {
          setError("Failed to load brands");
        }
      } catch (error) {
        console.error('Error loading brands:', error);
        setError("Error loading brands. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadBrands();
  }, []);

  // Load saved comparison from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('compareCarsList');
      if (stored) {
        const savedCars = JSON.parse(stored);
        if (Array.isArray(savedCars) && savedCars.length > 0) {
          setAllSelectedCars(savedCars);
        }
      }
    } catch (error) {
      console.error('Error loading saved comparison:', error);
    }
  }, []);

  // Save to localStorage whenever allSelectedCars changes
  useEffect(() => {
    try {
      localStorage.setItem('compareCarsList', JSON.stringify(allSelectedCars));
    } catch (error) {
      console.error('Error saving comparison to localStorage:', error);
    }
  }, [allSelectedCars]);

  // Load cars when brand is selected
  useEffect(() => {
    const loadCars = async () => {
      if (selectedBrand) {
        try {
          setError(null);
          const response = await productsAPI.getCarsByBrand(selectedBrand);
          if (response.success) {
            setCars(response.cars);
          } else {
            setError("Failed to load cars for this brand");
            setCars([]);
          }
        } catch (error) {
          console.error('Error loading cars:', error);
          setError("Error loading cars. Please try again.");
          setCars([]);
        }
      } else {
        setCars([]);
      }
    };

    loadCars();
  }, [selectedBrand]);

  // Load specifications when cars are selected
  useEffect(() => {
    const loadSpecifications = async () => {
      if (allSelectedCars.length > 1) {
        try {
          setError(null);
          const carIds = allSelectedCars.map(car => car.id);
          const response = await productsAPI.getCarSpecifications(carIds);
          if (response.success) {
            setSpecifications(response.specifications);
          } else {
            setError("Failed to load car specifications");
            setSpecifications([]);
          }
        } catch (error) {
          console.error('Error loading specifications:', error);
          setError("Error loading specifications. Please try again.");
          setSpecifications([]);
        }
      } else {
        setSpecifications([]);
      }
    };

    loadSpecifications();
  }, [allSelectedCars]);

  const handleBrandSelect = (brandId) => {
    setSelectedBrand(brandId);
    setSelectedCar("");
    setError(null);
  };

  const handleCarSelect = (carId) => {
    if (!selectedBrand) {
      setError("Please select a brand first!");
      return;
    }
    
    const getSelectedCar = cars.find((car) => car.id === carId);

    if (!getSelectedCar) {
      setError("Please select a valid car!");
      return;
    }

    const exists = allSelectedCars.some(item => item.id === getSelectedCar.id);

    if (exists) {
      setError(`${getSelectedCar.title} is already added to comparison`);
      return;
    }

    if (allSelectedCars.length >= 4) {
      setError("You can compare maximum 4 cars at a time");
      return;
    }

    setAllSelectedCars([...allSelectedCars, getSelectedCar]);
    setSelectedBrand("");
    setSelectedCar("");
    setError(null);
  };

  const handleRemoveCar = (id) => {
    const restCars = allSelectedCars.filter((car) => car.id !== id);
    setAllSelectedCars(restCars);
    setError(null);
    
    // Update localStorage will be handled by the useEffect above
  };

  const handleToggleCommonFeatures = () => {
    setHideCommonFeatures(!hideCommonFeatures);
  };

  const clearError = () => {
    setError(null);
  };

  const resetComparison = () => {
    setAllSelectedCars([]);
    setSpecifications([]);
    setSelectedBrand("");
    setSelectedCar("");
    setError(null);
    
    // Clear localStorage
    try {
      localStorage.removeItem('compareCarsList');
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  };

  // Function to add a car to comparison from single car page
  const addCarToComparison = (carData) => {
    if (!carData || !carData.id) {
      setError("Invalid car data");
      return { success: false, message: "Invalid car data" };
    }

    const exists = allSelectedCars.some(item => item.id === carData.id);

    if (exists) {
      setError(`${carData.name} is already added to comparison`);
      return { success: false, message: `${carData.name} is already added to comparison` };
    }

    if (allSelectedCars.length >= 4) {
      setError("You can compare maximum 4 cars at a time");
      return { success: false, message: "You can compare maximum 4 cars at a time" };
    }

    // Transform carData to match the format expected by comparison
    const carForComparison = {
      id: carData.id,
      title: carData.name,
      price: parseFloat(carData.price?.toString().replace(/[^0-9.-]/g, '')) || 0,
      thumbnail: carData.images && carData.images.length > 0 
        ? carData.images[0].url 
        : '/images/placeholder-car.jpg',
      url: carData.postUrl || carData.url || '',
      brandId: carData.brand?.id || '',
      category: carData.category || '',
      inStock: true,
    };

    setAllSelectedCars([...allSelectedCars, carForComparison]);
    setError(null);
    
    return { 
      success: true, 
      message: `${carData.name} added to comparison successfully!`,
      totalCars: allSelectedCars.length + 1
    };
  };

  return {
    // State
    cars,
    brands,
    selectedBrand,
    selectedCar,
    allSelectedCars,
    specifications,
    hideCommonFeatures,
    loading,
    error,
    
    // Actions
    handleBrandSelect,
    handleCarSelect,
    handleRemoveCar,
    handleToggleCommonFeatures,
    clearError,
    resetComparison,
    addCarToComparison,
    
    // Computed values
    canCompare: allSelectedCars.length > 1,
    hasSpecifications: specifications.length > 0,
    maxCarsReached: allSelectedCars.length >= 4,
  };
}; 