"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

// Helper to create safe anchor IDs from department names
function slugify(text) {
  return (text || "").toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

const styles = {
  tabMenu:
    "text-center text-[1.2rem] border border-[#D2D2D2] rounded-[3rem] leading-[1] px-[1.6rem] py-[0.7rem] block mr-[0.6rem] mt-[0.8rem] xl:text-[1.4rem] xl:px-[2rem] xl:py-[1rem] xl:mx-[0.7rem] xl:bg-[#F4F4F1] 1xl:text-[1.55rem] 2xl:text-[1.7rem] 2xl:px-[2.3rem] 2xl:py-[1.2rem] 3xl:text-[2rem] 3xl:px-[2.8rem] 3xl:py-[1.7rem] 3xl:mx-[0.8rem] 3xl:mb-[1rem]",
  teamMemberItem:
    "grid grid-cols-2 auto-rows-fr gap-[2rem] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 xl:gap-[3rem] xl:[&_img]:max-h-[20rem] 1xl:[&_img]:max-h-[22rem] 2xl:[&_img]:max-h-[23rem] 3xl:xl:gap-[5.5rem] 3xl:[&_img]:max-h-[25rem]",
  teamMemberTitle:
    "text-[1.5rem] tracking-[-0.5px] font-medium xl:text-[1.5rem] xl:tracking-[-1px] 1xl:text-[1.7rem] 2xl:text-[1.9rem] 3xl:text-[2.2rem]",
  teamMemberSub:
    "font-light text-[1.1rem] mt-[0.2rem] xl:text-[1.3rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]",
};

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  prevArrow: "",
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "3%",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const TeamMember = ({ data }) => {
  const storageBase = process.env.NEXT_PUBLIC_CDN_URL || "";
  const img = data.image && data.image.startsWith("http")
    ? data.image
    : (storageBase ? `${storageBase}/new-version/teams/${data.image}` : (data.image || "/images/team/placeholder.webp"));
  return (
    <div>
      <img
        src={img}
        alt="Team member"
        className="w-full object-cover h-full block"
      />
      <div className="mt-[0.8rem] 1xl:mt-[1.7rem]">
        <p className={styles.teamMemberTitle}>{data.name}</p>
        <p className={styles.teamMemberSub}>{data.designation}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const base = process.env.NEXT_PUBLIC_API_URL || "";
        const res = await fetch(`${base}/team`, { next: { revalidate: 300 } });
        if (!res.ok) throw new Error("Failed to load team");
        const json = await res.json();
        setDepartments(Array.isArray(json.departments) ? json.departments : []);
      } catch (e) {
        console.error("Team fetch error", e);
        setError("Failed to load team");
      } finally {
        setLoading(false);
      }
    }
    fetchTeam();
  }, []);
  if (loading) {
    return (
      <section className="bg-[#ffffff] py-[5rem] sm:py-[8rem]">
        <div className="container"><p>Loading team...</p></div>
      </section>
    );
  }

  return (
    <section className="bg-[#ffffff] py-[5rem] sm:py-[8rem] md:pb-[12rem] lg:pb-[15rem] xl:py-[12rem] 2xl:py-[14rem] 3xl:py-[16rem]">
      <div className="max-1920">
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h3 className="titleWithLine mobileLine hidden md:block">
              <span className="bg-[#ffffff] pr-[3rem] inline-block relative z-10 text-[2.5rem] tracking-[-2px] xl:text-[3rem] xl:pr-[4rem] 1xl:text-[3.7rem] 3xl:text-[4.5rem]">
                Meet The Team
              </span>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="block xl:flex xl:flex-wrap xl:justify-between xl:mt-[6rem] 3xl:mt-[8rem]">
            <div
              className="xl:w-[34%]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <h2 className="font-light [&>b]:font-normal leading-[1.1] tracking-[-1.2px] md:hidden">
                The <b>Team</b>
              </h2>
              <div className="md:mt-[2rem] xl:mt-0">
                <p className="font-light text-[1.4rem] leading-[1.4] mt-[1rem] [&>br]:hidden md:text-center md:text-[2rem] md:[&>br]:block xl:text-[3.9rem] xl:text-left xl:leading-[1.2] xl:tracking-[-1.8px] xl:[&>br]:hidden 1xl:text-[4.5rem] 1xl:tracking-[-3px] 1xl:leading-[1] 2xl:text-[4.6rem] 3xl:text-[5.9rem] 3xl:leading-[1.1]">
                  We believe that without the key <br /> value of{" "}
                  <b>our people.</b>
                </p>

                <div>
                  <ul className="flex flex-wrap mt-[1.5rem] md:justify-center xl:justify-start xl:flex-col xl:max-w-[18rem] xl:mt-[3rem] 2xl:max-w-[21rem] 3xl:mt-[5rem] 3xl:max-w-[23rem]">
                    {departments.map((dept, idx) => (
                      <li key={dept.id} onClick={() => handleTabChange(`tab-${idx+1}`)}>
                        <a
                          href={`#${slugify(dept.name)}`}
                          className={`${styles.tabMenu} ${
                            activeTab === `tab-${idx+1}`
                              ? " bg-black text-white xl:bg-black"
                              : " text-black"
                          }`}
                        >
                          {dept.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="xl:w-[55%]">
              {departments.map((dept, idx) => (
                <div
                  key={dept.id}
                  id={slugify(dept.name)}
                  className={`mt-[5rem] ${idx === 0 ? 'xl:mt-0' : 'xl:mt-[6rem] 1xl:mt-[8rem] 3xl:mt-[6rem]'}`}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <h3 className="text-[1.8rem] tracking-[-1.5px] mb-[1.5rem] xl:text-[2.3rem] 1xl:text-[2.5rem] 2xl:text-[2.7rem] 3xl:text-[3.2rem] xl:mb-[3rem]">
                    {dept.name}
                  </h3>
                  <div className={styles.teamMemberItem}>
                    {(dept.members || []).map((team, index) => (
                      <TeamMember key={`${dept.id}-${index}`} data={team} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Optionally, a featured department slider can go here if needed */}
      </div>
    </section>
  );
};

export default TeamSection;
