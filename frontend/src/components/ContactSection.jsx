import { motion } from "framer-motion";

const ContactSection = ({text}) => {
  return (
    <motion.div
      className="bg-green-600 text-white p-10 md:p-20 flex flex-col md:flex-row items-center justify-between lg:justify-around lg:gap-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left Text Section */}
      <div className="text-center md:text-left max-w-md lg:w-[50%]">
        <motion.div
          className="bg-green-700 text-sm font-semibold px-4 py-1 rounded-lg inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Call us for further information
        </motion.div>
        <h2 className="text-3xl md:text-5xl  mt-4 font-light ">
         {text}
        </h2>
      </div>

      {/* Right Contact Section */}
      <div className="flex flex-col items-center mt-6 md:mt-0 ">
        <motion.div
          className="text-xl font-semibold"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          📞 CALL US NOW
        </motion.div>
        <motion.div
          className="text-4xl font-bold mt-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          9006484700
        </motion.div>
        <motion.button
          className="bg-green-700 px-6 py-2 mt-4 text-lg font-semibold rounded-lg hover:bg-green-800 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Contact Us
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ContactSection;
