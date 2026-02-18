import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import { CompareProvider } from "./lib/contexts/CompareContext.js";
import CompareFloatingBubble from "../Components/CompareFloatingBubble/CompareFloatingBubble.jsx";
import Toast from "../Components/UI/Toast/Toast.jsx";
import CompareUIManager from "../Components/CompareUIManager/CompareUIManager.jsx";
import MaterialThemeProvider from "./lib/providers/ThemeProvider.jsx";
import Script from "next/script";
import { celias } from "../fonts/celias";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Used Luxury Car Dealers India, Bigboytoyz",
  description: "Best used luxury car dealers India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={celias.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script
          dangerouslySetInnerHTML={{
            __html:
              "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':" +
              "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0]," +
              "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=" +
              "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);" +
              "})(window,document,'script','dataLayer','GTM-KZ3M4HV');",
          }}
        />
      </head>
      <body >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZ3M4HV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <MaterialThemeProvider>
          <CompareProvider>
            <main>
              <Header />
              {children}
              <Footer />
              <CompareFloatingBubble />
              <CompareUIManager />
            </main>
          </CompareProvider>
        </MaterialThemeProvider>
      </body>
    </html>
  );
}
