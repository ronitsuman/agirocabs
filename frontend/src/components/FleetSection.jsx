import { useState, useEffect } from 'react';
import { FaUsers, FaSuitcase } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";
import { FaAnglesRight,FaAnglesLeft  } from "react-icons/fa6";



export default function FleetSection() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:8080/api/v1/cars')
      .then(response => response.json())

      .then(data => {
        setCars(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  return (
    <div className="bg-[#feffea] relative w-full  max-w-6xl mx-auto overflow-hidden pb-10">
      <h2 className="text-4xl mt-8 font-bold text-center mb-6">Our Vehicle Fleet</h2>
      <p className="text-center text-xl pb-8 font-serif">Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.</p>

      {/* SCROLLABLE CAR LIST */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 h-[400px]">
        <div className="flex gap-4 ">
          {cars.map((car, i) => (
            <div key={i} className="flex-shrink-0 w-82 bg-white shadow-lg rounded-lg p-4 text-center">
              <img src={car.imageUrl} alt={car.name} className="w-full h-40 object-contain hover:scale-125" />
              <h3 className="text-lg font-bold mt-2">{car.model}</h3>
              <p className="text-sm text-gray-500">{car.type}</p>
              <div className="flex justify-center items-center gap-4 text-gray-600 mt-2">
                {/* <div className="flex items-center gap-1">
                  <GiCarDoor className="bg-[#E94E3A]" /> <span>{car.doors}</span>
                </div> */}
                <div className="flex items-center gap-1">
                  <FaUsers className="text-[#E94E3A]" /> <span>{car.specs.seats}</span>
                </div>
                {/* <div className="flex items-center gap-1">
                  <FaSuitcase className="bg-[#E94E3A]" /> <span>{car.trunk} Trunk</span>
                </div> */}
                <div className="flex items-center gap-1">
                <BsFuelPump className='text-[#E94E3A]' />
                <span>{car.specs.fuelType} </span>
                </div>
              </div>
              <hr className="mt-2 text-gray-200" />
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold mt-2 flex flex-col">
                  <span className="font-normal text-base">Daily rate from</span>₹ {car.pricePerHour}/hr
                </p>
                <button className="mt-3 px-4 py-2 bg-[#E94E3A] text-white font-bold rounded-lg">Rent Now</button>
              </div>
            </div>
          ))}
        
        </div>
       
      </div>
      <p className='text-center font-bold text-gray-500 flex items-center justify-around  '><FaAnglesLeft />
      Scroll to see More cars ...<FaAnglesRight />
      </p>
    </div>
  );
}