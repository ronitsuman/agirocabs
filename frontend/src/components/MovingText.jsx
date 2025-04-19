import { motion } from "framer-motion";

const MovingText = ({ bgColor , textColor }) => {
  return (
    <div className={`w-full overflow-hidden ${bgColor} py-4`}>
      <motion.div
        className={`flex font-extrabold text-xl sm:text-3xl md:text-4xl whitespace-nowrap ${textColor}`}
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        style={{ minWidth: "200%" }}
      >
        {[...Array(5)].map((_, index) => (
          <span key={index} className="mr-10 text-[#E94E3A]">
            Hatchback — Prime Sedan — Sedan — MPV — Compact SUV — SUV —
            Sports Car — Luxury Car — Station Wagon — Traveller — Minivans —
            Premium Cars —  
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingText;
