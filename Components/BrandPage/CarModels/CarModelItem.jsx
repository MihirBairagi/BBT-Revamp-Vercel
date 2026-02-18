import React from "react";
import Image from "next/image";
import Link from "next/link";

const CarModelItem = ({ data }) => {
  // Helper function to validate and fix image URLs
  const validateImageUrl = (url) => {
    if (!url || typeof url !== "string") {
      return "https://cdn.bigboytoyz.com/new-version/placeholder-car.png";
    }

    // If it's already an absolute URL (including CDN URLs), return as is
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    // If it starts with a slash, it's a valid relative URL
    if (url.startsWith("/")) {
      return url;
    }

    // If it's a filename for brand models, construct the CDN URL
    if (!url.includes("/") && url.length > 3) {
      return `https://cdn.bigboytoyz.com/new-version/brandmodels/${url}`;
    }

    // If it's a malformed relative URL, return placeholder
    if (url.includes("..") || url.length < 3) {
      return "https://cdn.bigboytoyz.com/new-version/placeholder-car.png";
    }

    // Add leading slash to make it a valid relative URL
    return `/${url}`;
  };

  const imageUrl = validateImageUrl(data?.image);

  console.log("CarModelItem image:", {
    originalImage: data?.image,
    processedImage: imageUrl,
    title: data?.title,
  });

  return (
    <div className="mr-8 lg:mr-10 1xl:mr-12 3xl:mr-16 group">
      <Link href={data?.link || "#"}>
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="overflow-hidden">
            <Image
              src={imageUrl}
              width="572"
              height="351"
              className="w-full object-cover block h-[18rem] sm:h-[20rem] md:h-[23rem] lg:h-[18rem] xl:h-[25rem] 1xl:h-[28rem] 3xl:h-[35rem] group-hover:scale-110"
              alt={data?.title || "Car Model"}
            />
          </div>
          <div className="py-10 px-10 flex justify-between xl:py-[3.5rem] 1xl:py-[4rem] 1xl:px-[5rem] 2xl:py-20 2xl:px-16 3xl:px-[5rem] 3xl:py-[6rem]">
            <h3 className="font-medium text-[2.1rem] 1xl:text-[2.5rem] 2xl:text-[2.7rem] 3xl:text-6xl">
              {data?.title || "Car Model"}
            </h3>
            <Image
              src="/images/showroom-location-arrow.webp"
              width="27"
              height="27"
              className="w-7 object-contain 1xl:w-[2.2rem] 2xl:w-[2.3rem] 3xl:w-[2.7rem] group-hover:rotate-[45deg]"
              alt="Arrow Icon"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarModelItem;
