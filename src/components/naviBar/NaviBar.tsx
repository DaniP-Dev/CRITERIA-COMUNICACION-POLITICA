"use client";
import { useState, useEffect } from "react";
import EsEn from "../esEn/EsEn";

const links = [
  { label: "ES / EN", href: "/" },
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/about" },
];

// Solo clases para responsividad y tamaños
const navbarClass =
  "w-full fixed top-0 left-0 z-50 bg-[#040723]/50 text-white backdrop-blur-sm";
const navbarInnerClass =
  "max-w-7xl mx-auto px-4 py-3 flex items-center justify-between h-[10vh]  ";
const drawerClass =
  "bg-[#040723] md:hidden fixed h-auto w-full transition-transform duration-300 ease-in-out transform z-50 text-center";
const drawerOpenClass = "translate-x-0";
const drawerClosedClass = "-translate-x-full";
const drawerLinkClass = "block py-2 relative group";
const desktopLinkClass = "relative group inline-block px-2 py-1";

// Función para validar rutas internas seguras
const isSafeHref = (href: string) =>
  href.startsWith("/") || href.startsWith("#");

// Renderizado de links (para evitar redundancia)
const renderLinks = (onClick?: () => void, className?: string) =>
  links.map((link) =>
    link.label === "ES / EN" ? (
      <div key={link.label} className={className?.includes("block") ? "block py-2 relative group" : "relative group inline-block"}>
        <EsEn className="w-full px-2 py-1 text-center" />
      </div>
    ) : (
      <a
        key={link.label}
        href={isSafeHref(link.href) ? link.href : "#"}
        className={className?.includes("block") ? "block py-2 relative group" : "relative group inline-block px-2 py-1"}
        onClick={onClick}
      >
        {link.label}
        <span
          className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#D63122] transition-all duration-300 group-hover:w-full"
          aria-hidden="true"
        />
      </a>
    )
  );

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
    <nav className={`${navbarClass}`}>
      <div className={navbarInnerClass}>
        <div className="text-xl font-bold h-10 w-32 flex items-center">
          <img
            src="/imgs/icono.png"
            alt=""
            className="h-full w-auto max-w-full object-contain"
            style={{ display: "block" }}
          />
        </div>

        {/* Vista escritorio */}
        <div className="hidden md:flex space-x-6 items-center">
          {renderLinks(undefined, desktopLinkClass)}
        </div>

        {/* Botón idioma y menú móvil */}
        <div className="flex md:hidden items-center gap-6">
          <EsEn className="w-10 h-10 text-2xl" />
          <button
            id="menu-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 text-3xl flex items-center justify-center"
            style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Drawer lateral móvil */}
      <div
        className={` ${drawerClass} ${
          isOpen ? drawerOpenClass : drawerClosedClass
        } `}
      >
        <div className="p-4 overflow-y-auto max-h-screen">
          {/* En móvil, no renderizamos el botón de idioma dentro del drawer */}
          {renderLinks(() => setIsOpen(false), drawerLinkClass)
            .filter(
              (el) =>
                !(el && el.key && el.key.toString && el.key.toString() === "ES / EN")
            )}
        </div>
      </div>
    </nav>
  );
};

export default NaviBar;
