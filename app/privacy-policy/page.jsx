import React from "react";
const PrivacyPolicy = () => {
  return (
    <>
 
      <section className="generic-main-section bg-white py-[6rem] md:py-[8rem] 2xl:py-[10rem] 3xl:py-[14rem]">
        <div className="max-1920">
          <div className="generic-content px-[20px] sm:px-[30px] md:px-[50px] xl:w-[59.5%] 1xl:w-[56.5%] 3xl:w-[60%] 3xl:max-w-[1035px] mx-auto">
            <h1 className="text-center font-extralight [&>b]:font-normal [&>strong]:font-normal">
              Privacy <b>Policy</b>
            </h1>
            <div
              className={`mt-[3rem] xxl:mt-[4rem] 2xl:mt-[5rem] 3xl:mt-[7rem] ${styles.textStyles} ${styles.unorderedList}`}
            >
              <h2>
                <b>What information do we collect?</b>
              </h2>
              <br />
              <p>
                We collect information from you when you register on our site,
                subscribe to our newsletter, respond to a survey, post
                testimonials, respond or leave a query regarding sale and/or
                purchase or fill out a form.
              </p>
              <br />
              <p>
                <b>
                  When ordering or registering on our site, as appropriate, you
                  may be asked to enter your name, e-mail address or phone
                  number. You may, however, visit our site anonymously.
                </b>
              </p>
              <br />
              <p>
                Any of the information we collect from you may be used in one of
                the following ways
              </p>
              <br />
              <ul>
                <li>
                  <b>To personalize your experience</b> (Your information helps
                  us to better respond to your individual needs)
                </li>
                <li>
                  <b>To improve our website</b> (We continually strive to
                  improve our website offerings based on the information and
                  feedback we receive from you)
                </li>
                <li>
                  <b>To improve customer service</b> (Your information helps us
                  to more effectively respond to your customer service requests
                  and support needs)
                </li>
                <li>
                  <b>
                    To administer a contest, promotion, survey or other site
                    feature
                  </b>
                </li>
                <li>
                  <b>To send periodic emails</b>
                </li>
              </ul>
              <br />
              <p>
                The email address you provide for inquiring Big Boy Toyz
                services may be used to send you information and updates
                pertaining to your inquiry, in addition to receiving occasional
                company news, updates, related product or service information,
                etc.
              </p>{" "}
              <br />
              <p>
                <b>
                  Note: If at any time you would like to unsubscribe from
                  receiving future emails, we include detailed unsubscribe
                  instructions at the bottom of each email.
                </b>
              </p>
              <br />
              <br />
              <h2>
                <b>Do we use cookies?</b>
              </h2>
              <br />
              <p>
                <b>
                  Yes (Cookies are small files that a site or its service
                  provider transfers to your computer’s hard drive through your
                  Web browser (if you allow) that enables the sites or service
                  providers systems to recognize your browser and capture and
                  remember certain information.
                </b>
              </p>
              <br />
              <p>
                We use cookies to understand and save your preferences for
                future visits and compile aggregate data about site traffic and
                site interaction so that we can offer better site experiences
                and tools in the future. We may contract with third-party
                service providers to assist us in better understanding our site
                visitors. These service providers are not permitted to use the
                information collected on our behalf except to help us conduct
                and improve our business.
              </p>
              <br />
              <br />
              <h2>
                <b>Do we disclose any information to outside parties?</b>
              </h2>
              <br />
              <p>
                {" "}
                <b>
                  We do not sell, trade, or otherwise transfer to outside
                  parties your personally identifiable information.
                </b>{" "}
                This does not include trusted third parties who assist us in
                operating our website, conducting our business, or servicing
                you, so long as those parties agree to keep this information
                confidential. We may also release your information when we
                believe release is appropriate to comply with the law, enforce
                our site policies, or protect ours or others rights, property,
                or safety. However, non-personally identifiable visitor
                information may be provided to other parties for marketing,
                advertising, or other uses.
              </p>
              <br />
              <br />
              <h2>
                <b>Online Privacy Policy only</b>
              </h2>
              <br />
              <p>
                This online privacy policy applies only to information collected
                through our website and not to information collected offline.
              </p>
              <br />
              <br />
              <h2>
                <b>Changes to our Privacy Policy</b>
              </h2>
              <br />
              <p>
                If we decide to change our privacy policy, we will post those
                changes on this page, and/or send an email notifying you of any
                changes.
              </p>
              <br />
              <br />
              <h2>
                <b>Your Consent</b>
              </h2>
              <br />
              <p>
                By using our site, you consent to our online privacy policy.
              </p>
              <br />
              <br />
              <h2>
                <b>Contacting Us</b>
              </h2>
              <br />
              <p>
                By using our site, you consent to our online privacy policy. If
                there are any questions regarding this privacy policy you may
                contact us using the information below:
              </p>
              <br />
              <p>
                <a href="/">
                  <b>www.bigboytoyz.com</b>
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
                <a href="mailto:info@bigboytoyz.com">
                  <b>info@bigboytoyz.com</b>
                </a>
              </p>
              <br />
              <p>
                <a href="tel:+919999999983">
                  <b>+91 9999 9999 83</b>
                </a>
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
