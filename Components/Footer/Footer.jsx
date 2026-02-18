"use client";
import { useEffect, useState } from "react";
import FooterMenuDesktop from "./FooterMenuDesktop";
import FooterAppLinks from "./FooterAppLinks";
import FooterCopyRight from "./FooterCopyRight";
import FooterContact from "./FooterContact";
import BackToTop from '../CommonComponents/BackToTop/BackToTop'
import FooterMenuMobile from "./FooterMenuMobile";
import { footerService } from "../../app/lib/services/footer";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathName = usePathname();
  const [footerData, setFooterData] = useState({
    brands: [],
    styles: [],
    loading: true,
  });

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await footerService.fetchFooterData();
        setFooterData({
          brands: data.brands || [],
          styles: data.styles || [],
          loading: false,
        });
      } catch (error) {
        console.error('Error loading footer data:', error);
        setFooterData({
          brands: [],
          styles: [],
          loading: false,
        });
      }
    };

    fetchFooterData();
  }, []);

      const hideFooter = pathName.startsWith("/africa");

  return (
    <>
      
      <footer className={`bg-black pb-20 sm:pb-0 footer ${hideFooter && 'hidden'}`} id="footer">
        <div className="max-1920">
          <div className="container">
            <div className="lg:hidden">
              <FooterMenuMobile 
                brands={footerData.brands}
                styles={footerData.styles}
                loading={footerData.loading}
              />
            </div>
            <div className="hidden lg:block">
              <FooterMenuDesktop 
                brands={footerData.brands}
                styles={footerData.styles}
                loading={footerData.loading}
              />
            </div>

            <FooterContact />
            
            <FooterAppLinks />
            <FooterCopyRight />
          </div>
        </div>
        <BackToTop />
      </footer>
    </>
  );
};

export default Footer;
