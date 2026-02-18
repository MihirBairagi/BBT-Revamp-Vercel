"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * Collection button with loading state
 * Shows loading indicator when navigating to collection page
 */
export default function CollectionButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Navigate to collection page
    router.push("/collection");
    
    // Reset loading state after 10 seconds as fallback
    setTimeout(() => setIsLoading(false), 10000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="bg-white text-black relative text-xl flex items-center font-medium h-[4.5rem] rounded-[3rem] border border-white py-[1.5rem] pr-[8rem] pl-[2rem] tracking-[-1px] transition-all duration-500 ease-in 1xl:h-[4.9rem] 2xl:py-[1.5rem] 2xl:pr-[9rem] 2xl:pl-[2.2rem] xl:text-[1.4rem] 3xl:py-[1.5rem] 3xl:pl-[2.4rem] 3xl:pr-[11rem] 3xl:h-[6.3rem] 3xl:rounded-[4rem] 3xl:text-[1.9rem] group hover:bg-transparent hover:text-white hover:border-[#808080] disabled:opacity-70 disabled:cursor-wait"
    >
      {isLoading ? (
        <>
          <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent mr-2"></span>
          Loading Collection...
        </>
      ) : (
        <>
          Discover Collection
          <span className="bg-black absolute flex justify-center items-center w-[4.2rem] h-[2.7rem] rounded-[3rem] top-[50%] translate-y-[-50%] right-[1rem] p-[1rem] transition-all duration-500 ease-in 3xl:w-[5.5rem] 3xl:h-[3.4rem] 3xl:right-[1.8rem] 3xl:py-[0rem] 3xl:px-[0] group-hover:bg-white ">
            <Image
              src="/images/banner-arrow-icon-white.webp"
              alt="Arrow Icon"
              width="20"
              height="20"
              className="w-full object-contain 3xl:max-w-[2rem] max-w-[1.5rem] transition-all duration-500 ease-in group-hover:invert"
            />
          </span>
        </>
      )}
    </button>
  );
}
