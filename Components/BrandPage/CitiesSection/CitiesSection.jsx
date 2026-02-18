"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { brandsAPI } from '../../../app/lib/services/api';

const CitiesSection = ({ brandData }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        if (!brandData?.url) return;
        
        const result = await brandsAPI.getCitiesByBrandName(brandData.url);
        
        if (result && result.success && result.cities) {
          setCities(result.cities);
        }
      } catch (error) {
        console.error('Error fetching cities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, [brandData?.url]);

  if (loading) {
    return (
      <section className="bg-gray-50 py-[4rem] xl:py-[6rem]">
        <div className="max-1920">
          <div className="container">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {[...Array(10)].map((_, index) => (
                    <div key={index} className="h-12 bg-gray-300 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!cities || cities.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-[4rem] xl:py-[6rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center mb-[3rem] xl:mb-[4rem]">
            <h2 className="text-[2.4rem] xl:text-[3rem] 2xl:text-[3.6rem] 3xl:text-[4.2rem] font-bold mb-4 text-gray-800">
              Buy Used <span className="text-yellow-500">{brandData?.name || 'Luxury'}</span> Cars in Cities
            </h2>
            <p className="text-[1.4rem] xl:text-[1.6rem] 2xl:text-[1.8rem] text-gray-600 max-w-3xl mx-auto">
              Explore our collection of premium pre-owned {brandData?.name || 'luxury'} vehicles available across major cities in India.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-6">
            {cities.map((city, index) => (
              <Link
                key={city.id || index}
                href={`/buy-used-${brandData?.url || 'luxury'}-cars-in-${city.city?.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 xl:p-6 text-center border border-gray-200 hover:border-yellow-500 group-hover:scale-105">
                  <div className="flex items-center justify-center mb-3">
                    <svg 
                      className="w-6 h-6 xl:w-8 xl:h-8 text-gray-400 group-hover:text-[#DE2D22]  transition-colors duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.6rem] font-semibold text-gray-800 group-hover:text-[#DE2D22] transition-colors duration-300">
                    {city.city}
                  </h3>
                  <p className="text-[1rem] xl:text-[1.1rem] text-gray-500 mt-2 group-hover:text-gray-600 transition-colors duration-300">
                    View {brandData?.name || 'Cars'}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {cities.length > 15 && (
            <div className="text-center mt-[3rem] xl:mt-[4rem]">
              <p className="text-[1.2rem] xl:text-[1.4rem] text-gray-600">
                And many more cities across India...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection; 