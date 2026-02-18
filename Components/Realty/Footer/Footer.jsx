"use client";
import FooterMenuDesktop from "./FooterMenuDesktop";
import FooterAppLinks from "./FooterAppLinks";
import FooterCopyRight from "./FooterCopyRight";
import FooterContact from "./FooterContact";
import BackToTop from '../CommonComponents/BackToTop/BackToTop'
import FooterMenuMobile from "./FooterMenuMobile";
import FooterBottomMenuBar from "../Footer/FooterBottomMenuBar"

const Footer = () => {
  return (
    <>
      
      <footer className="bg-black" id="footer">
        <div className="max-1920">
          <div className="container">
            <div className="lg:hidden">
              <FooterMenuMobile />
              <FooterBottomMenuBar/>
            </div>
            <div className="hidden lg:block">
              <FooterMenuDesktop />
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
