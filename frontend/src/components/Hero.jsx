// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaCar, FaCarSide, FaShuttleVan, FaTruck } from "react-icons/fa";
// import StepsSection from "./StepsSection";


// const HeroSection = () => {
  
//   const [pickupDate, setPickupDate] = useState("");
//   const [dropDate, setDropDate] = useState("");
  

//   //  get current date and time
//   const getCurrentDateTime = () => {
//     const now = new Date();
//     return now.toISOString().slice(0, 16); // Converted to "YYYY-MM-DDTHH:MM" 
//   };

//   useEffect(() => {
//     setPickupDate(getCurrentDateTime());
//     setDropDate(getCurrentDateTime());
//   }, []);



//   return (
//     <div className=" relative w-full h-full bg-fixed bg-center bg-cover bg-[url('/Page-01.png')] pt-32">
      
//       {/* Overlay */}
//       <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>


//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-6xl font-bold "
//         >
//           Looking for a <span className="text-green-400">vehicle?</span> You're at the right place.
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mt-4 text-lg md:text-xl font-sans"
//         >
//           Book your self Driven Car easily with AgiroCabs
//         </motion.p>

//         {/* Search Box */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="mt-8 bg-white text-black    gap-12 p-6 rounded-lg shadow-lg w-full max-w-5xl"
//         >
         

//          <div className="flex flex-row justify-center gap-12 ">
//                    {/* Pickup & Drop Details */}
//           <div className=" items-center gap-4 mt-4">
//             <label htmlFor="Pickup Location" className="font-bold text-xl">Pickup Location </label>
//             {/* <input type="text" id="Pickup Location" placeholder="Pickup Location" className="p-3 border rounded-md w-full" /> */}
//             <select id="PickupLocation" className="p-4 border rounded-md w-full">
//                <option value="">Select Pickup Location</option>
//                <option value="Delhi">Patna Junction </option>
//                <option value="Mumbai">Jayprakash International Airport Patna </option>
//                <option value="Bangalore">Danapur Railway Station</option>
//                <option value="Hyderabad">Patliputra Railway Station </option>
//                <option value="Chennai"></option>
//              </select>

//             <br />
//             <br />
//             <label htmlFor="Pick Up Date & Time" className="font-bold text-xl">Pick Up Date & Time :</label>
//             <input
//               type="datetime-local"
//               id="Pick Up Date & Time"
//               className="p-3 border rounded-md w-full"
//               value={pickupDate}
//               onChange={(e) => setPickupDate(e.target.value)}
//             />
          
//           </div>
          

//           {/* Date & Time Selection */}
//           <div className=" gap-4 mt-4">
            
//                <label htmlFor="Drop-Off Location " className="font-bold text-xl">Drop-Off Location </label>
//                <select id="DropoffLocation" className="p-4 border rounded-md w-full">
//                <option value="">Select Pickup Location</option>
//                <option value="Delhi">Del</option>
//                <option value="Mumbai">Mumbai</option>
//                <option value="Bangalore">Bangalore</option>
//                <option value="Hyderabad">Hyderabad</option>
//                <option value="Chennai">Chennai</option>
//              </select>
//                <br />
//                <br />
//             <label htmlFor="Return Date & Time" className="font-bold text-xl">Return Date & Time</label>
//             <input
//               type="datetime-local"
//               className="p-3 border rounded-md w-full"
//               value={dropDate}
//               onChange={(e) => setDropDate(e.target.value)}
//             />
//           </div>

//          </div>
       


         
 

//           {/* Submit Button */}
//           <div className="mt-4 flex justify-center">
//             <button className="bg-green-500 mt-3 text-white px-6 py-3 rounded-md w-[400px]">Find Cars</button>
//           </div>
//         </motion.div>
//         <StepsSection/>
//       </div>
      
      
//     </div>
//   );
// };

// export default HeroSection;



// 2nd try with video 




import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCar, FaCarSide, FaShuttleVan, FaTruck } from "react-icons/fa";
import StepsSection from "./StepsSection";

const HeroSection = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  
  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16); // Converted to "YYYY-MM-DDTHH:MM" 
  };

  useEffect(() => {
    setPickupDate(getCurrentDateTime());
    setDropDate(getCurrentDateTime());
  }, []);

  return (
    <div className="relative w-full h-full pt-32 overflow-hidden bg-fixed bg-center bg-cover bg-[url('/Page-01.png')]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bgvideo2.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img src="Page-01.png" alt="Fallback background" />
        </video>
        {/* Video overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold "
        >
          Looking for a <span className="text-[#E94E3A]">vehicle?</span> You're at the right place.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg md:text-xl font-sans"
        >
          Book your self Driven Car easily with AgiroCabs
        </motion.p>

        {/* Search Box */}
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="mt-8 bg-[#feffea]/60 text-black p-4 md:p-6 rounded-lg shadow-lg w-full max-w-5xl mx-4 md:mx-auto"
>
  <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-12">
    {/* Pickup & Drop Details */}
    <div className="w-full md:w-1/2 space-y-4">
      <div>
        <label htmlFor="PickupLocation" className="font-bold text-lg md:text-xl block mb-2">
          Pickup Location
        </label>
        <select 
          id="PickupLocation" 
          className="p-3 md:p-4  border rounded-md w-full text-sm md:text-base"
        >
          <option className="bg-[#feffea]/60" value="">Select Pickup Location</option>
          <option className="bg-[#feffea]/60" value="Patna airport">Jayprakash International Airport Patna</option>
          <option className="bg-[#feffea]/60" value="Patna junction">Patna Junction </option>
          <option className="bg-[#feffea]/60" value="Danapur Junction">Danapur Junction</option>
          <option className="bg-[#feffea]/60" value="Patliputra station">Patliputra Railway Station</option>
          <option className="bg-[#feffea]/60" value="Boring road">Boring Road</option>
        </select>
      </div>

      <div>
        <label htmlFor="PickUpDateTime" className="font-bold text-lg md:text-xl block mb-2">
          Pick Up Date & Time
        </label>
        <input
          type="datetime-local"
          id="PickUpDateTime"
          className="p-3 border rounded-md w-full text-sm md:text-base"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
      </div>
    </div>
    
    {/* Date & Time Selection */}
    <div className="w-full md:w-1/2 space-y-4">
      <div>
        <label htmlFor="DropoffLocation" className="font-bold text-lg md:text-xl block mb-2">
          Drop-Off Location
        </label>
        <select 
          id="PickupLocation" 
          className="p-3 md:p-4  border rounded-md w-full text-sm md:text-base"
        >
          <option className="bg-[#feffea]/60" value="">Select Drop Location</option>
          <option className="bg-[#feffea]/60" value="Patna airport">Jayprakash International Airport Patna</option>
          <option className="bg-[#feffea]/60" value="Patna junction">Patna Junction </option>
          <option className="bg-[#feffea]/60" value="Danapur Junction">Danapur Junction</option>
          <option className="bg-[#feffea]/60" value="Patliputra station">Patliputra Railway Station</option>
          <option className="bg-[#feffea]/60" value="Boring road">Boring Road</option>
        </select>
      </div>

      <div>
        <label htmlFor="ReturnDateTime" className="font-bold text-lg md:text-xl block mb-2">
          Return Date & Time
        </label>
        <input
          type="datetime-local"
          id="ReturnDateTime"
          className="p-3 border rounded-md w-full text-sm md:text-base"
          value={dropDate}
          onChange={(e) => setDropDate(e.target.value)}
        />
      </div>
    </div>
  </div>

  {/* Submit Button - responsive width and padding */}
  <div className="mt-6 flex justify-center">
    <button  className="bg-[#E94E3A]  text-white px-4 py-2 md:px-6 md:py-3 rounded-md w-full sm:w-[300px] md:w-[400px] transition-colors duration-300">
      Find Cars
    </button>
  </div>
</motion.div>
        <StepsSection/>
      </div>
    </div>
  );
};

export default HeroSection;
