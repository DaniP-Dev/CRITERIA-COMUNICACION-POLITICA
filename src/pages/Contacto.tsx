import { motion } from "framer-motion";
import React, { useState } from "react";

const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    // Aquí deberías integrar tu backend o servicio de email
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
      className="flex flex-col items-center justify-center min-h-[60vh] bg-[#EDE6DC] p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold text-[#040723] mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Contáctanos
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="bg-[#040723] rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col gap-4"
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
          className="p-3 rounded bg-[#181b3a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded bg-[#181b3a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows={5}
          className="p-3 rounded bg-[#181b3a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <div className="text-red-400 text-sm">{error}</div>}
        <motion.button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
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
