"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useProducts } from "../../../app/lib/hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import { ProductSkeletonGroup } from "../../UI/Skeleton/ProductSkeleton";
import ErrorMessage from "../../UI/Error/ErrorMessage";
import Link from "next/link";

const CollectionListBottom = () => {
  // Fetch products with regular pagination, but showing popular/featured items
  const {
    products,
    isLoading,
    isValidating,
    isError,
    error,
    totalPages,
    totalItems,
  } = useProducts({
    featured: true, // Get featured items
    limit: 6, // Show 6 items
    sort: "createdAt",
    order: "desc",
  });

  useEffect(() => {
    AOS.init();
  }, []);

  // Render loading state
  if (isLoading) {
    return (
      <section className="bg-white md:bg-[#f3f3f3] lg:pt-24 lg:pb-36 3xl:py-[12rem]">
        <div className="max-1920">
          <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] md:pb-20 mx-auto lg:w-[83%] lg:mb-20 3xl:mb-[7rem]">
            <ProductSkeletonGroup count={6} />
          </div>
        </div>
      </section>
    );
  }

  // Render error state
  if (isError) {
    return (
      <section className="bg-white md:bg-[#f3f3f3] lg:pt-24 lg:pb-36 3xl:py-[12rem]">
        <div className="max-1920">
          <ErrorMessage
            message={error?.message || "Failed to load featured cars."}
            onRetry={() => window.location.reload()}
          />
        </div>
      </section>
    );
  }

  // If no featured products, don't render the section
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="bg-white md:bg-[#f3f3f3] lg:pt-24 lg:pb-36 3xl:py-[12rem]">
      <div className="max-1920">
        <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] md:pb-20 mx-auto lg:w-[83%] lg:mb-20 3xl:mb-[7rem]">
          {/* Display the products */}
          {products.map((product) => (
            <div className="md:w-[48%] xl:w-[31%]" key={product._id}>
                <ProductCard product={product} />
            </div>
          ))}
        </div>
        {/* <div className="container">
          <div className="hidden lg:block h-1 border-t border-black"></div>
          <div className="px-3 pb-20 lg:pb-0 lg:flex lg:justify-center lg:mt-[-3rem] lg:bg-[#f3f3f3] lg:px-10 lg:w-max lg:mx-auto">
            <Link href="/collection">
              <div className="bg-black text-white rounded-lg flex items-center justify-center gap-x-3 px-[2.7rem] py-[1.4rem] text-base uppercase tracking-[1.7px] leading-5 font-medium max-w-max mx-auto 3xl:text-[1.2rem] 3xl:py-[1.7rem] 3xl:px-[3.5rem]">
                <span>Explore Collection</span>
                <img
                  src="/images/explore-arrow.webp"
                  alt="arrow"
                  width="13"
                  height="9"
                  className="object-contain 1xl:w-[1.1rem]"
                />
              </div>
            </Link>
          </div>
        </div> */}
        
      </div>
    </section>
  );
};

export default CollectionListBottom;
