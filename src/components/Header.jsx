import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Certificados', href: '#certificates' },
  { label: 'Contacto', href: '#contact' },
];

/* Anima cada letra con movimiento sutil y transición de contraste */
const AnimatedText = ({ text, baseDelay = 0 }) => (
  <>
    {text.split('').map((char, i) => (
      <span
        key={i}
        className="name-char-anim"
        style={{ animationDelay: `${baseDelay + i * 0.08}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </>
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        /* Movimiento de onda y cambio de tonalidad manteniendo contraste */
        @keyframes nameWave {
          0%, 100% {
            transform: translateY(0);
            color: #ffffff;
          }
          50% {
            transform: translateY(-2px);
            color: #a1a1aa;
          }
        }
        .name-char-anim {
          display: inline-block;
          animation: nameWave 3.2s ease-in-out infinite;
          will-change: transform, color;
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
        <div
          className={`w-full max-w-5xl transition-all duration-300 rounded-2xl border ${
            scrolled
              ? 'bg-zinc-950/90 backdrop-blur-md border-white/10 shadow-2xl shadow-black/80 py-2.5 px-5'
              : 'bg-zinc-950/75 backdrop-blur-md border-white/10 py-3 px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            
            {/* Logo / Nombre con animación de caracteres */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-lg p-1"
            >
              <div className="relative flex items-center justify-center size-8 rounded-lg bg-zinc-900 border border-white/10 group-hover:border-white/30 transition-colors">
                <span className="font-bold text-sm tracking-tight text-white">YG</span>
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-sm tracking-tight select-none">
                  <AnimatedText text="Yerson Garzón" baseDelay={0} />
                </span>
                <span className="text-[10px] text-zinc-400 tracking-wider uppercase font-medium">
                  Full-Stack Dev
                </span>
              </div>
            </a>

            {/* Navegación Desktop */}
            <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-white/5 p-1 rounded-xl">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/15 shadow-sm'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-white rounded-full shadow-[0_0_8px_white]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Botón CTA derecho */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200"
              >
                <Send className="size-3" aria-hidden="true" />
                <span>Hablemos</span>
              </a>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center size-9 rounded-lg border border-white/10 bg-zinc-900 text-zinc-300 hover:text-white transition-colors"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>

          {/* Menú Desplegable Móvil */}
          {menuOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-3 py-2 text-sm rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-white/10 text-white font-semibold'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold bg-white text-zinc-950 rounded-lg tracking-wide"
              >
                <Send className="size-3.5" />
                Contactar Ahora
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;