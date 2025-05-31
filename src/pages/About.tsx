// components/QuienesSomos.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

const handleChange = (e: InputEvent) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

interface FormState {
    nombre: string;
    email: string;
    mensaje: string;
}

interface FormEvent extends React.FormEvent<HTMLFormElement> {}

interface InputEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.nombre || !form.email || !form.mensaje) {
        setError("Por favor completa todos los campos.");
        return;
    }
    setEnviado(true);
    setForm({ nombre: "", email: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 4000);
};

  return (
    <div className="flex flex-col items-center bg-[var(--color-fondo-alt)] min-h-screen p-6">
      {/* Sección Quiénes Somos */}
      <motion.section
        className="w-full max-w-3xl bg-[var(--color-blanco)] rounded-lg shadow-lg p-8 mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-[var(--color-primario)] mb-4 text-center">
          Quiénes Somos
        </h1>
        <p className="text-[var(--color-texto-secundario)] text-lg leading-relaxed">
          En{" "}
          <span className="font-semibold">Criteria Comunicación Política</span>
          creemos en la importancia de entender la conversación digital
          alrededor de los procesos políticos. Nuestro equipo multidisciplinar
          combina experiencia en investigación, análisis de datos y tecnología
          de inteligencia artificial para ofrecer asesoría estratégica a
          campañas, organizaciones y entidades interesadas en optimizar su
          presencia y mensaje en redes sociales y medios digitales.
        </p>
        <p className="text-[var(--color-texto-secundario)] text-lg leading-relaxed mt-4">
          Desde nuestro lanzamiento, nos hemos enfocado en monitorizar
          tendencias, hashtags y opiniones clave que marcan el pulso de la
          opinión pública. Con un enfoque ético y riguroso, creamos informes
          periódicos que ayudan a nuestros clientes a tomar decisiones
          informadas y oportunas.
        </p>
      </motion.section>

      {/* Sección de Contacto */}
      <motion.section
        className="w-full max-w-3xl bg-[var(--color-primario)] rounded-lg shadow-lg p-8"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-[var(--color-blanco)] mb-6 text-center">
          Contáctanos
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="
              p-3
              rounded
              bg-[var(--color-input-bg)]
              text-[var(--color-blanco)]
              border border-gray-700
              focus:outline-none focus:ring-2 focus:ring-[var(--color-secundario)]
            "
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            className="
              p-3
              rounded
              bg-[var(--color-input-bg)]
              text-[var(--color-blanco)]
              border border-gray-700
              focus:outline-none focus:ring-2 focus:ring-[var(--color-secundario)]
            "
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
            rows={4}
            className="
              p-3
              rounded
              bg-[var(--color-input-bg)]
              text-[var(--color-blanco)]
              border border-gray-700
              focus:outline-none focus:ring-2 focus:ring-[var(--color-secundario)]
            "
          />
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <motion.button
            type="submit"
            className="
              bg-[var(--color-secundario)]
              hover:bg-opacity-90
              text-[var(--color-blanco)]
              font-bold
              py-2 px-4
              rounded
              transition-colors
            "
            whileTap={{ scale: 0.97 }}
          >
            Enviar
          </motion.button>
          {enviado && (
            <motion.div
              className="text-green-400 text-center mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ¡Mensaje enviado! Nos pondremos en contacto pronto.
            </motion.div>
          )}
        </form>
      </motion.section>
    </div>
  );
};

export default About;
