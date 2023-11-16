import React from "react";
import InfoSection from "./common/InfoSection";

const Projects = ({ id }) => {
  const infos = [
    {
      title: "Personal portfolio webpage",
      company: {
        name: "Figma Link",
        link: "",
      },
      description: [
        "Designing portfolio webpage to show projects and courses.",
      ],
    },
    {
      title: "Sofa Store App",
      company: {
        name: "Figma Link",
        link: "https://www.figma.com/community/file/1306907423183854376",
      },
      description: [
        "Customer choose favourite style to get specialized offer",
        "How to get vip account step by step",
        "Build with prototype and wireframe",
      ],
    },
    {
      title: "Redesign Basalam Product page",
      company: {
        name: "Figma Link",
        link: "",
      },
      description: [
        "Reduce extra space",
        "Redesign action buttons and rating style",
        "A/B testing",
      ],
    },    {
      title: "Mobile Health App",
      company: {
        name: "Figma Link",
        link: "",
      },
      description: [
        "Design health mobile application based on video",
        "Build with Prototype",
      ],
    },
  ];
  return (
    <div id={id}>
      <div class="m-3 pt-2">
        <div class="text-center text-xl font-bold text-blue-900 sm:text-2xl">
          Projects
        </div>
        {infos.map((item, index) => (
          <InfoSection info={item} key={index} />
        ))}
      </div>
      <div class="h-px w-full border border-neutral-400"></div>
    </div>
  );
};

export default Projects;
