import React from "react";

const usps = [
  { title: "2009", subtitle: "Established" },
  { title: "10000+", subtitle: "Our Clientele" },
  { title: "30 Luxury", subtitle: "Car Brands" },
  { title: "5000+", subtitle: "Supercars Sold" },
];

const showrooms = [
  {
    title: "Gurgaon <br/> Headquarters",
    address: "Plot No. 134, Sector 37, Pace City 1, Gurgaon, Haryana - 122001",
    link: "https://maps.app.goo.gl/zNfwAGKLbfkhQrpTA",
    icon: "/images/contact-us/showroom-icon-1.webp",
  },
  {
    title: "Mumbai<br/> Studio",
    address:
      "7, Hubtown Sunmist, Opposite Hubtown Solaris, Telli Galli, Andheri East N S Phadke Marg Mumbai - 400053",
    link: "https://maps.app.goo.gl/hH1jvrxkL89TPR6u9",
    icon: "/images/contact-us/showroom-icon-2.webp",
  },
  {
    title: "Hyderabad <br/>Studio",
    address:
      "Road no 2, Banjara Hills, Shangrila Plaza, Opp.KBR Park Hyderabad, Telangana-500034",
    link: "https://maps.app.goo.gl/F8v6BMzK2USVz7cS7",
    icon: "/images/contact-us/showroom-icon-3.webp",
  },
  {
    title: "Ahmedabad <br/>Studio",
    address:
      "Cama Motors, Rustom Cama Marg, Old City, Lal Darwaja, Ahmedabad, Gujarat 380001",
    link: "https://maps.app.goo.gl/CYhXfh1RNMzWRmMp9",
    icon: "/images/contact-us/showroom-icon-4.webp",
  },
  {
    title: "Bengaluru <br/>Studio",
    address:
      "No.140, Redsidency Road, Richmond Town Ward - 117, Bengaluru - 560025",
    link: "https://maps.app.goo.gl/PLdXNLZFW4SgDqaG9",
    icon: "/images/contact-us/showroom-icon-5.webp",
  },

];

const ShowroomSection = () => {
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[10rem] 1xl:py-[12rem] 3xl:py-[15rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center lg:text-left">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] xl:text-[3.7rem] [&>br]:hidden lg:[&>br]:block 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize lg:leading-[1.2]">
              Visit Us In Our Showroom <b>in Your City</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[1rem] font-light [&>br]:hidden md:[&>br]:block">
              Our list of Associates share a common vision for Automotive <br />{" "}
              Excellence and a deep passion for Exotic cars.
            </p>
          </div>
          <div className="flex flex-wrap justify-between mt-[5rem] 1xl:mt-[8rem]">
            <div className="w-full mb-[5rem] lg:w-[22.5%] lg:mb-0">
              <div className="bg-white px-[3rem] py-[2rem] rounded-[1rem] max-w-[390px] mx-auto  sm:max-w-none lg:rounded-[2rem] lg:py-[1rem] xl:px-[4rem] 2xl:px-[5rem]">
              <ul className="grid grid-cols-2 sm:grid-cols-4 sm:gap-x-[1rem] lg:block">
                {usps.map((usp, index) => (
                  <li key={index} className="my-[1.5rem] lg:my-[2rem] xl:my-[3.5rem] 1xl:my-[4rem]">
                    <h6 className="font-medium text-[#212121] text-[2rem] xl:text-[2.3rem] xl:leading-[1.1] 1xl:text-[2.6rem] 2xl:text-[2.8rem] 3xl:text-[3.4rem]">
                      {usp.title}
                    </h6>
                    <p className="font-extralight text-[#212121] text-[1.4rem] xl:text-[1.65rem] 1xl:text-[1.8rem] 2xl:text-[2rem] 3xl:text-[2.4rem]">
                      {usp.subtitle}
                    </p>
                  </li>
                ))}
              </ul>
              </div>
            </div>

            <div className="w-full lg:w-[71%] 1xl:w-[71.5%]">
              <ul className="border-t border-t-[#B2B2B2]">
                {showrooms.map((showroom, index) => (
                  <li className="flex flex-wrap justify-between py-[3rem] border-b border-b-[#B2B2B2] xl:py-[4rem] 1xl:py-[4.5rem] 3xl:py-[6rem]" key={index}>
                    <div className="flex flex-wrap w-full items-center sm:w-[35%] lg:w-[37%] xl:w-[45%]">
                      <div className="w-[5rem] lg:w-[6.5rem] xl:w-[8rem] 1xl:w-[9rem] 2xl:w-[10rem] 3xl:w-[12rem]">
                        <img
                          src={showroom.icon}
                          alt={showroom.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <h5 className="flex-[1] pl-[2rem] text-[2rem] leading-[1.2] xl:text-[2.7rem] xl:font-normal xl:tracking-tight 1xl:text-[3.1rem] 1xl:pl-[2.5rem] 2xl:text-[3.3rem] 2xl:pl-[3rem] 3xl:text-[4rem] font-medium" dangerouslySetInnerHTML={{__html:showroom.title}}></h5>
                    </div>
                    <div className="w-full mt-[2rem] font-light text-[#313131] sm:w-[60%] lg:w-[53%] lg:flex lg:justify-between lg:items-start lg:mt-[1rem] xl:font-normal">
                        <p className="text-[1.3rem] lg:text-[1.1rem] xl:text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] xl:pr-[5rem] 3xl:text-[2rem] lg:flex-[1] lg:pr-[3rem] [&>br]:hidden xl:[&>br]:block">{showroom.address}</p>
                        <p className="mt-[1rem] text-[1.3rem] lg:text-[1.1rem] xl:text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[2rem] lg:w-max lg:mt-0"><a href={showroom.link} className="underline hover:text-black transition-all">Locate on map</a></p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection;
