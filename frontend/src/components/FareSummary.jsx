import React from "react";
import { motion } from "framer-motion";

const FareSummary = ({ car, bookingDetails, fare }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 p-6 rounded-xl shadow-lg h-fit"
    >
      <h3 className="text-xl font-bold mb-4">Fare Summary</h3>

      {/* Car Details */}
      {car && car.model && (
        <div className="mb-4">
          <p className="text-gray-700">Car: <span className="font-semibold">{car.model}</span></p>
          <p className="text-gray-700">Rate: <span className="font-semibold">₹{car.rate || 0}/Hr</span></p>
        </div>
      )}

      {/* Booking Details */}
      {bookingDetails && (
        <div className="mb-4">
          <p className="text-gray-700">
            Pickup: <span className="font-semibold">{bookingDetails.pickupLocation || "Not set"}</span>
          </p>
          <p className="text-gray-700">
            Dropoff: <span className="font-semibold">{bookingDetails.dropoffLocation || "Not set"}</span>
          </p>
          <p className="text-gray-700">
            Pickup Time: <span className="font-semibold">{bookingDetails.pickupDateTime || "Not set"}</span>
          </p>
          <p className="text-gray-700">
            Return Time: <span className="font-semibold">{bookingDetails.returnDateTime || "Not set"}</span>
          </p>
        </div>
      )}

      {/* Fare */}
      <p className="mb-4">
        Total Fare: <span className="font-semibold">₹{fare || 0}</span>
      </p>

      <button
        disabled={fare === 0}
        className={`w-full py-2 mt-4 rounded text-white ${
          fare === 0 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        } transition-colors`}
      >
        Proceed to Payment
      </button>
    </motion.div>
  );
};

export default FareSummary;