import localFont from "next/font/local";

export const celias = localFont({
  src: [
    { path: "../public/fonts/Celias-Thin.woff2", weight: "100", style: "normal" },
    { path: "../public/fonts/Celias-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "../public/fonts/Celias-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/Celias-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/Celias.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Celias-Italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/Celias-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Celias-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/Celias-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Celias-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../public/fonts/Celias-Black.woff2", weight: "900", style: "normal" },
    { path: "../public/fonts/Celias-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
 variable: "--font-celias",
  display: "swap",
  preload: true,
});
