/**
 * Google Tag Manager Utility Functions
 * Handles pushing events and data to GTM data layer
 */

// Helper to check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_DEBUG === 'true';

/**
 * Push a product view event to GTM data layer
 * @param {Object} product - Product data
 * @param {string} product.id - Product ID
 * @param {string} product.name - Product name
 * @param {string} product.price - Product price
 * @param {string} product.brand - Product brand
 * @param {string} product.category - Product category
 */
export function pushProductView(product) {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  try {
    window.dataLayer.push({
      event: 'product_view',
      ecommerce: {
        detail: {
          products: [{
            id: product.id || product.id_ || '',
            name: product.name || product.proname || '',
            price: product.price || product.proprice || '',
            brand: product.brand?.name || product.brand || '',
            category: product.category || '',
          }]
        }
      },
      // Additional custom dimensions for easier tracking
      productId: product.id || product.id_ || '',
      productName: product.name || product.proname || '',
    });
    
    if (isDevelopment) {
      console.log('GTM: Product view tracked', {
        id: product.id || product.id_,
        name: product.name || product.proname
      });
    }
  } catch (error) {
    console.error('GTM: Error pushing product view', error);
  }
}

/**
 * Push a product click event to GTM data layer
 * @param {Object} product - Product data
 * @param {number} position - Position in the list
 * @param {string} list - List name (e.g., 'Featured Cars', 'Search Results')
 */
export function pushProductClick(product, position = 0, list = 'Product List') {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  try {
    window.dataLayer.push({
      event: 'product_click',
      ecommerce: {
        click: {
          actionField: { list },
          products: [{
            id: product.id || product.id_ || '',
            name: product.name || product.proname || '',
            price: product.price || product.proprice || '',
            brand: product.brand?.name || product.brand || '',
            category: product.category || '',
            position: position
          }]
        }
      },
      // Additional custom dimensions
      productId: product.id || product.id_ || '',
      productName: product.name || product.proname || '',
    });
    
    if (isDevelopment) {
      console.log('GTM: Product click tracked', {
        id: product.id || product.id_,
        name: product.name || product.proname,
        list
      });
    }
  } catch (error) {
    console.error('GTM: Error pushing product click', error);
  }
}

/**
 * Push a product impression event to GTM data layer
 * @param {Array} products - Array of products
 * @param {string} list - List name (e.g., 'Featured Cars', 'Search Results')
 */
export function pushProductImpressions(products, list = 'Product List') {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  if (!Array.isArray(products) || products.length === 0) return;
  
  try {
    window.dataLayer.push({
      event: 'product_impressions',
      ecommerce: {
        impressions: products.map((product, index) => ({
          id: product.id || product.id_ || '',
          name: product.name || product.proname || '',
          price: product.price || product.proprice || '',
          brand: product.brand?.name || product.brand || '',
          category: product.category || '',
          list: list,
          position: index + 1
        }))
      }
    });
    
    if (isDevelopment) {
      console.log('GTM: Product impressions tracked', {
        count: products.length,
        list
      });
    }
  } catch (error) {
    console.error('GTM: Error pushing product impressions', error);
  }
}

/**
 * Push an add to cart event to GTM data layer
 * @param {Object} product - Product data
 * @param {number} quantity - Quantity added
 */
export function pushAddToCart(product, quantity = 1) {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  try {
    window.dataLayer.push({
      event: 'add_to_cart',
      ecommerce: {
        add: {
          products: [{
            id: product.id || product.id_ || '',
            name: product.name || product.proname || '',
            price: product.price || product.proprice || '',
            brand: product.brand?.name || product.brand || '',
            category: product.category || '',
            quantity: quantity
          }]
        }
      },
      // Additional custom dimensions
      productId: product.id || product.id_ || '',
      productName: product.name || product.proname || '',
    });
    
    if (isDevelopment) {
      console.log('GTM: Add to cart tracked', {
        id: product.id || product.id_,
        name: product.name || product.proname,
        quantity
      });
    }
  } catch (error) {
    console.error('GTM: Error pushing add to cart', error);
  }
}

/**
 * Push a custom event to GTM data layer
 * @param {string} eventName - Event name
 * @param {Object} eventData - Additional event data
 */
export function pushCustomEvent(eventName, eventData = {}) {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  try {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
    
    if (isDevelopment) {
      console.log('GTM: Custom event tracked', eventName, eventData);
    }
  } catch (error) {
    console.error('GTM: Error pushing custom event', error);
  }
}

/**
 * Push a page view event to GTM data layer
 * @param {string} pagePath - Page path
 * @param {string} pageTitle - Page title
 */
export function pushPageView(pagePath, pageTitle) {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  try {
    window.dataLayer.push({
      event: 'page_view',
      page: {
        path: pagePath,
        title: pageTitle
      }
    });
    
    if (isDevelopment) {
      console.log('GTM: Page view tracked', pagePath);
    }
  } catch (error) {
    console.error('GTM: Error pushing page view', error);
  }
}

// ============================================================================
// Google Ads Dynamic Remarketing Events
// These events use dataLayer for Google Ads remarketing campaigns via GTM
// ============================================================================

/**
 * Push Google Ads view_item event (retail product view)
 * Fires alongside product_view for dynamic remarketing
 * @param {Object} product - Product data
 */
export function pushGoogleAdsViewItem(product) {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  try {
    window.dataLayer.push({
      'event': 'view_item',
      'ecommerce': {
        'value': parseFloat(product.price || product.proprice || 0),
        'items': [{
          'id': String(product.id || product.id_ || ''),
          'google_business_vertical': 'retail'
        }]
      }
    });
    
    if (isDevelopment) {
      console.log('Google Ads: view_item tracked', {
        id: product.id || product.id_,
        value: parseFloat(product.price || product.proprice || 0)
      });
    }
  } catch (error) {
    console.error('Google Ads: Error pushing view_item', error);
  }
}

/**
 * Push Google Ads view_item_list event (category/collection page)
 * @param {Array} products - Array of products
 */
export function pushGoogleAdsViewItemList(products) {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  if (!Array.isArray(products) || products.length === 0) return;
  
  try {
    const totalValue = products.reduce((sum, p) => 
      sum + parseFloat(p.price || p.proprice || 0), 0
    );
    
    window.dataLayer.push({
      'event': 'view_item_list',
      'ecommerce': {
        'value': totalValue,
        'items': products.map(p => ({
          'id': String(p.id || p.id_ || ''),
          'google_business_vertical': 'retail'
        }))
      }
    });
    
    if (isDevelopment) {
      console.log('Google Ads: view_item_list tracked', {
        count: products.length,
        value: totalValue
      });
    }
  } catch (error) {
    console.error('Google Ads: Error pushing view_item_list', error);
  }
}

/**
 * Push Google Ads view_search_results event
 * @param {Array} products - Array of products
 */
export function pushGoogleAdsViewSearchResults(products) {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  if (!Array.isArray(products) || products.length === 0) return;
  
  try {
    const totalValue = products.reduce((sum, p) => 
      sum + parseFloat(p.price || p.proprice || 0), 0
    );
    
    window.dataLayer.push({
      'event': 'view_search_results',
      'ecommerce': {
        'value': totalValue,
        'items': products.map(p => ({
          'id': String(p.id || p.id_ || ''),
          'google_business_vertical': 'retail'
        }))
      }
    });
    
    if (isDevelopment) {
      console.log('Google Ads: view_search_results tracked', {
        count: products.length,
        value: totalValue
      });
    }
  } catch (error) {
    console.error('Google Ads: Error pushing view_search_results', error);
  }
}

/**
 * Push Google Ads purchase event (booking completion)
 * @param {Object} orderDetails - Order/booking details
 */
export function pushGoogleAdsPurchase(orderDetails) {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  try {
    window.dataLayer.push({
      'event': 'purchase',
      'ecommerce': {
        'transaction_id': orderDetails.booking_ref || orderDetails.order_id,
        'value': parseFloat(orderDetails.booking_amount || orderDetails.amount || 0),
        'currency': 'INR',
        'items': [{
          'id': String(orderDetails.prd_id || orderDetails.product_id || ''),
          'google_business_vertical': 'retail'
        }]
      }
    });
    
    if (isDevelopment) {
      console.log('Google Ads: purchase tracked', {
        transaction_id: orderDetails.booking_ref || orderDetails.order_id,
        value: parseFloat(orderDetails.booking_amount || orderDetails.amount || 0),
        product_id: orderDetails.prd_id || orderDetails.product_id
      });
    }
  } catch (error) {
    console.error('Google Ads: Error pushing purchase', error);
  }
}

