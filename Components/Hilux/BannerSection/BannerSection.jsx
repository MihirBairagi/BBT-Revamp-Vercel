"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { submitForm } from "../../../app/lib/services/api";
import ThankyouPopup from '../../ThankyouPopup/ThankyouPopup';


const BannerSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, seIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleThankyoyPopup = () => {
    seIsSubmitted(!isSubmitted);
  }
  useEffect(() => {
    document.body.classList.add("hilux");
    return () => {
      document.body.classList.remove("hilux");
    };
  }, []);

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
  return (
    <section className=" hilux-lp-banner relative overflow-x-hidden bg-[#191919]">
      {isSubmitted && <ThankyouPopup togglePopup={toggleThankyoyPopup} />}
      <div className="max-w-[1920px] mx-auto">
        <div className="wrapper pt-[7rem] lg:pb-[7rem] xl:pb-0 1xl:pt-[5rem]">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:w-[86%] lg:mx-auto 1xl:w-[82%] ">
            <Link
              href="/"
              target="_blank"
              className="max-w-[19rem] mx-auto inline-block lg:ml-0 2xl:max-w-[21rem] 3xl:max-w-[25rem]"
            >
              <img
                src="/images/landing-pages/hilux/bbt-logo.webp"
                alt="BBT Logo"
                className="object-contain inline-block w-full"
              />
            </Link>
            <div className="hidden lg:flex items-center w-max">
              <a
                href="tel:+919999999187"
                className="flex items-center border border-[#D9D9D966] rounded-[1rem] px-[2rem] py-[0.8rem] text-[1.4rem] text-white group transition-all duration-300 hover:bg-[#D9D9D966] 3xl:text-[1.8rem]"
              >
                <img
                  src="/images/landing-pages/hilux/phone-icon-white.webp"
                  alt="Phone Icon"
                  className="object-contain w-[1.3rem] inline-block mr-[1rem]"
                />
                (+91) 9999999187
              </a>
              <a
                href="mail:africa@bigboytoyz.com"
                className="flex items-center border border-[#D9D9D966] rounded-[1rem] px-[2rem] py-[0.8rem] text-[1.4rem] text-white ml-[1rem] group transition-all duration-300 hover:bg-[#D9D9D966] 3xl:text-[1.8rem]"
              >
                <img
                  src="/images/landing-pages/hilux/mail-icon-white.webp"
                  alt="Phone Icon"
                  className="object-contain w-[1.3rem] inline-block mr-[1rem]"
                />
                africa@bigboytoyz.com
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-[6rem] 1xl:max-w-[1920px] 1xl:mx-auto">
            <div className="lg:w-[55%] xl:w-[50%]">
              <div className="px-[18px] md:max-w-[600px] md:mx-auto lg:max-w-none lg:pr-0 lg:pl-[13%] 1xl:pl-[18%]">
                <h1 className="text-[3.1rem] italic text-white text-center lg:text-left font-normal leading-[1.3] mt-[5rem] lg:mt-0 xl:text-[3.3rem] xl:w-[80%] [&>br]:hidden lg:[&>br]:block 2xl:tracking-normal 2xl:text-[3rem] 3xl:text-[3.8rem]">
                  Book Your Toyota Hilux Today! <br />
                  <span className="text-[#8D8D8D] font-[300]">
                    Now Yours at an Exclusive Price of
                  </span>{" "}
                </h1>
                <div className="flex flex-col-reverse items-center text-white text-[6.6rem] font-medium leading-1.3 mt-[1rem] lg:flex-row xl:text-[8rem] 1xl:tracking-tighter 2xl:text-[9rem] 3xl:text-[11.6rem] 1xl:mt-0">
                  <span className="italic lg:inline-block lg:mr-[2rem]">
                    $27,000{" "}
                  </span>
                  <span className="text-[#8D8D8D] text-[3.2rem] relative font-[300] xl:text-[3.8rem] 2xl:text-[4rem] 3xl:text-[5.1rem]">
                    $ 40,000
                    <span className="absolute left-0 top-[50%] w-[103%] h-[2px] bg-[#ED2126] rotate-[-5deg]"></span>
                  </span>
                </div>
              </div>
              <div className=" mt-[2rem] pr-[18px] lg:pr-0 lg:w-[61vw] xl:w-[59vw] 1xl:w-[60vw] 1xl:mt-0">
                <img
                  src="/images/landing-pages/hilux/banner-thumb.webp"
                  alt="Hilux Car"
                  className="w-100 block"
                />
              </div>
            </div>
            <div className="w-full lg:w-[35%] lg:pr-[7%] xl:w-[37%] 1xl:pr-[9%] 2xl:w-[35%]">
              <div
                className="form-box bg-[#0A0A0A] px-[20px] pt-[4rem] pb-[7rem] rounded-tl-[2rem] rounded-tr-[2rem] lg:rounded-[2rem] lg:py-[4rem] xl:px-[4rem] xl:mt-[4rem] 2xl:px-[5rem]"
                id="bannerForm"
              >
                <div className="text-center xl:text-left">
                  <h2 className="text-[2.8rem] font-[300] text-white [&>b]:text-[400] lg:text-[2.2rem] xl:text-[2rem] 1xl:text-[2.3rem] 2xl:text-[2.1rem] 3xl:text-[2.8rem]">
                    Own the Toyota Hilux for Just{" "}
                    <b>$27,000 – Limited Stock!</b>
                  </h2>
                  <p className="mt-[2rem] text-[1.6rem] text-[#B5B5B5] font-[300] [&>b]:text-[400] 1xl:text-[1.45rem] 3xl:text-[1.6rem] 3xl:mt-[5rem]">
                    Don’t miss this <b>unbeatable offer.</b> Fill in your
                    details now and our team will connect with you before it’s
                    gone.
                  </p>
                </div>
                <form
                  action=""
                  className="block w-full mt-[5rem] max-w-[33rem] mx-auto lg:max-w-none"
                >
                  <div className="mt-[2rem]">
                    <input
                      type="text"
                      placeholder="Name"
                      className={styles.inputStyle}
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-[2rem]">
                    <input
                      type="email"
                      placeholder="Email"
                      className={styles.inputStyle}
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-[2rem]">
                    <input
                      type="tel"
                      placeholder="Mobile No."
                      className={styles.inputStyle}
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mt-[4rem] lg:mt-[2rem]">
                    <button
                      type="submit"
                      className=" border border-white outline-none bg-[#ffffff] w-full h-[5.5rem] text-[1.8rem] text-black pl-[1rem] rounded-[0.6rem] transition-all duration-500 hover:bg-[$f1f1f1] capitalize hover:bg-[#111111] hover:text-white xl:h-[4.6rem] xl:text-[1.6rem] 3xl:text-[1.9rem] 3xl:h-[6.5rem]"
                      onClick={handleSubmit}
                    >
                      {submitting ? 'Submitting...' : 'Get a Call Back'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-max justify-end items-center fixed bottom-[40px] right-[15px] lg:right-[30px] z-10">
        <a
          href="https://wa.me/919999999187"
          target="_blank"
          className="w-[5rem] h-[5rem] flex items-center justify-center rounded-[50%] p-[1.2rem] bg-[#25D366] xl:w-[5.7rem] xl:h-[5.7rem] xl:p-[1.4rem] group"
        >
          <img
            src="/images/whatsapp-btn-icon.webp"
            alt="WhatsApp Icon"
            className="object-contain w-full inline-block transition-all group-hover:scale-105"
          />
        </a>
        <a
          href="tel:+919999999187"
          className="w-[5rem] h-[5rem] flex lg:hidden items-center justify-center rounded-[50%] p-[1.2rem] bg-[#FF1D21] ml-[1.5rem]"
        >
          <img
            src="/images/callbtn-icon.png"
            alt="Call Icon"
            className="object-contain w-full inline-block"
          />
        </a>
      </div>
    </section>
  );
};

const styles = {
  inputStyle:
    "border border-[#5A5A5A] text-[1.6rem] outline-none bg-transparent w-full h-[4.6rem] text-white pl-[1rem] rounded-[0.6rem] 3xl:text-[2.2rem] 3xl:h-[6.5rem]",
};

export default BannerSection;
