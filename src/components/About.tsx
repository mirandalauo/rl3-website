"use client";

import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="nosotros" className="section-padding">
      <div className="content-container">
        <SectionLabel number="02" title="Nosotros" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Observar. Actuar. Iterar.
            </h2>
            <p className="font-[family-name:var(--font-instrument-sans)] text-rl3-gray text-lg leading-relaxed mb-6">
              RL3 nace de una conviccion: la mayoria de proyectos AI fallan.
              Se analizan pero nunca se ejecutan, se ejecutan sin entender el
              negocio, o se entregan y nunca se miden.
            </p>
            <p className="font-[family-name:var(--font-instrument-sans)] text-rl3-gray text-lg leading-relaxed">
              Cerramos esa brecha uniendo estrategia, implementacion y
              optimizacion en un ciclo continuo. Como en reinforcement
              learning, cada iteracion nos acerca al resultado optimo.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                metric: "3",
                label: "Fases por ciclo",
                detail: "Observar, Actuar, Iterar",
              },
              {
                metric: "100%",
                label: "En produccion",
                detail: "No demos. Soluciones reales.",
              },
              {
                metric: "∞",
                label: "Iteraciones",
                detail: "Sistemas que mejoran con el tiempo",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-6 p-6 border border-rl3-mid-gray bg-rl3-dark-gray"
              >
                <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-rl3-accent min-w-[60px]">
                  {item.metric}
                </span>
                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] font-semibold mb-1">
                    {item.label}
                  </p>
                  <p className="font-[family-name:var(--font-instrument-sans)] text-sm text-rl3-gray">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
