import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRss } from "react-icons/fa";

const Footer = () => {
    const handlefb = ()=>{
        open('https://www.facebook.com/sharer/sharer.php?u=https://agirocabs.com/')
      }
      const handlelinkedin=()=>{
        open('https://www.linkedin.com/company/agirocabs/')
      }
      const handleinstagram = ()=>{
        open('https://www.instagram.com/agirocabs/')
    
      }
  return (
    <motion.footer
      className="bg-black text-white py-10 px-6 md:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-4 gap-10">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-3">About AgiroCabs</h3>
          <p className="text-gray-400 text-sm">
          AgiroCabs is a Self-Driven Car rental service provider. We provide cars for rent having self driven facility. Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That's why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
          <p className="text-gray-400 text-sm">📍 CIMP, Institutional Area, Mithapur, Patna 800001</p>
          <p className="text-gray-400 text-sm mt-1">📞 +91 9006484700</p>
          <p className="text-gray-400 text-sm mt-1">✉️ support@agirocabs.com</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>News</li>
            <li>Partners</li>
          </ul>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-3">Social Network</h3>
          <div className="flex space-x-3">
            <div className="bg-gray-800 p-2 rounded-lg hover:bg-[#E94E3A]">
              <FaFacebookF size={20}  onClick={handlefb} />
            </div>
            <div className="bg-gray-800 p-2 rounded-lg hover:bg-[#E94E3A]">
              <FaInstagram size={20} onClick={handleinstagram}/>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg hover:bg-[#E94E3A]">
              <FaLinkedinIn size={20}  onClick={handlelinkedin} />
            </div>
            {/* <div className="bg-gray-800 p-2 rounded-lg hover:bg-[#E94E3A]">
              <FaRss size={20} />
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p>Copyright ©2025 All rights reserved | Agiro Technologies Pvt. Ltd. ❤️ AgiroCabs™</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="/term&condition" target="_blank" className="hover:bg-[#E94E3A]">Terms & Conditions</a>
          <a href="/privacy&policy"  target="_blank" className="hover:bg-[#E94E3A]">Privacy Policy</a>
          <a href="/platformTerm"  target="_blank" className="hover:bg-[#E94E3A]">Platform Term of Use</a>
          <a href="/guestPolicy"  target="_blank" className="hover:bg-[#E94E3A]">Guest Fee Policy </a>
          {/* <a href="/refund policy" className="hover:bg-[#E94E3A]">Refund Policy</a> */}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
