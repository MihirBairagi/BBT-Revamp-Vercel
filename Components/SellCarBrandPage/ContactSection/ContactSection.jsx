"use client";
import React, { useState, useEffect } from "react";
import { submitForm } from "../../../app/lib/services/api";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [variant, setVariant] = useState("");
  const [message, setMessage] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [imageThree, setImageThree] = useState(null);
  const [imageOnePreview, setImageOnePreview] = useState("");
  const [imageTwoPreview, setImageTwoPreview] = useState("");
  const [imageThreePreview, setImageThreePreview] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define the maximum file size in bytes (500KB = 500 * 1024 bytes)
  const MAX_SIZE = 500 * 1024;

  // Allowed image MIME types
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  const handleImageOneChange = (e) => {
    if (e.target.files[0].size > MAX_SIZE) {
      return alert("Image size must be less than 500KB!");
    }
    if (!allowedTypes.includes(e.target.files[0].type)) {
      return alert("Must be an image (JPEG,PNG,GIF,WEBP).");
    }
    setImageOnePreview(URL.createObjectURL(e.target.files[0]));
    setImageOne(e.target.files[0]);
  };
  const handleImageTwoChange = (e) => {
    if (e.target.files[0].size > MAX_SIZE) {
      return alert("Image size must be less than 500KB!");
    }
    if (!allowedTypes.includes(e.target.files[0].type)) {
      return alert("Must be an image (JPEG,PNG,GIF,WEBP).");
    }
    setImageTwoPreview(URL.createObjectURL(e.target.files[0]));
    setImageTwo(e.target.files[0]);
  };
  const handleImageThreeChange = (e) => {
    if (e.target.files[0].size > MAX_SIZE) {
      return alert("Image size must be less than 500KB!");
    }
    if (!allowedTypes.includes(e.target.files[0].type)) {
      return alert("Must be an image (JPEG,PNG,GIF,WEBP).");
    }
    setImageThreePreview(URL.createObjectURL(e.target.files[0]));
    setImageThree(e.target.files[0]);
  };

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await submitForm({
        formType: "sellcarbrand_contact",
        data: { name, email, phone, brand, model, variant, message },
        files: { imageOne, imageTwo, imageThree },
      });
      setName("");
      setEmail("");
      setPhone("");
      setBrand("");
      setModel("");
      setVariant("");
      setMessage("");
      setImageOne(null);
      setImageTwo(null);
      setImageThree(null);
      setImageOnePreview("");
      setImageTwoPreview("");
      setImageThreePreview("");
      setIsSubmitted(true);
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[10rem] 1xl:py-[12rem]">
      <div className="container">
        <h2
          className="font-light text-center mb-[4rem] [&>b]:font-normal leading-[1.2] tracking-[-0.2rem] 1xl:text-[4.2rem] 3xl:text-[5.8rem]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Contact With Us{" "}
        </h2>
        <div>
          <div
            className="bg-[#F4F4F1] py-[4rem] px-[2rem] rounded-[1.5rem] sm:max-w-[556px] xl:max-w-[1025px] sm:mx-auto xl:px-[4rem] xl:rounded-[2rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            {isSubmitted ? (
              <div className="bg-black text-white rounded-[1rem] px-6 py-10 text-center">
                <img
                  src="/images/submission-thank-img.png"
                  alt="Thumb Icon"
                  className="w-[120px] object-contain inline-block mb-[16px]"
                />
                <h4 className="font-normal xl:text-[20px]">Thank You </h4>
                <h5 className="font-normal xl:text-[18px]">for submitting the form!</h5>
                <p className="mt-2 text-[14px] text-[#dddddd]">
                  Our team will review the details and contact you soon.
                </p>
              </div>
            ) : (
            <form action="" className="block" onSubmit={handleSubmit}>
              <div className="mb-[1.5rem]">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className={styles.inputStyle}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-[1.5rem]">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={styles.inputStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-[1.5rem]">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className={styles.inputStyle}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Brand, Model & Variant */}
              <div className="flex flex-wrap justify-between">
                <div className="mb-[1.5rem] w-full sm:w-[31%]">
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    placeholder="Brand"
                    className={styles.inputStyle}
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
                <div className="mb-[1.5rem] w-[47%] sm:w-[31%]">
                  <input
                    type="text"
                    name="model"
                    id="model"
                    placeholder="Model"
                    className={styles.inputStyle}
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </div>
                <div className="mb-[1.5rem] w-[47%] sm:w-[31%]">
                  <input
                    type="text"
                    name="variant"
                    id="variant"
                    placeholder="variant"
                    className={styles.inputStyle}
                    value={variant}
                    onChange={(e) => setVariant(e.target.value)}
                  />
                </div>
              </div>
              {/* Image Box */}
              <div className="flex flex-wrap justify-between">
                <label htmlFor="imageOne" className={styles.fileInput}>
                  <img
                    src={
                      imageOnePreview
                        ? imageOnePreview
                        : "/images/sell-your-car/camera-icon.webp"
                    }
                    alt="Upload Image"
                    className={`${
                      imageOnePreview
                        ? "object-cover"
                        : " object-contain max-w-[4.7rem] xl:max-w-[3.5rem] 3xl:max-w-[4.7rem]"
                    } w-full`}
                  />
                  <input
                    type="file"
                    name="imageOne"
                    id="imageOne"
                    hidden
                    className="w-full h-full absolute opacity-0 cursor-pointer"
                    onChange={handleImageOneChange}
                  />
                </label>
                <label htmlFor="imageTwo" className={styles.fileInput}>
                  <img
                    src={
                      imageTwoPreview
                        ? imageTwoPreview
                        : "/images/sell-your-car/camera-icon.webp"
                    }
                    alt="Upload Image"
                    className={`${
                      imageTwoPreview
                        ? "object-cover"
                        : " object-contain max-w-[4.7rem] xl:max-w-[3.5rem] 3xl:max-w-[4.7rem]"
                    } w-full`}
                  />
                  <input
                    type="file"
                    name="imageTwo"
                    id="imageTwo"
                    hidden
                    className="w-full h-full absolute opacity-0 cursor-pointer"
                    onChange={handleImageTwoChange}
                  />
                </label>
                <label htmlFor="imageThree" className={styles.fileInput}>
                  <img
                    src={
                      imageThreePreview
                        ? imageThreePreview
                        : "/images/sell-your-car/camera-icon.webp"
                    }
                    alt="Upload Image"
                    className={`${
                      imageThreePreview
                        ? "object-cover"
                        : " object-contain max-w-[4.7rem] xl:max-w-[3.5rem] 3xl:max-w-[4.7rem]"
                    } w-full`}
                  />
                  <input
                    type="file"
                    name="imageThree"
                    id="imageThree"
                    hidden
                    className="w-full h-full absolute opacity-0 cursor-pointer"
                    onChange={handleImageThreeChange}
                  />
                </label>
              </div>
              <div className="mb-[1.5rem]">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  className={`${styles.inputStyle} min-h-[7rem] xl:min-h-[8rem] 1xl:min-h-[9rem] 3xl:min-h-[11rem]`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-black text-white text-center w-full border border-black cursor-pointer px-[3rem] text-[1.3rem] xl:text-[1.4rem] 3xl:text-[1.9rem] rounded-[0.5rem] md:rounded-[0.7rem] xl:rounded-[1rem] hover:bg-transparent hover:text-black transition-all duration-500 py-[1.2rem] xl:py-[1.2rem] 1xl:py-[1.4rem] 2xl:h-[5.5rem] 3xl:h-[6.5rem] 3xl:py-[2rem]"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

const styles = {
  inputStyle:
    "bg-white text-black w-full h-[4.5rem] border border-[#CCCCCC] px-[1.5rem] py-[1rem] rounded-[1rem] outline-none text-[1.5rem] 3xl:text-[2.2rem] 1xl:h-[5rem] 2xl:h-[5.5rem] 3xl:h-[6.5rem] 1xl:text-[1.7rem] 2xl:text-[1.95rem]",
  fileInput:
    "w-[32%] h-[7rem] mb-[1.5rem] relative overflow-hidden flex justify-center items-center border-[#ABABA9] border border-dashed rounded-[0.5rem] sm:h-[9rem] xl:h-[14rem] xl:rounded-[1rem]",
};
