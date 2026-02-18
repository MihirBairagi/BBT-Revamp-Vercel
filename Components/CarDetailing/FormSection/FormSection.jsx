"use client";

import React, { useState } from "react";
import { submitForm } from "../../../app/lib/services/api";

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [model, setModel] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return alert("Name is required!");
    if (!email) return alert("Email is required!");
    if (!phone) return alert("Phone No. is required!");
    if (!vehicle) return alert("Vehicle name is required!");
    if (!model) return alert("Model No. is required!");
    try {
      setSubmitting(true);
      await submitForm({ formType: "car_detailing", data: { name, email, phone, vehicle, model } });
      setName("");
      setEmail("");
      setPhone("");
      setVehicle("");
      setModel("");
      alert("Thanks! We will contact you soon.");
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="text-center">
            <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            Get expert <b>guidance</b>
            </h2>
            <p className="text-[1.5rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 3xl:text-[2.8rem] mt-[2.5rem] font-light [&>br]:hidden sm:[&>br]:block">
            Call Us@ <a href="tel:+918999999627">(+91) 89999 99627</a>
            </p>
          </div>
          <div className="xl:w-[90%] xl:mx-auto">
            <form action="" className="w-full block mt-[3rem] 3xl:mt-[5rem]" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[2rem]">
                <div className="mt-[2rem]">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Name*"
                    required
                    className={styles.inputStyle}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-[2rem]">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email*"
                    required
                    className={styles.inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[2rem]">
                <div className="mt-[2rem]">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Phone No*"
                    required
                    className={styles.inputStyle}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mt-[2rem]">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Vehicle*"
                    required
                    className={styles.inputStyle}
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-[2rem]">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Model And Year*"
                  required
                  className={styles.inputStyle}
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>
              <div className="mt-[2rem]">
                <button
                  type="submit"
                  className="w-full block border border-[#333333] rounded-[5px] py-[1.2rem] bg-black text-white text-[1.4rem] outline-none xl:py-[1.5rem] 1xl:py-[1.7rem] xl:text-[1.4rem] 1xl:rounded-[7px] 2xl:text-[1.5rem] 2xl:py-[1.8rem] 3xl:text-[1.89rem] hover:bg-[#333] transition-all duration-500 3xl:h-[8.5rem]"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;

const styles = {
  inputStyle:
    "w-full block border border-[#666666] rounded-[5px] py-[1.2rem] pl-[1.5rem] text-[1.4rem] outline-none xl:text-[1.3rem] xl:py-[1.5rem] 1xl:py-[1.7rem] 1xl:rounded-[7px] 2xl:text-[1.45rem] 2xl:pl-[2.5rem] 3xl:text-[1.64rem] 3xl:h-[7.5rem] 3xl:pl-[3rem]",
};
