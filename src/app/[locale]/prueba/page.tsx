import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">MiLanding</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-outline btn-primary mr-2">Login</button>
          <button className="btn btn-primary">Registro</button>
        </div>
      </div>

      {/* Hero */}
      <div className="hero min-h-[70vh]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Bienvenido</h1>
            <p className="py-6">
              Esta es una landing page creada con DaisyUI + Tailwind en Next.js.
            </p>
            <button className="btn btn-primary">Empezar</button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Rápido</h2>
            <p>Crea sitios visuales sin escribir CSS.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-outline">Ver más</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Moderno</h2>
            <p>Diseño atractivo con componentes listos para usar.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-outline">Ver más</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Responsive</h2>
            <p>Adaptado a cualquier pantalla sin esfuerzo.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-outline">Ver más</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title">Servicios</span>
          <a className="link link-hover">Web</a>
          <a className="link link-hover">UI/UX</a>
          <a className="link link-hover">Consultoría</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Términos</a>
          <a className="link link-hover">Privacidad</a>
        </div>
      </footer>
    </div>
  );
};

export default page;
