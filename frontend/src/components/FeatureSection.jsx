import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaRoad, FaTag, FaKey } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaTrophy className="text-white text-2xl" />,
    title: "First class services",
    description:
      "Where quality meets exceptional care, creating unforgettable moments and exceeding your every expectation.",
  },
  {
    id: 2,
    icon: <FaRoad className="text-white text-2xl" />,
    title: "24/7 road assistance",
    description:
      "Reliable support when you need it most, keeping you on the move with confidence and peace of mind.",
  },
  {
    id: 3,
    icon: <FaTag className="text-white text-2xl" />,
    title: "Quality at Minimum Expense",
    description:
      "Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.",
  },
  {
    id: 4,
    icon: <FaKey className="text-white text-2xl" />,
    title: "Free Pick-Up & Drop-Off",
    description:
      "Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      {/* Heading Animation (on scroll) */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Our Features
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-gray-600 text-center mb-10 max-w-2xl mx-auto"
      >
        Discover a world of convenience, safety, and customization, paving the
        way for unforgettable adventures and seamless mobility solutions.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        {/* Left Side Features */}
        <div className="space-y-6">
          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="bg-green-500 p-3 rounded-lg">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 , y: -2 }}
          whileInView={{ scale: 1, opacity: 1, y:0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/car.png" // Replace with actual image path
            alt="Car"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Right Side Features */}
        <div className="space-y-6">
          {features.slice(2, 4).map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="bg-green-500 p-3 rounded-lg">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
