"use client";
import Image from "next/image";
import React, { useState } from "react";
import { submitForm } from "../../../app/lib/services/api";

const ContactSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = (e) => {
    e.preventDefault();
    setPopupOpen(!popupOpen);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, seIsSubmitted] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      return alert("Please fill the required fields!");
    }
    try {
      setSubmitting(true);
      await submitForm({ formType: "collection_contact", data: { name, email, phone, message } });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      seIsSubmitted(true);
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-black py-[6rem] 1xl:py-[8rem]">
      <div className="max-1920">
        <div className="container">
          <div className="lg:flex flex-wrap justify-between items-center">
            <div className="text-white text-center lg:flex-1 lg:text-left">
              <p className="text-[1.4rem] uppercase font-light xl:text-[1.37rem] 1xl:text-[1.6rem] 3xl:text-[2.2rem]">
                We get back
              </p>
              <h2 className="font-light [&>b]:font-normal leading-[1.2] mt-[1.5rem] tracking-[-2px] text-[2.9rem] xl:text-[3.5rem] 1xl:text-[3.7rem] 1xl:mt-[2rem] 2xl:text-[4rem] 3xl:text-[4.5rem] lg:[&_br]:hidden">
                Not Finding{" "}
                <b>
                  What You <br /> Looking For?
                </b>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-[4rem] lg:w-max lg:mt-0">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex-wrap w-max bg-white px-[3rem]  h-[4.5rem] flex justify-center items-center rounded-[5px] text-[1.3rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:h-[5.8rem] mr-[1.5rem] tracking-tight 3xl:text-[1.7rem] border border-white hover:bg-transparent hover:text-white group"
                onClick={togglePopup}
              >
                <img
                  src="/images/phone-icon-black.png"
                  alt="Phone Icon"
                  width="19"
                  height="19"
                  className="w-[1.5rem] h-auto object-contain inline-block mr-[1rem] 1xl:w-[1.6rem] 2xl:w-[1.7rem] 3xl:w-[1.85rem] group-hover:invert"
                />
                Contact Us Now
              </a>

              <a
                href="https://wa.me/919999999983?text=Hello!"
                className="bg-[#1BD741] whatsAppBtn w-[4.5rem] h-[4.5rem] flex justify-center items-center rounded-[5px] 3xl:w-[5.8rem] 3xl:h-[5.8rem]"
              >
                <img
                  src="/images/whatsapp-btn-icon.webp"
                  alt="Whatsapp Icon"
                  className="object-contain w-[1.99rem] h-auto 1xl:w-[2.4rem] 3xl:w-[2.59rem]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {popupOpen && (
        <div
          className={`${
            popupOpen ? "opacity-100 flex" : ""
          } fixed w-full h-full left-0 top-0 min-h-screen items-center justify-center opacity-0 transition-all duration-500 z-100`}
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
                <Image
                  src="/images/bbt-certified-popup-close.webp"
                  alt="Close Popup"
                  className="w-full object-contain"
                  width="29"
                  height="29"
                />
              </div>
              <div className=" overflow-y-auto h-full px-8 py-12 xl:px-12">
                <h3 className="text-[2rem] text-black mb-10 lg:text-[2.2rem] text-center xl:text-[2.5rem] 1xl:text-[3rem]">
                  Grt in Touch with Us
                </h3>
                <div className="">
                  <form action="" className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                      <input
                        type="text"
                        required
                        placeholder="Your Name*"
                        className="w-full outline-none border border-[#666666] rounded-[5px] text-[1.6rem] py-[1rem] pl-[1.5rem] font-light"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-7">
                      <input
                        type="email"
                        required
                        placeholder="Your Email Address*"
                        className="w-full outline-none border border-[#666666] rounded-[5px] text-[1.6rem] py-[1rem] pl-[1.5rem] font-light"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-7">
                      <input
                        type="tel"
                        required
                        placeholder="Your Phone Number*"
                        className="w-full outline-none border border-[#666666] rounded-[5px] text-[1.6rem] py-[1rem] pl-[1.5rem] font-light"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="mb-7">
                      <textarea
                        placeholder="Message"
                        className="w-full outline-none border border-[#666666] rounded-[5px] text-[1.6rem] py-[1rem] pl-[1.5rem] font-light min-h-[10rem] xl:min-h-[14rem]"
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
            <div className="w-[90%] bg-black text-white popupScrollbar z-20 mx-auto relative overflow-x-hidden lg:w-[80%] lg:rounded-[1.5rem] lg:max-h-[90vh] xl:w-[70%] 2xl:max-w-[560px] shadow-xl rounded-xl">
              <div
                className=" absolute top-[2rem] right-[2rem] w-[2.6rem] h-[2.6rem] cursor-pointer xl:w-[26px]"
                onClick={togglePopup}
              >
                <Image
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
                  <h5 className="font-normal xl:text-[25px]">for submitting the form!</h5>
                  <p className="mt-2 text-[16px] text-[#dddddd]">
                    Our team will review the details and contact you soon. <br className="hidden md:block" /> Your
                    satisfaction is our priority.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ContactSection;
