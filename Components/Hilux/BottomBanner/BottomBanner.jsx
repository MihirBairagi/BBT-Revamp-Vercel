"use client";
import React, { useEffect, useState } from "react";
import { submitForm } from "../../../app/lib/services/api";
import AOS from "aos";
import ThankyouPopup from "../../ThankyouPopup/ThankyouPopup";

const BottomBanner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, seIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleThankyoyPopup = () => {
    seIsSubmitted(!isSubmitted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      return alert("Please fill the required fields!");
    }
    try {
      setSubmitting(true);
      await submitForm({
        formType: "africa_hilux",
        data: { name, email, phone, campaign: "Hilux Campaign in Africa" },
      });
      setName("");
      setEmail("");
      setPhone("");
      seIsSubmitted(true);
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-black">
      {isSubmitted && <ThankyouPopup togglePopup={toggleThankyoyPopup} />}
      <div className="max-[3000px] mx-auto relative">
        <div className="md:hidden">
          <img
            src="/images/landing-pages/hilux/body-banner-bg-mob.webp"
            alt="Background Image"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="hidden md:block">
          <img
            src="/images/landing-pages/hilux/body-banner-bg-dekstop.webp"
            alt="Background Image"
            className="w-full object-cover h-auto min-h-[95vh] 3xl:h-[1100px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container w-full h-full">
            <div className="flex h-full w-full flex-col justify-between py-[6rem] md:max-w-[100%] lg:pt-[8rem] xl:pt-[12rem] 2xl:pt-[14rem] 3xl:pt-[18rem] 3xl:pb-[12rem]">
              <div
                className="md:max-w-[50%] xl:max-w-[43%] 3xl:max-w-[40%]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <h2 className="w-[90%] text-[2.8rem] font-[300] text-white [&>b]:text-[400] xl:text-[4rem] leading-[1.2] 2xl:text-[5rem] 2xl:leading-[1.1] 3xl:text-[5.8rem] 3xl:leading-[1.3]">
                  <b>Ready to Own</b> the Toyota Hilux Today?
                </h2>
                <div className="mt-[2rem] text-[1.6rem] font-[300] leading-[1.6] text-[#F3F3F3] 1xl:text-[1.45rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:w-[85%]">
                  Fill the form and our team will contact you to complete your
                  booking. With limited stock at just <b>$27K</b>, this is your
                  chance to own Africa’s most trusted pickup. Don’t
                  wait—strength, style, and savings are only a click away.
                </div>
                <img
                  src="/images/down-circle-arrow-white.webp"
                  width="123"
                  height="123"
                  alt="Arrow Icon"
                  className="inline-block object-contain mt-[4rem] w-[8.5rem] 1xl:w-[9rem] 2xl:w-[9.5rem] 3xl:w-[12.36rem]"
                />
              </div>
              {/* Form Box */}
              <div
                className="form-box bg-[#0A0A0A] px-[3rem] py-[4rem] rounded-[2.5rem] md:mt-[4rem] 3xl:py-[6rem] 3xl:px-[4.5rem]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <h3 className="text-white text-center lg:text-left font-normal text-[2.8rem] xl:text-left xl:text-[2.2rem] 3xl:text-[2.8rem]">
                  Request a Call Back
                </h3>
                <div className="pt-[2rem] lg:flex lg:flex-row lg:justify-between lg:items-center max-w-[33rem] mx-auto md:max-w-[100%] ">
                  <div className="w-full md:flex md:flex-wrap md:justify-between lg:pr-[1.5rem] 3xl:pr-[2.5rem]">
                    <div className="mt-[1.5rem] md:w-[31%] lg:mt-0 xl:w-[32%]">
                      <input
                        type="text"
                        placeholder="Name"
                        className={styles.inputStyle}
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mt-[1.5rem] md:w-[31%] lg:mt-0 xl:w-[32%]">
                      <input
                        type="email"
                        placeholder="Email"
                        className={styles.inputStyle}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mt-[1.5rem] md:w-[31%] lg:mt-0 xl:w-[32%]">
                      <input
                        type="tel"
                        placeholder="Mobile No."
                        className={styles.inputStyle}
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-[1.5rem] md:flex md:justify-center md:mt-[3rem] lg:mt-0">
                    <button
                      type="submit"
                      className=" border border-white outline-none bg-[#ffffff] w-full h-[5.5rem] text-[1.8rem] text-black pl-[1rem] rounded-[0.6rem] transition-all duration-500 hover:bg-[$f1f1f1] capitalize hover:bg-[#111111] hover:text-white md:h-[4.6rem] md:px-[3rem] md:w-max xl:px-[5rem] xl:text-[1.6rem] 2xl:h-[5.5rem] 3xl:text-[1.9rem] 3xl:h-[6.5rem] 3xl:px-[7rem]"
                      onClick={handleSubmit}
                    >
                      {submitting ? "Submitting..." : "Get a Call Back"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const styles = {
  inputStyle:
    "border border-[#5A5A5A] text-[1.6rem] outline-none bg-transparent w-full h-[4.6rem]  text-white pl-[1rem] rounded-[0.6rem] 2xl:h-[5.5rem] 3xl:text-[2.2rem] 3xl:h-[6.5rem] 2xl:pl-[2rem]",
};
export default BottomBanner;
