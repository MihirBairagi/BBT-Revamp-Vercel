import React, { useState } from "react";

const FloatingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !phone) {
      alert("Please fill the form!");
      return;
    }
    console.log({
      name,
      email,
      phone,
    });
    alert("Form Submitted SUccessfully!");
    handleClose();
  };
  return (
    <div className="bg-black py-[4rem] px-[2rem] rounded-[1rem] w-[95%] max-w-[600px] xl:max-w-[1140px] mx-auto lg:w-[70%] xl:w-[60%] xl:pl-[3rem] xl:rounded-[2rem] 1xl:px-[4rem] 1xl:rounded-[2.5rem] 3xl:px-[6rem] 3xl:py-[5rem] shadow-slate-400 z-100 transition-all duration-500 ease-in-out">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        <h3 className="text-white text-center xl:text-left xl:text-[2.3rem] 1xl:text-[2.4rem] 2xl:text-[2.6rem] 3xl:text-[3rem]">
          Get In Touch With Us
        </h3>
        <p className="text-[#9C9C9C] text-center xl:text-right text-[1.1rem] mt-[1rem] italic xl:mt-0 xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem]">
          Call Us For Insurance Query{" "}
          <a href="tel:+918999999964">At: +91 89999 99964</a>
        </p>
      </div>
      <div className="pt-[2rem] xl:flex xl:flex-row xl:justify-between xl:items-center">
        <div className="mt-[1.5rem] xl:w-[24%]">
          <input
            type="text"
            placeholder="Name"
            className={styles.inputStyle}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-[1.5rem] xl:w-[24%]">
          <input
            type="email"
            placeholder="Email"
            className={styles.inputStyle}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-[1.5rem] xl:w-[24%]">
          <input
            type="tel"
            placeholder="Mobile No."
            className={styles.inputStyle}
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mt-[1.5rem] xl:w-[24%]">
          <button
            className=" border border-white outline-none bg-[#ffffff] w-full h-[45px] 2xl:h-[49px] 3xl:h-[55px] text-[1.2rem] text-black pl-[1rem] rounded-[0.6rem] transition-all duration-500 hover:bg-[$f1f1f1] capitalize 3xl:text-[1.6rem] hover:bg-[#111111] hover:text-white"
            onClick={handleSubmit}
          >
            Request a call back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingForm;

const styles = {
  inputStyle:
    "border border-[#343434] outline-none bg-[#222222] w-full h-[45px] 2xl:h-[49px] 3xl:h-[55px] text-[1.2rem] text-white pl-[1rem] rounded-[0.6rem] 3xl:text-[1.6rem]",
};
