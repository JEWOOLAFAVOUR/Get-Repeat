import React from "react";
import icon_white from "../assets/images/icon_white.svg";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const fotterData: string[] = [
    "Blog",
    "Podcast",
    "Newsletter",
    "Jobs",
    "Privacy",
    "Terms of Service",
  ];
  return (
    <div className="bg-dark py-12 px-24">
      <div className="flex justify-between mb-5">
        <img
          src={icon_white}
          alt="icon"
          className="h-12 w-auto cursor-pointer"
        />
        <div className="flex">
          <Linkedin className="text-white h-6 w-auto ml-4 cursor-pointer" />
          <Instagram className="text-white h-6 w-auto ml-4 cursor-pointer" />
          <Twitter className="text-white h-6 w-auto ml-4 cursor-pointer" />
        </div>
      </div>
      <div className="flex my-8">
        {fotterData.map((item) => {
          return (
            <p
              key={item}
              className="text-white text-[17px] font-light mr-4 cursor-pointer hover:text-gray-200 transition-all"
            >
              {item}
            </p>
          );
        })}
      </div>
      <p className="text-[16px] text-gray-300 font-medium font-montserrat">
        © 2024 REPEAT INC. Moments is a trademark of Repeat, Inc.
      </p>
    </div>
  );
};

export default Footer;
