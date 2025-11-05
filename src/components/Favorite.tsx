import React from "react";
import { favoriteData } from "./data";
import { ArrowRight } from "lucide-react";
// import fav_1 from "../assets/images/fav_1.png";
// import fav_2 from "../assets/images/fav_2.png";
// import fav_3 from "../assets/images/fav_3.png";

const Favorite: React.FC = () => {
  return (
    <div className=" py-6 bg-white sm:px-52 lg:px-80 pt-16">
      <div className="sm:mr-32 lg:mr-40">
        <p className="uppercase text-[40px] font-bold ">
          Your favorite brands are having a moment
        </p>
      </div>
      <div className="h-px bg-black" />
      {/* images */}
      <div className="sm:block lg:flex justify-between items-center mt-6">
        {favoriteData.map((data) => {
          return (
            <div
              key={data.id}
              className="h-110 sm:w-full lg:w-68 border rounded-2xl mb-8"
            >
              <img
                src={data.slide}
                alt={data.title}
                className="h-52 sm:w-full lg:w-68 rounded-tl-2xl rounded-tr-2xl"
              />
              <div className="px-3 pt-3">
                <p className="font-medium text-[17px]">{data.title}</p>
                <p className="text-[13px] text-black font-light mt-1 block">
                  {data.description}
                </p>
                <p className="text-[13px] text-black italic font-light mt-1 block">
                  {data.dept}
                </p>
                <p className="text-[13px] text-black font-medium block mt-1">
                  {data.author}
                </p>
                <div className="mt-1 items-center flex cursor-pointer hover:text-gray-700 transition-all">
                  <p className="text-[13.5px] text-gray-500 font-light">
                    Read more
                  </p>
                  <ArrowRight size={10} className="ml-2" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorite;
