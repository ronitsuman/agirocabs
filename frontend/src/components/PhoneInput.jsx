import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const PhoneNumberLogin = ({ onNext }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

//   const handleGetOTP = async () => {
//     if (!phone || phone.length < 10) {
//       setError("Please enter a valid phone number");
//       return;
//     }

//     setError("");
//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:8080/api/auth/send-otp", {
//         phoneNumber: phone,
//       });

//       if (response.data.success) {
//         onNext(); // Move to OTP step
//       } else {
//         setError("Failed to send OTP. Try again.");
//       }
//     } catch (err) {
//       setError("Something went wrong. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <div className="">
    <motion.div
      key="phone-input"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8 mx-auto"
    >
      <img src="logo.png" width="100px" alt="" className="mb-5" />
      <h2 className=" flex flex-col-reverse text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Log In or Register 
      </h2>

      <PhoneInput
        country={"in"}
        value={phone}
        onChange={setPhone}
        enableSearch
        inputClass="!w-full !py-3 !text-base !rounded-md"
        buttonClass="!rounded-l-md"
        containerClass="mb-3"
        dropdownStyle={{ zIndex: 1000 }}
      />

      {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

      <button
        // onClick={handleGetOTP}
        disabled={loading}
        className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {loading ? "Sending OTP..." : "Get OTP"}
      </button>

      <p className="text-xs text-center text-gray-500 mt-5">
        By continuing, you agree to our{" "}
        <span className="underline cursor-pointer">Privacy Policy</span> &{" "}
        <span className="underline cursor-pointer">Terms of Use</span>.
      </p>
    </motion.div>
    {/* <div>
        <img src="aspire.png" alt="" />
    </div> */}



    </div>
 
  );
};

export default PhoneNumberLogin;
