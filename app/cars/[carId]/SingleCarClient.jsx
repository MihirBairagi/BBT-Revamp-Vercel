"use client";

import React, { useEffect, useState } from "react";
import { useProduct } from "../../lib/hooks/useProducts";
import { productsAPI } from "../../lib/services/api";
import Image from "next/image";
import BannerSection from "../../../Components/SingleCar/BannerSection/BannerSection";
import BasicDetails from "../../../Components/SingleCar/BasicDetails/BasicDetails";
import CarSummary from "../../../Components/SingleCar/CarSummary/CarSummary";
import PaidFeatures from "../../../Components/SingleCar/PaidFeatures/PaidFeatures";
import SpecificationTabs from "../../../Components/SingleCar/SpecificationSection/SpecificationTabs";
import SpecificationsAccordion from "../../../Components/SingleCar/SpecificationSection/SpecificationsAccordion";
import RelatedCars from "../../../Components/SingleCar/RelatedCars/RelatedCars";
import CompareSection from "../../../Components/SingleCar/CompareSection/CompareSection";
import PopularBrands from "../../../Components/SingleCar/PopularBrands/PopularBrands";
import ShopByCategory from "../../../Components/SingleCar/ShopByCategory/ShopByCategory";
import FinanceSection from "../../../Components/SingleCar/FinanceSection/FinanceSection";
import PreviewSection from "../../../Components/SingleCar/PreviewSection/PreviewSection";
import OurShowrooms from "../../../Components/CommonComponents/OurShowrooms/OurShowrooms";
import BbtCertifiedSection from "../../../Components/SingleCar/BbtCertifiedSection/BbtCertifiedSection";
import { ensureFullImageUrl } from "../../lib/services/products";
import {
  combineSpecifications,
} from "../../lib/utils/specifications";
import { pushProductView, pushGoogleAdsViewItem } from "../../lib/utils/gtm";

// Helper to log debug info
function logDebug(label, data) {
  if (process.env.NEXT_PUBLIC_DEBUG === "true") {
    console.log(`DEBUG: ${label}`, data);
  }
}

// Helper function to process car data from API response
function processCarData(response) {
  if (!response || !response.success || !response.product) {
    return null;
  }

  const product = response.product;

  // Map the product to our frontend format
  const carData = {
    id: product.id || product.id_ || product.mongodb_id || "",
    name: product.proname || "",
    description: product.prodesc || "",
    price: product.proprice || "",
    specialPrice: product.prospprice || "",
    videoEmbedCode: product.videoembcode || "",
    images: [], // Will be populated from productImages
    category: product.category || "",
    featured:
      product.featured === "1" ||
      product.featured === "yes" ||
      product.featured === "true",
    isFeatured:
      product.featured === "1" ||
      product.featured === "yes" ||
      product.featured === "true",

    isCertified:
      product.certified === "1" ||
      product.certified === "yes" ||
      product.certified === "true",

    stock: product.stock || "",
    isSold: product.stock === "0",

    // Car specific details from product attributes
    yearOfRegistration: product.registrationYear || "",
    kmDriven: product.kmDriven || "",
    fuelType: product.fuelType || "",
    registrationState: product.regstate || "",

    isBooked:
      product.booked === "1" ||
      product.booked === "yes" ||
      product.booked === "true",
    status: product.status || "",

    // Meta information
    metaTitle: product.metatitle || "",
    metaDescription: product.metadesc || "",
    metaKeyword: product.metakeyword || "",

    // URL
    postUrl: product.posturl || "",
    url: product.posturl || "",

    // Dates
    added: product.added || "",
    modified: product.modified || "",
    date: product.modified || product.added || "",

    // Features arrays - may be already processed in API response
    silentFeatures: Array.isArray(product.silentFeatures)
      ? product.silentFeatures
      : product.silentfeatures
      ? product.silentfeatures
          .split(/[~,|]/)
          .map((i) => i.trim())
          .filter(Boolean)
      : [],

    paidFeatures: Array.isArray(product.paidFeatures)
      ? product.paidFeatures
      : product.paidfeatures
      ? product.paidfeatures
          .split(/[~,|]/)
          .map((i) => i.trim())
          .filter(Boolean)
      : [],

    requiredMaintenance: Array.isArray(product.requiredMaintenance)
      ? product.requiredMaintenance
      : product.required_maintenance
      ? product.required_maintenance
          .split(/[~,|]/)
          .map((i) => i.trim())
          .filter(Boolean)
      : [],

    preventiveMaintenance: Array.isArray(product.preventiveMaintenance)
      ? product.preventiveMaintenance
      : product.preventive_maintenance
      ? product.preventive_maintenance
          .split(/[~,|]/)
          .map((i) => i.trim())
          .filter(Boolean)
      : [],

    partsReplaced: Array.isArray(product.partsReplaced)
      ? product.partsReplaced
      : product.parts_replaced
      ? product.parts_replaced
          .split(/[~,|]/)
          .map((i) => i.trim())
          .filter(Boolean)
      : [],

    // Owner quote and exhaust note
    ownerQuote: product.ownerquote || "",
    exhaustNote: product.exhaustnote || "",

    // Brand and model information
    brand: product.brand || null,
    model: product.model || null,

    // Thumbnail and gallery
    thumbnail: product.prolistimage || "",
    view360: product.view_360 || "",
    view360Image: product.view_360_image || "",

    // Tags
    tags: product.protags
      ? product.protags.split(",").map((tag) => tag.trim())
      : [],

    // Styles
    styles: Array.isArray(product.styles)
      ? product.styles
      : product.styles
      ? product.styles.split(",").map((style) => style.trim())
      : [],

    // Attributes (will be populated separately)
    attributes: product.attributes || {},

    // Additional fields
    vehicleType: product.vehicle_type || "",
    altTitle: product.imgalt || "",
    url360: product.view_360 || "",
  };

  // Process images if available
  if (response.productImages && Array.isArray(response.productImages)) {
    carData.images = response.productImages.map((image) => ({
      url: ensureFullImageUrl(image.pgalimage),
      alt: image.imgalt || carData.name || "Car Image",
      id: image.id || image.id_,
      type: image.ptype || "1",
      order: parseInt(image.porder) || 0,
    }));

    // Sort images by order
    carData.images.sort((a, b) => a.order - b.order);
  }

  // Process car features if available
  let carFeatures = {};
  if (response.carFeatures && response.carFeatures.length > 0) {
    carFeatures = response.carFeatures.reduce((acc, feature) => {
      acc[feature.attname] = feature.provalue;
      return acc;
    }, {});
  }

  return { carData, carFeatures };
}

const SingleCarClient = ({
  initialCarData,
  initialRelatedProducts,
  initialSpecifications,
  carId,
}) => {
  const [isClientMounted, setIsClientMounted] = useState(false);
  const [slideScrolled, setSlideScrolled] = useState(false);

  // Use SWR for real-time updates with initial data - ALWAYS call the hook
  const {
    data: swrData,
    error,
    isLoading,
    isValidating,
  } = useProduct(carId, {
    initialData: { product: initialCarData },
    swrOptions: {
      dedupingInterval: 10000, // 10 seconds for single product (increased from 5s)
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateIfStale: false, // Don't revalidate if stale on mount
      revalidateOnMount: false, // Don't revalidate on mount since we have initial data
    },
  });

  // Use initial data for SSR, then switch to SWR data when client is mounted
  // Process SWR data if available to ensure maintenance fields are included
  let currentData = initialCarData;
  let currentCarFeatures = {};
  
  if (isClientMounted && swrData?.product) {
    // Process SWR response to get properly formatted carData and carFeatures
    const processed = processCarData({
      success: true,
      product: swrData.product,
      productImages: swrData.productImages || [],
      carFeatures: swrData.carFeatures || []
    });
    
    if (processed) {
      currentData = processed.carData;
      currentCarFeatures = processed.carFeatures;
    } else {
      // Fallback: use raw product data
      currentData = swrData.product;
      if (swrData.carFeatures && Array.isArray(swrData.carFeatures)) {
        currentCarFeatures = swrData.carFeatures.reduce((acc, feature) => {
          acc[feature.attname] = feature.provalue;
          return acc;
        }, {});
      } else if (swrData.carFeatures && typeof swrData.carFeatures === 'object') {
        currentCarFeatures = swrData.carFeatures;
      }
    }
  }
  
  const currentSpecifications =
    isClientMounted && swrData?.product
      ? combineSpecifications(currentCarFeatures, currentData)
      : initialSpecifications;

  useEffect(() => {
    setIsClientMounted(true);
  }, []);

  // Track product view in GTM when product data is available
  useEffect(() => {
    if (isClientMounted && currentData && currentData.id) {
      // Standard GTM tracking
      pushProductView({
        id: currentData.id,
        id_: currentData.id,
        name: currentData.name,
        proname: currentData.name,
        price: currentData.price,
        proprice: currentData.price,
        brand: currentData.brand,
        category: currentData.category,
      });
      
      // Google Ads remarketing
      pushGoogleAdsViewItem(currentData);
    }
  }, [isClientMounted, currentData?.id]);

  // If no car is found, show error state instead of calling notFound()
  if (!currentData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Car Not Found
          </h1>
          <p className="text-gray-600">
            The car you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  // NEVER show loading state - always show the data we have
  // The initial SSR data will be shown immediately, and SWR will update in the background

  return (
    <>
      {/* Banner with gallery */}
      <BannerSection
        carData={currentData}
        images={currentData.images || []}
        thumbnail={currentData.thumbnail || ""}
        setSlideScrolled={setSlideScrolled}
        slideScrolled={slideScrolled}
      />
      <div className={`single-car-empty-bar bg-transparent transition-all duration-500 md:hidden ${slideScrolled && "banner-scrolled"}`}></div>
      <section
        className={`relative w-full z-10 py-12 rounded-t-3xl  bg-white md:mt-0 md:rounded-none transition-all duration-500 lg:py-0 lg:-mt-4`}
        id="afterSliderSection"
      >
        
        {/* Basic car details */}
        <BasicDetails
          name={currentData.name}
          price={currentData.price}
          specialPrice={currentData.specialPrice}
          registrationYear={currentData.yearOfRegistration}
          kmDriven={currentData.kmDriven}
          fuelType={currentData.fuelType}
          registrationState={currentData.registrationState}
          isBooked={currentData.isBooked}
          isCertified={currentData.isCertified}
          brand={currentData.brand?.name || ""}
          model={currentData.model?.name || ""}
          carId={carId}
          carData={currentData}
        />
        <div className="max-1920">
          {/* Summary section with description */}
          <CarSummary
            description={currentData.description}
            silentFeatures={currentData.silentFeatures}
            ownerQuote={currentData.ownerQuote}
            exhaustNote={currentData.exhaustNote}
            attributes={currentData.attributes}
          />

          {/* Paid features */}
          {currentData.paidFeatures && currentData.paidFeatures.length > 0 && (
            <PaidFeatures features={currentData.paidFeatures} />
          )}

          {/* Specification tabs */}
          <SpecificationTabs specifications={currentSpecifications} />

          {/* Specification accordion for mobile */}
          <SpecificationsAccordion specifications={currentSpecifications} />
        </div>
      </section>

      {/* Preview video section */}
      {currentData.videoEmbedCode &&
        currentData.videoEmbedCode.trim() !== "" &&
        currentData.exhaustNote &&
        currentData.exhaustNote.trim() !== "" && (
          <PreviewSection carData={currentData} />
        )}

      {/* BBT Certified section */}
      {currentData.isCertified === true && (
        <BbtCertifiedSection carData={currentData} />
      )}

      {/* Related cars section */}
      <RelatedCars
        carId={carId}
        brand={currentData.brand?.name}
        relatedCars={initialRelatedProducts || []}
      />

      {/* Finance section */}
      <FinanceSection carData={currentData} />

      {/* Compare section */}
      <CompareSection carData={currentData} />

      {/* Popular brands */}
      <PopularBrands />

      {/* Shop by category */}
      <ShopByCategory />

      {/* Showrooms */}
      <OurShowrooms bg={"#F3F3F3"} />

      {/* Debug info for development */}
      {process.env.NEXT_PUBLIC_DEBUG === "true" && isClientMounted && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
          <div>SWR: {isValidating ? "Validating" : "Stale"}</div>
          <div>Last Update: {new Date().toLocaleTimeString()}</div>
        </div>
      )}

      {/* Subtle loading indicator for background updates */}
      {isClientMounted && isValidating && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm shadow-lg z-50">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Updating...
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCarClient;
