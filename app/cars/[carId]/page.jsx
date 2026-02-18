import React from "react";
import { productsAPI } from "../../lib/services/api";
import { productsService } from "../../lib/services/products";
import { notFound, permanentRedirect } from "next/navigation";
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
  transformCarFeaturesToSpecifications,
  getFallbackSpecifications,
} from "../../lib/utils/specifications";
import SingleCarClient from "./SingleCarClient";

// Force dynamic rendering to ensure fresh data on every request
export const dynamic = 'force-dynamic';

// Set a very short revalidation time for more frequent updates
export const revalidate = 60; // Revalidate every minute instead of every hour

// Helper to log debug info
function logDebug(label, data) {
  if (process.env.NEXT_PUBLIC_DEBUG === "true") {
    console.log(`DEBUG: ${label}`, data);
  }
}

// Helper function to generate car data from API responses
async function generateCarData(carId) {
  // Localized URL function to handle thumbnail and gallery paths correctly
  const ensureFullImageUrl = (imageUrl, isThumbnail = false) => {
    if (!imageUrl || imageUrl.startsWith("http")) {
      return imageUrl;
    }
    const cdnBase = "https://cdn.bigboytoyz.com/new-version/products/";
    return isThumbnail
      ? `${cdnBase}${imageUrl}`
      : `${cdnBase}product/${imageUrl}`;
  };

  try {
    const response = await productsAPI.getOne(carId);

    if (response && response.success && response.product) {
      logDebug("Car data from single product API", response.product);

      // Map the product to our frontend format
      const carData = {
        id:
          response.product.id ||
          response.product.id_ ||
          response.product.mongodb_id ||
          "",
        name: response.product.proname || "",
        description: response.product.prodesc || "",
        price: response.product.proprice || "",
        specialPrice: response.product.prospprice || "",
        videoEmbedCode: response.product.videoembcode || "",
        images: [], // Will be populated from productImages
        category: response.product.category || "",
        featured:
          response.product.featured === "1" ||
          response.product.featured === "yes" ||
          response.product.featured === "true",
        isFeatured:
          response.product.featured === "1" ||
          response.product.featured === "yes" ||
          response.product.featured === "true",

        isCertified:
          response.product.certified === "1" ||
          response.product.certified === "yes" ||
          response.product.certified === "true",

        stock: response.product.stock || "",
        isSold: response.product.stock === "0",

        // Car specific details from product attributes
        yearOfRegistration: response.product.registrationYear || "",
        kmDriven: response.product.kmDriven || "",
        fuelType: response.product.fuelType || "",
        registrationState: response.product.regstate || "",

        isBooked:
          response.product.booked === "1" ||
          response.product.booked === "yes" ||
          response.product.booked === "true",
        status: response.product.status || "",

        // Meta information
        metaTitle: response.product.metatitle || "",
        metaDescription: response.product.metadesc || "",
        metaKeyword: response.product.metakeyword || "",

        // URL
        postUrl: response.product.posturl || "",
        url: response.product.posturl || "",

        // Dates
        added: response.product.added || "",
        modified: response.product.modified || "",
        date: response.product.modified || response.product.added || "",

        // Features arrays - may be already processed in API response
        silentFeatures: Array.isArray(response.product.silentFeatures)
          ? response.product.silentFeatures
          : response.product.silentfeatures
          ? response.product.silentfeatures
              .split(/[~,|]/)
              .map((i) => i.trim())
              .filter(Boolean)
          : [],

        paidFeatures: Array.isArray(response.product.paidFeatures)
          ? response.product.paidFeatures
          : response.product.paidfeatures
          ? response.product.paidfeatures
              .split(/[~,|]/)
              .map((i) => i.trim())
              .filter(Boolean)
          : [],

        requiredMaintenance: Array.isArray(response.product.requiredMaintenance)
          ? response.product.requiredMaintenance
          : response.product.required_maintenance
          ? response.product.required_maintenance
              .split(/[~,|]/)
              .map((i) => i.trim())
              .filter(Boolean)
          : [],

        preventiveMaintenance: Array.isArray(
          response.product.preventiveMaintenance
        )
          ? response.product.preventiveMaintenance
          : response.product.preventive_maintenance
          ? response.product.preventive_maintenance
              .split(/[~,|]/)
              .map((i) => i.trim())
              .filter(Boolean)
          : [],

        partsReplaced: Array.isArray(response.product.partsReplaced)
          ? response.product.partsReplaced
          : response.product.parts_replaced
          ? response.product.parts_replaced
              .split(/[~,|]/)
              .map((i) => i.trim())
              .filter(Boolean)
          : [],

        // Additional fields
        ownerQuote: response.product.ownerquote || "",
        exhaustNote: response.product.exhaustnote || "",
        title: response.product.proname || response.product.imgalt || "",
      };

      // Process product images from the response if available
      if (
        response.productImages &&
        Array.isArray(response.productImages) &&
        response.productImages.length > 0
      ) {
        logDebug("Product images from API", response.productImages);

        // Add all product images to the car data
        response.productImages.forEach((image) => {
          carData.images.push({
            url: ensureFullImageUrl(image.pgalimage),
            alt: image.imgalt || carData.title || "Car Image",
            id: image.id || image.id_,
            type: image.ptype || "1",
            order: parseInt(image.porder) || 0,
          });
        });

        // Sort images by order if available
        carData.images.sort((a, b) => a.order - b.order);
      }

      // Process brand information if available
      if (response.brand) {
        carData.brand = {
          id: response.brand.id || response.brand.id_,
          name: response.brand.bname || "",
          description: response.brand.bdesc || "",
          icon: response.brand.bicon || "",
          url: response.brand.posturl || "",
        };
      } else {
        carData.brand = {
          id: response.product.brandid || "",
          name: "", // Will be populated from brand object in car detail page
        };
      }

      // Process brand model information if available
      if (response.brandModel) {
        carData.model = {
          id: response.brandModel.id || response.brandModel.id_,
          name: response.brandModel.modelname || "",
          description: response.brandModel.modeldesc || "",
          image: response.brandModel.modelimage || "",
          url: response.brandModel.posturl || "",
        };
      } else {
        carData.model = {
          id: response.product.bmodelid || "",
          name: "",
        };
      }

      console.log("Mapped car data:", {
        id: carData.id,
        name: carData.name,
        hasImages: carData.images.length > 0,
        brand: carData.brand?.name,
        model: carData.model?.name,
      });

      // Fetch additional images from the gallery endpoint to ensure we have all images
      try {
        // console.log(`Fetching gallery images for product ID: ${carData.id}`);
        const galleryResponse = await productsAPI.getProductGallery(carData.id);
        const addedUrls = new Set();
        const finalImages = [];

        // 1. Prioritize thumbnail
        const thumbnail = response.product.thumbnail || carData.prolistimage;
        if (thumbnail) {
          const thumbUrl = ensureFullImageUrl(thumbnail, true);
          if (!addedUrls.has(thumbUrl)) {
            finalImages.push({
              url: thumbUrl,
              alt: carData.title || "Car Image",
              id: "thumbnail",
              order: -1,
            });
            addedUrls.add(thumbUrl);
          }
        }

        if (
          galleryResponse &&
          galleryResponse.success &&
          galleryResponse.gallery
        ) {
          logDebug("Gallery images from API", galleryResponse.gallery);

          const sortedGallery = galleryResponse.gallery.sort(
            (a, b) => (parseInt(a.porder) || 0) - (parseInt(b.porder) || 0)
          );

          sortedGallery.forEach((image) => {
            const imageUrl = ensureFullImageUrl(
              image.pgalimage || image.imageUrl
            );
            if (!addedUrls.has(imageUrl)) {
              finalImages.push({
                url: imageUrl,
                alt: image.imgalt || carData.title || "Car Image",
                id: image.id || image.id_,
                type: image.ptype || "1",
                order: parseInt(image.porder) || 0,
              });
              addedUrls.add(imageUrl);
            }
          });

          carData.images = finalImages;
          // console.log(
          //   `Loaded ${carData.images.length} images from gallery for ${carData.name}`
          // );
        } else {
          console.log(
            "No gallery images found, using images from product response"
          );
          carData.images.sort((a, b) => a.order - b.order);
          if (carData.prolistimage) {
            const thumbUrl = ensureFullImageUrl(carData.prolistimage, true);
            if (!carData.images.some((i) => i.url === thumbUrl)) {
              carData.images.unshift({
                url: thumbUrl,
                alt: carData.title || "Car Image",
                id: "prolistimage",
                order: -1,
              });
            }
          }
        }
      } catch (galleryError) {
        console.error("Error fetching gallery images:", galleryError);
        console.log("Falling back to images from product response");
      }

      // Fetch product attributes
      try {
        const attributesResponse = await productsAPI.getProductAttributes(
          carData.id
        );
        if (
          attributesResponse &&
          attributesResponse.success &&
          attributesResponse.data
        ) {
          carData.attributes = attributesResponse.data;
        }
      } catch (error) {
        console.error("Error fetching product attributes:", error);
        carData.attributes = [];
      }

      // Get related products (cars from any brand with price-based selection)
      let relatedProducts = [];

      try {
        // Fetch cars from all brands (no brandId filter)
        const response = await productsAPI.getCollection(
          1,
          50, // Increased limit to get more options for better price matching
          "modified",
          "desc",
          false,
          "",
          "", // Empty brandId to get cars from all brands
          false,
          true
        );
        if (response && response.success && response.data) {
          const allRelated = response.data.filter(
            (p) => p.id !== carData.id && p.price && p.price !== 0 && p.price !== "0" && p.price !== null && p.price !== undefined && p.stock !== "0" && p.stock !== 0
          );

          // Convert prices to numbers for proper comparison
          const currentPrice = parseFloat(carData.price) || 0;
          const targetPriceDifference = 2000000; // 20,00,000 (20 lakhs)
          const priceRange = 500000; // 5 lakh tolerance range for matching
          
          // Target price ranges
          const higherPriceTarget = currentPrice + targetPriceDifference;
          const lowerPriceTarget = currentPrice - targetPriceDifference;
          
          // Separate all cars into higher and lower than current price
          const allHigherPriced = allRelated
            .filter((p) => {
              const productPrice = parseFloat(p.price) || 0;
              return productPrice > currentPrice;
            })
            .sort((a, b) => {
              const priceA = parseFloat(a.price) || 0;
              const priceB = parseFloat(b.price) || 0;
              return priceA - priceB; // Sort ascending (cheapest higher-priced first)
            });
            
          const allLowerPriced = allRelated
            .filter((p) => {
              const productPrice = parseFloat(p.price) || 0;
              return productPrice < currentPrice && productPrice > 0;
            })
            .sort((a, b) => {
              const priceA = parseFloat(a.price) || 0;
              const priceB = parseFloat(b.price) || 0;
              return priceB - priceA; // Sort descending (most expensive lower-priced first)
            });
          
          // Find cars in ideal higher price range (~20 lakhs more)
          const idealHigherPriced = allHigherPriced.filter((p) => {
            const productPrice = parseFloat(p.price) || 0;
            return productPrice >= (higherPriceTarget - priceRange) && 
                   productPrice <= (higherPriceTarget + priceRange);
          });
          
          // Find cars in ideal lower price range (~20 lakhs less)
          const idealLowerPriced = allLowerPriced.filter((p) => {
            const productPrice = parseFloat(p.price) || 0;
            return productPrice >= (lowerPriceTarget - priceRange) && 
                   productPrice <= (lowerPriceTarget + priceRange);
          });

          // Smart allocation logic with safety checks
          let selectedHigher = [];
          let selectedLower = [];
          
          // Try to get 2 cars from higher price range
          if (idealHigherPriced.length >= 2) {
            // We have enough cars in ideal range
            selectedHigher = idealHigherPriced.slice(0, 2);
          } else if (idealHigherPriced.length === 1) {
            // Only 1 car in ideal range, take it and find 1 more from available higher-priced cars
            selectedHigher.push(idealHigherPriced[0]);
            const remainingHigher = allHigherPriced.filter(p => p.id !== idealHigherPriced[0].id);
            if (remainingHigher.length > 0) {
              selectedHigher.push(remainingHigher[0]);
            }
          } else if (allHigherPriced.length > 0) {
            // No cars in ideal range, but we have higher-priced cars available
            selectedHigher = allHigherPriced.slice(0, Math.min(2, allHigherPriced.length));
          }
          
          // Try to get 1 car from lower price range
          if (idealLowerPriced.length >= 1) {
            selectedLower = idealLowerPriced.slice(0, 1);
          } else if (allLowerPriced.length > 0) {
            selectedLower = allLowerPriced.slice(0, 1);
          }
          
          // Add selected cars to related products
          relatedProducts.push(...selectedHigher);
          relatedProducts.push(...selectedLower);

          // Safety check: If we still don't have 3 cars, fill remaining slots intelligently
          if (relatedProducts.length < 3) {
            const needed = 3 - relatedProducts.length;
            const usedIds = new Set(relatedProducts.map(p => p.id));
            
            // Priority 1: Try to fill with higher-priced cars if we need more
            if (selectedHigher.length < 2) {
              const remainingHigher = allHigherPriced.filter(p => !usedIds.has(p.id));
              const takeFromHigher = Math.min(needed, remainingHigher.length, 2 - selectedHigher.length);
              relatedProducts.push(...remainingHigher.slice(0, takeFromHigher));
              remainingHigher.slice(0, takeFromHigher).forEach(p => usedIds.add(p.id));
            }
            
            // Priority 2: Fill remaining with lower-priced cars if needed
            if (relatedProducts.length < 3) {
              const remainingLower = allLowerPriced.filter(p => !usedIds.has(p.id));
              const stillNeeded = 3 - relatedProducts.length;
              relatedProducts.push(...remainingLower.slice(0, stillNeeded));
            }
          }
          
          // Final safety check: If we still don't have enough, use any available cars
          if (relatedProducts.length < 3) {
            const usedIds = new Set(relatedProducts.map(p => p.id));
            const anyRemaining = allRelated
              .filter(p => !usedIds.has(p.id))
              .sort((a, b) => {
                const priceA = parseFloat(a.price) || 0;
                const priceB = parseFloat(b.price) || 0;
                const diffA = Math.abs(priceA - currentPrice);
                const diffB = Math.abs(priceB - currentPrice);
                return diffA - diffB;
              });
            
            const stillNeeded = 3 - relatedProducts.length;
            relatedProducts.push(...anyRemaining.slice(0, stillNeeded));
          }
        }
      } catch (error) {
        console.error("Error fetching related products:", error);
      }

      const toReturn = {
        carData,
        relatedProducts,
        // specifications: response.carFeatures,
        carFeatures: response.carFeatures, // Include carFeatures in return
      };

      console.log("toReturn specifications", toReturn);
      // console.log('carData', carData);

      return toReturn;
    }
  } catch (error) {
    console.error("Error in generateCarData:", error);
    return null;
  }
}

// Helper to process array fields
function processArrayField(field) {
  if (!field) return [];

  if (Array.isArray(field)) {
    return field;
  }

  // Split by common separators and filter out empty values
  return field
    .split(/[~,|]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

// Preload the car data for faster loading
export async function generateMetadata({ params }) {
  try {
    const { carData } = await generateCarData(params.carId);
    
    if (!carData) {
      return {
        title: 'Car Not Found - Big Boy Toyz',
        description: 'The car you are looking for does not exist.',
      };
    }

    return {
      title: carData.metaTitle || `${carData.name} - Big Boy Toyz`,
      description: carData.metaDescription || carData.description || `Explore ${carData.name} at Big Boy Toyz. Find detailed specifications, pricing, and more.`,
      keywords: carData.metaKeyword || `${carData.name}, luxury cars, Big Boy Toyz`,
      openGraph: {
        title: carData.metaTitle || `${carData.name} - Big Boy Toyz`,
        description: carData.metaDescription || carData.description || `Explore ${carData.name} at Big Boy Toyz.`,
        images: carData.images && carData.images.length > 0 ? [carData.images[0].url] : [],
        type: 'website',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Car Details - Big Boy Toyz',
      description: 'Explore luxury cars at Big Boy Toyz.',
    };
  }
}

const SingleCarPage = async ({ params }) => {
  // Fetch car data for server-side rendering (initial load)
  const { carData, relatedProducts, carFeatures } = await generateCarData(
    params.carId
  );

  // const specifications = transformCarFeaturesToSpecifications(carFeatures || {});

  // If no car is found, return 404
  if (!carData) {
    notFound();
  }

  if (carData.postUrl) {
    permanentRedirect(`/used-luxury-cars/${carData.postUrl}-detail-page`);
  }

  // return (
  //   <SingleCarClient 
  //     initialCarData={carData}
  //     initialRelatedProducts={relatedProducts}
  //     initialSpecifications={specifications}
  //     carId={params.carId}
  //   />
  // );
};

export default SingleCarPage;
