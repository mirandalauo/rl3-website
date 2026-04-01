"use client";

export default function Hero() {
  return (
    <section className="hero-grid relative min-h-screen flex items-center pt-16">
      <div className="content-container w-full">
        <div className="max-w-3xl">
          <p className="section-label fade-up">00 — Inicio</p>

          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 fade-up fade-up-delay-1">
            Cada iteracion nos acerca al{" "}
            <span className="text-rl3-accent">resultado optimo</span>
          </h1>

          <p className="font-[family-name:var(--font-instrument-sans)] text-lg md:text-xl text-rl3-gray leading-relaxed max-w-xl mb-10 fade-up fade-up-delay-2">
            Construimos sistemas de AI que mejoran con el tiempo. No demos.
            Soluciones en produccion que generan valor desde el primer dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 fade-up fade-up-delay-3">
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
        </div>

        {/* Cycle visualization */}
        <div className="mt-20 flex items-center gap-3 font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.3em] text-rl3-gray fade-up fade-up-delay-4">
          <span>Observar</span>
          <span className="text-rl3-accent">→</span>
          <span>Actuar</span>
          <span className="text-rl3-accent">→</span>
          <span>Iterar</span>
          <span className="text-rl3-accent">↻</span>
        </div>
      </div>
    </section>
  );
}
