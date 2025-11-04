import { ArrowRight } from "lucide-react";
import React from "react";

const Unlock: React.FC = () => {
  return (
    <div className="bg-primary py-10 px-60">
      <h1 className="text-[42px] text-black font-medium">
        UNLOCK YOUR CUSTOMER MOMENTS
      </h1>
      <div className="mr-140">
        <p className="text-[17px] text-black font-light font-montserrat">
          Start activating the Moments that matter. Get started now to see how
          Repeat can <span className="font-bold">simplify</span> and{" "}
          <span className="font-bold">supercharge</span> your retention
          workflow.
        </p>
      </div>
      <div className="">
        <div className="py-4 border bg-white rounded-full flex items-center mt-7 cursor-pointer pl-5 w-120">
          <ArrowRight className="text-black mr-3" />
          <span className="text-[33px] font-medium">GET STARTED</span>
        </div>
        <p className="text-xl font-light text-black underline mt-3 cursor-pointer">
          Or, book a demo
        </p>
      </div>
    </div>
  );
};

export default Unlock;
