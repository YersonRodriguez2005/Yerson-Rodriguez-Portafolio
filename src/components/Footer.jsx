import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Check,
  Copy,
  Sparkles
} from 'lucide-react';

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

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('rodriguezyerson2005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer
      id="contact"
      className="section-deferred relative bg-transparent text-zinc-100 border-t border-white/10 pt-16 pb-12 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl px-6 relative z-10">

        {/* Banner Superior de Disponibilidad */}
        <div className="mb-14 p-8 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 mb-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>¿Tienes un proyecto o vacante en mente?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Trabajemos juntos en tu próxima solución web
            </h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-md">
              Disponible para roles de desarrollador Full-Stack, Frontend con React o arquitecturas backend con Node.js y PostgreSQL.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:rodriguezyerson2005@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold transition-all shadow-sm"
            >
              <Mail className="size-3.5" />
              <span>Enviar Correo</span>
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-white/10 transition-all"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-400" />
                  <span className="text-emerald-400">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5 text-zinc-400" />
                  <span>Copiar Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Columnas Principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Identidad */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2 mb-3">
              <span className="font-bold text-sm tracking-tight select-none">
                <AnimatedText text="Yerson Garzón" baseDelay={0} />
              </span>
              <span className="text-xs text-zinc-500 font-mono">/ Full-Stack</span>
            </a>
            <p className="text-xs text-zinc-400 leading-relaxed mb-5 max-w-xs">
              Desarrollador de software especializado en aplicaciones web de producción, rendimiento de interfaces y esquemas relacionales optimizados.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/YersonRodriguez2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="mailto:rodriguezyerson2005@gmail.com"
                className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Navegación rápida */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                ['Inicio', '#home'],
                ['Sobre Mí', '#about'],
                ['Proyectos', '#projects'],
                ['Habilidades', '#skills'],
                ['Certificados', '#certificates'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-zinc-400 hover:text-white transition-colors inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Datos de contacto oficiales de la HV */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-4">
              Contacto Directo
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <a
                href="mailto:rodriguezyerson2005@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="size-3.5 text-zinc-500" />
                <span>rodriguezyerson2005@gmail.com</span>
              </a>
              <a
                href="tel:+573216393715"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="size-3.5 text-zinc-500" />
                <span>+57 321 639 3715</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 text-zinc-500" />
                <span>Neiva, Huila — Colombia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Separador y Créditos */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Yerson Fabian Garzón Rodríguez. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-all hover:-translate-y-0.5"
            aria-label="Volver arriba"
          >
            <ArrowUp className="size-3.5" />
            <span>Subir</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;