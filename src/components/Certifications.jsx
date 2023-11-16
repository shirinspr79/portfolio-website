import React from "react";
import InfoSection from "./common/InfoSection";

const Certifications = ({id}) => {
  const infos = [
    {
      title: "Ui/Ux Course",
      company: {
        name: "Tehran Institute of Technology",
        link: "https://mftplus.com/lesson/5605/%D8%AF%D9%88%D8%B1%D9%87-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D8%B1%D8%A7%D8%A8%D8%B7-%D9%88-%D8%AA%D8%AC%D8%B1%D8%A8%D9%87-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%DB%8C-(UI/UX)",
      },
      date: {
        start: "Mordad 1402",
        end: "Mehr 1402",
      },
      location: "Mashhad",
    },    {
        title: "Figma Ui Ux Design Advandced 2023",
        company: {
          name: "Udemy",
          link: "https://www.udemy.com/course/figma-ui-ux-design-advanced-tutorial/",
        },
      },
  ];
  return (
    <div id={id}>
      <div class="m-3 pt-2">
        <div class="text-center text-xl font-bold text-blue-900 sm:text-2xl">
          Certifications
        </div>
        {infos.map((item, index) => (
          <InfoSection info={item} key={index} />
        ))}
      </div>
      <div class="h-px w-full border border-neutral-400"></div>
    </div>
  );
};

export default Certifications;
