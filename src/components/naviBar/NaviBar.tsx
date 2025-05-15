"use client";
import { useState } from "react";
import ButtonPdf from "@/components/buttonPdf/ButtonPdf";

const NaviBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="w-full"
      style={{ height: "13vh", backgroundColor: "#2563eb" }}
    >
      <div className="flex h-full">
        <div className="flex-1 flex items-center justify-center">
          {/* Columna 1 */}1
        </div>
        <div className="flex-1 flex items-center justify-center">
          {/* Columna 2 */}
          {/* se podria agregar animacion horizonta */}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center space-x-6">
            <ButtonPdf />
            {/* Botón hamburguesa solo visible en móviles */}
            <button
              className="md:hidden ml-2"
              onClick={toggleMenu}
              aria-label="Abrir menú"
            >
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {/* Enlaces visibles en desktop */}
            <div className="hidden md:flex space-x-6">
              <a href="">Portafolio</a>
              <a href="">Quienes Somos</a>
              <a href="">Contacto</a>
            </div>
          </div>
          {/* Dropdown móvil */}
          {isOpen && (
            <div className="md:hidden absolute right-4 top-16 bg-white rounded shadow-lg py-2 px-4 z-50">
              <a href="" className="block py-2 text-black">
                Portafolio
              </a>
              <a href="" className="block py-2 text-black">
                Quienes Somos
              </a>
              <a href="" className="block py-2 text-black">
                Contacto
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NaviBar;
