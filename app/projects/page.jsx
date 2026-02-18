import React from "react";

import PageHeader from "../../Components/ProjectListing/PageHeader/PageHeader";
import AllProjects from "../../Components/ProjectListing/AllProjects/AllProjects";
import SecondaryBanner from "../../Components/CommonComponents/SecondaryBanner/SecondaryBanner";

const secondaryBanner = {
  mobileBanner: "/images/project-listing/pl-inner-banner.webp",
  desktopBanner: "/images/project-listing/pl-inner-banner.webp",
  subtitle: "",
  title: `Get your Car Service at one </br> of the premium <b>super car </br>  center</b> in delhi NCR.`,
  description: `We're not just about making your car look pretty, we're all about </br>  making it perform like a champ too. From turbocharging your engine </br>  to upgrading your suspension for that buttery smooth ride!`,
  ctaLink: "/services",
  ctaText: "Know More",
};

const Projects = () => {
  return (
    <>
      <PageHeader />
      <AllProjects />
      <SecondaryBanner data={secondaryBanner} />
    </>
  );
};

export default Projects;
