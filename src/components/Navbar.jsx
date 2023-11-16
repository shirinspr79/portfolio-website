"use client";
import React from "react";

const Navbar = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const parts = [
    {
      name: "Experience",
      id: "s-experience",
    },
    { name: "Certifications", id: "s-certifications" },
    { name: "Education", id: "s-education" },
    { name: "Projects", id: "s-projects" },
    { name: "Contact me", id: "s-contactme" },
  ];
  return (
    <nav class="flex flex-row justify-around  bg-neutral-200 p-2 ">
      {parts.map((item, index) => (
        <div
          class="text-center font-sans text-xs sm:text-2xl font-semibold text-black hover:text-blue-800 "
          onClick={() => handleClickScroll(item.id)}
          key={index}
        >
          {item.name}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
