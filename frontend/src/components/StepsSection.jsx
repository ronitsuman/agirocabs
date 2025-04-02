import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Choose a vehicle",
    description:
      "Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, choice, and destination.",
  },
  {
    id: 2,
    title: "Pick location & date",
    description:
      "Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.",
  },
  {
    id: 3,
    title: "Make a booking",
    description:
      "Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence.",
  },
  {
    id: 4,
    title: "Sit back & relax",
    description:
      "Hassle-free convenience as we take care of every detail, allowing you to unwind and embrace a journey filled with comfort.",
  },
];

const StepsSection = () => {
  return (
    <div className="relative mt-14 w-full py-12 px-6 lg:px-20">
      {/* Connecting Line */}
      <div className="absolute top-20 left-0 w-full h-[0.5px] bg-green-500 hidden md:block"></div>

      {/* Steps Container */}
      <div className="relative flex flex-col md:flex-row items-center  justify-between gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex  flex-col items-center text-center md:w-1/4"
          >
            {/* Step Number */}
            <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center text-lg font-bold rounded-md relative z-10">
              {step.id}
            </div>
            {/* Step Title & Description */}
            <h3 className="text-lg  font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-300 w-[150px] text-sm mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
