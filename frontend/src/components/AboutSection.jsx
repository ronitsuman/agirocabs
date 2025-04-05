import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Counter animation component
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

  return <span>{count}</span>;
};

const StatCard = ({ title, end, duration, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="bg-white shadow-md rounded-xl px-6 py-6 text-center"
  >
    <h3 className="text-3xl font-bold text-green-500">
      {isInView && <Counter end={end} duration={duration} />}
    </h3>
    <p className="text-gray-600 mt-2 text-sm">{title}</p>
  </motion.div>
);

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* Top Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
          {/* Left Heading */}
          <div>
            <h2 className="mt-[-150px] text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              We offer customers a wide range of{" "}
              <span className="text-green-500">commercial cars</span> and{" "}
              <span className="text-green-500">quality cars</span> for any occasion.
            </h2>
          </div>

          {/* Right Paragraph */}
          <div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              AgiroCabs, we believe in empowering our customers with the freedom to explore
              the world on their terms. Founded on the principles of convenience, reliability,
              and innovation, we are your trusted partner in the realm of self-driven car rentals.
              <br />
              AgiroCabs was born out of a passion for travel and a desire to revolutionize the way people experience transportation. With a team of industry experts and technology enthusiasts, we set out to create a seamless platform that puts you in the driver's seat of your journey.
              <br /><br/>
              Our commitment to excellence and customer satisfaction drives every decision we make.
              Whether you're embarking on a solo adventure, a family vacation, or a business trip,
              we are here to make every mile memorable.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard title="Completed Orders" end={12394} duration={4} isInView={isInView} />
          <StatCard title="Happy Customers" end={9845} duration={4} isInView={isInView} />
          <StatCard title="Vehicles Fleet" end={50} duration={3} isInView={isInView} />
          <StatCard title="Years Experience" end={7} duration={3} isInView={isInView} />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
