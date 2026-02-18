/**
 * Utility functions for image processing
 * Extracted from CollectionListTop to reduce component complexity
 */

/**
 * Process image URL with proper CDN handling
 */
export function processImageUrl(imageUrl, isThumbnail = false) {
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
}

/**
 * Get display images for a product
 * Priority: thumbnail first (if available), then up to 4 gallery images
 */
export function getDisplayImages(product) {
  const images = [];
  const addedUrls = new Set();

  const addImage = (url, alt, props = {}) => {
    if (url && !addedUrls.has(url)) {
      images.push({ url, alt, ...props });
      addedUrls.add(url);
    }
  };

  // 1. ALWAYS add thumbnail FIRST if available
  if (product.thumbnail && product.thumbnail != null && product.thumbnail != undefined) {
    addImage(
      processImageUrl(product.thumbnail, true),
      product.name || product.title || "Car Image"
    );
  } else if (product.prolistimage && product.prolistimage != null && product.prolistimage != undefined) {
    // Fallback to prolistimage if thumbnail is not available
    addImage(
      processImageUrl(product.prolistimage, true),
      product.name || product.title || "Car Image"
    );
  }

  // 2. Add up to 4 gallery images from product.images array (sorted by order)
  if (product.images && product.images.length > 0 && product.images != null && product.images != undefined) {
    const sorted = [...product.images].sort((a, b) => {
      if (a.order === "0" && b.order !== "0") return -1;
      if (a.order !== "0" && b.order === "0") return 1;
      return (a.order || 0) - (b.order || 0);
    });

    // Add first 4 gallery images (max 4 after thumbnail)
    for (let i = 0; i < sorted.length && images.length < 5; i++) {
      const img = sorted[i];
      const imageUrl = img.url || img.pgalimage || img;
      addImage(
        processImageUrl(imageUrl),
        img.alt || product.name || product.title || "Car Image"
      );
    }
  } else if (product.gallery && product.gallery.length > 0 && product.gallery != null && product.gallery != undefined) {
    // Fallback to product.gallery array (for backward compatibility)
    for (let i = 0; i < product.gallery.length && images.length < 5; i++) {
      const url = product.gallery[i];
      addImage(
        processImageUrl(url),
        `${product.name || product.title} - Image ${i + 1}`
      );
    }
  }

  // 3. If no thumbnail or gallery, try single product.image
  if (images.length === 0 && product.image && product.image != null && product.image != undefined) {
    addImage(
      processImageUrl(product.image),
      product.name || product.title || "Car Image"
    );
  }

  // 4. Placeholder fallback if nothing found
  if (images.length === 0) {
    addImage(
      "https://cdn.bigboytoyz.com/new-version/placeholder-car.png",
      product.name || product.title || "Car Image"
    );
  }

  return images;
}
