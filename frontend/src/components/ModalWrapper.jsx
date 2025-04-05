import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const ModalWrapper = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white w-full max-w-4xl h-[450px] rounded-xl shadow-lg flex overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-10"
        >
          <IoClose />
        </button>

        {/* Left Image */}
        <div className="w-1/2 hidden md:flex items-center justify-center bg-gray-100">
          <img
            src="/car-illustration.png"
            alt="Login Illustration"
            className="max-w-[80%] object-contain"
          />
        </div>

        {/* Right Side Content (Form Step) */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default ModalWrapper;
