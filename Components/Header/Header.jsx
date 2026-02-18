"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import HeaderMenu from "./HeaderMenu";

const styles = {
  menuItem:
    "text-white relative px-7 uppercase text-sm transition-all ease-in-out duration-300 lg:border-l lg:border-l-[#fff]  xl:text-[1rem] xl:px-[1.5rem] 1xl:text-[1.1rem] 3xl:text-[1.4rem] 2xl:tracking-[0.4px] 3xl:tracking-[0.3px] 3xl:px-[1.9rem]",
};

const Header = ({}) => {
  const pathName = usePathname();
  const [mobSearchOpen, setMobSearchOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const closeMobSearch = () => {
    setMobSearchOpen(false);
    setSearchQuery("");
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "/";
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to search results page with the query (using 'q' parameter as expected by search-results page)
      router.push(
        `/search-results?q=${encodeURIComponent(searchQuery.trim())}`
      );
      closeMobSearch();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 1000);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define static routes and dynamic route prefixes
  const staticRoutes = [
    "/about-us",
    "/collection",
    "/showrooms",
    "/workshop",
    "/wallpapers",
    "/booking",
    "/emi-calculator",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
  ];
  const dynamicPrefixes = [
    "/cars",
    "/used-luxury-cars",
    "/search-results",
    "/filter-results",
    "/projects",
    "/blogs",
  ];

  // Check for matching static or dynamic routes
  const isPageHeader =
    staticRoutes.includes(pathName) ||
    dynamicPrefixes.some((prefix) => pathName.startsWith(prefix)) ||
    (pathName.startsWith("/guides") &&
      pathName.split("/").filter(Boolean).length === 2) ||
    pathName.startsWith("/buy-used") ||
    pathName.startsWith("/sell-my-used");

  const hideHeader = pathName.startsWith("/africa") || pathName.startsWith("/realty");

  return (
    <header
      className={`header w-full z-[99] transition-all duration-500 ease-in-out min-h-[8rem] xl:min-h-[8.6rem] 1xl:min-he-[9.5rem] 3xl:min-he-[11.5rem] ${
        isPageHeader
          ? "page-header relative bg-[#000]"
          : "absolute bg-transparent"
      } ${isSticky ? "page-header sticky-header w-full" : ""} ${
        hideHeader && "hidden"
      }`}
      id="header"
    >
      <HeaderMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="max-1920">
        <div
          className={`header-wrapper w-full px-[3rem] py-[1.5rem] mx-auto lg:py-[2rem] lg:px-[4rem] 1xl:py-[2.5rem] 2xl:px-[4.3rem] 3xl:py-[3rem] 3xl:px-[5.5rem] ${
            isPageHeader
              ? "py-[2rem] px-[2rem] 2xl:pt-[2.5rem] 2xl:pb-[3rem] 2xl:pr-[4rem] 2xl:pl-[3.5rem] 3xl:py-[3.5rem] 3xl:px-[5.5rem]"
              : ""
          }`}
        >
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center menu-toggler cursor-pointer lg:order-3`}
              onClick={() => setOpenMenu(true)}
            >
              <span className="text-white uppercase mr-5 hidden lg:inline-block text-base xl:text-lg 3xl:text-2xl 3xl:mr-6">
                Menu
              </span>
              <div className="menu-bar w-12 lg:w-10 xl:w-[3rem] 3xl:w-[3.9rem] [&>span]:h-[1.5px] [&>span]:bg-white [&>span]:block [&>span]:rounded-[5px] group">
                <span className="w-[80%] mb-[7px] 3xl:mb-[8px]"></span>
                <span className="w-[100%] mb-[7px] 3xl:mb-[8px] group-hover:ml-[5px] transition-all duration-500 ease-in-out"></span>
                <span className="w-[65%]"></span>
              </div>
            </div>
            <div className="header-logo lg:order-1 inline-block lg:block">
              <Link href="/" className="block" onClick={handleLogoClick}>
                <Image
                  src="/images/bbt-signature-logo.webp"
                  width="258"
                  height="51"
                  alt="BBT Logo"
                  className="object-contain w-full mt-[6px] h-[3.5rem] xl:h-[4rem] 2xl:h-[4.5rem] 3xl:h-[5rem]"
                  priority="high"
                />
              </Link>
            </div>
            <div
              className={`lg:flex items-center justify-center header-phone-list hidden lg:order-2 [&>a:last-of-type]:border-r [&>a:last-of-type]:border-r-[#fff] group`}
            >
              <span className={styles.menuItem}>BUY - 9999 9999 83 </span>
              <span className={styles.menuItem}>SELL - 9999 9999 15 </span>
              <span className={styles.menuItem}>
                Detailing and Modifications - 8999 9996 27{" "}
              </span>
              <span className={styles.menuItem}>Servicing - 8999 9992 05 </span>
              <span className={styles.menuItem}>
                CARS.CO.IN - 9999 9999 08{" "}
              </span>
            </div>

            <div
              className="mobile-search-bar lg:hidden"
              onClick={() => setMobSearchOpen(true)}
            >
              <Image
                src="/images/banner-search-icon-white.webp"
                width="20"
                height="20"
                alt="Header Search Icon"
                className="w-8 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile search section */}
        <div
          className={`lg:hidden mobile-search fixed ${
            mobSearchOpen ? "top-0 show-search" : "top-[-120vh]"
          } left-0 w-full h-full z-[100] min-h-[100vh] min-w-[100vw] pt-[60px] transition-all duration-500`}
        >
          <div
            className={` overlay bg-black absolute w-full h-full left-0 top-0 min-h-[100vh] min-w-[100vw] transition-all duration-500`}
          ></div>
          <div className=" px-[3rem] relative z-[2] flex flex-col items-center">
            <div className="relative flex items-center w-full bg-black rounded-[4rem] mobile-search-box overflow-hidden border border-[#525252]">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search Your Dream Car..."
                className="w-full border-0 outline-none bg-transparent text-white text-[15px] py-4 pr-20 pl-8 placeholder:text-white"
              />
              <span className="absolute right-5 top-[50%] translate-y-[-50%]">
                <Image
                  src="/images/mobile-search-icon.svg"
                  width="17"
                  height="17"
                  alt="Search Icon"
                  className="w-[16px] object-contain"
                />
              </span>
            </div>
            <button
              onClick={handleSearch}
              className=" bg-[#646464] text-white px-[20px] py-[8px] w-max rounded-full text-[14px] font-medium mx-auto mt-[15px] inline-block"
            >
              Search
            </button>
          </div>
          <span
            className="w-[30px] h-[30px] absolute top-[15px] right-[15px] border border-[#525252] rounded-[50%] flex justify-center align-center p-[5px]"
            onClick={closeMobSearch}
          >
            <img
              src="/images/mobile-search-close.svg"
              alt="Close"
              className="object-contain w-[11px]"
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
