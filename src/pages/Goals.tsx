import React from "react";
import { Activity } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Goals: React.FC = () => {
  const goalsData = [
    {
      id: 1,
      title: "Get more 2nd time customers",
      description: "Get first-timers back for more",
      link: "/goals/get-more-2nd-orders",
    },
    {
      id: 2,
      title: "Increase subscription customers",
      description: "Grow your base of recurring orders",
      link: "/goals/drive-subscriptions",
    },
    {
      id: 3,
      title: "Decrease customer churn",
      description: "Save customers at risk of lapsing",
      link: "/goals/reduce-customer-churn",
    },
    {
      id: 4,
      title: "Encourage Cross-Sells",
      description: "Help customers explore your products",
      link: "/goals/encourage-product-discovery",
    },
    {
      id: 5,
      title: "Reduce replenishment time",
      description: "Help customers reorder faster",
      link: "/goals/shorter-replenishment-time",
    },
    {
      id: 6,
      title: "Shorten time between orders",
      description: "Get customers back sooner",
      link: "/goals/reduce-time-between-orders",
    },
    {
      id: 7,
      title: "Boost returning customer rate",
      description: "Keep customers coming back",
      link: "/goals/increase-returning-customer-rate",
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
            Goals
          </h1>

          <h2 className="text-[20px] font-medium font-poppins text-black mb-6">
            Browse plays by the goal you want to achieve
          </h2>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goalsData.map((goal) => (
            <a
              key={goal.id}
              href={goal.link}
              className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                  <Activity size={16} className="text-gray-600" />
                </div>

                <div className="flex-1">
                  <h3 className="text-[16px] font-medium font-poppins text-black mb-2 group-hover:text-gray-700 transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-[13px] text-gray-700 font-light leading-relaxed mb-3">
                    {goal.description}
                  </p>

                  <div className="text-[12px] text-gray-500 font-medium underline">
                    Explore plays →
                  </div>
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

export default Goals;
