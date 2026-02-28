import React, { useMemo } from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

/* ─────────────────────────────────────────
   Orbes globales — fixed, cubren toda la
   página sin interrumpirse entre secciones
───────────────────────────────────────── */
const generateOrbs = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${2 + Math.random() * 96}%`,
    size: 1.5 + Math.random() * 3.5,
    duration: 8 + Math.random() * 16,
    delay: Math.random() * 14,
    opacity: 0.18 + Math.random() * 0.52,
  }));

const GlobalOrbs = () => {
  const orbs = useMemo(() => generateOrbs(40), []);

  return (
    <>
      <style>{`
        @keyframes orbRise {
          0%   { transform: translateY(0) translateX(0);   opacity: 0; }
          6%   { opacity: var(--orb-op); }
          90%  { opacity: var(--orb-op); }
          100% { transform: translateY(-102vh) translateX(20px); opacity: 0; }
        }
        .global-orb {
          position: fixed;
          border-radius: 50%;
          background: #ffffff;
          pointer-events: none;
          animation: orbRise linear infinite;
          z-index: 0;
        }
      `}</style>

      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="global-orb"
          style={{
            left: orb.left,
            bottom: '-6px',
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            '--orb-op': orb.opacity,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </>
  );
};

function App() {
  return (
    <div className="bg-[#121212] min-h-screen relative">
      {/* Orbes flotantes globales — siempre visibles en toda la página */}
      <GlobalOrbs />

      <Header />
      <main className="relative z-10">
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