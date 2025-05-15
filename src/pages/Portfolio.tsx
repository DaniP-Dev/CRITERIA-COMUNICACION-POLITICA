import React from "react";

type PortfolioItem = {
  title: string;
  description: string;
  imageUrl: string;
  whatsappUrl: string;
};

const Card = ({ item }: { item: PortfolioItem }) => (
  <a
    href={item.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-64 md:w-full max-w-xs flex-shrink-0 no-underline"
  >
    <div
      className="card h-64 relative flex items-center justify-center text-center overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-2">
        <h3 className="text-2xl font-extrabold mb-3 text-white drop-shadow-lg">
          {item.title}
        </h3>
        <p className="text-sm text-white line-clamp-none md:line-clamp-2">
          {item.description}
        </p>
        <div className="mt-4 px-4 py-1 rounded bg-white/80 text-black font-semibold text-sm shadow hover:bg-white/90 transition select-none pointer-events-none">
          Más info
        </div>
      </div>
    </div>
  </a>
);

const Portfolio = () => {
  const numero = 3016328564;

  const portfolioItems = [
    {
      title: "Monitoreo y análisis de Redes Sociales",
      description: "Descubre lo que dicen de ti. ¡Toma el control!",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Monitoreo y análisis de Redes Sociales*`
      )}`,
    },
    {
      title: "Diseño y gestión de Campañas Digitales",
      description: "Haz que tu mensaje llegue más lejos.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Diseño y gestión de Campañas Digitales*`
      )}`,
    },
    {
      title: "Asesoría en Mensajería y Discursos Públicos",
      description: "Comunica con impacto y seguridad.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Asesoría en Mensajería y Discursos Públicos*`
      )}`,
    },
    {
      title: "Modelos Predictivos de Opinión Pública",
      description: "Anticipa tendencias, lidera el cambio.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Modelos Predictivos de Opinión Pública*`
      )}`,
    },
    {
      title: "Informes personalizados y boletines estratégicos",
      description: "Decide con información clave y precisa.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Informes personalizados y boletines estratégicos*`
      )}`,
    },
  ];

  return (
    <>
      {/* Móvil: scroll horizontal */}
      <div className="block md:hidden w-full overflow-x-auto">
        <div className="flex space-x-4 p-4 min-w-max">
          {portfolioItems.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
      {/* Desktop: grilla */}
      <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-4">
        {portfolioItems.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
