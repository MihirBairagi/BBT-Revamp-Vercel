"use client";
import React, { useState, useRef, useEffect } from "react";
import { submitForm } from "../../../app/lib/services/api";
import AOS from "aos";

const MainContent = ({ project, images = [] }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  console.log("images", images);
  console.log("project", project);

  const detailImages = images.length ? images.filter(i=>i.ptype==="image").map(i=>({image:i.pgalimage})) : [
    { image: "/images/project-detail/pd-img-1.webp" },
    { image: "/images/project-detail/pd-img-2.webp" },
    { image: "/images/project-detail/pd-img-3.webp" },
    { image: "/images/project-detail/pd-img-4.webp" },
    { image: "/images/project-detail/pd-img-5.webp" },
  ];

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePlayButtonClick = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phoneNumber) {
      return alert("Please fill the form correctly!");
    }
    try {
      setSubmitting(true);
      await submitForm({
        formType: "project_estimate",
        data: { name, email, phoneNumber, projectId: project?.id || project?.id_, projectTitle: project?.title },
      });
      setName("");
      setEmail("");
      setPhoneNumber("");
      setSubmitted(true);
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
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-[65%] 3xl:w-[68%] grid grid-cols-1 gap-[3rem] md:grid-cols-2 lg:gap-[2rem] 1xl:gap-[3rem]">
              {/* Video Box */}
              <div
                className="relative"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <video
                  src={(images.find(i=>i.ptype==='video')?.pgalimage) || "/videos/rolls-video.mp4"}
                  className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2.5rem] 1xl:rounded-[3rem] aspect-[9/13]"
                  playsInline
                  // muted
                  
                  loop
                  // poster="/images/project-detail/pd-video-thumb.webp"
                  ref={videoRef}
                  onClick={handleVideoClick}
                  width="1080"
                  height="650"
                ></video>
                {!isPlaying && (
                  <>
                    <div
                      className="absolute left-[50%] top-[50%] w-[50px] h-[50px] cursor-pointer z-10 translate-y-[-50%] translate-x-[-50%] xl:w-[80px] xl:h-[80px] 1xl:w-[95px] 1xl:h-[95px] 3xl:w-[113px] 3xl:h-[113px]"
                      onClick={handlePlayButtonClick}
                    >
                      <img
                        src="/images/project-detail/pd-play-btn.webp"
                        alt="Play Icon"
                        className="w-full h-auto object-contain"
                        width="113"
                        height="113"
                      />
                    </div>
                    {/* <div className="absolute left-[1.5rem] bottom-[1.5rem] w-max pl-[1rem] pr-[2rem] py-[0.6rem] rounded-[1rem] bg-[rgba(0,0,0,0.6)] border border-[#4A4A4A] text-white flex items-center md:py-[1rem] 1xl:left-[2.5rem] 1xl:bottom-[2.5rem] 1xl:pr-[3rem] 3xl:pr-[4.5rem] 3xl:pl-[2.5rem] 3xl:py-[1.4rem] 3xl:left-[4rem] 3xl:bottom-[4rem] 3xl:rounded-[1.5rem]">
                      <div className="w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center p-[0.5rem] bg-[rgba(0,0,0,0.6)] border border-[#4A4A4A] md:w-[5.5rem] md:h-[5.5rem] 1xl:w-[6.5rem] 1xl:h-[6.5rem] 1xl:p-[1.5rem] 2xl:w-[7rem] 2xl:h-[7rem] 3xl:w-[8.5rem] 3xl:h-[8.5rem]">
                        <img
                          src="/images/project-detail/redback-logo.webp"
                          alt="Logo"
                          className="w-full object-contain h-auto"
                          width="66"
                          height="35"
                        />
                      </div>
                      <div className="flex-[1] pl-[1rem] 2xl:pl-[2rem] 3xl:pl-[2.5rem]">
                        <h4 className="text-[1.1rem] md:text-[1.4rem] 1xl:text-[1.7rem] 2xl:text-[1.9rem] 3xl:text-[2.2rem]">
                          MRX Exhaust
                        </h4>
                        <p className="text-[0.9rem] md:text-[1.1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.4rem] mt-[2px]">
                          The 759-hp special edition <br /> showcases Lambo's
                          virtual
                        </p>
                      </div>
                    </div> */}
                  </>
                )}
              </div>

              {/* Images */}
              {detailImages.map((item, index) => (
                <div
                  className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden 1xl:rounded-[3rem]"
                  key={index}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <img
                    src={item.image}
                    alt="Thumbnail"
                    className="w-full h-full object-cover block aspect-[9/13]"
                  />
                  {/* <div className="absolute left-[1.5rem] bottom-[1.5rem] w-max pl-[1rem] pr-[2rem] py-[0.6rem] rounded-[1rem] bg-[rgba(0,0,0,0.6)] border border-[#4A4A4A] text-white flex items-center md:py-[1rem] 1xl:left-[2.5rem] 1xl:bottom-[2.5rem] 1xl:pr-[3rem] 3xl:pr-[4.5rem] 3xl:pl-[2.5rem] 3xl:py-[1.4rem] 3xl:left-[4rem] 3xl:bottom-[4rem] 3xl:rounded-[1.5rem]">
                    <div className="w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center p-[0.5rem] bg-[rgba(0,0,0,0.6)] border border-[#4A4A4A] md:w-[5.5rem] md:h-[5.5rem] 1xl:w-[6.5rem] 1xl:h-[6.5rem] 1xl:p-[1.5rem] 2xl:w-[7rem] 2xl:h-[7rem] 3xl:w-[8.5rem] 3xl:h-[8.5rem]">
                      <img
                        src="/images/project-detail/redback-logo.webp"
                        alt="Logo"
                        className="w-full object-contain h-auto"
                        width="66"
                        height="35"
                      />
                    </div>
                    <div className="flex-[1] pl-[1rem] 2xl:pl-[2rem] 3xl:pl-[2.5rem]">
                      <h4 className="text-[1.1rem] md:text-[1.4rem] 1xl:text-[1.7rem] 2xl:text-[1.9rem] 3xl:text-[2.2rem]">
                        MRX Exhaust
                      </h4>
                      <p className="text-[0.9rem] md:text-[1.1rem] 1xl:text-[1.2rem] 2xl:text-[1.3rem] 3xl:text-[1.4rem] mt-[2px]">
                        The 759-hp special edition <br /> showcases Lambo's
                        virtual
                      </p>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
            <div className="w-full lg:w-[30%] mt-[5rem] lg:mt-0 relative 3xl:w-[28%]">
              <div className="md:flex md:flex-wrap md:justify-between lg:block lg:sticky lg:top-[4rem]">
                {/* Form Wrapper */}
                <div
                  className=" hidden lg:block bg-black px-[3.5rem] py-[4.5rem] rounded-[2rem] text-white md:w-[48%] lg:w-full 1xl:py-[5.5rem] 2xl:px-[4.5rem] 3xl:px-[5rem] 1xl:rounded-[3rem]"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <h3 className="text-[2.2rem] xl:text-[2.4rem] 1xl:text-[2.5rem] 3xl:text-[2.8rem] font-light [&>br]:font-medium capitalize mb-[3rem] lg:[&>br]:hidden xl:[&>br]:block 3xl:mb-[4rem]">
                    get This <b>Project's cost</b> in your inbox
                  </h3>
                  <form action="" className="block" onSubmit={handleFormSubmit}>
                    <div className="mb-[2rem] 1xl:mb-[2.3rem] 3xl:mb-[2.7rem]">
                      <input
                        type="text"
                        placeholder="Your name"
                        className={styles.inputStyle}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-[2rem] 1xl:mb-[2.3rem] 3xl:mb-[2.7rem]">
                      <input
                        type="email"
                        placeholder="Email"
                        className={styles.inputStyle}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-[2rem] 1xl:mb-[2.3rem] 3xl:mb-[2.7rem]">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className={styles.inputStyle}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div>
                      <button type="submit" className={styles.submitStyle} disabled={submitting}>
                        {submitting ? "Submitting..." : submitted ? "Submitted" : "Get Estimate"}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Get In Touch */}
                <div
                  className="bg-black px-[3.5rem] py-[4.5rem] rounded-[2rem] text-white mt-[4rem] md:w-[48%] lg:w-full md:mt-0 md:h-[inherit] lg:mt-[4rem] 1xl:py-[5.5rem] 2xl:px-[4.5rem] 3xl:px-[5rem] 1xl:rounded-[3rem] 1xl:pb-[7rem]"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <h3 className="text-[2.2rem] xl:text-[2.4rem] 1xl:text-[2.5rem] 3xl:text-[2.8rem] font-light [&>br]:font-medium capitalize mb-[3rem] lg:[&>br]:hidden xl:[&>br]:block 3xl:mb-[4rem]">
                    Get in Touch <b>with us</b>
                  </h3>
                  <ul>
                    <li className="mb-[2.5rem] 2xl:mb-[3rem]">
                      <a
                        href="tel:+918999999264"
                        className="flex w-full items-center"
                      >
                        <div className="w-[4rem]">
                          <img
                            src="/images/project-detail/call-icon.webp"
                            alt="Call Icon"
                            className="w-full object-contain"
                          />
                        </div>
                        <div className="flex-[1] pl-[2rem]">
                          <p className="text-[#CCCCCC] text-[1.7rem] 3xl:text-[2.2rem]">
                            Servicing
                          </p>
                          <p className="inline-block underline text-[1.7rem] 3xl:text-[2.2rem]">
                            (+91) 89999 99264
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="mb-[2.5rem] 2xl:mb-[3rem]">
                      <a
                        href="tel:+918999999627"
                        className="flex w-full items-center"
                      >
                        <div className="w-[4rem]">
                          <img
                            src="/images/project-detail/call-icon.webp"
                            alt="Call Icon"
                            className="w-full object-contain"
                          />
                        </div>
                        <div className="flex-[1] pl-[2rem]">
                          <p className="text-[#CCCCCC] text-[1.7rem] 3xl:text-[2.2rem]">
                            Detailing & Modifications
                          </p>
                          <p className="inline-block underline text-[1.7rem] 3xl:text-[2.2rem]">
                            (+91) 8999 9996 27
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="mb-[2.5rem] 2xl:mb-[3rem] hidden">
                      <a
                        href="https://api.whatsapp.com/send?phone=+918999999264&text=Hi+there+%F0%9F%91%8B%2C+Can+I+have+a+quote%2C+please"
                        className="flex w-full items-center"
                        target="_blank"
                      >
                        <div className="w-[4rem]">
                          <img
                            src="/images/project-detail/whatsapp-icon.webp"
                            alt="Call Icon"
                            className="w-full object-contain"
                          />
                        </div>
                        <div className="flex-[1] pl-[2rem]">
                          <p className="text-[#CCCCCC] text-[1.7rem] 3xl:text-[2.2rem]">
                            Whatsapp
                          </p>
                          <p className="inline-block underline text-[1.7rem] 3xl:text-[2.2rem]">
                            (+91) 89999 99264
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Quote */}
                <div
                  className="hidden bg-[#F6F6F6] px-[3.5rem] py-[4.5rem] rounded-[2rem] text-[#313131] mt-[4rem] w-full 1xl:py-[5.5rem] 2xl:px-[4.5rem] 3xl:px-[5rem] 1xl:rounded-[3rem]"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <img
                    src="/images/project-detail/quote-icon.webp"
                    alt="Quote Icon"
                    className="w-[3rem] object-contain h-auto 1xl:w-[4rem] 2xl:w-[4.6rem] 3xl:w-[5.3rem]"
                  />
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <p className="text-[2rem] 1xl:text-[2.45rem] 2xl:text-[2.5rem] 3xl:text-[3rem] font-light 2xl:tracking-tight">
                      I love the sound of a car's engine, like a symphony of
                      pistons and gears singing in harmony. I love the sound of
                      a car's engine.
                    </p>
                  </div>
                  <div className="flex items-center mt-[2rem] 3xl:mt-[3rem]">
                    <div className="w-[3.5rem] h-[3.5rem] rounded-[50%] flex justify-center items-center overflow-hidden md:w-[4.5rem] md:h-[4.5rem] 1xl:w-[5rem] 1xl:h-[5rem] 2xl:w-[5.5rem] 2xl:h-[5.5rem] 3xl:w-[6rem] 3xl:h-[6rem]">
                      <img
                        src="/images/project-detail/mark-miller.webp"
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-[1] pl-[1rem] capitalize">
                      <h6 className="text-[1.1rem] md:text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.55rem] 3xl:text-[1.7rem]">
                        mark miller
                      </h6>
                      <p className="text-[0.9rem] md:text-[1.1rem] text-[#858585] 2xl:text-[1.2rem] 3xl:text-[1.25rem]">
                        GM Microsoft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;

const styles = {
  inputStyle:
    "bg-[#212121] border border-[#413F3F] text-[1.2rem] xl:text-[1.4rem] 1xl:text-[1.5rem] 3xl:text-[1.6rem] px-[1rem] py-[0.5rem] w-full h-[4.5rem] xl:h-[5rem] 1xl:h-[5.5rem] 2xl:h-[6rem] 3xl:h-[6.5rem] outline-none rounded-[0.7rem] 1xl:rounded-[1rem] 2xl:px-[2rem]",
  submitStyle:
    "bg-[#404040] border border-[#404040] text-[1.2rem] xl:text-[1.4rem] 1xl:text-[1.5rem] 3xl:text-[1.6rem] px-[1rem] py-[0.5rem] w-full h-[4.5rem] xl:h-[5rem] 1xl:h-[5.5rem] 2xl:h-[6rem] 3xl:h-[6.5rem] outline-none rounded-[0.7rem] 1xl:rounded-[1rem] 2xl:px-[2rem] hover:bg-black",
};
