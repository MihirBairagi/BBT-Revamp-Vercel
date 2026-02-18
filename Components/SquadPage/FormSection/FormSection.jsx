"use client";
import React, { useState, useEffect } from "react";
import { submitForm } from "../../../app/lib/services/api";
import AOS from "aos";
import "aos/dist/aos.css";

const styles = {
  inputStyles:
    "w-full border border-[#B3B3B3] rounded-[0.5rem] py-[1.7rem] px-[2rem] font-light text-[1.3rem] mb-[1rem] placeholder:text-black sm:mb-[1.5rem] xl:py-[1.4rem] 2xl:text-[1.4rem] 3xl:text-[1.7rem] 3xl:py-[1.8rem] 3xl:mb-[1.9rem] 3xl:px-[3rem]",
};

const FormSection = () => {
  const [name, setName] = useState("");
  const [stateName, setStateName] = useState("");
  const [phone, setPhone] = useState("");
  const [currentProfile, setCurrentProfile] = useState("");
  const [dropdownItem, setDropdownItem] = useState("Automobile Enthusiast");
  const [instaHandle, setInstaHandle] = useState("");
  const [fileItem, setFileItem] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await submitForm({
        formType: "squad",
        data: { name, stateName, phone, currentProfile, dropdownItem, instaHandle },
        files: { fileItem },
      });
      setName("");
      setStateName("");
      setPhone("");
      setCurrentProfile("");
      setDropdownItem("");
      setInstaHandle("");
      setFileItem("");
      alert("Thanks! We will contact you soon.");
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
    <section className="bg-white py-[6rem] md:py-[10rem] 1xl:py-[14rem] 3xl:py-[16rem]">
      <div className="max-1920">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[39%]">
              <h2 className="font-light [&>b]:font-normal leading-[1.2] tracking-[-0.2rem] xl:text-[3.7rem] 1xl:text-[4.2rem] 2xl:text-[4.4rem] 3xl:text-[5.8rem] ">
                Join The{" "}
                <b>
                  {" "}
                  BBT <br /> Squad Today!{" "}
                </b>
              </h2>
              <p className="font-light text-[1.2rem] mt-[1.2rem] pr-[1rem] md:max-w-[577px] xl:text-[1.1rem] xl:leading-[1.6] xl:mt-[2rem] 1xl:text-[1.2rem] 1xl:pr-[2rem] 1xl:mt-[2.5rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] 3xl:max-w-[600px] 3xl:mt-[3.5rem]">
                BBT Squad is a new platform inviting car enthusiasts to pursue
                their passion for automobiles without compromising on their
                existing work areas.
              </p>
              <ul className="pt-[0.5rem] 1xl:pt-[1rem] 2xl:pt-[1.5rem] 3xl:pt-[2.5rem]">
                <li className="flex flex-wrap items-center mt-[2rem]">
                  <div className="flex flex-wrap justify-center items-center p-[0.5rem] w-[3.7rem] h-[3.7rem] border border-[#C9C9C9] rounded-[0.5rem] 2xl:w-[4rem] 2xl:h-[4rem] 3xl:w-[5rem] 3xl:h-[5rem]">
                    <img
                      src="/images/bbt-squad/squad-phone-icon.webp"
                      alt="Phone Icon"
                      className="object-contain h-auto w-[1.73rem] 2xl:w-[2rem] 3xl:w-[2.3rem]"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div className="flex-1 pl-[1rem] 3xl:pl-[2rem]">
                    <p className="font-light text-[1.1rem] text-black  [&>a]:font-normal [&>a]:block [&>a]:text-[1.4rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] 2xl:[&>a]:text-[1.6rem] 3xl:[&>a]:text-[1.9rem]">
                      We are always happy to help{" "}
                      <a href="tel:+919999999915">(+91) 9999 9999 15</a>{" "}
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap items-center mt-[2rem] 1xl:mt-[2.5rem] 3xl:xl:mt-[3rem]">
                  <div className="flex flex-wrap justify-center items-center p-[0.5rem] w-[3.7rem] h-[3.7rem] border border-[#C9C9C9] rounded-[0.5rem] 2xl:w-[4rem] 2xl:h-[4rem] 3xl:w-[5rem] 3xl:h-[5rem]">
                    <img
                      src="/images/bbt-squad/squad-mail-icon.webp"
                      alt="Phone Icon"
                      className="object-contain h-auto w-[1.73rem] 2xl:w-[2rem] 3xl:w-[2.3rem]"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div className="flex-1 pl-[1rem] 3xl:pl-[2rem]">
                    <p className="font-light text-[1.1rem] text-black  [&>a]:font-normal [&>a]:block [&>a]:text-[1.4rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem] 2xl:[&>a]:text-[1.6rem] 3xl:[&>a]:text-[1.9rem]">
                      The best way to get answer faster.{" "}
                      <a href="mailto:squad@bigboytoyz.com">
                        squad@bigboytoyz.com
                      </a>{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pt-[3rem] lg:w-[53%] lg:pt-0">
              <form className="w-full block" onSubmit={handleFormSubmit}>
                <div className="sm:flex sm:justify-between">
                  <div className="input-box w-full sm:w-[49%]">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className={styles.inputStyles}
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-box w-full sm:w-[49%]">
                    <input
                      type="text"
                      placeholder="State*"
                      className={styles.inputStyles}
                      required
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:flex sm:justify-between">
                  <div className="input-box w-full sm:w-[49%]">
                    <input
                      type="tel"
                      placeholder="Phone*"
                      className={styles.inputStyles}
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="input-box w-full sm:w-[49%]">
                    <input
                      type="text"
                      placeholder="Current Work Profile*"
                      className={styles.inputStyles}
                      required
                      value={currentProfile}
                      onChange={(e) => setCurrentProfile(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:flex sm:justify-between">
                  <div className="input-box select-box w-full sm:w-[49%] relative">
                    <select
                      className={styles.inputStyles}
                      value={dropdownItem}
                      onChange={(e) => setDropdownItem(e.target.value)}
                    >
                      <option value="Automobile Enthusiast">
                        Automobile Enthusiast
                      </option>
                      <option value="Automobile Enthusiast 2">
                        Automobile Enthusiast 2
                      </option>
                      <option value="Automobile Enthusiast 3">
                        Automobile Enthusiast 3
                      </option>
                    </select>
                    <img
                      src="/images/bbt-squad/squad-dropdown-arrow.webp"
                      alt="Arrow"
                      className="absolute inline-block w-[1.2rem] h-auto object-contain top-[3.5rem] right-[2.5rem]"
                    />
                  </div>
                  <div className="input-box w-full sm:w-[49%]">
                    <input
                      type="text"
                      placeholder="Instagram Handle"
                      className={styles.inputStyles}
                      value={instaHandle}
                      onChange={(e) => setInstaHandle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-box ">
                  <div
                    className={`flex justify-between items-center relative ${styles.inputStyles} `}
                  >
                    <input
                      type="file"
                      placeholder="Current Work Profile*"
                      className="opacity-0 absolute w-full h-full"
                      onChange={(e) => setFileItem(e.target.files[0])}
                    />
                    <span className="font-light text-[1.3rem] 3xl:text-[1.7rem]">
                      {fileItem ? fileItem.name : "No File Chosen"}
                    </span>
                    <p className="flex items-center">
                      <img
                        src="/images/bbt-squad/squad-file-upload.webp"
                        alt=""
                        className="object-contain h-auto w-[0.75rem] 3xl:w-[1rem]"
                      />
                      <span className=" inline-block ml-3 font-medium text-[1.3rem] tracking-tight 3xl:text-[1.5rem]">
                        Upload File
                      </span>
                    </p>
                  </div>
                </div>
                <div className="submit-box mt-[2rem] 3xl:mt-[3rem]">
                  <button
                    className="bg-black w-full h-[5.5rem] flex justify-center items-center text-white text-[1.5rem] rounded-[0.7rem] cursor-pointer xl:h-[5rem] 3xl:h-[6.5rem] 3xl:text-[1.89rem] hover:bg-[#333333] transition-all duration-500 ease-in-out"
                    type="submit"
                  >
                    Submit
                  </button>
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
