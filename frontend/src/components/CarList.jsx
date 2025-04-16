import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dynamically import all car images from assets/cars folder
const images = import.meta.glob("../assets/cars/*.png", { eager: true });

// 🧠 Map model names to image filenames
const imageMap = {
  Maruti_Swift: "swift.png",
  Innova: "innova.png",
  XUV700: "xuv700.png",
  Harrier: "harrier.png",
  Creta: "creta.png",
  Baleno: "baleno.png",
  // Add more mappings as needed
};

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [filteredType, setFilteredType] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/cars");
        const data = await res.json();
        setCars(data);
      } catch (err) {
        console.error("Error fetching cars:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredCars =
    filteredType === "All"
      ? cars
      : cars.filter((car) => car.type === filteredType);

  //  Get image from model name
  const getImage = (modelName) => {
    if (!modelName) return "";
  
    // Convert model name to lowercase and replace space with dash or underscore
    const formattedNames = [
      modelName.toLowerCase().replace(/\s+/g, "-"),
      modelName.toLowerCase().replace(/\s+/g, "_"),
    ];
  
    for (const name of formattedNames) {
      const match = Object.entries(images).find(([path]) =>
        path.toLowerCase().includes(name)
      );
      if (match) return match[1].default;
    }
  
    return ""; // fallback
  };
  

  const skeletonArray = Array(6).fill(0);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="font-semibold text-2xl text-center">Vehicle Type</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6 items-center justify-center mt-4">
        {["All", "Hatchback", "SUV", "Sedan", "Compact SUV"].map((type) => (
          <button
            key={type}
            onClick={() => setFilteredType(type)}
            className={`px-4 py-2 rounded-full text-white text-sm md:text-base ${
              filteredType === type ? "bg-green-600" : "bg-[#e94e39]"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Car List or Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-6">
        {loading ? (
          skeletonArray.map((_, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 p-4 shadow rounded bg-white animate-pulse"
            >
              <div className="w-full sm:w-[150px] h-[100px] bg-gray-200 rounded" />
              <div className="flex-1 space-y-2">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="h-5 w-20 bg-gray-200 rounded mb-2" />
                <div className="h-8 w-24 bg-gray-200 rounded" />
              </div>
            </div>
          ))
        ) : (
          <AnimatePresence>
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 p-4 shadow-lg rounded-lg bg-white"
              >
                <img
                  src={getImage(car.model)}
                  alt={car.model}
                  className="w-full sm:w-[150px] max-h-[120px] object-contain mx-auto sm:mx-0"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{car.model}</h2>
                  <div className="text-sm text-gray-600 space-y-1 mt-2">
                    <p>Seats: {car.specs.seats}</p>
                    <p>Fuel: {car.specs.fuelType}</p>
                    <p>HP: {car.horsepower} | Engine: {car.engine}cc</p>
                    <p>Drive: {car.drive}</p>
                    <p>Type: {car.type}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-base">Daily rate from</p>
                  <p className="text-3xl font-bold text-black-600">
                    Rs{car.pricePerHour}/Hr
                  </p>
                  <button className="bg-green-500 mt-2 text-white px-3 py-1 rounded hover:bg-green-600 transition text-sm">
                    Rent Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default CarList;
