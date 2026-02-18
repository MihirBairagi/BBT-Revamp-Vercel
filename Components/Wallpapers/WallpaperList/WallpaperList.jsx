"use client";
import React, { useState, useEffect } from "react";
import { wallpapersAPI } from "../../../app/lib/services/api";
import WallpaperItem from "./WallpaperItem";
import DownloadPopup from "./DownloadPopup";

export function Avatar({ name, bg, color }) {
  const getAvatarLetters = (name) => {
    const words = name.trim().split(" ");
    let avatarLetters = "";

    for (let i = 0; i < 2 && i < words.length; i++) {
      avatarLetters += words[i].charAt(0).toUpperCase(); // Get the first letter of each word
    }

    return avatarLetters;
  };

  const avatarLetters = name ? getAvatarLetters(name) : "BB";
  return (
    <div
      className={`w-[3rem] h-[3rem] rounded-[50%] bg-[${bg}] mr-[0.7rem] uppercase text-[1.3rem] text-[${color}] flex justify-center items-center font-medium text-center 3xl:w-[4.2rem] 3xl:h-[4.2rem] 3xl:text-[1.6rem]`}
      style={{ backgroundColor: bg, color: color }}
    >
      {avatarLetters}
    </div>
  );
}

const WallpaperList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [wallpaperId, setWallpaperId] = useState("");
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Fetch wallpapers from backend
  const fetchWallpapers = async (pageNum = 1, append = false) => {
    try {
      if (!append) setLoading(true);
      else setLoadingMore(true);
      
      const response = await wallpapersAPI.getAll(pageNum, 12);
      
      console.log('API Response:', response); // Debug log
      
      if (response && response.success && response.wallpapers) {
        // Use the wallpapers directly from API - no additional mapping needed
        const wallpapers = response.wallpapers;
        
        console.log('Wallpapers to display:', wallpapers.slice(0, 2)); // Debug log

        if (append) {
          setWallpapers(prev => [...prev, ...wallpapers]);
        } else {
          setWallpapers(wallpapers);
        }
        
        setPage(pageNum);
        setHasMore(response.meta?.hasNextPage || false);
      } else {
        console.error('Invalid API response:', response);
        setError('Failed to fetch wallpapers');
      }
    } catch (err) {
      console.error('Error fetching wallpapers:', err);
      setError('Failed to load wallpapers');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchWallpapers(1);
  }, []);

  const loadMore = () => {
    if (hasMore && !loadingMore) {
      const nextPage = page + 1;
      fetchWallpapers(nextPage, true);
    }
  };

  const toggleModal = (id) => {
    setWallpaperId(id);
    setOpenModal(!openModal);
  };

  if (loading) {
    return (
      <section className="bg-white pb-[5rem] lg:pb-[8rem] xl:pb-[10rem] 1xl:pb-[12rem] 2xl:pb-[14rem] 3xl:pb-[16rem]">
        <div className="max-1920">
          <div className="container">
            <div className="py-[7rem] text-center">
              <div className="animate-spin h-12 w-12 border-4 border-black rounded-full border-t-transparent mx-auto mb-4"></div>
              <h2 className="text-xl">Loading Wallpapers...</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error && wallpapers.length === 0) {
    return (
      <section className="bg-white pb-[5rem] lg:pb-[8rem] xl:pb-[10rem] 1xl:pb-[12rem] 2xl:pb-[14rem] 3xl:pb-[16rem]">
        <div className="max-1920">
          <div className="container">
            <div className="py-[7rem] text-center">
              <h2 className="text-xl text-red-600 mb-4">Error Loading Wallpapers</h2>
              <p className="text-gray-600 mb-4">{error}</p>
              <button 
                onClick={() => fetchWallpapers(1)} 
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white pb-[5rem] lg:pb-[8rem] xl:pb-[10rem] 1xl:pb-[12rem] 2xl:pb-[14rem] 3xl:pb-[16rem]">
      <div className="max-1920">
        {openModal && (
          <DownloadPopup toggleModal={toggleModal} wallpaperId={wallpaperId} />
        )}
        <div className="container">
          {wallpapers.length > 0 ? (
            <>
              <ul className="block md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-[3rem] xl:gap-[5rem]">
                {wallpapers.map((wallpaper, index) => (
                  <li className="mb-[3rem] xl:mb-0" key={wallpaper._id}>
                    <WallpaperItem
                      wallpaper={wallpaper}
                      toggleModal={toggleModal}
                    />
                  </li>
                ))}
              </ul>
              {hasMore && (
                <div className="w-max mx-auto mt-[3rem] xl:mt-[5rem] 1xl:mt-[7rem] xl:min-w-[170px] 2xl:min-w-[190px] 3xl:min-w-[240px] 3xl:mt-[6rem]">
                  <button 
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="bg-black w-full text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] px-[3rem] h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] transition-all duration-500 hover:bg-[#333] disabled:opacity-50"
                  >
                    {loadingMore ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent mr-2"></div>
                        Loading...
                      </>
                    ) : (
                      'Show More'
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="py-[7rem] text-center">
              <h2>No Wallpapers Available Now!</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WallpaperList;
