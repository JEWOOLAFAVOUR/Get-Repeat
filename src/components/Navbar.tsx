import React from "react";
import { ChevronDown } from "lucide-react";

import logo from "../assets/images/logo.png";

interface NavItem {
  id: number;
  title: string;
  hasDropdown?: boolean;
}

interface DropdownItem {
  id: number;
  title: string;
  href: string;
}

const Navbar: React.FC = () => {
  const navData: NavItem[] = [
    { id: 1, title: "Product", hasDropdown: true },
    { id: 2, title: "Blog" },
    { id: 3, title: "Stop Focusing on LTV" },
  ];

  const productDropdownItems: DropdownItem[] = [
    { id: 1, title: "Moments", href: "#" },
    { id: 2, title: "Plays", href: "#" },
    { id: 3, title: "Goals", href: "#" },
    { id: 4, title: "Examples", href: "#" },
    { id: 5, title: "Integrations", href: "#" },
    { id: 6, title: "Pricing", href: "#" },
  ];

  return (
    <div className="flex justify-between items-center">
      <img src={logo} alt="logo" className="h-5 w-auto" />
      <ul className="flex items-center space-x-8">
        {navData.map((item) => {
          if (item.hasDropdown) {
            return (
              <li key={item.id} className="relative group">
                <div className="flex items-center text-brown font-poppins font-light text-[17px] cursor-pointer hover:text-gray-700 transition-all">
                  <span>{item.title}</span>
                  <ChevronDown
                    size={16}
                    className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                  />
                </div>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {productDropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.id}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-gray-900 font-poppins font-light text-[15px] transition-colors"
                      >
                        {dropdownItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            );
          }

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
