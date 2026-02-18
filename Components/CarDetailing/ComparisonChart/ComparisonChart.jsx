import React from "react";

import { comparisonList } from "../../../public/data/dummyData";

const ComparisonChart = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[8rem] xl:py-[12rem] 1xl:py-[14rem] 3xl:py-[18rem]">
      <div className="max-1920">
        <div className="container">
          <h2 className="font-light leading-[1.2] tracking-tighter mt-[1rem] text-center xl:text-[3.9rem] xl:leading-[1.2] xl:tracking-[-1.8px] 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1.2] 2xl:text-[4.6rem] 3xl:text-[5.8rem] 3xl:leading-[1.1] capitalize">
            the comparison
            <br /> <b>chart for the service</b>
          </h2>

          <div className="flex flex-col mt-[3rem] xl:mt-[4rem] 2xl:mt-[6rem]">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className=" bg-[#F4F4F1]">
                      <tr>
                        <th
                          scope="col"
                          className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] font-medium text-gray-900 px-6 py-4 text-left xl:w-[21%]"
                        >
                          Service
                        </th>
                        <th
                          scope="col"
                          className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] font-medium text-gray-900 px-6 py-4 text-left xl:w-[11.2%]"
                        >
                          Paint Correction
                        </th>
                        <th
                          scope="col"
                          className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] font-medium text-gray-900 px-6 py-4 text-left xl:w-[11.2%]"
                        >
                          Teflon Coating
                        </th>
                        <th
                          scope="col"
                          className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] font-medium text-gray-900 px-6 py-4 text-left xl:w-[11.2%]"
                        >
                          Ceramic Coating
                        </th>
                        <th
                          scope="col"
                          className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] font-medium text-gray-900 px-6 py-4 text-left xl:w-[11.2%]"
                        >
                          PPF
                        </th>
                        <th
                          scope="col"
                          className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] font-medium text-gray-900 px-6 py-4 text-left xl:w-[11.2%]"
                        >
                          Colored PPF
                        </th>
                        <th
                          scope="col"
                          className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] font-medium text-gray-900 px-6 py-4 text-left xl:w-[11.2%]"
                        >
                          Wraps
                        </th>
                        <th
                          scope="col"
                          className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] font-medium text-gray-900 px-6 py-4 text-left xl:w-[11.2%]"
                        >
                          Graphene Coating
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonList.map((item, index) => (
                        <tr className="border-b border-black" key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] font-medium text-gray-900">
                            {item.serviceName}
                          </td>
                          <td className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.paintCorrection ? (
                              <img
                                src="/images/car-detailing/checkmark.webp"
                                alt="Check Mark"
                                className="h-auto w-[1.5rem] xl:w-[1.7rem] 1xl:w-[1.9rem] 2xl:w-[2.2rem] 3xl:w-[2.6rem] object-contain"
                              />
                            ) : (
                              <img
                                src="/images/car-detailing/cross-mark.webp"
                                alt="Cross Mark"
                                className="h-auto w-[1.3rem] xl:w-[1.5rem] 1xl:w-[1.6rem] 2xl:w-[1.7rem] 3xl:w-[1.8rem] object-contain"
                              />
                            )}
                          </td>
                          <td className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.teflonCoating ? (
                              <img
                                src="/images/car-detailing/checkmark.webp"
                                alt="Check Mark"
                                className="h-auto w-[1.5rem] xl:w-[1.7rem] 1xl:w-[1.9rem] 2xl:w-[2.2rem] 3xl:w-[2.6rem] object-contain"
                              />
                            ) : (
                              <img
                                src="/images/car-detailing/cross-mark.webp"
                                alt="Cross Mark"
                                className="h-auto w-[1.3rem] xl:w-[1.5rem] 1xl:w-[1.6rem] 2xl:w-[1.7rem] 3xl:w-[1.8rem] object-contain"
                              />
                            )}
                          </td>
                          <td className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.ceramicCoating ? (
                              <img
                                src="/images/car-detailing/checkmark.webp"
                                alt="Check Mark"
                                className="h-auto w-[1.5rem] xl:w-[1.7rem] 1xl:w-[1.9rem] 2xl:w-[2.2rem] 3xl:w-[2.6rem] object-contain"
                              />
                            ) : (
                              <img
                                src="/images/car-detailing/cross-mark.webp"
                                alt="Cross Mark"
                                className="h-auto w-[1.3rem] xl:w-[1.5rem] 1xl:w-[1.6rem] 2xl:w-[1.7rem] 3xl:w-[1.8rem] object-contain"
                              />
                            )}
                          </td>
                          <td className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.ppf ? (
                              <img
                                src="/images/car-detailing/checkmark.webp"
                                alt="Check Mark"
                                className="h-auto w-[1.5rem] xl:w-[1.7rem] 1xl:w-[1.9rem] 2xl:w-[2.2rem] 3xl:w-[2.6rem] object-contain"
                              />
                            ) : (
                              <img
                                src="/images/car-detailing/cross-mark.webp"
                                alt="Cross Mark"
                                className="h-auto w-[1.3rem] xl:w-[1.5rem] 1xl:w-[1.6rem] 2xl:w-[1.7rem] 3xl:w-[1.8rem] object-contain"
                              />
                            )}
                          </td>
                          <td className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.coloredPpf ? (
                              <img
                                src="/images/car-detailing/checkmark.webp"
                                alt="Check Mark"
                                className="h-auto w-[1.5rem] xl:w-[1.7rem] 1xl:w-[1.9rem] 2xl:w-[2.2rem] 3xl:w-[2.6rem] object-contain"
                              />
                            ) : (
                              <img
                                src="/images/car-detailing/cross-mark.webp"
                                alt="Cross Mark"
                                className="h-auto w-[1.3rem] xl:w-[1.5rem] 1xl:w-[1.6rem] 2xl:w-[1.7rem] 3xl:w-[1.8rem] object-contain"
                              />
                            )}
                          </td>
                          <td className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.wraps ? (
                              <img
                                src="/images/car-detailing/checkmark.webp"
                                alt="Check Mark"
                                className="h-auto w-[1.5rem] xl:w-[1.7rem] 1xl:w-[1.9rem] 2xl:w-[2.2rem] 3xl:w-[2.6rem] object-contain"
                              />
                            ) : (
                              <img
                                src="/images/car-detailing/cross-mark.webp"
                                alt="Cross Mark"
                                className="h-auto w-[1.3rem] xl:w-[1.5rem] 1xl:w-[1.6rem] 2xl:w-[1.7rem] 3xl:w-[1.8rem] object-contain"
                              />
                            )}
                          </td>
                          <td className="text-[1.2rem] xl:text-[1.7rem] xl:tracking-tight xl:leading-[1.2] xl:py-[2rem] 1xl:text-[1.9rem] 1xl:py-[2.4rem] 2xl:py-[2.6rem] 2xl:text-[2.1rem] 3xl:text-[2.4rem] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.grapheneCoating ? (
                              <img
                                src="/images/car-detailing/checkmark.webp"
                                alt="Check Mark"
                                className="h-auto w-[1.5rem] xl:w-[1.7rem] 1xl:w-[1.9rem] 2xl:w-[2.2rem] 3xl:w-[2.6rem] object-contain"
                              />
                            ) : (
                              <img
                                src="/images/car-detailing/cross-mark.webp"
                                alt="Cross Mark"
                                className="h-auto w-[1.3rem] xl:w-[1.5rem] 1xl:w-[1.6rem] 2xl:w-[1.7rem] 3xl:w-[1.8rem] object-contain"
                              />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonChart;
