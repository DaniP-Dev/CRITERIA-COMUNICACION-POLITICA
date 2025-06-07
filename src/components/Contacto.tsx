import React, { useState } from "react";
import { useTranslations } from "next-intl";

const Contacto = () => {
  const t = useTranslations("contactForm");
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    bio: "",
  });
  const [showHelper, setShowHelper] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setShowHelper(false);
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.subject || !form.email || !form.bio) {
      setShowHelper(true);
      setSuccess(false);
      return;
    }
    setShowHelper(false);
    setSuccess(true);
    // Abrir modal de éxito
    if (typeof window !== "undefined") {
      const modal = document.getElementById(
        "success_modal"
      ) as HTMLDialogElement;
      if (modal) modal.showModal();
    }
    // Aquí podrías enviar el formulario
  };

  return (
    <section
      className="flex justify-center items-center h-auto py-3"
      style={{
        background:
          "radial-gradient(circle, rgba(44,62,80,1) 0%, rgba(249,249,251,1) 4%, rgba(44,62,80,1) 100%)",
      }}
    >
      <div className="card w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl shadow-md bg-base-100 border border-[var(--color-gray)]">
        <form
          className="card-body px-0 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 items-center text-center w-auto"
          onSubmit={handleSubmit}
        >
          <h2 className="card-title mb-3 text-lg sm:text-xl lg:text-2xl text-[var(--color-base)]">
            {t("title")}
          </h2>
          {showHelper && (
            <div
              role="alert"
              className="alert alert-error mb-6 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span>{t("helper")}</span>
            </div>
          )}
          <input
            type="text"
            name="name"
            placeholder={t("name")}
            className="input input-bordered input-lg w-full mb-3"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder={t("subject")}
            className="input input-bordered input-lg w-full mb-3"
            value={form.subject}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder={t("email")}
            className="input input-bordered input-lg w-full mb-3"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="bio"
            className="textarea textarea-bordered textarea-lg w-full mb-4 h-40"
            placeholder={t("bio")}
            value={form.bio}
            onChange={handleChange}
          ></textarea>
          <div className="card-actions w-full flex flex-col items-center">
            <button
              type="submit"
              className="btn bg-[var(--color-marca)] text-white hover:bg-green-700 transition"
            >
              {t("send")}
            </button>
          </div>
        </form>
      </div>
      {/* Modal de éxito DaisyUI */}
      <dialog id="success_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{t("success")}</h3>
          <p className="py-4">{t("successDetail")}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>{t("close")}</button>
        </form>
      </dialog>
    </section>
  );
};

export default Contacto;
