"use client";
import React, { useEffect, useState } from "react";
import { submitForm } from "../../../app/lib/services/api";
import { API } from "../../../app/lib/services/api";
import { careersAPI } from "../../../app/lib/services/api";
import PopupForm from "./PopupForm"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// Careers fetched from backend
// Each career item is normalized to: { title, description, type, requiredSkills }
// description combines location and experience if available to preserve existing UI text

const styles = {
  inputStyle:
    "w-full h-[4rem] 1xl:h-[4.5rem] 2xl:h-[4.8rem] 3xl:h-[5.5rem] text-[1.3rem] 3xl:text-[1.4rem] px-[1.5rem] border border-[#636363] rounded-[0.6rem] outline-none bg-transparent",
};

const OpeningSection = () => {
  const [openings, setOpenings] = useState([]);
  const [loadingOpenings, setLoadingOpenings] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [open, setOpen] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [resume, setResume] = useState(null);
  const [submittedFor, setSubmittedFor] = useState("");

  const [openPopupForm, setOpenPopupForm] = useState(false);

  const togglePopupForm = () => setOpenPopupForm(!openPopupForm);

  const handleOpen = (value) => setOpen(open === value ? "" : value);

  const [submitting, setSubmitting] = useState(false);
  const isValidEmail = (value) =>
    /.+@.+\..+/.test(String(value || "").toLowerCase());
  const isValidMobile = (value) =>
    /^[0-9+\-()\s]{7,15}$/.test(String(value || "").trim());
  const handleSubmit = async (subject) => {
    try {
      if (!name.trim() || !isValidEmail(email) || !isValidMobile(mobile)) {
        alert("Please enter valid name, email, and mobile number.");
        return;
      }
      setSubmitting(true);
      // Create enquiry in backend
      await API.post("/careers/enquiries", {
        apliername: name.trim(),
        aplieremail: email.trim(),
        enquiryfor: subject,
        mobile: mobile.trim(),
      });
      // Optional: upload resume via existing forms handler if present
      if (resume) {
        try {
          await submitForm({
            formType: "career_opening",
            data: { subject, name, email, mobile },
            files: { resume },
          });
        } catch (e) {
          console.warn("Resume upload failed", e);
        }
      }
      setSubmittedFor(subject || "");
      setName("");
      setEmail("");
      setMobile("");
      setResume(null);
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Simply return the raw job description as HTML
  const getJobDescription = (raw) => {
    if (!raw || typeof raw !== "string") return "";
    return raw;
  };

  useEffect(() => {
    let isMounted = true;
    const fetchOpenings = async () => {
      try {
        setLoadingOpenings(true);
        setFetchError("");
        const res = await careersAPI.getAll(1, 50);
        const listRaw = res?.data || res?.careers || [];
        const normalized = listRaw
          .filter((job) => {
            const st = (job?.status || "").toString().toLowerCase();
            return st === "1" || st === "active" || st === "true";
          })
          .map((job) => {
            const title = job?.jobheading || job?.title || "Job Opening";
            const loc = job?.location || "";
            const exp = job?.experience || "";
            const descriptor = [
              loc,
              exp &&
                (exp.toLowerCase().includes("year")
                  ? exp
                  : `${exp} Experience`),
            ]
              .filter(Boolean)
              .join(" | ");
            const type = job?.jobtype || "Full Time";
            const description = getJobDescription(
              job?.jobdescapp || job?.jobdescmobile || job?.jobdesc
            );
            return {
              id: job?.id_ || job?.id || title,
              title,
              description: descriptor,
              type,
              jobDescription: description,
            };
          });
        if (isMounted) setOpenings(normalized);
      } catch (e) {
        if (isMounted) setFetchError("Failed to load openings");
      } finally {
        if (isMounted) setLoadingOpenings(false);
      }
    };
    fetchOpenings();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <section className="bg-white py-[6rem] md:py-[8rem] lg:py-[10rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]" id="openingSection">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center md:text-left [&>br]:hidden text-black md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            current openings <b>at Big Boy Toyz</b>
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between mt-[4rem] 2xl:mt-[6rem]">
            <div className="md:w-[55%] xl:w-[64%]">
              <ul className="">
                {loadingOpenings && (
                  <li className="border border-[#CACACA] py-[2rem] px-[2rem] rounded-[1rem] mb-[2rem] relative xl:mb-[3rem] 1xl:py-[2.5rem] 1xl:px-[3rem] 1xl:rounded-[2rem] 2xl:py-[3rem] 2xl:px-[3.4rem] 3xl:mb-[4rem] 3xl:px-[4rem] 3xl:pb-[4rem] 3xl:rounded-[2.5rem]">
                    Loading openings...
                  </li>
                )}
                {!loadingOpenings && fetchError && (
                  <li className="border border-[#CACACA] py-[2rem] px-[2rem] rounded-[1rem] mb-[2rem] relative xl:mb-[3rem] 1xl:py-[2.5rem] 1xl:px-[3rem] 1xl:rounded-[2rem] 2xl:py-[3rem] 2xl:px-[3.4rem] 3xl:mb-[4rem] 3xl:px-[4rem] 3xl:pb-[4rem] 3xl:rounded-[2.5rem]">
                    {fetchError}
                  </li>
                )}
                {!loadingOpenings && !fetchError && openings.length === 0 && (
                  <li className="border border-[#CACACA] py-[2rem] px-[2rem] rounded-[1rem] mb-[2rem] relative xl:mb-[3rem] 1xl:py-[2.5rem] 1xl:px-[3rem] 1xl:rounded-[2rem] 2xl:py-[3rem] 2xl:px-[3.4rem] 3xl:mb-[4rem] 3xl:px-[4rem] 3xl:pb-[4rem] 3xl:rounded-[2.5rem]">
                    No openings are available at the moment.
                  </li>
                )}
                {!loadingOpenings &&
                  !fetchError &&
                  openings.map((item, index) => (
                    <li
                      key={index}
                      className="border border-[#CACACA] py-[2rem] px-[2rem] rounded-[1rem] mb-[2rem] relative xl:mb-[3rem] 1xl:py-[2.5rem] 1xl:px-[3rem] 1xl:rounded-[2rem] 2xl:py-[3rem] 2xl:px-[3.4rem] 3xl:mb-[4rem] 3xl:px-[4rem] 3xl:pb-[4rem] 3xl:rounded-[2.5rem]"
                    >
                      <Accordion open={open === `tab-${index + 1}`}>
                        <AccordionHeader
                          onClick={() => handleOpen(`tab-${index + 1}`)}
                          className="border-none w-full"
                        >
                          <div className="relative w-full">
                            <div className="pr-[5rem]">
                              <h6 className="text-[1.5rem] xl:text-[2rem] xl:tracking-tight 1xl:text-[2.2rem] 2xl:text-[2.4rem] 3xl:text-[3rem]">
                                {item.title}
                              </h6>
                              <p className="text-[1.1rem] 2xl:text-[1.3rem] 3xl:text-[1.6rem] py-[1rem] 1xl:pb-[2rem] font-light">
                                {item.description}
                              </p>
                              <span className="w-max inline-block px-[1.5rem] py-[0.5rem] rounded-[5px] text-[1.1rem] bg-[#F4F4F1] 2xl:text-[1.3rem] 3xl:text-[1.6rem]">
                                {item.type}
                              </span>
                            </div>
                            <div className="absolute right-0 bottom-0 w-[3rem] h-[3rem] border border-[#000] rounded-[5px] flex justify-center items-center p-[1rem] xl:w-[3.4rem] xl:h-[3.4rem] xl:p-[1.1rem] 2xl:w-[4rem] 2xl:h-[4rem] 2xl:p-[1.3rem] 3xl:w-[5rem] 3xl:h-[5rem] 3xl:p-[1.6rem] cursor-pointer">
                              <img
                                src={`/images/career/${
                                  open === `tab-${index + 1}`
                                    ? "minus-icon.webp"
                                    : "opening-plus-icon.webp"
                                }`}
                                alt="Plus Icon"
                                className="object-contain h-auto w-full"
                              />
                            </div>
                          </div>
                        </AccordionHeader>
                        <AccordionBody>
                          <div className="flex flex-wrap xl:justify-between">
                            <div className="w-full xl:w-[55%]">
                              <h5 className="mb-[1.5rem] text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.7rem] 3xl:text-[2rem] mt-[1rem] 1xl:mt-[3rem]">
                                Job Description
                              </h5>
                              <div 
                                className="text-[1.2rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem] font-light job-description-content"
                                dangerouslySetInnerHTML={{ __html: item.jobDescription }}
                              />
                            </div>
                            <div className="w-full xl:w-[40%]">
                              <div className="bg-[#F4F4F1] px-[2rem] py-[3rem] rounded-[1.5rem] mt-[4rem] max-w-[450px]">
                                {submittedFor === item.title ? (
                                  <div className="bg-black text-white rounded-[1rem] px-6 py-10 text-center">
                                    <img
                                      src="/images/submission-thank-img.png"
                                      alt="Thumb Icon"
                                      className="w-[120px] object-contain inline-block mb-[16px]"
                                    />
                                    <h4 className="font-normal xl:text-[20px]">
                                      Thank You{" "}
                                    </h4>
                                    <h5 className="font-normal xl:text-[18px]">
                                      for submitting the form!
                                    </h5>
                                    <p className="mt-2 text-[14px] text-[#dddddd]">
                                      Our team will review the details and
                                      contact you soon.
                                    </p>
                                  </div>
                                ) : (
                                  <>
                                    <h5 className="mb-[2rem] text-[1.5rem] 1xl:text-[1.5rem] 2xl:text-[1.7rem] 3xl:text-[2rem]">
                                      Apply Now
                                    </h5>
                                    <div className="mb-[1.5rem]">
                                      <input
                                        type="text"
                                        required
                                        placeholder="Your Name*"
                                        className={styles.inputStyle}
                                        value={name}
                                        onChange={(e) =>
                                          setName(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div className="mb-[1.5rem]">
                                      <input
                                        type="text"
                                        required
                                        placeholder="Email Address*"
                                        className={styles.inputStyle}
                                        value={email}
                                        onChange={(e) =>
                                          setEmail(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div className="mb-[1.5rem]">
                                      <input
                                        type="tel"
                                        required
                                        placeholder="Mobile Number*"
                                        className={styles.inputStyle}
                                        value={mobile}
                                        onChange={(e) =>
                                          setMobile(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div
                                      className={`${styles.inputStyle} relative flex items-center`}
                                    >
                                      <input
                                        type="file"
                                        className="opacity-0 absolute top-0 left-0 w-full h-full"
                                        onChange={(e) =>
                                          setResume(e.target.files[0])
                                        }
                                      />
                                      <p className="text-[1.3rem] 3xl:text-[1.4rem] text-[#5C5C5C] font-light">
                                        {resume
                                          ? resume.name
                                          : "Upload Profile*"}
                                      </p>
                                    </div>
                                    <p className="text-[1rem] text-[#5C5C5C] 3xl:text-[1.2rem] font-light mt-[7px]">
                                      Please upload only .doc, .pdf
                                    </p>
                                    <div className="mt-[2rem]">
                                      <button
                                        type="submit"
                                        className="w-full h-[4rem] 1xl:h-[4.5rem] 2xl:h-[4.8rem] 3xl:h-[5.5rem] text-[1.3rem] 3xl:text-[1.6rem] border border-black rounded-[0.6rem] outline-none bg-black transition-all duration-500 text-white hover:bg-[#222222]"
                                        onClick={() => handleSubmit(item.title)}
                                        disabled={submitting}
                                      >
                                        {submitting
                                          ? "Submitting..."
                                          : "Submit"}
                                      </button>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </AccordionBody>
                      </Accordion>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="md:w-[40%] xl:w-[30%]">
              <div className="bg-[#F4F4F1] py-[3rem] px-[2rem] rounded-[1.5rem] md:max-w-[45rem] md:ml-0 xl:px-[3rem] xl:py-[4rem] 1xl:pt-[7rem] 1xl:pb-[6rem] 1xl:px-[3rem] 3xl:pl-[4rem] 3xl:pt-[8rem]">
                <h3 className="flex-1 font-light [&>b]:font-[500] XL:[&>b]:block xl:leading-[1.3] leading-[1.4] pr-[2rem] tracking-[-1.2px] lg:tracking-[-2px] capitalize text-center xl:text-left">
                  Looking for a <b>Short-Term Internship?</b>
                  Jumpstart your career with an exciting opportunity at BBT.
                </h3>
                <div className="text-center mt-[4rem] xl:mt-[8rem] 1xl:mt-[10rem] 3xl:mt-[12rem]">
                  <button
                    className="w-full max-w-[32rem] mx-auto h-[5.5rem] flex justify-center items-center text-[1.4rem] bg-black text-white px-[3rem] py-[1rem] rounded-[3rem] tracking-tight font-medium xl:h-[5rem] xl:text-[1.2rem] 1xl:h-[6rem] 1xl:text-[1.4rem] 2xl:max-w-none 2xl:px-[6rem] 2xl:text-[1.5rem] 3xl:max-w-[32rem] 3xl:mx-auto 3xl:h-[7.3rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-[#333333] transition-all duration-500 ease-in-out"
                    onClick={() => setOpenPopupForm(true)}
                  >
                    Email Us
                  </button>
                </div>
              </div>
            </div>

            {openPopupForm && <PopupForm active={openPopupForm} togglePopup={togglePopupForm}  />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningSection;
