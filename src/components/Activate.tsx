import React from "react";
import activate_1 from "../assets/images/activate_1.png";
import { CirclePlay, Clock3 } from "lucide-react";

const Activate: React.FC = () => {
  const featuredData = [
    {
      id: 1,
      title: "Automatically Reach Subscription-Ready Customers",
      type: "Subscription Upsell Moment",
      sendType: ["Email", "SMS", "Flow"],
      description:
        "Identify and connect with customers on the verge of placing a subscription order via email or sms",
    },
    {
      id: 2,
      title: "Automatically Reach Subscription-Ready Customers",
      type: "Subscription Upsell Moment",
      sendType: ["Email", "SMS", "Flow"],
      description:
        "Identify and connect with customers on the verge of placing a subscription order via email or sms",
    },
    {
      id: 3,
      title: "Automatically Reach Subscription-Ready Customers",
      type: "Subscription Upsell Moment",
      sendType: ["Email", "SMS", "Flow"],
      description:
        "Identify and connect with customers on the verge of placing a subscription order via email or sms",
    },
  ];
  return (
    <div className="bg-white py-10 px-80">
      <h1 className="uppercase text-[40px] font-bold">
        Activate Moments With Plays
      </h1>
      <div className="flex mr-30">
        <p className="text-[16px] font-light mr-20">
          <span className="font-medium">
            The key to simplifying your work without sacrificing performance:
          </span>
          ready-made Plays, like Moment-specific flows, dynamic email banners,
          and personalized direct mail, make it easy to leverage the Moments
          that Repeat surfaces. They’ll help you{" "}
          <span className="font-medium">
            quickly create campaigns and flows
          </span>{" "}
          that resonate with your customers, no matter what stage of the
          lifecycle they’re in.
        </p>
        <img src={activate_1} alt="activate_logo" className="h-80 w-full" />
      </div>

      {/* featured plays */}
      <div className="mt-10">
        <h1 className="text-[40px] font-medium uppercase">Featured Plays</h1>
        <div className="h-px border" />
        <div className="flex justify-between mt-10">
          {featuredData.map((data) => {
            return (
              <div key={data.id} className="h-68 w-68 border rounded-2xl p-2">
                <div className="flex">
                  <CirclePlay className="h-6" />
                  <p className="text-[17px] ml-2">{data.title}</p>
                </div>
                <div className="flex mt-3">
                  <Clock3 className="h-3" />
                  <p className="text-[13px] font-light text-black underline ">
                    {data.type}
                  </p>
                </div>
                <div className="flex mt-3">
                  {data.sendType.map((item) => {
                    return (
                      <div
                        key={item}
                        className="px-3 py-0.5 bg-pale mr-3 rounded-2xl"
                      >
                        <p className="text-[14px] ">{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activate;
