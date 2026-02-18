import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterMenuDesktop = () => {
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
                <Link href="">The Team</Link>
              </li>

              <li>
                <Link href="">Career</Link>
              </li>
              <li>
                <Link href="">Associates</Link>
              </li>
              <li>
                <Link href="">BBT Squad</Link>
              </li>

              <li>
                <Link href="">BBT Wallpapers</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
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
                <Link href="">Blogs</Link>
              </li>
              <li>
                <Link href="">Guides</Link>
              </li>
              <li>
                <Link href="">
                   Insurance
                </Link>
              </li>
              <li>
                <Link href="">Modifications</Link>
              </li>
              <li>
                <Link href="">Car Detailing</Link>
              </li>
              <li>
                <Link href="">Car News</Link>
              </li>
              <li>
                <Link href="">Showrooms</Link>
              </li>

              <li>
                <Link href="">Workshop</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerMenuCol footerMenuColLarge">
          <div className="footerMenuHead">
            <h6 className="text-white">Brands</h6>
          </div>
          <div className="footerMenu">
            <div className="flex flex-wrap justify-between">
              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerMenuCol">
          <div className="footerMenuHead">
            <h6 className="text-white">Styles</h6>
          </div>
          <div className="footerMenu">
            <ul>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default FooterMenuDesktop;
