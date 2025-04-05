import React from 'react';
import { motion } from 'framer-motion';

const FareSummary = ({ fare }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-100 p-6 rounded-xl shadow-lg h-fit">
      <h3 className="text-xl font-bold mb-4">Fare Summary</h3>
      <p className="mb-2">Total Fare: <span className="font-semibold">₹{fare}</span></p>
      <button disabled={fare === 0} className={`w-full py-2 mt-4 rounded text-white ${fare === 0 ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}>
        Proceed to Payment
      </button>
    </motion.div>
  );
};

export default FareSummary;