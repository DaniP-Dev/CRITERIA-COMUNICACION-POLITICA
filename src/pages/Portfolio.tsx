import React from "react";
import Card from "../components/naviBar/portafolio/Card";
import { PortfolioItem } from "../components/naviBar/portafolio/PortafolioItem";

const Portfolio = () => {
  const numero = 3016328564;
  const portfolioItems: PortfolioItem[] = [
    {
      title: "Social Listening Inteligente",
      description: "Tendencias que alertan, acciones que aciertan.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Social Listening Inteligente*`
      )}`,
    },
    {
      title: "Estrategia de Contra-Campaña y Contención Digital",
      description: "Del caos al orden, con palabras que importen.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Estrategia de Contra-Campaña y Contención Digital*`
      )}`,
    },
    {
      title: "Personal Branding Político",
      description: "Donde el mapa habla, la estrategia avanza.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Personal Branding Político*`
      )}`,
    },
    {
      title: "Plataforma Política a tu Medida",
      description: "Las campañas fuertes nacen de grupos preparados.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Plataforma Política a tu Medida*`
      )}`,
    },
    {
      title: "Estrategia Digital y Redes Sociales de Alto Impacto",
      description: "Estrategia digital, poder viral.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Estrategia Digital y Redes Sociales de Alto Impacto*`
      )}`,
    },
    {
      title: "Estudios Demográficos y Análisis Territorial",
      description: "Análisis profundo, triunfo rotundo",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Estudios Demográficos y Análisis Territorial*`
      )}`,
    },
    {
      title: "Relaciones Estratégicas y Gestión de Medios",
      description: "En la prensa y la red, mando firme y sed.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Relaciones Estratégicas y Gestión de Medios*`
      )}`,
    },
  ];

  // 🔹 Función para agrupar por filas de 3
  const chunkArray: (
    arr: PortfolioItem[],
    size: number
  ) => PortfolioItem[][] = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const filas = chunkArray(portfolioItems, 3); // Dividir en filas de 3

  return (
    <>
      {/* Móvil: scroll horizontal */}
      <div className="block md:hidden mt-10">
          <h1 className="text-center">Servicios</h1>
        <div className=" w-full overflow-x-auto">
          <div className="flex space-x-4 p-4 min-w-max ">
            {portfolioItems.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* Escritorio: grilla centrando última fila si tiene < 3 */}
      <div className="hidden md:flex md:flex-col gap-6 p-4 text-center">
        <h1>Servicios</h1>
        {filas.map((fila, filaIndex) => (
          <div
            key={filaIndex}
            className={`grid gap-6 justify-items-center ${
              fila.length === 1
                ? "grid-cols-1"
                : fila.length === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {fila.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
