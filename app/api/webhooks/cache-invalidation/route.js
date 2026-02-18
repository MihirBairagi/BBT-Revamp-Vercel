import { NextResponse } from 'next/server';
import { invalidateProductCache, invalidateAllSingleProductCaches } from '../../../lib/utils/cache-invalidation';

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, timestamp, message } = body;
    
    // Verify the webhook is from our backend
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.includes('admin')) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    
    console.log('Cache invalidation webhook received:', { type, timestamp, message });
    
    // Invalidate all product-related cache
    if (type === 'product_update') {
      invalidateProductCache();
      // Also specifically invalidate single product caches
      invalidateAllSingleProductCaches();
    }
    
    // Return success
    return NextResponse.json({ 
      success: true, 
      message: 'Cache invalidation webhook processed successfully',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error processing cache invalidation webhook:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Internal server error' 
    }, { status: 500 });
  }
} 