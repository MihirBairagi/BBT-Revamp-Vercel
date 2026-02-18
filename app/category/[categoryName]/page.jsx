import React from "react";
import { categoriesAPI, productsAPI } from "../../lib/services/api";
import { fetchMultipleProductGalleries } from "../../lib/services/gallery";
import { notFound } from "next/navigation";
import CarList from "../../../Components/CategoryPage/CarList/CarList";
import AboutSection from '../../../Components/CategoryPage/AboutSection/AboutSection';
import UspSection from '../../../Components/CategoryPage/UspSection/UspSection';
import DescriptionSection from '../../../Components/CategoryPage/DescriptionSection/DescriptionSection';
import PageHeader from "../../../Components/CategoryPage/PageHeader/PageHeader";
import PageBanner from "../../../Components/CommonComponents/PageBanner/PageBanner";

// Set the revalidation time for ISR
export const revalidate = 3600; // Revalidate every hour

// Function to fetch category data from the API
async function getCategoryData(categoryName) {
  try {
    console.log(`Fetching category data for: ${categoryName}`);
    
    let category = null;
    let isStyle = false;
    
    // First try to find a traditional category
    try {
      const categoriesResponse = await categoriesAPI.getAll();
      
      if (categoriesResponse && categoriesResponse.categories) {
        // Find the category by name (case-insensitive, handle slug format)
        category = categoriesResponse.categories.find(c => 
          c.cname?.toLowerCase().replace(/\s+/g, '-') === categoryName.toLowerCase() ||
          c.cname?.toLowerCase() === categoryName.toLowerCase() ||
          c.posturl?.toLowerCase() === categoryName.toLowerCase() ||
          c.slug?.toLowerCase() === categoryName.toLowerCase() ||
          (categoryName.toLowerCase() === 'suv' && c.cname?.toLowerCase().includes('suv')) ||
          (categoryName.toLowerCase() === 'sedan' && c.cname?.toLowerCase().includes('sedan')) ||
          (categoryName.toLowerCase() === 'coupe' && c.cname?.toLowerCase().includes('coupe')) ||
          (categoryName.toLowerCase() === 'convertible' && c.cname?.toLowerCase().includes('convertible')) ||
          (categoryName.toLowerCase() === 'hatchback' && c.cname?.toLowerCase().includes('hatchback'))
        );
        
        if (category) {
          console.log(`Found traditional category:`, category);
        }
      }
    } catch (categoriesError) {
      console.warn('Error fetching traditional categories:', categoriesError);
    }
    
    // If no traditional category found, check if it's a style
    if (!category) {
      try {
        const stylesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'}/products/styles/all`);
        
        if (stylesResponse.ok) {
          const stylesData = await stylesResponse.json();
          
          if (stylesData.success && stylesData.styles) {
            // Find the style by name, posturl, or slug
            const style = stylesData.styles.find(s => 
              s.posturl?.toLowerCase() === categoryName.toLowerCase() ||
              s.stylename?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === categoryName.toLowerCase() ||
              s.stylename?.toLowerCase() === categoryName.toLowerCase() ||
              s.stylename?.toLowerCase().replace(/\s+/g, '-') === categoryName.toLowerCase()
            );
            
            if (style) {
              console.log(`Found style:`, style);
              isStyle = true;
              // Convert style to category format
              category = {
                id: style.id_ || style.id,
                cname: style.stylename,
                styleName: style.stylename, // Keep original style name for filtering
                description: style.styledesc,
                shortDescription: style.shortdesc,
                metaTitle: `Used Luxury ${style.stylename} Cars for Sale | Big Boy Toyz`,
                metaDescription: `Buy certified pre-owned luxury ${style.stylename} cars from Big Boy Toyz. Wide selection of premium ${style.stylename} vehicles with warranty and quality assurance.`,
                bannerTitle: `Planning to buy a <br /> used <strong>luxury ${style.stylename}${style.stylename === 'Bike' ? ' ' : ' car'} ?</strong>  <br /> Take a look.`,
                breadcrumb: style.stylename,
                bannerImage: `/images/${style.stylename.toLowerCase()}/banner-desk.webp`,
                bannerImageMobile: `/images/${style.stylename.toLowerCase()}/banner-mob.webp`,
                icon: style.styleicon,
              };
            }
          }
        }
      } catch (stylesError) {
        console.warn('Error fetching styles:', stylesError);
      }
    }
    
    // If still no category found, use comprehensive fallback
    if (!category) {
      console.log(`Using fallback for: ${categoryName}`);
      
      const fallbackCategories = {
        'suv': {
          id: 'suv',
          cname: 'SUV',
          styleName: 'SUV',
          description: 'Luxury Sport Utility Vehicles combining power, performance, and versatility for the modern driver.',
          metaTitle: 'Used Luxury SUV Cars for Sale | Big Boy Toyz',
          metaDescription: 'Buy certified pre-owned luxury SUV cars from Big Boy Toyz. Wide selection of premium SUVs with warranty and quality assurance.',
          bannerTitle: 'Planning to buy a <br /> used <strong>luxury SUV car ?</strong>  <br /> Take a look.',
          breadcrumb: 'SUVs',
          bannerImage: '/images/suv/suv-banner-desk.webp',
          bannerImageMobile: '/images/suv/suv-banner-mob.webp'
        },
        'sedan': {
          id: 'sedan',
          cname: 'Sedan',
          styleName: 'Sedan',
          description: 'Elegant luxury sedans offering premium comfort, sophisticated styling, and exceptional performance.',
          metaTitle: 'Used Luxury Sedan Cars for Sale | Big Boy Toyz',
          metaDescription: 'Buy certified pre-owned luxury sedan cars from Big Boy Toyz. Premium sedans with comprehensive warranty.',
          bannerTitle: 'Planning to buy a <br /> used <strong>luxury Sedan car ?</strong>  <br /> Take a look.',
          breadcrumb: 'Sedans',
          bannerImage: '/images/sedan/sedan-banner-desk.webp',
          bannerImageMobile: '/images/sedan/sedan-banner-mob.webp'
        },
        'coupe': {
          id: 'coupe',
          cname: 'Coupe',
          styleName: 'Coupe',
          description: 'Stylish luxury coupes designed for performance enthusiasts who appreciate sophisticated design.',
          metaTitle: 'Used Luxury Coupe Cars for Sale | Big Boy Toyz',
          metaDescription: 'Buy certified pre-owned luxury coupe cars from Big Boy Toyz. Premium sports coupes with quality assurance.',
          bannerTitle: 'Planning to buy a <br /> used <strong>luxury Coupe car ?</strong>  <br /> Take a look.',
          breadcrumb: 'Coupes',
          bannerImage: '/images/coupe/coupe-banner-desk.webp',
          bannerImageMobile: '/images/coupe/coupe-banner-mob.webp'
        },
        'convertible': {
          id: 'convertible',
          cname: 'Convertible',
          styleName: 'Convertible',
          description: 'Luxurious convertible cars for the ultimate open-air driving experience with premium features.',
          metaTitle: 'Used Luxury Convertible Cars for Sale | Big Boy Toyz',
          metaDescription: 'Buy certified pre-owned luxury convertible cars from Big Boy Toyz. Premium convertibles with comprehensive warranty.',
          bannerTitle: 'Planning to buy a <br /> used <strong>luxury Convertible car ?</strong>  <br /> Take a look.',
          breadcrumb: 'Convertibles',
          bannerImage: '/images/convertible/convertible-banner-desk.webp',
          bannerImageMobile: '/images/convertible/convertible-banner-mob.webp'
        },
        'hatchback': {
          id: 'hatchback',
          cname: 'Hatchback',
          styleName: 'Hatchback',
          description: 'Compact and stylish hatchback cars perfect for urban driving with exceptional fuel efficiency.',
          metaTitle: 'Used Luxury Hatchback Cars for Sale | Big Boy Toyz',
          metaDescription: 'Buy certified pre-owned luxury hatchback cars from Big Boy Toyz. Premium compact cars with quality assurance.',
          bannerTitle: 'Planning to buy a <br /> used <strong>luxury Hatchback car ?</strong>  <br /> Take a look.',
          breadcrumb: 'Hatchbacks',
          bannerImage: '/images/hatchback/hatchback-banner-desk.webp',
          bannerImageMobile: '/images/hatchback/hatchback-banner-mob.webp'
        },
        'sports': {
          id: 'sports',
          cname: 'Sports Car',
          styleName: 'Sports',
          description: 'High-performance sports cars engineered for speed, agility, and pure driving excitement.',
          metaTitle: 'Used Luxury Sports Cars for Sale | Big Boy Toyz',
          metaDescription: 'Buy certified pre-owned luxury sports cars from Big Boy Toyz. Premium performance vehicles with comprehensive warranty.',
          bannerTitle: 'Planning to buy a <br /> used <strong>luxury Sports car ?</strong>  <br /> Take a look.',
          breadcrumb: 'Sports Cars',
          bannerImage: '/images/sports/sports-banner-desk.webp',
          bannerImageMobile: '/images/sports/sports-banner-mob.webp'
        },
        'luxury': {
          id: 'luxury',
          cname: 'Luxury Car',
          styleName: 'Luxury',
          description: 'Ultra-premium luxury cars offering the finest in automotive craftsmanship and opulent comfort.',
          metaTitle: 'Used Ultra Luxury Cars for Sale | Big Boy Toyz',
          metaDescription: 'Buy certified pre-owned ultra luxury cars from Big Boy Toyz. Exclusive premium vehicles with unmatched quality.',
          bannerTitle: 'Planning to buy a <br /> used <strong>ultra luxury car ?</strong>  <br /> Take a look.',
          breadcrumb: 'Luxury Cars',
          bannerImage: '/images/luxury/luxury-banner-desk.webp',
          bannerImageMobile: '/images/luxury/luxury-banner-mob.webp'
        },
        'wagon': {
          id: 'wagon',
          cname: 'Wagon',
          styleName: 'Wagon',
          description: 'Versatile luxury wagons combining practical space with elegant design and premium performance.',
          metaTitle: 'Used Luxury Wagon Cars for Sale | Big Boy Toyz',
          metaDescription: 'Buy certified pre-owned luxury wagon cars from Big Boy Toyz. Premium estate vehicles with comprehensive warranty.',
          bannerTitle: 'Planning to buy a <br /> used <strong>luxury Wagon car ?</strong>  <br /> Take a look.',
          breadcrumb: 'Wagons',
          bannerImage: '/images/wagon/wagon-banner-desk.webp',
          bannerImageMobile: '/images/wagon/wagon-banner-mob.webp'
        },
        'bike': {
          id: 'bike',
          cname: 'Motorcycle',
          styleName: 'Bike',
          description: 'Premium motorcycles and luxury bikes offering exceptional performance and distinctive style.',
          metaTitle: 'Used Luxury Motorcycles for Sale | Big Boy Toyz',
          metaDescription: 'Buy certified pre-owned luxury motorcycles from Big Boy Toyz. Premium bikes with quality assurance and warranty.',
          bannerTitle: 'Planning to buy a <br /> used <strong>luxury Motorcycle ?</strong>  <br /> Take a look.',
          breadcrumb: 'Motorcycles',
          bannerImage: '/images/bike/bike-banner-desk.webp',
          bannerImageMobile: '/images/bike/bike-banner-mob.webp'
        }
      };
      
      if (fallbackCategories[categoryName.toLowerCase()]) {
        category = fallbackCategories[categoryName.toLowerCase()];
        isStyle = true; // Treat fallback as style for filtering
      } else {
        console.error(`No fallback available for: ${categoryName}`);
        return null;
      }
    }
    
    console.log(`Final category data:`, category);
    console.log(`Is style:`, isStyle);
    
    // Get products for this category/style
    let categoryProducts = [];
    try {
      let productsResponse;
      
      if (isStyle || category.styleName) {
        // For styles, use the styles parameter in the API call
        console.log(`Fetching products by style: ${category.styleName || category.cname}`);
        productsResponse = await productsAPI.getCollection(
          1, // page
          50, // limit - increase to get more products
          'modified', // sort
          'desc', // order
          false, // featured
          '', // category (empty for style filtering)
          '', // brandId
          false, // random
          false, // inStock
          '', // minPrice
          '', // maxPrice
          '', // yearFrom
          '', // yearTo
          '', // fuelType
          '', // state
          '', // kmFrom
          '', // kmTo
          category.id, // styles parameter
          '' // vehicleType
        );
      } else {
        // For traditional categories, use the category parameter
        console.log(`Fetching products by category: ${category.cname}`);
        productsResponse = await productsAPI.getCollection(
          1, // page
          50, // limit
          'modified', // sort
          'desc', // order
          false, // featured
          category.cname, // category
          '', // brandId
          false // random
        );
      }
      
      if (productsResponse && productsResponse.success && productsResponse.data) {
        categoryProducts = productsResponse.data;
        
        // Enhance products with gallery images
        categoryProducts = await fetchMultipleProductGalleries(categoryProducts);
        
        console.log(`Found ${categoryProducts.length} products for ${isStyle ? 'style' : 'category'}: ${category.cname}`);
      } else {
        console.log('No products found or API response unsuccessful');
      }
    } catch (productsError) {
      console.error('Error fetching category products:', productsError);
    }
    
    return {
      category: {
        id: category.id || category.id_,
        name: category.cname || category.name || '',
        description: category.description || category.cdesc || '',
        shortDescription: category.shortdesc || '',
        metaTitle: category.metaTitle || category.metatitle,
        metaDescription: category.metaDescription || category.metadesc,
        keywords: category.keywords || category.metakeyword,
        bannerTitle: category.bannerTitle || `Planning to buy a <br /> used <strong>luxury ${category.cname} car ?</strong>  <br /> Take a look.`,
        breadcrumb: category.breadcrumb || category.cname || 'Category',
        bannerImage: category.bannerImage || '/images/category/category-banner-desk.webp',
        bannerImageMobile: category.bannerImageMobile || '/images/category/category-banner-mob.webp',
        url: category.posturl || category.slug,
        icon: category.cicon || category.icon,
        order: category.corder,
        isStyle: isStyle
      },
      products: categoryProducts,
      totalProducts: categoryProducts.length
    };
  } catch (error) {
    console.error('Error in getCategoryData:', error);
    return null;
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { categoryName } = params;
  const result = await getCategoryData(categoryName);
  
  if (!result || !result.category) {
    return {
      title: 'Category Not Found | Big Boy Toyz',
      description: 'The category you are looking for could not be found.'
    };
  }
  
  const { category } = result;
  
  return {
    title: category.metaTitle || `${category.name} Cars | Used ${category.name} Cars for Sale | Big Boy Toyz`,
    description: category.metaDescription || `Buy used ${category.name} cars from Big Boy Toyz - India's trusted luxury car dealership. Wide selection of pre-owned ${category.name} vehicles with warranty.`,
    keywords: category.keywords || `${category.name}, used ${category.name} cars, pre-owned ${category.name}, luxury cars, Big Boy Toyz, ${category.name} for sale`,
    openGraph: {
      title: `${category.name} Cars | Big Boy Toyz`,
      description: category.metaDescription || `Buy used ${category.name} cars from Big Boy Toyz - India's trusted luxury car dealership.`,
      images: category.icon ? [{ url: category.icon }] : []
    }
  };
}

const CategoryPage = async ({ params }) => {
  const { categoryName } = params;
  const result = await getCategoryData(categoryName);
  
  // Handle not found case
  if (!result || !result.category) {
    notFound();
  }
  
  const { category, products, totalProducts } = result;
  
  // Create banner data from category information
  const bannerData = {
    title: category.bannerTitle,
    breadcrumb: category.breadcrumb,
    bannerImage: category.bannerImage,
    bannerImageMobile: category.bannerImageMobile,
    shortDescription: category.shortDescription
  };
  
  return (
    <>
      <PageBanner data={bannerData} />
      <PageHeader 
        bannerTitle={bannerData.shortDescription}
        totalProducts={totalProducts}
        currentSort="modified"
        currentOrder="desc"
      />
      <CarList 
        products={products}
        categoryData={category}
        isLoading={false}
      />
      <DescriptionSection categoryData={category} />
      <UspSection categoryData={category} />
      <AboutSection categoryData={category} />
    </>
  );
};

export default CategoryPage;
