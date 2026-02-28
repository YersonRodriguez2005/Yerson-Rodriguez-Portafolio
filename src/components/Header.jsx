import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Certificados', href: '#certificates' },
  { label: 'Contacto', href: '#contact' },
];

/* Anima cada letra alternando blanco ↔ gris */
const AnimatedText = ({ text, baseDelay = 0 }) => (
  <>
    {text.split('').map((char, i) => (
      <span
        key={i}
        className="logo-char"
        style={{ animationDelay: `${baseDelay + i * 0.11}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        /* ─── Logo letter pulse ─── */
        @keyframes charPulse {
          0%,100% { color: #ffffff; }
          50%      { color: #4a4a4a; }
        }
        .logo-char {
          display: inline-block;
          animation: charPulse 3.2s ease-in-out infinite;
        }

        /* ─── Header entrance ─── */
        @keyframes slideDown {
          from { transform: translateY(-110%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        .header-enter { animation: slideDown 0.7s cubic-bezier(0.16,1,0.3,1) forwards; }

        /* ─── Glowing separator ─── */
        .header-separator {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(255,255,255,0.12) 25%,
            rgba(255,255,255,0.12) 75%,
            transparent 100%
          );
        }

        /* ─── Nav link base ─── */
        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0;
          color: rgba(255,255,255,0.42);
          font-size: 1rem;
          letter-spacing: 0.04em;
          font-weight: 500;
          padding: 4px 0 6px;
          transition: color 0.3s ease;
          overflow: hidden;
        }

        /* Underline that expands from center */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%; right: 50%;
          height: 1.5px;
          border-radius: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0), #fff, rgba(255,255,255,0));
          transition: left 0.35s cubic-bezier(0.16,1,0.3,1),
                      right 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          left: 0; right: 0;
        }
        .nav-link:hover,
        .nav-link.active {
          color: #ffffff;
        }

        /* Dot indicator for active */
        .nav-link.active::before {
          content: '';
          position: absolute;
          top: 50%; left: -12px;
          transform: translateY(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: white;
          opacity: 0.5;
        }

        /* ─── Individual letter bounce on hover ─── */
        .nav-letters span {
          display: inline-block;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .nav-link:hover .nav-letters span {
          animation: letterBounce 0.45s cubic-bezier(0.16,1,0.3,1) both;
        }
        .nav-link:hover .nav-letters span:nth-child(1) { animation-delay: 0.00s; }
        .nav-link:hover .nav-letters span:nth-child(2) { animation-delay: 0.03s; }
        .nav-link:hover .nav-letters span:nth-child(3) { animation-delay: 0.06s; }
        .nav-link:hover .nav-letters span:nth-child(4) { animation-delay: 0.09s; }
        .nav-link:hover .nav-letters span:nth-child(5) { animation-delay: 0.12s; }
        .nav-link:hover .nav-letters span:nth-child(6) { animation-delay: 0.15s; }
        .nav-link:hover .nav-letters span:nth-child(7) { animation-delay: 0.18s; }
        .nav-link:hover .nav-letters span:nth-child(8) { animation-delay: 0.21s; }
        .nav-link:hover .nav-letters span:nth-child(9) { animation-delay: 0.24s; }
        .nav-link:hover .nav-letters span:nth-child(10){ animation-delay: 0.27s; }
        @keyframes letterBounce {
          0%   { transform: translateY(0px); }
          40%  { transform: translateY(-4px); }
          70%  { transform: translateY(1px); }
          100% { transform: translateY(0px); }
        }

        /* ─── Logo hover glow area ─── */
        .logo-anchor {
          position: relative;
          text-decoration: none;
          padding: 4px 8px;
          border-radius: 8px;
          transition: background 0.3s;
        }
        .logo-anchor:hover { background: rgba(255,255,255,0.04); }

        /* ─── Burger button ─── */
        .burger-btn {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.55);
          transition: border-color 0.3s, background 0.3s, color 0.3s;
        }
        .burger-btn:hover {
          border-color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.05);
          color: #fff;
        }

        /* ─── Mobile menu ─── */
        @keyframes mobileSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu { animation: mobileSlide 0.3s cubic-bezier(0.16,1,0.3,1) forwards; }
        .mobile-link {
          display: block;
          padding: 12px 0;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.45);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.25s, padding-left 0.25s;
          letter-spacing: 0.04em;
        }
        .mobile-link:last-child { border-bottom: none; }
        .mobile-link:hover {
          color: #fff;
          padding-left: 6px;
        }
      `}</style>

      <header
        className={`header-enter fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0d0d0d]/88 backdrop-blur-xl py-3' : 'bg-transparent py-5'
        }`}
      >
        {scrolled && <div className="header-separator" />}

        <div className="container mx-auto max-w-5xl px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <a href="#home" className="logo-anchor select-none">
            <span className="font-extrabold text-[1.5rem] tracking-tight leading-none">
              <AnimatedText text="Mi" baseDelay={0} />
              <span style={{ color: 'rgba(255,255,255,0.18)', margin: '0 5px' }}>·</span>
              <AnimatedText text="Portafolio" baseDelay={0.25} />
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex  items-center space-x-9">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                >
                  <span className="nav-letters">
                    {link.label.split('').map((c, i) => (
                      <span key={i}>{c === ' ' ? '\u00A0' : c}</span>
                    ))}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden burger-btn"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* ── Mobile Dropdown ── */}
        {menuOpen && (
          <div className="mobile-menu md:hidden bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-white/5 px-6 pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;