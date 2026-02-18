/**
 * Utility functions for product filtering and sorting
 * Extracted from CollectionListTop to reduce component complexity
 */

/**
 * Check if a product is sold out
 */
export function isSoldOut(item) {
  return (
    item.stock === "0" ||
    item.stock === 0 ||
    item.isSoldOut === true ||
    item.isSoldOut === "1" ||
    item.inStock === false ||
    item.inStock === "0" ||
    item.price === 0 ||
    item.price === "0"
  );
}

/**
 * Partition products into in-stock and sold-out lists
 * In-stock products come first, sold-out products come last
 */
export function partitionByStock(list) {
  const inStockArr = [];
  const soldArr = [];
  
  list.forEach((item) => {
    if (isSoldOut(item)) {
      soldArr.push(item);
    } else {
      inStockArr.push(item);
    }
  });
  
  return [...inStockArr, ...soldArr];
}

/**
 * Ensure display has exactly N in-stock products, filling with sold if needed
 */
export function ensureInStockProducts(orderedList, targetCount) {
  const nonSold = orderedList.filter((i) => !isSoldOut(i));
  
  if (nonSold.length >= targetCount) {
    return nonSold.slice(0, targetCount);
  } else {
    const needed = targetCount - nonSold.length;
    return [
      ...nonSold,
      ...orderedList.filter(isSoldOut).slice(0, needed),
    ];
  }
}
