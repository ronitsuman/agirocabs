import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const OTPVerify = ({ phone, onSuccess, onBack }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    if (otp.length !== 6) {
      setError("Please enter 6-digit OTP");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/verify-otp", {
        phoneNumber: phone,
        otp: otp,
      });

      if (response.data.success) {
        onSuccess(); // OTP verified, move to next step
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      key="otp-verify"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Verify OTP</h2>

      <p className="text-sm text-gray-500">
        Enter the 6-digit code sent to <span className="font-semibold text-gray-700">+91-{phone}</span>
      </p>

      <input
        type="text"
        maxLength={6}
        className="w-full px-4 py-3 border rounded-md outline-none"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex gap-2">
        <button
          onClick={onBack}
          className="w-full py-3 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          Back
        </button>

        <button
          onClick={handleVerify}
          disabled={loading}
          className={`w-full py-3 rounded-md font-semibold ${
            loading ? "bg-gray-400" : "bg-[#E94E3A] hover:bg-green-600"
          } text-white`}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </motion.div>
  );
};

export default OTPVerify;
