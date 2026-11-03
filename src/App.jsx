import React, { useMemo } from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

/* ─────────────────────────────────────────
   Efecto Cosmos: Orbes estelares con
   distribución instantánea y brillo 3D
───────────────────────────────────────── */
const generateOrbs = (count) =>
  Array.from({ length: count }, (_, i) => {
    const duration = 10 + Math.random() * 16; // Duración fluida y lenta
    return {
      id: i,
      left: `${Math.random() * 100}%`,
      size: 1.5 + Math.random() * 3, // Estrellas finas entre 1.5px y 4.5px
      duration,
      // Retraso negativo: arranca la animación en curso para que el espacio esté lleno de inmediato
      negativeDelay: -(Math.random() * duration),
      opacity: 0.25 + Math.random() * 0.55,
      glow: Math.random() > 0.6, // Algunas orbes tienen resplandor estelar
      drift: -25 + Math.random() * 50, // Deriva lateral leve
    };
  });

const GlobalOrbs = () => {
  const orbs = useMemo(() => generateOrbs(45), []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <style>{`
        @keyframes cosmicRise {
          0% {
            transform: translateY(105vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: var(--orb-max-op);
          }
          90% {
            opacity: var(--orb-max-op);
          }
          100% {
            transform: translateY(-10vh) translateX(var(--orb-drift));
            opacity: 0;
          }
        }
        .cosmic-particle {
          position: absolute;
          top: 0;
          border-radius: 50%;
          background: #ffffff;
          animation: cosmicRise linear infinite;
          will-change: transform, opacity;
        }
      `}</style>

      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="cosmic-particle"
          style={{
            left: orb.left,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            '--orb-max-op': orb.opacity,
            '--orb-drift': `${orb.drift}px`,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.negativeDelay}s`,
            boxShadow: orb.glow
              ? '0 0 6px 1px rgba(255, 255, 255, 0.7)'
              : 'none',
          }}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="bg-[#09090b] text-zinc-100 min-h-screen relative selection:bg-zinc-700 selection:text-white overflow-x-hidden">
      {/* Orbes flotantes en el fondo global */}
      <GlobalOrbs />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-zinc-950 focus:font-semibold focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        Saltar al contenido principal
      </a>

      {/* Header flotante */}
      <Header />

      {/* Contenido sin fondos sólidos que bloqueen las orbes */}
      <main id="main-content" className="relative z-10">
        <Presentation />
        <About />
        <Projects />
        <Skills />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}

export default App;