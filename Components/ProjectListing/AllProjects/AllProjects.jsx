import React from "react";
import Link from "next/link";
import { fetchProjects } from "../../../app/lib/services/projects";

const AllProjects = async () => {
  const projects = await fetchProjects();
  console.log("projects", projects);
  return (
    <section className="bg-white pb-[5rem] lg:pb-[8rem] xl:pb-[10rem] 1xl:pb-[12rem]">
      <div className="max-1920">
        <div className="container">
          <div className="grid grid-cols-1  md:grid-cols-2 md:gap-x-[2rem] lg:grid-cols-3 1xl:gap-x-[3rem]">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full mb-[3rem] xl:mb-[4rem] 1xl:mb-[5rem]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <Link
                  href={`/projects/${project.id_ || project.id}`}
                  className="block w-full rounded-[2rem] overflow-hidden relative md:rounded-[2.5rem] lg:rounded-[3rem] group xl:rounded-[3.5rem] 3xl:rounded-[4.5rem]"
                >
                  <div>
                    <img
                      src={(project.featuredimage && project.featuredimage !== '' ? (project.featuredimage.startsWith('http') ? project.featuredimage : `https://cdn.bigboytoyz.com/new-version/projects/${project.featuredimage}`) : project.gallery.find(g=>g.ptype==='image')?.pgalimage) || "/images/placeholder.webp"}
                      alt={project.title}
                      className="w-full block object-cover h-auto aspect-[9/13] group-hover:scale-110 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="absolute w-full left-0 top-0 h-full px-[2.5rem] py-[2rem] lg:pb-[3rem] lg:pl-[3rem] flex flex-col justify-end xl:pl-[4rem] xl:pb-[4rem] 1xl:pl-[4.5rem] 1xl:pb-[4.5rem] bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.01)] ">
                    <div className="text-white">
                      <h4 className="text-[1.7rem] xl:text-[1.9rem] 1xl:text-[2.1rem] 2xl:text-[2.3rem] 3xl:text-[2.8rem]">
                        {project.title}
                      </h4>
                      {project.description && (
                        <p className="text-[1.2rem] font-light mt-[0.5rem] xl:text-[1.35rem] 1xl:text-[1.5rem] 2xl:text-[1.6rem] 3xl:text-[1.9rem]">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="w-14 h-14 rounded-50% bg-white flex items-center justify-center p-1 absolute top-[1.5rem] right-[1.5rem] md:top-12 md:right-12 lg:top-[2rem] lg:right-[2rem] xl:w-[4.3rem] xl:h-[4.3rem] 1xl:w-[5rem] 1xl:h-[5rem] 3xl:w-[6.7rem] 3xl:h-[6.7rem] 3xl:top-16 3xl:right-16 group-hover:bg-black transition-all duration-500 ease-in">
                    <img
                      src="/images/showroom-location-arrow.webp"
                      className="object-contain w-4 xl:w-[1.5rem] 2xl:w-6 3xl:w-[2rem] group-hover:invert transition-all duration-500 ease-in group-hover:rotate-[45deg]"
                      width="20"
                      height="20"
                      alt="Arrow Icon"
                    />
                  </span>
                </Link>
              </div>
            ))}
          </div>
          {/* <div
            className="w-max mx-auto mt-[50px] xl:min-w-[170px] 2xl:min-w-[190px] 3xl:min-w-[240px] "
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <button className="bg-black w-full text-white text-center text-[1.4rem] flex justify-center items-center rounded-[3rem] px-[3rem] h-[5rem] xl:text-[1.2rem] 1xl:h-[5.5rem] 1xl:text-[1.3rem] 2xl:text-[1.4rem] 3xl:text-[1.8rem] 2xl:h-[6rem] 2xl:rounded-[4rem] 3xl:h-[7.3rem] transition-all duration-500 hover:bg-[#333]">
              Load More
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
