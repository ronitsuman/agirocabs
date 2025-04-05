import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhoneInput from "./PhoneInput";
import OTPVerify from "./OTPVerify";

const AuthModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");

  const handlePhoneSubmit = (enteredPhone) => {
    setPhone(enteredPhone);
    setStep(2);
  };

  const handleSuccess = () => {
    alert("Login successful!");
    setStep(1);
    setPhone("");
    onClose();
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md mx-auto relative"
            initial={{ scale: 0.9, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>

            {step === 1 && <PhoneInput onSubmit={handlePhoneSubmit} />}
            {step === 2 && <OTPVerify phone={phone} onSuccess={handleSuccess} onBack={handleBack} />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
