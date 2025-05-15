import React from "react";

const Contacto = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Contacto</h1>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          Nombre
          <input
            type="text"
            name="nombre"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu nombre"
          />
        </label>
        <label className="flex flex-col gap-1">
          Correo electrónico
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="tu@email.com"
          />
        </label>
        <label className="flex flex-col gap-1">
          Mensaje
          <textarea
            name="mensaje"
            required
            rows={5}
            className="w-full p-2 border border-gray-300 rounded resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe tu mensaje"
          />
        </label>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
