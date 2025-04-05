import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Uttam Kumar",
    title: "CEO",
    img: "/Team1.webp", // replace with actual image paths
  },
  {
    name: "Ravi Ranjan",
    title: "CTO",
    img: "/Team2.webp",
  },
  {
    name: "Yashwant Singh",
    title: "CMO",
    img: "/Team3.webp",
  },
  {
    name: "Ashish Kumar",
    title: "CFO",
    img: "/Team4.webp",
  },
];

const TeamCard = ({ name, title, img }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white bg-opacity-10 rounded-xl overflow-hidden shadow-lg text-center"
  >
    <div className="relative group">
      <img src={img} alt={name} className="w-full h-72 object-cover" />
      {/* Social Icons */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map((Icon, index) => (
          <a key={index} href="#" className="bg-green-500 text-white p-2 rounded-full text-sm">
            <Icon />
          </a>
        ))}
      </div>
    </div>
    <div className="mt-4 mb-6  bg-green-400">
      <h3 className="text-white font-bold text-lg">{name}</h3>
      <p className="text-gray-300 text-sm">{title}</p>
    </div>
  </motion.div>
);

const BoardOfDirectors = () => {
  return (
    <section
      className="bg-cover bg-center py-20 px-6"
      style={{
        backgroundImage: "url('/Teambg.webp')", // replace with actual background
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Board of Directors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
