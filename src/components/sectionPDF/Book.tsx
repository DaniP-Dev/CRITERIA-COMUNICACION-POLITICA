import HTMLFlipBook from "react-pageflip";
import React, { useState, useEffect } from "react";
import "./Book.css";

function Book() {
  // Página de portada
  const portada = {
    image: "/pdf/imgs/portada.png", // Cambia la ruta si tu portada tiene otro nombre
    title: "Portada",
  };
  // Página de tapa final
  const tapa = {
    image: "/pdf/imgs/tapa.jpg", // Cambia la ruta si tu tapa tiene otro nombre
    title: "Tapa final",
  };
  // Generar automáticamente las páginas del 1 al 6
  const data = [
    portada,
    ...Array.from({ length: 6 }, (_, i) => ({
      image: `/pdf/imgs/page${i + 1}.jpg`,
      title: `Página ${i + 1}`,
    })),
    tapa,
  ];

  return (
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
      flippingTime={1000}
      usePortrait={true}
      startZIndex={0}
      autoSize={true}
      showPageCorners={false}
      mobileScrollSupport={true}
      clickEventForward={false}
      useMouseEvents={true}
      swipeDistance={30}
      disableFlipByClick={true}
    >
      {data.map((page, i) => (
        <div
          className="page"
          style={{ backgroundColor: "transparent" }}
          key={i}
        >
          <div className="page-content cover">
            <img src={page.image} alt={page.title} />
            <div>{page.title}</div>
          </div>
        </div>
      ))}
    </HTMLFlipBook>
  );
}

export default Book;
