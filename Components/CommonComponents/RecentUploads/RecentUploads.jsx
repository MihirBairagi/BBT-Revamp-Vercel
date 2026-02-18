"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { formatProductPrice, formatDiscountedPrice } from "../../../app/lib/utils/productUtils";
import { useProducts } from "../../../app/lib/hooks/useProducts";
import { getDisplayImages } from "../../../app/lib/services/gallery";

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
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "7%",
      },
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "7%",
      },
    },
  ],
};

const RecentUploads = ({ bgColor }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Fetch latest added products
  const { products, isLoading, isError } = useProducts({
    page: 1,
    limit: 12,
    sort: 'added',
    order: 'desc',
    random: false,
  });

  // Normalize/transform for UI compatibility
  const transformed = Array.isArray(products) ? products.map((p) => ({
    _id: p.id || p.id_ || p.mongodb_id,
    category: p.category || '0',
    posturl: p.posturl || p.postUrl || p.slug || '',
    title: p.proname || p.name || p.title || '',
    registrationYear: p.registrationYear || p.yearOfRegistration || 'N/A',
    price: p.proprice || p.price || '',
    kmDriven: p.kmDriven || 'N/A',
    fuelType: p.fuelType || 'N/A',
    registrationState: p.registrationState || p.regstate || 'N/A',
    isBooked: p.isBooked || p.booked === '1' || p.booked === 'yes',
    isSoldOut: p.isSoldOut || p.sold === '1' || p.sold === 'yes',
    thumbnail: p.thumbnail,
    images: p.images || [],
    gallery: p.gallery || [],
  })) : [];

  return (
    <section
      className={`py-[6rem] bg-[${
        bgColor ? bgColor : "#F3F3F3"
      }] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]`}
      style={{ backgroundColor: bgColor ? bgColor : "#F3F3F3" }}
    >
      <div
        className="max-1920 overflow-hidden"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="container">
          <h2 className=" pl-8 lg:pl-0 titleWithLine mobileLine text-right mb-[4rem] lg:text-left lg:mb-[6rem] xl:pb-[0.5rem] 3xl:mb-[8rem]">
            <span
              className={`bg-[${
                bgColor ? bgColor : "#F3F3F3"
              }] pl-5 inline-block relative z-10 tracking-[-1px] lg:pl-0 lg:pr-5 xl:pr-[4rem] xl:text-[3rem] 1xl:text-[3.5rem] 2xl:text-[3.8rem] 3xl:text-[4.5rem] 3xl:tracking-[-0.4rem]`}
              style={{ backgroundColor: bgColor ? bgColor : "#F3F3F3" }}
            >
              Recent Uploads
            </span>
          </h2>
        </div>
        <div className="pl-[2rem] lg:pl-0 lg:[&_.slick-list]:w-[85%] lg:[&_.slick-list]:mx-auto">
          <Slider {...settings} className="recent-uploads-slider com-arrow-slider">
            {(isLoading || isError ? [] : transformed).map((data, index) => (
              <div key={index}>
                <Link
                  href={data.category == '1' ? `https://cars.co.in/used-luxury-cars/${(data.posturl || data._id)}-detail-page` : `/used-luxury-cars/${(data.posturl || data._id)}-detail-page`}
                  className="mr-9 bg-white lg:mx-4 block transition-all ease-in-out hover:shadow-lg 1xl:mx-6 2xl:mx-8 3xl:mx-[2.5rem]"
                >
                  <div
                    className={`bg-white px-8 pt-[2rem] pb-[2rem] sm:px-8 sm:pt-8 sm:pb-16 lg:pb-10 xl:px-[3rem] 2xl:py-10 3xl:pt-12 1xl:px-12 3xl:py-[3rem] 3xl:px-[4.8rem]`}
                  >
                    <p
                      className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 3xl:text-[1.2rem] 3xl:px-8 3xl:py-[0.45rem] 3xl:rounded-[2rem] 3xl:leading-[1]`}
                    >
                      Reg.Year :{" "}
                      {data?.registrationYear ? data.registrationYear : "N/A"}
                    </p>
                    <h4 className="mt-4 text-1.9xl 3xl:text-[2.5rem] 3xl:tracking-[-0.15rem]">
                      {data?.title ? data.title : "Rolls-Royce Ghost Series II"}
                    </h4>
                    <p className="font-medium text-1.6xl mt-2 3xl:text-[2.5rem] 3xl:mt-[0.3rem] 3xl:tracking-[-0.15rem]">
                      {formatProductPrice(data)}
                      {formatDiscountedPrice(data) && (
                        <span className="text-lg ml-2 line-through text-gray-500">
                          {formatDiscountedPrice(data)}
                        </span>
                      )}
                    </p>

                    <ul className="flex flex-wrap mt-8">
                      <li className="w-3/6 px-7 border-l border-[#CFCFCF] xl:w-2/6 xl:px-0 xl:border-l-0">
                        <img
                          src="/images/km-icon-black.webp"
                          alt="Icon"
                          width="24"
                          height="25"
                          className={`object-contain h-5 3xl:h-auto xl:w-[0.9rem] 2xl:w-[1rem] 3xl:w-[1.16rem]`}
                        />
                        <p className="text-[1.1rem] tracking-[-0.5px] mt-4 mb-2 xl:text-[0.9rem] xl:mt-[0.5rem] xl:mb-[0.3rem] 2xl:text-[1.1rem] 3xl:text-[1.3rem] text-[#767778] 3xl:mt-[0.7rem]">
                          Kilometers Driven
                        </p>
                        <h6 className="text-[1.3rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">
                          {data?.kmDriven ? `${data.kmDriven} km` : "N/A"}
                        </h6>
                      </li>
                      <li className="w-3/6 px-7 border-l border-[#CFCFCF] border-r xl:border-r-0 xl:w-2/6 xl:px-[1rem] xl:pl-[1.5rem]">
                        <img
                          src="/images/gas-icon-black.webp"
                          alt="Icon"
                          width="24"
                          height="25"
                          className={`object-contain h-5 3xl:h-auto xl:w-[0.9rem] 2xl:w-[1rem] 3xl:w-[1.16rem]`}
                        />
                        <p className="text-[1.1rem] tracking-[-0.5px] mt-4 mb-2 xl:text-[0.9rem] xl:mt-[0.5rem] xl:mb-[0.3rem] 2xl:text-[1.1rem] 3xl:text-[1.3rem] text-[#767778] 3xl:mt-[0.7rem]">
                          Fuel / Gas Type
                        </p>
                        <h6 className="text-[1.3rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem]">
                          {data?.fuelType ? data.fuelType : "N/A"}
                        </h6>
                      </li>
                      <li className="w-3/6 px-7 border-l border-[#CFCFCF] hidden xl:block xl:w-2/6 xl:pl-[1.5rem] xl:pr-0">
                        <img
                          src="/images/register-icon-black.webp"
                          alt="Icon"
                          width="24"
                          height="25"
                          className={`object-contain h-5 3xl:h-6 xl:w-[0.9rem] 2xl:w-[1rem] 3xl:w-[1.13rem]`}
                        />
                        <p className="text-[1.1rem] tracking-[-0.5px] mt-4 mb-2 xl:text-[0.9rem] xl:mt-[0.5rem] xl:mb-[0.3rem] 2xl:text-[1.1rem] 3xl:text-[1.3rem] text-[#767778] 3xl:mt-[0.7rem]">
                          Registration State
                        </p>
                        <h6 className="text-[1.3rem] xl:texauto-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.6rem]">
                          {" "}
                          {data?.registrationState
                            ? data.registrationState
                            : "N/A"}
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className=" overflow-hidden">
                    <img
                      src={(getDisplayImages(data)[0] || {}, "https://cdn.bigboytoyz.com/new-version/placeholder-car.png").url || "https://cdn.bigboytoyz.com/new-version/placeholder-car.png"}
                      alt="Icon"
                      width="390"
                      height="285"
                      className="object-cover w-full block h-full transition-all ease-in-out duration-500 hover:scale-[1.2]"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RecentUploads;
