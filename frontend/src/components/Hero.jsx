// //3rd
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import StepsSection from "./StepsSection";
// import { setBookingDetails } from "../redux/bookingaction";
// import bookingReducer from "../redux/bookingreducer";
// import {Toast} from "react-toastify"

// const HeroSection = () => {
//   const [pickupLocation, setpickupLocation] = useState("");
//   const [returnLocation, setreturnLocation] = useState("");
//   const [startTime, setstartTime] = useState("");
//   const [endTime, setendTime] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const getCurrentDateTime = () => {
//     const now = new Date();
//     return now.toISOString().slice(0, 16); // Format: DD-MM-YYYY T HH:MM
//   };

//   const handleFindCars = () => {
//     if (!pickupLocation || !returnLocation || !startTime || !endTime) {
//       alert("Please fill in all fields.");
//       Toast.message("fill the all fields")
//       return;
//     }
  
//     const details = {
//       pickupLocation,
//       returnLocation,
//       startTime: startTime,
//       endTime: endTime,
//     };
  
//     dispatch(setBookingDetails(details));
//     console.log("Dispatched Booking Details:", details);
//     navigate("/cars");
//   };
  
  
//   ;

//   useEffect(() => {
//     setstartTime(getCurrentDateTime());
//     setendTime(getCurrentDateTime());
//   }, []);

//   // const handleFindCars = () => {
//   //   dispatch(setBookingDetails({
//   //     pickupLocation,
//   //     dropoffLocation,
//   //     pickupDateTime: pickupDate,
//   //     returnDateTime: dropDate,
//   //   }));

//   //   navigate("/cars");
//   // };

//   return (
//     <div className="relative w-full h-full pt-32 overflow-hidden bg-fixed bg-center bg-cover bg-[url('/Page-01.png')]">
//       {/* Video Background */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           <source src="/bgvideo2.mp4" type="video/mp4" />
//           <img src="Page-01.png" alt="Fallback background" />
//         </video>
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-6xl font-bold"
//         >
//           Looking for a <span className="text-[#E94E3A]">vehicle?</span> You're at the right place.
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mt-4 text-lg md:text-xl font-sans"
//         >
//           Book your self Driven Car easily with AgiroCabs
//         </motion.p>

//         {/* Search Box */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="mt-8 bg-[#feffea]/60 text-black p-4 md:p-6 rounded-lg shadow-lg w-full max-w-5xl mx-4 md:mx-auto"
//         >
//           <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-12">
//             {/* Pickup & Drop Details */}
//             <div className="w-full md:w-1/2 space-y-4">
//               <div>
//                 <label htmlFor="pickupLocation" className="font-bold text-lg md:text-xl block mb-2">
//                   Pickup Location
//                 </label>
//                 <select
//                   id="pickupLocation"
//                   className="p-3 md:p-4 border rounded-md w-full text-sm md:text-base"
//                   value={pickupLocation}
//                   onChange={(e) => setpickupLocation(e.target.value)}
//                 >
//                   <option value="" hidden disabled>Select Pickup Location</option>
//                   <option value="Patna airport">Jayprakash International Airport Patna</option>
//                   <option value="Patna junction">Patna Junction</option>
//                   <option value="Danapur Junction">Danapur Junction</option>
//                   <option value="Patliputra station">Patliputra Railway Station</option>
//                   <option value="Boring road">Boring Road</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="startTime" className="font-bold text-lg md:text-xl block mb-2">
//                   Pick Up Date & Time
//                 </label>
//                 <input
//                   type="datetime-local"
//                   id="startTime"
//                   className="p-3 border rounded-md w-full text-sm md:text-base"
//                   value={startTime}
//                   min={getCurrentDateTime()}
//                   onChange={(e) => setstartTime(e.target.value)}
//                 />
//               </div>
//             </div>

//             {/* Dropoff Details */}
//             <div className="w-full md:w-1/2 space-y-4">
//               <div>
//                 <label htmlFor="returnLocation" className="font-bold text-lg md:text-xl block mb-2">
//                   Drop-Off Location
//                 </label>
//                 <select
//                   id="returnLocation"
//                   className="p-3 md:p-4 border rounded-md w-full text-sm md:text-base"
//                   value={returnLocation}
//                   onChange={(e) => setreturnLocation(e.target.value)}
//                 >
//                   <option value="" hidden disabled>Select Drop Location</option>
//                   <option value="Patna airport">Jayprakash International Airport Patna</option>
//                   <option value="Patna junction">Patna Junction</option>
//                   <option value="Danapur Junction">Danapur Junction</option>
//                   <option value="Patliputra station">Patliputra Railway Station</option>
//                   <option value="Boring road">Boring Road</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="endTime" className="font-bold text-lg md:text-xl block mb-2">
//                   Return Date & Time
//                 </label>
//                 <input
//                   type="datetime-local"
//                   id="endTime"
//                   min={getCurrentDateTime()}
//                   className="p-3 border rounded-md w-full text-sm md:text-base"
//                   value={endTime}
//                   onChange={(e) => setendTime(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Button */}
//           <div className="mt-6 flex justify-center">
//             <button
//               onClick={handleFindCars}
//               className="bg-[#E94E3A] text-white px-4 py-2 md:px-6 md:py-3 rounded-md w-full sm:w-[300px] md:w-[400px] transition-colors duration-300"
//             >
//               Find Cars
//             </button>
//           </div>
//         </motion.div>

//         <StepsSection />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;







import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StepsSection from "./StepsSection";
import { setBookingDetails } from "../redux/bookingaction";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const [pickupLocation, setpickupLocation] = useState("");
  const [returnLocation, setreturnLocation] = useState("");
  const [startTime, setstartTime] = useState("");
  const [endTime, setendTime] = useState("");
  const [minEndTime, setMinEndTime] = useState("");
  const [durationValid, setDurationValid] = useState(true);
  const [endTimeDisabled, setEndTimeDisabled] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCurrentDateTime = () => {
    const now = new Date();
    return formatDateTimeLocal(now);
  };

  const formatDateTimeLocal = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  useEffect(() => {
    const now = new Date();
    const formattedNow = formatDateTimeLocal(now);
    setstartTime(formattedNow);
    setendTime(formattedNow);
    const minReturn = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    setMinEndTime(formatDateTimeLocal(minReturn));
  }, []);

  const handleStartTimeChange = (value) => {
    setstartTime(value);

    const newStart = new Date(value);
    const newMinEnd = new Date(newStart.getTime() + 24 * 60 * 60 * 1000);

    setMinEndTime(formatDateTimeLocal(newMinEnd));
    setEndTimeDisabled(false);

    const currentEnd = new Date(endTime);
    if (currentEnd < newMinEnd) {
      setendTime(formatDateTimeLocal(newMinEnd));
      setDurationValid(true);
    } else {
      const diffHours = (currentEnd - newStart) / (1000 * 60 * 60);
      setDurationValid(diffHours >= 24);
    }
  };

  const handleFindCars = () => {
    if (!pickupLocation || !returnLocation || !startTime || !endTime) {
      toast.error("Please fill in all fields before proceeding.");
      return;
    }

    const start = new Date(startTime);
    const end = new Date(endTime);
    const diffHours = (end - start) / (1000 * 60 * 60);

    if (diffHours < 24) {
      toast.error("Minimum rental duration is 24 hours.");
      return;
    }

    const details = {
      pickupLocation,
      returnLocation,
      startTime,
      endTime,
    };

    dispatch(setBookingDetails(details));
    console.log("Dispatched Booking Details:", details);

    // Pass state via navigate to ensure CarList gets it
    setTimeout(() => {
      navigate("/cars", { state: details });
    }, 200); // Small delay for state sync
  };

  return (
    <div className="relative w-full h-full pt-32 overflow-hidden bg-fixed bg-center bg-cover bg-[url('/Page-01.png')]">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/bgvideo2.mp4" type="video/mp4" />
          <img src="Page-01.png" alt="Fallback background" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-[#feffea]/60 text-black p-4 md:p-6 rounded-lg shadow-lg w-full max-w-5xl mx-4 md:mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-12">
            <div className="w-full md:w-1/2 space-y-4">
              <div>
                <label htmlFor="pickupLocation" className="font-bold text-lg md:text-xl block mb-2">
                  Pickup Location
                </label>
                <select
                  id="pickupLocation"
                  className="p-3 md:p-4 border rounded-md w-full text-sm md:text-base"
                  value={pickupLocation}
                  onChange={(e) => setpickupLocation(e.target.value)}
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
                <label htmlFor="startTime" className="font-bold text-lg md:text-xl block mb-2">
                  Pick Up Date & Time
                </label>
                <input
                  type="datetime-local"
                  id="startTime"
                  className="p-3 border rounded-md w-full text-sm md:text-base"
                  value={startTime}
                  min={getCurrentDateTime()}
                  onChange={(e) => handleStartTimeChange(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <div>
                <label htmlFor="returnLocation" className="font-bold text-lg md:text-xl block mb-2">
                  Drop-Off Location
                </label>
                <select
                  id="returnLocation"
                  className="p-3 md:p-4 border rounded-md w-full text-sm md:text-base"
                  value={returnLocation}
                  onChange={(e) => setreturnLocation(e.target.value)}
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
                <label htmlFor="endTime" className="font-bold text-lg md:text-xl block mb-2">
                  Return Date & Time
                </label>
                <input
                  type="datetime-local"
                  id="endTime"
                  className="p-3 border rounded-md w-full text-sm md:text-base"
                  value={endTime}
                  onChange={(e) => {
                    const newEnd = e.target.value;
                    setendTime(newEnd);
                    const start = new Date(startTime);
                    const end = new Date(newEnd);
                    const diffHours = (end - start) / (1000 * 60 * 60);
                    setDurationValid(diffHours >= 24);
                  }}
                  min={minEndTime}
                  disabled={endTimeDisabled}
                />
                <p className={`mt-1 text-sm ${durationValid ? "text-green-600" : "text-red-600"}`}>
                  {durationValid ? " Valid duration selected" : " Minimum 24 hours required"}
                </p>
              </div>
            </div>
          </div>

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

export default Hero;