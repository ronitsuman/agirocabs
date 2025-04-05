import React from 'react';

const CarInfo = ({ car }) => {
  return (
    <div className="flex items-center gap-4 mb-4 border p-3 rounded-lg">
      <img src={car.image} alt="Car" className="w-16 h-12 object-cover" />
      <h2 className="font-semibold">{car.name} - Rs{car.rate}/Hr</h2>
    </div>
  );
};

export default CarInfo;