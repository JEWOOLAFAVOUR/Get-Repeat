import React from "react";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pricing: React.FC = () => {
  const plans = [
    {
      id: 1,
      name: "STARTER",
      price: "$499",
      period: "/month",
      orders: "5,000–10,000 orders per month",
      isPopular: false,
    },
    {
      id: 2,
      name: "GROWTH",
      price: "$999",
      period: "/month",
      orders: "10,000–20,000 orders per month",
      isPopular: true,
    },
    {
      id: 3,
      name: "PRO",
      price: "Let's chat",
      period: "",
      orders: "More than 20,000 orders per month",
      isPopular: false,
    },
  ];

  const features = [
    "All Repeat Moments™",
    "All integrations",
    "Trigger email & SMS flows with Repeat events",
    "Personalized carts",
    "Retention insights",
  ];

  return (
    <div className="min-h-screen bg-pale">
      {/* Navbar */}
      <div className="bg-primary px-5 pt-3.5 pb-8">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-5 py-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-[32px] font-bold font-poppins text-black mb-5 leading-tight">
            PRICING
          </h1>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white border rounded-xl p-8 text-center ${
                plan.isPopular
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-[20px] font-bold font-poppins text-black mb-6">
                {plan.name}
              </h3>

              <div className="mb-6">
                <div className="text-[36px] font-bold text-black mb-1">
                  {plan.price}
                  {plan.period && (
                    <span className="text-[18px] font-normal text-gray-600">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center mb-6">
                <CheckCircle
                  size={16}
                  className="text-green-500 mr-2 shrink-0"
                />
                <span className="text-[13px] text-gray-700 font-light">
                  {plan.orders}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* All Plans Include */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
          <h3 className="text-[20px] font-bold font-poppins text-black mb-6 text-center">
            ALL PLANS INCLUDE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle
                  size={16}
                  className="text-green-500 mr-3 shrink-0"
                />
                <span className="text-[14px] text-black font-light">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white border border-gray-200 rounded-xl p-8">
          <h3 className="text-[24px] font-bold font-poppins text-black mb-4">
            UNLOCK YOUR CUSTOMER MOMENTS
          </h3>

          <p className="text-[15px] text-gray-700 font-light mb-6 max-w-2xl mx-auto">
            Start activating the Moments that matter. Get started now to see how
            Repeat can simplify and supercharge your retention workflow.
          </p>

          <div className="space-y-3">
            <button className="bg-secondary text-white px-8 py-3 rounded-3xl font-poppins font-medium text-[16px] hover:bg-opacity-90 transition-all">
              → BOOK A DEMO
            </button>

            <p className="text-[14px] text-black underline cursor-pointer hover:text-gray-700 transition-colors">
              Or, get started
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Pricing;
