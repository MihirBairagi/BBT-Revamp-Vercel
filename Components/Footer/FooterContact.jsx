import React from "react";

const phoneNumbers = [
  {
    title: " Buy Car",
    numberText: "(+91) 9999999983",
    numberLink: "tel:+919999999983",
  },
  {
    title: "Sell Your Car",
    numberText: "(+91) 9999999915",
    numberLink: "tel:+919999999915",
  },
  {
    title: "Detailing and Modifications",
    numberText: "(+91) 8999999627",
    numberLink: "tel:+918999999627",
  },
  {
    title: " Servicing",
    numberText: "(+91) 8999999205",
    numberLink: "tel:+918999999205",
  },
  {
    title: " cars.co.in",
    numberText: "(+91) 9999999908",
    numberLink: "tel:+919999999908",
  },
];

const showrooms = [
  {
    title: "Delhi-NCR",
    address:
      "Plot No. 134, Sector-37, Pace City 1, Gurgaon, Haryana - 122001. Sales@bigboytoyz.com",
    link: "https://maps.app.goo.gl/zNfwAGKLbfkhQrpTA",
  },
  {
    title: "Mumbai",
    address:
      "7, Hubtown Sunmist, Opposite Hubtown Solaris, Telli Galli, Andheri East, N S Phadke Marg, Mumbai - 400053",
    link: "https://maps.app.goo.gl/hH1jvrxkL89TPR6u9",
  },
  {
    title: "Hyderabad",
    address:
      "Road-2, Banjara Hills, Shangrila Plaza, Opp.KBR Park,  Hyderabad, Telangana - 500034",
    link: "https://maps.app.goo.gl/F8v6BMzK2USVz7cS7",
  },
  {
    title: "Ahmedabad",
    address:
      "Cama Motors, Rustom Cama Marg, Old City, Lal Darwaja, Ahmedabad, Gujarat - 380001",
    link: "https://maps.app.goo.gl/CYhXfh1RNMzWRmMp9",
  },
  {
    title: "Bengaluru",
    address:
      "140, Residency Road, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka - 560025",
    link: "https://maps.app.goo.gl/PLdXNLZFW4SgDqaG9",
  },
];

const FooterContact = () => {
  return (
    <div>
      <div className="footerPhoneNumbers flex flex-wrap py-16 mt-16 3xl:py-28 lg:border-t lg:border-t-[#ebebf01a] lg:border-b lg:border-b-[#ebebf01a]">
        {phoneNumbers.map((phone, index) => (
          <div className="footerPhoneCol mb-[3rem] lg:mb-0" key={index}>
            <h6 className="text-white text-[1.4rem] lg:text-lg xl:text-[1.2rem] 1xl:text-[1.3rem] 3xl:text-[1.6rem] 3xl:tracking-wider">
              {phone.title}
            </h6>
            <a
              href={phone.numberLink}
              className="text-[1.2rem] mt-5 xl:text-xl 3xl:text-1.6xl 3xl:mt-10 flex items-center"
            >
              <img
                src="/images/footer-phone-icon.webp"
                width="14"
                height="22"
                alt="Phone Number"
                className="w-3 mr-3 xl:w-4"
              />
              {phone.numberText}
            </a>
          </div>
        ))}
      </div>
      <div className="footerShowrooms flex flex-wrap py-16 relative 3xl:py-28">
        <h5 className="text-white text-[1.7rem] lg:text-lg absolute left-0 w-max bg-black 2xl:text-1xl 2xl:tracking-normal 3xl:text-3xl">
          Our Showrooms
        </h5>

        {showrooms.map((showroom, index) => (
          <div className="footerShowroomCol mb-[3rem] lg:mb-0" key={index}>
            <a
              href={showroom.link}
              className=" group h-full flex flex-col justify-between"
            >
              <div>
                <h6 className="text-white text-[1.4rem] lg:text-lg xl:text-[1.2rem] 1xl:text-[1.3rem] 3xl:text-[1.6rem] 3xl:tracking-wider">
                  {showroom.title}
                </h6>
                <p className="text-[1.2rem] mt-4 lg:leading-8 2xl:text-lg 2xl:leading-9 3xl:text-2xl 3xl:leading-10 3xl:mt-6">
                  {showroom.address}
                </p>
              </div>
              <img
                src="/images/footer-arrow-white.webp"
                alt="Arrow icon"
                width="16"
                height="16"
                className="object-contain w-5 mt-10 h-auto 2xl:w-6 3xl:w-7 3xl:mt-12 group-hover:rotate-45 transition-all duration-500 ease-in-ou"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContact;
