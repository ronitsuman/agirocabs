// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";
// import { motion } from "framer-motion";

// const NavigationBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [showNavbar, setShowNavbar] = useState(true);
  
//   const menuRef = useRef(null); // Ref for detecting outside click

//   // Scroll Effect for Sticky Navbar and Hide/Show on Scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }

//       if (window.scrollY > lastScrollY) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }

//       setLastScrollY(window.scrollY <= 0 ? 0 : window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   // Click outside menu to close
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <nav
//       className={`fixed lg:pl-22  lg:pr-32 top-0 mt-9 h-22 left-0 right-0 w-full  flex  justify-between items-center  transition-all duration-300 z-50 ${
//         isSticky ? "bg-white shadow-md py-2 mt-[-6px]" : "bg-transparent py-4 text-white pt-16 md:pt-10"
//       } ${!showNavbar && "-translate-y-full"}`}
//     >
//       {/* Logo */}
//       <div className="w-[150px]">
//         <a href="/"> <img className="w-full h-auto" src="/logo.png" alt="Logo" />   </a>
        
//       </div>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center gap-6 ">
//         <Link className="font-sans" to="/">Home</Link>
//         <Link className="font-sans" to="/cars">Cars</Link>
//         <Link className="font-sans" to="/booking">Booking</Link>
//         <Link className="font-sans" to="/aboutus">About Us</Link>
//         <Link className="font-sans" to="/contact">Contact</Link>
//         {/* <Link className="font-sans" to="/register">Register</Link> */}
//       </div>

//       {/* Sign In Button (Desktop) */}
//       <button className="hidden md:block bg-green-500 rounded-md text-white px-4 py-2">
//         Log In
//       </button>

//       {/* Mobile Menu Button */}
//       <button className="md:hidden text-4xl" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <HiX /> : <HiMenu />}
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           ref={menuRef} // Assign ref to menu
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="absolute top-20 left-0 w-full min-h-full text-black bg-white shadow-lg flex flex-col items-center py-4 space-y-6 z-10"
//         >
//           <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link to="/cars" onClick={() => setIsOpen(false)}>Cars</Link>
//           <Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link>
//           <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
//           <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
//           <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
//           <button className="bg-green-500 rounded-md text-white px-4 py-2">
//             Log In
//           </button>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default NavigationBar;




// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";

// const NavigationBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [step, setStep] = useState(1);
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const menuRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//       if (window.scrollY > lastScrollY) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }
//       setLastScrollY(window.scrollY <= 0 ? 0 : window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

//   const handleSendOTP = async () => {
//     if (!phone || phone.length !== 10) return alert("Enter valid phone number");
//     setIsLoading(true);
//     try {
//       await axios.post("http://localhost:8080/api/send-otp", { phone });
//       setStep(2);
//     } catch (err) {
//       alert("Failed to send OTP");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOTP = async () => {
//     if (!otp) return alert("Enter OTP");
//     setIsLoading(true);
//     try {
//       await axios.post("http://localhost:8080/api/verify-otp", { phone, otp });
//       alert("OTP Verified Successfully!");
//       setShowLoginModal(false);
//       setStep(1);
//     } catch (err) {
//       alert("Invalid OTP");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <nav
//         className={`fixed lg:pl-22 lg:pr-32 top-0 mt-9 h-22 left-0 right-0 w-full flex justify-between items-center transition-all duration-300 z-50 ${
//           isSticky ? "bg-white shadow-md py-2 mt-[-6px]" : "bg-transparent py-4 text-white pt-16 md:pt-10"
//         } ${!showNavbar && "-translate-y-full"}`}
//       >
//         <div className="w-[150px]">
//           <a href="/">
//             <img className="w-full h-auto" src="/logo.png" alt="Logo" />
//           </a>
//         </div>
//         <div className="hidden md:flex items-center gap-6">
//           <Link className="font-sans" to="/">Home</Link>
//           <Link className="font-sans" to="/cars">Cars</Link>
//           <Link className="font-sans" to="/booking">Booking</Link>
//           <Link className="font-sans" to="/aboutus">About Us</Link>
//           <Link className="font-sans" to="/contact">Contact</Link>
//         </div>
//         <button onClick={() => setShowLoginModal(true)} className="hidden md:block bg-green-500 rounded-md text-white px-4 py-2">
//           Log In
//         </button>
//         <button className="md:hidden text-4xl" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <HiX /> : <HiMenu />}
//         </button>
//         {isOpen && (
//           <motion.div
//             ref={menuRef}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="absolute top-20 left-0 w-full min-h-full text-black bg-white shadow-lg flex flex-col items-center py-4 space-y-6 z-10"
//           >
//             <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link to="/cars" onClick={() => setIsOpen(false)}>Cars</Link>
//             <Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link>
//             <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
//             <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
//             <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
//             <button onClick={() => setShowLoginModal(true)} className="bg-green-500 rounded-md text-white px-4 py-2">Log In</button>
//           </motion.div>
//         )}
//       </nav>

//       {/* Login Modal */}
//       <AnimatePresence>
//         {showLoginModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//             onClick={() => setShowLoginModal(false)}
//           >
//             <motion.div
//               onClick={(e) => e.stopPropagation()}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg relative"
//             >
//               <button className="absolute top-3 right-3 text-xl" onClick={() => setShowLoginModal(false)}>&times;</button>

//               {step === 1 && (
//                 <motion.div key="step1" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
//                   <h2 className="text-lg font-semibold mb-4">Enter Phone Number</h2>
//                   <div className="flex border border-green-500 rounded overflow-hidden">
//                     <span className="px-3 bg-gray-100 flex items-center">+91</span>
//                     <input type="tel" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} className="p-2 flex-1 outline-none" />
//                   </div>
//                   <button onClick={handleSendOTP} disabled={isLoading} className="w-full mt-4 bg-green-500 text-white py-2 rounded">
//                     {isLoading ? "Sending..." : "Send OTP"}
//                   </button>
//                 </motion.div>
//               )}

//               {step === 2 && (
//                 <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
//                   <h2 className="text-lg font-semibold mb-4">Enter OTP</h2>
//                   <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full border border-green-500 p-2 rounded outline-none" placeholder="Enter OTP" />
//                   <button onClick={handleVerifyOTP} disabled={isLoading} className="w-full mt-4 bg-green-600 text-white py-2 rounded">
//                     {isLoading ? "Verifying..." : "Verify OTP"}
//                   </button>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default NavigationBar;



import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import AuthModal from "../components/AuthModal"; // Import AuthModal

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false); //mobile
  const [isSticky, setIsSticky] = useState(false);  //sticky
  const [lastScrollY, setLastScrollY] = useState(0);  //scroll
  const [showNavbar, setShowNavbar] = useState(true); //nav bar 
  const [isAuthOpen, setIsAuthOpen] = useState(false); //  Modal state

  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(Math.max(0, window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed lg:pl-22 lg:pr-32 top-0  h-22 left-0 right-0 w-full flex justify-between items-center transition-all duration-300 z-50 ${
          isSticky ? "bg-[#feffea] shadow-md py-2 mt-[-6px]" : "bg-transparent py-4 text-white pt-16 md:pt-20"
        } ${!showNavbar && "-translate-y-full"}`}
      >
        {/* Logo */}
        <div className="w-[150px]">
          <a href="/">
            <img className="w-full h-auto" src="/logo.png" alt="Logo" />
          </a>
        </div>

        {/* Desktop Navigation */}
        {/* <div className="hidden md:flex items-center gap-6 ">
          <Link className="font-sans" to="/">Home</Link>
          <Link className="font-sans" to="/cars">Cars</Link>
          <Link className="font-sans" to="/booking">Booking</Link>
          <Link className="font-sans" to="/aboutus">About Us</Link>
          <Link className="font-sans" to="/contact">Contact</Link>
        </div> */}

        {/*  Sign In Button (Desktop) */}
        <button
          className="mr-2 md:block bg-[#E94E3A] rounded-md text-white px-4 py-2"
          onClick={() => setIsAuthOpen(true)}
        >
          Log In
        </button>

        {/* Mobile Menu Button */}
        {/* <button
              className="bg-[#E94E3A] rounded-md text-white px-4 py-2"
              onClick={() => {
                setIsAuthOpen(true);
                setIsOpen(false); // Close menu
              }}
            >
              Log In
            </button> */}
        {/* <button className="md:hidden text-4xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button> */}

        {/* Mobile Menu */}
        {/* {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full min-h-full text-black bg-white shadow-lg flex flex-col items-center py-4 space-y-6 z-10"
          >
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/cars" onClick={() => setIsOpen(false)}>Cars</Link>
            <Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            {/* <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link> */}

            {/*  Sign In Button (Mobile) */}
            {/* <button
              className="bg-[#E94E3A] rounded-md text-white px-4 py-2"
              onClick={() => {
                setIsAuthOpen(true);
                setIsOpen(false); // Close menu
              }}
            >
              Log In
            </button>
          </motion.div>
        )} */} 
      </nav>

      {/*  Auth Modal Integration */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default NavigationBar;
