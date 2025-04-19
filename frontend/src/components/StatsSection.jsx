import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <motion.span>{count}</motion.span>;
};

const StatsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative w-full h-auto text-white bg-fixed bg-cover bg-center " 
    style={{ backgroundImage: "url('/2.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 py-20 text-center max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-sans font-bold leading-snug">
          We offer customers a wide range of <br />
          <span className="text-[#E94E3A]">commercial cars</span> and{" "}
          <span className="text-[#E94E3A]">quality cars</span>
          <br /> for any occasion.
        </h2>
        <p className="mt-4 text-[#feffea] text-sm md:text-base">
        AgiroCabs, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.
        </p>

        {/* Stats Grid */}
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 ">
          <StatBox title="Completed Orders" end={12394} duration={5} isInView={isInView} />
          <StatBox title="Happy Customers" end={9845} duration={5} isInView={isInView} />
          <StatBox title="Vehicles Fleet" end={40} duration={3} isInView={isInView} />
          <StatBox title="Years Experience" end={7} duration={3.5} isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

const StatBox = ({ title, end, duration, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5 }}
    className="bg-white/20 p-4 md:p-6 rounded-lg"
  >
    <h3 className="text-2xl md:text-3xl font-bold text-[#E94E3A]">
      {isInView && <Counter end={end} duration={duration} />}
    </h3>
    <p className="text-gray-300 text-xs md:text-sm">{title}</p>
  </motion.div>
);

export default StatsSection;
