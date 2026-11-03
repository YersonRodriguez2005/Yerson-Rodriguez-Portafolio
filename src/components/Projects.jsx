import React, { useState, useEffect, useMemo } from 'react';
import {
  Github,
  ExternalLink,
  Download,
  Sparkles,
  X,
  GraduationCap,
  ShoppingBag,
  Layout,
  Compass,
  Smartphone,
  Layers
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'StudyTrack LMS',
    category: 'lms',
    description: 'Plataforma LMS y seguimiento académico para estudiantes universitarios con panel de control interactivo, entrega de módulos y consultas relacionales optimizadas en MySQL.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MySQL', 'REST API'],
    github: 'https://github.com/YersonRodriguez2005/StudyTrack',
    live: 'https://studytrack-iota.vercel.app/',
    featured: true,
    year: '2025',
  },
  {
    id: 2,
    title: 'AcademicSync LMS',
    category: 'lms',
    description: 'Sistema de gestión de aprendizaje (LMS) integral con control de cursos, aulas virtuales, gestión de tareas y reportes de rendimiento académico con PostgreSQL.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/YersonRodriguez2005/CampusSync',
    live: 'https://campus-sync-uni.vercel.app/',
    featured: true,
    year: '2026',
  },
  {
    id: 3,
    title: 'FieldOps Admin',
    category: 'plataforma web',
    description: 'Panel administrativo para gestión de operaciones de campo, con autenticación JWT, CRUD de usuarios, control de recursos y visualización analítica de órdenes.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'MySQL'],
    github: 'https://github.com/YersonRodriguez2005/FieldOps-Admin',
    live: 'https://field-ops-admin-three.vercel.app/',
    featured: true,
    year: '2026',
  },
  {
    id: 4,
    title: 'Sistema POS - Stop Food',
    category: 'plataforma web',
    description: 'Sistema POS comercial para restaurantes con gestión rápida de productos en inventario, facturación fluida y operaciones ágiles de caja menor.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'State Management'],
    github: 'https://github.com/YersonRodriguez2005/System-POS-Stop-Food',
    live: 'https://pos-stop-food.vercel.app/',
    featured: false,
    year: '2026',
  },
  {
    id: 5,
    title: 'Vía Segura',
    category: 'landing',
    description: 'Landing page institucional y plataforma educativa sobre seguridad vial con navegación fluida, estadísticas interactivas y diseño responsivo enfocado en UX.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'UI/UX', 'Responsive'],
    github: 'https://github.com/YersonRodriguez2005/ViaSegura',
    live: 'https://via-segura.vercel.app/',
    featured: false,
    year: '2024 - 2025',
  },
  {
    id: 6,
    title: 'Lunaro E-Commerce',
    category: 'ecommerce',
    description: 'Plataforma de comercio electrónico de moda con catálogo dinámico categorizado, carrito de compras reactivo, panel de administración y base de datos relacional.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/YersonRodriguez2005/Lunaro',
    featured: false,
    year: '2026',
  }
];

const FILTER_TABS = [
  { id: 'all', label: 'Todos' },
  { id: 'plataforma web', label: 'Plataformas Web' },
  { id: 'landing', label: 'Landing Pages' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'lms', label: 'LMS / Educación' },
];

// Helper para obtener el badge y el icono correspondiente a la categoría
const getCategoryBadge = (category) => {
  switch (category) {
    case 'lms':
      return {
        label: 'LMS / EdTech',
        icon: <GraduationCap className="size-3 text-purple-400" />,
        className: 'text-purple-300 bg-purple-500/10 border-purple-500/20',
      };
    case 'ecommerce':
      return {
        label: 'E-Commerce',
        icon: <ShoppingBag className="size-3 text-amber-400" />,
        className: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
      };
    case 'landing':
      return {
        label: 'Landing Page',
        icon: <Compass className="size-3 text-emerald-400" />,
        className: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
      };
    case 'plataforma web':
    default:
      return {
        label: 'Plataforma Web',
        icon: <Layout className="size-3 text-sky-400" />,
        className: 'text-sky-300 bg-sky-500/10 border-sky-500/20',
      };
  }
};

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

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedApk, setSelectedApk] = useState(null);

  // Filtrado reactivo según la categoría seleccionada
  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projects;
    return projects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  // Cierre de modal con Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedApk(null);
    };
    if (selectedApk) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedApk]);

  const handleDownload = () => {
    if (selectedApk?.downloadApk) {
      const link = document.createElement('a');
      link.href = selectedApk.downloadApk;
      link.download = selectedApk.downloadApk.replace('/', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setSelectedApk(null);
    }
  };

  return (
    <section
      id="projects"
      className="section-deferred relative py-24 px-4 bg-transparent text-zinc-100 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Cabecera de la sección */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs text-zinc-400 mb-3 backdrop-blur-md">
            <Sparkles className="size-3 text-emerald-400" />
            <span>Portafolio de Soluciones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 select-none">
            <AnimatedTitle text="Proyectos Destacados" baseDelay={0} />
          </h2>
          <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mb-6" />
          <p className="max-w-xl mx-auto text-sm text-zinc-400 leading-relaxed">
            Plataformas administrativas, sistemas educativos (LMS), tiendas electrónicas y experiencias web orientadas a la conversión.
          </p>
        </div>

        {/* Barra de Filtros por Tipo de Solución */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center p-1 rounded-xl bg-zinc-900/80 border border-white/10 backdrop-blur-md gap-1">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${isActive
                      ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grilla de Proyectos Renderizada Correctamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {filteredProjects.map((project) => {
            const badge = getCategoryBadge(project.category);
            return (
              <article
                key={project.id}
                className="group relative rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/10 hover:border-white/20 p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Metadatos superiores: Año, Destacado y Categoría */}
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-mono text-zinc-500 font-medium">
                      {project.year}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400">
                          Destacado
                        </span>
                      )}
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border text-[11px] font-medium ${badge.className}`}>
                        {badge.icon}
                        <span>{badge.label}</span>
                      </span>
                    </div>
                  </div>

                  {/* Título y Enlaces de Acceso */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                          aria-label={`Código fuente en GitHub de ${project.title}`}
                        >
                          <Github className="size-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                          aria-label={`Demo en vivo de ${project.title}`}
                        >
                          <ExternalLink className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Badges de Tecnologías */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/4 text-zinc-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Acción de descarga APK para proyectos móviles si existieran */}
                  {project.downloadApk && (
                    <button
                      onClick={() => setSelectedApk(project)}
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 hover:border-white/20 text-xs font-semibold transition-all duration-200"
                    >
                      <Download className="size-3.5 text-sky-400" />
                      <span>Descargar APK (Android)</span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Enlace general a GitHub */}
        <div className="flex justify-center">
          <a
            href="https://github.com/YersonRodriguez2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 text-xs font-medium transition-all"
          >
            <Github className="size-4" />
            <span>Explorar más repositorios en GitHub</span>
          </a>
        </div>

      </div>

      {/* Modal accesible de descarga (en caso de proyectos APK) */}
      {selectedApk && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            className="absolute inset-0"
            onClick={() => setSelectedApk(null)}
          />

          <div className="relative w-full max-w-md rounded-2xl bg-zinc-950 border border-white/10 p-6 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedApk(null)}
              className="absolute top-4 right-4 p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Cerrar ventana modal"
            >
              <X className="size-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <Smartphone className="size-5" />
              </div>
              <div>
                <h3 id="modal-title" className="text-base font-bold text-white">
                  Instalación de Aplicación
                </h3>
                <p className="text-xs text-zinc-400">{selectedApk.title}</p>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed mb-6">
              Esta aplicación está empaquetada como versión de prueba directa. Al confirmar, se iniciará la descarga del instalador en tu dispositivo.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedApk(null)}
                className="w-1/2 py-2.5 rounded-xl border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 text-xs font-semibold transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={handleDownload}
                className="w-1/2 py-2.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="size-3.5" />
                <span>Confirmar y Descargar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;