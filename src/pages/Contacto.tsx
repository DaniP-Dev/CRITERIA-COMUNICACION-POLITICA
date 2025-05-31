// components/Contacto.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  interface FormEventTarget extends EventTarget {
    name: string;
    value: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  interface FormState {
    nombre: string;
    email: string;
    mensaje: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    // Aquí iría la integración con tu backend / servicio de correo
    if (!form.nombre || !form.email || !form.mensaje) {
      setError("Por favor completa todos los campos.");
      return;
    }
    setEnviado(true);
    setForm({ nombre: "", email: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-[60vh] bg-[var(--color-fondo-alt)] p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold text-[var(--color-primario)] mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Contáctanos
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-[var(--color-primario)] rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col gap-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
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
          rows={5}
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
      </motion.form>
    </motion.section>
  );
};

export default Contacto;
