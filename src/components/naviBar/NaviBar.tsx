"use client";
import { useState, useEffect } from "react";
import ButtonPdf from "@/components/buttonPdf/ButtonPdf";

const links = [
  { label: "ES / EN", href: "#" },
  { label: "Contacto", href: "#" },
];

const drawerBaseClass =
  "md:hidden fixed h-full w-64 transition-transform duration-300 ease-in-out transform z-50 bg-white ";
const drawerOpenClass = "translate-x-0 shadow-2xl";
const drawerClosedClass = "-translate-x-full ";

const linkClass = "block py-2 text-black";
const desktopLinkClass = "text-gray-800 hover:text-blue-600";

// Función para validar rutas internas seguras
const isSafeHref = (href: string) =>
  href.startsWith("/") || href.startsWith("#");

// Renderizado de links (para evitar redundancia)
const renderLinks = (onClick?: () => void, className?: string) =>
  links.map((link) => (
    <a
      key={link.label}
      href={isSafeHref(link.href) ? link.href : "#"}
      className={className}
      onClick={onClick}
    >
      {link.label}
    </a>
  ));

const NaviBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.querySelector(".md\\:hidden.fixed");
      const menuButton = document.getElementById("menu-toggle-btn");
      if (
        isOpen &&
        drawer &&
        !drawer.contains(event.target as Node) &&
        (!menuButton || !menuButton.contains(event.target as Node))
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="w-full  fixed top-0 left-0 z-50 shadow-2xl bg-red-400/40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between shadow-2xl h-[10vh]">
        <div className="text-xl font-bold">Mi Sitio</div>

        {/* Vista escritorio */}
        <div className="hidden md:flex space-x-6">
          {renderLinks(undefined, desktopLinkClass)}
        </div>

        {/* Botón menú móvil */}
        <button
          id="menu-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none "
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Drawer lateral móvil */}
      <div
        className={` ${drawerBaseClass} ${
          isOpen ? drawerOpenClass : drawerClosedClass
        } `}
      >
        <div className="p-4 overflow-y-auto max-h-screen   ">
          {renderLinks(() => setIsOpen(false), linkClass)}
        </div>
      </div>
    </nav>
  );
};

export default NaviBar;
