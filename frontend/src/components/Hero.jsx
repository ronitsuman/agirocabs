import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCar, FaCarSide, FaShuttleVan, FaTruck } from "react-icons/fa";
import StepsSection from "./StepsSection";


const HeroSection = () => {
  const [vehicleType, setVehicleType] = useState("Sedan");
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  

  //  get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16); // Converted to "YYYY-MM-DDTHH:MM" 
  };

  useEffect(() => {
    setPickupDate(getCurrentDateTime());
    setDropDate(getCurrentDateTime());
  }, []);

  const vehicleOptions = [
    { type: "Sedan", icon: <FaCar /> },
    { type: "Hatchback", icon: <FaCarSide /> },
    { type: "MPV", icon: <FaShuttleVan /> },
    { type: "SUV", icon: <FaTruck /> },
  ];

  return (
    <div className=" relative w-full h-full bg-fixed bg-center bg-cover bg-[url('/1.webp')] pt-32">
      
      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold"
        >
          Looking for a <span className="text-green-400">vehicle?</span> You're at the right place.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg md:text-xl"
        >
          Book your self Driven Car easily with AgiroCabs
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-3xl"
        >
          {/* Vehicle Type Selection */}
          <div className="flex justify-center  items-center  gap-3 mb-4 flex-auto">
            <h1 className="font-bold mb-3 ">What is Your vehicle Type?</h1>
            {vehicleOptions.map(({ type, icon }) => (
              <button
                key={type}
                className={`p-2 rounded-md w-1/4 text-center font-medium flex flex-col items-center ${vehicleType === type ? "bg-green-500 text-white" : "bg-gray-200"}`}
                onClick={() => setVehicleType(type)}
              >
                <span className="text-xl">{icon}</span>
                {type}
              </button>
            ))}
          </div>

          {/* Pickup & Drop Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <label htmlFor="Pickup Location" className="font-bold text-xl">Pickup Location :</label>
            <input type="text" id="Pickup Location" placeholder="Pickup Location" className="p-3 border rounded-md w-full" />
             <label htmlFor="Drop-Off Location " className="font-bold text-xl">Drop-Off Location :</label>
            <input type="text" id="Drop-Off Location " placeholder="Drop-off Location" className="p-3 border rounded-md w-full" />
          </div>

          {/* Date & Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <label htmlFor="Pick Up Date & Time" className="font-bold text-xl">Pick Up Date & Time :</label>
            <input
              type="datetime-local"
              id="Pick Up Date & Time"
              className="p-3 border rounded-md w-full"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
            <label htmlFor="Return Date & Time" className="font-bold text-xl">Return Date & Time</label>
            <input
              type="datetime-local"
              className="p-3 border rounded-md w-full"
              value={dropDate}
              onChange={(e) => setDropDate(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4 flex justify-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md">Find Cars</button>
          </div>
        </motion.div>
        <StepsSection/>
      </div>
      
      
    </div>
  );
};

export default HeroSection;
