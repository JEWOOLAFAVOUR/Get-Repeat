import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Examples: React.FC = () => {
  const examplesData = [
    {
      id: 1,
      category: "Replenishment Reminder Banner",
      title: "Restock the wines you love",
      brand: "Avaline",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5a931b15-3490-4020-bc9b-36b8e5bba5ea/Avaline_Reorder_Banner_Featured/w=400,quality=90,fit=scale-down",
      link: "/email-sms-inspiration/avaline-replenishment-banner",
    },
    {
      id: 2,
      category: "Replenishment Reminder Banner",
      title: "Your Personalized Refill Cart",
      brand: "TRUFF",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/3500e76f-ebf4-42a9-a8a6-8ef0805187bd/truff_reorder_banner_preview/w=400,quality=90,fit=scale-down",
      link: "/email-sms-inspiration/truff-replenishment-banner",
    },
    {
      id: 3,
      category: "Replenishment Reminder",
      title: "Are You All Out?",
      brand: "TRUFF",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/7db151f1-82bf-4fc1-acb3-87a8029f26a3/truff_replenishment_preview/w=400,quality=90,fit=scale-down",
      link: "/email-sms-inspiration/truff-replenishment-reminder",
    },
    {
      id: 4,
      category: "Replenishment Reminder",
      title: "Time to Restock",
      brand: "Perfect Keto",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/fd4054bf-de91-4b4e-a680-aafee08b7f9c/perfect_keto_replenishment_preview/w=400,quality=90,fit=scale-down",
      link: "/email-sms-inspiration/perfect-keto-replenishment",
    },
    {
      id: 5,
      category: "Replenishment Reminder",
      title: "Running Low On Your Favs?",
      brand: "Kopari",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f3b03851-ff25-4444-89f1-f3d103285f9d/Kopari_Beauty_replenishment_1_preview/w=400,quality=90,fit=scale-down",
      link: "/email-sms-inspiration/kopari-replenishment",
    },
    {
      id: 6,
      category: "Late Replenishment Reminder",
      title: "Need to Restock?",
      brand: "Olipop",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/b3b1ebff-134e-4706-86f1-9c1c3c953626/olipop_replenishment_2_preview/w=400,quality=90,fit=scale-down",
      link: "/email-sms-inspiration/olipop-replenishment-2",
    },
    {
      id: 7,
      category: "Suggest Predicted Products Anywhere",
      title: "You might also like…",
      brand: "Ten Thousand",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d0fdcca1-ea78-48f7-949e-ea929e6ae7bb/Ten_Thousand_Product_Predictions_Featured/w=400,quality=90,fit=scale-down",
      link: "/email-sms-inspiration/ten-thousand-you-might-also-like",
    },
    {
      id: 8,
      category: "Lapse Prevention Flow",
      title: "Do You Miss Us?",
      brand: "Kopari",
      image:
        "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/32c3b7a0-ae0d-4ac5-a68c-5fb72ec4ff80/kopari_lapsed_preview/w=400,quality=90,fit=scale-down",
      link: "/email-sms-inspiration/kopari-lapse",
    },
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
        <div className="mb-10">
          <h1 className="text-[32px] font-bold font-poppins text-black mb-5 leading-tight">
            Email & SMS Inspiration
          </h1>

          <h2 className="text-[20px] font-medium font-poppins text-black mb-6">
            How brands use Repeat to personalize retention
          </h2>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examplesData.map((example) => (
            <a
              key={example.id}
              href={example.link}
              className="group block bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="text-[12px] text-gray-500 font-medium mb-2">
                  {example.category}
                </div>

                <h3 className="text-[16px] font-medium font-poppins text-black mb-1 group-hover:text-gray-700 transition-colors">
                  {example.title}
                </h3>

                <p className="text-[13px] text-gray-700 font-light">
                  {example.brand}
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

export default Examples;
