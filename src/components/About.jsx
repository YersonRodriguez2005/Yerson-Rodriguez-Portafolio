import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Languages, 
  Download, 
  CheckCircle2, 
  Calendar,
  Sparkles 
} from 'lucide-react';

/* Subcomponente para animar cada letra del título */
const AnimatedTitle = ({ text, baseDelay = 0 }) => (
  <>
    {text.split('').map((char, i) => (
      <span
        key={i}
        className="section-title-char"
        style={{ animationDelay: `${baseDelay + i * 0.08}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </>
);

export const About = () => {
  return (
    <>
      <style>{`
        /* Animación de oscilación vertical y resplandor para títulos */
        @keyframes sectionTitleWave {
          0%, 100% {
            transform: translateY(0);
            color: #ffffff;
            text-shadow: 0 0 14px rgba(255, 255, 255, 0.25);
          }
          50% {
            transform: translateY(-4px);
            color: #a1a1aa;
            text-shadow: none;
          }
        }
        .section-title-char {
          display: inline-block;
          animation: sectionTitleWave 3.2s ease-in-out infinite;
          will-change: transform, color;
        }
      `}</style>

      <section
        id="about"
        className="section-deferred relative py-24 px-4 bg-transparent text-zinc-100 overflow-hidden"
      >
        <div className="container mx-auto max-w-5xl relative z-10">
          
          {/* Encabezado de Sección con Título Animado */}
          <div className="text-center mb-16 select-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs text-zinc-400 mb-3 backdrop-blur-md">
              <Sparkles className="size-3 text-emerald-400" />
              <span>Trayectoria & Enfoque</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              <AnimatedTitle text="Sobre Mí" baseDelay={0} />
            </h2>
            
            <div className="w-16 h-1 bg-white/20 mx-auto rounded-full" />
          </div>

          {/* Bento Grid Principal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            
            {/* Experiencia Profesional */}
            <div className="md:col-span-2 group relative rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/70 border border-white/10 hover:border-white/20 p-6 md:p-8 backdrop-blur-md transition-all duration-300">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                    <Briefcase className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      Experiencia Profesional
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Petrol Services y CIA SAS • Neiva, Huila
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
                  <Calendar className="size-3" />
                  11/2024 - 12/2025
                </span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                Desarrollador Full-Stack Junior con participación directa en entornos de producción bajo metodología Scrum. Responsable del desarrollo end-to-end de una plataforma administrativa modular con React y Tailwind CSS, y la construcción de más de 10 endpoints REST seguros con JWT y PostgreSQL.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/5 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                  <span>Optimización de consultas SQL en PostgreSQL/MySQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                  <span>Auditorías de rendimiento y lazy loading en React</span>
                </div>
              </div>
            </div>

            {/* Formación Académica */}
            <div className="group relative rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/70 border border-white/10 hover:border-white/20 p-6 md:p-8 backdrop-blur-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-sky-400">
                    <GraduationCap className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Educación</h3>
                    <p className="text-xs text-zinc-400">Formación técnica y profesional</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-emerald-500/40 pl-3">
                    <p className="text-xs font-semibold text-white">Ingeniería de Software</p>
                    <p className="text-[11px] text-zinc-400">Corp. Universitaria Iberoamericana</p>
                    <span className="text-[10px] text-emerald-400 font-mono">2025 - Presente (En curso)</span>
                  </div>

                  <div className="border-l-2 border-white/20 pl-3">
                    <p className="text-xs font-semibold text-white">Tecnólogo en ADSO</p>
                    <p className="text-[11px] text-zinc-400">SENA</p>
                    <span className="text-[10px] text-zinc-400 font-mono">2022 - 2025 (Graduado)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Código Limpio */}
            <div className="group relative rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/70 border border-white/10 hover:border-white/20 p-6 md:p-8 backdrop-blur-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-indigo-400">
                  <Code2 className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Código Limpio</h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Arquitecturas modulares basadas en separación estricta de responsabilidades: componentes reutilizables, validación estricta y flujos ágiles con Scrum y Git.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Scrum', 'Git Flow', 'REST APIs', 'Postman', 'Vercel'].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className="md:col-span-2 group relative rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/70 border border-white/10 hover:border-white/20 p-6 md:p-8 backdrop-blur-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-amber-400 shrink-0">
                  <Languages className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Idiomas & Comunicación Técnica
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Español (nativo) e <span className="text-white font-medium">Inglés B1 certificado por EF SET</span> con sólida capacidad de lectura de documentación técnica y especificaciones de arquitectura.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-center">
                <div>
                  <p className="text-xs font-bold text-white">B1 Intermedio</p>
                  <p className="text-[10px] text-zinc-400 font-mono">EF SET Certificado</p>
                </div>
              </div>
            </div>

          </div>

          {/* Botón Descargar CV */}
          <div className="flex justify-center">
            <a
              href="/HV_Yerson_Garzon_Desarrollador_FullStack.pdf"
              download
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-xl shadow-white/5 hover:-translate-y-0.5"
            >
              <Download className="size-4 text-zinc-800 group-hover:scale-110 transition-transform" />
              <span>Descargar Hoja de Vida Completa (PDF)</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;