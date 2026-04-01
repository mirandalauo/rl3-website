"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";
import FadeUp from "./FadeUp";

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
        <FadeUp>
          <SectionLabel number="03" title="Contacto" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <FadeUp delay={0.1}>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Hablemos de tu proyecto
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="font-[family-name:var(--font-instrument-sans)] text-rl3-gray text-base md:text-lg leading-[1.7] mb-8">
                Cuentanos que necesitas. Analizaremos tu caso y te propondremos
                la mejor estrategia para integrar AI en tu negocio.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="p-6 border border-rl3-mid-gray bg-rl3-dark-gray">
                <p className="font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.2em] text-rl3-accent mb-3">
                  Tambien por WhatsApp
                </p>
                <p className="font-[family-name:var(--font-instrument-sans)] text-sm text-rl3-gray leading-relaxed">
                  Escribenos directamente por WhatsApp usando el boton verde en
                  la esquina inferior derecha.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full bg-rl3-dark-gray border border-rl3-mid-gray px-4 py-3 text-rl3-white font-[family-name:var(--font-instrument-sans)] text-sm placeholder:text-rl3-gray/40 focus:outline-none focus:border-rl3-accent transition-colors duration-300"
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
                  className="w-full bg-rl3-dark-gray border border-rl3-mid-gray px-4 py-3 text-rl3-white font-[family-name:var(--font-instrument-sans)] text-sm placeholder:text-rl3-gray/40 focus:outline-none focus:border-rl3-accent transition-colors duration-300"
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
                  className="w-full bg-rl3-dark-gray border border-rl3-mid-gray px-4 py-3 text-rl3-white font-[family-name:var(--font-instrument-sans)] text-sm placeholder:text-rl3-gray/40 focus:outline-none focus:border-rl3-accent transition-colors duration-300 resize-none"
                  placeholder="Cuentanos sobre tu proyecto"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto px-10 py-3.5 bg-rl3-accent text-rl3-black font-[family-name:var(--font-space-grotesk)] font-semibold text-sm tracking-wide hover:bg-rl3-accent/90 transition-all duration-300 disabled:opacity-50"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>

              {status === "sent" && (
                <p className="text-rl3-accent font-[family-name:var(--font-instrument-sans)] text-sm mt-2">
                  Mensaje enviado. Te contactaremos pronto.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 font-[family-name:var(--font-instrument-sans)] text-sm mt-2">
                  Error al enviar. Intentalo de nuevo o escribenos por WhatsApp.
                </p>
              )}
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
