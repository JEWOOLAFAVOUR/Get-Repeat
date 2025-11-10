import React from "react";
import { Play } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Plays: React.FC = () => {
  const playsData = [
    {
      id: 1,
      category: "Cross-sell Moment",
      title: "Suggest Predicted Products Anywhere",
      type: "Email • Reusable Block",
      description:
        "Use Repeat's Product Predictions to suggest a customer's next favorite product in any email campaign or flow",
      link: "/plays/suggest-predicted-products-anywhere",
    },
    {
      id: 2,
      category: "Cross-sell Moment",
      title: "Cross-sell Your Best Sellers",
      type: "Email • SMS • Flow",
      description:
        "Use an automated email or SMS featuring your best sellers to drive a customer to their next favorite",
      link: "/plays/cross-sell-best-sellers-at-the-right-time",
    },
    {
      id: 3,
      category: "Cross-sell Moment",
      title: "Cross-sell Predicted Products",
      type: "Email • SMS • Flow",
      description:
        "Nudge customers towards their next purchase when they're primed for a cross-sell",
      link: "/plays/cross-sell-predicted-products-at-the-right-time",
    },
    {
      id: 4,
      category: "Replenishment Moment",
      title: "Replenishment Reminder",
      type: "Email • SMS • Flow",
      description:
        "Reach each customer in the moment they are likely running low on a previously purchased product.",
      link: "/plays/replenishment-reminder-email-flow",
    },
    {
      id: 5,
      category: "Replenishment Moment",
      title: "Late Replenishment Reminder",
      type: "Email • SMS • Flow",
      description:
        "Reach light users of your product in the moment they are running low and other customers when are completely out.",
      link: "/plays/late-replenishment-reminder",
    },
    {
      id: 6,
      category: "Replenishment Moment",
      title: "Send Replenishment Reminder Postcards",
      type: "Direct Mail • Flow",
      description:
        "Combine PostPilot's direct mail with Repeat's replenishment timing to send reorder reminder postcards.",
      link: "/plays/send-replenishment-reminder-postcards",
    },
    {
      id: 7,
      category: "About to Lapse Moment",
      title: "Lapse Prevention Flow",
      type: "Email • SMS • Flow",
      description:
        "Trigger an email or sms flow for customers in the moment before they are predicted to never to return again.",
      link: "/plays/lapse-prevention-flow",
    },
    {
      id: 8,
      category: "Subscription Upsell Moment",
      title: "Automatically Reach Subscription-Ready Customers",
      type: "Email • SMS • Flow",
      description:
        "Identify and connect with customers on the verge of placing a subscription order via email or SMS",
      link: "/plays/automatically-reach-subscription-ready-customers",
    },
  ];

  return (
    <div className="min-h-screen bg-pale">
      {/* Navbar */}
      <div className="bg-primary px-5 pt-3.5 pb-8">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-5 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-[32px] font-bold font-poppins text-black mb-5 leading-tight">
            Plays
          </h1>
        </div>

        {/* Plays Grid */}
        <div className="space-y-4">
          {playsData.map((play) => (
            <a
              key={play.id}
              href={play.link}
              className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                  <Play size={14} className="text-gray-600 ml-0.5" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[12px] text-gray-500 font-medium">
                      {play.category}
                    </span>
                  </div>

                  <h3 className="text-[16px] font-medium font-poppins text-black mb-1 group-hover:text-gray-700 transition-colors">
                    {play.title}
                  </h3>

                  <div className="text-[12px] text-gray-500 font-medium mb-2">
                    {play.type}
                  </div>

                  <p className="text-[13px] text-gray-700 font-light leading-relaxed">
                    {play.description}
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

export default Plays;
