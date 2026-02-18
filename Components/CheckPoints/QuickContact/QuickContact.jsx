"use client";
import React, { useState } from "react";

const QuickContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setcarModel] = useState("");
  return (
    <div className="bg-black text-white py-[6rem] px-[3rem] md:py-[8rem] xl:py-[3.5rem] xl:px-[2.5rem] xl:rounded-[2rem] 1xl:px-[3rem] 3xl:px-[4rem] 3xl:py-[4.5rem] 3xl:rounded-[3rem]">
      <div className="max-w-[400px] mx-auto xl:max-w-none">
        <h5 className="text-[3rem] font-light leading-[1.2] text-center xl:text-left mb-[3rem] xl:mb-[1.5rem] xl:text-[1.45rem] 1xl:text-[1.51rem] 2xl:text-[1.6rem] 3xl:text-[2.2rem] 3xl:mb-[2rem]">
          Quick Contact{" "}
        </h5>

        <div className="mb-[1.5rem] xl:mb-[0.8rem] 3xl:mb-[1rem]">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.inputStyle}
          />
        </div>
        <div className="mb-[1.5rem] xl:mb-[0.8rem] 3xl:mb-[1rem]">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputStyle}
          />
        </div>
        <div className="mb-[1.5rem] xl:mb-[0.8rem] 3xl:mb-[1rem]">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.inputStyle}
          />
        </div>
        <div className="mb-[1.5rem] xl:mb-[0.8rem] 3xl:mb-[1rem]">
          <input
            type="text"
            placeholder="Car Brand"
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            className={styles.inputStyle}
          />
        </div>
        <div className="mb-[1.5rem] xl:mb-[0.8rem] 3xl:mb-[1rem]">
          <input
            type="text"
            placeholder="Car Model"
            value={carModel}
            onChange={(e) => setcarModel(e.target.value)}
            className={styles.inputStyle}
          />
        </div>
        <div >
          <button className="bg-[#404040] border border-[#404040] text-white text-[1.3rem] h-[4.5rem] rounded-[0.6rem] outline-none w-full p-[1rem] transition-all duration-500 hover:bg-[#363636] xl:h-[4rem] xl:text-[1.2rem] 1xl:h-[4.5rem] 1xl:px-[1.7rem] 1xl:rounded-[1rem] 3xl:h-[6rem] 3xl:text-[1.6rem]">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default QuickContact;

const styles = {
  inputStyle:
    "bg-[#212121] border border-[#413F3F] text-white text-[1.3rem] h-[4.5rem] rounded-[0.6rem] outline-none w-full p-[1rem] xl:h-[4rem] xl:text-[1.2rem] 1xl:h-[4.5rem] 1xl:px-[1.7rem] 1xl:rounded-[1rem] 3xl:h-[6rem] 3xl:text-[1.6rem]",
};
