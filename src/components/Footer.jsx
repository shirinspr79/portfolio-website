import React from "react";
import {
  LiaEnvelope,
  LiaGithub,
  LiaFigma,
  LiaTelegram,
} from "react-icons/lia";
const Footer = () => {
  const parts = [
    {
      name: "Github",
      link: "https://github.com/shirinspr79",
      icon: LiaGithub,
    },
    {
      name: "Figma",
      link: "https://www.figma.com/@shirinshapoori",
      icon: LiaFigma,
    },
    { name: "Telegram", link: "http://t.me/@shirinshapoori", icon: LiaTelegram },
    {
      name: "Email",
      link: "mailto:shirinspr79@gmail.com",
      icon: LiaEnvelope,
    },
  ];
  return (
    <div class="flex h-12 flex-row  justify-center gap-2 bg-neutral-200 p-1">
      {parts.map((item, index) => (
        <a href={item.link} key={index}>
          <div class="m-1">
            <item.icon size="2em" class="hover:text-lg hover:text-blue-800" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Footer;
