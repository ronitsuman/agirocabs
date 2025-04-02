import React, { useState, useEffect } from "react";
import { FaCarSide, FaCar, FaShuttleVan, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

const VehicleBooking = () => {
  const [vehicleType, setVehicleType] = useState("Hatchback");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    const now = new Date().toISOString().slice(0, 16);
    setPickupDate(now);
    setReturnDate(now);
  }, []);

  const vehicleOptions = [
    { type: "Hatchback", icon: <FaCarSide size={30} /> },
    { type: "Sedan", icon: <FaCar size={30} /> },
    { type: "MPV", icon: <FaShuttleVan size={30} /> },
    { type: "SUV", icon: <FaTruck size={30} /> },
  ];

  return (
    <div className="flex justify-center items-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="font-bold text-lg mb-4">What is your vehicle type?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {vehicleOptions.map(({ type, icon }) => (
            <button
              key={type}
              className={`p-4 rounded-lg flex flex-col items-center font-medium border-2 transition-all w-full ${
                vehicleType === type ? "bg-green-500 text-white" : "bg-gray-100"
              }`}
              onClick={() => setVehicleType(type)}
            >
              {icon}
              <span>{type}</span>
            </button>
          ))}
        </div>

        {/* Pickup and Dropoff Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="font-medium">Pick Up Location</label>
            <input type="text" placeholder="Enter your pickup location" className="w-full p-2 border rounded-md mt-1" />
          </div>
          <div>
            <label className="font-medium">Drop Off Location</label>
            <input type="text" placeholder="Enter your dropoff location" className="w-full p-2 border rounded-md mt-1" />
          </div>
        </div>

        {/* Date & Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="font-medium">Pick Up Date & Time</label>
            <input
              type="datetime-local"
              className="w-full p-2 border rounded-md mt-1"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
          <div>
            <label className="font-medium">Return Date & Time</label>
            <input
              type="datetime-local"
              className="w-full p-2 border rounded-md mt-1"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </div>

        {/* Find Cars Button */}
        <div className="flex justify-end">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">Find Cars</button>
        </div>
      </div>
    </div>
  );
};

export default VehicleBooking;
