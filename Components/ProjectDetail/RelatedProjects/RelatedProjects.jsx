"use client";
import React, { useEffect } from "react";
import AOS from "aos";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Land Rover Porsche",
    description: "Interiors, Paint, Engine Upgrade",
    image: "/images/project-listing/project-listing-img-2.webp",
    url: "/projects/02",
  },
  {
    title: "Toyota Vellfire",
    description: "Body Kit, Interiors,  PPF",
    image: "/images/project-listing/project-listing-img-3.webp",
    url: "/projects/03",
  },
  {
    title: "Mercedes-AMG G 63",
    description: "Interiors, Music System Upgrade",
    image: "/images/project-listing/project-listing-img-4.webp",
    url: "/projects/04",
  },
  {
    title: "Defender X",
    description: "Black Body Kit,  Engine Upgrade, Alloys",
    image: "/images/project-listing/project-listing-img-5.webp",
    url: "/projects/05",
  },
  {
    title: "Land Rover Porsche",
    description: "Interiors, Paint, Engine Upgrade",
    image: "/images/project-listing/project-listing-img-6.webp",
    url: "/projects/06",
  },
  {
    title: "Toyota Vellfire",
    description: "Body Kit, Interiors,  PPF",
    image: "/images/project-listing/project-listing-img-7.webp",
    url: "/projects/07",
  },
  {
    title: "Mercedes-AMG G 63",
    description: "Interiors, Music System Upgrade",
    image: "/images/project-listing/project-listing-img-8.webp",
    url: "/projects/08",
  },
];

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Next Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <Image
        src="/images/curve-slide-prev.webp"
        alt="Previous Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  arrows: true,

  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "7%",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "7%",
      },
    },
  ],
};

const ProjectItem = ({ project }) => {
  return (
    <div className="px-[1rem] sm:px-[1.5rem] md:px-[2rem]">
      <Link
        href={project.url}
        className="block w-full rounded-[2rem] overflow-hidden relative md:rounded-[2.5rem] lg:rounded-[3.5rem] group xl:rounded-[4rem] 3xl:rounded-[5rem]"
      >
        <div>
          <img
            src={project.image}
            alt=""
            className="w-full block object-cover h-auto aspect-[9/13] group-hover:scale-110 transition-all duration-500 ease-in-out"
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

const RelatedProjects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="py-[6rem] bg-white lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div
        className="max-1920 overflow-hidden"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="container">
          <h2 className="titleWithLine mobileLine mb-[4rem] lg:mb-[6rem] xl:pb-[0.5rem] 3xl:mb-[8rem]">
            <span className="bg-white pr-5 inline-block relative z-10 tracking-[-1px] lg:pr-5 xl:text-[2.4rem] xl:pr-[4rem] 1xl:text-[2.7rem] 3xl:text-[4.5rem] 3xl:tracking-[-0.4rem]">
              Related Projects
            </span>
          </h2>
        </div>
        <div className="pl-[1rem] lg:pl-0 lg:[&_.slick-list]:w-[85%] lg:[&_.slick-list]:mx-auto">
          <Slider {...settings} className="recent-uploads-slider com-arrow-slider related-project-slider">
            {projects.map((project, index) => (
              <div>
                <ProjectItem project={project} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
