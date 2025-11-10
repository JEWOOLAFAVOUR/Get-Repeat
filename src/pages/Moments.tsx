import React from "react";
import { Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Moments: React.FC = () => {
  const momentsData = [
    {
      id: 1,
      title: "Replenishment Moment",
      description:
        "Customers in this Moment are ready to buy more of a product they've bought before.",
      link: "/moments/replenishment",
    },
    {
      id: 2,
      title: "About to Lapse Moment",
      description:
        "Customers in this Moment are at risk of lapsing permanently",
      link: "/moments/lapse-prevention",
    },
    {
      id: 3,
      title: "Cross-sell Moment",
      description:
        "Customers in this Moment are primed to explore more of your product catalog.",
      link: "/moments/cross-sell",
    },
    {
      id: 4,
      title: "Subscription Upsell Moment",
      description:
        "Customers in this Moment are primed to commit to recurring orders",
      link: "/moments/subscription-upsell",
    },
  ];

  return (
    <div className="min-h-screen bg-pale">
      {/* Navbar */}
      <div className="bg-primary px-5 pt-3.5 pb-8">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-5 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-[32px] font-bold font-poppins text-black mb-5 leading-tight">
            Moments
          </h1>

          <div className="space-y-3 text-[15px] font-light text-black leading-relaxed max-w-3xl">
            <p>
              Repeat automatically monitors when customers enter key lifecycle
              moments—think first to second purchase, replenishment, winback—and
              passes the most impactful data to the email and SMS platforms you
              use today (like Klaviyo, Postscript and Attentive).
            </p>

            <p className="font-medium text-black">The result?</p>

            <p>
              More personalized campaigns, simplified flows, and an all-around
              simpler retention workflow.
            </p>

            <p>
              Moments make it a breeze to create the kind of hyper-personalized
              messaging that used to require complicated if/else logic, rigid
              timing, and burdensome setup.
            </p>
          </div>
        </div>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {momentsData.map((moment) => (
            <a
              key={moment.id}
              href={moment.link}
              className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                <div className="shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                  <Clock size={16} className="text-gray-600" />
                </div>

                <div className="flex-1">
                  <h3 className="text-[16px] font-medium font-poppins text-black mb-2 group-hover:text-gray-700 transition-colors">
                    {moment.title}
                  </h3>
                  <p className="text-[13px] text-gray-700 font-light leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Moments;
