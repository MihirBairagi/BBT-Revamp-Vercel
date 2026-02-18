import React from "react";
import { Avatar } from "./WallpaperList";

const WallpaperItem = ({ wallpaper, toggleModal }) => {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] 1xl:rounded-[3rem] 3xl:rounded-[3.5rem]">
      <div>
        <img
          src={wallpaper.thumbnail}
          alt={wallpaper.title}
          className="w-full block object-cover h-auto"
        />
      </div>
      <div className={styles.overlay}>
        <div className="flex flex-wrap justify-between text-white">
          <div className="flex-1 pr-[1.5rem] xl:pr-[2.5rem]">
            <div className="flex items-center w-full">
              <a
                href={wallpaper.instagramLink || '#'}
                className="flex items-center w-max"
              >
                <Avatar name={wallpaper.instagramName || wallpaper.author || 'Big Boy Toyz'} bg="#fff" color="#000" />
                <h4 className={styles.instaName}>{wallpaper.instagramName || wallpaper.author || 'Big Boy Toyz'}</h4>
              </a>
              <img
                src="/images/wallpapers/insta-icon.webp"
                alt="Insta Icon"
                className="w-[1.1rem] object-contain h-auto inline-block 1xl:w-[1.3rem] 2xl:w-[1.4rem] 3xl:w-[1.8rem]"
              />
            </div>
            <h3 className={styles.title}>{wallpaper.title}</h3>
          </div>
          <div className="w-max text-right">
            <div
              className={[styles.downloadIcon , "group transition-all duration-500 "]}
              onClick={() => {
                toggleModal(wallpaper._id || wallpaper.id);
              }}
            >
              <img
                src="/images/wallpapers/dwonload-icon.webp"
                alt="Download"
                className="w-full h-auto object-contain inline-block transition-all duration-500 hover:scale-[1.05]"
              />
            </div>
            <p className={styles.downloadText}>Downloads</p>
            <p className={styles.downloadText}>{wallpaper.views || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  downloadIcon:
    "w-[3rem] h-[3rem] flex justify-center items-center cursor-pointer ml-auto mb-[0.5rem] xl:mb-[1rem] 1xl:mb-[1.5rem] 3xl:w-[4.2rem] 3xl:h-[4.2rem] 3xl:mb-[2rem]",
  overlay:
    "absolute left-0 top-0 w-full h-full flex flex-col justify-end bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.01)] px-[2.5rem] pb-[3rem] 3xl:px-[4rem] 3xl:py-[4rem]",
  title:
    "text-[1.6rem] mt-[1rem] leading-[1.3] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.5rem] 1xl:text-[1.65rem] 2xl:text-[1.8rem] 3xl:text-[2.4rem] capitalize",
  instaName:
    "text-[1.3rem] border-r border-r-[#fff] pr-[1rem] mr-[1rem] md:text-[1.1rem] lg:text-[1.4rem] xl:text-[1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] leading-[1]",
  downloadText:
    "text-[1rem] text-right ml-auto w-max xl:text-[0.9rem] 2xl:text-[1.2rem]",
};

export default WallpaperItem;
