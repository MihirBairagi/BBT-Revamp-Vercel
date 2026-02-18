import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
    
      <section className="generic-main-section bg-white py-[6rem] md:py-[8rem] 2xl:py-[10rem] 3xl:py-[14rem]">
        <div className="max-1920">
          <div className="generic-content px-[20px] sm:px-[30px] md:px-[50px] xl:w-[59.5%] 1xl:w-[56.5%] 3xl:w-[60%] 3xl:max-w-[1035px] mx-auto">
            <h1 className="text-center font-extralight [&>b]:font-normal [&>strong]:font-normal">
              Cancellation & <b>Refunds</b>
            </h1>
            <div
              className={`mt-[3rem] xxl:mt-[4rem] 2xl:mt-[5rem] 3xl:mt-[7rem] ${styles.textStyles} ${styles.unorderedList}`}
            >
              <p>
                You have 2 calendar days to cancel and apply for refund from the
                date of booking.
              </p>{" "}
              <br />
              <p>
                <b>
                  You need to carry and submit your Token Invoice Number as
                  generated on{" "}
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    www.bigboytoyz.com
                  </a>{" "}
                  at the time of booking.
                </b>
              </p>
              <br />
              <br />
              <h2>
                <b>Refunds</b>
              </h2>{" "}
              <br />
              <p>
                Once we receive your cancellation order, we will inspect it and
                notify you in 7 days that we have verified and cancelled you
                booking.
              </p>
              <br />
              <p>
                If your cancellation is approved, we will initiate a refund to
                your credit card (or original method of payment) and the status
                of your refund would be posted to you via E-Mail as provided by
                you during the time of booking. You will receive the full credit
                within 30 Business Days once your cancellation has been
                confirmed.
              </p>
              <br />
              <p>
                The original receipt must be presented for processing the refund
                along with original Credit Card/Debit Card and Identity Proof as
                stated above.
              </p>
              <br />
              <p>
                You will not have the right to cancel your booking if any or
                both of the following instances hold true:
              </p>
              <br />
              <ul>
                <li>
                  <b>Cancellation post 48 Hours of Booking</b>
                </li>
                <li>
                  <b>
                    Failure to present the original receipt, original
                    debit/credit card or other proof of purchase.
                  </b>
                </li>
              </ul>
              <br />
              <p>
                <b>
                  Whom do I contact when I have problems at the time of booking,
                  alteration to my booking or cancellation of my booking?
                </b>
              </p>
              <br />
              <p>
                You can contact our BBT representative at{" "}
                <a className="underline underline-offset-4 decoration-1" href="tel:++919999999983"><b>+91 9999 9999 83</b></a> or Email us at{" "}
                <a className="underline underline-offset-4 decoration-1" href="mailto:support@bigboytoyz.com">
                  <b>support@bigboytoyz.com</b>
                </a>
              </p>
              <br />
              <br />
              <h2>
                <b>Disputes regarding cancellation & refund</b>
              </h2>
              <br />
              <p>
                Any dispute regarding the Cancellation & Refund Policy shall be
                subject to decision of Sole Arbitrator being appointed by Big
                Boy Toyz Pvt Ltd and the territorial jurisdiction shall only be
                in Delhi.
              </p>
            </div>
          </div>
        </div>
      </section>
   
    </>
  );
};

export default PrivacyPolicy;

const styles = {
  textStyles:
    "[&_h2]:text-[2.5rem] [&_h2]:leading-[1.2] [&_h2]:tracking-[-1px] xl:[&_h2]:text-[3rem] xl:[&_h2]:tracking-[-2px] xl:[&_h2]:tracking-[-1px] 1xl:[&_h2]:text-[3.3rem] 2xl:[&_h2]:text-[3.7rem] 3xl:[&_h2]:text-[4.5rem] 3xl:[&_h2]:tracking-[-2px] [&_h2]:font-light font-light text-[#080808]",
  unorderedList:
    "[&_li]:mb-[1rem] [&_li]:pl-[1.7rem] [&_li]:text-[1.2rem] [&_li]:relative [&_li]:before:content-[''] [&_li]:before:w-[1rem] [&_li]:before:h-[1rem] [&_li]:before:rounded-full [&_li]:before:border-[3px] [&_li]:before:border-[#4E4E4E] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.5rem]  xl:[&_li]:text-[1.35rem] 1xl:[&_li]:text-[1.45rem] 3xl:[&_li]:text-[2rem] 2xl:[&_li]:text-[1.6rem] 2xl:[&_li]:before:w-[1.2rem] 2xl:[&_li]:before:h-[1.2rem] 2xl:[&_li]:before:border-[3.5px] 2xl:[&_li]:pl-[2rem] 3xl:[&_li]:before:w-[1.5rem] 3xl:[&_li]:before:h-[1.5rem] 3xl:[&_li]:pl-[2.5rem] 3xl:[&_li]:mb-[2rem]",
};
