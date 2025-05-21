import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-red-500">
      <section className="w-full h-[10vh] " />{/* no modificar*/}
      <section className="w-full h-[90vh] ">
        <div className="flex items-center justify-center h-full w-full">
          <span className="block md:hidden text-white text-lg font-semibold">
            Vista para celular
          </span>
          <span className="hidden md:block text-white text-lg font-semibold">
            Vista para computador
          </span>
        </div>
        
      </section>
    </div>
  );
};

export default HeroSection;
