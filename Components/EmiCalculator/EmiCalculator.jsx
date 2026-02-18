"use client";
import React, { useEffect, useRef, useState } from "react";

const EmiCalculator = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [carPrice, setCarPrice] = useState(4900000);
  const [downPaymentAmount, setDownPaymentAmount] = useState(
    Math.round((50 / 100) * 4900000)
  );
  const [downPaymentPercent, setDownPaymentPercent] = useState(50);
  const [annualInterest, setAnnualInterest] = useState(10);
  const [termPeriod, setTermPeriod] = useState(12);

  const [monthlyEmi, setMonthlyEmi] = useState(0);
  const [totalAmountToPay, setTotalAmountToPay] = useState(0);
  const [totalInterestToPay, setTotalInterestToPay] = useState(0);

  const downPaymentPercentChange = (e) => {
    setDownPaymentPercent(e.target.value);
    setDownPaymentAmount(Math.round((e.target.value / 100) * carPrice));
  };
  const annualInterestRateChange = (e) => {
    setAnnualInterest(e.target.value);
  };
  const termPeriodChange = (e) => {
    setTermPeriod(e.target.value);
  };

  const sliderOneRef = useRef();
  const sliderTwoRef = useRef();
  const sliderThreeRef = useRef();

  const textOneRef = useRef();
  const textTwoRef = useRef();
  const textThreeRef = useRef();

  useEffect(() => {
    const updateTextPosition = (value, min, max, textRef, sliderRef) => {
      if (textRef.current && sliderRef.current) {
        const percent = (value - min) / (max - min);
        const offset = percent * sliderRef.current.clientWidth;
        textRef.current.style.left = `${offset}px`;
      }
    };
    updateTextPosition(downPaymentPercent, 20, 80, textOneRef, sliderOneRef);
    updateTextPosition(annualInterest, 7, 15, textTwoRef, sliderTwoRef);
    updateTextPosition(termPeriod, 1, 84, textThreeRef, sliderThreeRef);
  }, [downPaymentPercent, annualInterest, termPeriod]);

  //   Calculate EMI
  useEffect(() => {
    const loanAmount = carPrice - downPaymentAmount;
    const monthlyInterestRate = annualInterest / (12 * 100); // Convert annual interest rate to a monthly interest rate
    const emi =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, termPeriod)) /
      (Math.pow(1 + monthlyInterestRate, termPeriod) - 1);
    const totalAmountToPay = emi * termPeriod;
    const totalInterestToPay = totalAmountToPay - loanAmount;
    setMonthlyEmi(emi.toFixed(2));
    setTotalAmountToPay(totalAmountToPay.toFixed(2));
    setTotalInterestToPay(totalInterestToPay.toFixed(2));
  }, [downPaymentAmount, annualInterest, termPeriod]);
  return (
    <section className="bg-[#F4F4F1] py-[6rem] lg:py-[8rem] xl:py-[9rem] 1xl:py-[10rem] 3xl:py-[13rem]">
      <div className="max-1920">
        <div className="max-w-[850px] mx-auto w-full overflow-hidden lg:w-[60%] xl:w-[50%] 3xl:max-w-[942px]">
          <h1 className="text-center font-extralight [&>b]:font-normal [&>strong]:font-normal px-[20px]">
            EMI <b>Calculator</b>
          </h1>
          <div className="mt-[2rem] lg:mt-[4rem]">
            <div className="px-[40px]">
              <div className={styles.inputWrapper}>
                <span className={styles.selectArrow}>
                  <img
                    src="images/dropdown-arrow-black.webp"
                    alt="Arrow"
                    className="w-full object-contain h-auto"
                  />
                </span>
                <select
                  name=""
                  id=""
                  className={styles.selectInput}
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option>Select Brand</option>
                  <option value="Aprilia">Aprilia</option>
                  <option value="Aston Martin">Aston Martin</option>
                  <option value="Audi">Audi</option>
                  <option value="BMW">BMW</option>
                  <option value="Cadillac">Cadillac</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Ducati">Ducati</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Honda">Honda</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Suzuki">Suzuki</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Volvo">Volvo</option>
                </select>
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.selectArrow}>
                  <img
                    src="images/dropdown-arrow-black.webp"
                    alt="Arrow"
                    className="w-full object-contain h-auto"
                  />
                </span>
                <select
                  name=""
                  id=""
                  className={styles.selectInput}
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                >
                  <option>Select Model</option>
                  <option value="Model A">Model A</option>
                  <option value="Model B">Model B</option>
                  <option value="Model C">Model C</option>
                  <option value="Model D">Model D</option>
                  <option value="Model E">Model E</option>
                  <option value="Model F">Model F</option>
                  <option value="Model G">Model G</option>
                  <option value="Model H">Model H</option>
                  <option value="Model I">Model I</option>
                </select>
              </div>

              <div className={styles.sliderBox}>
                <p className={styles.sliderLabel}>Down Payment (Minimum 20%)</p>
                <input
                  type="range"
                  name=""
                  id=""
                  min="20"
                  max="80"
                  step="1"
                  value={downPaymentPercent}
                  onChange={downPaymentPercentChange}
                  className="w-full emi-range"
                  ref={sliderOneRef}
                />
                <div className={styles.sliderText} ref={textOneRef}>
                  ₹ {downPaymentAmount}
                </div>
              </div>
              <div className={styles.sliderBox}>
                <p className={styles.sliderLabel}>Annual Interest Rate (%)</p>
                <input
                  type="range"
                  name=""
                  id=""
                  min="7"
                  max="15"
                  step="0.1"
                  value={annualInterest}
                  onChange={annualInterestRateChange}
                  className="w-full emi-range"
                  ref={sliderTwoRef}
                />
                <div className={styles.sliderText} ref={textTwoRef}>
                  {annualInterest}
                </div>
              </div>
              <div className={styles.sliderBox}>
                <p className={styles.sliderLabel}>Term/Period (Month)</p>
                <input
                  type="range"
                  name=""
                  id=""
                  min="1"
                  max="84"
                  step="1"
                  className="w-full emi-range"
                  value={termPeriod}
                  onChange={termPeriodChange}
                  ref={sliderThreeRef}
                />
                <div className={styles.sliderText} ref={textThreeRef}>
                  {termPeriod}
                </div>
              </div>

              <div className="bg-white mt-[4rem] py-[4rem] rounded-[1rem] px-[1rem] 3xl:py-[5rem] 1xl:rounded-[2rem] 3xl:rounded-[2.5rem]">
                <p className="flex justify-between items-center text-[1.2rem] 1xl:text-[1.3rem] 3xl:text-[1.5rem]">
                  <span className="inline-block text-right w-[60%] sm:w-[45%] xl:w-[48%]">
                    Total Interest Payment
                  </span>
                  <span className="inline-block text-left w-[35%] sm:w-[45%] xl:w-[40%]">
                    -₹{totalInterestToPay}
                  </span>
                </p>
                <p className="flex justify-between items-center text-[1.2rem] 1xl:text-[1.3rem] 3xl:text-[1.5rem] my-[1rem] xl:my-[2rem] 3xl:my-[3rem]">
                  <span className="inline-block text-right w-[60%] sm:w-[45%] xl:w-[48%]">
                    Total Amount to Pay
                  </span>
                  <span className="inline-block text-left w-[35%] sm:w-[45%] xl:w-[40%]">
                    -₹{totalAmountToPay}
                  </span>
                </p>
                <p className="flex justify-between items-center text-[1.5rem] 1xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[2rem] font-medium">
                  <span className="inline-block text-right w-[60%] sm:w-[45%] xl:w-[48%]">
                    EMI Monthly Payment
                  </span>
                  <span className="inline-block text-left w-[35%] sm:w-[45%] xl:w-[40%]">
                    -₹{monthlyEmi}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiCalculator;

const styles = {
  inputWrapper:
    "relative bg-white border border-[#CCCCCC] rounded-[0.7rem] h-[4.5rem] px-[0.5rem] mb-[1.5rem] 3xl:mb-[2.5rem] emi-select-box 1xl:h-[4.8rem] 2xl:h-[5.3rem] 3xl:h-[6.5rem] 1xl:rounded-[1rem]",
  selectInput:
    "w-full bg-transparent outline-none border-none h-full appearance-none px-[1rem] text-[1.4rem] relative z-10 1xl:text-[1.5rem] 2xl:text-[1.65rem] 3xl:text-[2rem]",
  selectArrow:
    "w-[1.5rem] 3xl:w-[1.9rem] h-full absolute top-0 right-[2rem] z-[1] inline-flex items-center justify-center",
  sliderBox:
    "relative pb-[2rem] mb-[1.5rem] xl:pb-[3rem] 3xl:pb-[3.5rem] xl:pt-[1rem] 3xl:pt-[2rem]",
  sliderText:
    "absolute bottom-0 transform -translate-x-1/2 text-[1.05rem] whitespace-nowrap font-medium xl:text-[1.4rem] 1xl:text-[1.5rem] 2xl:text-[1.7rem] 3xl:text-[2rem]",
  sliderLabel:
    "text-[1.4rem] xl:text-[1.3rem] 1xl:text-[1.35rem] 2xl:text-[1.4rem] 3xl:text-[1.5rem]",
};
