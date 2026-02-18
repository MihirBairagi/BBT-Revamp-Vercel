import { time } from "console";
import React from "react";

const showroomThumbs = [
  {
    title: "Gurgaon",
    thumbnail: "/images/showroom-page/showroom-thumb-gurgaon.webp",
  },
  {
    title: "Mumbai",
    thumbnail: "/images/showroom-page/showroom-thumb-mumbai.webp",
  },
  {
    title: "Hyderabad",
    thumbnail: "/images/showroom-page/showroom-thumb-hydrabad.webp",
  },
  {
    title: "Bengaluru",
    thumbnail: "/images/showroom-page/showroom-thumb-bengalore.webp",
  },
  {
    title: "Ahmedabad",
    thumbnail: "/images/showroom-page/showroom-thumb-ahmedabad.webp",
  },
];

const ShowroomThumbs = () => {
  return (
    <section className="bg-white hidden lg:block pb-[6rem] xl:pb-[10rem] 3xl:pb-[13rem]">
      <div className="max-1920">
        <div className="container">
          <h3 className=" pl-8 titleWithLine mobileLine text-right 1xl:tracking-[-0.2rem] sm:text-left sm:pl-0 xl:pb-[0.5rem]">
            <span className="bg-[#fff] pl-5 inline-block relative z-10 sm:pl-0 sm:pr-5 xl:text-[2.4rem] xl:pr-[4rem] 1xl:text-[2.7rem] 3xl:text-[3.5rem]">
              Showrooms
            </span>
          </h3>
          <div className="flex justify-between items-end mt-[5rem]">
            <h2 className="font-light w-40% leading-[1.2] tracking-tighter mt-[1rem] xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
              Explore <b>Our Showrooms</b> Across India
            </h2>
            <p className="w-50% text-[1.4rem] font-light 2xl:text-[1.5rem] 3xl:text-[1.8rem]">
              Step into the world of luxury at Big Boy Toyz showrooms located in
              key cities across India. Each location offers a premium collection
              of pre-owned supercars, exceptional customer service, and a
              one-of-a-kind automotive experience. Visit us in Gurgaon, Mumbai,
              Hyderabad, Ahmedabad, or Bengaluru—and drive home your dream.
            </p>
          </div>

          <ul className="grid grid-cols-3 gap-y-[6rem] gap-x-5 mt-[6rem] xl:grid-cols-4 xl:gap-x-[3rem] 1xl:grid-cols-5">
            {showroomThumbs.map((showroom, index) => (
              <li key={index}>
                <a href={`#showroomList${index + 1}`} className="group">
                  <div className=" overflow-hidden rounded-[20px]">
                    <img
                      src={showroom.thumbnail}
                      alt={showroom.title}
                      className="object-cover block w-full h-auto rounded-[20px] transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-[2rem] font-medium text-[2.5rem] text-center">
                    {showroom.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShowroomThumbs;
