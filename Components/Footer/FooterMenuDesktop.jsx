import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterMenuDesktop = ({ brands = [], styles = [], loading = false }) => {
  // Helper function to chunk brands into columns
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Split brands into 4 columns for the footer layout
  const brandColumns = chunkArray(brands, Math.ceil(brands.length / 4));

  return (
    <div className="footerMenuWrapper pt-40">
      <div className="lg:flex lg:justify-between">
        <div className="footerMenuCol">
          <div className="footerMenuHead">
            <h6 className="text-white">BBT World</h6>
          </div>
          <div className="footerMenu">
            <ul>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/team">The Team</Link>
              </li>
              <li>
                <Link href="/why-us">Why Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/career">Career</Link>
              </li>
              <li>
                <Link href="/associates">Associates</Link>
              </li>
              <li>
                <Link href="/bbt-squad">BBT Squad</Link>
              </li>
              <li>
                <Link href="/wallpapers">BBT Wallpapers</Link>
              </li>
              <li>
                <Link href="/151-check-points">151 Check Points</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerMenuCol">
          <div className="footerMenuHead">
            <h6 className="text-white">General</h6>
          </div>
          <div className="footerMenu">
            <ul>
              <li>
                <Link href="/faq">Faq</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/guides">Guides</Link>
              </li>
              <li>
                <Link href="/insurances/car-insurance">Insurance</Link>
              </li>
              <li>
                <Link href="/modifications">Modifications</Link>
              </li>
              <li>
                <Link href="/car-detailing">Car Detailing</Link>
              </li>
              {/* <li>
                <Link href="/car-news">Car News</Link>
              </li> */}
              <li>
                <Link href="/showrooms">Showrooms</Link>
              </li>
              <li>
                <Link href="/services">Car Servicing</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerMenuCol footerMenuColLarge">
          <div className="footerMenuHead">
            <h6 className="text-white">Brands</h6>
          </div>
          <div className="footerMenu">
            {loading ? (
              <div className="text-gray-400">Loading brands...</div>
            ) : (
              <div className="flex flex-wrap justify-between">
                {brandColumns.map((column, columnIndex) => (
                  <ul key={columnIndex}>
                    {column.map((brand) => (
                      <li key={brand.id}>
                        <Link href={`/buy-used-${brand.slug}-cars`}>
                          {brand.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
                {/* Fill empty columns if needed */}
                {Array.from({
                  length: Math.max(0, 4 - brandColumns.length),
                }).map((_, index) => (
                  <ul key={`empty-${index}`}>
                    <li style={{ opacity: 0 }}>Placeholder</li>
                  </ul>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="footerMenuCol">
          <div className="footerMenuHead">
            <h6 className="text-white">Styles</h6>
          </div>
          <div className="footerMenu">
            {loading ? (
              <div className="text-gray-400">Loading styles...</div>
            ) : (
              <ul>
                {styles.map((style) => (
                  <li key={style.id}>
                    <Link href={`/category/${style.slug}`}>{style.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenuDesktop;
