import React from "react";
import Card from "../components/naviBar/portafolio/Card";
import { PortfolioItem } from "../components/naviBar/portafolio/PortafolioItem";

const Portfolio = () => {
  const numero = 3016328564;
  const portfolioItems: PortfolioItem[] = [
    {
      title: "Social Listening Inteligente",
      description: "Descubre lo que dicen de ti. ¡Toma el control!",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Social Listening Inteligente*`
      )}`,
    },
    {
      title: "Estrategia de Contra-Campaña y Contención Digital",
      description: "Protege tu imagen y responde con eficacia.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Estrategia de Contra-Campaña y Contención Digital*`
      )}`,
    },
    {
      title: "Personal Branding Político",
      description: "Construye una marca personal poderosa y auténtica.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Personal Branding Político*`
      )}`,
    },
    {
      title: "Plataforma Política a tu Medida",
      description: "Diseña y fortalece tu propuesta política.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Plataforma Política a tu Medida*`
      )}`,
    },
    {
      title: "Estrategia Digital y Redes Sociales de Alto Impacto",
      description: "Haz que tu mensaje llegue más lejos y conecte.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Estrategia Digital y Redes Sociales de Alto Impacto*`
      )}`,
    },
    {
      title: "Estudios Demográficos y Análisis Territorial",
      description: "Conoce a tu audiencia y toma decisiones estratégicas.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Estudios Demográficos y Análisis Territorial*`
      )}`,
    },
    {
      title: "Relaciones Estratégicas y Gestión de Medios",
      description: "Conecta con aliados clave y potencia tu visibilidad.",
      imageUrl: "imgs/monitoreo-sociales.webp",
      whatsappUrl: `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, estoy interesado en recibir más información sobre:\n• *Relaciones Estratégicas y Gestión de Medios*`
      )}`,
    },
  ];

  return (
    <>
      {/* Móvil: scroll horizontal */}
      <div className="block md:hidden w-full overflow-x-auto ">
        <div className="flex space-x-4 p-4 min-w-max ">
          {portfolioItems.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
      {/* Desktop: grilla */}
      <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-4 text-center">
        {portfolioItems.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
