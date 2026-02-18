import React from "react";

const showrooms = [
  {
    icon: "/images/contact-us/showroom-icon-1.webp",
    title: "Gurgaon Headquarters",
    description:
      "Plot No. 134, Sector 37, Pace City 1, Gurgaon, Haryana - 122001",
    thumbnail: "/images/contact-us/showroom-img.webp",
    mapLink:
      "https://www.google.com/maps/place/Big+Boy+Toyz/@28.4367017,77.0094202,15z/data=!4m5!3m4!1s0x0:0xdb108da17afb495b!8m2!3d28.4367017!4d77.0094202",
  },
  {
    icon: "/images/contact-us/showroom-icon-1.webp",
    title: "Mumbai Studio",
    description:
      "7, Hubtown Sunmist, Opposite Hubtown Solaris, Telli Galli, Andheri East N S Phadke, Marg Mumbai - 400053",
    thumbnail: "/images/contact-us/showroom-img.webp",
    mapLink:
      "https://www.google.com/maps/place/Big+Boy+Toyz+Mumbai/@19.1149529,72.8495955,18z/data=!4m12!1m6!3m5!1s0x3be7c9b44bdc6ec3:0x950293b22cb93249!2sBig+Boy+Toyz+Mumbai!8m2!3d19.1148541!4d72.8506684!3m4!1s0x3be7c9b44bdc6ec3:0x950293b22cb93249!8m2!3d19.1148541!4d72.8506684",
  },
  {
    icon: "/images/contact-us/showroom-icon-2.webp",
    title: "Hyderabad Studio",
    description:
      "Road no 2, Banjara Hills, Shangrila Plaza, Opp.KBR Park Hyderabad, Telangana-500034",
    thumbnail: "/images/contact-us/showroom-img.webp",
    mapLink:
      "https://www.google.com/maps/place/Big+Boy+Toyz/@17.4255842,78.4179554,17z/data=!4m14!1m7!3m6!1s0x3bcb9147355de11d:0xa3c0fc90c9049588!2sBig+Boy+Toyz!8m2!3d17.4255993!4d78.4201518!16s%2Fg%2F11h9bhwq0r!3m5!1s0x3bcb9147355de11d:0xa3c0fc90c9049588!8m2!3d17.4255993!4d78.4201518!16s%2Fg%2F11h9bhwq0r?entry=ttu",
  },
  {
    icon: "/images/contact-us/showroom-icon-3.webp",
    title: "Ahmedabad Studio",
    description:
      "Cama Motors, Rustom Cama Marg, Old City, Lal Darwaja, Ahmedabad, Gujarat 380001",
    thumbnail: "/images/contact-us/showroom-img.webp",
    mapLink:
      "https://www.google.com/maps/place/Big+Boy+Toyz-+Buy%2FSell+(Aston+Martin,+Audi,+BMW,+Jaguar,+Lamborghini,+Land+Rover,+Mercedes,+Porsche,+Rolls+Royce,+Volvo)/@23.0277149,72.576895,17z/data=!3m1!4b1!4m6!3m5!1s0x395e853a98301b67:0x383f2423cdd39e23!8m2!3d23.0277149!4d72.5794699!16s%2Fg%2F11s860vjvc?entry=ttu",
  },
  {
    icon: "/images/contact-us/showroom-icon-4.webp",
    title: "Bengaluru Studio",
    description:
      "No.140, Redsidency Road, Richmond Town Ward - 117, Bengaluru - 560025",
    thumbnail: "/images/contact-us/showroom-img.webp",
    mapLink:
      "https://www.google.com/maps/place/Bbt+street/@12.9675663,77.5773627,15z/data=!4m6!3m5!1s0x3bae177f21d29e9b:0xa3773b0a747b096f!8m2!3d12.9675663!4d77.5773627!16s%2Fg%2F11grbwb7gv?entry=ttu",
  },
];

const ShowroomSection = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[10rem] 1xl:py-[12rem] 3xl:py-[15rem]">
      <div className="max-1920">
        <div className="container">
          <div className="md:hidden text-center mb-[4rem]">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.1rem] xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize">
              Our <b>Showroom</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[1rem] font-light [&>br]:hidden md:[&>br]:block">
              Big Boy Toyz offers used cars & services across a wide range of
              and available car models in the market.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-[1rem] gap-y-[1.5rem] sm:gap-x-[1.5rem] sm:gap-y-[2rem] lg:grid-cols-3 lg:gap-x-[2.5rem] lg:gap-y-[2.5rem] 1xl:gap-x-[3rem] 1xl:gap-y-[4rem] 3xl:gap-x-[4rem] 3xl:gap-y-[5rem]">
            <div className="hidden md:flex text-left pr-[3rem] items-center lg:items-start lg:pt-[3rem] xl:pt-[4rem] 1xl:pt-[5.5rem] 3xl:pt-[7rem]">
              <div>
                <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize">
                  Our <b>Showroom</b>
                </h2>
                <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[1rem] font-light [&>br]:hidden md:[&>br]:block xl:mt-[2rem]">
                  Big Boy Toyz offers used cars & services across a wide range
                  of and available car models in the market.
                </p>
                <img
                src="/images/down-circle-arrow-white.webp"
                width="123"
                height="123"
                alt="Arrow Icon"
                className="hidden lg:inline-block object-contain  invert lg:mt-[3rem] lg:w-[8rem] xl:mt-[5rem] 1xl:w-[9rem] 1xl:mt-[6rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem]"
              />
              </div>
            </div>
            {showrooms.map((showroom, index) => (
              <div
                className="bg-white rounded-[1rem]  text-center relative overflow-hidden group lg:rounded-[1.5rem] lg:text-left 1xl:rounded-[2rem] 3xl:rounded-[3rem]"
                key={index}
              >
                <div className=" opacity-0 absolute left-0 top-0 w-full h-full z-10 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <img
                    src={showroom.thumbnail}
                    alt="Thumbnail"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="relative z-20 w-full h-full px-[1rem] py-[2.5rem] group-hover:bg-gradient-to-t group-hover:from-[rgba(0,0,0,0.9)] group-hover:to-[rgba(0,0,0,0.01)] sm:px-[2rem] lg:py-[3.5rem] lg:px-[3rem] xl:px-[4rem] xl:py-[4.5rem] transition-all duration-500 ease-in-out 1xl:py-[5.5rem] 1xl:px-[5rem] 3xl:py-[7rem] 3xl:px-[6rem]">
                  <div className="w-[7rem] h-[7rem] mx-auto lg:w-[9rem] lg:h-[9rem] lg:ml-0 xl:w-[10rem] xl:h-[10rem] 3xl:w-[12rem] 3xl:h-[12rem] group-hover:opacity-0">
                    <img
                      src={showroom.icon}
                      alt="Icon"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <div className="mt-[2rem] sm:mt-[4rem] xl:mt-[6rem] text-black group-hover:text-white transition-all duration-300 ease-in-out 3xl:mt-[9rem]">
                    <h5 className="text-[1.3rem] sm:text-[1.6rem] xl:text-[2rem] 3xl:text-[3rem]">
                      {showroom.title}
                    </h5>
                    <p className="text-[1rem] sm:text-[1.3rem] xl:text-[1.6rem] 3xl:text-[2rem] mt-[0.5rem] mb-[1rem] min-h-[6rem] sm:min-h-[8rem] xl:mt-[1.5rem] xl:min-h-[10rem] xl:mb-[2rem] 3xl:mt-[2rem] 3xl:mb-[3rem] 3xl:min-h-[12rem]">
                      {showroom.description}
                    </p>
                    <a
                      href={showroom.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border-b border-b-[#080808] text-[1rem] sm:text-[1.3rem] xl:text-[1.6rem] 3xl:text-[2rem] group-hover:border-b-white"
                    >
                      Locate on map
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection;
