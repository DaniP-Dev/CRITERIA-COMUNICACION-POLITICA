import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const btnClass =
  "absolute top-1/2 -translate-y-1/2 z-20 bg-[#D63122] hover:bg-[#b91c1c] text-white rounded-full shadow p-2 md:p-3 transition disabled:opacity-50 pointer-events-auto border-2 border-[#EDE6DC]";

// List of image pages (add more as needed)
const imagePages = [
  "/pdf/imgs/page1.jpg",
  "/pdf/imgs/page2.jpg",
  "/pdf/imgs/page3.jpg",
  "/pdf/imgs/page5.jpg",
  "/pdf/imgs/page6.jpg",
];

type BookPage = { key: string; content: React.ReactNode };
const bookPages: BookPage[] = imagePages.map((img, i) => ({
  key: `img-${i}`,
  content: (
    <div className=" flex items-center justify-center bg-[#EDE6DC]">
      <img
        src={img}
        alt={`Página ${i + 1}`}
        className="max-h-[90%] max-w-[90%] object-contain rounded shadow border-2 border-[#ceaf83]"
        draggable={false}
      />
    </div>
  ),
}));

const LibroImagenes = () => {
  const bookRef = useRef<any>(null);
  const [page, setPage] = useState(0);
  const totalPages = bookPages.length;

  // Navigation handlers
  const goPrev = () => {
    if (bookRef.current) bookRef.current.pageFlip().flipPrev();
  };
  const goNext = () => {
    if (bookRef.current) bookRef.current.pageFlip().flipNext();
  };

  // Update page state on flip
  const onFlip = (e: { data: { page: number } }) => {
    setPage(e.data.page);
  };

  // Disable swipe/drag on mobile
  const mobileBlockEvents = {
    onTouchStart: (e: React.TouchEvent) => e.preventDefault(),
    onTouchMove: (e: React.TouchEvent) => e.preventDefault(),
    onTouchEnd: (e: React.TouchEvent) => e.preventDefault(),
  };

  // Navigation buttons
  const leftButton = (
    <button
      onClick={goPrev}
      className={`${btnClass} left-0 hidden sm:block`}
      aria-label="Página anterior"
      disabled={page === 0}
      tabIndex={0}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
  const rightButton = (
    <button
      onClick={goNext}
      className={`${btnClass} right-0 hidden sm:block`}
      aria-label="Página siguiente"
      disabled={page >= totalPages - 1}
      tabIndex={0}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );

  return (
    <div className="flex justify-center mt-10 w-full relative h-96  select-none rounded-xl  bg-[#EDE6DC] ">
      {leftButton}
      <div className="mx-8 w-full max-w-md md:max-w-2xl lg:max-w-3xl h-full flex items-center justify-center">
        <HTMLFlipBook
          ref={bookRef}
          width={350}
          height={384}
          size="stretch"
          minWidth={220}
          maxWidth={700}
          minHeight={300}
          maxHeight={900}
          drawShadow={true}
          showCover={false}
          mobileScrollSupport={false}
          onFlip={onFlip}
          className="shadow-xl rounded-lg overflow-hidden"
          style={{ touchAction: "none" }}
          startPage={0}
          flippingTime={2000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          clickEventForward={false}
          useMouseEvents={true}
          maxShadowOpacity={0.5}
          swipeDistance={30}
          showPageCorners={false}
          disableFlipByClick={true}
          {...mobileBlockEvents}
        >
          {bookPages.map((p) => (
            <div
              key={p.key}
              className="w-full h-full bg-[#EDE6DC] flex items-center justify-center"
            >
              {p.content}
            </div>
          ))}
        </HTMLFlipBook>
      </div>
      {rightButton}
    </div>
  );
};

export default LibroImagenes;
