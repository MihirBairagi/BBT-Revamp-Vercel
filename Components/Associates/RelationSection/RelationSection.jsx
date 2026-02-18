"use client";
import React, { useState } from "react";
import ThankyouPopup from "../../ThankyouPopup/ThankyouPopup";

const RelationSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [relationShip, setRelationShip] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const toggleThankYouPopup = () => {
    setShowThankYou(!showThankYou);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !phone || !relationShip) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form_type: "associates",
          data: {
            name: name,
            email: email,
            phone: phone,
            relationship: relationShip,
          },
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setRelationShip("");
        // Show thank you popup
        setShowThankYou(true);
      } else {
        alert("Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#161616] py-[6rem] lg:py-[10rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex justify-between items-start flex-col sm:max-w-[500px] sm:mx-auto lg:max-w-none lg:flex-row lg:flex-wrap xl:items-center">
            <div className="text-white lg:w-[55%]">
              <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] [&>br]:hidden text-center lg:text-left md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
                how can we build <br /> <b>relationship together</b>
              </h2>
              <p className="font-light text-[1.2rem] leading-[1.5] text-center lg:text-left mt-[2rem] lg:text-[1.1rem] lg:tracking-tight xl:text-[1.13rem] xl:leading-[1.5] 1xl:text-[1.28rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] 3xl:leading-[1.5] 3xl:tracking-[0] hidden">
                BBT believes that its future depends on its people who are
                capable enough to generate <br /> new ideas & plans that will
                help in taking the business to a new height altogether.
              </p>
              <div className="hidden lg:flex justify-center lg:justify-start mt-[4rem] 1xl:mt-[4.5rem] 3xl:mt-[6rem]">
                <img
                  src="/images/bbt-squad/down-arrow-white.webp"
                  alt="Arrow"
                  className="object-contain h-auto w-[3rem] xl:w-[4rem] 2xl:w-[4.5rem] 3xl:w-[5.29rem]"
                  width="53"
                  height="84"
                />
              </div>
              <ul className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[1rem] mt-[3rem] xl:gap-y-[2.3rem] xl:gap-x-[3rem] 1xl:mt-[4rem] 3xl:gap-x-[4.5rem] 3xl:gap-y-[3.5rem]">
                <li className={styles.uspListItem}>
                  <div className="flex items-center">
                    <div className={styles.uspIconContainer}>
                      <img
                        src="/images/associates/usp-img-1.webp"
                        alt="Icon"
                        className="w-full object-contain h-auto"
                      />
                    </div>
                    <div className="flex-[1] pl-[1rem] sm:pl-[1.5rem]">
                      <h6 className={styles.uspTitle}>
                        Public Relation <b>Reach Out</b>{" "}
                      </h6>
                    </div>
                  </div>
                </li>
                <li className={styles.uspListItem}>
                  <div className="flex items-center">
                    <div className={styles.uspIconContainer}>
                      <img
                        src="/images/associates/usp-img-2.webp"
                        alt="Icon"
                        className="w-full object-contain h-auto"
                      />
                    </div>
                    <div className="flex-[1] pl-[1rem] sm:pl-[1.5rem]">
                      <h6 className={styles.uspTitle}>
                        brand
                        <b>collaboration</b>{" "}
                      </h6>
                    </div>
                  </div>
                </li>
                <li className={styles.uspListItem}>
                  <div className="flex items-center">
                    <div className={styles.uspIconContainer}>
                      <img
                        src="/images/associates/usp-img-3.webp"
                        alt="Icon"
                        className="w-full object-contain h-auto"
                      />
                    </div>
                    <div className="flex-[1] pl-[1rem] sm:pl-[1.5rem]">
                      <h6 className={styles.uspTitle}>
                        event meetups <b>and management</b>
                      </h6>
                    </div>
                  </div>
                </li>
                <li className={styles.uspListItem}>
                  <div className="flex items-center">
                    <div className={styles.uspIconContainer}>
                      <img
                        src="/images/associates/usp-img-4.webp"
                        alt="Icon"
                        className="w-full object-contain h-auto"
                      />
                    </div>
                    <div className="flex-[1] pl-[1rem] sm:pl-[1.5rem]">
                      <h6 className={styles.uspTitle}>
                        celebrity
                        <b>music video</b>
                      </h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-[5rem] lg:w-[39%] lg:mt-0">
              <div className="bg-[#2D2D2D] py-[3rem] px-[2rem] rounded-[1rem] xl:px-[4.5rem] xl:pb-[5rem] xl:py-[4rem] 1xl:pb-[6rem] 1xl:pt-[6rem] 1xl:px-[3.5rem] 3xl:px-[5rem] 3xl:pb-[8rem] 3xl:pt-[6rem] 3xl:rounded-[1.5rem]">
                <h2 className="font-light leading-[1.4] mt-[1rem] [&>br]:hidden text-white md:[&>br]:block xl:text-[3rem] xl:leading-[1.2] xl:tracking-[-1px] 1xl:text-[3.3rem]  3xl:text-[4rem] capitalize">
                  Interested in Collaborating? <br />
                  <b>Let’s Talk.</b>
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="mt-[3rem] 3xl:mt-[5rem]"
                >
                  <div className="mb-[1.5rem] 3xl:mb-[2rem]">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      required
                      className={styles.inputStyle}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-[1.5rem] 3xl:mb-[2rem]">
                    <input
                      type="tel"
                      placeholder="Phone No*"
                      required
                      className={styles.inputStyle}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-[1.5rem] 3xl:mb-[2rem]">
                    <input
                      type="email"
                      placeholder="Email ID*"
                      required
                      className={styles.inputStyle}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-[1.5rem] 3xl:mb-[2rem]">
                    <select
                      name=""
                      id=""
                      placeholder="Email ID*"
                      required
                      className={styles.inputStyle}
                      value={relationShip}
                      onChange={(e) => setRelationShip(e.target.value)}
                    >
                      <option value="">Select Relationship</option>
                      <option value="Public Relations">Public Relations</option>
                      <option value="Brand Collaboration">
                        Brand Collaboration
                      </option>
                      <option value="Event Management">Event Management</option>
                      <option value="Celebrity/Music Video">
                        Celebrity/Music Video
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className={styles.buttonStyle}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showThankYou && <ThankyouPopup togglePopup={toggleThankYouPopup} />}
    </section>
  );
};

export default RelationSection;

const styles = {
  uspListItem:
    "bg-[#2D2D2D] px-[1.5rem] py-[1.5rem] rounded-[0.7rem] xl:py-[2.5rem] xl:px-[3rem] xl:rounded-[1.5rem] 1xl:pl-[4rem] 1xl:py-[3rem] 3xl:py-[4rem] 3xl:px-[4rem]",
  uspTitle:
    "text-[1.1rem] font-light capitalize [&>b]:font-medium [&>b]:block sm:text-[1.3rem] xl:text-[1.5rem] 1xl:text-[1.7rem] 3xl:text-[2.4rem]",
  uspIconContainer: "w-[2.5rem] sm:w-[3rem] 1xl:w-[3.5rem] 3xl:w-[4.5rem]",
  inputStyle:
    "border border-[#525252] rounded-[6px] text-[1.3rem] text-white py-[1rem] pl-[1rem] outline-none bg-[#525252] w-full h-[45px] xl:h-[53px] xl:pl-[2rem] 1xl:h-[58px] 2xl:h-[62px] 3xl:h-[75px] 3xl:text-[1.65rem] 3xl:rounded-[8px]",
  buttonStyle:
    "bg-white h-[45px] outline-none rounded-[6px] text-black transition-all duration-500 w-full text-[1.3rem] font-medium xl:h-[53px] 1xl:h-[58px] 2xl:h-[62px] 3xl:h-[75px] 3xl:text-[1.65rem] 3xl:rounded-[8px] hover:bg-[#111111] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
};
