const CarsSection = () => {
    return (
      <div
        className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/2.webp')" }} // Image Path
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-50"></div>
  
        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold">
            Cars
          </h1>
        </div>
      </div>
    );
  };
  
  export default CarsSection;
  