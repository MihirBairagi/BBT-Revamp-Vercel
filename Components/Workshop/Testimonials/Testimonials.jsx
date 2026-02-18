"use client";
import React, { useState } from "react";
import { submitForm } from "../../../app/lib/services/api";
import moment from "moment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const styles = {
  inputField:
    "bg-transparent block w-full border border-[#111111] rounded-[0.5rem] md:rounded-[0.7rem] px-[2rem] py-[1.5rem] text-[1.2rem] xl:text-[1.3rem] xl:py-[1.5rem] 1xl:py-[1.8rem] xl:px-[2.5rem] 3xl:px-[3rem] 3xl:py-[2.5rem] 3xl:text-[1.65rem] outline-none",
};

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <img
        src="/images/curve-slide-prev.webp"
        alt="Next Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={`curve-slider-arrow ${className}`} onClick={onClick}>
      <img
        src="/images/curve-slide-prev.webp"
        alt="Previous Slide"
        width="70"
        height="225"
      />
    </div>
  );
}

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: false,
        dots: true
      }
    },

  ]
};

const Testimonials = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setDate(newDate);
  };

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await submitForm({ formType: "workshop_visit", data: { name, email, phone, date } });
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      alert("Thanks! We will contact you soon.");
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F4F4F1] py-[5rem] sm:py-[8rem] xl:py-[12rem] 2xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="hidden xl:block xl:w-[49%]">
            <h3 className="titleWithLine mobileLine">
              <span className="bg-[#F4F4F1] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[3rem] xl:pr-[4rem] 1xl:text-[3.7rem] 3xl:text-[4.5rem]">
                Testimonials
              </span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-between mx-auto max-w-[600px] xl:max-w-full">
            <div className="w-full mb-[9rem] md:mb-[12rem] pt-[2rem] xl:mb-0 xl:w-[60%] xl:pt-[5rem] 3xl:pt-[8rem]">
              <h2 className="font-light leading-[1.4] text-center mt-[1rem] [&>br]:hidden md:[&>br]:block xl:text-left xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
                We know the pulse <br /> of <b>each luxury</b>
              </h2>
              <div className="mt-[3rem] md:mt-[5rem] 3xl:mt-[7rem]">
                <Slider className="workshop-testimonial-slider" {...settings}>
                  <div>
                    <div className="pl-[3rem] md:pl-[5rem] 3xl:pl-[7rem] xl:max-w-[40rem] 1xl:max-w-[44rem] 2xl:max-w-[47rem] 3xxl:max-w-[59rem] relative">
                      <img
                        src="/images/workshop/testimonial-quote.webp"
                        alt="Quote Icon"
                        className="absolute left-0 top-0 h-auto object-contain w-[2rem] md:w-[2.19rem] mt-[0.5rem] xl:w-[3rem] 3xl:w-[4.3rem]"
                      />
                      <p className="text-[1.2rem] font-normal mt-[1rem] md:text-[1.4rem] xl:text-[1.85rem] leading-[1.5] 1xl:text-[2.05rem] 2xl:text-[2.2rem] 3xl:text-[2.8rem]">
                        I had a great experience at this service center and
                        great experence with guys jobs. That's the reason that
                        you are trust by the elites.
                      </p>
                      <div className="flex items-center mt-[3rem] 3xl:mt-[5rem]">
                        <div className="w-[4.5rem] h-[4.5rem] rounded-[50%] overflow-hidden 1xl:w-[6rem] 1xl:h-[6rem] 2xl:w-[7rem] 2xl:h-[7rem] 3xl:w-[8.5rem] 3xl:h-[8.5rem] mr-[2rem]">
                          <img
                            src="/images/workshop/testimonial-avatar.webp"
                            alt="Avatar"
                            className="w-full object-cover h-auto"
                          />
                        </div>
                        <div>
                          <h6 className="text-[1.5rem] xl:text-[1.7rem] 1xl:text-[1.9rem] 3xl:text-[2.5rem] font-[500]">
                            Abhimanyu Bhattacharya
                          </h6>
                          <p className="text-[1.5rem] xl:text-[1.7rem] 1xl:text-[1.9rem] 3xl:text-[2.5rem] font-[300]">
                            BMW
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                  <div className="pl-[3rem] md:pl-[5rem] 3xl:pl-[7rem] xl:max-w-[40rem] 1xl:max-w-[44rem] 2xl:max-w-[47rem] 3xxl:max-w-[59rem] relative">
                      <img
                        src="/images/workshop/testimonial-quote.webp"
                        alt="Quote Icon"
                        className="absolute left-0 top-0 h-auto object-contain w-[2rem] md:w-[2.19rem] mt-[0.5rem] xl:w-[3rem] 3xl:w-[4.3rem]"
                      />
                      <p className="text-[1.2rem] font-normal mt-[1rem] md:text-[1.4rem] xl:text-[1.85rem] leading-[1.5] 1xl:text-[2.05rem] 2xl:text-[2.2rem] 3xl:text-[2.8rem]">
                        I had a great experience at this service center and
                        great experence with guys jobs. That's the reason that
                        you are trust by the elites.
                      </p>
                      <div className="flex items-center mt-[3rem] 3xl:mt-[5rem]">
                        <div className="w-[4.5rem] h-[4.5rem] rounded-[50%] overflow-hidden 1xl:w-[6rem] 1xl:h-[6rem] 2xl:w-[7rem] 2xl:h-[7rem] 3xl:w-[8.5rem] 3xl:h-[8.5rem] mr-[2rem]">
                          <img
                            src="/images/workshop/testimonial-avatar.webp"
                            alt="Avatar"
                            className="w-full object-cover h-auto"
                          />
                        </div>
                        <div>
                          <h6 className="text-[1.5rem] xl:text-[1.7rem] 1xl:text-[1.9rem] 3xl:text-[2.5rem] font-[500]">
                            Abhimanyu Bhattacharya
                          </h6>
                          <p className="text-[1.5rem] xl:text-[1.7rem] 1xl:text-[1.9rem] 3xl:text-[2.5rem] font-[300]">
                            BMW
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="w-full xl:w-[40%]">
              <div className="bg-white p-[2rem] md:p-[4rem] rounded-[1rem] lg:mt-[-2rem] xl:mt-[-3rem] 1xl:p-[6rem] 3xl:mt-[-4rem] 3xl:px-[8rem] 3xl:py-[7rem] 3xl:rounded-[1.5rem]">
                <h2 className="font-light leading-[1.4] mt-[1rem] [&>br]:hidden md:[&>br]:block text-center xl:text-left xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
                  Schedule <b>A Visit!</b>
                </h2>
                <form
                  className="w-full block mt-[4rem] 3xl:mt-[6rem]"
                  onSubmit={handleSubmit}
                >
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <input
                      type="text"
                      required
                      placeholder="Your Name*"
                      className={styles.inputField}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <input
                      type="tel"
                      required
                      placeholder="Phone No*"
                      className={styles.inputField}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <input
                      type="email"
                      required
                      placeholder="Email Address*"
                      className={styles.inputField}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <input
                      type="date"
                      required
                      placeholder="Select Date*"
                      className={styles.inputField}
                      value={date}
                      onChange={onChangeDate}
                    />
                  </div>
                  <div className="mt-[1.5rem] 3xl:mt-[2rem]">
                    <button
                      type="submit"
                      className="bg-black text-white text-center w-full border border-black cursor-pointer px-[3rem] py-[1.5rem] text-[1.5rem] xl:text-[1.4rem] xl:py-[1.7rem] 3xl:text-[1.9rem] 3xl:py-[2.4rem] rounded-[0.7rem] hover:bg-transparent hover:text-black transition-all duration-500"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Book Now"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
