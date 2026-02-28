import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const ROLES = [
  ' de Software Web',
  ' Frontend',
  ' React',
  ' Full Stack',
];

/* Anima cada letra del nombre entre blanco y gris (igual que el logo) */
const AnimatedName = ({ text, baseDelay = 0, className = '' }) => (
  <span className={className}>
    {text.split('').map((char, i) => (
      <span
        key={i}
        className="name-char"
        style={{ animationDelay: `${baseDelay + i * 0.08}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);

/* Genera orbes aleatorios una sola vez */
const generateOrbs = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    size: 2 + Math.random() * 3,
    duration: 7 + Math.random() * 14,
    delay: Math.random() * 10,
    opacity: 0.25 + Math.random() * 0.55,
  }));

const ORBS = generateOrbs(28);

const Presentation = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  /* Typewriter */
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 75);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((r) => (r + 1) % ROLES.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <>
      <style>{`
        /* ─── Name letter pulse (same as logo) ─── */
        @keyframes namePulse {
          0%,100% { color: #ffffff; }
          50%      { color: #3d3d3d; }
        }
        .name-char {
          display: inline-block;
          animation: namePulse 3.5s ease-in-out infinite;
        }

        /* ─── Section fade-in staggered ─── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }

        /* ─── Orb float upward ─── */
        @keyframes orbRise {
          0%   { transform: translateY(0) translateX(0);  opacity: 0; }
          8%   { opacity: var(--orb-opacity); }
          88%  { opacity: var(--orb-opacity); }
          100% { transform: translateY(-105vh) translateX(18px); opacity: 0; }
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          background: white;
          animation: orbRise linear infinite;
          opacity: 0;
          pointer-events: none;
        }

        /* ─── Cursor blink ─── */
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
        .cursor {
          display: inline-block;
          width: 2px; height: 1.1em;
          background: white;
          margin-left: 3px;
          vertical-align: middle;
          animation: blink 0.95s ease infinite;
        }

        /* ─── Social icon ─── */
        .social-ico {
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), color 0.3s;
        }
        .social-ico:hover { transform: translateY(-5px); color: white; }

        /* ─── CTA primary ─── */
        .btn-primary {
          position: relative; overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1),
                      background 0.3s, box-shadow 0.3s;
        }
        .btn-primary::before {
          content: '';
          position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg,transparent,rgba(0,0,0,0.12),transparent);
          transition: left 0.5s;
        }
        .btn-primary:hover::before { left: 100%; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,255,255,0.15); }

        /* ─── CTA secondary ─── */
        .btn-secondary {
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .btn-secondary:hover {
          border-color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.05);
          transform: translateY(-2px);
        }

        /* ─── Scroll bounce ─── */
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(5px); }
        }
        .scroll-bounce { animation: bounce 2.2s ease-in-out infinite; }

        /* ─── Radial glow ─── */
        .hero-glow {
          background: radial-gradient(ellipse 55% 45% at 50% 50%,
            rgba(255,255,255,0.05) 0%, transparent 70%);
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center bg-[#121212] overflow-hidden"
      >
        {/* ── Radial glow ── */}
        <div className="hero-glow absolute inset-0 pointer-events-none" />

        {/* ── Rising orbs ── */}
        {ORBS.map((orb) => (
          <div
            key={orb.id}
            className="orb"
            style={{
              left: orb.left,
              bottom: '-10px',
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              '--orb-opacity': orb.opacity,
              animationDuration: `${orb.duration}s`,
              animationDelay: `${orb.delay}s`,
            }}
          />
        ))}

        {/* ── Content ── */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          {/* Eyebrow */}
          <p
            className="fade-up text-white/40 text-s tracking-[0.35em] uppercase mt-10 mb-10"
            style={{ animationDelay: '0.1s' }}
          >
            Bienvenido a mi portafolio
          </p>

          {/* Name — animated letter by letter */}
          <h1 className="fade-up leading-none mb-3" style={{ animationDelay: '0.2s' }}>
            <AnimatedName
              text="¡Hola! Soy Yerson"
              baseDelay={0.3}
              className="block text-5xl md:text-7xl lg:text-5xl font-extrabold tracking-tight"
            />
            <AnimatedName
              text="Rodriguez"
              baseDelay={0.9}
              className="block text-5xl md:text-7xl lg:text-5xl font-extrabold tracking-tight"
            />
          </h1>

          {/* Typewriter role */}
          <div
            className="fade-up flex items-center justify-center mt-7 mb-10 h-9"
            style={{ animationDelay: '0.45s' }}
          >
            <span className="text-white font-semibold text-lg md:text-xl tracking-wide">
              Desarrollador {displayText}
            </span>
            <span className="cursor" />
          </div>

          {/* Social icons */}
          <div
            className="fade-up flex items-center justify-center space-x-6 mb-12"
            style={{ animationDelay: '0.6s' }}
          >
            {[
              { href: 'https://github.com/YersonRodriguez05', icon: <Github className="w-5 h-5" /> },
              { href: 'https://linkedin.com/in/YersonRodriguez', icon: <Linkedin className="w-5 h-5" /> },
              { href: 'mailto:rodriguezyerson2005@gmail.com', icon: <Mail className="w-5 h-5" /> },
            ].map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="social-ico text-white/40"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className="fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: '0.75s' }}
          >
            <a
              href="#projects"
              className="btn-primary inline-flex items-center px-8 py-3.5 bg-white text-[#121212] font-semibold rounded-xl text-sm tracking-wide"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center px-8 py-3.5 border border-white/18 text-white font-semibold rounded-xl text-sm tracking-wide"
            >
              Contactarme
            </a>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-bounce">
          <a href="#about" className="flex flex-col items-center space-y-1.5 text-white/25 hover:text-white/55 transition-colors">
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Presentation;