import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Check,
  MapPin,
  Terminal,
  Database,
  Layers
} from 'lucide-react';

const ROLES = [
  'Desarrollador Full-Stack',
  'Especialista en React & Tailwind',
  'Backend con Node.js & Express',
  'Arquitectura PostgreSQL & MySQL',
];

const TECH_PILLS = [
  'React.js',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Tailwind CSS',
  'APIs REST',
];

/* Anima cada carácter con oscilación vertical y transición de luz */
const AnimatedText = ({ text, baseDelay = 0 }) => (
  <>
    {text.split('').map((char, i) => (
      <span
        key={i}
        className="hero-name-char"
        style={{ animationDelay: `${baseDelay + i * 0.08}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </>
);

export const Presentation = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 70);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((r) => (r + 1) % ROLES.length);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rodriguezyerson2005@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <>
      <style>{`
        /* Animación fluida de onda y contraste para títulos grandes */
        @keyframes heroWave {
          0%, 100% {
            transform: translateY(0);
            color: #ffffff;
            text-shadow: 0 0 12px rgba(255, 255, 255, 0.25);
          }
          50% {
            transform: translateY(-4px);
            color: #a1a1aa;
            text-shadow: none;
          }
        }
        .hero-name-char {
          display: inline-block;
          animation: heroWave 3.2s ease-in-out infinite;
          will-change: transform, color;
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 bg-transparent overflow-hidden"
      >
        {/* Luz ambiental sutil difuminada en el centro superior */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-137.5 h-80 bg-linear-to-b from-zinc-700/15 via-zinc-800/5 to-transparent blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* Badge de Disponibilidad y Ubicación */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs text-zinc-300 mb-8 backdrop-blur-md shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium">Disponible para trabajar</span>
            <span className="text-zinc-600">•</span>
            <span className="inline-flex items-center gap-1 text-zinc-400">
              <MapPin className="size-3 text-zinc-400" />
              Neiva, Colombia
            </span>
          </div>

          {/* Título Principal con animación continua en toda la frase */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 select-none flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4">
            <span className="inline-block whitespace-nowrap">
              <AnimatedText text="Hola, soy" baseDelay={0} />
            </span>
            <span className="inline-block whitespace-nowrap">
              <AnimatedText text="Yerson Garzón" baseDelay={'Hola, soy '.length * 0.08} />
            </span>
          </h1>

          {/* Rol dinámico */}
          <div className="h-8 flex items-center justify-center mb-6">
            <span className="text-lg sm:text-xl font-medium text-zinc-300">
              {displayText}
            </span>
            <span className="inline-block w-0.5 h-5 ml-1 bg-emerald-400 animate-pulse" />
          </div>

          {/* Resumen extraído de la experiencia profesional */}
          <p className="max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed font-normal mb-8">
            Desarrollador de software con más de un año de experiencia en producción creando
            plataformas con <span className="text-zinc-200 font-medium">React</span>, arquitecturas backend en{' '}
            <span className="text-zinc-200 font-medium">Node.js / Express</span> y bases de datos relacionales
            optimizadas en <span className="text-zinc-200 font-medium">PostgreSQL</span>.
          </p>

          {/* Badges de Tecnologías principales */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-xl">
            {TECH_PILLS.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900/80 border border-white/5 text-zinc-400 hover:text-zinc-200 hover:border-white/20 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botones de Acción (CTAs) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12 w-full sm:w-auto">
            <a
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-950 font-semibold rounded-xl text-sm hover:bg-zinc-200 transition-all shadow-lg shadow-white/5 hover:-translate-y-px"
            >
              Explorar Proyectos
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/HV_Yerson_Garzon_Desarrollador_FullStack.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 border border-white/10 hover:border-white/20 font-semibold rounded-xl text-sm transition-all hover:-translate-y-px"
            >
              <Download className="size-4 text-zinc-400" />
              Descargar CV
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 border border-white/10 rounded-xl text-sm transition-all"
              title="Copiar correo al portapapeles"
            >
              {copiedEmail ? (
                <>
                  <Check className="size-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Mail className="size-4 text-zinc-400" />
                  <span>Copiar Correo</span>
                </>
              )}
            </button>
          </div>

          {/* Redes Sociales Rápidas */}
          <div className="flex items-center gap-5 text-zinc-400 mb-14">
            <a
              href="https://github.com/YersonRodriguez2005"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:rodriguezyerson2005@gmail.com"
              className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>

          {/* Métricas Reales de Producción */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl text-left">
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-zinc-400 mb-1">
                <Terminal className="size-4 text-emerald-400" />
                <span className="text-xs uppercase tracking-wider font-mono">Experiencia</span>
              </div>
              <p className="text-lg font-bold text-white">+1 Año</p>
              <p className="text-xs text-zinc-400">En aplicaciones web en producción</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-zinc-400 mb-1">
                <Database className="size-4 text-sky-400" />
                <span className="text-xs uppercase tracking-wider font-mono">Backend</span>
              </div>
              <p className="text-lg font-bold text-white">+10 Endpoints</p>
              <p className="text-xs text-zinc-400">APIs REST con JWT y PostgreSQL</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-zinc-400 mb-1">
                <Layers className="size-4 text-indigo-400" />
                <span className="text-xs uppercase tracking-wider font-mono">Frontend</span>
              </div>
              <p className="text-lg font-bold text-white">Full Modular</p>
              <p className="text-xs text-zinc-400">React, Tailwind y UI/UX limpia</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Presentation;