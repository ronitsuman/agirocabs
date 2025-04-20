// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"; // Add this import
// import Header from "../components/Header";
// import StepsSection from "../components/StepsSection";
// import MovingText from "../components/MovingText";
// import Footer from "../components/Footer";
// import { setBookingDetails } from "../redux/bookingaction";

// const CarBooking = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Initialize navigate
//   const selectedCar = useSelector((state) => state.car.selectedCar) || {};
//   const bookingDetails = useSelector((state) => state.booking.bookingDetails) || {};
//   const [carData, setCarData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get car ID from Redux selectedCar
//   const carId = selectedCar.id;

//   // Fetch car details from API using the ID from Redux
//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       setLoading(true);
//       setError(null);
      
//       if (!carId) {
//         setLoading(false);
//         setError("No car selected");
//         navigate("/cars"); // Redirect if no car selected
//         return;
//       }

//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/v1/cars/${carId}`, // Use carId from Redux
//           {
//             method: "GET",
//             headers: { "Content-Type": "application/json" },
//           }
//         );
        
//         if (!response.ok) throw new Error("Failed to fetch car details");
//         const data = await response.json();
//         setCarData(data);
//       } catch (err) {
//         setError(err.message);
//         setCarData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCarDetails();
//   }, [carId, navigate]);

//   // Calculate fare
//   const fare = bookingDetails.pickupDateTime && bookingDetails.returnDateTime && carData
//     ? calculateFare(carData.rate || selectedCar.rate || 0, bookingDetails)
//     : 0;

//   const calculateFare = (rate, details) => {
//     const pickup = new Date(details.pickupDateTime);
//     const returnTime = new Date(details.returnDateTime);
//     const duration = (returnTime - pickup) / (1000 * 60 * 60);
//     return duration > 0 ? Math.ceil(duration) * rate : 0;
//   };

//   const handleBookingSubmit = (details) => {
//     dispatch(setBookingDetails(details));
//   };

//   const handlePayment = () => {
//     // Navigate to payment page or handle payment logic
//     console.log("Proceeding to payment with fare:", fare);
//     // Example: useNavigate from react-router-dom to navigate('/payment')
//   };

//   return (
//     <>
//       <Header text="Quick Booking" />

//       <div className="flex items-center flex-col justify-center py-10 px-4 bg-black min-h-screen">
//         {loading ? (
//           <div className="text-white text-center">Loading car details...</div>
//         ) : error ? (
//           <div className="text-red-500 text-center">Error: {error}</div>
//         ) : carData || selectedCar ? (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6"
//           >
//             {/* Car Details Section */}
//             <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//               <h2 className="text-lg font-semibold mb-2">Car Details</h2>
//               <div className="flex flex-col justify-around md:flex-row items-center">
//                 <img
//                   src={carData?.imageUrl || selectedCar.imageUrl || "car-placeholder.png"}
//                   alt={carData?.model || selectedCar.model || "Car"}
//                   className="w-80 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
//                 />
//                 <div>
//                   <h3 className="text-xl font-bold">
//                     {carData?.model || selectedCar.model || "Unknown Model"}
//                   </h3>
//                   <p className="text-gray-600">{carData?.type || selectedCar.type || "N/A"}</p>
//                   <p className="text-gray-600">
//                     {carData?.specs.fuelType || selectedCar.transmission || "N/A"}
//                   </p>
//                   <p className="text-gray-600">
//                     {carData?.year || selectedCar.year || "N/A"}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Booking Details Section */}
//             <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//               <h2 className="text-lg font-semibold mb-2">Booking Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   name="pickupLocation"
//                   placeholder="Pick Up Location"
//                   className="w-full p-2 border rounded"
//                   value={bookingDetails.pickupLocation || ""}
//                   onChange={(e) =>
//                     handleBookingSubmit({ ...bookingDetails, pickupLocation: e.target.value })
//                   }
//                 />
//                 <input
//                   name="dropoffLocation"
//                   placeholder="Drop-off Location"
//                   className="w-full p-2 border rounded"
//                   value={bookingDetails.dropoffLocation || ""}
//                   onChange={(e) =>
//                     handleBookingSubmit({ ...bookingDetails, dropoffLocation: e.target.value })
//                   }
//                 />
//                 <input
//                   type="datetime-local"
//                   name="pickupDateTime"
//                   className="w-full p-2 border rounded"
//                   value={bookingDetails.pickupDateTime || ""}
//                   onChange={(e) =>
//                     handleBookingSubmit({ ...bookingDetails, pickupDateTime: e.target.value })
//                   }
//                   min={new Date().toISOString().slice(0, 16)}
//                 />
//                 <input
//                   type="datetime-local"
//                   name="returnDateTime"
//                   className="w-full p-2 border rounded"
//                   value={bookingDetails.returnDateTime || ""}
//                   onChange={(e) =>
//                     handleBookingSubmit({ ...bookingDetails, returnDateTime: e.target.value })
//                   }
//                   min={bookingDetails.pickupDateTime || new Date().toISOString().slice(0, 16)}
//                 />
//                 <input
//                   name="name"
//                   placeholder="Full Name"
//                   className="w-full p-2 border rounded md:col-span-2"
//                   value={bookingDetails.name || ""}
//                   onChange={(e) =>
//                     handleBookingSubmit({ ...bookingDetails, name: e.target.value })
//                   }
//                 />
//                 <input
//                   name="email"
//                   placeholder="Email"
//                   className="w-full p-2 border rounded md:col-span-2"
//                   value={bookingDetails.email || ""}
//                   onChange={(e) =>
//                     handleBookingSubmit({ ...bookingDetails, email: e.target.value })
//                   }
//                 />
//               </div>
//             </div>

//             {/* Cart Section */}
//             <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//               <h2 className="text-lg font-semibold mb-2">Cart</h2>
//               <div className="flex justify-between items-center">
//                 <p>{carData?.model || selectedCar.model || "Unknown Model"}</p>
//                 <p className="font-semibold">₹{fare || 0}.00</p>
//               </div>
//             </div>

//             {/* Payment Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               disabled={fare === 0}
//               onClick={handlePayment}
//               className={`w-full py-3 rounded text-white font-semibold ${
//                 fare === 0 ? "bg-gray-400" : "bg-green-700 hover:bg-green-800"
//               } transition-colors`}
//             >
//               Payment
//             </motion.button>
//           </motion.div>
//         ) : (
//           <div className="text-white text-center">No car selected.</div>
//         )}
//         <StepsSection />
//       </div>
//       <MovingText bgColor="bg-green-500" textColor="text-black" />
//       <Footer />
//     </>
//   );
// };

// export default CarBooking;



// part 2
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import StepsSection from "../components/StepsSection";
// import MovingText from "../components/MovingText";
// import Footer from "../components/Footer";
// import { setBookingDetails } from "../redux/bookingaction";

// const CarBooking = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const selectedCar = useSelector((state) => state.car.selectedCar) || {};
//   const bookingDetails = useSelector((state) => state.booking.bookingDetails) || {};
//   const [carData, setCarData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get car ID from Redux selectedCar
//   const carId = selectedCar.id;

//   // Fetch car details from API using the ID from Redux
//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       setLoading(true);
//       setError(null);
      
//       if (!carId) {
//         setLoading(false);
//         setError("No car selected");
//         navigate("/cars");
//         return;
//       }

//       try {
//         const response = await fetch(
//           `http://localhost:8080/api/v1/cars/${carId}`,
//           {
//             method: "GET",
//             headers: { "Content-Type": "application/json" },
//           }
//         );
        
//         if (!response.ok) throw new Error("Failed to fetch car details");
//         const data = await response.json();
//         setCarData(data);
//       } catch (err) {
//         setError(err.message);
//         setCarData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCarDetails();
//   }, [carId, navigate]);

//   // Initialize form with Redux booking details when component mounts
//   useEffect(() => {
//     if (bookingDetails) {
//       console.log("Initial booking details from Redux:", bookingDetails);
//     }
//   }, [bookingDetails]);

//   // Calculate fare
//   const fare = bookingDetails.pickupDateTime && bookingDetails.returnDateTime && carData
//     ? calculateFare(carData.pricePerHour || selectedCar.pricePerHour || 0, bookingDetails)
//     : 0;

//   const calculateFare = (rate, details) => {
//     const pickup = new Date(details.pickupDateTime);
//     const returnTime = new Date(details.returnDateTime);
//     const duration = (returnTime - pickup) / (1000 * 60 * 60);
//     return duration > 0 ? Math.ceil(duration) * rate : 0;
//   };

//   const handleBookingSubmit = (field, value) => {
//     const updatedDetails = {
//       ...bookingDetails,
//       [field]: value
//     };
//     dispatch(setBookingDetails(updatedDetails));
//   };

//   const handlePayment = () => {
//     // Validate all required fields
//     if (!bookingDetails.pickupLocation || 
//         !bookingDetails.dropoffLocation || 
//         !bookingDetails.pickupDateTime || 
//         !bookingDetails.returnDateTime) {
//       alert("Please fill in all booking details");
//       return;
//     }
    
//     console.log("Proceeding to payment with:", {
//       car: carData || selectedCar,
//       bookingDetails,
//       fare
//     });
//     // navigate("/payment");
//   };

//   return (
//     <>
      

//       <div className="flex items-center flex-col justify-center py-10 px-4 bg-black min-h-screen">
//         {loading ? (
//           <div className="text-white text-center">Loading car details...</div>
//         ) : error ? (
//           <div className="text-red-500 text-center">Error: {error}</div>
//         ) : carData || selectedCar ? (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6"
//           >
//             {/* Car Details Section */}
//             <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//               <h2 className="text-lg font-semibold mb-2">Car Details</h2>
//               <div className="flex flex-col justify-around md:flex-row items-center">
//                 <img
//                   src={carData?.imageUrl || selectedCar.imageUrl || "car-placeholder.png"}
//                   alt={carData?.model || selectedCar.model || "Car"}
//                   className="w-80 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
//                 />
//                 <div>
//                   <h3 className="text-xl font-bold">
//                     {carData?.model || selectedCar.model || "Unknown Model"}
//                   </h3>
//                   <p className="text-gray-600">{carData?.type || selectedCar.type || "N/A"}</p>
//                   <p className="text-gray-600">
//                     {carData?.specs?.fuelType || selectedCar.specs?.fuelType || "N/A"}
//                   </p>
//                   <p className="text-gray-600">
//                     {carData?.year || selectedCar.year || "N/A"}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Booking Details Section */}
//             <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//               <h2 className="text-lg font-semibold mb-2">Booking Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   name="pickupLocation"
//                   placeholder="Pick Up Location"
//                   className="w-full p-2 border rounded"
//                   value={bookingDetails.pickupLocation || ""}
//                   onChange={(e) => handleBookingSubmit("pickupLocation", e.target.value)}
//                 />
//                 <input
//                   name="dropoffLocation"
//                   placeholder="Drop-off Location"
//                   className="w-full p-2 border rounded"
//                   value={bookingDetails.dropoffLocation || ""}
//                   onChange={(e) => handleBookingSubmit("dropoffLocation", e.target.value)}
//                 />
//                 <input
//                   type="datetime-local"
//                   name="pickupDateTime"
//                   className="w-full p-2 border rounded"
//                   value={bookingDetails.pickupDateTime || ""}
//                   onChange={(e) => handleBookingSubmit("pickupDateTime", e.target.value)}
//                   min={new Date().toISOString().slice(0, 16)}
//                 />
//                 <input
//                   type="datetime-local"
//                   name="returnDateTime"
//                   className="w-full p-2 border rounded"
//                   value={bookingDetails.returnDateTime || ""}
//                   onChange={(e) => handleBookingSubmit("returnDateTime", e.target.value)}
//                   min={bookingDetails.pickupDateTime || new Date().toISOString().slice(0, 16)}
//                 />
//                 <input
//                   name="name"
//                   placeholder="Full Name"
//                   className="w-full p-2 border rounded md:col-span-2"
//                   value={bookingDetails.name || ""}
//                   onChange={(e) => handleBookingSubmit("name", e.target.value)}
//                 />
//                 <input
//                   name="email"
//                   placeholder="Email"
//                   className="w-full p-2 border rounded md:col-span-2"
//                   value={bookingDetails.email || ""}
//                   onChange={(e) => handleBookingSubmit("email", e.target.value)}
//                 />
//               </div>
//             </div>

//             {/* Cart Section */}
//             <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//               <h2 className="text-lg font-semibold mb-2">Cart</h2>
//               <div className="flex justify-between items-center">
//                 <p>{carData?.model || selectedCar.model || "Unknown Model"}</p>
//                 <p className="font-semibold">₹{fare || 0}.00</p>
//               </div>
//             </div>

//             {/* Payment Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               disabled={fare === 0}
//               onClick={handlePayment}
//               className={`w-full py-3 rounded text-white font-semibold ${
//                 fare === 0 ? "bg-gray-400" : "bg-green-700 hover:bg-green-800"
//               } transition-colors`}
//             >
//               Payment
//             </motion.button>
//           </motion.div>
//         ) : (
//           <div className="text-white text-center">No car selected.</div>
//         )}
//         <StepsSection />
//       </div>
//       <MovingText bgColor="bg-green-500" textColor="text-black" />
//       <Footer />
//     </>
//   );
// };

// export default CarBooking;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import StepsSection from "../components/StepsSection";
import MovingText from "../components/MovingText";
import Footer from "../components/Footer";
import { setBookingDetails } from "../redux/bookingaction";

const CarBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCar = useSelector((state) => state.car.selectedCar) || {};
  const bookingDetails = useSelector((state) => state.booking.bookingDetails) || {};
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16);
  };

  // Get car ID from Redux selectedCar
  const carId = selectedCar.id;

  // Fetch car details from API using the ID from Redux
  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true);
      setError(null);
      
      if (!carId) {
        setLoading(false);
        setError("No car selected");
        navigate("/cars");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/cars/${carId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        
        if (!response.ok) throw new Error("Failed to fetch car details");
        const data = await response.json();
        setCarData(data);
      } catch (err) {
        setError(err.message);
        setCarData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [carId, navigate]);

  const handleBookingSubmit = (field, value) => {
    const updatedDetails = {
      ...bookingDetails,
      [field]: value
    };
    dispatch(setBookingDetails(updatedDetails));
  };

  const handleProceed = () => {
    // Validate all required fields
    if (!bookingDetails.pickupLocation || 
        !bookingDetails.dropoffLocation || 
        !bookingDetails.pickupDateTime || 
        !bookingDetails.returnDateTime) {
      alert("Please fill in all booking details");
      return;
    }
    
    console.log("Proceeding with booking:", {
      car: carData || selectedCar,
      bookingDetails
    });
    navigate("/payment"); // Navigate to payment page
  };

  return (
    <>
      

      <div className="flex items-center flex-col justify-center py-10 px-4 bg-[#feffea] min-h-screen">
        {loading ? (
          <div className="text-white text-center">Loading car details...</div>
        ) : error ? (
          <div className="text-red-500 text-center">Error: {error}</div>
        ) : carData || selectedCar ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl bg-[#feffea] rounded-lg shadow-lg p-6"
          >
            {/* Car Details Section */}
            <div className="mb-6 p-4 bg-[#f0f1d5] rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Car Details</h2>
              <div className="flex flex-col justify-around md:flex-row items-center">
                <img
                  src={carData?.imageUrl || selectedCar.imageUrl || "car-placeholder.png"}
                  alt={carData?.model || selectedCar.model || "Car"}
                  className="lg:w-80 lg:h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    {carData?.model || selectedCar.model || "Unknown Model"}
                  </h3>
                  <p className="text-gray-600">{carData?.type || selectedCar.type || "N/A"}</p>
                  <p className="text-gray-600">
                    {carData?.specs?.fuelType || selectedCar.specs?.fuelType || "N/A"}
                  </p>
                  <p className="text-gray-600">
                    {carData?.year || selectedCar.year || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Details Section */}
            <div className="mb-6 p-4 bg-[#f0f1d5] rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Booking Details</h2>
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
                      value={bookingDetails.pickupLocation || ""}
                      onChange={(e) => handleBookingSubmit("pickupLocation", e.target.value)}
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
                      value={bookingDetails.pickupDateTime || ""}
                      min={getCurrentDateTime()}
                      onChange={(e) => handleBookingSubmit("pickupDateTime", e.target.value)}
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
                      value={bookingDetails.dropoffLocation || ""}
                      onChange={(e) => handleBookingSubmit("dropoffLocation", e.target.value)}
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
                      min={bookingDetails.pickupDateTime || getCurrentDateTime()}
                      className="p-3 border rounded-md w-full text-sm md:text-base"
                      value={bookingDetails.returnDateTime || ""}
                      onChange={(e) => handleBookingSubmit("returnDateTime", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Additional Fields */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded"
                  value={bookingDetails.name || ""}
                  onChange={(e) => handleBookingSubmit("name", e.target.value)}
                />
                <input
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  value={bookingDetails.email || ""}
                  onChange={(e) => handleBookingSubmit("email", e.target.value)}
                />
              </div> */}
            </div>

            {/* Proceed Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleProceed}
              className="w-full py-3 rounded text-white font-semibold bg-[#E94E3A] hover:bg-[#e94e3a] transition-colors"
            >
              Proceed to Payment
            </motion.button>
          </motion.div>
        ) : (
          <div className="text-white text-center">No car selected.</div>
        )}
        <StepsSection />
      </div>
      <MovingText bgColor="bg-green-500" textColor="text-black" />
      <Footer />
    </>
  );
};

export default CarBooking;