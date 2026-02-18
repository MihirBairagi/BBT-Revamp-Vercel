/**
 * Google Ads Dynamic Remarketing Events Test Script
 * 
 * Run this in the browser console to test if all Google Ads events are firing correctly
 * 
 * Usage:
 * 1. Open your website in development mode
 * 2. Open browser DevTools (F12) → Console tab
 * 3. Copy and paste this entire script
 * 4. Navigate through your site to trigger events
 * 5. Check the console for event logs
 */

(function() {
  console.log('🚀 Google Ads Event Tracker Initialized');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  // Check if dataLayer is available
  if (typeof window.dataLayer === 'undefined') {
    console.error('❌ window.dataLayer is not available!');
    console.log('Make sure Google Tag Manager is loaded on this page.');
    return;
  }
  
  console.log('✅ window.dataLayer is available');
  
  // Store original dataLayer push function
  const originalPush = window.dataLayer.push;
  
  // Event counters
  const eventCounts = {
    view_item: 0,
    view_item_list: 0,
    view_search_results: 0,
    purchase: 0,
    other: 0
  };
  
  // Event log storage
  const eventLog = [];
  
  // Intercept dataLayer push calls
  window.dataLayer.push = function(data) {
    // Check if this is a Google Ads event
    if (data && data.event) {
      const eventName = data.event;
      const isGoogleAdsEvent = [
        'view_item',
        'view_item_list', 
        'view_search_results',
        'purchase'
      ].includes(eventName);
      
      if (isGoogleAdsEvent) {
        eventCounts[eventName]++;
        
        const logEntry = {
          timestamp: new Date().toISOString(),
          event: eventName,
          data: data
        };
        
        eventLog.push(logEntry);
        
        // Pretty print to console
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(`🎯 Google Ads Event: ${eventName}`);
        console.log(`⏰ Time: ${new Date().toLocaleTimeString()}`);
        console.log(`📊 Event #${eventCounts[eventName]}`);
        console.log('📦 Data:', data);
        
        // Validate data from ecommerce object
        const ecommerce = data.ecommerce;
        if (ecommerce && ecommerce.items && Array.isArray(ecommerce.items)) {
          console.log(`✅ Items count: ${ecommerce.items.length}`);
          console.log(`✅ Product IDs:`, ecommerce.items.map(item => item.id));
          
          // Check for required fields
          const hasIds = ecommerce.items.every(item => item.id);
          const hasVertical = ecommerce.items.every(item => item.google_business_vertical === 'retail');
          
          if (hasIds) {
            console.log('✅ All items have product IDs');
          } else {
            console.warn('⚠️ Some items missing product IDs!');
          }
          
          if (hasVertical) {
            console.log('✅ All items have google_business_vertical: retail');
          } else {
            console.warn('⚠️ Some items missing google_business_vertical!');
          }
        }
        
        if (ecommerce && ecommerce.value !== undefined) {
          console.log(`💰 Value: ₹${ecommerce.value.toLocaleString('en-IN')}`);
        }
        
        if (ecommerce && ecommerce.transaction_id) {
          console.log(`🔖 Transaction ID: ${ecommerce.transaction_id}`);
        }
        
        if (ecommerce && ecommerce.currency) {
          console.log(`💱 Currency: ${ecommerce.currency}`);
        }
        
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      }
    }
    
    // Call original push
    return originalPush.call(this, data);
  };
  
  // Add helper functions to window
  window.googleAdsTestHelper = {
    // Show event summary
    summary: function() {
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📊 Google Ads Events Summary');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`view_item: ${eventCounts.view_item} events`);
      console.log(`view_item_list: ${eventCounts.view_item_list} events`);
      console.log(`view_search_results: ${eventCounts.view_search_results} events`);
      console.log(`purchase: ${eventCounts.purchase} events`);
      console.log(`Total: ${eventCounts.view_item + eventCounts.view_item_list + eventCounts.view_search_results + eventCounts.purchase} events`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    },
    
    // Show full event log
    log: function() {
      console.table(eventLog.map(entry => ({
        Time: new Date(entry.timestamp).toLocaleTimeString(),
        Event: entry.event,
        Items: entry.data.ecommerce?.items?.length || 0,
        Value: entry.data.ecommerce?.value || 0,
        TransactionID: entry.data.ecommerce?.transaction_id || '-'
      })));
    },
    
    // Get raw event data
    raw: function() {
      return eventLog;
    },
    
    // Reset counters
    reset: function() {
      eventCounts.view_item = 0;
      eventCounts.view_item_list = 0;
      eventCounts.view_search_results = 0;
      eventCounts.purchase = 0;
      eventLog.length = 0;
      console.log('✅ Event counters reset');
    },
    
    // Export events as JSON
    export: function() {
      const json = JSON.stringify(eventLog, null, 2);
      console.log(json);
      return json;
    }
  };
  
  console.log('✅ Google Ads Event Tracker is now monitoring all dataLayer.push calls');
  console.log('');
  console.log('📝 Available helper functions:');
  console.log('  googleAdsTestHelper.summary()  - Show event count summary');
  console.log('  googleAdsTestHelper.log()      - Show event log table');
  console.log('  googleAdsTestHelper.raw()      - Get raw event data');
  console.log('  googleAdsTestHelper.reset()    - Reset counters');
  console.log('  googleAdsTestHelper.export()   - Export events as JSON');
  console.log('');
  console.log('🧪 Now navigate through your site to test events:');
  console.log('  1. View a product detail page → should fire view_item');
  console.log('  2. Browse collection/category → should fire view_item_list');
  console.log('  3. Search for products → should fire view_search_results');
  console.log('  4. Complete a booking → should fire purchase');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
})();

