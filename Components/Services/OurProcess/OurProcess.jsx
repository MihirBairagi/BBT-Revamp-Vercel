"use client";

import React, { useState } from "react";
import { submitForm } from "../../../app/lib/services/api";
const processData = [
  {
    title: "Simple  </br> <b> Scheduling</b>",
    description:
      "Schedule online or call for a hassle-free appointment, with pick-up and drop-off available (optional)",
    icon: "/images/services/process-icon-1.webp",
  },
  {
    title: "Transparent  </br> <b>Communication</b>",
    description:
      "Stay informed with regular service updates and receive expert recommendations.",
    icon: "/images/services/process-icon-2.webp",
  },
  {
    title: "Expert Care & </br> <b> Quality Assurance</b>",
    description:
      "Our certified technicians use only top-tier parts for exceptional service.",
    icon: "/images/services/process-icon-3.webp",
  },
  {
    title: "Timely  </br> <b>Delivery</b>",
    description:
      "Get your car back quickly, ready to hit the road at your convenience.",
    icon: "/images/services/process-icon-4.webp",
  },
];

const ProcessCard = ({ data, index }) => {
  return (
    <div className="bg-[#212121] px-[2rem] pt-[2.5rem] pb-[5rem] overflow-hidden relative text-white rounded-[1rem] my-[1rem] xl:pb-[7rem] xl:pl-[3rem] xl:rounded-[2rem] 1xl:px-[3rem] 1xl:rounded-[2.5rem] 2xl:pt-[3.5rem] 3xl:pt-[5rem] 3xl:pb-[9rem] 3xl:pl-[4rem]">
      <div>
        <img
          src={data.icon}
          alt=""
          className="w-full object-contain h-auto max-w-[3rem] 1xl:max-w-[3.5rem] 3xl:max-w-[5rem] 1xl:max-h-[4rem]"
        />
      </div>
      <h4
        dangerouslySetInnerHTML={{ __html: data.title }}
        className="text-[1.5rem] mt-[3rem] font-light [&>b]:font-medium xl:text-[1.7rem] xl:mt-[3rem] 1xl:text-[1.8rem] 2xl:text-[1.6rem] 3xl:text-[2.4rem] 1xl:mt-[5rem] xl:leading-[1.3]"
      ></h4>
      <p className="text-[1.3rem] 1xl:tracking-tight 2xl:text-[1.1rem] 3xl:text-[1.4rem] mt-[2rem] font-light">
        {data.description}
      </p>
      <div className="absolute right-[-0.5rem] bottom-[-2.5rem] font-medium text-[#424242] text-[5rem] tracking-tight xl:text-[7rem] 1xl:text-[8rem] 3xl:text-[10rem] xl:bottom-[-3.5rem] 1xl:bottom-[-4rem] 3xl:bottom-[-5rem]">
        0{index + 1}
      </div>
    </div>
  );
};

const OurProcess = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, seIsSubmitted] = useState(false);
  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      return alert("Please fill the required fields!");
    }
    try {
      setSubmitting(true);
      await submitForm({
        formType: "services_our_process",
        data: { name, email, phone, serviceName, message },
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setServiceName("");
      seIsSubmitted(true);
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="bg-black text-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <p className="text-[1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
              How It Works
            </p>
            <h2 className="font-light text-white leading-[1.2] tracking-tighter mt-[1rem] text-center xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
              A Process Designed <b>for perfection</b>
            </h2>
            <p className="text-[1.5rem] text-white xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light">
              Our customization process begins with you <br /> specifying your
              requirements.
            </p>
            <img
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="inline-block object-contain mt-[3rem] w-[6rem] xl:w-[8.5rem] xl:mt-[5rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem] 3xl:mt-[6rem"
            />
          </div>
          <div className="xl:w-[86%] xl:mx-auto 1xl:w-[75%]">
            {processData && processData.length > 0 && (
              <div className="grid grid-cols-2 gap-x-[1.5rem] mt-[3rem] max-w-[450px] mx-auto md:max-w-none md:grid-cols-4 lg:w-[90%] xl:mt-[5rem] xl:gap-x-[2.5rem] xl:w-full 1xl:gap-x-[2.5rem] 1xl:mt-[7rem] 3xl:mt-[9rem] 3xl:gap-x-[3.5rem]">
                {processData.map((process, index) => (
                  <ProcessCard data={process} key={index} index={index} />
                ))}
              </div>
            )}
          </div>
          <div className="mt-[4rem] xl:mt-[6rem]">
            <button
              onClick={togglePopup}
              className="w-max mx-auto h-[4.5rem] flex justify-center items-center text-[1.2rem] bg-[#2E2E2E] text-white px-[3rem] py-[1rem] rounded-[3rem] xl:px-[4.5rem] xl:h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:h-[5.5rem] 3xl:h-[7.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[8rem] hover:bg-[#222222] transition-all duration-500 ease-in-out"
            >
              Book Service
            </button>
          </div>
        </div>
      </div>

      {openPopup && (
        <>
          {/* Book Service Popup */}
          <div
            className={`${
              openPopup ? "opacity-100 flex" : ""
            } fixed w-full h-full left-0 top-0 min-h-screen items-center justify-center opacity-0 transition-all duration-500 z-[100]`}
          >
            <div
              className={` bg-[#05030399] w-full h-full fixed left-0 top-0 z-10 block opacity-100 transition-all duration-500`}
              onClick={togglePopup}
            ></div>
            {!isSubmitted ? (
              <div className="w-[90%] bg-white popupScrollbar h-auto z-20 mx-auto relative overflow-x-hidden lg:w-[80%] lg:rounded-[1.5rem] lg:max-h-[90vh] xl:w-[70%] 2xl:max-w-[560px]">
                <div
                  className=" absolute top-[2rem] right-[2rem] w-[2.6rem] h-[2.6rem] cursor-pointer"
                  onClick={togglePopup}
                >
                  <img
                    src="/images/bbt-certified-popup-close.webp"
                    alt="Close Popup"
                    className="w-full object-contain"
                    width="29"
                    height="29"
                  />
                </div>
                <div className=" overflow-y-auto h-full px-8 py-12 xl:px-12">
                  <h3 className="text-[2rem] text-black mb-10 lg:text-[2.2rem] text-center xl:text-[2.5rem] 1xl:text-[3rem]">
                    Book Service
                  </h3>
                  <div className="">
                    <form action="" className="w-full" onSubmit={handleSubmit}>
                      <div className="mb-5">
                        <input
                          type="text"
                          required
                          placeholder="Your Name*"
                          className="w-full outline-none border border-[#666666] rounded-[5px] text-[1.6rem] py-[1rem] pl-[1.5rem] font-light text-black"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-7">
                        <input
                          type="email"
                          required
                          placeholder="Your Email Address*"
                          className="w-full outline-none border border-[#666666] rounded-[5px] text-[1.6rem] py-[1rem] pl-[1.5rem] font-light text-black"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-7">
                        <input
                          type="tel"
                          required
                          placeholder="Your Phone Number*"
                          className="w-full outline-none border border-[#666666] rounded-[5px] text-[1.6rem] py-[1rem] pl-[1.5rem] font-light text-black"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="mb-7">
                        <input
                          type="text"
                          required
                          placeholder="Service Interested In*"
                          className="w-full outline-none border border-[#666666] rounded-[5px] text-[1.6rem] py-[1rem] pl-[1.5rem] font-light text-black"
                          value={serviceName}
                          onChange={(e) => setServiceName(e.target.value)}
                        />
                      </div>
                      <div className="mb-7">
                        <textarea
                          placeholder="Message"
                          className="w-full outline-none border border-[#666666] rounded-[5px] text-[1.6rem] py-[1rem] pl-[1.5rem] font-light min-h-[10rem] xl:min-h-[14rem] text-black"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="bg-[black] text-white text-center py-5 px-10 border border-[black] outline-none rounded-[5px] w-full transition-all duration-500 ease-in-out hover:bg-transparent hover:text-black"
                          disabled={submitting}
                        >
                          {submitting ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-[90%] bg-black text-white popupScrollbar z-20 mx-auto relative overflow-x-hidden lg:w-[80%] lg:rounded-[1.5rem] lg:max-h-[90vh] xl:w-[70%] 2xl:max-w-[560px] shadow-xl rounded-lg">
                <div
                  className=" absolute top-[2rem] right-[2rem] w-[2.6rem] h-[2.6rem] cursor-pointer"
                  onClick={togglePopup}
                >
                  <img
                    src="/images/bbt-certified-popup-close.webp"
                    alt="Close Popup"
                    className="w-full object-contain invert"
                    width="29"
                    height="29"
                  />
                </div>
                <div className=" overflow-y-auto px-8 py-12 xl:px-12 flex items-center justify-center h-[400px] 1xl:h-[500px] text-center">
                  <div>
                    <img
                      src="/images/submission-thank-img.png"
                      alt="Thumb Icon"
                      className="w-[192px] object-contain inline-block mb-[20px]"
                    />
                    <h4 className="font-normal xl:text-[32px]">Thank You </h4>
                    <h5 className="font-normal xl:text-[25px]">
                      for submitting the form!
                    </h5>
                    <p className="mt-2 text-[16px] text-[#dddddd]">
                      Our team will review the details and contact you soon.{" "}
                      <br className="hidden md:block" /> Your satisfaction is
                      our priority.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default OurProcess;
