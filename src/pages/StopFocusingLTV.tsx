import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StopFocusingLTV: React.FC = () => {
  const statsData = [
    {
      brand: "Dr. Squatch",
      metric: "repurchase rates",
      improvement: "10%",
    },
    {
      brand: "Clevr",
      metric: "purchase frequency",
      improvement: "13%",
    },
    {
      brand: "Olipop",
      metric: "returning customer AOV",
      improvement: "14%",
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
          <h1 className="text-[32px] font-bold font-poppins text-black mb-6 leading-tight">
            Stop Focusing on LTV. Start Impacting It.
          </h1>

          <div className="space-y-4 text-[15px] font-light text-black leading-relaxed">
            <p className="text-[16px] font-medium">
              Most people want to tell you to obsess over LTV. Most people want
              to tell you what your ideal LTV:CAC ratio is. Most people want to
              tell you what your 60-day LTV should be. Not us.
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="mb-10">
          <h2 className="text-[20px] font-bold font-poppins text-black mb-5">
            That's because we know LTV isn't something to focus on.
          </h2>

          <div className="space-y-3 text-[14px] font-light text-black leading-relaxed mb-6">
            <p>
              <strong>Sounds crazy?</strong>
            </p>

            <p>
              It's not. LTV is a compound metric, meaning you've got underlying
              components to address and improve in order to move the needle on
              the KPI everyone tells you to focus on.
            </p>

            <p>
              <strong>
                What good is focusing on something if you can't impact it?
              </strong>
            </p>

            <p>
              At Repeat, you're more likely to find us talking about things like
              repurchase rates, purchase frequency, returning customer AOV.
              These are the components that comprise LTV. These are the metrics
              we obsess over. These are the levers you need to pull in order to
              improve LTV.
            </p>
          </div>

          {/* LTV Components Image */}
          <div className="mb-6">
            <img
              src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4a98294c-eed8-4906-bac2-2a4fea5c420d/Untitled/w=1920,quality=90,fit=scale-down"
              alt="LTV Components Diagram"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className="text-[14px] font-light text-black leading-relaxed mb-6">
            And these are the things we can help you do.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-10">
          <div className="space-y-3 text-[14px] font-light text-black leading-relaxed mb-5">
            <p>
              Like Dr. Squatch, who uses Repeat to improve repurchase rates by
              10%. And Clevr, who uses Repeat to improve purchase frequency by
              13%. And Olipop, who uses Repeat to increase returning customer
              AOV by 14%.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center"
              >
                <div className="text-[20px] font-bold text-black mb-1">
                  {stat.improvement}
                </div>
                <div className="text-[13px] text-gray-700 font-medium mb-1">
                  {stat.metric}
                </div>
                <div className="text-[12px] text-gray-600 font-light">
                  {stat.brand}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-[14px] font-light text-black leading-relaxed">
            <p>
              They trust us, because we've built software based on experience.
              We've run our own brands, and we've worked at brands like Bev, Dr.
              Squatch and Hydrant. We know what retention metrics generate
              profitable growth and we know which ones look good in a slide
              deck.
            </p>

            <p>
              And we know what DTC brands' retention curves look like—and how
              they've improved them.
            </p>

            <p>
              We also know that most of those curves look similar. Most brands
              end up with a repurchase rate between 22 and 28%. And most brands
              end up spinning their wheels to impact that curve even a little
              bit—because they focus on the wrong metric.
            </p>

            <p>
              Yet we can help you move each metric—repurchase rates, purchase
              frequency and AOV—because we focus there. Higher LTV ends up being
              a byproduct.
            </p>

            <p>
              <strong>
                You'll be hard pressed to find anyone obsessing over this stuff
                more than us.
              </strong>
            </p>

            <p>
              So, stop focusing on LTV. Start focusing on the things that impact
              it, instead.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="/?get-started=true"
            className="text-[14px] text-black underline font-light hover:text-gray-700 transition-colors"
          >
            Start here.
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StopFocusingLTV;
