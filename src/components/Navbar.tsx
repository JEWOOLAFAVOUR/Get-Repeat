import React from "react";

import logo from "../assets/images/logo.png";

interface NavItem {
  id: number;
  title: string;
}

const Navbar: React.FC = () => {
  const navData: NavItem[] = [
    { id: 1, title: "Product" },
    { id: 2, title: "Blog" },
    { id: 3, title: "Stop Focusing on LTV" },
  ];
  return (
    <div className="flex justify-between items-center">
      <img src={logo} alt="logo" className="h-5 w-auto" />
      <ul className="flex items-center space-x-8">
        {navData.map((item) => {
          return (
            <li
              key={item.id}
              className="text-brown font-poppins font-light text-[17px] cursor-pointer hover:text-gray-700 transition-all"
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <div className="bg-secondary text-white px-6 py-1.5 rounded-3xl tracking-wide cursor-pointer">
        <span className="font-poppins font-normal text-[16px]">
          BOOK A DEMO
        </span>
      </div>
    </div>
  );
};

export default Navbar;
