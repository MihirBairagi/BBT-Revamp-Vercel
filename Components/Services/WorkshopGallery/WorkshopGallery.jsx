"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const galleryImages = [
  "/images/services/workshop-gallery-1.webp",
  "/images/services/workshop-gallery-2.webp",
  "/images/services/workshop-gallery-3.webp",
  "/images/services/workshop-gallery-4.webp",
  "/images/services/workshop-gallery-5.webp",
  "/images/services/workshop-gallery-6.webp",
  "/images/services/workshop-gallery-7.webp",
  "/images/services/workshop-gallery-8.webp",
  "/images/services/workshop-gallery-9.webp",
];

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <img
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
      <img
        src="/images/curve-slide-prev.webp"
        alt="Previous Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const WorkshopGallery = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container text-center">
          <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.1rem] xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize">
            Workshop <b>Gallery</b>
          </h2>
          <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[1rem] font-light [&>br]:hidden md:[&>br]:block">
            Our list of Associates share a common vision for Automotive <br />{" "}
            Excellence and a deep passion for Exotic cars.
          </p>
        </div>
        <div className="showroom-image-slider mt-[4rem] xl:mt-[6rem] 3xl:mt-[8rem]">
          <Slider {...settings}>
            {galleryImages.map((item, index) => (
              <div key={index} className="slide-item">
                <div className="container">
                  <img
                    src={item}
                    alt="Gallery Image"
                    className="w-full h-auto block object-cover max-h-[90vh] min-h-[200px] xl:min-h-[300px]"
                    width="1580"
                    height="950"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;
