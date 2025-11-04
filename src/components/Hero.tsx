import { ArrowRight } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="sm:m-20 lg:ml-50 lg:mr-160 sm:mr-40  mt-24">
      <h1 className="text-[50px] font-poppins font-medium text-black">
        SUPERCHARGED LIFECYCLE MARKETING
      </h1>
      <span className="block text-[16px] font-light mt-1">
        <span className="font-medium">Repeat boosts repurchase rate</span> by
        automatically delivering personalized messaging at high-leverage
        Moments.
      </span>
      <div className="py-4 border bg-white rounded-full flex items-center mt-7 cursor-pointer pl-5 ">
        <ArrowRight className="text-black mr-3" />
        <span className="text-[33px] font-medium">BOOK A DEMO</span>
      </div>
      <p className="text-xl font-light text-black underline text-center mt-3 cursor-pointer">
        Or, get started
      </p>
    </div>
  );
};

export default Hero;
