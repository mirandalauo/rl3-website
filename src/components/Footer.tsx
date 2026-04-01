import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-rl3-mid-gray bg-rl3-dark-gray">
      <div className="content-container py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Logo className="h-12 w-auto mb-4" />
            <p className="font-[family-name:var(--font-space-mono)] text-xs text-rl3-gray tracking-wider">
              Observar · Actuar · Iterar
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <div className="flex gap-6">
              <a
                href="#servicios"
                className="font-[family-name:var(--font-instrument-sans)] text-sm text-rl3-gray hover:text-rl3-accent transition-colors"
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="font-[family-name:var(--font-instrument-sans)] text-sm text-rl3-gray hover:text-rl3-accent transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="font-[family-name:var(--font-instrument-sans)] text-sm text-rl3-gray hover:text-rl3-accent transition-colors"
              >
                Contacto
              </a>
            </div>
            <p className="font-[family-name:var(--font-instrument-sans)] text-xs text-rl3-gray/60">
              &copy; 2026 RL3 AI Agency. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
