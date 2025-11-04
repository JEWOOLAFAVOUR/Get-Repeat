import React from "react";
import read_1 from "../assets/images/read_1.png";
import read_2 from "../assets/images/read_2.jpeg";
import read_3 from "../assets/images/read_3.png";
import { ArrowRight } from "lucide-react";

interface ReadMoreType {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const Readmore: React.FC = () => {
  const readMoreData: ReadMoreType[] = [
    {
      id: 1,
      title: "How to Quickly Build a Replenishment Flow",
      desc: "The cost of a personalized replenishment flow is almost always a mess of branching logic and a ton of someone's time. But not anymore",
      img: read_1,
    },
    {
      id: 2,
      title: "How to Quickly Build a Replenishment Flow",
      desc: "The cost of a personalized replenishment flow is almost always a mess of branching logic and a ton of someone's time. But not anymore",
      img: read_2,
    },
    {
      id: 3,
      title: "How to Quickly Build a Replenishment Flow",
      desc: "The cost of a personalized replenishment flow is almost always a mess of branching logic and a ton of someone's time. But not anymore",
      img: read_3,
    },
  ];

  return (
    <div className="bg-white py-10 px-80">
      <h1 className="uppercase text-[40px] font-bold">Read More</h1>
      <div className="h-px bg-black" />
      <div className="flex mt-6 justify-between">
        {readMoreData.map((data) => {
          return (
            <div
              key={data.id}
              className="h-100 w-66 border rounded-3xl cursor-pointer transition-all"
            >
              <img
                src={data.img}
                alt="image"
                className="h-54 rounded-tl-3xl rounded-tr-3xl w-full"
              />
              <div className="px-3 py-3">
                <p className="text-[15px] font-medium text-black">
                  {data.title}
                </p>
                <p className="text-[12px] font-light mt-2">{data.desc}</p>
                <div className="flex items-center mt-1">
                  <p className="text-[12px] font-light text-gray-700 underline">
                    Read more
                  </p>
                  <ArrowRight size={12} className="text-gray-700" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Readmore;
