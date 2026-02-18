import React from "react";
import BreadCrumb from "../../CommonComponents/BreadCrumb/BreadCrumb";

const BannerSection = ({ brandData }) => {
  // Use brand data or fallback
  const brandName = brandData?.name || "BMW";
  const rawModelName = brandData?.modelName || "";
  const modelName = rawModelName
    .replace(new RegExp(`^${brandName}\s*`, "i"), "")
    .trim();
  const cityName = brandData?.currentCity;
  const displayName =
    brandName.charAt(0).toUpperCase() + brandName.slice(1).toLowerCase();

  return (
    <section className="bg-[#f3f3f3] py-[5rem] lg:py-[7rem] 1xl:py-[9rem]">
      <div className="max-1920 mx-auto">
        <div className="container relative z-10">
          <div>
            <div className="text-center">
              <div className="flex justify-center">
                <BreadCrumb
                  pageTitle={displayName}
                  modelName={modelName}
                  cityName={cityName}
                  // Explicit hrefs to avoid slug mismatches like "audi-a3" vs "a3"
                  modelHref={`/buy-used-${brandName
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}-cars-${rawModelName
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`}
                  cityHref={
                    cityName
                      ? `/buy-used-${brandName
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")}-cars-${rawModelName
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")}-in-${cityName
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")}`
                      : undefined
                  }
                />
              </div>
              <h1 className="font-extralight [&>b]:font-normal tracking-[-2.5px] xl:text-[5rem] 1xl:text-[5.7rem] 1xl:tracking-[-3px] 2xl:text-[6rem] 3xl:text-[7.5rem] leading-[1.2] mt-[20px] [&>br]:hidden brand-page-heading">
                Looking to buy a{" "}
                <strong>
                  used{" "}
                  {displayName.toLowerCase() === "bmw" ? "BMW" : displayName}{" "}
                  {modelName ? ` ${modelName}` : ""} <br /> car{" "}
                  {cityName ? `in ${cityName}` : ""}?
                </strong>{" "}
                take a look.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
