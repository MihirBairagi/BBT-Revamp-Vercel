"use client";
import React, { useState } from "react";
import { submitForm } from "../../../app/lib/services/api";

const styles = {
  inputField:
    "bg-transparent block w-full border border-[#858585] rounded-[0.5rem] md:rounded-[0.7rem] xl:rounded-[1rem]  px-[2rem] xl:px-[2.5rem] 3xl:px-[3rem] py-[1.5rem] xl:py-[1.2rem] 1xl:py-[1.4rem] 3xl:py-[1.8rem] text-[1.2rem] xl:text-[1.6rem] 2xl:text-[1.7rem] 3xl:text-[2.2rem] outline-none",
};

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await submitForm({
        formType: "services_contact",
        data: { name, email, phone, message },
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubmitted(true);
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center md:text-left">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] tracking-[-0.1rem] mb-[2rem] xl:text-[3.7rem] xl:[&>br]:hidden 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize">
              We spread <b>some love</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden md:[&>br]:block">
              Our list of Associates share a common vision for <br /> Automotive
              Excellence and a deep passion for Exotic cars.
            </p>
          </div>
          <div className="flex flex-wrap justify-between mt-[4rem] sm:max-w-[500px] sm:mx-auto md:max-w-none xl:mt-[8rem]">
            <div className="w-full md:w-[50%] xl:w-[48%] 3xl:w-[50%]">
              <div className="hidden md:flex justify-between">
                <div className="w-[2.5rem] pt-[0.5rem] md:w-[3rem] xl:w-[7rem] 1xl:w-[8rem] 3xl:w-[10rem]">
                  <img
                    src="/images/services/love-quote-icon.webp"
                    alt="Quote"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex-[1] pl-[2rem] 1xl:pl-[3rem] 3xl:pl-[4rem]">
                  <p className="font-light text-[#313131] leading-[1.2] text-[2rem] md:text-[2.5rem] xl:text-[3.5rem] xl:tracking-[-1px] 1xl:text-[4rem] 21xl:text-[4.3rem] 3xl:text-[5.5rem] 1xl:tracking-[-2px]">
                    I love the sound of a car’s engine, like a symphony of
                    pistons and gears singing in harmony.
                  </p>
                  <div className="mt-[2rem] md:mt-[3rem] 2xl:mt-[5rem]">
                    <h6 className="font-normal text-[#313131] mb-[0.5rem] text-[1.4rem] xl:text-[2.2rem] 1xl:text-[2.3rem] 2xl:text-[2.6rem] 3xl:text-[3.2rem]">
                      Gaurav Sharma
                    </h6>
                    <p className="text-[#858585] text-[1rem] md:text-[1.2rem] xl:text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.9rem] 3xl:text-[2.2rem]">
                      GM Microsoft
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:mt-[5rem] pt-[2rem] border-t border-[#8E8B8B] flex justify-between">
                <a
                  href="tel:+918999999205"
                  className="w-[47%] flex justify-between items-center"
                >
                  <div className="w-[2.5rem] xl:w-[4.2rem] 3xl:w-[6.4rem]">
                    <img
                      src="/images/services/call-icon.webp"
                      alt="Phone Icon"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="flex-[1] pl-[10px]">
                    <p className="text-[1.3rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem]">
                      Call Us @
                    </p>
                    <p className="text-[1.3rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] font-medium">
                      (+91) 89999 99205
                    </p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/918999999205?text=Hello,%20Big%20Boy%20Toyz%20Team.%20I%20would%20like%20to%20know%20more%20about%20your%20services%20`}
                  className="w-[47%] flex justify-between items-center"
                  target="_blank"
                >
                  <div className="w-[2.5rem] xl:w-[4.2rem] 1xl:w-[4.7rem] 3xl:w-[6.4rem]">
                    <img
                      src="/images/services/whatsapp-icon.webp"
                      alt="Whatsapp Icon"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="flex-[1] pl-[10px]">
                    <p className="text-[1.3rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem]">
                      Whatsapp
                    </p>
                    <p className="text-[1.3rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] font-medium">
                      (+91) 89999 99205
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full mt-[4rem] md:w-[45%] md:mt-0 xl:w-[38%]">
              <div className="bg-white p-[2rem] md:p-[4rem] rounded-[1rem] lg:mt-[-2rem] xl:mt-[-3rem] 1xl:p-[6rem] 3xl:mt-[-4rem] 3xl:px-[8rem] 3xl:py-[7rem] xl:rounded-[2rem]">
                <h2 className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] capitalize">
                  Request a Call Back
                </h2>
                <form
                  className="w-full block mt-[2rem] 3xl:mt-[3rem]"
                  onSubmit={handleSubmit}
                >
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <input
                      type="text"
                      required
                      placeholder="Your Name*"
                      className={styles.inputField}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <input
                      type="tel"
                      required
                      placeholder="Phone No*"
                      className={styles.inputField}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <input
                      type="email"
                      required
                      placeholder="Email Address*"
                      className={styles.inputField}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <textarea
                      type="email"
                      required
                      placeholder="Message*"
                      className={`${styles.inputField} min-h-[10rem] 3xl:min-h-[15rem]`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <button
                      type="submit"
                      className="bg-black text-white text-center w-full border border-black cursor-pointer px-[3rem] text-[1.3rem] xl:text-[1.4rem] 3xl:text-[1.9rem] rounded-[0.5rem] md:rounded-[0.7rem] xl:rounded-[1rem] hover:bg-transparent hover:text-black transition-all duration-500 py-[1.5rem] xl:py-[1.2rem] 1xl:py-[1.4rem] 3xl:py-[2rem]"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : submitted ? "Submitted" : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
