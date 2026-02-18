import { useRef } from "react";
import Link from "next/link";

const HeaderMenu = ({ openMenu = false, setOpenMenu }) => {
  const collectionVideoRef = useRef(null);
  const modificationsVideoRef = useRef(null);
  const carDetailingVideoRef = useRef(null);
  const servicesVideoRef = useRef(null);

  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <div
      className={`menu-box fixed w-full h-full ${
        openMenu ? "left-0" : "left-[-120%]"
      } top-0 bg-black min-w-[100vw] min-h-[100vh] text-white z-100 xl:left-[unset] ${
        openMenu ? "xl:right-0" : "xl:right-[-120%]"
      }`}
    >
      <div className="menu-inner relative px-[30px] py-[30px] pt-[80px] xl:px-[50px]">
        <span
          className="close-menu inline-block w-[22px] absolute top-[25px] right-[25px] cursor-pointer xl:right-[50px] xl:top-[50px] xl:w-[25px]"
          onClick={() => setOpenMenu(false)}
        >
          <img
            src="/realty/images/close-menu-icon.png"
            alt="Close Menu"
            className="w-full object-contain"
          />
        </span>

        <div className="menu-wrapper h-full overflow-y-auto max-h-[100vh] no-scrollbar pb-[160px]">
          <div className="primary-menu-box xl:pt-[30px]">
            <ul className="primary-menu">
              <li className="my-[5px]">
                <Link
                  href="/collection"
                  className="flex items-center text-[2.2rem] font-[300] relative py-[10px]"
                  onClick={() => setOpenMenu(false)}
                  onMouseEnter={() => handleMouseEnter(collectionVideoRef)}
                  onMouseLeave={() => handleMouseLeave(collectionVideoRef)}
                >
                  <span>Explore</span>
                  {/* <video
                    ref={collectionVideoRef}
                    src="/realty/videos/menu-collection.mp4"
                    className="object-contain w-[80px] mx-[10px] hidden lg:inline-block lg:rounded-[7px]"
                    loop
                    playsInline
                    preload="auto"
                  ></video>{" "} */}
                  <span className="relative">
                    {" "}
                    Collection
                    <span className="text-[#7E797D] text-[1rem] absolute top-[-5px] right-[-22px]">
                      {" "}
                      {"{01}"}{" "}
                    </span>
                  </span>
                </Link>
              </li>
              <li className="my-[5px]">
                <Link
                  href="/modifications"
                  className="flex items-center text-[2.2rem] font-[300] relative py-[10px]"
                  onClick={() => setOpenMenu(false)}
                  onMouseEnter={() => handleMouseEnter(modificationsVideoRef)}
                  onMouseLeave={() => handleMouseLeave(modificationsVideoRef)}
                >
                  <span>Modification </span>
                  {/* <video
                    ref={modificationsVideoRef}
                    src="/realty/videos/menu-collection.mp4"
                    className="object-contain w-[80px] mx-[10px] hidden lg:inline-block lg:rounded-[7px]"
                    loop
                    playsInline
                    preload="auto"
                  ></video>{" "} */}
                  <span className="relative">
                    {" "}
                    & Upgrade
                    <span className="text-[#7E797D] text-[1rem] absolute top-[-5px] right-[-22px]">
                      {" "}
                      {"{02}"}{" "}
                    </span>
                  </span>
                </Link>
              </li>
              <li className="my-[5px]">
                <Link
                  href="/car-detailing"
                  className="flex items-center text-[2.2rem] font-[300] relative py-[10px]"
                  onClick={() => setOpenMenu(false)}
                  onMouseEnter={() => handleMouseEnter(carDetailingVideoRef)}
                  onMouseLeave={() => handleMouseLeave(carDetailingVideoRef)}
                >
                  <span>Car Detailing </span>
                  {/* <video
                    ref={carDetailingVideoRef}
                    src="/realty/videos/menu-collection.mp4"
                    className="object-contain w-[80px] mx-[10px] hidden lg:inline-block lg:rounded-[7px]"
                    loop
                    playsInline
                    preload="auto"
                  ></video>{" "} */}
                  <span className="relative">
                    {" "}
                    Services
                    <span className="text-[#7E797D] text-[1rem] absolute top-[-5px] right-[-22px]">
                      {" "}
                      {"{03}"}{" "}
                    </span>
                  </span>
                </Link>
              </li>
              <li className="my-[5px]">
                <Link
                  href="/services"
                  className="flex items-center text-[2.2rem] font-[300] relative py-[10px]"
                  onClick={() => setOpenMenu(false)}
                  onMouseEnter={() => handleMouseEnter(servicesVideoRef)}
                  onMouseLeave={() => handleMouseLeave(servicesVideoRef)}
                >
                  <span>Car </span>
                  {/* <video
                    ref={servicesVideoRef}
                    src="/realty/videos/menu-collection.mp4"
                    className="object-contain w-[80px] mx-[10px] hidden lg:inline-block lg:rounded-[7px]"
                    loop
                    playsInline
                    preload="auto"
                  ></video>{" "} */}
                  <span className="relative">
                    {" "}
                    Servicing
                    <span className="text-[#7E797D] text-[1rem] absolute top-[-5px] right-[-22px]">
                      {" "}
                      {"{04}"}{" "}
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bottom-menu-box pt-[3rem] border-t border-[#333333] lg:pb-[30px] xl:flex xl:justify-between xl:border-[#1A1A1A] xl:mt-0 xl:pt-[100px] xl:items-end">
            <div className="xl:flex xl:w-max">
              <ul className="bottom-menu-1 xl:w-max mr-[80px]">
                <li>
                  <Link
                    href=""
                    className="block py-[5px] text-[#D7D6D4] text-[1.5rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    Our Showrooms
                  </Link>
                </li>

                <li>
                  <Link
                    href="/realty/about-us"
                    className="block py-[5px] text-[#D7D6D4] text-[1.5rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href=""
                    className="block py-[5px] text-[#D7D6D4] text-[1.5rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    Wallpapers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/realty/contact-us"
                    className="block py-[5px] text-[#D7D6D4] text-[1.5rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              <ul className="bottom-menu-2 xl:w-max">
                <li>
                  <Link
                    href=""
                    className="block py-[5px] text-[#D7D6D4] text-[1.5rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    The Team
                  </Link>
                </li>

                <li>
                  <Link
                    href=""
                    className="block py-[5px] text-[#D7D6D4] text-[1.5rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    Career
                  </Link>
                </li>

                <li>
                  <Link
                    href=""
                    className="block py-[5px] text-[#D7D6D4] text-[1.5rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    BBT Squad
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-[4rem] pt-[3rem] border-t border-[#333333] xl:w-max xl:border-0">
              <ul className="social-links xl:flex xl:items-center xl:justify-end">
                <li className="xl:mr-[15px]">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-[5px] text-[#7E797D] text-[1.5rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    Instagram
                  </a>
                </li>
                <li className="xl:mr-[15px]">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-[5px] text-[#7E797D] text-[1.5rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    Linkedin
                  </a>
                </li>
                <li className="xl:mr-[15px]">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-[5px] text-[#7E797D] text-[1.5rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    Twitter
                  </a>
                </li>
                <li className="xl:mr-[15px]">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-[5px] text-[#7E797D] text-[1.5rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
