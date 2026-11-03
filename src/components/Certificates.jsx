import React, { useState, useMemo } from 'react';
import {
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Calendar,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

const certificates = [
  { id: 1, title: 'Remote Work Professional Certification – RWPC™', issuer: 'RWPC International', year: '2025', category: 'Profesional', featured: true },
  { id: 2, title: 'Aplicación del Marco de Trabajo Scrum para Proyectos de Software', issuer: 'SENA', year: '2024', category: 'Metodologías', featured: true },
  { id: 3, title: 'Procesos para Software de Calidad', issuer: 'SENA', year: '2024', category: 'Calidad', featured: true },
  { id: 4, title: 'Manejo de Pruebas de Software', issuer: 'SENA', year: '2024', category: 'Calidad', featured: false },
  { id: 5, title: 'Metodología de la Programación de Sistemas Informáticos', issuer: 'SENA', year: '2023', category: 'Programación', featured: false },
  { id: 6, title: 'Curso Desarrollo Web con PHP', issuer: 'SENA', year: '2023', category: 'Programación', featured: false },
  { id: 7, title: 'Curador de Datos', issuer: 'SENA', year: '2024', category: 'Datos', featured: false },
  { id: 8, title: 'Administrador de Base de Datos', issuer: 'SENA', year: '2024', category: 'Datos', featured: false },
  { id: 9, title: 'Introducción a Sistemas de Automatización', issuer: 'SENA', year: '2024', category: 'Automatización', featured: false },
  { id: 10, title: 'English Does Work – Level 1', issuer: 'SENA', year: '2023', category: 'Idiomas', featured: false },
  { id: 11, title: 'English Does Work – Level 2', issuer: 'SENA', year: '2023', category: 'Idiomas', featured: false },
  { id: 12, title: 'English Does Work – Level 3', issuer: 'SENA', year: '2024', category: 'Idiomas', featured: false },
  { id: 13, title: 'English Does Work – Level 4', issuer: 'SENA', year: '2024', category: 'Idiomas', featured: false },
  { id: 14, title: 'English Does Work – Level 5', issuer: 'SENA', year: '2024', category: 'Idiomas', featured: false },
];

const categories = ['Todos', 'Destacados', 'Metodologías', 'Calidad', 'Programación', 'Datos', 'Idiomas'];
const INITIAL_LIMIT = 6;

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

export const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    if (activeCategory === 'Todos') return certificates;
    if (activeCategory === 'Destacados') return certificates.filter((c) => c.featured);
    return certificates.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_LIMIT);
  const remaining = filtered.length - INITIAL_LIMIT;

  return (
    <section id="certificates" className="section-deferred relative py-24 px-4 bg-transparent text-zinc-100 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Cabecera */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs text-zinc-400 mb-3 backdrop-blur-md">
            <Sparkles className="size-3 text-emerald-400" />
            <span>Educación Continua & Certificaciones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 select-none">
            <AnimatedTitle text="Certificaciones" baseDelay={0} />
          </h2>
          <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mb-6" />
          <p className="max-w-xl mx-auto text-sm text-zinc-400 leading-relaxed">
            Formación especializada y avalada en metodologías ágiles, calidad de software y gestión de datos.
          </p>
        </div>

        {/* Métricas Resumidas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-10">
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5 text-center">
            <p className="text-xl font-bold text-white">{certificates.length}</p>
            <p className="text-[11px] text-zinc-400">Total Certificados</p>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5 text-center">
            <p className="text-xl font-bold text-white">SENA & RWPC</p>
            <p className="text-[11px] text-zinc-400">Instituciones Emisoras</p>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-zinc-900/40 border border-white/5 text-center">
            <p className="text-xl font-bold text-emerald-400">B1 Inglés</p>
            <p className="text-[11px] text-zinc-400">Certificado EF SET</p>
          </div>
        </div>

        {/* Filtros de Categorías */}
        <div className="flex items-center justify-center gap-1.5 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${activeCategory === cat
                ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-900 border border-white/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grilla de Certificados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {displayed.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-white/10 hover:border-white/20 p-5 backdrop-blur-md transition-all duration-200 flex flex-col justify-between hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3 text-xs">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-300">
                    {cert.category}
                  </span>
                  <span className="font-mono text-zinc-500 text-[11px]">
                    {cert.year}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-3">
                  <Award className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="text-xs font-semibold text-white group-hover:text-zinc-100 leading-snug">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                <span>{cert.issuer}</span>
                {cert.featured && (
                  <span className="text-[10px] text-amber-400 font-medium">
                    ★ Destacado
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Más / Ver Menos */}
        {filtered.length > INITIAL_LIMIT && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/70 hover:bg-zinc-900 text-zinc-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
            >
              {showAll ? (
                <>
                  <ChevronUp className="size-4" />
                  <span>Ver menos</span>
                </>
              ) : (
                <>
                  <ChevronDown className="size-4" />
                  <span>Mostrar todos ({remaining} certificados más)</span>
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certificates;