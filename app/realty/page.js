import IntroSection from "../../Components/Realty/Homepage/IntroSection/IntroSection";
import BannerSection from "../../Components/Realty/Homepage/BannerSection/BannerSection";
import FloatingFormSection from "../../Components/Realty/Homepage/FloatingFormSection/FloatingFormSection";
import ProjectsSection from "../../Components/Realty/Homepage/ProjectsSection/ProjectsSection";
import WhyChooseSection from "../../Components/Realty/Homepage/WhyChooseSection/WhyChooseSection";
import FormSection from "../../Components/Realty/Homepage/FormSection/FormSection";

export default function RealtyHome() {
  return (
    <>
      <BannerSection />
      <FloatingFormSection />
      <IntroSection />
      <ProjectsSection />
      <WhyChooseSection />
      <FormSection />
    </>
  );
}

