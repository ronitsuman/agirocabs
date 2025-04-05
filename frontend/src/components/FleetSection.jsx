import {  FaUsers, FaSuitcase } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";


const cars = [
  { name: "Maruti Swift", price: "Rs109/Hr", type: "Hatchback", doors: 4, passengers: 5, trunk: "Small", img: "swift.png" },
  { name: "Ford Aspire", price: "Rs130/Hr", type: "Sedan", doors: 4, passengers: 5, trunk: "Medium", img: "aspire.png" },
  { name: "Hyundai Verna", price: "Rs150/Hr", type: "Exotic Car", doors: 4, passengers: 5, trunk: "Medium", img: "verna.png" },
  { name: "Honda Elevate", price: "Rs140/Hr", type: "SUV", doors: 4, passengers: 5, trunk: "Large", img: "honda elevate.png" },
  { name: "Skoda Slavia", price: "Rs145/Hr", type: "Sedan", doors: 4, passengers: 5, trunk: "Medium", img: "skoda slavia.png" },
  { name: "Endeavour", price: "Rs200/Hr", type: "SUV", doors: 5, passengers: 7, trunk: "Large", img: "endavour.png" }
];

export default function FleetSection() {
  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden pb-10">
      <h2 className="text-4xl mt-8 font-bold  text-center mb-6">Our Vehicle Fleet</h2>
      <p className="text-center text-xl pb-8 font-serif">Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.</p>

      {/* SCROLLABLE CAR LIST */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="flex gap-4">
          {cars.map((car, i) => (
            <div key={i} className="flex-shrink-0 w-92 bg-white shadow-lg rounded-lg p-4 text-center">
              <img src={car.img} alt={car.name} className="w-full h-40 object-contain hover:scale-125" />
              <h3 className="text-lg font-bold mt-2">{car.name}</h3>
              <p className="text-sm text-gray-500">{car.type}</p>
              <div className="flex justify-center items-center gap-4 text-gray-600 mt-2">
                <div className="flex items-center gap-1">
                  <GiCarDoor 
                  className="text-green-500 " /> <span>{car.doors} </span>
                </div>
                <div className="flex items-center gap-1">
                  <FaUsers className="text-green-500 " /> <span>{car.passengers} </span>
                </div>
                <div className="flex items-center gap-1">
                  <FaSuitcase className="text-green-500 " /> <span>{car.trunk} Trunk</span>
                </div>
              </div>
              <hr className="mt-2 text-gray-200" />
              <div className="flex items-center justify-between">
              <p className="text-xl font-semibold mt-2 flex flex-col "> <span className="font-normal text-base">Daily rate from</span> {car.price}</p>
              <button className="mt-3 px-4 py-2 bg-green-500 text-white font-bold rounded-lg">Rent Now</button>

              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}