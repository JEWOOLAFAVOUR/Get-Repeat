import React from "react";
import moment from "../assets/images/moment.png";

const Moment: React.FC = () => {
  const momentData = [
    {
      id: 1,
      title: "Replenishment Moment",
      desc: "Customers in this Moment are ready to buy more of a product they've bought before.",
      type: "Explore replenishment",
    },
    {
      id: 2,
      title: "Replenishment Moment",
      desc: "Customers in this Moment are ready to buy more of a product they've bought before.",
      type: "Explore replenishment",
    },
    {
      id: 3,
      title: "Replenishment Moment",
      desc: "Customers in this Moment are ready to buy more of a product they've bought before.",
      type: "Explore replenishment",
    },
    {
      id: 4,
      title: "Replenishment Moment",
      desc: "Customers in this Moment are ready to buy more of a product they've bought before.",
      type: "Explore replenishment",
    },
  ];

  return (
    <div className="bg-pale py-7 px-80">
      <p className="text-[35px] font-bold text-black uppercase">
        Drive more second orders with moments that matter
      </p>
      <div className="flex">
        <div className="">
          <p>
            Repeat monitors when customers enter key Moments—think
            cross-selling, replenishment, lapsing—and passes that intelligence
            to the email and SMS platforms you use today. The result is more
            personalized campaigns, smarter flows, and an easier retention
            workflow.
          </p>
          <p>
            Moments make it a breeze to create the kind of hyper-personalized
            messaging that used to require complicated if/else logic, rigid
            timing, and burdensome setup.
          </p>
        </div>
        <img src={moment} alt="moment-image" className="h-64 w-60" />
      </div>

      {/* featured moment */}
      <p className="text-[20px] font-bold uppercase">Featured Moments</p>
      <div className="h-px bg-black" />
      <div className="grid grid-cols-2 justify-between">
        {momentData.map((data) => {
          return (
            <div
              key={data.id}
              className="p-4 bg-white h-30 rounded-2xl w-100 border mt-5 cursor-pointer"
            >
              <p className="text-[15px] text-black font-medium">{data.title}</p>
              <p className="text-[13px] text-black font-light block mt-2">
                {data.desc}
              </p>
              <div>
                <p className="text-[14px] font-light text-black underline mt-0.5">
                  {data.type}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Moment;
