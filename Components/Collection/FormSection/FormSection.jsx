"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { submitForm } from "../../../app/lib/services/api";
import AOS from "aos";
import "aos/dist/aos.css";

const FormSection = () => {
  const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleImageOne = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageOne(e.target.files[0]);
    }
  };
  const handleImageTwo = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageTwo(e.target.files[0]);
    }
  };

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(name && phone)) {
      return alert("Please fill the form correctly.");
    }
    try {
      setSubmitting(true);
      await submitForm({
        formType: "collection_form",
        data: { name, phone },
        files: { imageOne, imageTwo },
      });
      setImageOne("");
      setImageTwo("");
      setName("");
      setPhone("");
      setIsSubmitted(true);
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
    <section className="bg-black text-white py-20 lg:py-36 xl:py-44 3xl:py-[15rem]">
      <div className="container">
        <div
          className="px-3 md:flex md:flex-wrap md:justify-between md:items-center xl:items-stretch"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="md:w-[40%] xl:w-[35%] xl:flex xl:flex-col xl:justify-center 3xl:w-[38%]">
            <Image
              src="/images/down-circle-arrow-white.webp"
              width="123"
              height="123"
              alt="Arrow Icon"
              className="hidden md:inline-block mb-14 object-contain md:w-28 lg:w-32 xl:w-40 3xl:w-48"
            />
            <h2 className="font-normal text-white tracking-tighter text-4.5xl md:mb-8 3xl:text-[4.5rem]">
              <span className="block font-light">Planning To Sell?</span> Sell
              Your Car In 29 Minutes
            </h2>
          </div>

          <div className="md:w-[55%] xl:w-[38%] xl:px-16 xl:border-l xl:border-r border-[#3C3C3C] 3xl:px-[8rem]">
            {isSubmitted ? (
              <div className="text-center text-white mt-20 md:mt-0 xl:pt-8">
                <div className="3xl:max-w-[19rem] 2xl:max-w-[16rem]  max-w-[15rem] mx-auto">
                  <Image
                    src="/images/collection-thank-icon.webp"
                    width="193"
                    height="163"
                    alt="Thank You"
                    className="w-full object-contain h-auto"
                  />
                </div>
                <div>
                  <h3 className="font-normal mt-10 3xl:text-[3.2rem] 2xl:text-[2.8rem] text-[2.5rem]">
                    Thank you
                  </h3>
                  <h4 className="font-light mt-2 3xl:text-[2.5rem] 2xl:text-[2.2rem] xl:text-[2rem] text-[1.8rem]">
                    for submitting the form!
                  </h4>
                  <p className="3xl:text-[1.6rem] font-light mt-5 2xl:text-[1.4rem] text-[1.3rem]">
                    Our team will review the details and contact you soon. Your
                    satisfaction is our priority.
                  </p>
                </div>
              </div>
            ) : (
              <form action="" className="block" onSubmit={handleSubmit}>
                <div className="flex flex-wrap items-center mb-10 3xl:mb-16">
                  {/* Image One */}
                  <div className="w-[6.3rem] h-[6.3rem] rounded-lg border border-neutral-400 flex items-center justify-center cursor-pointer relative p-3 3xl:w-[8rem] 3xl:h-[8rem]">
                    <input
                      accept="image/*"
                      type="file"
                      onChange={handleImageOne}
                      className="block opacity-0 w-full h-full absolute"
                    />
                    {imageOne ? (
                      <Image
                        src={URL.createObjectURL(imageOne)}
                        width="65"
                        height="65"
                        className="w-full h-auto object-cover block"
                        alt="Car Image"
                      />
                    ) : (
                      <Image
                        src="/images/collection-photo-upload.webp"
                        alt="Add Photo"
                        width="20"
                        height="20"
                        className="w-8 object-contain 3xl:w-10 h-auto"
                      />
                    )}
                  </div>

                  {/* Image Two */}
                  <div className="w-[6.3rem] h-[6.3rem] rounded-lg border border-neutral-400 hidden items-center justify-center cursor-pointer relative p-3 xl:flex xl:ml-5 3xl:w-[8rem] 3xl:h-[8rem]">
                    <input
                      accept="image/*"
                      type="file"
                      onChange={handleImageTwo}
                      className="block opacity-0 w-full h-full absolute"
                    />
                    {imageTwo ? (
                      <Image
                        src={URL.createObjectURL(imageTwo)}
                        width="65"
                        height="65"
                        className="w-full h-auto object-cover block"
                        alt="Car Image"
                      />
                    ) : (
                      <Image
                        src="/images/collection-photo-upload.webp"
                        alt="Add Photo"
                        width="20"
                        height="20"
                        className="w-8 object-contain 3xl:w-10 h-auto"
                      />
                    )}
                  </div>
                  <p className="text-2xl font-light ml-5 3xl:text-[1.8rem] 3xl:ml-8 leading-[1.5]">
                    Upload Your <br /> Car Photo
                  </p>
                </div>

                <div className="mb-10 3xl:mb-12">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    required
                    className="w-full block text-2xl placeholder:text-2xl placeholder:text-neutral-300 text-white py-7 px-9 border border-neutral-500 rounded-lg outline-none bg-transparent 3xl:text-[1.7rem] 3xl:placeholder:text-[1.7rem] 3xl:py-10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-10 3xl:mb-12">
                  <input
                    type="tel"
                    placeholder="Phone*"
                    required
                    className="w-full block text-2xl placeholder:text-2xl placeholder:text-neutral-300 text-white py-7 px-9 border border-neutral-500 rounded-lg outline-none bg-transparent 3xl:text-[1.7rem] 3xl:placeholder:text-[1.7rem] 3xl:py-10"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <button
                  className="w-full block bg-white text-black py-7 text-center text-2xl font-medium rounded-lg outline-none border border-white hover:bg-transparent hover:text-white transition-all duration-500 3xl:text-[1.7rem] 3xl:py-10"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}

            <div className="xl:hidden">
              <div className="divider relative h-px w-full bg-neutral-500 my-20">
                <span className="w-14 h-14 rounded-50% bg-black text-white text-xl text-center flex items-center justify-center p-1 uppercase absolute-center border border-neutral-500">
                  OR
                </span>
              </div>
              <div>
                <p className="text-white font-light text-[1.4rem]">
                  For further enquiry, you can call or whatsapp
                </p>

                <div className="flex items-center justify-between callBtnGroup mt-12 overflow-hidden flex-wrap">
                  <div className="callBtnLeft">
                    <Link
                      href="#"
                      className="btn btnBlack btnSquare border border-neutral-500 h-extra"
                    >
                      <Image
                        src="/images/square-btn-call-icon.webp"
                        width="19"
                        height="19"
                        alt="Call Icon"
                        className="object-contain w-7 mr-6 h-auto"
                      />
                      Call Big Boy Toyz
                    </Link>
                  </div>
                  <div className="callBtnRight ml-4">
                    <a
                      href="#"
                      className="whatsAppBtn w-[4.5rem] h-[4.5rem] flex justify-center items-center rounded-[5px]"
                    >
                      <Image
                        src="/images/whatsapp-btn-icon.webp"
                        width="18"
                        height="18"
                        alt="Call Icon"
                        className="object-contain w-9"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:block xl:w-[27%] xl:pl-16 h-[inherit] 3xl:pl-28 3xl:w-[23%]">
            <div className="bg-[#111111] px-10 py-12 rounded-2xl h-full 3xl:py-16 3xl:px-14">
              <p className="text-white mb-10 3xl:text-[1.8rem]">
                For further enquiry, <br /> you can call or whatsapp
              </p>
              <ul>
                <li className=" border-t border-[#3C3C3C] hover:bg-[#171717] transition-all duration-500 ease-in-out">
                  <a
                    href="https://api.whatsapp.com/send?phone=9999999983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-10 3xl:py-14"
                  >
                    <div>
                      <div className="w-[3.5rem] h-[3.5rem] border border-[#3C3C3C] rounded-md flex justify-center items-center p-3 3xl:w-[3.7rem] 3xl:h-[3.7rem]">
                        <Image
                          src="/images/whatsapp-icon-white.webp"
                          width="19"
                          height="19"
                          className=" object-contain w-full h-auto"
                          alt="Whatsapp Icon"
                        />
                      </div>
                    </div>
                    <div className="pl-5 [&>p]:text-[1.2rem] 3xl:[&>p]:text-[1.6rem] 3xl:pl-8">
                      <p className="font-light">WhatsApp </p>
                      <p className="font-normal">(+91) 9999 9999 15</p>
                    </div>
                  </a>
                </li>
                <li className=" border-t border-b border-[#3C3C3C] hover:bg-[#171717] transition-all duration-500 ease-in-out">
                  <a
                    href="tel:+919999999915"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-10 3xl:py-14"
                  >
                    <div>
                      <div className="w-[3.5rem] h-[3.5rem] border border-[#3C3C3C] rounded-md flex justify-center items-center p-3 3xl:w-[3.7rem] 3xl:h-[3.7rem]">
                        <Image
                          src="/images/square-btn-call-icon.webp"
                          width="19"
                          height="19"
                          className=" object-contain w-full h-auto"
                          alt="Whatsapp Icon"
                        />
                      </div>
                    </div>
                    <div className="pl-5 [&>p]:text-[1.2rem] 3xl:[&>p]:text-[1.6rem] 3xl:pl-8">
                      <p className="font-light">Call us </p>
                      <p className="font-normal">(+91) 9999 9999 15</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
