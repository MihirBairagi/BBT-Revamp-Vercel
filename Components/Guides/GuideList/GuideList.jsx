"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { autoguidesAPI } from "../../../app/lib/services/api";
import GuideCard from "./GuideCard";

const styles = {
  paginationList:
    "w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer group border border-[#555555]  bg-transparent rounded-[8px] m-[0.5rem] hover:bg-[#161616] xl:w-[5rem] xl:h-[5rem] xl:rounded-[1.2rem] 2xl:w-[6.2rem] 2xl:h-[6.2rem] 2xl:rounded-[1.6rem] 3xl:w-[8.2rem] 2xl:m-[1rem] 3xl:h-[8.2rem] 3xl:rounded-[2rem]",
  paginationBtn:
    "bg-transparent border-0 outline-none w-full h-full p-[5px] flex justify-center items-center text-[#333333] group-hover:text-[#fff] transition-all duration-500 text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.6rem] 3xl:text-[2rem] font-medium",
};

const GuideList = () => {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [guideTypes, setGuideTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  // Fetch autoguides from backend
  const fetchGuides = async (page = 1, type = '') => {
    try {
      setLoading(true);
      const response = await autoguidesAPI.getAll(page, 9, type); // 9 guides per page to fit 3x3 grid
      
      if (response && response.success && response.autoguides) {
        // The API already provides properly formatted data with CDN URLs
        setGuides(response.autoguides);
        setTotalPages(response.totalPages || Math.ceil((response.totalCount || 0) / 9));
      } else {
        setGuides([]);
        setError('Failed to fetch guides');
      }
    } catch (err) {
      console.error('Error fetching guides:', err);
      setError('Failed to load guides');
      setGuides([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch guide types for filtering
  const fetchGuideTypes = async () => {
    try {
      const response = await autoguidesAPI.getTypes();
      if (response && response.success && response.types) {
        setGuideTypes(response.types);
      }
    } catch (err) {
      console.error('Error fetching guide types:', err);
    }
  };

  useEffect(() => {
    fetchGuides(currentPage, selectedType);
  }, [currentPage, selectedType]);

  useEffect(() => {
    fetchGuideTypes();
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  if (loading) {
    return (
      <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[10rem] 1xl:py-[12rem] 3xl:py-[15rem]">
        <div className="max-1920">
          <div className="container">
            <div className="py-[7rem] text-center">
              <div className="animate-spin h-12 w-12 border-4 border-black rounded-full border-t-transparent mx-auto mb-4"></div>
              <h2 className="text-xl">Loading Guides...</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error && guides.length === 0) {
    return (
      <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[10rem] 1xl:py-[12rem] 3xl:py-[15rem]">
        <div className="max-1920">
          <div className="container">
            <div className="py-[7rem] text-center">
              <h2 className="text-xl text-red-600 mb-4">Error Loading Guides</h2>
              <p className="text-gray-600 mb-4">{error}</p>
              <button 
                onClick={() => fetchGuides(currentPage, selectedType)} 
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[10rem] 1xl:py-[12rem] 3xl:py-[15rem]">
      <div className="max-1920">
        <div className="container">
          {/* Guide Type Filter */}
          {/* {guideTypes.length > 0 && (
            <div className="mb-[4rem] flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => handleTypeFilter('')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedType === '' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Guides
              </button>
              {guideTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeFilter(type)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 capitalize ${
                    selectedType === type 
                      ? 'bg-black text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )} */}

          {guides.length > 0 ? (
            <>
              <ul className="flex flex-wrap justify-between">
                {guides.map((data) => (
                  <li
                  key={data._id}
                  className="w-full mb-[4rem] md:w-[48%] h-[inherit] xl:w-[30%] xl:mb-[6rem]"
                >
                  <Link
                    href={`/guides/${data._id}`}
                    className="relative block group common-car-item rounded-[4rem] 1xl:rounded-[5rem] 3xl:rounded-[5.8rem] overflow-hidden "
                  >
                      <div>
                        <img
                          src={data?.thumbnail ? data.thumbnail : "/images/bbt-world-item-1.webp"}
                          alt="Thumbnail"
                          width="475"
                          height="620"
                          className="block object-cover w-full h-full group-hover:scale-[1.1] transition-all duration-500 ease-in-out min-h-[300px] aspect-[9/12]"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-full px-[4rem] py-[4rem] sm:py-[6rem] sm:px-[6rem] md:py-[4rem] md:px-[4rem] xl:px-[3rem] 1xl:py-[5rem] 2xl:pl-[4rem] flex flex-col justify-end 3xl:pb-[7rem] 3xl:pl-[5rem] bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.2)]">
                        <p className="font-light text-white text-[1.2rem] mb-[1rem] xl:text-[1.4rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]">
                          {data.publishedDate}
                        </p>
                        <h5 className="text-white w-full font-normal text-[2rem] sm:text-[2.4rem] md:text-[2.2rem] xl:text-[2.2rem] 1xl:text-[2.5rem] 2xl:leading-[1.28] 2xl:tracking-[-1px] 2xl:text-[2.7rem] 3xl:text-[3.5rem]">
                          {data.title}
                        </h5>
                      </div>
                      <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center sm:w-[6rem] sm:h-[6rem] p-1 absolute top-[2.5rem] right-[2.5rem] sm:right-[4rem] sm:top-[4rem] md:top-12 md:right-12 xl:w-[4.3rem] xl:h-[4.3rem] 1xl:w-[5.5rem] 1xl:h-[5.5rem] 1xl:top-[2.5rem] 1xl:right-[2.5rem] 3xl:w-[6.7rem] 3xl:h-[6.7rem] 3xl:top-16 3xl:right-16 group-hover:bg-black transition-all duration-500 ease-in">
                        <img
                          src="/images/showroom-location-arrow.webp"
                          className="object-contain w-4 sm:w-[2rem] xl:w-[1.5rem] 2xl:w-6 3xl:w-[2.2rem] group-hover:invert transition-all duration-500 ease-in"
                          width="22"
                          height="22"
                          alt="Arrow Icon"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="xl:mt-[1rem]">
                  <ul className="flex justify-center">
                    {/* Previous Button */}
                    <li className={styles.paginationList}>
                      <button 
                        className={styles.paginationBtn}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <img
                          src="/images/pagination-arrow-prev.webp"
                          alt="Previous"
                          width="9"
                          height="17"
                          className="w-auto h-[1.2rem] lg:h-[1.7rem] object-contain group-hover:invert transition-all duration-500 ease-in-out"
                        />
                      </button>
                    </li>
                    
                    {/* Page Numbers */}
                    {getPaginationNumbers().map((page) => (
                      <li 
                        key={page} 
                        className={`${styles.paginationList} ${currentPage === page ? 'bg-black' : ''}`}
                      >
                        <button 
                          className={`${styles.paginationBtn} ${currentPage === page ? 'text-black' : ''}`}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </button>
                      </li>
                    ))}
                    
                    {/* Next Button */}
                    <li className={styles.paginationList}>
                      <button 
                        className={styles.paginationBtn}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <img
                          src="/images/pagination-arrow-next.webp"
                          alt="Next"
                          width="9"
                          height="17"
                          className="w-auto h-[1.2rem] lg:h-[1.7rem] object-contain group-hover:invert transition-all duration-500 ease-in-out"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="py-[7rem] text-center">
              <h2>No Guides Available Now!</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GuideList;
