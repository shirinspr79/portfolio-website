import React from "react";
import InfoSection from "./common/InfoSection";

const Education = ({ id }) => {
  const infos = [
    {
      title: "B.E. in computer engineering",
      company: {
        name: "Bojnord Technical and vocational University",
        link: "",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/de/TVU_logo.svg",
      },
      date: {
        start: "Farvardin 1398",
        end: "Tir 1400",
      },
      location: "Khorasan Shomali",
    },
  ];
  return (
    <div id={id}>
      <div class="m-3 pt-2">
        <div class="text-center text-xl font-bold text-blue-900 sm:text-2xl">
          Education
        </div>
        {infos.map((item, index) => (
          <InfoSection info={item} key={index} />
        ))}
      </div>
      <div class="h-px w-full border border-neutral-400"></div>
    </div>
  );
};

export default Education;
