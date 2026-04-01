"use client";

import SectionLabel from "./SectionLabel";
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="nosotros" className="section-padding">
      <div className="content-container">
        <FadeUp>
          <SectionLabel number="02" title="Nosotros" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <FadeUp delay={0.1}>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Observar. Actuar. Iterar.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-[family-name:var(--font-instrument-sans)] text-rl3-gray text-base md:text-lg leading-[1.7] mb-6">
                RL3 nace de una conviccion: la mayoria de proyectos AI fallan.
                Se analizan pero nunca se ejecutan, se ejecutan sin entender el
                negocio, o se entregan y nunca se miden.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p className="font-[family-name:var(--font-instrument-sans)] text-rl3-gray text-base md:text-lg leading-[1.7]">
                Cerramos esa brecha uniendo estrategia, implementacion y
                optimizacion en un ciclo continuo. Como en reinforcement
                learning, cada iteracion nos acerca al resultado optimo.
              </p>
            </FadeUp>
          </div>

          <div className="space-y-6">
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
            ].map((item, i) => (
              <FadeUp key={item.label} delay={0.1 + i * 0.12}>
                <div className="flex items-start gap-6 p-6 border border-rl3-mid-gray bg-rl3-dark-gray transition-all duration-300 hover:border-rl3-accent/30">
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
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
