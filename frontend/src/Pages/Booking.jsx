// import React, { useState } from 'react'
// import Header from '../components/Header'
// import CarInfo from '../components/CarInfo';
// import BookingForm from '../components/BookingForm';
// import FareSummary from '../components/FareSummary';
// import StepsSection from '../components/StepsSection';
// import MovingText from '../components/MovingText';
// import Footer from '../components/Footer';

// const Booking = () => {
//   const [bookingDetails, setBookingDetails] = useState({});
//   const [fare, setFare] = useState(0);

//   const car = {
//     name: 'Maruti Swift',
//     rate: 109,
//     image: 'swift.png'
//   };

//   return (
//     <>
//       <Header text="Quick Booking" />

//       <div className="flex items-center flex-col justify-center py-10 px-4 bg-black min-h-screen">
//         <div className="w-full h-fit max-w-5xl bg-white rounded-2xl shadow-lg grid md:grid-cols-2 gap-8 p-6 md:p-10">
          
//           {/* Left Side - Car Info + Form */}
//           <div>
//             <CarInfo car={car} />
//             <BookingForm car={car} setBookingDetails={setBookingDetails} setFare={setFare} />
//           </div>

//           {/* Right Side - Fare Summary */}
//           <FareSummary car={car} bookingDetails={bookingDetails} fare={fare} />
//         </div>
//         <StepsSection/>
//       </div>
//       <MovingText bgColor='bg-green-500' textColor="text-black"/>
//         <Footer/>

//     </>
//   )
// }

// export default Booking;

//part 2 
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Header from "../components/Header";
// import CarInfo from "../components/CarInfo";
// import BookingForm from "../components/BookingForm";
// import FareSummary from "../components/FareSummary";
// import StepsSection from "../components/StepsSection";
// import MovingText from "../components/MovingText";
// import Footer from "../components/Footer";

// const Booking = () => {
//   const dispatch = useDispatch();
//   // Access selected car from Redux
//   const selectedCar = useSelector((state) => state.car.selectedCar) || {};
//   // Access booking details from Redux
//   const bookingDetails = useSelector((state) => state.booking.bookingDetails) || {};

//   // Calculate fare based on booking details
//   const fare = bookingDetails.pickupDateTime && bookingDetails.returnDateTime
//     ? calculateFare(selectedCar.rate || 0, bookingDetails)
//     : 0;

//   // Fare calculation logic
//   const calculateFare = (rate, details) => {
//     const pickup = new Date(details.pickupDateTime);
//     const returnTime = new Date(details.returnDateTime);
//     const duration = (returnTime - pickup) / (1000 * 60 * 60); // in hours
//     return duration > 0 ? Math.ceil(duration) * rate : 0;
//   };

//   return (
//     <>
//       <Header text="Quick Booking" />

//       <div className="flex items-center flex-col justify-center py-10 px-4 bg-black min-h-screen">
//         <div className="w-full h-fit max-w-5xl bg-white rounded-2xl shadow-lg grid md:grid-cols-2 gap-8 p-6 md:p-10">
//           {/* Left Side - Car Info + Form */}
//           <div>
//             <CarInfo car={selectedCar} />
//             <BookingForm car={selectedCar} />
//           </div>

//           {/* Right Side - Fare Summary */}
//           <FareSummary
//             car={selectedCar}
//             bookingDetails={bookingDetails}
//             fare={fare}
//           />
//         </div>
//         <StepsSection />
//       </div>
//       <MovingText bgColor="bg-green-500" textColor="text-black" />
//       <Footer />
//     </>
//   );
// };

// export default Booking;


// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Header from "../components/Header";
// import CarInfo from "../components/CarInfo";
// import BookingForm from "../components/BookingForm";
// import FareSummary from "../components/FareSummary";
// import StepsSection from "../components/StepsSection";
// import MovingText from "../components/MovingText";
// import Footer from "../components/Footer";
// import { setBookingDetails } from "../redux/bookingaction";

// const Booking = () => {
//   const dispatch = useDispatch();
//   const selectedCar = useSelector((state) => state.car.selectedCar) || {};
//   const bookingDetails = useSelector((state) => state.booking.bookingDetails) || {};
//   const [carData, setCarData] = useState(null); // Store API-fetched car data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch car details from API
//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         // Assuming the API endpoint accepts car ID and returns detailed car data
//         const response = await fetch(
//           `http://localhost:8080/api/v1/car/${selectedCar.id}?price=${selectedCar.rate}`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         if (!response.ok) throw new Error("Failed to fetch car details");
//         const data = await response.json();
//         setCarData(data); // Update with API response
//       } catch (err) {
//         setError(err.message);
//         setCarData(null); // Clear car data on error
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (selectedCar && selectedCar.id) {
//       fetchCarDetails();
//     } else {
//       setLoading(false); // No car selected, stop loading
//       setCarData(null);
//     }
//   }, [selectedCar]); // Re-run when selectedCar changes

//   // Calculate fare based on booking details and API-fetched car data
//   const fare = bookingDetails.pickupDateTime && bookingDetails.returnDateTime && carData
//     ? calculateFare(carData.rate || selectedCar.rate || 0, bookingDetails)
//     : 0;

//   // Fare calculation logic
//   const calculateFare = (rate, details) => {
//     const pickup = new Date(details.pickupDateTime);
//     const returnTime = new Date(details.returnDateTime);
//     const duration = (returnTime - pickup) / (1000 * 60 * 60); // in hours
//     return duration > 0 ? Math.ceil(duration) * rate : 0;
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
//           <div className="w-full h-fit max-w-5xl bg-white rounded-2xl shadow-lg grid md:grid-cols-2 gap-8 p-6 md:p-10">
//             {/* Left Side - Car Info + Form */}
//             <div>
//               <CarInfo car={carData || selectedCar} />
//               <BookingForm car={carData || selectedCar} />
//             </div>

//             {/* Right Side - Fare Summary */}
//             <FareSummary
//               car={carData || selectedCar}
//               bookingDetails={bookingDetails}
//               fare={fare}
//             />
//           </div>
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

// export default Booking;


import React from 'react'
import Header from '../components/Header'
import CarBooking from '../components/CarBooking'

const Booking = () => {
  return (
    <>
    <Header text="Quick Booking" />
    <CarBooking/>


    </>
  )
}

export default Booking