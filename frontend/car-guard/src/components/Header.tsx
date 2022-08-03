import { BellSimpleRinging, CaretUp, MagnifyingGlass, PoliceCar } from "phosphor-react";
import { useState } from "react";
import profile from "../assets/profile.jpg";
import { NavLink } from "./NavLink";

const navLinks = {
  Overview: {
    title: "Overview"
  },
  Clients: {
    title: "Clients"
  },
  Vehicles: {
    title: "Vehicles"
  },
  Accidents: {
    title: "Accidents"
  },
  ThirdPerson: {
    title: "Third Person"
  }
};

export function Header() {
  const [isActive, setIsActive] = useState("Overview");

  return (
    /* logo */
    <div className="items-center justify-between flex w-full space-x-4 pb-3 pt-4 px-3">
      <div className="border-b border-gray-400 w-[25%] flex md:space-x-2 md:pb-6 pb-2 items-center justify-center md:justify-start">
        <PoliceCar
          size={32}
          weight="duotone"
          className="md:w-12 md:h-12 w-10 h-10"
        />
        <h1 className="self-center hidden md:inline md:font-bold md:text-xl text-md text-gray-200">
          Car Guard
        </h1>
      </div>

      {/* navlinks */}
      <div className="border-b pb-5 border-gray-400 w-[140%] items-center justify-center flex space-x-2">
        {Object.entries(navLinks).map(([key, value]) => {
          return (
            <div
              onClick={() => setIsActive(value.title)}
              key={key}
              className="relative items-center justify-center flex"
            >
              <NavLink title={value.title} />
              <CaretUp size={30} className={ `${value.title === isActive ? "pt-3 items-center justify-center flex absolute -bottom-3" : "hidden"}` }/>
            </div>
          );
        })}
      </div>
      {/* login part */}
      <div className="border-b border-gray-400 pb-6 pt-4 hidden md:flex items-center justify-start px-3 space-x-6 w-[60%]">
        <MagnifyingGlass size={28} />
        <BellSimpleRinging size={28} />
        <img
          src={profile}
          alt="profile"
          className="w-8 h-8 rounded-full object-center object-cover "
        />
      </div>
    </div>
  );
}
