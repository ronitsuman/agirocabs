import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    name: "QUALITY",
    content:
      "We offer a meticulously curated collection of the most sought-after vehicles on the market. Whether you prefer the sporty allure of a high-performance sports car, the sophistication of a sleek sedan, or the versatility of a premium SUV, we have the perfect car to match your discerning taste. We focus on delivering high-quality vehicles that ensure safety, performance, and durability. Each car is rigorously tested to meet our standards.",
  },
  {
    name: "COMFORT",
    content:
      "Our vehicles are designed with your comfort in mind — from plush seating to smooth rides. Enjoy every journey in utmost relaxation. We prioritize your comfort and convenience throughout your journey. Whether you're on a business trip or enjoying a vacation, we offer a wide range of well-maintained, comfortable cars to suit your needs.",
  },
  {
    name: "PRESTIGE",
    content:
      "We understand that prestige goes beyond luxury. It's about making a statement, embracing sophistication, and indulging in the finer things in life. That's why we offer an exclusive selection of prestigious cars that exude elegance, style, and status.",
  },
];

const QualitySection = () => {
  const [activeTab, setActiveTab] = useState("PRESTIGE");

  const activeContent = tabs.find((tab) => tab.name === activeTab)?.content;

  return (
    <section className="w-full h-[410px] bg-[#F6F6F6]  px-4 md:px-12 lg:px-1 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Left Image */}
    <div className="w-full md:w-1/2 h-[400px] overflow-hidden rounded-lg">
      <img
       src="Quality1.webp"
       alt="Client driving"
       className="w-full h-full object-cover object-center"
       />
    </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-6 text-gray-900">
            Only Quality For Clients
          </h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-4 py-2 rounded shadow-sm transition-all font-medium hover:text-green-400 ${
                  activeTab === tab.name
                    ? "bg-[#E94E3A] text-white"
                    : "bg-gray-100 text-gray-700 "
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Text Content with Animation */}
          <div className="min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-gray-600 text-[16px] leading-relaxed max-w-xl"
              >
                {activeContent}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
