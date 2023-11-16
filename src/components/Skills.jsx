import React from "react";

const Skills = ({ id }) => {
  const infos = [
    {
      name: "Figma",
      level: 90,
    },
    {
      name: "Ux",
      level: 65,
    },
    {
      name: "React",
      level: 50,
    },
    {
      name: "Wireframe & Prototype",
      level: 80,
    },
  ];
  return (
    <div id={id}>
      <div class="m-3 pt-2">
        <div class="text-center text-xl font-bold  text-blue-900 sm:text-2xl">
          Skills
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4">
          {infos.map((item, index) => (
            <div class="m-4 flex flex-col items-center" key={index}>
              <div>{item.name}</div>
              <div
                class="radial-progress m-2 border-4 border-blue-500 p-2 text-blue-800 shadow-md hover:text-xl"
                style={{ "--value": item.level }}
              >
                {item.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="h-px w-full border border-neutral-400"></div>
    </div>
  );
};

export default Skills;
