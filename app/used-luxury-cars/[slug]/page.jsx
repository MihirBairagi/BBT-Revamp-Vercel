import React from "react";
import { notFound } from "next/navigation";
import { productsAPI } from "../../lib/services/api";
import { combineSpecifications } from "../../lib/utils/specifications";
import SingleCarClient from "../../cars/[carId]/SingleCarClient";

// Force dynamic rendering to ensure fresh data on every request
export const dynamic = 'force-dynamic';

// Revalidate frequently
export const revalidate = 60;

function logDebug(label, data) {
  if (process.env.NEXT_PUBLIC_DEBUG === "true") {
    console.log(`DEBUG: ${label}`, data);
  }
}

// Resolve a product ID by its posturl using exact, case-sensitive match first
async function resolveProductIdByPostUrl(postUrl) {
  if (!postUrl) return null;
  const exact = decodeURIComponent(postUrl).trim();
  try {
    // 0) Exact backend lookup by slug (no normalization)
    try {
      const bySlug = await productsAPI.getBySlugExact(exact);
      if (bySlug && bySlug.success && bySlug.product) {
        return bySlug.product.id || bySlug.product.id_ || bySlug.product.mongodb_id || null;
      }
    } catch (_) {}

    // 1) Probe getOne with exact string (since backend also tries slug)
    try {
      const probe = await productsAPI.getOne(exact);
      if (probe && probe.success && probe.product) {
        return probe.product.id || probe.product.id_ || probe.product.mongodb_id || null;
      }
    } catch (_) {}

    // 2) Fallback: search and match strictly (case-sensitive, exact)
    try {
      const searchRes = await productsAPI.search({ query: exact, limit: 100 });
      if (searchRes && searchRes.success && Array.isArray(searchRes.data)) {
        const match = searchRes.data.find((p) => {
          const candidate = (p.posturl || p.slug || '').toString();
          return candidate === exact;
        });
        if (match) {
          return match.id || match.id_ || match.mongodb_id || null;
        }
      }
    } catch (_) {}

    // 3) Fallback: pull a larger collection page and find exact match
    try {
      const coll = await productsAPI.getCollection(1, 1000, 'modified', 'desc', false, '', '', false, false);
      if (coll && coll.success && Array.isArray(coll.data)) {
        const match = coll.data.find((p) => {
          const candidate = (p.posturl || p.slug || '').toString();
          return candidate === exact;
        });
        if (match) {
          return match.id || match.id_ || match.mongodb_id || null;
        }
      }
    } catch (_) {}

    // 4) Fallback: getAll and match client-side
    try {
      const all = await productsAPI.getAll();
      if (all && Array.isArray(all.products)) {
        const match = all.products.find((p) => {
          const candidate = (p.posturl || p.slug || '').toString();
          return candidate === exact;
        });
        if (match) {
          return match.id || match.id_ || match.mongodb_id || null;
        }
      }
    } catch (_) {}

    return null;
  } catch (error) {
    console.error('Error resolving ID by posturl:', error);
    return null;
  }
}

// Localized helper to ensure CDN image URLs
function ensureFullImageUrl(imageUrl, isThumbnail = false) {
  if (!imageUrl || imageUrl.startsWith("http")) {
    return imageUrl;
  }
  const cdnBase = "https://cdn.bigboytoyz.com/new-version/products/";
  return isThumbnail ? `${cdnBase}${imageUrl}` : `${cdnBase}product/${imageUrl}`;
}

async function generateCarDataById(carId) {
  try {
    const response = await productsAPI.getOne(carId);

    if (response && response.success && response.product) {
      logDebug("Car data from single product API", response.product);

      const carData = {
        id: response.product.id || response.product.id_ || response.product.mongodb_id || "",
        name: response.product.proname || "",
        description: response.product.prodesc || "",
        price: response.product.proprice || "",
        specialPrice: response.product.prospprice || "",
        videoEmbedCode: response.product.videoembcode || "",
        images: [],
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
        yearOfRegistration: response.product.registrationYear || "",
        kmDriven: response.product.kmDriven || "",
        fuelType: response.product.fuelType || "",
        registrationState: response.product.regstate || "",
        isBooked:
          response.product.booked === "1" ||
          response.product.booked === "yes" ||
          response.product.booked === "true",
        status: response.product.status || "",
        metaTitle: response.product.metatitle || "",
        metaDescription: response.product.metadesc || "",
        metaKeyword: response.product.metakeyword || "",
        postUrl: response.product.posturl || "",
        url: response.product.posturl || "",
        added: response.product.added || "",
        modified: response.product.modified || "",
        date: response.product.modified || response.product.added || "",
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
        preventiveMaintenance: Array.isArray(response.product.preventiveMaintenance)
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
        ownerQuote: response.product.ownerquote || "",
        exhaustNote: response.product.exhaustnote || "",
        title: response.product.proname || response.product.imgalt || "",
      };

      // Images from product response
      if (response.productImages && Array.isArray(response.productImages) && response.productImages.length > 0) {
        response.productImages.forEach((image) => {
          carData.images.push({
            url: ensureFullImageUrl(image.pgalimage),
            alt: image.imgalt || carData.title || "Car Image",
            id: image.id || image.id_,
            type: image.ptype || "1",
            order: parseInt(image.porder) || 0,
          });
        });
        carData.images.sort((a, b) => a.order - b.order);
      }

      // Brand
      if (response.brand) {
        carData.brand = {
          id: response.brand.id || response.brand.id_,
          name: response.brand.bname || "",
          description: response.brand.bdesc || "",
          icon: response.brand.bicon || "",
          url: response.brand.posturl || "",
        };
      } else {
        carData.brand = { id: response.product.brandid || "", name: "" };
      }

      // Model
      if (response.brandModel) {
        carData.model = {
          id: response.brandModel.id || response.brandModel.id_,
          name: response.brandModel.modelname || "",
          description: response.brandModel.modeldesc || "",
          image: response.brandModel.modelimage || "",
          url: response.brandModel.posturl || "",
        };
      } else {
        carData.model = { id: response.product.bmodelid || "", name: "" };
      }

      // Gallery images (ensure thumbnail prioritized)
      try {
        const galleryResponse = await productsAPI.getProductGallery(carData.id);
        const addedUrls = new Set();
        const finalImages = [];

        const thumbnail = response.product.thumbnail || carData.prolistimage;
        if (thumbnail) {
          const thumbUrl = ensureFullImageUrl(thumbnail, true);
          if (!addedUrls.has(thumbUrl)) {
            finalImages.push({ url: thumbUrl, alt: carData.title || "Car Image", id: "thumbnail", order: -1 });
            addedUrls.add(thumbUrl);
          }
        }

        if (galleryResponse && galleryResponse.success && galleryResponse.gallery) {
          const sortedGallery = galleryResponse.gallery.sort(
            (a, b) => (parseInt(a.porder) || 0) - (parseInt(b.porder) || 0)
          );
          sortedGallery.forEach((image) => {
            const imageUrl = ensureFullImageUrl(image.pgalimage || image.imageUrl);
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
        } else {
          carData.images.sort((a, b) => a.order - b.order);
          if (carData.prolistimage) {
            const thumbUrl = ensureFullImageUrl(carData.prolistimage, true);
            if (!carData.images.some((i) => i.url === thumbUrl)) {
              carData.images.unshift({ url: thumbUrl, alt: carData.title || "Car Image", id: "prolistimage", order: -1 });
            }
          }
        }
      } catch (galleryError) {
        console.error("Error fetching gallery images:", galleryError);
      }

      // Attributes
      try {
        const attributesResponse = await productsAPI.getProductAttributes(carData.id);
        if (attributesResponse && attributesResponse.success && attributesResponse.data) {
          carData.attributes = attributesResponse.data;
        }
      } catch (error) {
        console.error("Error fetching product attributes:", error);
        carData.attributes = [];
      }

      // Related products (price-based selection)
      let relatedProducts = [];
      try {
        const resp = await productsAPI.getCollection(1, 50, "modified", "desc", false, "", "", false, true);
        if (resp && resp.success && resp.data) {
          const allRelated = resp.data.filter(
            (p) => p.id !== carData.id && p.price && p.price !== 0 && p.price !== "0" && p.price !== null && p.price !== undefined && p.stock !== "0" && p.stock !== 0
          );

          const currentPrice = parseFloat(carData.price) || 0;
          const targetPriceDifference = 2000000; // 20 lakhs
          const priceRange = 500000; // 5 lakhs

          const higherPriceTarget = currentPrice + targetPriceDifference;
          const lowerPriceTarget = currentPrice - targetPriceDifference;

          const allHigherPriced = allRelated
            .filter((p) => (parseFloat(p.price) || 0) > currentPrice)
            .sort((a, b) => (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0));
          const allLowerPriced = allRelated
            .filter((p) => (parseFloat(p.price) || 0) < currentPrice && (parseFloat(p.price) || 0) > 0)
            .sort((a, b) => (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0));

          const idealHigherPriced = allHigherPriced.filter((p) => {
            const productPrice = parseFloat(p.price) || 0;
            return productPrice >= higherPriceTarget - priceRange && productPrice <= higherPriceTarget + priceRange;
          });
          const idealLowerPriced = allLowerPriced.filter((p) => {
            const productPrice = parseFloat(p.price) || 0;
            return productPrice >= lowerPriceTarget - priceRange && productPrice <= lowerPriceTarget + priceRange;
          });

          let selectedHigher = [];
          let selectedLower = [];
          if (idealHigherPriced.length >= 2) {
            selectedHigher = idealHigherPriced.slice(0, 2);
          } else if (idealHigherPriced.length === 1) {
            selectedHigher.push(idealHigherPriced[0]);
            const remainingHigher = allHigherPriced.filter((p) => p.id !== idealHigherPriced[0].id);
            if (remainingHigher.length > 0) selectedHigher.push(remainingHigher[0]);
          } else if (allHigherPriced.length > 0) {
            selectedHigher = allHigherPriced.slice(0, Math.min(2, allHigherPriced.length));
          }

          if (idealLowerPriced.length >= 1) {
            selectedLower = idealLowerPriced.slice(0, 1);
          } else if (allLowerPriced.length > 0) {
            selectedLower = allLowerPriced.slice(0, 1);
          }

          relatedProducts.push(...selectedHigher);
          relatedProducts.push(...selectedLower);

          if (relatedProducts.length < 3) {
            const needed = 3 - relatedProducts.length;
            const usedIds = new Set(relatedProducts.map((p) => p.id));
            if (selectedHigher.length < 2) {
              const remainingHigher = allHigherPriced.filter((p) => !usedIds.has(p.id));
              const takeFromHigher = Math.min(needed, remainingHigher.length, 2 - selectedHigher.length);
              relatedProducts.push(...remainingHigher.slice(0, takeFromHigher));
            }
            if (relatedProducts.length < 3) {
              const remainingLower = allLowerPriced.filter((p) => !usedIds.has(p.id));
              const stillNeeded = 3 - relatedProducts.length;
              relatedProducts.push(...remainingLower.slice(0, stillNeeded));
            }
          }

          if (relatedProducts.length < 3) {
            const usedIds = new Set(relatedProducts.map((p) => p.id));
            const anyRemaining = allRelated
              .filter((p) => !usedIds.has(p.id))
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

      const toReturn = { carData, relatedProducts, carFeatures: response.carFeatures };
      return toReturn;
    }
  } catch (error) {
    console.error("Error in generateCarDataById:", error);
  }
  return null;
}

export async function generateMetadata({ params }) {
  try {
    const rawSlug = params.slug;
    const postUrl = rawSlug?.endsWith('-detail-page') ? rawSlug.replace(/-detail-page$/, '') : rawSlug;
    const carId = await resolveProductIdByPostUrl(postUrl);
    if (!carId) {
      return { title: 'Car Not Found - Big Boy Toyz', description: 'The car you are looking for does not exist.' };
    }
    const result = await generateCarDataById(carId);
    const carData = result?.carData;
    if (!carData) {
      return { title: 'Car Not Found - Big Boy Toyz', description: 'The car you are looking for does not exist.' };
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
    console.error('Error generating metadata for slug page:', error);
    return { title: 'Car Details - Big Boy Toyz', description: 'Explore luxury cars at Big Boy Toyz.' };
  }
}

const SingleCarBySlugPage = async ({ params }) => {
  const rawSlug = params.slug;
  // Strictly strip only a single trailing "-detail-page" suffix (exact match)
  const postUrl = rawSlug?.endsWith('-detail-page') ? rawSlug.slice(0, -'-detail-page'.length) : rawSlug;

  let carId = await resolveProductIdByPostUrl(postUrl);
  // Fallback: try treating the slug itself as the ID
  if (!carId) {
    try {
      const probe = await productsAPI.getOne(postUrl);
      if (probe && probe.success && probe.product) {
        carId = probe.product.id || probe.product.id_ || probe.product.mongodb_id;
      }
    } catch (e) {
      // ignore
    }
  }
  if (!carId) notFound();

  const result = await generateCarDataById(carId);
  const carData = result?.carData;
  const relatedProducts = result?.relatedProducts || [];
  const specifications = combineSpecifications(result?.carFeatures || {}, carData || {});

  if (!carData) {
    notFound();
  }

  return (
    <SingleCarClient
      initialCarData={carData}
      initialRelatedProducts={relatedProducts}
      initialSpecifications={specifications}
      carId={carId}
    />
  );
};

export default SingleCarBySlugPage;


