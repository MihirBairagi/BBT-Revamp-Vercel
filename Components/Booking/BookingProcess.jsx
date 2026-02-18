"use client";
import React, { useState, useEffect } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import { paymentsAPI } from "../../app/lib/services/api";

const BookingProcess = ({ carData }) => {
  const [bookingType, setBookingType] = useState("type-1");
  const [openInfoPopup, setOpenInfoPopup] = useState(false);
  const [openPaymentPopup, setOpenPaymentPopup] = useState(false);
  const [popupContentType, setPopupContentType] = useState("type-1");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cardType, setCardType] = useState("visa");

  // Payment states
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSessionId, setPaymentSessionId] = useState(null);
  const [cashfree, setCashfree] = useState(null);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showPaymentError, setShowPaymentError] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");

  // Initialize Cashfree SDK
  useEffect(() => {
    const initializeCashfree = async () => {
      try {
        const cfInstance = await load({
          mode:
            process.env.NODE_ENV === "production" ? "production" : "sandbox",
        });
        setCashfree(cfInstance);
      } catch (error) {
        console.error("Failed to initialize Cashfree SDK:", error);
      }
    };

    initializeCashfree();
  }, []);

  const handleCloseInfoPopup = () => {
    setOpenInfoPopup(false);
  };
  const handleClosePaymentPopup = () => {
    setOpenPaymentPopup(false);
  };

  // Get booking amount based on booking type
  const getBookingAmount = () => {
    if (!carData?.price) return "200000";

    const carPrice = parseFloat(carData.price.replace(/,/g, ""));

    switch (bookingType) {
      case "type-1":
        return "200000"; // 2 lacs
      case "type-2":
        return Math.floor(carPrice * 0.1).toString(); // 10% of car price
      case "type-3":
        return Math.floor(carPrice).toString(); // Full amount
      default:
        return "200000";
    }
  };

  // Get formatted amount for display
  const getFormattedAmount = (type = bookingType) => {
    if (!carData?.price) return "₹2,00,000";

    const carPrice = parseFloat(carData.price.replace(/,/g, ""));

    switch (type) {
      case "type-1":
        return "₹2,00,000"; // 2 lacs
      case "type-2":
        const tenPercent = Math.floor(carPrice * 0.1);
        return `₹${tenPercent.toLocaleString("en-IN")}`; // 10% of car price
      case "type-3":
        return `₹${Math.floor(carPrice).toLocaleString("en-IN")}`; // Full amount
      default:
        return "₹2,00,000";
    }
  };

  // Handle payment processing
  const handlePaymentProcess = async () => {
    if (!name || !phone || !email) {
      alert("Please fill in all required fields");
      return;
    }

    if (!cashfree) {
      alert("Payment system is not ready. Please try again in a moment.");
      return;
    }

    setIsProcessingPayment(true);
    setPaymentMessage("");

    try {
      const orderData = {
        amount: getBookingAmount(),
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        customerAddress: address,
        productId: carData?.id || carData?._id,
        productName: carData?.title || "Car Booking",
        bookingType: bookingType,
      };

      const response = await paymentsAPI.createOrder(orderData);

      if (response.success) {
        const { sessionId, orderId } = response.data;
        setPaymentSessionId(sessionId);

        // Initiate Cashfree payment
        const checkoutOptions = {
          paymentSessionId: sessionId,
          redirectTarget: "_self",
        };

        await cashfree.checkout(checkoutOptions);

        // The payment process will redirect to success/failure pages
        // We'll handle verification in the success page
      } else {
        setPaymentMessage(response.message || "Failed to create order");
        setShowPaymentError(true);
      }
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentMessage("Payment failed. Please try again.");
      setShowPaymentError(true);
    } finally {
      setIsProcessingPayment(false);
    }
  };
  return (
    <>
      <div>
        <p className="font-medium text-[1.5rem] 1xl:text-[1.7rem] 2xl:text-[1.85rem] 2xl:tracking-tighter 3xl:text-[2.2rem] 3xl:tracking-tight">
          Please select how you'd like to reserve your car.
        </p>

        <ul className="grid grid-cols-2 gap-x-[1rem] gap-y-[2rem] mt-[2rem] xl:grid-cols-3 xl:gap-x-[4rem] 1xl:gap-x-[5rem] 3xl:mt-[3rem] 3xl:gap-x-[6rem]">
          <li
            className={`${styles.bookingTypeItem} ${
              bookingType === "type-1"
                ? " bg-[#EF3024] shadow-lg shadow-[#fd867e] text-white"
                : " bg-white text-black"
            }`}
            onClick={() => setBookingType("type-1")}
          >
            {bookingType === "type-1" ? (
              <img
                src="/images/booking/tick-icon.webp"
                alt="Tick icon"
                className={styles.processTickIcon}
              />
            ) : (
              <span className={styles.processCheckbox}></span>
            )}
            <p className={styles.processLabel}>
              Pay 2 Lacs & Reserve Car for 24 hrs
            </p>
            <div
              className={`${styles.bookingTypeInfo} ${
                bookingType === "type-1" ? " bg-[#FF928B]" : " bg-[#EAEAE7]"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setOpenInfoPopup(true);
                setPopupContentType("type-1");
              }}
            >
              <img
                src="/images/booking/info-icon.webp"
                alt="Info"
                className="w-full h-full object-contain"
              />
            </div>
          </li>
          <li
            className={`${styles.bookingTypeItem} ${
              bookingType === "type-2"
                ? " bg-[#EF3024] shadow-lg shadow-[#fd867e] text-white"
                : " bg-white text-black"
            }`}
            onClick={() => setBookingType("type-2")}
          >
            {bookingType === "type-2" ? (
              <img
                src="/images/booking/tick-icon.webp"
                alt="Tick icon"
                className={styles.processTickIcon}
              />
            ) : (
              <span className={styles.processCheckbox}></span>
            )}
            <p className={styles.processLabel}>
              Pay 10% & Get Confirmed Booking
            </p>
            <div
              className={`${styles.bookingTypeInfo} ${
                bookingType === "type-2" ? " bg-[#FF928B]" : " bg-[#EAEAE7]"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setOpenInfoPopup(true);
                setPopupContentType("type-2");
              }}
            >
              <img
                src="/images/booking/info-icon.webp"
                alt="Info"
                className="w-full h-full object-contain"
              />
            </div>
          </li>
          <li
            className={`${styles.bookingTypeItem} ${
              bookingType === "type-3"
                ? " bg-[#EF3024] shadow-lg shadow-[#fd867e] text-white"
                : " bg-white text-black"
            }`}
            onClick={() => setBookingType("type-3")}
          >
            {bookingType === "type-3" ? (
              <img
                src="/images/booking/tick-icon.webp"
                alt="Tick icon"
                className={styles.processTickIcon}
              />
            ) : (
              <span className={styles.processCheckbox}></span>
            )}
            <p className={styles.processLabel}>
              Pay 100% & Get Car Delivered Home
            </p>
            <div
              className={`${styles.bookingTypeInfo} ${
                bookingType === "type-3" ? " bg-[#FF928B]" : " bg-[#EAEAE7]"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setOpenInfoPopup(true);
                setPopupContentType("type-3");
              }}
            >
              <img
                src="/images/booking/info-icon.webp"
                alt="Info"
                className="w-full h-full object-contain"
              />
            </div>
          </li>
        </ul>

        <div className="mt-[4rem] 3xl:mt-[6rem]">
          <button
            className={styles.reserveButton}
            onClick={() => {
              setPopupContentType(bookingType);
              setOpenPaymentPopup(true);
            }}
          >
            Reserve This Car
          </button>
        </div>
      </div>
      {openInfoPopup && (
        <div className="fixed z-100 overflow-y-auto top-0 w-full h-full left-0 flex flex-col justify-center items-center px-[20px]">
          <div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] z-[2]"
            onClick={handleCloseInfoPopup}
          ></div>
          <div className="bg-white px-[2rem] py-[4rem] w-full max-h-[90vh] relative z-10 rounded-[1rem] max-w-[900px] sm:w-[85%] lg:w-[60%] xl:w-[48%] xl:py-[5rem] xl:px-[6rem] xl:rounded-[3rem] 2xl:py-[6rem] 3xl:py-[8rem]">
            <span
              className="absolute top-[1.5rem] right-[1.5rem] w-[1.5rem] h-[1.5rem] flex justify-center items-center cursor-pointer xl:top-[2.5rem] xl:right-[2.5rem] 2xl:w-[1.8rem] 2xl:h-[1.8rem] 3xl:w-[1.9rem] 3xl:h-[1.9rem] 3xl:top-[3.5rem] 3xl:right-[3.5rem]"
              onClick={handleCloseInfoPopup}
            >
              <img
                src="/images/booking/close-popup-icon.webp"
                alt="Close"
                className="w-full object-contain"
              />
            </span>
            <div className="w-full h-full overflow-y-auto">
              <div className="w-[7rem] h-[7rem] p-[1.5rem] border border-[#969696] rounded-full mx-auto xl:w-[12rem] xl:h-[12rem] xl:p-[3rem] 2xl:w-[14.5rem] 2xl:h-[14.5rem] 2xl:p-[4rem] 3xl:w-[18rem] 3xl:h-[18rem]">
                <img
                  src="/images/booking/mobile-icon.webp"
                  alt="Mobile Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-[#040404] text-center mt-[2rem] xl:mt-[4rem]">
                <h3 className="font-light [&>b]:font-medium text-[2.5rem] xl:text-[2.9rem] xl:tracking-tighter 2xl:text-[3.5rem] 3xl:text-[4.5rem] leading-[1.2]">
                  {popupContentType === "type-1" && (
                    <>
                      Pay {getFormattedAmount("type-1")} &{" "}
                      <b> Reserve Car for 24 hrs</b>
                    </>
                  )}
                  {popupContentType === "type-2" && (
                    <>
                      Pay {getFormattedAmount("type-2")} &{" "}
                      <b> Get Confirmed Booking</b>
                    </>
                  )}
                  {popupContentType === "type-3" && (
                    <>
                      Pay {getFormattedAmount("type-3")} &{" "}
                      <b> Get Car Delivered Home</b>
                    </>
                  )}
                </h3>
                <p className="text-[1.5rem] font-light my-[1rem] xl:text-[1.8rem] 1xl:tracking-tighter 1xl:text-[2rem] 2xl:text-[2.3rem] 3xl:text-[3rem]">
                  {popupContentType === "type-1" && (
                    <>We will reserve your dream car for the next 24 hours.</>
                  )}
                  {popupContentType === "type-2" && (
                    <>We will confirm your booking.</>
                  )}
                  {popupContentType === "type-3" && (
                    <> Get ready to unbox your dream car at your doorsteps</>
                  )}
                </p>
                <p className="text-[1.2rem] font-light xl:text-[1.4rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem] 1xl:w-[84%] 1xl:mx-auto 3xl:w-[81%]">
                  {popupContentType === "type-1" && (
                    <>
                      All you need to do is pay 2 lacs now & you can come back
                      and purchase the car anytime within the period. In case
                      you fail to purchase the car, we will refund the payment.
                    </>
                  )}
                  {popupContentType === "type-2" && (
                    <>
                      All you need to do is pay 10% of the total amount and you
                      can make the rest of the payment at a later stage and the
                      car will be yours!
                    </>
                  )}
                  {popupContentType === "type-3" && (
                    <>
                      All you need to do is pay 100% amount and you will get a
                      call from our sales representative for information on TCS,
                      Insurance, RC Transfer and Logistic charge!
                    </>
                  )}
                </p>
                <div className="mt-[2rem] 1xl:mt-[3rem]">
                  <button
                    className={styles.popupButton}
                    onClick={() => {
                      setBookingType(popupContentType);
                      handleCloseInfoPopup();
                      setOpenPaymentPopup(true);
                    }}
                  >
                    OK Got it! Reserve Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openPaymentPopup && (
        <div className="fixed z-100 overflow-y-auto top-0 w-full h-full left-0 flex flex-col justify-center items-center px-[20px]">
          <div
            className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] z-[2]"
            onClick={handleClosePaymentPopup}
          ></div>
          <div className="bg-white px-[2rem] py-[4rem] w-full max-h-[90vh] relative z-10 rounded-[1rem] max-w-[750px] sm:w-[85%] lg:w-[60%] xl:w-[48%] xl:py-[4rem] xl:px-[4.5rem] xl:rounded-[3rem] 2xl:py-[4.5rem]">
            <span
              className="absolute top-[1.5rem] right-[1.5rem] w-[1.5rem] h-[1.5rem] flex justify-center items-center cursor-pointer xl:top-[2.5rem] xl:right-[2.5rem] 2xl:w-[1.8rem] 2xl:h-[1.8rem] 3xl:w-[1.9rem] 3xl:h-[1.9rem] 3xl:top-[3.5rem] 3xl:right-[3.5rem]"
              onClick={handleClosePaymentPopup}
            >
              <img
                src="/images/booking/close-popup-icon.webp"
                alt="Close"
                className="w-full object-contain"
              />
            </span>
            <div className="w-full h-full overflow-y-auto">
              <div>
                <h3 className="font-light [&>b]:font-medium text-[2.5rem] xl:text-[2.5rem] xl:tracking-tighter 2xl:text-[2.8rem] 3xl:text-[3.2rem] leading-[1.2]">
                  {popupContentType === "type-1" && (
                    <>
                      Pay {getFormattedAmount("type-1")} &{" "}
                      <b> Reserve Car for 24 hrs</b>
                    </>
                  )}
                  {popupContentType === "type-2" && (
                    <>
                      Pay {getFormattedAmount("type-2")} &{" "}
                      <b> Get Confirmed Booking</b>
                    </>
                  )}
                  {popupContentType === "type-3" && (
                    <>
                      Pay {getFormattedAmount("type-3")} &{" "}
                      <b> Get Car Delivered Home</b>
                    </>
                  )}
                </h3>
                <p className="text-[1.5rem] font-light my-[1rem] xl:text-[1.8rem] 1xl:tracking-tighter 2xl:text-[2rem] 3xl:text-[2.5rem]">
                  {popupContentType === "type-1" && (
                    <>We will reserve your dream car for the next 24 hours.</>
                  )}
                  {popupContentType === "type-2" && (
                    <>We will confirm your booking.</>
                  )}
                  {popupContentType === "type-3" && (
                    <> Get ready to unbox your dream car at your doorsteps</>
                  )}
                </p>
                <p className="text-[1.2rem] font-light xl:text-[1.4rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]">
                  Just a few steps away from making your dream car a reality!
                  Fill in a few details and we can begin the reservation…
                </p>

                <div>
                  <div className="flex flex-wrap justify-between">
                    <div className={styles.popupInputWrapper}>
                      <input
                        type="text"
                        className={styles.popupInput}
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className={styles.popupInputWrapper}>
                      <input
                        type="tel"
                        className={styles.popupInput}
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between">
                    <div className={styles.popupInputWrapper}>
                      <input
                        type="email"
                        className={styles.popupInput}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className={styles.popupInputWrapper}>
                      <input
                        type="text"
                        className={styles.popupInput}
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-[3rem] 1xl:mt-[4rem] text-center">
                    <h6 className="text-[1.9rem] font-medium">Payment Options</h6>
                    <p className="flex items-center justify-center text-[1.9rem]">
                      <img src="images/booking/lock-icon-black.png" alt="" className="object-contain w-[15px] h-[21px] inline-block mr-[5px]" />
                      100% Secure Payment By:
                    </p>
                    <img src="images/booking/cards-group.png" alt="Cards" className="object-contain inline-block mt-[1rem] max-h-[27px]" />
                    <p className="text-[1.2rem] font-medium text-gray-600 mt-[1rem]">Payment Gateway charges will apply</p>
                  </div>
                 
                  

                  <div className="mt-[3rem] 1xl:mt-[4rem]">
                    <button
                      className={styles.popupButton}
                      onClick={handlePaymentProcess}
                      disabled={isProcessingPayment}
                    >
                      {isProcessingPayment ? "Processing..." : "Reserve Now"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingProcess;

const styles = {
  bookingTypeItem:
    "flex items-center rounded-[1rem] px-[1rem] py-[2rem] min-h-[5rem] cursor-pointer relative overflow-hidden xl:pl-[1.5rem] xl:pr-[2.5rem] xl:py-[1.5rem] 1xl:py-[1.7rem] 1xl:rounded-[1.4rem] 2xl:py-[1.9rem] 3xl:py-[2.4rem]",
  bookingTypeInfo:
    "absolute bottom-0 right-0 w-[2.5rem] h-[2.8rem] flex justify-center items-center p-[0.7rem] cursor-pointer rounded-tl-[1rem] xl:w-[2.9rem] xl:h-[3.1rem] xl:p-[0.9rem] 2xl:p-[1rem] 1xl:w-[3.1rem] 1xl:h-[3.5rem] 1xl:rounded-tl-[1.5rem] 2xl:w-[3.4rem] 2xl:h-[3.8rem] 3xl:w-[4.5rem] 3xl:h-[4.7rem] 3xl:p-[1.2rem]",
  reserveButton:
    "flex justify-center items-center text-center bg-black text-white outline-none border-black px-[2rem] py-[1.5rem] h-[4.5rem] transition-all duration-500 hover:bg-[#222222] w-full font-medium text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem] rounded-[0.7rem] 1xl:rounded-[1rem] cursor-pointer 1xl:h-[5.3rem] 2xl:h-[6rem] 3xl:h-[7rem]",
  popupButton:
    "flex justify-center items-center text-center bg-black text-white outline-none border-black px-[3rem] py-[1.5rem] h-[4.3rem] transition-all duration-500 hover:bg-[#222222] w-full xl:px-[4rem] font-medium text-[1.25rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] rounded-[8px] cursor-pointer  mx-auto 1xl:h-[4.6rem] 2xl:h-[5rem] 3xl:h-[5.5rem]",
  processLabel:
    "text-[1.2rem] 1xl:text-[1.35rem] 3xl:text-[1.8rem] font-[700] flex-[1] pl-[1rem]",
  processCheckbox:
    "w-[1.7rem] h-[1.7rem] xl:w-[2rem] xl:h-[2rem] 1xl:w-[2.4rem] 1xl:h-[2.4rem] 2xl:w-[2.7rem] 2xl:h-[2.7rem] 3xl:w-[3.2rem] 3xl:h-[3.2rem] rounded-full bg-[#F4F4F1]",
  processTickIcon:
    "h-auto object-contain w-[1.7rem] xl:w-[2rem] 1xl:w-[2.4rem] 2xl:w-[2.7rem] 3xl:w-[3.2rem]",
  popupInputWrapper: "w-full sm:w-[48%] mt-[2rem]",
  popupInput:
    "w-full border border-[#CCCCCC] outline-none text-[1.4rem] h-[4.5rem] rounded-[0.7rem] px-[1.5rem] 1xl:h-[48px] 2xl:h-[50px]  1xl:text-[1.6rem] 2xl:text-[1.7rem] 3xl:text-[2rem] 3xl:h-[53px] 1xl:rounded-[1rem]",
};
