import React from 'react'
import CounterSection from '../../Components/Associates/CounterSection/CounterSection';
import RelationSection from '../../Components/Associates/RelationSection/RelationSection';
import AboutSection from '../../Components/Associates/AboutSection/AboutSection';
import EsteemsSection from '../../Components/Associates/EsteemsSection/EsteemsSection';
import SneakPeak from '../../Components/Associates/SneakPeak/SneakPeak';

import PageBanner from "../../Components/CommonComponents/PageBanner/PageBanner";

const bannerData = {
  title:`Let’s  <b> Collaborate</b>`,
  description: `At BBT, we believe that the road to success is paved with strong collaborations. We’re always open to working with individuals, creators and brands who share our passion for excellence and innovation. <br> <br> If you have an idea, event, campaign or partnership in mind, we’d love to hear from you. Let’s create something impactful together.`,
  breadcrumb: "Our Associates",
  bannerImage:"/images/associates/associates-banner-desktop.webp",
  bannerImageMobile:"/images/associates/associates-banner-desktop.webp"
}

const Associates = () => {
  return (
    <>
     
        <PageBanner data={bannerData} />
        {/* <CounterSection /> */}
        {/* <EsteemsSection /> */}
        <RelationSection />
        <AboutSection />
        <SneakPeak />
   
    </>
  )
}

export default Associates