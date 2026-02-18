"use client";
import Link from "next/link";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  autoplay: true,
  autoplaySpeed: 2500,
  centerMode: true,
  centerPadding: "4%",
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "5%",
      },
    },
  ],
};

const pastProjects = [
  {
    title: "Toyota Vellfire",
    description: "Body Kit, Interiors,  PPF",
    image: "/images/project-listing/project-listing-img-3.webp",
    url: "/projects/id-1",
  },
  {
    title: "Land Rover Porsche ",
    description: "Interiors, Paint, Engine Upgrade",
    image: "/images/project-listing/project-listing-img-2.webp",
    url: "/projects/id-2",
  },
  {
    title: "Defender X",
    description: "Black Body Kit,  Engine Upgrade, Alloys",
    image: "/images/project-listing/project-listing-img-5.webp",
    url: "/projects/id-3",
  },

  {
    title: "Mercedes-AMG G 63",
    description: "Interiors, Music System Upgrade",
    image: "/images/project-listing/project-listing-img-8.webp",
    url: "/projects/id-4",
  },
];

const ProjectItem = ({ project }) => {
  return (
    <div className="pr-[2rem] xl:pr-[3rem] 2xl:pr-[4.5rem] 3xl:pr-[6.5rem]">
      <Link
        href={project.url}
        className="block w-full rounded-[2rem] overflow-hidden relative md:rounded-[2.5rem] lg:rounded-[3.5rem] group xl:rounded-[4rem] 3xl:rounded-[5rem]"
      >
        <div>
          <img
            src={project.image}
            alt=""
            className="w-full block object-cover h-auto group-hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="absolute w-full left-0 top-0 h-full px-[2.5rem] py-[2rem] lg:pb-[3rem] lg:pl-[3rem] flex flex-col justify-end xl:pl-[4rem] xl:pb-[4rem] 1xl:pl-[4.5rem] 1xl:pb-[4.5rem] bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.01)] ">
          <div className="text-white">
            <h4 className="text-[1.7rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem]">
              {project.title}
            </h4>
            <p className="text-[1.2rem] font-light mt-[0.5rem] xl:text-[1.35rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]">
              {project.description}
            </p>
          </div>
        </div>
        <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center p-1 absolute top-[1.5rem] right-[1.5rem] md:top-12 md:right-12 lg:top-[2rem] lg:right-[2rem] xl:w-[4.3rem] xl:h-[4.3rem] 1xl:w-[5rem] 1xl:h-[5rem] 3xl:w-[6.7rem] 3xl:h-[6.7rem] 3xl:top-16 3xl:right-16 group-hover:bg-black transition-all duration-500 ease-in">
          <img
            src="/images/showroom-location-arrow.webp"
            className="object-contain w-4 xl:w-[1.5rem] 2xl:w-6 3xl:w-[2rem] group-hover:invert transition-all duration-500 ease-in"
            width="20"
            height="20"
            alt="Arrow Icon"
          />
        </span>
      </Link>
    </div>
  );
};

const SneakPeek = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="md:flex md:justify-between md:items-center">
            <div className="xl:flex-[1]">
              <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.1rem] mb-[2rem] md:text-left xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize">
                the sneak peek <br /> <b>of our work</b>
              </h2>
              <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
                Get your dream luxury car in 4 easy steps at Big Boy Toyz,{" "}
                <br /> India's trusted used car portal.
              </p>
            </div>
            <div className="hidden md:block">
              <Link
                href="#"
                className="w-full h-[5rem] flex justify-center items-center text-[1.4rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] mx-auto sm:max-w-[300px] xl:max-w-none xl:w-max xl:px-[4rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:px-[5rem] 1xl:text-[1.3rem] 2xl:h-[6rem] 3xl:h-[7.37rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-[#333333] transition-all duration-500 ease-in-out"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:pl-[3%] lg:pl-[7%]">
          <div className="celebration-slider pl-[2rem] mt-[5rem]">
            <Slider {...settings}>
              {pastProjects.map((item, index) => (
                <ProjectItem project={item} key={index} />
              ))}
            </Slider>
          </div>
        </div>

        <div className="container">
          <div className="mt-[3rem] md:hidden flex justify-center">
            <div className="w-max">
              <Link
                href="#"
                className="w-full h-[5rem] flex justify-center items-center text-[1.4rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] mx-auto sm:max-w-[300px]"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;
