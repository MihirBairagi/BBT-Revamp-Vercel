"use client";
import React, { useState } from "react";
import { submitForm } from "../../../app/lib/services/api";
import ThankyouPopup from "../../ThankyouPopup/ThankyouPopup";

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await submitForm({
        formType: "contact_us",
        data: { name, email, phone, location, message },
      });
      setName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setMessage("");
      setSuccess(true);
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const toggleThankyoyPopup = () => {
    setSuccess(!success);
  };

  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[10rem] 1xl:py-[12rem] 3xl:py-[15rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[2.9rem] font-light [&>b]:font-normal leading-[1.1] text-center tracking-[-0.1rem] xl:text-[3.7rem] [&>br]:hidden lg:[&>br]:block 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] capitalize">
              Send us an <b>email</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem] mt-[1rem] font-light [&>br]:hidden md:[&>br]:block">
              Drop us a line by using the below form
            </p>
          </div>
          <form
            action=""
            className="block mt-[3rem] sm:mt-[5rem]"
            onSubmit={handleSubmit}
          >
            <div className="flex items-end mb-[2rem] sm:mb-[3rem] xl:mb-[4rem]">
              <label htmlFor="nameInput" className={styles.label}>
                My name is
              </label>
              <input
                type="text"
                name="name"
                id="nameInput"
                placeholder="Your Name*"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className="flex items-end mb-[2rem] sm:mb-[3rem] xl:mb-[4rem]">
              <label htmlFor="phoneInput" className={styles.label}>
                Contact me back at
              </label>
              <input
                type="tel"
                name="phone"
                id="phoneInput"
                placeholder="Mobile Number*"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="flex items-end mb-[2rem] sm:mb-[3rem] xl:mb-[4rem] w-full md:w-[48%]">
                <label htmlFor="emailInput" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="emailInput"
                  placeholder="Email Address*"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className="flex items-end mb-[2rem] sm:mb-[3rem] xl:mb-[4rem] w-full md:w-[48%]">
                <label htmlFor="locationInput" className={styles.label}>
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="locationInput"
                  placeholder="Your Location*"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={styles.input}
                />
              </div>
            </div>
            <div className="flex items-end w-full">
              <label htmlFor="messageInput" className={styles.label}>
                Message
              </label>
              <input
                type="text"
                name="message"
                id="messageInput"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className="flex justify-center mt-[3rem] md:justify-end xl:mt-[4rem] 3xl:mt-[5rem]">
              <button
                type="submit"
                className="bg-black rounded-full h-[4.5rem] px-[4rem] py-[1rem] text-white outline-none text-[1.4rem] xl:text-[1.6rem] 1xl:text-[1.7rem] 3xl:text-[1.8rem] 3xl:h-[7rem] lg:h-[5rem] lg:text-[1.5rem] lg:px-[5rem] hover:bg-[#222222] 1xl:px-[6rem] 1xl:h-[5.5rem] 2xl:h-[6rem] 3xl:px-[7rem]"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {success && <ThankyouPopup togglePopup={toggleThankyoyPopup} />}
    </section>
  );
};

export default FormSection;

const styles = {
  label:
    "text-[1.6rem] w-max inline-block pr-[1rem] pb-[0.4rem] xl:text-[2.8rem] 1xl:text-[3rem] 2xl:text-[3.3rem] 3xl:text-[4rem] 1xl:pr-[2rem] 3xl:pr-[3rem]",
  input:
    "border-b border-b-[#626262] bg-transparent outline-none pr-[1rem] text-[1.4rem] flex-[1] pb-[0.5rem] placeholder:text-[1.4rem] xl:text-[1.7rem] 2xl:text-[1.8rem] 3xl:text-[2.3rem] xl:placeholder:text-[1.7rem] 2xl:placeholder:text-[2rem] 3xl:placeholder:text-[2.3rem] xl:pb-[1rem] 1xl:pb-[1.3rem] xl:border-b-2",
};
