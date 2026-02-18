"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#F3F3F3] py-[5rem] lg:py-[8rem] xl:py-[10rem]">
      <div className="max-1920">
        <div className="container">
          <div
            className="xl:flex xl:items-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="xl:w-[30%] 1xl:w-[32%] 3xl:w-[30%]">
              <h4 className="xl:text-[2.2rem] 1xl:text-[2.4rem] 2xl:text-[2.5rem] 3xl:text-[3rem] 3xl:tracking-tight">
                Looking For Something Similar?
              </h4>
              <p className="font-light mt-[1rem] xl:text-[1.3rem] 1xl:text-[1.4rem] 2xl:text-[1.5rem] 3xl:text-[1.65rem]">
                Drop us your detail and our team will get back to you with the
                info.
              </p>
            </div>
            <div className="mt-[4rem] xl:mt-0 xl:flex-[1] xl:pl-[3rem] 1xl:pl-[3rem] 3xl:pl-[5rem]">
              <form action="" className="block">
                <div className="md:flex md:justify-between">
                  <div className="mb-[1.5rem] md:w-[25%]">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={styles.inputStyles}
                      required
                    />
                  </div>
                  <div className="mb-[1.5rem] md:w-[25%]">
                    <input
                      type="email"
                      placeholder="Email Address*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.inputStyles}
                      required
                    />
                  </div>
                  <div className="mb-[1.5rem] md:w-[25%]">
                    <input
                      type="tel"
                      placeholder="Phone*"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className={styles.inputStyles}
                      required
                    />
                  </div>
                  <div className="md:w-[20%]">
                    <button type="submit" className={styles.buttonStyle}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;

const styles = {
  inputStyles:
    "w-full bg-transparent border border-[#AAAAAA] outline-none rounded-[0.7rem] text-[1.5rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.8rem] px-[1rem] py-[1rem] h-[5rem] 1xl:h-[5.5rem] 2xl:h-[6rem] 3xl:h-[7rem] 1xl:rounded-[1rem] 1xl:px-[2rem]",
  buttonStyle:
    "w-full bg-black text-white border border-black outline-none rounded-[0.7rem] text-[1.5rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.8rem] px-[1rem] py-[1rem] h-[5rem] 1xl:h-[5.5rem] 2xl:h-[6rem] 3xl:h-[7rem] 1xl:rounded-[1rem] hover:bg-[#333333]",
};
