"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "ES / EN", href: "#" },
  { label: "Contacto", href: "#" },
];

// Solo clases para responsividad y tamaños
const navbarClass = "w-full fixed top-0 left-0 z-50 bg-[#040723]/50 text-white";
const navbarInnerClass =
  "max-w-7xl mx-auto px-4 py-3 flex items-center justify-between h-[10vh] ";
const drawerClass =
  "bg-[#040723] md:hidden fixed h-auto w-full transition-transform duration-300 ease-in-out transform z-50";
const drawerOpenClass = "translate-x-0";
const drawerClosedClass = "-translate-x-full";
const drawerLinkClass = "block py-2 relative group";
const desktopLinkClass = "relative group";

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
      <span
        className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#D63122] transition-all duration-300 group-hover:w-full"
        aria-hidden="true"
      />
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
    <nav className={navbarClass}>
      <div className={navbarInnerClass}>
        <div className="text-xl font-bold">Logo</div>

        {/* Vista escritorio */}
        <div className="hidden md:flex space-x-6">
          {renderLinks(undefined, desktopLinkClass)}
        </div>

        {/* Botón menú móvil */}
        <button
          id="menu-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Drawer lateral móvil */}
      <div
        className={` ${drawerClass} ${
          isOpen ? drawerOpenClass : drawerClosedClass
        } `}
      >
        <div className="p-4 overflow-y-auto max-h-screen">
          {renderLinks(() => setIsOpen(false), drawerLinkClass)}
        </div>
      </div>
    </nav>
  );
};

export default NaviBar;
