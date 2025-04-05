import { motion } from "motion/react";

const newsItems = [
  {
    date: "10 MAR",
    title: "Enjoy Best Travel Experience",
    description:
      "Whether you're planning a solo road trip, a family vacation, or a business excursion, AgiroCabs is your trusted partner for unlocking the wonders of travel. Experience freedom on your terms.",
    img: "/pic-blog-1.webp",
  },
  {
    date: "12 MAR",
    title: "The Future of Car Rent",
    description:
      "Together, we will shape a new era of mobility that empowers individuals, enriches experiences, and redefines the way we navigate the world.",
    img: "/pic-blog-2.webp",
  },
  {
    date: "14 MAR",
    title: "Holiday Tips For Backpacker",
    description:
      "The essence of backpacking lies in embracing the journey, immersing yourself in new experiences, and connecting with the world. Make memories that last a lifetime!",
    img: "/pic-blog-3.webp",
  },
];

export default function LatestNews() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Title Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold font-sans">Latest News</h2>
        <p className="text-gray-500 mt-2">
        Breaking news, fresh perspectives, and in-depth coverage - stay ahead with our latest news, insights, and analysis.


        </p>
      </motion.div>

      {/* News Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {newsItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border-b-2 border-green-500 "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <img src={item.img} alt={item.title} loading="lazy" className="w-full h-56 object-cover " />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-bold">
                {item.date}
              </div>
            </div>
            <div className="p-5 ">
              <h3 className="text-lg font-bold font-sans">{item.title}</h3>
              <p className="text-gray-500 mt-2 text-sm font-serif">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}