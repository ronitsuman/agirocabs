//3rd
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StepsSection from "./StepsSection";
import { setBookingDetails } from "../redux/bookingaction";
import bookingReducer from "../redux/bookingreducer";

const HeroSection = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:MM
  };

  const handleFindCars = () => {
    if (!pickupLocation || !dropoffLocation || !pickupDate || !dropDate) {
      alert("Please fill in all fields.");
      return;
    }
  
    const details = {
      pickupLocation,
      dropoffLocation,
      pickupDateTime: pickupDate,
      returnDateTime: dropDate,
    };
  
    dispatch(setBookingDetails(details));
    console.log("Dispatched Booking Details:", details);
    navigate("/cars");
  };
  
  
  ;

  useEffect(() => {
    setPickupDate(getCurrentDateTime());
    setDropDate(getCurrentDateTime());
  }, []);

  // const handleFindCars = () => {
  //   dispatch(setBookingDetails({
  //     pickupLocation,
  //     dropoffLocation,
  //     pickupDateTime: pickupDate,
  //     returnDateTime: dropDate,
  //   }));

  //   navigate("/cars");
  // };

  return (
    <div className="relative w-full h-full pt-32 overflow-hidden bg-fixed bg-center bg-cover bg-[url('/Page-01.png')]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bgvideo2.mp4" type="video/mp4" />
          <img src="Page-01.png" alt="Fallback background" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold"
        >
          Looking for a <span className="text-[#E94E3A]">vehicle?</span> You're at the right place.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg md:text-xl font-sans"
        >
          Book your self Driven Car easily with AgiroCabs
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-[#feffea]/60 text-black p-4 md:p-6 rounded-lg shadow-lg w-full max-w-5xl mx-4 md:mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-12">
            {/* Pickup & Drop Details */}
            <div className="w-full md:w-1/2 space-y-4">
              <div>
                <label htmlFor="pickupLocation" className="font-bold text-lg md:text-xl block mb-2">
                  Pickup Location
                </label>
                <select
                  id="pickupLocation"
                  className="p-3 md:p-4 border rounded-md w-full text-sm md:text-base"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                >
                  <option value="" hidden disabled>Select Pickup Location</option>
                  <option value="Patna airport">Jayprakash International Airport Patna</option>
                  <option value="Patna junction">Patna Junction</option>
                  <option value="Danapur Junction">Danapur Junction</option>
                  <option value="Patliputra station">Patliputra Railway Station</option>
                  <option value="Boring road">Boring Road</option>
                </select>
              </div>

              <div>
                <label htmlFor="pickUpDateTime" className="font-bold text-lg md:text-xl block mb-2">
                  Pick Up Date & Time
                </label>
                <input
                  type="datetime-local"
                  id="pickUpDateTime"
                  className="p-3 border rounded-md w-full text-sm md:text-base"
                  value={pickupDate}
                  min={getCurrentDateTime()}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>
            </div>

            {/* Dropoff Details */}
            <div className="w-full md:w-1/2 space-y-4">
              <div>
                <label htmlFor="dropoffLocation" className="font-bold text-lg md:text-xl block mb-2">
                  Drop-Off Location
                </label>
                <select
                  id="dropoffLocation"
                  className="p-3 md:p-4 border rounded-md w-full text-sm md:text-base"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                >
                  <option value="" hidden disabled>Select Drop Location</option>
                  <option value="Patna airport">Jayprakash International Airport Patna</option>
                  <option value="Patna junction">Patna Junction</option>
                  <option value="Danapur Junction">Danapur Junction</option>
                  <option value="Patliputra station">Patliputra Railway Station</option>
                  <option value="Boring road">Boring Road</option>
                </select>
              </div>

              <div>
                <label htmlFor="ReturnDateTime" className="font-bold text-lg md:text-xl block mb-2">
                  Return Date & Time
                </label>
                <input
                  type="datetime-local"
                  id="ReturnDateTime"
                  min={getCurrentDateTime()}
                  className="p-3 border rounded-md w-full text-sm md:text-base"
                  value={dropDate}
                  onChange={(e) => setDropDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleFindCars}
              className="bg-[#E94E3A] text-white px-4 py-2 md:px-6 md:py-3 rounded-md w-full sm:w-[300px] md:w-[400px] transition-colors duration-300"
            >
              Find Cars
            </button>
          </div>
        </motion.div>

        <StepsSection />
      </div>
    </div>
  );
};

export default HeroSection;
