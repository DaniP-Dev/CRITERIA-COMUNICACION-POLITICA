import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="py-16 px-4 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto">
          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="/imgs/logo.png"
              alt="Criteria Logo"
              className="w-64 h-64 object-cover rounded-lg shadow"
            />
          </div>
          {/* Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Criteria
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Estrategias digitales para potenciar tu imagen y conectar con tu audiencia.
            </p>
            <button className="px-8 py-3 text-base font-semibold rounded bg-blue-600 text-white shadow hover:bg-blue-700 transition">
              Más información
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
