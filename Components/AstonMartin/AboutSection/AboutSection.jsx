import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-dark-800 py-28 text-white">
      <div className="container">
        <div
          className="about-collection-header [&>p]:text-8xl [&>p]:font-black [&>p]:uppercase"
        >
          <p>
            {" "}
            <span>ASTON</span>
          </p>
          <p>
            <span>MARTIN</span>
          </p>
        </div>
        <div className="my-16">
          <Image
            src="/images/bbt-logo-2.webp"
            alt="BBT Logo"
            width="108"
            height="72"
            className=" object-contain w-44"
          />
        </div>
        <div className="font-light [&>p]:text-xl [&>p]:leading-1.6">
          <h2 className="font-light mb-8 tracking-tightest [&>strong]:font-normal leading-1.3">
            The <strong>luxury of purchasing</strong> a pre-owned aston Martin
          </h2>
          <p>
            Like designer clothes which can be purchased as second-hand pieces,
            now with pre-owned cars, you too can taste luxury and that too, at
            an affordable price.
          </p>
          <br />
          <p>
            At <strong>Big Boy Toyz</strong>, we make sure that you leave
            satisfied to come back again. Rush to its store in Delhi NCR to
            experience the joy of riding!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
