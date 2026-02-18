"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "../../Collection/ProductCard/ProductCard";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { isProductSoldOut } from "../../../app/lib/utils/productUtils";

const CarList = ({
  products = [],
  brandData,
  isLoading = false,
  cityContext,
}) => {
  console.log("products", products);
  const [popupOpen, setPopupOpen] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const productsPerPage = 18;

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  // Initialize displayed products when products change
  useEffect(() => {
    if (products && products.length > 0) {
      // Fallback client-side sort: in-stock first
      const sorted = [...products].sort((a, b) => {
        const aSold = isProductSoldOut(a);
        const bSold = isProductSoldOut(b);
        if (aSold === bSold) return 0;
        return aSold ? 1 : -1;
      });
      setDisplayedProducts(sorted);
      setCurrentPage(1);
    }
  }, [products]);

  // Process images with proper URL handling (same as Collection ProductCard)
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

  // Transform products data to match ProductCard component expectations (same as Collection page)
  const transformedProducts = displayedProducts.map((product) => {
    // Process gallery images if available
    const processedImages =
      product.images?.map((img) => ({
        url: processImageUrl(img.url || img.pgalimage),
        alt: img.alt || product.name || product.title || "Car Image",
        id: img.id || img.id_,
        type: img.type || img.ptype || "1",
        order: parseInt(img.order || img.porder) || 0,
      })) || [];

    // Sort by order
    processedImages.sort((a, b) => a.order - b.order);

    return {
      id: product.id || product.id_ || product.mongodb_id,
      _id: product._id || product.id || product.id_ || product.mongodb_id,
      mongodb_id: product.mongodb_id || product.id || product._id,
      name: product.proname || product.name || product.title || "",
      title: product.proname || product.name || product.title || "",
      price: product.proprice || product.price || 0,
      discountedPrice: product.prospprice || product.specialPrice || null,
      yearOfRegistration: product.registrationYear || "N/A",
      registrationYear: product.registrationYear || "N/A",
      registrationState:
        product.registrationState ||
        product.regstate ||
        product.location ||
        product.state ||
        "N/A",
      location:
        product.registrationState ||
        product.regstate ||
        product.location ||
        product.state ||
        "N/A",
      state:
        product.registrationState ||
        product.regstate ||
        product.location ||
        product.state ||
        "N/A",
      kmDriven: product.kmDriven || product.km_driven || "N/A",
      km_driven: product.kmDriven || product.km_driven || "N/A",
      fuelType: product.fuelType || product.fuel_type || "N/A",
      fuel_type: product.fuelType || product.fuel_type || "N/A",
      thumbnail: processImageUrl(
        product.thumbnail || product.prolistimage,
        true
      ),
      prolistimage: product.prolistimage || product.thumbnail,
      images: processedImages,
      gallery: processedImages.map((img) => img.url),
      isBooked:
        product.isBooked || product.booked === "1" || product.booked === "yes",
      booked:
        product.isBooked || product.booked === "1" || product.booked === "yes"
          ? "1"
          : "0",
      isSoldOut:
        product.isSoldOut ||
        product.isSoldOut === true ||
        product.isSoldOut === '1' ||
        product.sold === "1" ||
        product.sold === "yes" ||
        product.price === 0 ||
        product.price === '0' ||
        product.inStock === false ||
        product.inStock === '0' ||
        product.stock === '0',
      sold:
        product.isSoldOut ||
        product.isSoldOut === true ||
        product.isSoldOut === '1' ||
        product.sold === "1" ||
        product.sold === "yes" ||
        product.price === 0 ||
        product.price === '0' ||
        product.inStock === false ||
        product.inStock === '0' ||
        product.stock === '0'
          ? "1"
          : "0",
      isCertified:
        product.isCertified ||
        product.featured === "1" ||
        product.featured === "yes",
      featured:
        product.isCertified ||
        product.featured === "1" ||
        product.featured === "yes"
          ? "1"
          : "0",
      brand: {
        name: brandData?.name || product.brand?.name || "",
        id: brandData?.id || product.brandId,
      },
      model: {
        name: product.model?.name || product.modelname || "",
        id: product.modelId || product.model?.id,
      },
    };
  });

  // Load more functionality
  const loadMore = async () => {
    if (isLoadingMore) return;

    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    if (startIndex >= products.length) return; // No more products to load

    setIsLoadingMore(true);

    // Simulate loading delay for better UX
    setTimeout(() => {
      const newProducts = products.slice(startIndex, endIndex);
      setDisplayedProducts((prev) => [...prev, ...newProducts]);
      setCurrentPage(nextPage);
      setIsLoadingMore(false);
    }, 300);
  };

  // Check if there are more products to load
  const hasMoreProducts = displayedProducts.length < products.length;

  return (
    <section className="bg-[#f3f3f3] lg:pb-14 xl:pb-[5rem] 1xl:pb-[6rem] 2xl:pb-[8rem] 3xl:pb-[10rem]">
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
      <div className="max-1920">
        <div className="block md:flex md:flex-wrap md:justify-between md:w-[91%] mx-auto md:pb-20 lg:w-[83%] 3xl:mt-12 after:content-[''] after:w-full after:md:w-[48%] after:xl:w-[31%] after:h-0">
          {isLoading ? (
            // Loading state
            <div className="w-full flex justify-center items-center py-20">
              <div className="animate-spin h-12 w-12 border-4 border-black rounded-full border-t-transparent"></div>
            </div>
          ) : transformedProducts.length > 0 ? (
            // Display products using the same ProductCard as Collection page
            transformedProducts.map((product) => (
              <ProductCard key={product.id || product._id} product={product} />
            ))
          ) : (
            // Empty state
            <div className="w-full text-center py-20">
              <div className="max-w-md mx-auto">
                <Image
                  src="/images/no-cars-found.webp"
                  alt="No cars found"
                  width="200"
                  height="200"
                  className="mx-auto mb-6 opacity-50"
                />
                <h3 className="text-2xl font-semibold mb-4">No Cars Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any {brandData?.name || "brand"} cars at the
                  moment. Please check back later or explore other brands.
                </p>
                <a href="/collection" className="btn btnBlack roundedBtn">
                  View All Cars
                </a>
              </div>
            </div>
          )}

          {/* Loading more indicator */}
          {isLoadingMore && (
            <div className="w-full text-center py-8 clear-both">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-2">Loading more cars...</p>
            </div>
          )}
        </div>

        {/* Load more button (same style as Collection page) */}
        {!isLoadingMore && hasMoreProducts && transformedProducts.length > 0 && (
          <div className="container w-full my-32 pt-16 clear-both">
            <div className="hidden lg:block h-1 border-t border-black"></div>
            <div className="px-3 pb-20 lg:pb-0 lg:flex lg:justify-center lg:mt-[-3rem] lg:bg-[#f3f3f3] lg:px-10 lg:w-max lg:mx-auto">
              <button
                onClick={loadMore}
                className="bg-transparent font-medium text-black flex justify-center items-center border border-black rounded-lg py-7 text-2xl text-center w-full hover:bg-black hover:text-white transition-all duration-300 ease-in lg:inline-flex lg:w-[20rem] lg:h-[5rem] lg:rounded-[4rem] 3xl:text-[1.8rem] 3xl:min-w-[27rem] 3xl:min-h-[6.5rem]"
              >
                Load More
              </button>
            </div>
          </div>
        )}

        {/* End of results message */}
        {!hasMoreProducts && transformedProducts.length > 0 && (
          <div className="w-full text-center py-8">
            <p className="text-gray-600">
              You've viewed all {brandData?.name || "brand"} cars
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarList;
