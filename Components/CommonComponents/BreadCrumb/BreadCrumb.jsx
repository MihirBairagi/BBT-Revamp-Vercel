import Image from "next/image";
import Link from "next/link";
import React from "react";

// Accept optional brand/model/city to extend the breadcrumb dynamically
const BreadCrumb = ({ pageTitle, brandName, modelName, cityName, modelHref, cityHref, brandHref }) => {
  const slugify = (value) =>
    (value || "")
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const brandLabel = pageTitle || brandName;
  const brandSlug = slugify(brandLabel);
  const modelSlug = slugify(modelName);
  const citySlug = slugify(cityName);

  const items = [];
  if (brandLabel) {
    items.push({ label: brandLabel, href: brandHref || `/buy-used-${brandSlug}-cars` });
  }
  if (modelName) {
    items.push({ label: modelName, href: modelHref || `/buy-used-${brandSlug}-cars-${modelSlug}` });
  }
  if (cityName) {
    const href = cityHref || (modelName
      ? `/buy-used-${brandSlug}-cars-${modelSlug}-in-${citySlug}`
      : `/buy-used-${brandSlug}-cars-in-${citySlug}`);
    items.push({ label: cityName, href });
  }

  return (
    <p className="flex flex-wrap items-center breadcrumbs ">
      <Link href="/" className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]">
        Home
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={`${item.label}-${index}`}>
          <Image src="/images/breadcrumb-arrow.webp" className="object-contain w-2 xl:w-[0.6rem] inline-block mx-2 h-auto 1xl:mx-3 3xl:mx-4 3xl:w-[0.8rem]" width="6" height="11" alt="Arrow Icon" />
          {index < items.length - 1 ? (
            <Link href={item.href} className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]">
              {item.label}
            </Link>
          ) : (
            <span className="text-lg md:text-xl xl:text-[1.2rem] 1xl:text-[1.4rem] 3xl:text-[1.8rem]">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </p>
  );
};

export default BreadCrumb;
