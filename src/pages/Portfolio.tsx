import React from "react";

const Portfolio = () => {
  const numero = 3016328564;

  const portfolioItems = [
    {
      title: "Monitoreo y análisis de Redes Sociales",
      description:
        "Seguimiento en tiempo real y análisis de tendencias, menciones y sentimiento en plataformas sociales.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}`,
    },
    {
      title: "Diseño y gestión de Campañas Digitales",
      description:
        "Estrategias creativas y ejecución de campañas digitales para maximizar el alcance y la interacción.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}`,
    },
    {
      title: "Asesoría en Mensajería y Discursos Públicos",
      description:
        "Desarrollo de mensajes efectivos y entrenamiento en comunicación pública para líderes y voceros.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}`,
    },
    {
      title: "Modelos Predictivos de Opinión Pública",
      description:
        "Implementación de modelos estadísticos para anticipar tendencias y escenarios de opinión.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}`,
    },
    {
      title: "Informes personalizados y boletines estratégicos",
      description:
        "Elaboración de reportes detallados y boletines con información clave para la toma de decisiones.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-4">
      {portfolioItems.map((item, i) => (
        <a
          key={i}
          href={item.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-xs"
          style={{ textDecoration: "none" }}
        >
          <div
            className="card h-64 relative flex items-center justify-center text-center overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay con blur */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
              <h3 className="text-lg font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-base text-white">{item.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Portfolio;
