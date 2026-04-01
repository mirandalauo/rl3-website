"use client";

import SectionLabel from "./SectionLabel";

const PILLARS = [
  {
    number: "01",
    phase: "Observar",
    title: "Estrategia AI",
    description:
      "Observamos tu entorno, analizamos tus datos y disenamos la policy optima. Cada dato es una senal de mejora.",
    features: [
      "Diagnostico AI de procesos",
      "Roadmap de implementacion",
      "Auditoria de datos",
      "Workshops de equipo",
    ],
  },
  {
    number: "02",
    phase: "Actuar",
    title: "Implementacion",
    description:
      "Agentes, automatizaciones y sistemas inteligentes en produccion. Construimos lo que se va a usar.",
    features: [
      "Agentes de IA a medida",
      "Automatizacion de workflows",
      "Chatbots y asistentes",
      "Integraciones API",
    ],
  },
  {
    number: "03",
    phase: "Iterar",
    title: "Optimizacion Continua",
    description:
      "Cada dato es una senal de recompensa. Monitorizamos, ajustamos y escalamos. Sistemas que mejoran con el tiempo.",
    features: [
      "Dashboards de monitoreo",
      "Ajustes iterativos",
      "Escalado de soluciones",
      "Soporte continuo",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding">
      <div className="content-container">
        <SectionLabel number="01" title="Servicios" />

        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Tres fases. Un ciclo continuo.
        </h2>
        <p className="font-[family-name:var(--font-instrument-sans)] text-rl3-gray text-lg mb-16 max-w-2xl">
          Entender antes de construir, construir lo que se va a usar, mejorar
          con datos reales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative bg-rl3-dark-gray border border-rl3-mid-gray p-8 md:p-10 transition-all hover:border-rl3-accent/30"
            >
              {/* Gold top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-rl3-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <span className="font-[family-name:var(--font-space-mono)] text-5xl font-bold text-rl3-mid-gray group-hover:text-rl3-accent transition-colors">
                {pillar.number}
              </span>

              <p className="font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.3em] text-rl3-accent mt-4 mb-2">
                {pillar.phase}
              </p>

              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold mb-4">
                {pillar.title}
              </h3>

              <p className="font-[family-name:var(--font-instrument-sans)] text-rl3-gray leading-relaxed mb-6">
                {pillar.description}
              </p>

              <ul className="space-y-2">
                {pillar.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-[family-name:var(--font-instrument-sans)] text-sm text-rl3-gray flex items-start gap-2"
                  >
                    <span className="text-rl3-accent mt-0.5">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
