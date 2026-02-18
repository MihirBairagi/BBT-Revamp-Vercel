import React from "react";

const TermsAndConditions = () => {
  return (
    <>
      <section className="generic-main-section bg-white py-[6rem] md:py-[8rem] 2xl:py-[10rem] 3xl:py-[14rem]">
        <div className="max-1920">
          <div className="generic-content px-[20px] sm:px-[30px] md:px-[50px] xl:w-[59.5%] 1xl:w-[56.5%] 3xl:w-[60%] 3xl:max-w-[1035px] mx-auto">
            <h1 className="text-center font-extralight [&>b]:font-normal [&>strong]:font-normal">
              Terms Of <b>Use</b>
            </h1>
            <div className={`mt-[3rem] xxl:mt-[4rem] 2xl:mt-[5rem] 3xl:mt-[7rem] ${styles.textStyles} ${styles.unorderedList}`}>
              <h2>
                <b>Overview</b>
              </h2>
              <br />
              <p>
                This website is operated by Big Boy Toyz Pvt Ltd. <b>Throughout the
                site, the terms &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to Big Boy Toyz Pvt
                Ltd. Big Boy Toyz Pvt Ltd offers this website, including all
                information, tools and services available from this site to you,
                the user, conditioned upon your acceptance of all terms,
                conditions, policies and notices stated here.</b>
              </p>
              <br />
              <p>
                By visiting our site and/ or purchasing something from us, you
                engage in our &quot;Service&quot; and agree to be bound by the following
                terms and conditions (&quot;Terms of Service&quot;, &quot;Terms&quot;), including
                those additional terms and conditions and policies referenced
                herein and/or available by hyperlink. These Terms of Service
                apply to all users of the site, including without limitation
                users who are browsers, vendors, customers, merchants, and/ or
                contributors of content.
              </p>
              <br />
              <p>
                Please read these Terms of Service carefully before accessing or
                using our website. By accessing or using any part of the site,
                you agree to be bound by these Terms of Service. If you do not
                agree to all the terms and conditions of this agreement, then
                you may not access the website or use any services.
              </p>
              <br />
              <br />
              <h2>
                <b>Contact Information</b>
              </h2>
              <br />
              <p>
                <a href="/realty">
                  <b>www.bigboytoyz.com/realty</b>
                </a>
              </p>
              <br />
              <p>
                <b>
                  Plot No. 134, Sector 37, Pace City 1, Gurgaon <br /> Haryana,
                  122001, India
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

export default TermsAndConditions;

const styles = {
  textStyles:
    "[&_h2]:text-[2.5rem] [&_h2]:leading-[1.2] [&_h2]:tracking-[-1px] xl:[&_h2]:text-[3rem] xl:[&_h2]:tracking-[-2px] xl:[&_h2]:tracking-[-1px] 1xl:[&_h2]:text-[3.3rem] 2xl:[&_h2]:text-[3.7rem] 3xl:[&_h2]:text-[4.5rem] 3xl:[&_h2]:tracking-[-2px] [&_h2]:font-light font-light text-[#080808]",
  unorderedList:
    "[&_li]:mb-[1rem] [&_li]:pl-[1.7rem] [&_li]:text-[1.2rem] [&_li]:relative [&_li]:before:content-[''] [&_li]:before:w-[1rem] [&_li]:before:h-[1rem] [&_li]:before:rounded-full [&_li]:before:border-[3px] [&_li]:before:border-[#4E4E4E] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.5rem] xl:[&_li]:text-[1.35rem] 1xl:[&_li]:text-[1.45rem] 3xl:[&_li]:text-[2rem] 2xl:[&_li]:text-[1.6rem] 2xl:[&_li]:before:w-[1.2rem] 2xl:[&_li]:before:h-[1.2rem] 2xl:[&_li]:before:border-[3.5px] 2xl:[&_li]:pl-[2rem] 3xl:[&_li]:before:w-[1.5rem] 3xl:[&_li]:before:h-[1.5rem] 3xl:[&_li]:pl-[2.5rem] 3xl:[&_li]:mb-[2rem]",
};

