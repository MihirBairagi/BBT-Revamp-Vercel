"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BlogCard from "./BlogCard";

const styles = {
  paginationList:
    "w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer group border border-[#555555]  bg-transparent rounded-[8px] m-[0.5rem] hover:bg-[#161616] xl:w-[5rem] xl:h-[5rem] xl:rounded-[1.2rem] 2xl:w-[6.2rem] 2xl:h-[6.2rem] 2xl:rounded-[1.6rem] 3xl:w-[8.2rem] 2xl:m-[1rem] 3xl:h-[8.2rem] 3xl:rounded-[2rem]",
  paginationBtn:
    "bg-transparent border-0 outline-none w-full h-full p-[5px] flex justify-center items-center text-[#333333] group-hover:text-[#fff] transition-all duration-500 text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.6rem] 3xl:text-[2rem] font-medium",
};

const BlogList = ({ blogs = [], currentPage = 1, totalPages = 1, totalBlogs = 0, isLoading = false }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'modified');

  // Handle sort change
  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSortBy(newSort);
    
    // Update URL with new sort parameter
    const params = new URLSearchParams(searchParams);
    if (newSort && newSort !== 'default') {
      const [sort, order] = newSort.split('-');
      params.set('sort', sort);
      params.set('order', order);
    } else {
      params.delete('sort');
      params.delete('order');
    }
    params.delete('page'); // Reset to first page when sorting
    
    router.push(`/blogs?${params.toString()}`);
  };

  // Handle pagination
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    
    router.push(`/blogs?${params.toString()}`);
  };

  // Generate pagination array
  const generatePaginationArray = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      if (totalPages > 1) rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const paginationArray = generatePaginationArray();

  return (
    <section className="bg-white pb-[6rem] xl:pb-[9rem] 2xl:pb-[12rem] 3xl:pb-[15rem]">
      <div className="max-1920">
        <div className="container">
          {isLoading ? (
            <div className="py-[7rem] text-center">
              <h2>Loading blogs...</h2>
            </div>
          ) : blogs.length > 0 ? (
            <>
              <div className="max-w-[25rem] ml-auto relative 1xl:max-w-[28rem] 3xl:max-w-[38rem]">
                <span className="absolute right-[2rem] top-[2rem] w-[1rem] h-[1rem] inline-block xl:top-[2.3rem] 1xl:w-[1.2rem] 3xl:w-[1.5rem] 3xl:top-[3.3rem] 3xl:right-[3rem]">
                  <img
                    src="/images/blogs/blog-dropdown.webp"
                    alt="Arrow"
                    className="w-full block object-contain h-auto"
                  />
                </span>

                <select
                  name=""
                  id=""
                  className="w-full bg-[#F4F4F1] outline-none border-0 px-[2rem] py-[1.2rem] text-[1.3rem] 3xl:text-[1.9rem] font-[500] rounded-[0.7rem] cursor-pointer mb-[5rem] md:mb-0 lg:rounded-[1rem] appearance-none xl:py-[1.5rem] 1xl:text-[1.5rem] 1xl:py-[1.6rem] 3xl:py-[2.2rem] 3xl:rounded-[1.7rem] 3xl:px-[3.5rem]"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="default">Sort By</option>
                  <option value="modified-desc">Latest First</option>
                  <option value="modified-asc">Oldest First</option>
                  <option value="added-desc">Recently Added</option>
                  <option value="posttitle-asc">Title A-Z</option>
                  <option value="posttitle-desc">Title Z-A</option>
                </select>
              </div>
              <ul className="flex flex-wrap justify-between md:[&>*:nth-child(even)]:translate-y-[9rem] md:mt-[-4rem] xl:[&>*:nth-child(even)]:translate-y-[12rem] 1xl:mt-[-5rem] 3xl:[&>*:nth-child(even)]:translate-y-[17rem] 3xl:mt-[-7rem]">
                {blogs.map((blog, index) => (
                  <li
                    key={blog.id || blog._id || index}
                    className="w-full mb-[4rem] md:w-[48%] h-[inherit] xl:w-[46.5%] xl:mb-[6rem] 3xl:mb-[9rem]"
                  >
                    <BlogCard data={blog} />
                  </li>
                ))}
              </ul>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="md:mt-[10rem] xl:mt-[15rem] 3xl:mt-[20rem]">
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
                    {paginationArray.map((page, index) => (
                      <li key={index} className={styles.paginationList}>
                        {page === '...' ? (
                          <span className={styles.paginationBtn}>...</span>
                        ) : (
                          <button 
                            className={`${styles.paginationBtn} ${currentPage === page ? 'bg-[#161616] text-white' : ''}`}
                            onClick={() => handlePageChange(page)}
                          >
                            {page}
                          </button>
                        )}
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
              <h2 className="text-[2.5rem] font-light mb-4">No Blogs Found!</h2>
              <p className="text-[1.2rem] text-gray-600">Please try a different search or check back later for new content.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
