import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  
  const menuRef = useRef(null); // Ref for detecting outside click

  // Scroll Effect for Sticky Navbar and Hide/Show on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY <= 0 ? 0 : window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Click outside menu to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-4 py-3 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md py-2 mt-[-6px]" : "bg-transparent py-4 text-white pt-16 md:pt-10"
      } ${!showNavbar && "-translate-y-full"}`}
    >
      {/* Logo */}
      <div className="w-[150px]">
        <a href="/"> <img className="w-full h-auto" src="/logo.png" alt="Logo" />   </a>
        
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
      </div>

      {/* Sign In Button (Desktop) */}
      <button className="hidden md:block bg-green-500 rounded-md text-white px-4 py-2">
        Sign In
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-4xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          ref={menuRef} // Assign ref to menu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 w-full min-h-full text-black bg-white shadow-lg flex flex-col items-center py-4 space-y-6 z-10"
        >
          <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/cars" onClick={() => setIsOpen(false)}>Cars</Link>
          <Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
          <button className="bg-green-500 rounded-md text-white px-4 py-2">
            Sign In
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default NavigationBar;
