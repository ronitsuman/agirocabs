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
//           {["Hatchback", "Prime Sedan", "Sedan", "SUV"].map((type) => (
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
//                     src={selectedCar.image || "/car-placeholder.png"}
//                     alt={selectedCar.model}
//                     className="h-48 object-contain"
//                   />
//                 </div>
//                 <div className="w-full md:w-2/3">
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
//                         src={car.image || "/car-placeholder.png"}
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

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [expandedCarId, setExpandedCarId] = useState(null);
  const [loading, setLoading] = useState(true);

  const vehicleTypes = ["Hatchback", "Sedan", "Compact SUV","SUV","MPV"  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/cars");
        const data = await res.json();
        setCars(data);
        console.log(data)
      } catch (err) {
        console.error("Error fetching cars:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleVehicleType = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const toggleCarExpansion = (carId) => {
    setExpandedCarId(expandedCarId === carId ? null : carId);
  };

  const filteredCars = selectedTypes.length === 0
    ? cars
    : cars.filter(car => selectedTypes.includes(car.type));

  return (
    <div className="p-4 mt-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Vehicle Type Selection - Left Side */}
        <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Vehicle Type</h2>
          <div className="space-y-3">
            {vehicleTypes.map(type => (
              <label key={type} className="flex items-center space-x-3 cursor-pointer">
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

        {/* Car Display - Right Side */}
        <div className="w-full lg:w-3/4">
          {/* Car List Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md animate-pulse">
                  <div className="h-40 bg-gray-200 rounded mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredCars.map(car => (
                  <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Car Card Top */}
                    <div 
                      className="p-4 cursor-pointer"
                      onClick={() => toggleCarExpansion(car.id)}
                    >
                      <div className="h-40 flex items-center justify-center mb-4">
                        <img
                          src={car.image || "/car-placeholder.png"}
                          alt={car.model}
                          className="h-full object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{car.model}</h3>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-500 text-sm">From</p>
                          <p className="text-xl font-bold text-green-600">
                            Rs{car.pricePerHour}/Hr
                          </p>
                        </div>
                        <button
                          className="text-green-500 hover:text-green-600 font-medium text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCarExpansion(car.id);
                          }}
                        >
                          {expandedCarId === car.id ? "Hide Details" : "View Details"}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {expandedCarId === car.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50 p-4 border-t"
                      >
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-gray-600">Seats: {car.specs?.seats || 5}</p>
                            <p className="text-gray-600">Luggage: {car.specs?.luggage || 2}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Doors: {car.specs?.doors || 4}</p>
                            <p className="text-gray-600">Fuel: {car.specs?.fuelType || "Petrol"}</p>
                          </div>
                          <p className="text-gray-600">Horsepower: {car.horsepower || "N/A"}</p>
                          <p className="text-gray-600">Engine: {car.engine || "N/A"}cc</p>
                          <p className="text-gray-600">Drive: {car.drive || "N/A"}</p>
                          <p className="text-gray-600">Type: {car.type}</p>
                        </div>
                        <button className="w-full bg-[#E94E3A] hover:bg-[#E94E3A] text-white py-2 rounded-md transition-colors">
                          Rent Now
                        </button>
                      </motion.div>
                    )}
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