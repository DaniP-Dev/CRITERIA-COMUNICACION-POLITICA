import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-red-500">
      <section className="w-full h-[10vh] " />
      {/* no modificar*/}
      <section className="w-full h-[90vh] ">
        {window.innerWidth < 768 ? (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-white text-2xl">Vista Celular</h1>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-white text-4xl">Vista Computador</h1>
          </div>
        )}
      </section>
    </div>
  );
};

export default HeroSection;
