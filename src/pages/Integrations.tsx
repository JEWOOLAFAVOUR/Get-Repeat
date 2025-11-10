import React from "react";
import { Settings } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Integrations: React.FC = () => {
  const integrationsData = [
    {
      id: 1,
      name: "Klaviyo",
      description:
        "Use Repeat and Klaviyo together to trigger flows, personalize campaigns, and build segments",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/6655b88e-1135-4f60-ade9-cec1c5daaadd/klaviyo/w=400,quality=90,fit=scale-down",
      link: "/tools/klaviyo",
    },
    {
      id: 2,
      name: "Attentive",
      description:
        "Use Repeat and Attentive together to trigger and personalize journeys",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/e17e0e36-b9dd-4a12-aa0e-c725e3b68d47/attentive/w=400,quality=90,fit=scale-down",
      link: "/tools/attentive",
    },
    {
      id: 3,
      name: "Postscript",
      description:
        "Use Repeat and Postscript together to trigger and personalize flows",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/e9a58f3d-1a72-45d0-88e5-8cd4e7354a99/postscript/w=400,quality=90,fit=scale-down",
      link: "/tools/postscript",
    },
    {
      id: 4,
      name: "PostPilot",
      description:
        "Use Repeat and PostPilot together to send direct mail at just the right moment",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/33624456-fa99-46e1-932e-a124d674fd02/postpilot/w=400,quality=90,fit=scale-down",
      link: "/tools/postpilot-repeat",
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
            Integrations
          </h1>

          <h2 className="text-[24px] font-medium font-poppins text-black mb-4">
            Simplify retention workflows with Repeat's integrations
          </h2>

          <div className="space-y-3 text-[15px] font-light text-black leading-relaxed max-w-4xl mb-6">
            <p>
              Integrating Repeat with your existing marketing channels turns
              them into supercharged second order machines. By automating
              personalized messaging at high-leverage lifecycle Moments, you can
              streamline your retention workflows and encourage more customers
              to make repeat orders.
            </p>

            <p>
              Connect Repeat with your marketing channels to easily trigger
              automations, personalize campaigns, and segment customer lists.
            </p>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrationsData.map((integration) => (
            <a
              key={integration.id}
              href={integration.link}
              className="group block bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-video bg-gray-50 overflow-hidden">
                <img
                  src={integration.image}
                  alt={integration.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Settings size={12} className="text-gray-600" />
                  </div>

                  <h3 className="text-[18px] font-medium font-poppins text-black group-hover:text-gray-700 transition-colors">
                    {integration.name}
                  </h3>
                </div>

                <p className="text-[13px] text-gray-700 font-light leading-relaxed">
                  {integration.description}
                </p>
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

export default Integrations;
