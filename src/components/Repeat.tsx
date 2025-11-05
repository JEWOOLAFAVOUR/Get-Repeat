import React from "react";
import repeat_1 from "../assets/images/repeat_1.jpeg";
import repeat_2 from "../assets/images/repeat_2.jpeg";
import repeat_3 from "../assets/images/repeat_3.jpeg";

const Repeat: React.FC = () => {
  const repeatData = [
    {
      id: 1,
      title: "Ingest and analyze",
      desc: "Repeat connects to your Shopify store to ingest all of your historical orders and each new order that your customers place. We analyze those orders at the store level to identify trends and at the customer level to understand individual behavior.",
      img: repeat_1,
    },
    {
      id: 2,
      title: "transform and report",
      desc: "Repeat feels like magic, but we're not a black box. We utilize your store's data to produce valuable insights and reports that help you level up your retention strategy with the same intelligence that fuels Repeat's tools.",
      img: repeat_2,
    },
    {
      id: 3,
      title: "automate and act",
      desc: "Repeat generates events that you can use to automate flows and enriches customer profiles with data for personalization and segmentation. It all flows seamlessly into Klaviyo, Postscript, and Attentive to give you new ways to optimize your retention workflow.",
      img: repeat_3,
    },
  ];
  return (
    <div className="bg-pale py-10 px-80 ">
      <h1 className="uppercase text-[40px] font-bold">How repeat works</h1>
      <div className="mt-5 mr-20">
        {repeatData.map((data) => {
          return (
            <div key={data.id} className="flex mb-5 justify-between">
              <div className="mr-4">
                <h1 className="text-[24px] font-bold text-black uppercase">
                  {data.title}
                </h1>
                <p className="text-[16px] font-light text-black font-montserrat">
                  {data.desc}
                </p>
              </div>
              <img
                src={data.img}
                alt="repeat_description"
                className="h-44 w-120 rounded-2xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Repeat;
