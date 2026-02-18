"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";

// Custom arrow components (same as ProductCard)
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
    onClick={onClick}
    type="button"
    aria-label="Next image"
  >
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
    onClick={onClick}
    type="button"
    aria-label="Previous image"
  >
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const FinanceSection = ({ carData }) => {
  // Use car price from props or fallback to default
  const carPrice = carData?.price
    ? parseFloat(carData.price.toString().replace(/,/g, "")) || 4900000
    : 4900000;

  const [currentCarPrice, setCurrentCarPrice] = useState(carPrice);
  const [downPaymentAmount, setDownPaymentAmount] = useState(
    Math.round((50 / 100) * carPrice)
  );
  const [downPaymentPercent, setDownPaymentPercent] = useState(50);
  const [annualInterest, setAnnualInterest] = useState(10); // in %
  const [termPeriod, setTermPeriod] = useState(60); // months, default 5 years
  const [monthlyEmi, setMonthlyEmi] = useState(0);
  const [totalAmountToPay, setTotalAmountToPay] = useState(0);
  const [totalInterestToPay, setTotalInterestToPay] = useState(0);

  // For Get More Info Popup
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = (e) => {
    e.preventDefault();
    setPopupOpen(!popupOpen);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, seIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      return alert("Please fill the required fields!");
    } else {
      const formData = { name, email, phone, message };
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      console.log(formData);
      seIsSubmitted(true);
    }
  };

  // Slider settings (same as ProductCard)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Get the first 5 images from the car data or use the fallback
  const getCarImages = () => {
    if (!carData?.images || carData.images.length === 0) {
      return [{ url: "/images/detail-page/detail-finance-thumb.webp" }];
    }

    // Get up to 5 images
    return carData.images.slice(0, 5);
  };

  // Update car price when carData changes
  useEffect(() => {
    if (carData?.price) {
      const newPrice =
        parseFloat(carData.price.toString().replace(/,/g, "")) || 4900000;
      setCurrentCarPrice(newPrice);
      setDownPaymentAmount(Math.round((downPaymentPercent / 100) * newPrice));
    }
  }, [carData?.price, downPaymentPercent]);

  const downPaymentPercentChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setDownPaymentPercent(val);
    setDownPaymentAmount(Math.round((val / 100) * currentCarPrice));
  };
  const annualInterestRateChange = (e) => {
    setAnnualInterest(parseFloat(e.target.value));
  };
  const termPeriodChange = (e) => {
    setTermPeriod(parseInt(e.target.value, 10));
  };

  //   Calculate EMI
  useEffect(() => {
    const loanAmount = Math.max(0, currentCarPrice - downPaymentAmount);
    const monthlyInterestRate = annualInterest / 1200; // annual% to monthly decimal

    let emi = 0;
    if (monthlyInterestRate === 0) {
      emi = loanAmount / termPeriod;
    } else {
      const factor = Math.pow(1 + monthlyInterestRate, termPeriod);
      emi = loanAmount * monthlyInterestRate * (factor / (factor - 1));
    }

    const totalAmountToPay = emi * termPeriod;
    const totalInterestToPay = totalAmountToPay - loanAmount;
    setMonthlyEmi(emi);
    setTotalAmountToPay(totalAmountToPay);
    setTotalInterestToPay(totalInterestToPay);
  }, [currentCarPrice, downPaymentAmount, annualInterest, termPeriod]);

  useEffect(() => {
    AOS.init();
  }, []);

  const formatIndian = (num) =>
    Number(num).toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <section
      className="bg-black py-24 lg:py-36 1xl:py-44 2xl:py-52 3xl:py-64"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      id="singleEmiCalculator"
    >
      <div className="max-1920">
        <div className="lg:flex lg:flex-row-reverse lg:items-center">
          <div className="px-10 sm:px-16 md:px-20 lg:w-40% lg:px-36 1xl:pr-44">
            <div className="text-center">
              <h2 className=" lg:font-normal text-white mb-10 lg:mb-5 lg:leading-tight xl:text-6xl 1xl:leading-1.3 1xl:text-7xl 1xl:tracking-tighter 3xl:text-[5.8rem] 3xl:mb-10">
                {" "}
                <span className="block font-light">Get Your Ride</span> Financed
                Today!
              </h2>
              <p className="text-zinc-500 text-1.6xl lg:text-xl 3xl:text-3xl">
                Easy and hassle free EMI options available.
              </p>
            </div>
            <div className="relative text-white text-center mx-auto px-5 py-8 mt-16 border border-[#ffffff80] rounded-[1rem] max-w-[24rem] lg:w-max lg:rounded-[0.6rem] lg:mt-10 lg:py-5 lg:px-8 xl:mt-12 3xl:mt-20 3xl:px-16 3xl:py-9 3xl:max-w-[40rem]">
              <p className="absolute w-max px-[1.5rem] left-[50%] top-[-1rem] translate-x-[-50%] text-xl bg-black lg:top-[-0.8rem] lg:text-base 3xl:text-1xl before:absolute before:content-[''] before:w-[5px] before:h-[5px] before:rounded-[50%] before:bg-[#ffffff80] before:top-[50%] before:translate-y-[-50%] before:left-0 after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-[50%] after:bg-[#ffffff80] after:top-[50%] after:translate-y-[-50%] after:right-0">
                EMI Starts @
              </p>
              <h5 className="lg:text-1xl xl:text-xl 1xl:text-2xl 3xl:text-3.5xl">
                ₹ {formatIndian(Math.round(monthlyEmi))}/-{" "}
                <span className="font-extralight">Per Month</span>
              </h5>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between flex-wrap items-center text-white mt-20 3xl:mt-24">
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  Down Payment
                </p>
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  ₹ {formatIndian(downPaymentAmount)}
                </p>
              </div>
              <div className="mt-8">
                {/* <RangeSlider
                  className="emiSlider"
                  value={downPaymentPercent}
                  onInput={setDownPaymentPercent}
                  step={1}
                  max={70}
                /> */}
                <input
                  type="range"
                  name=""
                  id=""
                  min="10"
                  max="90"
                  step="1"
                  className="w-full h-[3px] block emiSlider cursor-pointer"
                  value={downPaymentPercent}
                  onChange={downPaymentPercentChange}
                />
                <div className="relative overflow-hidden emiPercentBox h-[3rem] [&>span]:top-[1rem] [&>span]:text-[0.9rem] lg:[&>span]:text-[0.7rem] lg:[&>span]:pt-[0.7rem] 3xl:[&>span]:text-[1rem]">
                  <span className="absolute text-white font-light emiPercent leftOne left-0 lg:h-[4rem]">
                    10%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftTwo left-[14%]">
                    20%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftThree left-[28%]">
                    30%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftFour left-[41.5%]">
                    40%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftFive left-[55%] sm:left-[55.7%]">
                    50%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftSix left-[68.5%] sm:left-[69.5%]">
                    60%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftSeven left-[82%] sm:left-[83%]">
                    70%
                  </span>
                  <span className="absolute text-white font-light emiPercent leftEight left-[unset] right-0">
                    80%
                  </span>
                </div>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="mt-8 3xl:mt-12">
              <div className="flex justify-between flex-wrap items-center text-white">
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  Annual Interest Rate (%)
                </p>
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  {annualInterest}
                </p>
              </div>
              <div className="mt-8 mb-16 lg:mb-0 lg:mt-5">
                <input
                  type="range"
                  name=""
                  id=""
                  min="6"
                  max="15"
                  step="0.1"
                  className="w-full h-[3px] block emiSlider cursor-pointer"
                  value={annualInterest}
                  onChange={annualInterestRateChange}
                />
              </div>
            </div>

            {/* Term Period Slider */}
            <div className="mt-10 3xl:mt-12">
              <div className="flex justify-between flex-wrap items-center text-white ">
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  Term/Period (Month)
                </p>
                <p className="text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
                  {termPeriod}
                </p>
              </div>
              <div className="mt-8 mb-16 lg:mb-0 lg:mt-5">
                <input
                  type="range"
                  name=""
                  id=""
                  min="1"
                  max="84"
                  step="1"
                  className="w-full h-[3px] block emiSlider cursor-pointer"
                  value={termPeriod}
                  onChange={termPeriodChange}
                />
              </div>
            </div>

            <div className=" mt-10 hidden sm:text-center lg:block 1xl:mt-14 3xl:mt-20">
              <button className="btn btnWhite roundedBtn" onClick={togglePopup}>
                Get More Details
              </button>
            </div>
          </div>
          
          {/* Desktop Car Images */}
          <div className="hidden lg:block w-full lg:w-60% lg:pl-40 1xl:pl-52 1xl:pr-5 3xl:pl-64">
            <div className="relative">
              <Slider {...sliderSettings} className="collection-gallery-slider">
                {getCarImages().map((image, index) => (
                  <div key={index} className="relative pt-2">
                    <img
                      src={
                        image.url ||
                        "/images/detail-page/detail-finance-thumb.webp"
                      }
                      alt={`Car Image ${index + 1}`}
                      className="w-full object-cover block h-full "
                      width="965"
                      height="644"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="px-8 mt-16 sm:text-center lg:hidden">
          <button className="btn btnWhite roundedBtn" onClick={togglePopup}>
            Get More Details
          </button>
        </div>
      </div>

      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
    </section>
  );
};

export default FinanceSection;
