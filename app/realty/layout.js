import RealtyHeader from "../../Components/Realty/Header/Header.jsx";
import FooterBottomMenuBar from "../../Components/Realty/Footer/FooterBottomMenuBar.jsx"

export const metadata = {
  title: "BBT Realty - Premium Real Estate Projects",
  description: "Discover premium real estate projects by Big Boy Toyz Realty. Luxury residential and commercial properties in prime locations.",
};

export default function RealtyLayout({ children }) {
  return (
    <>
      <RealtyHeader />
      {children}
      <FooterBottomMenuBar/>
    </>
  );
}

