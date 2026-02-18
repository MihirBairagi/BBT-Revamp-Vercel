"use client";
import React, { useEffect, useState } from "react";
import { modificationServices } from "../../../public/data/dummyData";

const ServicePopup = ({ serviceId, toggleModal }) => {
  const [service, setService] = useState(
    modificationServices.find((item) => item._id == "001")
  );

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = { name, email, phone, message };
    console.log(formData);
    setSubmitting(false);
    setSubmitted(true);
  };

  useEffect(() => {
    const getService = modificationServices.find(
      (item) => item._id == serviceId
    );
    console.log(getService);
    setService(getService);
  }, []);
  return (
    <>
      <div
        className="fixed z-100 overflow-y-auto top-0 w-full left-0 mod-service-popup"
        id="modal"
      >
        <div className=" relative flex items-center justify-center w-full min-h-[100vh] pt-[3rem] px-[2rem] pb-[4rem] flex-col">
          <div
            className="absolute h-full inset-0 transition-opacity min-h-[100vh] bg-black opacity-[0.5] z-10"
            onClick={toggleModal}
          ></div>
          <div className="bg-[#F4F4F1] w-[95%] z-20 md:max-w-[700px] xl:max-w-[1000px] xl:w-[80%] mx-auto rounded-lg px-[3rem] py-[3rem]  relative shadow-xl overflow-hidden xl:rounded-[1.5rem] 3xl:px-[4.5rem] 3xl:max-w-[1400px] 3xl:py-[4.5rem] 1xl:rounded-[3rem] 3xl:rounded-[3.5rem]">
            <div
              className="absolute top-[1.5rem] right-[1.5rem] w-[2rem] h-[2rem] cursor-pointer z-10 flex justify-center items-center 1xl:right-[2rem] 1xl:w-[3rem] 1xl:h-[3rem] 3xl:right-[2.6rem] 3xl:top-[2rem]"
              onClick={toggleModal}
            >
              <img
                src="/images/wallpapers/close-popup.webp"
                alt=""
                className="object-contain w-[1.5rem] h-auto 3xl:w-[1.9rem]"
              />
            </div>
            <div className="block  text-left transform transition-all  max-h-[80vh] pb-[1rem] overflow-y-auto no-scrollbar w-full">
              <div className="block md:flex md:justify-between">
                <div className="md:w-[35%] lg:w-[40%] 1xl:w-[45%]">
                  <img
                    src={service?.image && service.image}
                    alt={service.title}
                    className="w-full  max-h-[78vh] block object-cover rounded-[1rem] xl:rounded-[1.7rem] min-h-[28rem] md:min-h-[32rem] lg:min-h-[39rem] 1xl:min-h-[45rem] 2xl:min-h-[47rem] 3xl:min-h-[54rem]"
                  />
                </div>

                <div className="md:w-[60%] lg:w-[55%] 1xl:w-[50%]">
                  {showForm ? (
                    <div className="h-full">
                      {submitted ? (
                        <div className="flex flex-col h-full items-center justify-center">
                          <h3 className="font-light leading-[1.2] tracking-tighter xl:text-[3rem] xl:leading-[1.2] xl:tracking-[-1.8px] text-center mt-[3rem]">
                            <b>Thank You.</b> <br /> The form has been submitted. We will get
                            back to you soon.
                          </h3>
                        </div>
                      ) : (
                        <form className="block" onSubmit={handleSubmit}>
                          <h3 className="font-light leading-[1.2] tracking-tighter xl:text-[3rem] xl:leading-[1.2] xl:tracking-[-1.8px] capitalize text-center mt-[3rem]">
                            Please fill the form below
                          </h3>
                          <div className="mt-[3rem]">
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
                              inputMode="email"
                              autoComplete="email"
                              className={styles.inputStyle}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="mt-[2rem]">
                            <input
                              type="tel"
                              name=""
                              id=""
                              placeholder="Phone No*"
                              required
                              inputMode="tel"
                              autoComplete="tel"
                              className={styles.inputStyle}
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          <div className="mt-[2rem]">
                            <textarea
                              name=""
                              id=""
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className={styles.inputStyle}
                              placeholder="Your Message..."
                            ></textarea>
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
                      )}
                    </div>
                  ) : (
                    <div className="mt-[3rem] h-full md:mt-0 item overflow-y-auto">
                      <div>
                        <h3 className="capitalize text-[2.5rem] 1xl:text-[2.8rem] 2xl:text-[3rem] 3xl:text-[3.2rem]">
                          {service?.title}
                        </h3>
                        <div
                          className="text-[1.2rem] font-light mt-[1rem] 1xl:text-[1.4rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]"
                          dangerouslySetInnerHTML={{
                            __html: service?.description,
                          }}
                        ></div>
                      </div>

                      <div className="w-max mt-[3rem] xl:min-w-[150px] 2xl:min-w-[160px] 3xl:min-w-[240px] 3xl:mt-[6rem]">
                        <button
                          className="bg-black w-full text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] px-[3rem] h-[4rem] xl:text-[1.2rem] 1xl:h-[4.5rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[5rem] 2xl:rounded-[4rem] 3xl:h-[5.5rem] transition-all duration-500 hover:bg-[#333]"
                          onClick={() => setShowForm(true)}
                        >
                          {service?.ctaText ? service.ctaText : 'Get a Quote'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePopup;

const styles = {
  inputStyle:
    "w-full block border border-[#666666] rounded-[5px] py-[1.2rem] pl-[1.5rem] text-[1.4rem] outline-none xl:text-[1.3rem] xl:py-[1.5rem] 1xl:py-[1.7rem] 1xl:rounded-[7px] 2xl:text-[1.45rem] 2xl:pl-[2.5rem] 3xl:text-[1.64rem] 3xl:h-[7.5rem] 3xl:pl-[3rem]",
};
