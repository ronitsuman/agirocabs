import { motion } from "framer-motion";
import { FaTrophy, FaRoad, FaMapMarkerAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaTrophy className="text-white text-4xl" />,
    title: "First Class Services",
    description:
      "Where quality meets exceptional care, creating unforgettable moments and exceeding your every expectation.",
  },
  {
    icon: <FaRoad className="text-white text-4xl" />,
    title: "24/7 Road Assistance",
    description:
      "Reliable support when you need it most, keeping you on the move with confidence and peace of mind.",
  },
  {
    icon: <FaMapMarkerAlt className="text-white text-4xl" />,
    title: "Free Pick-Up & Drop-Off",
    description:
      "Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.",
  },
];

export default function AdventureSection() {
  return (
    <div className="relative w-full bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/3.webp')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT TEXT CONTENT */}
        <motion.div
          className="text-white text-center md:text-left md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold leading-tight">
            Let’s Your Adventure Begin. <br /><span className="text-[#E94E3A]"> Book, Pick, Drive!</span> 
          </h1>
        </motion.div>

        {/* SERVICES SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 md:mt-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/20 p-6 rounded-lg flex flex-col items-center text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              <div className="bg-[#E94E3A] p-4 rounded-full mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="text-white text-sm mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}