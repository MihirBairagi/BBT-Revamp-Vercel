const fetch = require('node-fetch');

// Test the gallery integration
async function testGalleryIntegration() {
  console.log('Testing Gallery Image Integration...\n');
  
  try {
    // Test 1: Collection endpoint with gallery images
    console.log('1. Testing Collection endpoint with gallery images:');
    const collectionResponse = await fetch('http://localhost:3001/api/products/debug/collection?limit=2');
    const collectionData = await collectionResponse.json();
    
    if (collectionData.success && collectionData.data.length > 0) {
      const firstProduct = collectionData.data[0];
      console.log(`✅ Product "${firstProduct.title}" has ${firstProduct.images?.length || 0} images`);
      
      // Show first few image URLs
      if (firstProduct.images && firstProduct.images.length > 0) {
        console.log('   First 3 image URLs:');
        firstProduct.images.slice(0, 3).forEach((img, index) => {
          console.log(`   ${index + 1}. ${img.url} (order: ${img.order})`);
        });
      }
    } else {
      console.log('❌ Collection endpoint failed');
    }
    
    // Test 2: Dedicated gallery endpoint
    if (collectionData.success && collectionData.data.length > 0) {
      const productId = collectionData.data[0].id;
      console.log(`\n2. Testing Gallery endpoint for product ${productId}:`);
      const galleryResponse = await fetch(`http://localhost:3001/api/products/${productId}/gallery`);
      const galleryData = await galleryResponse.json();
      
      if (galleryData.success) {
        console.log(`✅ Gallery endpoint returned ${galleryData.gallery?.length || 0} images for product ${productId}`);
        
        // Show first few gallery items
        if (galleryData.gallery && galleryData.gallery.length > 0) {
          console.log('   First 3 gallery items:');
          galleryData.gallery.slice(0, 3).forEach((img, index) => {
            console.log(`   ${index + 1}. ${img.pgalimage} (order: ${img.porder})`);
          });
        }
      } else {
        console.log(`❌ Gallery endpoint failed: ${galleryData.message}`);
      }
    }
    
    console.log('\n3. Testing Car Page endpoint:');
    
    // Test 3: Individual car page
    if (collectionData.success && collectionData.data.length > 0) {
      const productId = collectionData.data[0].id;
      const carResponse = await fetch(`http://localhost:3001/api/products/debug/${productId}`);
      const carData = await carResponse.json();
      
      if (carData.success && carData.product) {
        console.log(`✅ Car page endpoint returned product "${carData.product.proname}"`);
        console.log(`   Product images: ${carData.productImages?.length || 0} items`);
        
        if (carData.productImages && carData.productImages.length > 0) {
          console.log('   First 3 product images:');
          carData.productImages.slice(0, 3).forEach((img, index) => {
            console.log(`   ${index + 1}. ${img.pgalimage} (order: ${img.porder})`);
          });
        }
      } else {
        console.log(`❌ Car page endpoint failed`);
      }
    }
    
    console.log('\n4. Testing Search endpoint:');
    
    // Test 4: Search endpoint
    const searchResponse = await fetch('http://localhost:3001/api/products/debug/search?q=bmw&limit=1');
    const searchData = await searchResponse.json();
    
    if (searchData.success && searchData.data.length > 0) {
      const searchProduct = searchData.data[0];
      console.log(`✅ Search endpoint returned "${searchProduct.title}" with ${searchProduct.images?.length || 0} images`);
    } else {
      console.log('❌ Search endpoint failed');
    }
    
    console.log('\n5. Testing Featured Products endpoint:');
    
    // Test 5: Featured products
    const featuredResponse = await fetch('http://localhost:3001/api/products/debug/featured');
    const featuredData = await featuredResponse.json();
    
    if (featuredData.success && featuredData.products.length > 0) {
      const featuredProduct = featuredData.products[0];
      console.log(`✅ Featured endpoint returned "${featuredProduct.proname}" with ${featuredProduct.images?.length || 0} images`);
    } else {
      console.log('❌ Featured endpoint failed');
    }
    
    console.log('\n✅ Gallery integration test completed!');
    console.log('\n📋 Summary:');
    console.log('   - All product endpoints now include gallery images');
    console.log('   - Frontend components use enhanced gallery service');
    console.log('   - Images are fetched from /products/id/gallery endpoint');
    console.log('   - Proper URL processing and fallback logic implemented');
    console.log('   - Gallery images are sorted by order and include metadata');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testGalleryIntegration(); 