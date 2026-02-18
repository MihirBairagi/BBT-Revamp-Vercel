"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarModelItem from "./CarModelItem";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/hp-service-slider-arrow.webp"
        alt="Next Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

const CarModels = ({ brandData }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [progressWidth, setProgressWidth] = useState(25);

  console.log('CarModels brandData:', {
    name: brandData?.name,
    modelsCount: brandData?.models?.length || 0,
    models: brandData?.models?.map(m => ({ 
      id: m.id || m.id_, 
      name: m.modelname, 
      image: m.modelimage,
      posturl: m.posturl
    })) || []
  });

  // Helper function to validate and fix image URLs
  const validateImageUrl = (url) => {
    if (!url || typeof url !== 'string') {
      return 'https://cdn.bigboytoyz.com/new-version/placeholder-car.png';
    }
    
    // If it's already an absolute URL (including CDN URLs), return as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // If it starts with a slash, it's a valid relative URL
    if (url.startsWith('/')) {
      return url;
    }
    
    // If it's a filename for brand models, construct the CDN URL
    if (!url.includes('/') && url.length > 3) {
      return `https://cdn.bigboytoyz.com/new-version/brandmodels/${url}`;
    }
    
    // If it's a malformed relative URL, return placeholder
    if (url.includes('..') || url.length < 3) {
      return 'https://cdn.bigboytoyz.com/new-version/placeholder-car.png';
    }
    
    // Add leading slash to make it a valid relative URL
    return `/${url}`;
  };

  // Helper function to create brand-model URL slug
  const createBrandModelSlug = (brandName, modelName, modelPostUrl) => {
    if (!brandName || !modelName) return '';
    
    const brandSlug = brandName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    // Remove brand name from model name if it's already included to avoid duplication
    // e.g., "Audi A4" -> "A4", "BMW X5" -> "X5", "A4" -> "A4" (no change)
    let cleanModelName = modelName;
    if (brandName && modelName.toLowerCase().startsWith(brandName.toLowerCase())) {
      // Remove brand name and any following space/hyphen
      cleanModelName = modelName.substring(brandName.length).replace(/^[\s\-]+/, '') || modelName;
    }
    
    const modelSlug = cleanModelName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    return `/buy-used-${brandSlug}-cars-${modelPostUrl}`;
  };

  // Helper function to create model-city URL slug  
  const createModelCitySlug = (brandName, modelName, cityName, modelPostUrl) => {
    if (!brandName || !modelName || !cityName) return '';
    
    const brandSlug = brandName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    // Remove brand name from model name if it's already included to avoid duplication
    let cleanModelName = modelName;
    if (brandName && modelName.toLowerCase().startsWith(brandName.toLowerCase())) {
      // Remove brand name and any following space/hyphen
      cleanModelName = modelName.substring(brandName.length).replace(/^[\s\-]+/, '') || modelName;
    }
    
    const modelSlug = cleanModelName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const citySlug = cityName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    return `/buy-used-${brandSlug}-cars-${modelPostUrl}-in-${citySlug}`;
  };

  // Use brand data or fallback
  const brandName = brandData?.name || brandData?.bname || "BMW";
  const displayName = brandName.charAt(0).toUpperCase() + brandName.slice(1).toLowerCase();
  
  // Transform brand models or use fallback data
  const carModels = brandData?.models && brandData.models.length > 0 
    ? brandData.models.map(model => {
        const modelName = model.modelname || model.name || '';
        
        // Check if model name already contains brand name to avoid duplication
        const modelNameLower = modelName.toLowerCase();
        const brandNameLower = brandName.toLowerCase();
        
        let displayTitle;
        if (modelNameLower.includes(brandNameLower)) {
          // Model name already contains brand name, use as is but capitalize properly
          displayTitle = modelName.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join(' ');
        } else {
          // Model name doesn't contain brand name, add it with proper capitalization
          const capitalizedModelName = modelName.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join(' ');
          displayTitle = `${displayName} ${capitalizedModelName}`;
        }
        
        // Determine the correct link based on context
        let link;
        if (brandData.cityName) {
          // If city context exists, create model-city URL
          link = createModelCitySlug(brandName, modelName, brandData.cityName, model.posturl);
        } else {
          // Otherwise, create regular model URL
          link = createBrandModelSlug(brandName, modelName, model.posturl);
        }
        
        return {
          title: displayTitle,
          link: link,
          image: validateImageUrl(model.modelimage || model.image),
          id: model.id || model.id_
        };
      })
    : [
        // {
        //   title: `${displayName} 2 Series`,
        //   link: brandData.cityName 
        //     ? createModelCitySlug(brandName, "2 Series", brandData.cityName)
        //     : createBrandModelSlug(brandName, "2 Series"),
        //   image: "/images/brand-page/bmw-model-1.webp",
        // },
        // {
        //   title: `${displayName} 3 Series`,
        //   link: brandData.cityName 
        //     ? createModelCitySlug(brandName, "3 Series", brandData.cityName)
        //     : createBrandModelSlug(brandName, "3 Series"),
        //   image: "/images/brand-page/bmw-model-2.webp",
        // },
        // {
        //   title: `${displayName} X Series`,
        //   link: brandData.cityName 
        //     ? createModelCitySlug(brandName, "X Series", brandData.cityName)
        //     : createBrandModelSlug(brandName, "X Series"),
        //   image: "/images/brand-page/bmw-model-1.webp",
        // },
        // {
        //   title: `${displayName} M Series`,
        //   link: brandData.cityName 
        //     ? createModelCitySlug(brandName, "M Series", brandData.cityName)
        //     : createBrandModelSlug(brandName, "M Series"),
        //   image: "/images/brand-page/bmw-model-2.webp",
        // },
      ];

  console.log('Final carModels:', carModels.map(m => ({ title: m.title, image: m.image, link: m.link })));

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(2, carModels.length),
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    autoplay: carModels.length > 1,
    autoplaySpeed: 3000,
    centerMode: carModels.length > 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (index) => {
      setProgressWidth((100 / carModels.length) * (index + 1));
    },
  };

  return (
    <section className="bg-black py-24 lg:py-40 xl:py-52 3xl:py-72 -mt-5 md:-mt-0">
      <div className="max-1920">
        <div
          className="lg:flex justify-between items-center lg:pl-40 xl:pl-48 1xl:pl-52 3xl:pl-72"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="container lg:w-30% lg:pr-20 xl:pr-[4rem] 3xl:w-[25%]">
            <Image
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="hidden lg:inline-block mb-14 object-contain lg:w-32 xl:w-40 3xl:w-48"
            />
            <h2 className=" text-white mb-3 lg:mb-6 [&>br]:hidden lg:[&>br]:block text-[2.9rem] xl:text-[3.2rem] xl:leading-[1.12] 1xl:text-[3.5rem] 2xl:text-[4rem] 3xl:text-[4.5rem]">
              {displayName} <br /> Car Models
            </h2>
            <p className="text-xl text-white text-[1.4rem] leading-[1.5] 1xl:text-[1.4rem] 3xl:text-[1.6rem] mb-10 1xl:mb-[3rem] 2xl:mb-[4rem] 3xl:mb-[5rem] font-[300]">
              Get your dream luxury car in 4 easy steps at Big Boy Toyz, India's
              trusted used car portal.
            </p>
            <Link
              href={`/collection?brand=${brandData?.posturl || (brandData?.bname || brandData?.name || '').toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'')}`}
              className="inline-block text-center text-white text-[1.3rem] font-medium py-3 px-16 rounded-[3rem] border border-[#FFFFFF] 1xl:text-[1.5rem] 3xl:text-[1.8rem] 3xl:px-[6rem] 3xl:py-[1.5rem] 3xl:min-w-[27rem] hover:bg-white hover:text-[#000] transition-all duration-500 ease-in-out"
            >
              View All
            </Link>
          </div>

          <div className="w-full lg:w-70% xl:w-[75%] mt-24 lg:mt-0 3xl:w-[75%]">
            {carModels.length > 0 ? (
              <>
                <div className="pl-[2rem]">
                  <Slider
                    {...settings}
                    className="hp-services-slider brand-model-slider"
                  >
                    {carModels.map((item, index) => (
                      <CarModelItem key={item.id || index} data={item} />
                    ))}
                  </Slider>
                </div>
                <div className="container lg:w-full lg:pl-10 lg:pr-32 3xl:pr-40">
                  <div
                    className="progress mt-16 3xl:mt-32"
                    style={{
                      backgroundColor: "rgb(251 251 251 / 10%)",
                      height: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: `${progressWidth}%`,
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        height: "100%",
                      }}
                      className="progressFill"
                    ></div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center text-white py-20">
                <p className="text-xl">No models available for this brand at the moment.</p>
                <Link
                  href="/collection"
                  className="inline-block mt-6 text-center text-white text-[1.3rem] font-medium py-3 px-16 rounded-[3rem] border border-[#FFFFFF] hover:bg-white hover:text-[#000] transition-all duration-500 ease-in-out"
                >
                  View All Cars
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarModels;
