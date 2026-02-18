import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Handle buy-used-{brand}-cars-{model}-in-{city} routes
  if (pathname.includes('-cars-') && pathname.includes('-in-')) {
    const brandModelCityMatch = pathname.match(/^\/buy-used-(.+)-cars-(.+)-in-([^\/]+)$/);
    if (brandModelCityMatch) {
      const [, brandName, modelName, cityName] = brandModelCityMatch;
      const url = request.nextUrl.clone();
      url.pathname = `/buy-used-[brandName]-cars-[modelName]-in-[cityName]`;
      url.searchParams.set('brandName', brandName);
      url.searchParams.set('modelName', modelName);
      url.searchParams.set('cityName', cityName);
      return NextResponse.rewrite(url);
    }
  }

  // Handle buy-used-{brand}-cars-in-{city} routes
  if (pathname.includes('-cars-in-')) {
    const buyUsedCityMatch = pathname.match(/^\/buy-used-(.+)-cars-in-([^\/]+)$/);
    if (buyUsedCityMatch) {
      const [, brandName, cityName] = buyUsedCityMatch;
      const url = request.nextUrl.clone();
      url.pathname = `/buy-used-[brandName]-cars-in-[cityName]`;
      url.searchParams.set('brandName', brandName);
      url.searchParams.set('cityName', cityName);
      return NextResponse.rewrite(url);
    }
  }

  // Handle used-{brand}-cars-{model}-in-{city} routes
  if (pathname.includes('-cars-') && pathname.includes('-in-')) {
    const usedModelCityMatch = pathname.match(/^\/used-(.+)-cars-(.+)-in-([^\/]+)$/);
    if (usedModelCityMatch) {
      const [, brandName, modelName, cityName] = usedModelCityMatch;
      const url = request.nextUrl.clone();
      url.pathname = `/used-[brandName]-cars-[modelName]-in-[cityName]`;
      url.searchParams.set('brandName', brandName);
      url.searchParams.set('modelName', modelName);
      url.searchParams.set('cityName', cityName);
      return NextResponse.rewrite(url);
    }
  }

  // Handle buy-used-{brand}-cars-{model} routes (new structure)
  // Pattern: /buy-used-bmw-cars-7-series, /buy-used-aston-martin-cars-db11
  if (pathname.startsWith('/buy-used-') && pathname.includes('-cars-') && !pathname.includes('-cars-in-')) {
    const brandModelMatch = pathname.match(/^\/buy-used-(.+)-cars-(.+)$/);
    if (brandModelMatch) {
      const [, brandName, modelName] = brandModelMatch;
      const url = request.nextUrl.clone();
      url.pathname = `/buy-used-[brandName]-cars-[modelName]`;
      url.searchParams.set('brandName', brandName);
      url.searchParams.set('modelName', modelName);
      return NextResponse.rewrite(url);
    }
  }

  // Handle buy-used-{brand}-cars routes (brand-only pages)
  if (pathname.startsWith('/buy-used-') && pathname.endsWith('-cars') && !pathname.includes('-cars-')) {
    const brandMatch = pathname.match(/^\/buy-used-(.+)-cars$/);
    if (brandMatch) {
      const [, brandName] = brandMatch;
      const url = request.nextUrl.clone();
      url.pathname = `/buy-used-[brandName]-cars`;
      url.searchParams.set('brandName', brandName);
      return NextResponse.rewrite(url);
    }
  }

  // Handle sell-my-used-{brand}-car (legacy) -> redirect to new pattern without -car
  if (pathname.startsWith('/sell-my-used-') && pathname.endsWith('-car')) {
    const sellBrandMatch = pathname.match(/^\/sell-my-used-(.+)-car$/);
    if (sellBrandMatch) {
      const [, brandName] = sellBrandMatch;
      const url = request.nextUrl.clone();
      url.pathname = `/sell-my-used-[brandName]`;
      url.searchParams.set('brandName', brandName);
      return NextResponse.rewrite(url);
    }
  }

  // Handle sell-my-used-{brand}
  if (pathname.startsWith('/sell-my-used-') && !pathname.endsWith('-car')) {
    const sellBrandMatch = pathname.match(/^\/sell-my-used-(.+)$/);
    if (sellBrandMatch) {
      const [, brandName] = sellBrandMatch;
      const url = request.nextUrl.clone();
      url.pathname = `/sell-my-used-[brandName]`;
      url.searchParams.set('brandName', brandName);
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 