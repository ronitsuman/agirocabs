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
    <div className=" relative mt-14 w-[100%] py-12 px-6 lg:px-20 ">
      {/* Connecting Line */}
      <div className="absolute md:top-19   lg:top-19 lg:left-42   lg:w-[80%]   h-[0.2px] bg-green-500 hidden md:block"></div>

      {/* Steps Container */}
      <div className="relative flex flex-col  md:flex-row items-center  justify-between gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex flex-row gap-12 md:flex-col items-center text-center md:w-1/4"
          >
            {/* Step Number */}
            <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center text-lg font-bold rounded-md relative z-10">
              {step.id}
            </div>
            {/* Step Title & Description */}
            <div className="flex flex-col gap-2 md:mt-[-30px] lg:mt-[-35px]">
            <h3 className=" text-left text-white lg:text-lg  font-bold  lg:text-center">{step.title}</h3>
            <p className="text-gray-200 w-[150px] text-sm  text-left">{step.description}</p>

            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
