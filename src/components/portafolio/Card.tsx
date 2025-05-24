import React from "react";
import { PortfolioItem } from "./PortafolioItem";

const Card = ({ item }: { item: PortfolioItem }) => (
  <a
    href={item.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-64 md:w-full max-w-xs flex-shrink-0 no-underline "
  >
    <div
      className="card h-64 relative flex items-center justify-center  overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] "></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-2 w-full">
        <h3 className="text-2xl font-extrabold mb-3  text-white drop-shadow-lg w-full text-center break-words whitespace-normal leading-tight" style={{ minWidth: '15ch' }}>
          {item.title}
        </h3>
        <p className="text-sm text-white line-clamp-none md:line-clamp-2 w-full text-center min-h-[48px] flex items-center justify-center">
          {item.description}
        </p>
        <div className="mt-4 px-4 py-1 rounded bg-white/80 text-black font-semibold text-sm shadow hover:bg-white/90 transition select-none pointer-events-none">
          Más info
        </div>
      </div>
    </div>
  </a>
);

export default Card;
