import React from "react";
import moment from "../assets/images/moment.png";

const Moment: React.FC = () => {
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
    </div>
  );
};

export default Moment;
