"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const OtherServiceCard = ({ service }) => {
  const [isIOSDevice, setIsIOSDevice] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Detect iOS devices to prevent video crashes
    const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOSDevice(isIOS);
    setIsMounted(true);
  }, []);

  // Don't render anything until we know the device type to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="mr-8 lg:mr-10 xl:mr-20 1xl:mr-28 3xl:mr-32 group">
        <Link href={service.url}>
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="overflow-hidden video-box relative">
              <img
                src={service.thumbnail}
                alt={service.title}
                width="450"
                height="484"
                className="w-full object-cover h-[28rem] md:h-[32rem] 1xl:h-[38rem] 2xl:h-[42rem] 3xl:h-[48rem]"
              />
            </div>
            <div className="py-16 px-10 flex justify-between 1xl:py-10 min-h-[135px] md:min-h-[130px] 1xl:min-h-[150px] 3xl:min-h-[200px] items-center 3xl:px-20">
              <h3 className="font-medium text-4xl 2xl:text-[2.7rem] 3xl:text-6xl pr-[15px]">
                {service.title}
              </h3>
              <Image
                src="/images/showroom-location-arrow.webp"
                width="25"
                height="25"
                className="w-8 object-contain xl:w-[20px] 3xl:w-[25px] group-hover:rotate-[45deg] transition-transform duration-300"
                alt="Service Image"
              />
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="mr-8 lg:mr-10 xl:mr-20 1xl:mr-28 3xl:mr-32 group">
      <Link href={service.url}>
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="overflow-hidden video-box relative">
            {isIOSDevice ? (
              // iOS: Static image only to prevent crashes
              <img
                src={service.thumbnail}
                alt={service.title}
                width="450"
                height="484"
                className="w-full object-cover h-[28rem] md:h-[32rem] 1xl:h-[38rem] 2xl:h-[42rem] 3xl:h-[48rem] group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              // PC/Desktop: Full video experience
              <video
                src={service.video}
                poster={service.thumbnail}
                loop
                autoPlay
                muted
                playsInline
                preload="metadata"
                width="450"
                height="484"
                className="w-full object-cover h-[28rem] md:h-[32rem] 1xl:h-[38rem] 2xl:h-[42rem] 3xl:h-[48rem]"
                onError={(e) => {
                  // Graceful fallback to image if video fails
                  console.log('Video failed to load, falling back to image');
                  e.target.style.display = 'none';
                  const img = document.createElement('img');
                  img.src = service.thumbnail;
                  img.alt = service.title;
                  img.className = "w-full object-cover h-[28rem] md:h-[32rem] 1xl:h-[38rem] 2xl:h-[42rem] 3xl:h-[48rem]";
                  e.target.parentNode.appendChild(img);
                }}
              />
            )}
          </div>
          <div className="py-16 px-10 flex justify-between 1xl:py-10 min-h-[135px] md:min-h-[130px] 1xl:min-h-[150px] 3xl:min-h-[200px] items-center 3xl:px-20">
            <h3 className="font-medium text-4xl 2xl:text-[2.7rem] 3xl:text-6xl pr-[15px]">
              {service.title}
            </h3>
            <Image
              src="/images/showroom-location-arrow.webp"
              width="25"
              height="25"
              className="w-8 object-contain xl:w-[20px] 3xl:w-[25px] group-hover:rotate-[45deg] transition-transform duration-300"
              alt="Service Image"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OtherServiceCard;
