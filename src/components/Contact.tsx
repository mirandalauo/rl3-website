"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="section-padding">
      <div className="content-container">
        <SectionLabel number="03" title="Contacto" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="font-[family-name:var(--font-instrument-sans)] text-rl3-gray text-lg leading-relaxed">
              Cuentanos que necesitas. Analizaremos tu caso y te propondremos
              la mejor estrategia para integrar AI en tu negocio.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.2em] text-rl3-gray mb-2"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-rl3-dark-gray border border-rl3-mid-gray px-4 py-3 text-rl3-white font-[family-name:var(--font-instrument-sans)] placeholder:text-rl3-gray/50 focus:outline-none focus:border-rl3-accent transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.2em] text-rl3-gray mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-rl3-dark-gray border border-rl3-mid-gray px-4 py-3 text-rl3-white font-[family-name:var(--font-instrument-sans)] placeholder:text-rl3-gray/50 focus:outline-none focus:border-rl3-accent transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.2em] text-rl3-gray mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-rl3-dark-gray border border-rl3-mid-gray px-4 py-3 text-rl3-white font-[family-name:var(--font-instrument-sans)] placeholder:text-rl3-gray/50 focus:outline-none focus:border-rl3-accent transition-colors resize-none"
                placeholder="Cuentanos sobre tu proyecto"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto px-10 py-3.5 bg-rl3-accent text-rl3-black font-[family-name:var(--font-space-grotesk)] font-semibold text-sm tracking-wide hover:bg-rl3-accent/90 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "sent" && (
              <p className="text-rl3-accent font-[family-name:var(--font-instrument-sans)] text-sm">
                Mensaje enviado. Te contactaremos pronto.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 font-[family-name:var(--font-instrument-sans)] text-sm">
                Error al enviar. Intentalo de nuevo o escribenos por WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
