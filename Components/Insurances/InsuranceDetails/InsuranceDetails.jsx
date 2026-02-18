"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const InsuranceDetails = ({ data }) => {
  const [lastParam, setLastParam] = useState("");

  useEffect(() => {
    // Get the current URL pathname
    const pathname = window.location.pathname;

    // Split the pathname by '/'
    const pathParts = pathname.split("/");

    // Get the last part of the path
    const lastPart = pathParts[pathParts.length - 1];

    // Update state with the last part
    setLastParam(lastPart);
  }, []); // Run only once on component mount
  return (
    <section className="bg-white py-[5rem] sm:py-[8rem] md:py-[12rem] lg:py-[15rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <div className="flex flex-col flex-wrap w-full md:flex-row md:justify-between">
            <div className="w-full md:w-[50%] lg:w-[40%] lg:order-2 xl:w-[60%]">
              <h2
                className="font-light leading-[1.4] mt-[1rem] [&>br]:hidden text-center md:[&>br]:block xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] xl:text-left 1xl:text-[4.5rem] 1xl:tracking-[-3px] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize"
                dangerouslySetInnerHTML={{ __html: data?.title }}
              ></h2>
              {data?.usp && data?.usp.length > 0 && (
                <ul className="mt-[4rem] [&>*:last-child]:border-0 xl:mt-[2rem]">
                  {data.usp.map((item, index) => (
                    <li
                      className="flex py-[2rem] border-b border-b-[#D9D9D9]"
                      key={index}
                    >
                      <div className="w-[3rem] xl:w-[4rem] 1xl:w-[5rem] 3xl:w-[6rem]">
                        <img
                          src={item.icon}
                          alt="Icon"
                          className="block w-full object-contain h-auto"
                        />
                      </div>
                      <div className="flex-[1] pl-[1.5rem] xl:pl-[3rem] 2xl:pl-[4rem]">
                        <h6 className="xl:text-[1.9rem] tracking-tight 1xl:text-[2.2rem] 3xl:text-[2.9rem]">{item.title}</h6>
                        <p className="text-[1.2rem] font-light text-[#060709] mt-[1rem] 3xl:text-[1.9rem] xl:text-[1.35rem] xl:mt-[0.5rem] 1xl:text-[1.45rem] 2xl:text-[1.55rem]">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="w-full mt-[5rem] md:w-[40%] md:mt-0 lg:w-[25%] lg:order-3">
              <div className="bg-[#F4F4F1] py-[3rem] px-[2rem] rounded-[1.5rem] 2xl:px-[3rem]">
                <h3 className="text-center text-[2rem] mb-[2rem] capitalize font-medium tracking-tighter leading-[1.2] xl:text-left 1xl:text-[2.2rem] 3xl:text-[2.9rem]">
                  All are insurance have BBT promises
                </h3>
                <ul className="[&>*:last-child_p]:border-0">
                  {data?.sidebarUsp?.map((item, index) => (
                    <li key={index} className="flex py-[1rem] items-center xl:py-0 xl:mt-[1rem]">
                      <div className="w-[4rem] 1xl:w-[5.5rem] 3xl:w-[8rem]">
                        <div className="flex justify-center items-center bg-white rounded-[50%] p-[1rem] shadow-md 1xl:w-[5.5rem] 1xl:h-[5.5rem] 1xl:p-[1.5rem] 3xl:w-[7.9rem] 3xl:h-[7.9rem] 3xl:p-[2.2rem]">
                          <img
                            src={item.icon}
                            alt="icon"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-[1] pl-[1.5rem]">
                        <p className="text-[1.2rem] font-light xl:text-[1.3rem] 1xl:text-[1.4rem] 3xl:text-[1.9rem] xl:border-b xl:border-b-[#d9d9d9] xl:py-[2rem] 3xl:py-[2.5rem]">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full mt-[5rem] lg:mt-0 lg:w-[25%] order-1 xl:w-[20%] 1xl:w-[18%] hidden">
              <div className="bg-[#F4F4F1] py-[3rem] px-[2rem] rounded-[1.5rem] 2xl:py-[5rem] 2xl:px-[3rem]">
                <h3 className="text-center text-[2rem] mb-[2rem] capitalize font-medium tracking-tighter leading-[1.2] xl:text-left 1xl:text-[2.2rem] 3xl:text-[2.9rem]">
                  Other Insurance
                </h3>
                <ul className="[&>*:last-child]:border-0">
                  <li className={styles.sidebarMenuItem}>
                    {" "}
                    <Link href="/insurances/car-insurance" className={`${lastParam === 'car-insurance' ? 'font-medium' : 'font-light'} ${styles.sidebarMenuLink}`}>
                      Car Insurance
                    </Link>{" "}
                  </li>
                  <li className={styles.sidebarMenuItem}>
                    {" "}
                    <Link href="/insurances/life-insurance" className={`${lastParam === 'life-insurance' ? 'font-medium' : 'font-light'} ${styles.sidebarMenuLink}`}>
                      Life Insurance
                    </Link>{" "}
                  </li>
                  <li className={styles.sidebarMenuItem}>
                    {" "}
                    <Link href="/insurances/home-insurance" className={`${lastParam === 'home-insurance' ? 'font-medium' : 'font-light'} ${styles.sidebarMenuLink}`}>
                      Home Insurance
                    </Link>{" "}
                  </li>
                  <li className={styles.sidebarMenuItem}>
                    {" "}
                    <Link href="/insurances/medical-insurance" className={`${lastParam === 'medical-insurance' ? 'font-medium' : 'font-light'} ${styles.sidebarMenuLink}`}>
                      Medical Insurance
                    </Link>{" "}
                  </li>
                  <li className={styles.sidebarMenuItem}>
                    {" "}
                    <Link href="/insurances/office-insurance" className={`${lastParam === 'office-insurance' ? 'font-medium' : 'font-light'} ${styles.sidebarMenuLink}`}>
                      Office Insurance
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceDetails;

const styles = {
  sidebarMenuItem:"py-[1.5rem] border-b border-b-[#D9D9D9] text-[1.4rem] 1xl:text-[1.5rem] 3xl:text-[2rem]",
  sidebarMenuLink:"transition-all duration-500 hover:font-medium"
}
