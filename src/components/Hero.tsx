"use client";

import FadeUp from "./FadeUp";

export default function Hero() {
  return (
    <section className="hero-grid relative min-h-[100dvh] flex items-center pt-20 pb-12">
      <div className="content-container w-full">
        <div className="max-w-4xl">
          <FadeUp>
            <p className="section-label">00 — Inicio</p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[1.08] mb-8">
              Cada iteracion nos acerca al{" "}
              <span className="text-rl3-accent">resultado optimo</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="font-[family-name:var(--font-instrument-sans)] text-base md:text-lg text-rl3-gray leading-[1.7] max-w-xl mb-10">
              Construimos sistemas de AI que mejoran con el tiempo. No demos.
              Soluciones en produccion que generan valor desde el primer dia.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-rl3-accent text-rl3-black font-[family-name:var(--font-space-grotesk)] font-semibold text-sm tracking-wide hover:bg-rl3-accent/90 transition-colors"
              >
                Contactanos
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-rl3-mid-gray text-rl3-white font-[family-name:var(--font-space-grotesk)] font-medium text-sm tracking-wide hover:border-rl3-accent hover:text-rl3-accent transition-colors"
              >
                Ver servicios
              </a>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.5}>
          <div className="mt-16 md:mt-24 flex items-center gap-3 font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.3em] text-rl3-gray">
            <span>Observar</span>
            <span className="text-rl3-accent">→</span>
            <span>Actuar</span>
            <span className="text-rl3-accent">→</span>
            <span>Iterar</span>
            <span className="text-rl3-accent">↻</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
