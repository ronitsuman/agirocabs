// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Dynamically import all car images from assets/cars folder
// const images = import.meta.glob("../assets/cars/*.png", { eager: true });

// // 🧠 Map model names to image filenames
// const imageMap = {
//   Maruti_Swift: "swift.png",
//   Innova: "innova.png",
//   XUV700: "xuv700.png",
//   Harrier: "harrier.png",
//   Creta: "creta.png",
//   Baleno: "baleno.png",
//   // Add more mappings as needed
// };

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [filteredType, setFilteredType] = useState("All");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/api/v1/cars");
//         const data = await res.json();
//         console.log(data)
//         setCars(data);
//       } catch (err) {
//         console.error("Error fetching cars:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const filteredCars =
//     filteredType === "All"
//       ? cars
//       : cars.filter((car) => car.type === filteredType);

//   //  Get image from model name
//   const getImage = (modelName) => {
//     if (!modelName) return "";

//     // Convert model name to lowercase and replace space with dash or underscore
//     const formattedNames = [
//       modelName.toLowerCase().replace(/\s+/g, "-"),
//       modelName.toLowerCase().replace(/\s+/g, "_"),
//     ];

//     for (const name of formattedNames) {
//       const match = Object.entries(images).find(([path]) =>
//         path.toLowerCase().includes(name)
//       );
//       if (match) return match[1].default;
//     }

//     return ""; // fallback
//   };

//   const skeletonArray = Array(6).fill(0);

//   return (
//     <div className="p-4 max-w-7xl mx-auto flex">

//       {/* Filter Buttons */}
//       <div className="flex flex-wrap gap-3 mb-6 items-center justify-center mt-4">
//         {["All", "Hatchback", "SUV", "Sedan", "Compact SUV"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setFilteredType(type)}
//             className={`px-4 py-2 rounded-full text-white text-sm md:text-base ${
//               filteredType === type ? "bg-green-600" : "bg-[#e94e39]"
//             }`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* Car List or Skeleton */}
//       <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-6">
//         {loading ? (
//           skeletonArray.map((_, index) => (
//             <div
//               key={index}
//               className="flex flex-col sm:flex-row gap-4 p-4 shadow rounded bg-white animate-pulse"
//             >
//               <div className="w-full sm:w-[150px] h-[100px] bg-gray-200 rounded" />
//               <div className="flex-1 space-y-2">
//                 <div className="h-5 bg-gray-200 rounded w-3/4" />
//                 <div className="h-4 bg-gray-200 rounded w-5/6" />
//                 <div className="h-4 bg-gray-200 rounded w-1/2" />
//                 <div className="h-4 bg-gray-200 rounded w-2/3" />
//               </div>
//               <div className="flex flex-col justify-center items-center">
//                 <div className="h-5 w-20 bg-gray-200 rounded mb-2" />
//                 <div className="h-8 w-24 bg-gray-200 rounded" />
//               </div>
//             </div>
//           ))
//         ) : (
//           <AnimatePresence>
//             {filteredCars.map((car) => (
//               <motion.div
//                 key={car.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex flex-col sm:flex-row gap-4 p-4 shadow-lg rounded-lg bg-white"
//               >
//                 <img
//                   src={getImage(car.model)}
//                   alt={car.model}
//                   className="w-full sm:w-[150px] max-h-[120px] object-contain mx-auto sm:mx-0"
//                 />
//                 <div className="flex-1">
//                   <h2 className="text-lg font-semibold">{car.model}</h2>
//                   <div className="text-sm text-gray-600 space-y-1 mt-2">
//                     <p>Seats: {car.specs.seats}</p>
//                     <p>Fuel: {car.specs.fuelType}</p>
//                     <p>HP: {car.horsepower} | Engine: {car.engine}cc</p>
//                     <p>Drive: {car.drive}</p>
//                     <p>Type: {car.type}</p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col justify-center items-center">
//                   <p className="text-base">Daily rate from</p>
//                   <p className="text-3xl font-bold text-black-600">
//                     Rs{car.pricePerHour}/Hr
//                   </p>
//                   <button className="bg-green-500 mt-2 text-white px-3 py-1 rounded hover:bg-green-600 transition text-sm">
//                     Rent Now
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CarList;

// part 2

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Dynamically import all car images from assets/cars folder
// const images = import.meta.glob("../assets/cars/*.png", { eager: true });

// const imageMap = {
//   Maruti_Swift: "swift.png",
//   Innova: "innova.png",
//   XUV700: "xuv700.png",
//   Harrier: "harrier.png",
//   Creta: "creta.png",
//   Baleno: "baleno.png",
// };

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [filteredType, setFilteredType] = useState("All");
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/api/v1/cars");
//         const data = await res.json();
//         setCars(data);
//       } catch (err) {
//         console.error("Error fetching cars:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const filteredCars = filteredType === "All"
//     ? cars
//     : cars.filter((car) => car.type === filteredType);

//   const getImage = (modelName) => {
//     if (!modelName) return "";
//     const formattedNames = [
//       modelName.toLowerCase().replace(/\s+/g, "-"),
//       modelName.toLowerCase().replace(/\s+/g, "_"),
//     ];
//     for (const name of formattedNames) {
//       const match = Object.entries(images).find(([path]) =>
//         path.toLowerCase().includes(name)
//       );
//       if (match) return match[1].default;
//     }
//     return "";
//   };

//   const skeletonArray = Array(6).fill(0);

//   return (
//     <div className="p-4 max-w-7xl mx-auto">
//       {/* Vehicle Type Selection */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <h2 className="text-xl font-bold mb-4">Vehicle Type</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {["Hatchback", "Sedan", "MPV", "Compact SUV"].map((type) => (
//             <label key={type} className="flex items-center space-x-2 cursor-pointer">
//               <input
//                 type="radio"
//                 name="vehicleType"
//                 value={type}
//                 checked={filteredType === type}
//                 onChange={() => setFilteredType(type)}
//                 className="h-5 w-5 text-green-500"
//               />
//               <span className="text-gray-700">{type}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Selected Car Details */}
//       {selectedCar && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white p-6 rounded-lg shadow-md mb-8"
//         >
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="w-full md:w-1/3">
//               <img
//                 src={getImage(selectedCar.model)}
//                 alt={selectedCar.model}
//                 className="w-full h-auto object-contain max-h-48 mx-auto"
//               />
//             </div>
//             <div className="w-full md:w-2/3">
//               <h2 className="text-2xl font-bold mb-2">{selectedCar.model}</h2>
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <p className="text-gray-600">Seats: {selectedCar.specs.seats}</p>
//                   <p className="text-gray-600">Luggage: {selectedCar.specs.luggage || 2}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Doors: {selectedCar.specs.doors || 4}</p>
//                   <p className="text-gray-600">Fuel: {selectedCar.specs.fuelType}</p>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <p className="text-gray-600">Horsepower: {selectedCar.horsepower}</p>
//                 <p className="text-gray-600">Engine: {selectedCar.engine}cc</p>
//                 <p className="text-gray-600">Drive: {selectedCar.drive}</p>
//                 <p className="text-gray-600">Type: {selectedCar.type}</p>
//               </div>
//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <p className="text-gray-500">Daily rate from</p>
//                   <p className="text-3xl font-bold text-green-600">
//                     Rs{selectedCar.pricePerHour}/Hr
//                   </p>
//                 </div>
//                 <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors">
//                   Rent Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}

//       {/* Car List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {loading ? (
//           skeletonArray.map((_, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-lg shadow-md animate-pulse"
//             >
//               <div className="h-48 bg-gray-200 rounded mb-4"></div>
//               <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//               <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
//               <div className="h-10 bg-gray-200 rounded"></div>
//             </div>
//           ))
//         ) : (
//           <AnimatePresence>
//             {filteredCars.map((car) => (
//               <motion.div
//                 key={car.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
//                 onClick={() => setSelectedCar(car)}
//               >
//                 <img
//                   src={getImage(car.model)}
//                   alt={car.model}
//                   className="w-full h-48 object-contain mb-4"
//                 />
//                 <h3 className="text-xl font-semibold mb-2">{car.model}</h3>
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-gray-500">From</p>
//                     <p className="text-2xl font-bold text-green-600">
//                       Rs{car.pricePerHour}/Hr
//                     </p>
//                   </div>
//                   <button
//                     className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedCar(car);
//                     }}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CarList;

//part 3
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Available vehicle types
//   const vehicleTypes = ["Hatchback", "Sedan", "SUV", "Prime Sedan", "Luxury"];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/api/v1/cars");
//         const data = await res.json();
//         setCars(data);
//         console.log(data)
//       } catch (err) {
//         console.error("Error fetching cars:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const toggleVehicleType = (type) => {
//     setSelectedTypes(prev =>
//       prev.includes(type)
//         ? prev.filter(t => t !== type)
//         : [...prev, type]
//     );
//   };

//   const filteredCars = selectedTypes.length === 0
//     ? cars
//     : cars.filter(car => selectedTypes.includes(car.type));

//   return (
//     <div className="p-4 max-w-7xl mx-auto">
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Vehicle Type Selection - Left Side */}
//         <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4">Vehicle Type</h2>
//           <div className="space-y-3">
//             {vehicleTypes.map(type => (
//               <label key={type} className="flex items-center space-x-3 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={selectedTypes.includes(type)}
//                   onChange={() => toggleVehicleType(type)}
//                   className="h-5 w-5 text-green-500 rounded border-gray-300 focus:ring-green-500"
//                 />
//                 <span className="text-gray-700">{type}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Car Display - Right Side */}
//         <div className="w-full lg:w-3/4">
//           {/* Selected Car Details */}
//           {selectedCar && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="bg-white p-6 rounded-lg shadow-md mb-6"
//             >
//               <div className="flex flex-col md:flex-row gap-6">
//                 <div className="w-full md:w-1/3 flex justify-center">
//                   <img
//                     src={selectedCar.imageUrl || "/car-placeholder.png"}
//                     alt={selectedCar.model}
//                     className="h-48 object-contain"
//                   />
//                 </div>
//                 <div id="sec" className="w-full md:w-2/3">
//                   <h2 className="text-2xl font-bold mb-2">{selectedCar.model}</h2>
//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <p className="text-gray-600">Seats: {selectedCar.specs?.seats || 5}</p>
//                       <p className="text-gray-600">Luggage: {selectedCar.specs?.luggage || 2}</p>
//                     </div>
//                     <div>
//                       <p className="text-gray-600">Doors: {selectedCar.specs?.doors || 4}</p>
//                       <p className="text-gray-600">Fuel: {selectedCar.specs?.fuelType || "Petrol"}</p>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <p className="text-gray-600">Horsepower: {selectedCar.horsepower || "N/A"}</p>
//                     <p className="text-gray-600">Engine: {selectedCar.engine || "N/A"}cc</p>
//                     <p className="text-gray-600">Drive: {selectedCar.drive || "N/A"}</p>
//                     <p className="text-gray-600">Type: {selectedCar.type}</p>
//                   </div>
//                   <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
//                     <div>
//                       <p className="text-gray-500">Daily rate from</p>
//                       <p className="text-3xl font-bold text-green-600">
//                         Rs{selectedCar.pricePerHour}/Hr
//                       </p>
//                     </div>
//                     <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors w-full sm:w-auto">
//                       Rent Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* Car List Grid */}
//           {loading ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[...Array(6)].map((_, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow-md animate-pulse">
//                   <div className="h-40 bg-gray-200 rounded mb-4"></div>
//                   <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
//                   <div className="h-10 bg-gray-200 rounded"></div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               <AnimatePresence>
//                 {filteredCars.map(car => (
//                   <motion.div
//                     key={car.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                     className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
//                     onClick={() => setSelectedCar(car)}
//                   >
//                     <div className="h-40 flex items-center justify-center mb-4">
//                       <img
//                         src={car.imageUrl || "/car-placeholder.png"}
//                         alt={car.model}
//                         className="h-full object-contain"
//                       />
//                     </div>
//                     <h3 className="text-lg font-semibold mb-2">{car.model}</h3>
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <p className="text-gray-500 text-sm">From</p>
//                         <p className="text-xl font-bold text-green-600">
//                           Rs{car.pricePerHour}/Hr
//                         </p>
//                       </div>
//                       <button
//                          id="#sec1"
//                         className="text-green-500 hover:text-green-600 font-medium text-sm"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setSelectedCar(car);

//                         }}
//                       >
//                         View Details
//                       </button>
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarList;

//part 4

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [expandedCarId, setExpandedCarId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const vehicleTypes = ["Hatchback", "Sedan", "Compact SUV","SUV","MPV"  ];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/api/v1/cars");
//         const data = await res.json();
//         setCars(data);
//         console.log(data)
//       } catch (err) {
//         console.error("Error fetching cars:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const toggleVehicleType = (type) => {
//     setSelectedTypes(prev =>
//       prev.includes(type)
//         ? prev.filter(t => t !== type)
//         : [...prev, type]
//     );
//   };

//   const toggleCarExpansion = (carId) => {
//     setExpandedCarId(expandedCarId === carId ? null : carId);
//   };

//   const filteredCars = selectedTypes.length === 0
//     ? cars
//     : cars.filter(car => selectedTypes.includes(car.type));

//   return (
//     <div className="p-4 mt-4 max-w-7xl mx-auto bg-[#feffea]">
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Vehicle Type Selection - Left Side */}

//         <div className="hidden md:block w-full lg:w-1/4 bg-[#f0f1d5] p-6 rounded-lg shadow-md ">
//           <h2 className="text-xl font-bold mb-4">Vehicle Type</h2>
//           <div className="space-y-3 ">
//             {vehicleTypes.map(type => (
//               <label key={type} className="flex items-center space-x-3 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={selectedTypes.includes(type)}
//                   onChange={() => toggleVehicleType(type)}
//                   className="h-5 w-5 text-green-500 rounded border-gray-300 focus:ring-green-500"
//                 />
//                 <span className="text-gray-700">{type}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Car Display - Right Side */}
//         <div className="w-full lg:w-3/4">
//           {/* Car List Grid */}
//           {loading ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[...Array(6)].map((_, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow-md animate-pulse">
//                   <div className="h-40 bg-gray-200 rounded mb-4"></div>
//                   <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
//                   <div className="h-10 bg-gray-200 rounded"></div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               <AnimatePresence>
//                 {filteredCars.map(car => (
//                   <div key={car.id} className="bg-[#f0f1d5] rounded-lg shadow-md overflow-hidden">
//                     {/* Car Card Top */}
//                     <div
//                       className="p-4 cursor-pointer"
//                       onClick={() => toggleCarExpansion(car.id)}
//                     >
//                       <div className="h-40 flex items-center justify-center mb-4">
//                         <img
//                           src={car.imageUrl || "/car-placeholder.png"}
//                           alt={car.model}
//                           className="h-full object-contain"
//                         />
//                       </div>
//                       <h3 className="text-lg font-semibold mb-2">{car.model}</h3>
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <p className="text-gray-500 text-sm">From</p>
//                           <p className="text-xl font-bold text-green-600">
//                             Rs{car.pricePerHour}/Hr
//                           </p>
//                         </div>
//                         <button
//                           className="text-green-500 hover:text-green-600 font-medium text-sm"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toggleCarExpansion(car.id);
//                           }}
//                         >
//                           {expandedCarId === car.id ? "Hide Details" : "View Details"}
//                         </button>
//                       </div>
//                     </div>

//                     {/* Expanded Details */}
//                     {expandedCarId === car.id && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="bg-[#f0f1d5] p-4 border-t"
//                       >
//                         <div className="grid grid-cols-2 p-2 gap-2 mb-4">
//                           <div>
//                           <p className="text-gray-600">Seats: {car.specs?.seats || 5}</p>
//                           <p className="text-gray-600 mt-2">Fuel: {car.specs?.fuelType || "Petrol"}</p>

//                           </div>

//                           <div className="">
//                           <p className="text-gray-600 ">Year: {car.year || "N/A"}cc</p>

//                             <p className="text-gray-600 mt-2">Type: {car.type}</p>

//                           </div>

//                           <p className="text-gray-600 ">Engine: {car.engine || "N/A"}cc</p>

//                           <p className="text-gray-600">Transmission: {car.transmission || "N/A"}</p>

//                         </div>
//                         <button className="w-full bg-[#E94E3A] hover:bg-[#E94E3A] text-white py-2 rounded-md transition-colors">
//                           Rent Now
//                         </button>
//                       </motion.div>
//                     )}
//                   </div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarList;

// part 5
// import React, { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCar, clearSelectedCar, setFilteredTypes } from "../redux/CarAction";

// const CarList = () => {
//   const dispatch = useDispatch();

//   // Get state from Redux store
//   const {
//     cars,
//     loading,
//     filteredTypes: selectedTypes,
//     selectedCar: expandedCarId
//   } = useSelector(state => ({
//     cars: state.car.allCars,
//     loading: state.car.loading,
//     filteredTypes: state.car.filteredTypes,
//     selectedCar: state.car.selectedCar
//   }));

//   const vehicleTypes = ["Hatchback", "Sedan", "Compact SUV", "SUV", "MPV"];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/api/v1/cars");
//         const data = await res.json();
//         dispatch({ type: 'FETCH_CARS_SUCCESS', payload: data });
//       } catch (err) {
//         console.error("Error fetching cars:", err);
//         dispatch({ type: 'FETCH_CARS_FAILURE', payload: err.message });
//       }
//     };

//     dispatch({ type: 'FETCH_CARS_START' });
//     fetchData();
//   }, [dispatch]);

//   const toggleVehicleType = (type) => {
//     const newTypes = selectedTypes.includes(type)
//       ? selectedTypes.filter(t => t !== type)
//       : [...selectedTypes, type];
//     dispatch(setFilteredTypes(newTypes));
//   };

//   const toggleCarExpansion = (car) => {
//     if (expandedCarId && expandedCarId.id === car.id) {
//       dispatch(clearSelectedCar());
//     } else {
//       dispatch(selectCar(car));
//     }
//   };

//   const filteredCars = selectedTypes.length === 0
//     ? cars
//     : cars.filter(car => selectedTypes.includes(car.type));

//   return (
//     <div className="p-4 mt-4 max-w-7xl mx-auto bg-[#feffea]">
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Vehicle Type Selection - Left Side */}
//         <div className="hidden md:block w-full lg:w-1/4 bg-[#f0f1d5] p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4">Vehicle Type</h2>
//           <div className="space-y-3">
//             {vehicleTypes.map(type => (
//               <label key={type} className="flex items-center space-x-3 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={selectedTypes.includes(type)}
//                   onChange={() => toggleVehicleType(type)}
//                   className="h-5 w-5 text-green-500 rounded border-gray-300 focus:ring-green-500"
//                 />
//                 <span className="text-gray-700">{type}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Car Display - Right Side */}
//         <div className="w-full lg:w-3/4">
//           {loading ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[...Array(6)].map((_, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow-md animate-pulse">
//                   <div className="h-40 bg-gray-200 rounded mb-4"></div>
//                   <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
//                   <div className="h-10 bg-gray-200 rounded"></div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               <AnimatePresence>
//                 {filteredCars.map(car => (
//                   <div key={car.id} className="bg-[#f0f1d5] rounded-lg shadow-md overflow-hidden">
//                     <div
//                       className="p-4 cursor-pointer"
//                       onClick={() => toggleCarExpansion(car)}
//                     >
//                       <div className="h-40 flex items-center justify-center mb-4">
//                         <img
//                           src={car.imageUrl || "/car-placeholder.png"}
//                           alt={car.model}
//                           className="h-full object-contain"
//                         />
//                       </div>
//                       <h3 className="text-lg font-semibold mb-2">{car.model}</h3>
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <p className="text-gray-500 text-sm">From</p>
//                           <p className="text-xl font-bold text-green-600">
//                             Rs{car.pricePerHour}/Hr
//                           </p>
//                         </div>
//                         <button
//                           className="text-green-500 hover:text-green-600 font-medium text-sm"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toggleCarExpansion(car);
//                           }}
//                         >
//                           {expandedCarId?.id === car.id ? "Hide Details" : "View Details"}
//                         </button>
//                       </div>
//                     </div>

//                     <AnimatePresence>
//                       {expandedCarId?.id === car.id && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="bg-[#f0f1d5] p-4 border-t"
//                         >
//                           <div className="grid grid-cols-2 p-2 gap-2 mb-4">
//                             <div>
//                               <p className="text-gray-600">Seats: {car.specs?.seats || 5}</p>
//                               <p className="text-gray-600 mt-2">Fuel: {car.specs?.fuelType || "Petrol"}</p>
//                             </div>
//                             <div>
//                               <p className="text-gray-600">Year: {car.year || "N/A"}</p>
//                               <p className="text-gray-600 mt-2">Type: {car.type}</p>
//                             </div>
//                             <p className="text-gray-600">Engine: {car.engine || "N/A"}cc</p>
//                             <p className="text-gray-600">Transmission: {car.transmission || "N/A"}</p>
//                           </div>
//                           <button className="w-full bg-[#E94E3A] hover:bg-[#E94E3A] text-white py-2 rounded-md transition-colors">
//                             Rent Now
//                           </button>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarList;

//part 6
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useDispatch } from "react-redux";
// import { selectCar } from "../redux/CarAction"; // Adjust the path as needed

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [expandedCarId, setExpandedCarId] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch(); // Initialize dispatch

//   const vehicleTypes = ["Hatchback", "Sedan", "Compact SUV", "SUV", "MPV"];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/api/v1/cars");
//         const data = await res.json();
//         setCars(data);
//         console.log(data);
//       } catch (err) {
//         console.error("Error fetching cars:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const toggleVehicleType = (type) => {
//     setSelectedTypes((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

//   const toggleCarExpansion = (carId) => {
//     setExpandedCarId(expandedCarId === carId ? null : carId);
//   };

//   const filteredCars = selectedTypes.length === 0
//     ? cars
//     : cars.filter((car) => selectedTypes.includes(car.type));

//   const handleSelectCar = (car) => {
//     dispatch(selectCar(car)); // Dispatch the selectCar action with the car object
//     console.log("Selected Car Saved to Redux:", car); // Log for verification
//     // Optionally navigate or show a message (e.g., alert("Car selected!"));
//   };

//   return (
//     <div className="p-4 mt-4 max-w-7xl mx-auto bg-[#feffea]">
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Vehicle Type Selection - Left Side */}
//         <div className="hidden md:block w-full lg:w-1/4 bg-[#f0f1d5] p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4">Vehicle Type</h2>
//           <div className="space-y-3">
//             {vehicleTypes.map((type) => (
//               <label key={type} className="flex items-center space-x-3 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={selectedTypes.includes(type)}
//                   onChange={() => toggleVehicleType(type)}
//                   className="h-5 w-5 text-green-500 rounded border-gray-300 focus:ring-green-500"
//                 />
//                 <span className="text-gray-700">{type}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Car Display - Right Side */}
//         <div className="w-full lg:w-3/4">
//           {loading ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[...Array(6)].map((_, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow-md animate-pulse">
//                   <div className="h-40 bg-gray-200 rounded mb-4"></div>
//                   <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
//                   <div className="h-10 bg-gray-200 rounded"></div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               <AnimatePresence>
//                 {filteredCars.map((car) => (
//                   <div key={car.id} className="bg-[#f0f1d5] rounded-lg shadow-md overflow-hidden">
//                     <div className="p-4 cursor-pointer" onClick={() => toggleCarExpansion(car.id)}>
//                       <div className="h-40 flex items-center justify-center mb-4">
//                         <img
//                           src={car.imageUrl || "/car-placeholder.png"}
//                           alt={car.model}
//                           className="h-full object-contain"
//                         />
//                       </div>
//                       <h3 className="text-lg font-semibold mb-2">{car.model}</h3>
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <p className="text-gray-500 text-sm">From</p>
//                           <p className="text-xl font-bold text-green-600">
//                             Rs{car.pricePerHour}/Hr
//                           </p>
//                         </div>
//                         <button
//                           className="text-green-500 hover:text-green-600 font-medium text-sm"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             toggleCarExpansion(car.id);
//                           }}
//                         >
//                           {expandedCarId === car.id ? "Hide Details" : "View Details"}
//                         </button>
//                       </div>
//                     </div>

//                     {expandedCarId === car.id && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="bg-[#f0f1d5] p-4 border-t"
//                       >
//                         <div className="grid grid-cols-2 p-2 gap-2 mb-4">
//                           <div>
//                             <p className="text-gray-600">Seats: {car.specs?.seats || 5}</p>
//                             <p className="text-gray-600 mt-2">Fuel: {car.specs?.fuelType || "Petrol"}</p>
//                           </div>
//                           <div>
//                             <p className="text-gray-600">Year: {car.year || "N/A"}</p>
//                             <p className="text-gray-600 mt-2">Type: {car.type}</p>
//                           </div>
//                           <p className="text-gray-600">Engine: {car.engine || "N/A"}cc</p>
//                           <p className="text-gray-600">Transmission: {car.transmission || "N/A"}</p>
//                         </div>
//                         <button
//                           className="w-full bg-[#E94E3A] hover:bg-[#E94E3A] text-white py-2 rounded-md transition-colors"
//                           onClick={() => handleSelectCar(car)}
//                         >
//                           Rent Now
//                         </button>
//                       </motion.div>
//                     )}
//                   </div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarList;

//part 7 final one design
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { selectCar } from "../redux/CarAction";

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [expandedCarId, setExpandedCarId] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const vehicleTypes = ["Hatchback", "Sedan", "Compact SUV", "SUV", "MPV"];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/api/v1/cars");
//         const data = await res.json();
//         setCars(data);
//         console.log(data);
//       } catch (err) {
//         console.error("Error fetching cars:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const toggleVehicleType = (type) => {
//     setSelectedTypes((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

//   const toggleCarExpansion = (carId) => {
//     setExpandedCarId(expandedCarId === carId ? null : carId);
//   };

//   const filteredCars =
//     selectedTypes.length === 0
//       ? cars
//       : cars.filter((car) => selectedTypes.includes(car.type));

//   const handleSelectCar = (car) => {
//     dispatch(selectCar(car)); // Save car to Redux
//     console.log("Selected Car Saved to Redux:", car);
//     navigate("/booking"); // Navigate to Booking page
//   };

//   return (
//     <div className="p-4 mt-4 max-w-7xl mx-auto bg-[#feffea]">
//       <div className="flex flex-col lg:flex-row gap-6">
//         <div className="hidden md:block w-full lg:w-1/4 bg-[#f0f1d5] p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4">Vehicle Type</h2>
//           <div className="space-y-3">
//             {vehicleTypes.map((type) => (
//               <label
//                 key={type}
//                 className="flex items-center space-x-3 cursor-pointer"
//               >
//                 <input
//                   type="checkbox"
//                   checked={selectedTypes.includes(type)}
//                   onChange={() => toggleVehicleType(type)}
//                   className="h-5 w-5 text-green-500 rounded border-gray-300 focus:ring-green-500"
//                 />
//                 <span className="text-gray-700">{type}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="w-full lg:w-3/4">
//           {loading ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[...Array(6)].map((_, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-4 rounded-lg shadow-md animate-pulse"
//                 >
//                   <div className="h-40 bg-gray-200 rounded mb-4"></div>
//                   <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
//                   <div className="h-10 bg-gray-200 rounded"></div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
//               <AnimatePresence>
//                 {filteredCars.map((car) => (
//                   <div
//                     key={car.id}
//                     className="bg-[#f0f1d5] rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-center p-4"
//                   >
//                     <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
//                       <img
//                         src={car.imageUrl || "/car-placeholder.png"}
//                         alt={car.model}
//                         className="w-full h-auto max-h-40 object-contain"
//                       />
//                     </div>

//                     <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between md:items-center px-4 space-y-1 md:space-y-0">
//                       <div>
//                         <h3 className="text-xl font-bold mb-2">{car.model}</h3>
//                         <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
//                           <p>
//                             <strong>Seats:</strong> {car.specs?.seats || 5}
//                           </p>
//                           <p>
//                             <strong>Horsepower:</strong>{" "}
//                             {car.horsepower || "N/A"}
//                           </p>
//                           <p>
//                             <strong>Luggage:</strong> {car.specs?.luggage || 2}
//                           </p>
//                           <p>
//                             <strong>Engine:</strong> {car.engine || "N/A"}cc
//                           </p>
//                           <p>
//                             <strong>Doors:</strong> {car.specs?.doors || 4}
//                           </p>
//                           <p>
//                             <strong>Drive:</strong> {car.drive || "N/A"}
//                           </p>
//                           <p>
//                             <strong>Fuel:</strong>{" "}
//                             {car.specs?.fuelType || "Petrol"}
//                           </p>
//                           <p>
//                             <strong>Type:</strong> {car.type}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="text-center md:text-right">
//                         <p className="text-gray-600">Daily rate from</p>
//                         <p className="text-2xl font-bold text-[#E94E3A] mb-2">
//                           Rs{car.pricePerHour}/Hr
//                         </p>
//                         <button
//                           className="bg-[#E94E3A]  text-white px-4 py-2 rounded shadow"
//                           onClick={() => handleSelectCar(car)}
//                         >
//                           Rent Now
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarList;

// old design
// <div key={car.id} className="bg-[#f0f1d5] rounded-lg shadow-md overflow-hidden">
//   <div className="p-4 cursor-pointer" onClick={() => toggleCarExpansion(car.id)}>
//     <div className="h-40 flex items-center justify-center mb-4">
//       <img
//         src={car.imageUrl || "/car-placeholder.png"}
//         alt={car.model}
//         className="h-full object-contain"
//       />
//     </div>
//     <h3 className="text-lg font-semibold mb-2">{car.model}</h3>
//     <div className="flex justify-between items-center">
//       <div>
//         <p className="text-gray-500 text-sm">From</p>
//         <p className="text-xl font-bold text-green-600">
//           Rs{car.pricePerHour}/Hr
//         </p>
//       </div>
//       <button
//         className="text-green-500 hover:text-green-600 font-medium text-sm"
//         onClick={(e) => {
//           e.stopPropagation();
//           toggleCarExpansion(car.id);
//         }}
//       >
//         {expandedCarId === car.id ? "Hide Details" : "View Details"}
//       </button>
//     </div>
//   </div>

//   {expandedCarId === car.id && (
//     <motion.div
//       initial={{ opacity: 0, height: 0 }}
//       animate={{ opacity: 1, height: "auto" }}
//       exit={{ opacity: 0, height: 0 }}
//       transition={{ duration: 0.3 }}
//       className="bg-[#f0f1d5] p-4 border-t"
//     >
//       <div className="grid grid-cols-2 p-2 gap-2 mb-4">
//         <div>
//           <p className="text-gray-600">Seats: {car.specs?.seats || 5}</p>
//           <p className="text-gray-600 mt-2">Fuel: {car.specs?.fuelType || "Petrol"}</p>
//         </div>
//         <div>
//           <p className="text-gray-600">Year: {car.year || "N/A"}</p>
//           <p className="text-gray-600 mt-2">Type: {car.type}</p>
//         </div>
//         <p className="text-gray-600">Engine: {car.engine || "N/A"}cc</p>
//         <p className="text-gray-600">Transmission: {car.transmission || "N/A"}</p>
//       </div>
//       <button
//         className="w-full bg-[#E94E3A] hover:bg-[#E94E3A] text-white py-2 rounded-md transition-colors"
//         onClick={() => handleSelectCar(car)}
//       >
//         Rent Now
//       </button>
//     </motion.div>
//   )}
// </div>
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCar } from "../redux/CarAction";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingCarId, setBookingCarId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Booking details from Redux, updated on every render
  const bookingDetails = useSelector((state) => state.booking);

  // Debug: Log booking details on mount or update
  useEffect(() => {
    console.log("Redux bookingDetails updated:", bookingDetails);
  }, [bookingDetails]); // Dependency on bookingDetails ensures re-render

  const vehicleTypes = ["Hatchback", "Sedan", "Compact SUV", "SUV", "MPV"];

  // Fetch cars from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/cars");
        const data = await res.json();
        console.log("Fetched cars:", data); // Debug log
        setCars(data);
      } catch (err) {
        toast.error("Cars fetch nahi hua yr!");
        console.error("Error fetching cars:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Toggle vehicle type filter
  const toggleVehicleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Filter cars based on selected vehicle types
  const filteredCars =
    selectedTypes.length === 0
      ? cars
      : cars.filter((car) => selectedTypes.includes(car.type));

  // Handle car selection and booking
  const handleSelectCar = async (car) => {
    console.log("handleSelectCar called for car:", car.id); // Debug log
    console.log("Current Booking Details:", bookingDetails); // Latest state check karo

    // Use fresh destructuring from the latest bookingDetails
    const { pickupLocation, returnLocation, startTime, endTime } = bookingDetails || {};

    // Detailed validation logging with full state
    if (!pickupLocation || !returnLocation || !startTime || !endTime) {
      console.log("Validation failed: Missing booking details", { 
        pickupLocation, 
        returnLocation, 
        startTime, 
        endTime, 
        fullState: bookingDetails 
      });
      toast.warn("Pehele pickup aur drop details bharo yr!");
      return;
    }

    // Ensure state is synced before proceeding (increased delay)
    await new Promise((resolve) => setTimeout(resolve, 500)); // Increased to 500ms

    dispatch(selectCar(car));
    setBookingCarId(car.id);
    const payload = {
      carId: car.id,
      pickupLocation,
      returnLocation,
      startTime,
      endTime,
    };
    console.log("first");
    console.log("🚀 Payload sent to API:", payload);

    try {
      const response = await axios.post("http://localhost:8080/api/v1/bookings", payload);
      console.log("API Response:", response.data);
      toast.success("Booking ho gaya yr, badhai!");
      setTimeout(() => navigate("/booking"), 1000);
    } catch (error) {
      console.error("Booking Failed:", error.response?.data || error.message);
      toast.error("Booking mein error aaya, phir try karo!");
    } finally {
      setBookingCarId(null);
    }
  };

  return (
    <div className="p-4 mt-4 max-w-7xl mx-auto bg-[#feffea]">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="hidden md:block w-full lg:w-1/4 bg-[#f0f1d5] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Vehicle Type</h2>
          <div className="space-y-3">
            {vehicleTypes.map((type) => (
              <label
                key={type}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => toggleVehicleType(type)}
                  className="h-5 w-5 text-green-500 rounded border-gray-300 focus:ring-green-500"
                />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-3/4">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md animate-pulse"
                >
                  <div className="h-40 bg-gray-200 rounded mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <AnimatePresence>
                {filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className="bg-[#f0f1d5] rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-center p-4"
                  >
                    <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
                      <img
                        src={car.imageUrl || "/car-placeholder.png"}
                        alt={car.model}
                        className="w-full h-auto max-h-40 object-contain"
                      />
                    </div>

                    <div className="w-full md:w-3/3 flex flex-col md:flex-row justify-between md:items-center px-4 space-y-1 md:space-y-0">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{car.model}</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <p>
                            <strong>Seats:</strong> {car.specs?.seats || 5}
                          </p>
                          <p>
                            <strong>Horsepower:</strong>{" "}
                            {car.horsepower || "N/A"}
                          </p>
                          <p>
                            <strong>Luggage:</strong>{" "}
                            {car.specs?.luggage || 2}
                          </p>
                          <p>
                            <strong>Engine:</strong> {car.engine || "N/A"}cc
                          </p>
                          <p>
                            <strong>Doors:</strong> {car.specs?.doors || 4}
                          </p>
                          <p>
                            <strong>Drive:</strong> {car.drive || "N/A"}
                          </p>
                          <p>
                            <strong>Fuel:</strong>{" "}
                            {car.specs?.fuelType || "Petrol"}
                          </p>
                          <p>
                            <strong>Type:</strong> {car.type}
                          </p>
                        </div>
                      </div>

                      <div className="text-center md:text-right">
                        <p className="text-gray-600">Daily rate from</p>
                        <p className="text-2xl font-bold text-[#E94E3A] mb-2">
                          Rs{car.pricePerHour}/Hr
                        </p>
                        <button
                          className="bg-[#E94E3A] text-white px-4 py-2 rounded shadow flex items-center justify-center min-w-[100px]"
                          onClick={() => handleSelectCar(car)}
                          disabled={bookingCarId === car.id}
                        >
                          {bookingCarId === car.id ? (
                            <span className="loader border-white border-t-transparent border-2 rounded-full w-5 h-5 animate-spin" />
                          ) : (
                            "Rent Now"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarList;