import HTMLFlipBook from "react-pageflip";
import React, { useEffect, useState } from "react";
import "./Book.css";

function Book() {
  // Página de portada
  const portada = {
    image: "/pdf/imgs/portada.png", // Cambia la ruta si tu portada tiene otro nombre
    title: "Portada",
  };
  // Generar automáticamente las páginas del 1 al 6
  const data = [
    portada,
    ...Array.from({ length: 6 }, (_, i) => ({
      image: `/pdf/imgs/page${i + 1}.jpg`,
      title: `Página ${i + 1}`,
    })),
  ];

  // Bloquear scroll de fondo al interactuar con el flipbook en móviles
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (e.target && (e.target as HTMLElement).closest('.page')) {
        e.preventDefault();
      }
    };
    document.body.addEventListener('touchmove', preventScroll, { passive: false });
    return () => {
      document.body.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  // Detectar si es móvil
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div className="flipbook-wrapper">
      <HTMLFlipBook
        width={370}
        height={500}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size="fixed"
        className=""
        style={{}}
        startPage={0}
        minWidth={315}
        maxWidth={1000}
        minHeight={420}
        maxHeight={1350}
        flippingTime={1800} // animación más lenta (default 1000)
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        showPageCorners={false}
        mobileScrollSupport={!isMobile} // Solo permite swipe en desktop
        clickEventForward={false}
        useMouseEvents={true}
        swipeDistance={10} // distancia más corta para pasar página
        disableFlipByClick={true}
      >
        {data.map((page, i) => (
          <div
            className="page"
            style={{ backgroundColor: "transparent" }}
            key={i}
          >
            <div className="page-content cover">
              <img src={page.image} alt={page.title} loading="lazy" />
              <div>{page.title}</div>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default Book;
