
const Ellipse = () => {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="
            absolute 
            rounded-full 
            bg-[#00587A] 
            opacity-[0.07] 
            filter blur-xl
            w-[200px] h-[200px] 
            sm:w-[400px] sm:h-[400px]
            md:w-[600px] md:h-[600px]
            lg:w-[800px] lg:h-[800px]
            xl:w-[1072px] xl:h-[1072px]
          "
        ></div>
      </div>
    );
  };
  
  export default Ellipse;
  