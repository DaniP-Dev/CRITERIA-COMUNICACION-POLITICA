import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-2">
        <span>
          &copy; {new Date().getFullYear()} Consultoría Política. Todos los
          derechos reservados.
        </span>
        <nav className="flex justify-center gap-4 flex-wrap">
          <a href="/about" className="text-white hover:underline">
            Sobre Nosotros
          </a>
          <a href="/contact" className="text-white hover:underline">
            Contacto
          </a>
          <a href="/privacy" className="text-white hover:underline">
            Privacidad
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
