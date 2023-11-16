import React from "react";
import InfoSection from "./common/InfoSection";

const Experience = ({ id }) => {
  const infos = [
    {
      title: "Front-end Developer",
      company: {
        name: "Top Company",
        link: "",
      },
      date: {
        start: "Mehr 1401",
        end: "Aban 1401",
      },
      location: "Mashhad",
      description: [
        "Reactjs internship",
        "Learnin MERN stack to develop accounting website",
      ],
    },
    {
      title: "Laboratory Technician",
      company: {
        name: "Rasouli Lab",
        link: "",
      },
      date: {
        start: "Shahrivar 1399",
        end: "Ordibehesht 1400",
      },
      location: "Tehran",
      description: ["Full-time", "Cad/Cam Designer"],
    },
  ];
  return (
    <div id={id}>
      <div class="m-3 pt-2">
        <div class="text-center text-xl font-bold text-blue-900 sm:text-2xl">
          Experience
        </div>
        {infos.map((item, index) => (
          <InfoSection info={item} key={index} />
        ))}
      </div>
      <div class="h-px w-full border border-neutral-400"></div>
    </div>
  );
};

export default Experience;
