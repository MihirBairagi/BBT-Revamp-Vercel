import React from "react";
import "aos/dist/aos.css";
import Image from "next/image";
import { fetchProject } from "../../lib/services/projects";

import PageHeader from "../../../Components/ProjectDetail/PageHeader/PageHeader";
import MainContent from "../../../Components/ProjectDetail/MainContent/MainContent";
import FormSection from "../../../Components/ProjectDetail/FormSection/FormSection";
import RelatedProjects from "../../../Components/ProjectDetail/RelatedProjects/RelatedProjects";
import InfoWithTwoCard from "../../../Components/CommonComponents/InfoWithTwoCard/InfoWithTwoCard";

const InfoWithTwoCardData = {
    leftCardData: {
      url: "/car-detailing",
      title: "Car Detailing",
      thumbnail: "/images/project-detail/info-1.webp",
    },
    rightCardData: {
      url: "/services",
      title: "Car Service",
      thumbnail: "/images/project-detail/info-2.webp",
    },
    title:`BBT Custom Car  <b>Detailing and Services </b>`,
    description:`Your car isn't just a machine, it's your trusty steed, your partner in crime, and your ticket to endless adventures. And guess what? We totally get it.`,
      bg:'#F4F4F1'
  };

// We rely on dynamic fetching (no caching) in fetchProject,
// so we don't pre-generate params here – this keeps new projects
// accessible immediately after they are created.
export const dynamic = 'force-dynamic';

export default async function ProjectDetail({ params }) {
  const project = await fetchProject(params.projectId);
  if (!project) return <p className="text-center py-20">Project not found</p>;

  console.log("project", project);

  const images = project.gallery || [];

  console.log("images", images);

  return (
    <>
      <PageHeader project={project} />
      <MainContent project={project} images={images} />
      <FormSection />
      <RelatedProjects currentId={project.id_||project.id} />
      <InfoWithTwoCard data={InfoWithTwoCardData} />
    </>
  );
}
