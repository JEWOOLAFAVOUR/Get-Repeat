import React from "react";
import activate_1 from "../assets/images/activate_1.png";

const Activate: React.FC = () => {
  return (
    <div className="bg-white py-10 px-80">
      <h1 className="uppercase text-[40px] font-bold">
        Activate Moments With Plays
      </h1>
      <div className="flex">
        <p className="text-[16px] font-light">
          The key to simplifying your work without sacrificing performance:
          ready-made Plays, like Moment-specific flows, dynamic email banners,
          and personalized direct mail, make it easy to leverage the Moments
          that Repeat surfaces. They’ll help you quickly create campaigns and
          flows that resonate with your customers, no matter what stage of the
          lifecycle they’re in.
        </p>
        <img src={activate_1} alt="activate_logo" className="h-60 w-full" />
      </div>
    </div>
  );
};

export default Activate;
