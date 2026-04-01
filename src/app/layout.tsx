import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RL3 — AI Agency",
  description:
    "Construimos sistemas de AI que mejoran con cada iteracion. Estrategia, implementacion y optimizacion continua.",
  keywords: ["AI", "agencia", "inteligencia artificial", "automatizacion", "agentes IA"],
  openGraph: {
    title: "RL3 — AI Agency",
    description:
      "Cada iteracion nos acerca al resultado optimo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${instrumentSans.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
:root {
  --rl3-black: #0a0a0b;
  --rl3-white: #ffffff;
  --rl3-accent: #c8b88a;
  --rl3-accent-dim: #c8b88a33;
  --rl3-gray: #7a7a7a;
  --rl3-dark-gray: #1a1a1b;
  --rl3-mid-gray: #2a2a2b;
  --rl3-light-bg: #f5f5f5;
}
body {
  background: #0a0a0b;
  cursor: crosshair;
}
* { cursor: crosshair; }
.content-container { max-width: 1200px; margin: 0 auto; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 768px) {
  .content-container { padding: 0 1.25rem; }
}
`,
          }}
        />
      </head>
      <body className="min-h-screen">
        {children}
        {/* Grain overlay - feTurbulence SVG filter */}
        <svg className="grain-overlay" aria-hidden="true">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </body>
    </html>
  );
}
