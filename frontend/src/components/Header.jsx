import {motion} from "motion/react"

const Header = ({text}) => {
    return (
      <div
        className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/1.webp')" }} // Image Path
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-50"></div>
  
        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
          initial={{y:-50}}
          animate={{y:-0}}
          transition={{duration:0.5,}}
          className="text-white text-3xl md:text-5xl font-extrabold">
            {text}
          </motion.h1>
        </div>
      </div>
    );
  };
  
  export default Header;
  