import Image from "next/image";
import React, { useState } from "react";
import { submitForm } from "../../../app/lib/services/api";

const PopupForm = ({ active, togglePopup, car }) => {
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
      await submitForm({
        formType: "africa_hilux",
        data: { name, email, phone, message, campaign:"Hilux Campaign in Africa" },
      });
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
    <div
      className={`${
        active ? "opacity-100 flex" : ""
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
              Request a Call Back
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
        <div className="w-[90%] bg-black text-white popupScrollbar z-20 mx-auto relative overflow-x-hidden lg:w-[80%] lg:rounded-[1.5rem] lg:max-h-[90vh] xl:w-[70%] 2xl:max-w-[560px] shadow-xl rounded-lg">
          <div
            className=" absolute top-[2rem] right-[2rem] w-[2.6rem] h-[2.6rem] cursor-pointer"
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
              <h5 className="font-normal xl:text-[25px]">
                for submitting the form!
              </h5>
              <p className="mt-2 text-[16px] text-[#dddddd]">
                Our team will review the details and contact you soon.{" "}
                <br className="hidden md:block" /> Your satisfaction is our
                priority.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
