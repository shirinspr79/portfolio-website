import React from "react";
import { LiaCalendarCheckSolid } from "react-icons/lia";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const InfoSection = ({ info }) => {
  return (
    <div class="mb-2 flex flex-col p-5">
      <div class="text-lg sm:text-2xl text-black">{info.title}</div>
      <Link to={info.company.link}>
        <div class="inline-flex font-bold leading-10 text-blue-600">
          <div class="mr-2">{info.company.name}</div>
          {info.company.icon && (
            <img src={info.company.icon} width={20} height={20} alt="website-icon" />
          )}
        </div>
      </Link>
      {info.date && (
        <div class="inline-flex gap-3 text-xs sm:text-sm text-neutral-700">
          <LiaCalendarCheckSolid size={"1.4em"} />
          <div>{info.date.start}</div> -<div>{info.date.end}</div>
          <IoLocationSharp size={"1.4em"} />
          <div>{info.location}</div>
        </div>
      )}
      <div class="m-1 flex flex-col leading-10 text-black"></div>
      {info.description &&
        info.description.map((d, index) => (
          <div class="text-sm" key={index}>
            • {d}
          </div>
        ))}
    </div>
  );
};

export default InfoSection;
