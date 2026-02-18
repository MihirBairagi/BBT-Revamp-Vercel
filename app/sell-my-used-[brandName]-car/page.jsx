import React from "react";
import IntroSection from "../../Components/SellCarBrandPage/IntroSection/IntroSection";
import CarModels from "../../Components/SellCarBrandPage/CarModels/CarModels";
import InfoSection from "../../Components/SellCarBrandPage/InfoSection/InfoSection";
import CarDealer from "../../Components/SellCarBrandPage/CarDealer/CarDealer";
import OtherBrands from "../../Components/SellCarBrandPage/OtherBrands/OtherBrands";
import ContactSection from "../../Components/SellCarBrandPage/ContactSection/ContactSection";
import BottomInfoSection from "../../Components/SellCarBrandPage/BottomInfoSection/BottomInfoSection";
import HowToSell from "../../Components/SellYourCar/HowToSell/HowToSell";
import Prerequisites from "../../Components/SellYourCar/Prerequisites/Prerequisites";
import { brandsAPI, sellCarContentsAPI } from "../lib/services/api";
import { notFound } from "next/navigation";

export async function generateMetadata({ searchParams }) {
  const brandName = searchParams?.brandName;
  if (!brandName) return {};
  try {
    const brandResult = await brandsAPI.getBrand(brandName);
    const brand = brandResult?.brand || null;
    const sellContent = brand ? (await sellCarContentsAPI.getByBrandId(brand.id_ || brand.id)).sellCarContent : null;
    return {
      title: sellContent?.metatitle || `Sell your used ${brand?.bname || brandName} at Valued Price Online in India`,
      description: sellContent?.metadesc || `Sell your used ${brand?.bname || brandName} online at Big Boy Toyz. Get instant valuation and hassle-free documentation.`,
      keywords: sellContent?.metakeyword || `Sell My ${brand?.bname || brandName}, Value My ${brand?.bname || brandName}, Sell My ${brand?.bname || brandName} Online`,
      openGraph: {
        title: sellContent?.metatitle,
        description: sellContent?.metadesc,
        images: sellContent?.bannerimg ? [{ url: sellContent.bannerimg }] : []
      }
    };
  } catch {
    return {};
  }
}

const SellMyUsedBrandPage = async ({ searchParams }) => {
  const brandName = searchParams?.brandName;
  if (!brandName) return notFound();

  // Resolve brand details from slug and fetch sell car content
  const brandResult = await brandsAPI.getBrand(brandName);
  if (!brandResult || !brandResult.success || !brandResult.brand) return notFound();
  const brand = brandResult.brand;

  const sellContentResult = await sellCarContentsAPI.getByBrandId(brand.id_ || brand.id);
  const sellContent = sellContentResult?.sellCarContent || null;

  // Fetch brand models for rendering
  const models = brandResult?.models || [];

  const titleBrand = brand.bname || brandName.replace(/-/g, ' ');
  const bannerImageUrl = sellContent?.bannerimg || `https://cdn.bigboytoyz.com/new-version/sellcarcontents/${brand.posturl || brandName}.png`;
  const sellcarlogoUrl = sellContent?.sellcarlogo || `https://cdn.bigboytoyz.com/new-version/sellcarcontents/sell-your-cars-brand-logos0000s0000${(brand.posturl || brandName).toLowerCase()}.png`;

  return (
    <>
      <IntroSection brandName={titleBrand} bannerImageUrl={bannerImageUrl} />
      <CarModels brandName={titleBrand} models={models} />
      <InfoSection brandName={titleBrand} sellcarlogoUrl={sellcarlogoUrl} logocontent={sellContent?.logocontent || ''} />
      <CarDealer />
      <OtherBrands />
      <Prerequisites bg={`#ffffff`} cardBg={'#f6f6f6'} />
      <BottomInfoSection brandName={titleBrand} shortdescription={sellContent?.shortdescription || ''} description={sellContent?.description || ''} />
      <HowToSell />
      <ContactSection />
    </>
  );
};

export default SellMyUsedBrandPage;


