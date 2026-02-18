import React from "react";

const Disclaimer = () => {
  return (
    <>
      <section className="generic-main-section bg-white py-[6rem] md:py-[8rem] 2xl:py-[10rem] 3xl:py-[14rem]">
        <div className="max-1920">
          <div className="generic-content px-[20px] sm:px-[30px] md:px-[50px] xl:w-[59.5%] 1xl:w-[56.5%] 3xl:w-[60%] 3xl:max-w-[1035px] mx-auto">
            <h1 className="text-center font-extralight [&>b]:font-normal [&>strong]:font-normal">
              <b>Disclaimer</b>
            </h1>
            <div
              className={`mt-[3rem] xxl:mt-[4rem] 2xl:mt-[5rem] 3xl:mt-[7rem] ${styles.textStyles} ${styles.unorderedList}`}
            >
              <p>
                By accessing this website, you agree to the terms of use
                stated below:
              </p>
              <br />
              <p>
                That all information and material on this website are solely
                for informational purposes only. All images (other than actual
                images) are merely the architect&apos;s impression and are only
                indicative of the envisaged developments. The Company reserves
                the right to change or withdraw this information without any
                prior notice.
              </p>
              <br />
              <p>
                Nothing on this website constitutes a legal offering on the
                Company&apos;s part and any buyer of any unit in the project shall
                be governed solely by the terms of the Allotment/Agreement for
                sale or sub-lease to be executed with the buyer and the Company.
              </p>
              <br />
              <p>
                The visitor acknowledges that the content on this site is for
                general informational purposes and does not constitute advice
                of any kind.
              </p>
              <br />
              <p>
                Images used throughout the site (unless stated otherwise) are
                conceptual and for illustrative purposes only.
              </p>
              <br />
              <h2>
                <b>Contact Information</b>
              </h2>
              <br />
              <p>
                If you have any questions regarding this disclaimer, you may
                contact us at:
              </p>
              <br />
              <p>
                <b>
                  Plot No. 134, Sector 37, Pace City 1, Gurgaon <br /> Haryana, 122001, India
                </b>
              </p>
              <br />
              <p>
                <a href="mailto:realty@bigboytoyz.com">
                  <b>realty@bigboytoyz.com</b>
                </a>
              </p>
              <br />
              <p>
                <a href="tel:+919999999030">
                  <b>+91 99999 990 30</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Disclaimer;

const styles = {
  textStyles:
    "[&_h2]:text-[2.5rem] [&_h2]:leading-[1.2] [&_h2]:tracking-[-1px] xl:[&_h2]:text-[3rem] xl:[&_h2]:tracking-[-2px] xl:[&_h2]:tracking-[-1px] 1xl:[&_h2]:text-[3.3rem] 2xl:[&_h2]:text-[3.7rem] 3xl:[&_h2]:text-[4.5rem] 3xl:[&_h2]:tracking-[-2px] [&_h2]:font-light font-light text-[#080808]",
  unorderedList:
    "[&_li]:mb-[1rem] [&_li]:pl-[1.7rem] [&_li]:text-[1.2rem] [&_li]:relative [&_li]:before:content-[''] [&_li]:before:w-[1rem] [&_li]:before:h-[1rem] [&_li]:before:rounded-full [&_li]:before:border-[3px] [&_li]:before:border-[#4E4E4E] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.5rem] xl:[&_li]:text-[1.35rem] 1xl:[&_li]:text-[1.45rem] 3xl:[&_li]:text-[2rem] 2xl:[&_li]:text-[1.6rem] 2xl:[&_li]:before:w-[1.2rem] 2xl:[&_li]:before:h-[1.2rem] 2xl:[&_li]:before:border-[3.5px] 2xl:[&_li]:pl-[2rem] 3xl:[&_li]:before:w-[1.5rem] 3xl:[&_li]:before:h-[1.5rem] 3xl:[&_li]:pl-[2.5rem] 3xl:[&_li]:mb-[2rem]",
};

