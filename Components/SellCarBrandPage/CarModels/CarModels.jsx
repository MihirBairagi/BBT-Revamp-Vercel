"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CarModels = ({ brandName = 'BMW', models = [] }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#f2f2f2] py-[6rem] xl:py-[10rem] 2xl:py-[12rem]">
      <div className="container">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h2 className="text-[3rem] md:text-[3.5rem] 3xl:text-[5rem] uppercase font-bold leading-[1.1]">
            {`${brandName} Car Models`}
          </h2>
          <h3 class="stroke-text text-[3rem] md:text-[3.5rem] 3xl:text-[5rem] uppercase font-bold leading-[1.1] mt-5">
            We're looking to buy
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-[4rem] sm:gap-x-[3rem] mt-[4rem] xl:mt-[7rem] xl:gap-y-[6rem]">
          {Array.isArray(models) && models.length > 0 ? (
            models.map((model, idx) => {
              const modelName = model?.modelname || model?.name || '';
              // Remove brand prefix if present to avoid duplication like "Audi Audi e-tron"
              let displayModelName = modelName;
              if (typeof brandName === 'string' && typeof modelName === 'string') {
                const bn = brandName.trim();
                const nameLower = modelName.toLowerCase();
                const bnLower = bn.toLowerCase();
                if (nameLower.startsWith(bnLower + ' ')) {
                  displayModelName = modelName.substring(bn.length).trim();
                } else if (nameLower.startsWith(bnLower + '-')) {
                  displayModelName = modelName.substring(bn.length).replace(/^[-\s]+/, '').trim();
                }
              }
              const rawImg = model?.modelimage || '';
              const imgSrc = rawImg && !rawImg.includes('/') && rawImg.length > 3
                ? `https://cdn.bigboytoyz.com/new-version/brandmodels/${rawImg}`
                : (rawImg || 'https://cdn.bigboytoyz.com/new-version/placeholder-car.png');
              return (
                <div
                  className="car-item"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                  key={`${model?.id || model?.id_ || idx}`}
                >
                  <div className=" overflow-hidden group rounded-[1.5rem]">
                    <img
                      src={imgSrc}
                      alt={modelName}
                      className="w-full object-cover block"
                    />
                  </div>
                  <h4 className="font-[500] text-[2rem] mt-[1rem] 3xl:text-[2.3rem] 3xl:mt-[1.5rem]">
                    {`Sell Used ${brandName} ${displayModelName}`}
                  </h4>
                </div>
              );
            })
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default CarModels;
