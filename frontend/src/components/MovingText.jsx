"use client";
import { motion } from "framer-motion";

const MovingText = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-4">
      <motion.div
        className="flex space-x-10 text-green-400 font-extrabold text-3xl sm:text-5xl md:text-6xl whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-140%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }} // Slower movement
        style={{ display: "flex", minWidth: "320%" }}
      >
        {[...Array(2)].map((_, index) => (
          <span key={index} className="flex">
            Hatchback — Prime Sedan — Sedan — MPV — Compact SUV — SUV —
            Sports Car — Luxury Car — Station Wagon — Traveller — Minivans —
            Premium Cars —{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingText;