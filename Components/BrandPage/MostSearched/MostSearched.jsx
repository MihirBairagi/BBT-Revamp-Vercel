"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const searchedList = [
  {
    title: "Most Searched Brands On Big Boy Toyz.",
    tags: [
      { tagName: "Used BMW", url: "/buy-used-bmw-cars" },
      { tagName: "Used Mercedes", url: "/buy-used-mercedes-cars" },
      { tagName: "Used Aston Martin", url: "/buy-used-aston-martin-cars" },
      { tagName: "Used Audi", url: "/buy-used-audi-cars" },
      { tagName: "Used Bentley", url: "/buy-used-bentley-cars" },
      { tagName: "Used Ferrari", url: "/buy-used-ferrari-cars" },
      { tagName: "Used Ford", url: "/buy-used-ford-cars" },
      { tagName: "Used Harley Davidson", url: "/buy-used-harley-davidson-cars" },
      { tagName: "Used Hummer", url: "/buy-used-hummer-cars" },
      { tagName: "Used Jaguar", url: "/buy-used-jaguar-cars" },
      { tagName: "Used Jeep", url: "/buy-used-jeep-cars" },
      { tagName: "Used Lamborghini", url: "/buy-used-lamborghini-cars" },
      { tagName: "Used Land Rover", url: "/buy-used-land-rover-cars" },
      { tagName: "Used Lexus", url: "/buy-used-lexus-cars" },
      { tagName: "Used Maserati", url: "/buy-used-maserati-cars" },
      { tagName: "Used Maybach", url: "/buy-used-maybach-cars" },
      { tagName: "Used Mercedes-Benz", url: "/buy-used-mercedes-benz-cars" },
      { tagName: "Used Mini", url: "/buy-used-mini-cars" },
      { tagName: "Used Nissan", url: "/buy-used-nissan-cars" },
      { tagName: "Used Porsche", url: "/buy-used-porsche-cars" },
      { tagName: "Used Rolls-Royce ", url: "/buy-used-rolls-royce-cars" },
      { tagName: "Used Toyota", url: "/buy-used-toyota-cars" },
      { tagName: "Used Triumph", url: "/buy-used-triumph-cars" },
      { tagName: "Used Volkswagen", url: "/buy-used-volkswagen-cars" },
      { tagName: "Used Volvo", url: "/buy-used-volvo-cars" },
    ],
  },
  {
    title: "Searched By Top Models.",
    tags: [
      { tagName: "Used Lamborghini Huracan", url: "/buy-used-lamborghini-huracan-cars" },
      { tagName: "Used Rolls Royce Ghost", url: "/buy-used-rolls-royce-ghost-cars" },
      { tagName: "Used Range Rover Vogue", url: "/buy-used-range-rover-vogue-cars" },
      { tagName: "Used Porsche Panamera", url: "/buy-used-porsche-panamera-cars" },
      { tagName: "Used Porsche Cayenne", url: "/buy-used-porsche-cayenne-cars" },
      { tagName: "Used Maybach", url: "/buy-used-maybach-cars" },
      { tagName: "Used Mercedes S class", url: "/buy-used-mercedes-s-class-cars" },
      { tagName: "Used Land Rover Discovery", url: "/buy-used-land-rover-discovery-cars" },
      { tagName: "Used Bentley Flying Spur", url: "/buy-used-bentley-flying-spur-cars" },
      { tagName: "Used Bentley Continental GT", url: "/buy-used-bentley-continental-gt-cars" },
      { tagName: "Used Audi Q8", url: "/buy-used-audi-q8-cars" },
      { tagName: "Used Lamborghini Aventador", url: "/buy-used-lamborghini-aventador-cars" },
      { tagName: "Used Volvo XC 90", url: "/buy-used-volvo-xc-90-cars" },
      { tagName: "Used Maserati Granturismo", url: "/buy-used-maserati-granturismo-cars" },
      { tagName: "Used Mercedes GLS", url: "/buy-used-mercedes-gls-cars" },
      { tagName: "Used Mercedes GLE", url: "/buy-used-mercedes-gle-cars" },
      { tagName: "Used BMW X7", url: "/buy-used-bmw-x7-cars" },
      { tagName: "Used BMW X5", url: "/buy-used-bmw-x5-cars" },
      { tagName: "Used BMW 7 series", url: "/buy-used-bmw-7-series-cars" },
      { tagName: "Used Audi A8", url: "/buy-used-audi-a8-cars" },
      { tagName: "Used Porsche 718 Boxster", url: "/buy-used-porsche-718-boxster-cars" },
      { tagName: "Used BMW i8", url: "/buy-used-bmw-i8-cars" },
      { tagName: "Used Audi RS5", url: "/buy-used-audi-rs5-cars" },
      { tagName: "Used BMW Z4", url: "/buy-used-bmw-z4-cars" },
      { tagName: "Used Lexus LS 500H", url: "/buy-used-lexus-ls-500h-cars" }
    ]
  },
  {
    title: "Most Searched Brands From Mumbai.",
    tags: [
      { tagName: "Used BMW in Mumbai", url: "/buy-used-bmw-cars-in-mumbai" },
      { tagName: "Used Mercedes in Mumbai", url: "/buy-used-mercedes-cars-in-mumbai" },
      { tagName: "Used Aston Martin in Mumbai", url: "/buy-used-aston-martin-cars-in-mumbai" },
      { tagName: "Used Audi in Mumbai", url: "/buy-used-audi-cars-in-mumbai" },
      { tagName: "Used Bentley in Mumbai", url: "/buy-used-bentley-cars-in-mumbai" },
      { tagName: "Used Ferrari in Mumbai", url: "/buy-used-ferrari-cars-in-mumbai" },
      { tagName: "Used Ford in Mumbai", url: "/buy-used-ford-cars-in-mumbai" },
      { tagName: "Used Harley Davidson in Mumbai", url: "/buy-used-harley-davidson-cars-in-mumbai" },
      { tagName: "Used Hummer in Mumbai", url: "/buy-used-hummer-cars-in-mumbai" },
      { tagName: "Used Indian in Mumbai", url: "/buy-used-indian-cars-in-mumbai" },
      { tagName: "Used Jaguar in Mumbai", url: "/buy-used-jaguar-cars-in-mumbai" },
      { tagName: "Used Lexus in Mumbai", url: "/buy-used-lexus-cars-in-mumbai" },
      { tagName: "Used Maserati in Mumbai", url: "/buy-used-maserati-cars-in-mumbai" },
      { tagName: "Used Maybach in Mumbai", url: "/buy-used-maybach-cars-in-mumbai" },
      { tagName: "Used Mercedes-Benz in Mumbai", url: "/buy-used-mercedes-benz-cars-in-mumbai" },
      { tagName: "Used Mini in Mumbai", url: "/buy-used-mini-cars-in-mumbai" },
      { tagName: "Used Nissan in Mumbai", url: "/buy-used-nissan-cars-in-mumbai" },
      { tagName: "Used Porsche in Mumbai", url: "/buy-used-porsche-cars-in-mumbai" },
      { tagName: "Used Rolls-Royce in Mumbai", url: "/buy-used-rolls-royce-cars-in-mumbai" },
      { tagName: "Used Toyota in Mumbai", url: "/buy-used-toyota-cars-in-mumbai" },
      { tagName: "Used Triumph in Mumbai", url: "/buy-used-triumph-cars-in-mumbai" },
      { tagName: "Used Volkswagen in Mumbai", url: "/buy-used-volkswagen-cars-in-mumbai" },
      { tagName: "Used Volvo in Mumbai", url: "/buy-used-volvo-cars-in-mumbai" }
    ]
  },
  {
    title: "Most Searched Brands From Hyderabad.",
    tags: [
      { tagName: "Used BMW in Hyderabad", url: "/buy-used-bmw-cars-in-hyderabad" },
      { tagName: "Used Mercedes in Hyderabad", url: "/buy-used-mercedes-cars-in-hyderabad" },
      { tagName: "Used Aston Martin in Hyderabad", url: "/buy-used-aston-martin-cars-in-hyderabad" },
      { tagName: "Used Audi in Hyderabad", url: "/buy-used-audi-cars-in-hyderabad" },
      { tagName: "Used Bentley in Hyderabad", url: "/buy-used-bentley-cars-in-hyderabad" },
      { tagName: "Used Ferrari in Hyderabad", url: "/buy-used-ferrari-cars-in-hyderabad" },
      { tagName: "Used Ford in Hyderabad", url: "/buy-used-ford-cars-in-hyderabad" },
      { tagName: "Used Harley Davidson in Hyderabad", url: "/buy-used-harley-davidson-cars-in-hyderabad" },
      { tagName: "Used Hummer in Hyderabad", url: "/buy-used-hummer-cars-in-hyderabad" },
      { tagName: "Used Indian in Hyderabad", url: "/buy-used-indian-cars-in-hyderabad" },
      { tagName: "Used Jaguar in Hyderabad", url: "/buy-used-jaguar-cars-in-hyderabad" },
      { tagName: "Used Jeep in Hyderabad", url: "/buy-used-jeep-cars-in-hyderabad" },
      { tagName: "Used Lamborghini in Hyderabad", url: "/buy-used-lamborghini-cars-in-hyderabad" },
      { tagName: "Used Land Rover in Hyderabad", url: "/buy-used-land-rover-cars-in-hyderabad" },
      { tagName: "Used Lexus in Hyderabad", url: "/buy-used-lexus-cars-in-hyderabad" },
      { tagName: "Used Maserati in Hyderabad", url: "/buy-used-maserati-cars-in-hyderabad" },
      { tagName: "Used Maybach in Hyderabad", url: "/buy-used-maybach-cars-in-hyderabad" },
      { tagName: "Used Mercedes-Benz in Hyderabad", url: "/buy-used-mercedes-benz-cars-in-hyderabad" },
      { tagName: "Used Mini in Hyderabad", url: "/buy-used-mini-cars-in-hyderabad" },
      { tagName: "Used Nissan in Hyderabad", url: "/buy-used-nissan-cars-in-hyderabad" },
      { tagName: "Used Porsche in Hyderabad", url: "/buy-used-porsche-cars-in-hyderabad" },
      { tagName: "Used Rolls-Royce in Hyderabad", url: "/buy-used-rolls-royce-cars-in-hyderabad" },
      { tagName: "Used Toyota in Hyderabad", url: "/buy-used-toyota-cars-in-hyderabad" },
      { tagName: "Used Triumph in Hyderabad", url: "/buy-used-triumph-cars-in-hyderabad" },
      { tagName: "Used Volkswagen in Hyderabad", url: "/buy-used-volkswagen-cars-in-hyderabad" },
      { tagName: "Used Volvo in Hyderabad", url: "/buy-used-volvo-cars-in-hyderabad" }
    ]
  },
  {
    title: "Most Searched Brands From Delhi.",
    tags: [
      { tagName: "Used BMW in Delhi", url: "/buy-used-bmw-cars-in-delhi" },
      { tagName: "Used Mercedes in Delhi", url: "/buy-used-mercedes-cars-in-delhi" },
      { tagName: "Used Aston Martin in Delhi", url: "/buy-used-aston-martin-cars-in-delhi" },
      { tagName: "Used Audi in Delhi", url: "/buy-used-audi-cars-in-delhi" },
      { tagName: "Used Bentley in Delhi", url: "/buy-used-bentley-cars-in-delhi" },
      { tagName: "Used Ferrari in Delhi", url: "/buy-used-ferrari-cars-in-delhi" },
      { tagName: "Used Ford in Delhi", url: "/buy-used-ford-cars-in-delhi" },
      { tagName: "Used Harley Davidson in Delhi", url: "/buy-used-harley-davidson-cars-in-delhi" },
      { tagName: "Used Hummer in Delhi", url: "/buy-used-hummer-cars-in-delhi" },
      { tagName: "Used Indian in Delhi", url: "/buy-used-indian-cars-in-delhi" },
      { tagName: "Used Jaguar in Delhi", url: "/buy-used-jaguar-cars-in-delhi" },
      { tagName: "Used Jeep in Delhi", url: "/buy-used-jeep-cars-in-delhi" },
      { tagName: "Used Maserati in Delhi", url: "/buy-used-maserati-cars-in-delhi" },
      { tagName: "Used Maybach in Delhi", url: "/buy-used-maybach-cars-in-delhi" },
      { tagName: "Used Mercedes-Benz in Delhi", url: "/buy-used-mercedes-benz-cars-in-delhi" },
      { tagName: "Used Mini in Delhi", url: "/buy-used-mini-cars-in-delhi" },
      { tagName: "Used Nissan in Delhi", url: "/buy-used-nissan-cars-in-delhi" },
      { tagName: "Used Porsche in Delhi", url: "/buy-used-porsche-cars-in-delhi" },
      { tagName: "Used Rolls-Royce in Delhi", url: "/buy-used-rolls-royce-cars-in-delhi" },
      { tagName: "Used Toyota in Delhi", url: "/buy-used-toyota-cars-in-delhi" },
      { tagName: "Used Triumph in Delhi", url: "/buy-used-triumph-cars-in-delhi" },
      { tagName: "Used Volkswagen in Delhi", url: "/buy-used-volkswagen-cars-in-delhi" },
      { tagName: "Used Volvo in Delhi", url: "/buy-used-volvo-cars-in-delhi" }
    ]
  },
];

const locations = [
  {
    city: "Delhi",
    icon: "/images/brand-page/most-searched-delhi.webp",
    url: "#",
  },
  {
    city: "Mumbai",
    icon: "/images/brand-page/most-searched-mumbai.webp",
    url: "#",
  },
  {
    city: "Hyderabad",
    icon: "/images/brand-page/most-searched-hyderabad.webp",
    url: "#",
  },
  {
    city: "Pune",
    icon: "/images/brand-page/most-searched-pune.webp",
    url: "#",
  },
  {
    city: "Bengaluru",
    icon: "/images/brand-page/most-searched-bengaluru.webp",
    url: "#",
  },
  {
    city: "Ahmedabad",
    icon: "/images/brand-page/most-searched-ahmedabad.webp",
    url: "#",
  },
  {
    city: "Chennai",
    icon: "/images/brand-page/most-searched-chennai.webp",
    url: "#",
  },
  {
    city: "Chandigarh",
    icon: "/images/brand-page/most-searched-chandigarh.webp",
    url: "#",
  },
  {
    city: "Kolkata",
    icon: "/images/brand-page/most-searched-kolkata.webp",
    url: "#",
  },
];

const MostSearched = ({ brandData }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  let displayLocations = locations;
  let locationsTitle = "Explore Cars by Location";

  if (brandData && brandData.availableCities && brandData.availableCities.length > 0) {
    // Check if this is a model-specific page
    const isModelSpecific = brandData.isModelSpecific && brandData.modelName;
    
    if (isModelSpecific) {
      locationsTitle = `Find Used ${brandData.name || 'Luxury'} ${brandData.modelName} Cars In:`;
      // For model-specific pages, we need to construct the URL based on the current page pattern
      // The pattern should be: /buy-used-[brandName]-cars-[modelName]-in-[cityName]
      const brandSlug = brandData.url || brandData.name?.toLowerCase().replace(/\s+/g, '-') || 'luxury';
      
      // Remove brand name from model name if it's already included to avoid duplication
      // e.g., "Audi A4" -> "A4", "BMW X5" -> "X5", "A4" -> "A4" (no change)
      const cleanModelName = brandData.modelName || 'model';
      const brandName = brandData.name || '';
      
      // Check if model name starts with brand name (case-insensitive)
      // let modelSlug;
      // if (brandName && cleanModelName.toLowerCase().startsWith(brandName.toLowerCase())) {
      //   // Remove brand name and any following space/hyphen
      //   const modelWithoutBrand = cleanModelName.substring(brandName.length).replace(/^[\s\-]+/, '');
      //   modelSlug = modelWithoutBrand.toLowerCase().replace(/\s+/g, '-') || 'model';
      // } else {
      //   modelSlug = cleanModelName.toLowerCase().replace(/\s+/g, '-') || 'model';
      // }
      const modelSlug = brandData.models.find(model => model.modelname === cleanModelName)?.posturl;
      
      displayLocations = brandData.availableCities
        .filter(city => {
          // If we're on a city-specific page, show other cities (exclude current city)
          if (brandData.isCitySpecific && brandData.currentCity) {
            return city.city?.toLowerCase() !== brandData.currentCity.toLowerCase();
          }
          // If not city-specific, show all cities
          return true;
        })
        .map(city => ({
          city: city.city,
          url: `/buy-used-${brandSlug}-cars-${modelSlug}-in-${city.city?.toLowerCase().replace(/\s+/g, '-')}`,
          id: city.id || city.city,
          icon: `/images/brand-page/most-searched-${city.city?.toLowerCase().replace(/\s+/g, '-')}.webp`
        }));
    } else {
      locationsTitle = `Find Used ${brandData.name || 'Luxury'} Cars In:`;
      displayLocations = brandData.availableCities.map(city => ({
        city: city.city,
        url: `/buy-used-${brandData.url || 'luxury'}-cars-in-${city.city?.toLowerCase().replace(/\s+/g, '-')}`,
        id: city.id || city.city,
        icon: `/images/brand-page/most-searched-${city.city?.toLowerCase().replace(/\s+/g, '-')}.webp`
      }));
    }
  }

  return (
    <section className="py-20 bg-[#f6f6f6] xl:py-36 3xl:py-40 ">
      <div className="max-1920">
        <div className="container">
          <ul>
            {searchedList.map((item, ind) => (
              <li
                key={ind}
                className="py-10 border-t border-neutral-300 first-of-type:border-none first-of-type:pt-0 xl:py-14 2xl:py-16"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <h2 className="tracking-tightest font-normal mb-8 pr-8 leading-[1.2] xl:mb-12 2xl:mb-16">
                  {item.title}
                </h2>
                <p className=" text-xl leading-1.7 font-light ">
                  {item.tags.map((tag, ind) => (
                    <Link
                      href={tag.url}
                      key={ind}
                      className="relative collection-search-tag text-black tracking-wide leading-0 px-2 border-l border-neutral-800 first-of-type:border-none first-of-type:pl-0 xl:text-[2rem] 1xl:text-[2.2rem] 2xl:text-[2.5rem] 3xl:text-[2.8rem] 3xl:px-4 hover:text-[#ed2227]"
                    >
                      {tag.tagName}
                    </Link>
                  ))}
                </p>
              </li>
            ))}
          </ul>

          {/* Locations Section */}
          <div className="mt-12 xl:mt-16 2xl:mt-20">
            <h2 className="text-center text-[2.4rem] xl:text-[3rem] 2xl:text-[3.6rem] 3xl:text-[4.2rem] mb-8 text-gray-800 tracking-tightest leading-[1.2] font-normal">
              {locationsTitle}
            </h2>
            <ul className="flex flex-wrap justify-center">
              {displayLocations.map((locationItem, index) => (
                <li
                  key={locationItem.id || index}
                  className="bg-white w-[47%] mt-8 rounded-[1rem] shadow-sm common-car-item transition-all duration-500 ease-in-out sm:w-[32%] lg:w-[23%] mx-[1%] xl:w-[14%] xl:mx-[1.33%] my-4 3xl:shadow-lg 3xl:mt-14 group"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <Link href={locationItem.url} className="pt-20 pb-12 px-5 text-center 3xl:pt-28 3xl:pb-20 block">
                    <Image
                      src={locationItem.icon}
                      className=" object-contain h-[6.5rem] w-auto inline-block mx-auto xl:h-[8rem] 1xl:h-[8.5rem] 2xl:h-[9rem] 3xl:h-[9.5rem]"
                      width="128"
                      height="95"
                      alt={locationItem.city}
                      onError={(e) => { e.currentTarget.src = '/images/brand-page/most-searched-default.webp'; }}
                    />
                    <h6 className="text-[1.6rem] text-[#161616] mt-6 xl:text-[1.8rem] xl:mt-10 1xl:text-[2rem] 1xl:mt-12 3xl:text-[2.2rem] font-medium group-hover:text-[#DE2D22] transition-colors duration-300">
                      {locationItem.city}
                    </h6>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostSearched;
