import React from "react";

const PageFooter = () => {
  return (
    <section className="bg-black text-white py-[3rem] 1xl:py-[2.5rem]">
      <div className="container">
        <div className="flex flex-wrap flex-col-reverse justify-between md:flex-row">
          <p className=" text-[1.4rem] 3xl:text-[2rem] text-[#C5C5C5] text-center pb-[1rem] mb-[1rem] border-b border-b-[#626262] md:pb-0 md:border-b-0 md:mb-0">
            © 2025, Big Boy Toyz India, All rights reserved.
          </p>
          <p className="flex justify-center items-center text-[1.4rem] 3xl:text-[2rem] text-[#C5C5C5] text-center leading-[1]">
            {" "}
            <a href="tel:++919999999187">(+91) 9999999187</a>{" "}
            <a href="mailto:africa@bigboytoyz.com" className="inline-block pl-[1rem] ml-[1rem] border-l 3xl:pl-[2.5rem] 3xl:ml-[2.5rem] border-l-[#626262]">africa@bigboytoyz.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageFooter;
