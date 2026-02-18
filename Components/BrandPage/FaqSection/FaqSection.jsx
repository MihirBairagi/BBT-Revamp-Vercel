"use client";
import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FaqSection = ({ faqHtml }) => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    AOS.init();
  }, []);

  // Use only the explicitly provided FAQ HTML
  const effectiveFaqHtml = useMemo(() => (faqHtml || "").trim(), [faqHtml]);

  // Parse HTML (db format) into Q/A list for current UI components
  const parsedFaqList = useMemo(() => {
    try {
      const html = effectiveFaqHtml;
      if (!html) return [];

      // Parse in browser
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const boxes = Array.from(doc.querySelectorAll(".faqbox"));

      if (boxes.length > 0) {
        return boxes
          .map((box) => {
            const question = box.querySelector("h4")?.textContent?.trim();
            const answerContainer =
              box.querySelector(".opening-box-2") || box.querySelector("p");
            const answerHtml = answerContainer?.innerHTML?.trim();
            return question && answerHtml
              ? { question, answerHtml }
              : null;
          })
          .filter(Boolean);
      }

      // Fallback: if no .faqbox present, try to derive QAs from headings/paragraphs
      const headings = Array.from(doc.querySelectorAll("h4, h3"));
      const items = headings
        .map((h) => {
          const q = h.textContent?.trim();
          let answerHtml = "";
          let next = h.nextElementSibling;
          if (next) {
            // Collect immediate paragraphs/divs until next heading
            const parts = [];
            while (next && !/H4|H3/.test(next.tagName)) {
              parts.push(next.outerHTML || next.innerHTML || next.textContent);
              next = next.nextElementSibling;
            }
            answerHtml = parts.join("");
          }
          return q && answerHtml ? { question: q, answerHtml } : null;
        })
        .filter(Boolean);
      return items;
    } catch (e) {
      console.warn("Failed to parse FAQ HTML", e);
      return [];
    }
  }, [effectiveFaqHtml]);

  // Do not render the section if there are no FAQs
  if (!parsedFaqList || parsedFaqList.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-20 xl:py-36">
      <div className="max-1920">
        <div className="container">
          <div
            className="xl:flex xl:justify-between"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h2 className="text-center font-normal mb-10 tracking-tightest xl:w-[40%] xl:text-left">
              Frequently Asked Questions
            </h2>
            <div className="xl:w-[55%]">
              {parsedFaqList.map((item, ind) => (
                <Accordion
                  key={ind}
                  open={open === ind + 1}
                  className="border-b border-b-blue-gray-100 first-of-type:border-t first-of-type:border-t-blue-gray-100"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(ind + 1)}
                    className="w-full py-8 border-none xl:py-7 1xl:py-8 2xl:py-9 3xl:py-11"
                  >
                    <div
                      className={
                        open === ind + 1
                          ? "flex items-center justify-between w-full  active"
                          : "flex items-center justify-between w-full "
                      }
                    >
                      <h3 className="text-2xl pr-24 1xl:text-[1.8rem] 3xl:text-[2rem]">
                        {item.question}
                      </h3>
                      <div className="w-6 h-full faq-toggle-icon relative">
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="pb-8">
                      <div
                        className="text-1xl font-normal 1xl:text-[1.3rem] 3xl:text-[1.65rem]"
                        dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                      />
                    </div>
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
