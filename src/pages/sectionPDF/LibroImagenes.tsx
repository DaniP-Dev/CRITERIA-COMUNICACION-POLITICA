import React from "react";
import HTMLFlipBook from "react-pageflip";

const paginas = [
  "/pdf/imgs/page1.jpg",
  "/pdf/imgs/page2.jpg",
  "/pdf/imgs/page3.jpg",
  "/pdf/imgs/page4.jpg",
];

const LibroImagenes = () => {
  return (
    <div className="flex justify-center mt-10 w-full overflow-hidden">
      <HTMLFlipBook
        width={320}
        height={480}
        minWidth={200}
        maxWidth={600}
        minHeight={300}
        maxHeight={900}
        size="stretch"
        showCover={true}
        className="flipbook shadow-lg rounded-lg bg-white !overflow-hidden"
        style={{
          margin: "0 auto",
          background: "white",
          maxWidth: 600,
          maxHeight: 900,
          overflow: "hidden",
          touchAction: "pan-y",
        }}
        mobileScrollSupport={true}
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showPageCorners={true}
        disableFlipByClick={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
      >
        {paginas.map((src, index) => (
          <div
            key={index}
            className="page w-full h-full bg-white flex items-center justify-center !overflow-hidden"
            style={{ background: "white", overflow: "hidden" }}
          >
            <img
              src={src}
              alt={`Página ${index + 1}`}
              className="w-full h-full object-cover bg-white select-none pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default LibroImagenes;
