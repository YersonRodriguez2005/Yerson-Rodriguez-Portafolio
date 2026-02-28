import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';

const certificates = [
  { id: 1,  title: 'Remote Work Professional Certification – RWPC™',                           issuer: 'RWPC International', year: '2025', category: 'Profesional',    featured: true  },
  { id: 2,  title: 'Aplicación del Marco de Trabajo Scrum para Proyectos de Software',          issuer: 'SENA',              year: '2024', category: 'Metodologías',  featured: true  },
  { id: 3,  title: 'Procesos para Software de Calidad',                                         issuer: 'SENA',              year: '2024', category: 'Calidad',        featured: true  },
  { id: 4,  title: 'Manejo de Pruebas de Software',                                             issuer: 'SENA',              year: '2024', category: 'Calidad',        featured: false },
  { id: 5,  title: 'Metodología de la Programación de Sistemas Informáticos',                   issuer: 'SENA',              year: '2023', category: 'Programación',   featured: false },
  { id: 6,  title: 'Curso Desarrollo Web con PHP',                                              issuer: 'SENA',              year: '2023', category: 'Programación',   featured: false },
  { id: 7,  title: 'Curador de Datos',                                                          issuer: 'SENA',              year: '2024', category: 'Datos',          featured: false },
  { id: 8,  title: 'Administrador de Base de Datos',                                            issuer: 'SENA',              year: '2024', category: 'Datos',          featured: false },
  { id: 9,  title: 'Introducción a Sistemas de Automatización',                                 issuer: 'SENA',              year: '2024', category: 'Automatización', featured: false },
  { id: 10, title: 'English Does Work – Level 1',                                               issuer: 'SENA',              year: '2023', category: 'Idiomas',        featured: false },
  { id: 11, title: 'English Does Work – Level 2',                                               issuer: 'SENA',              year: '2023', category: 'Idiomas',        featured: false },
  { id: 12, title: 'English Does Work – Level 3',                                               issuer: 'SENA',              year: '2024', category: 'Idiomas',        featured: false },
  { id: 13, title: 'English Does Work – Level 4',                                               issuer: 'SENA',              year: '2024', category: 'Idiomas',        featured: false },
  { id: 14, title: 'English Does Work – Level 5',                                               issuer: 'SENA',              year: '2024', category: 'Idiomas',        featured: false },
];

const categories = ['Todos','Profesional','Metodologías','Calidad','Programación','Idiomas','Datos','Automatización'];
const VISIBLE_COUNT = 6;

const CertCard = ({ cert, index }) => (
  <div className="cert-card group" style={{ animationDelay: `${index * 0.07}s` }}>
    <div className="relative h-full p-[1.5px] rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-white/5 group-hover:bg-linear-to-r group-hover:from-white/20 group-hover:via-white/10 group-hover:to-white/20 transition-all duration-500 rounded-xl" />
      <div className="relative bg-[#161616] rounded-xl p-5 z-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Award className="w-3.5 h-3.5 text-white/30 shrink-0 group-hover:text-white/60 transition-colors" />
            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
              cert.featured
                ? 'bg-white/12 border-white/20 text-white/75'
                : 'bg-white/4 border-white/8 text-white/35'
            }`}>
              {cert.category}
            </span>
          </div>
          <span className="text-[10px] text-white/20 font-mono">{cert.year}</span>
        </div>
        <h4 className="text-white/70 text-sm font-medium leading-snug group-hover:text-white transition-colors grow">
          {cert.title}
        </h4>
        <p className="text-white/25 text-xs mt-3">{cert.issuer}</p>
      </div>
    </div>
  </div>
);

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [showAll,        setShowAll]        = useState(false);

  const filtered  = activeCategory === 'Todos' ? certificates : certificates.filter((c) => c.category === activeCategory);
  const displayed = showAll ? filtered : filtered.slice(0, VISIBLE_COUNT);
  const remaining = filtered.length - VISIBLE_COUNT;

  return (
    <>
      <style>{`
        @keyframes gradientMove {
          0%,100% { background-position: 0% 50%; }
          50%     { background-position: 100% 50%; }
        }
        .animate-gradient { background-size: 400% 100%; animation: gradientMove 8s cubic-bezier(0.45,0.05,0.55,0.95) infinite; }
        @keyframes certFade {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cert-card { animation: certFade 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .cat-pill { transition: all 0.3s ease; white-space: nowrap; font-size: 0.72rem; letter-spacing: 0.04em; }
        .cat-pill.active { background: #ffffff; color: #121212; border-color: #ffffff; font-weight: 600; }
        .cat-pill:not(.active):hover { border-color: rgba(255,255,255,0.3); color: rgba(255,255,255,0.7); }
      `}</style>

      <section id="certificates" className="py-24 bg-[#121212]/80">
        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-gray-500 to-white animate-gradient">
                Certificados
              </span>
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full" />
            <p className="text-white/35 mt-6 text-sm max-w-md mx-auto">
              {certificates.length} certificaciones en diferentes áreas de conocimiento
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto">
            {[
              { label: 'Certificados', value: certificates.length },
              { label: 'Categorías',   value: categories.length - 1 },
              { label: 'Años',         value: '2023–2025' },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-white/3 border border-white/6">
                <div className="text-white font-bold text-xl">{s.value}</div>
                <div className="text-white/30 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-2.5 mb-10 overflow-x-auto pb-1 justify-center flex-wrap">
            {categories.map((cat) => (
              <button key={cat} onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                className={`cat-pill shrink-0 px-3.5 py-1.5 rounded-full border ${
                  activeCategory === cat ? 'active border-white' : 'border-white/10 text-white/38'
                }`}>
                {cat}
                {cat !== 'Todos' && (
                  <span className="ml-1 text-white/20">
                    ({certificates.filter((c) => c.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayed.map((cert, i) => <CertCard key={cert.id} cert={cert} index={i} />)}
          </div>

          {filtered.length > VISIBLE_COUNT && (
            <div className="text-center mt-8">
              <button onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center space-x-2 text-white/35 hover:text-white text-sm transition-all duration-300 border border-white/8 hover:border-white/25 px-6 py-3 rounded-xl hover:bg-white/3">
                {showAll
                  ? <><ChevronUp className="w-4 h-4" /><span>Ver menos</span></>
                  : <><ChevronDown className="w-4 h-4" /><span>Ver todos ({remaining} más)</span></>
                }
              </button>
            </div>
          )}
        </div>
        <div className="w-24 h-0.5 bg-white/20 mx-auto rounded-full mt-20" />
      </section>
    </>
  );
};

export default Certificates;