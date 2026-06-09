import React, { useState } from 'react';
import { Github, ExternalLink, Download, FileText, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FieldOps Admin',
    description: 'Panel administrativo para gestión de operaciones de campo, con autenticación, CRUD de usuarios, CRUD de recursos, CRUD de ordenes de trabajo y visualización de datos.',
    tags: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'Node.js', 'MySQL'],
    github: 'https://github.com/YersonRodriguez2005/FieldOps-Admin',
    live: 'https://field-ops-admin-three.vercel.app/',
    featured: true,
    year: '2026',
  },
  {
    id: 2,
    title: 'StudyTrack',
    description: 'Prototipo de plataforma visual de gestión de estudio con diseño moderno, para estudiantes universitarios. Su principal objetivo es dar seguimiento a los estudios de los estudiantes.',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'CSS Animations'],
    github: 'https://github.com/YersonRodriguez2005/StudyTrack',
    live: 'https://studytrack-iota.vercel.app/',
    featured: true,
    year: '2025',
  },
  {
    id: 3,
    title: 'Sistema POS - Stop Food',
    description: 'Sistema de punto de venta para restaurante con gestión de productos, ventas, usuarios. Experiencia de usuario fluida y diseño moderno, para optimizar las operaciones del restaurante.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    github: 'https://github.com/YersonRodriguez2005/System-POS-Stop-Food',
    live: 'https://pos-stop-food.vercel.app/',
    featured: false,
    year: '2026',
  },
  {
    id: 4,
    title: 'Via Segura',
    description: 'Plataform informativa sobre seguridad vial, con recursos educativos, consejos de conducción segura, estadísticas de accidentes y noticias relacionadas con la seguridad en las carreteras.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Postman'],
    github: 'https://github.com/YersonRodriguez2005/ViaSegura',
    live: 'https://via-segura.vercel.app/',
    featured: false,
    year: '2024 - 2025',
  },
  {
    id: 5,
    title: 'CampusSync',
    description: 'Aplicación móvil nativa y PWA para gestión académica. Incluye temporizador Pomodoro, notificaciones push (FCM y Web Push), gráficos de rendimiento y conexión a base de datos en la nube.',
    tags: ['React', 'Ionic', 'Capacitor', 'Node.js', 'Express.js', 'PostgreSQL', 'Firebase'],
    github: 'https://github.com/YersonRodriguez2005/CampusSync',
    live: 'https://campus-sync-uni.vercel.app/',
    downloadApk: '/CampusSync.apk',
    featured: true,
    year: '2026',
  },
  {
    id: 6,
    title: 'FitnessAhora',
    description: 'Aplicación movil de salud y entrenamiento. Genera rutinas dinámicas basadas en equipamiento, incluye dashboard interactivo de seguimiento biométrico y recomendaciones nutricionales con bases de datos relacionales en la nube.',
    tags: ['React', 'Tailwind CSS', 'Ionic', 'Capacitor', 'Node.js', 'Express.js', 'PostgreSQL'],
    github: 'https://github.com/YersonRodriguez2005/FitnessAhora',
    downloadApk: '/FitnessAhora.apk',
    featured: true,
    year: '2026',
  },
  {
    id: 7,
    title: 'Lunaro',
    description: 'Lunaro es una plataforma de e-commerce de moda con catálogo de productos, carrito de compras, sistema de reseñas y panel de administración',
    tags: ['React', 'Tailwind CSS', 'Lucide-React', 'Node.js', 'Express.js', 'PostgreSQL'],
    github: 'https://github.com/YersonRodriguez2005/Lunaro',
    year: '2026',
  }
];

const ProjectCard = ({ project, index, onOpenModal }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="project-card" style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="relative h-full p-[1.5px] rounded-xl overflow-hidden group">
        <div className="absolute inset-0 rounded-xl transition-all duration-500"
          style={{
            background: hovered
              ? 'linear-gradient(135deg,#ffffff,#555,#ffffff)'
              : 'linear-gradient(135deg,#2a2a2a,#1a1a1a,#2a2a2a)',
            backgroundSize: '300% 300%',
            animation: hovered ? 'borderSpin 3s ease infinite' : 'none',
          }} />
        <div className="relative h-full bg-[#161616] rounded-xl p-6 z-10 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <span className="text-xs text-white/25 tracking-widest font-mono">{project.year}</span>
            <div className="flex items-center space-x-2.5">
              {project.featured && (
                <span className="text-[10px] text-white/35 tracking-widest uppercase">★ destacado</span>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors">
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
          <h3 className="text-white font-bold text-lg mb-3 leading-snug">{project.title}</h3>
          <p className="text-white/45 text-sm leading-relaxed grow mb-5">{project.description}</p>
          
          <div className={`flex flex-wrap gap-2 ${project.downloadApk ? 'mb-5' : 'mt-auto'}`}>
            {project.tags.map((tag) => (
              <span key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/8 group-hover:border-white/15 transition-colors">
                {tag}
              </span>
            ))}
          </div>

          {/* Botón de descarga exclusivo para apps móviles */}
          {project.downloadApk && (
            <button
              onClick={() => onOpenModal(project)}
              className="mt-auto inline-flex items-center justify-center space-x-2 text-white/60 hover:text-white text-xs transition-all duration-300 border border-white/10 hover:border-white/30 px-4 py-2.5 rounded-xl hover:bg-white/5 w-full"
            >
              <Download className="w-4 h-4" />
              <span className="font-medium tracking-wide">Descargar APK</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // Estado para controlar qué proyecto se está descargando (null = modal cerrado)
  const [selectedApk, setSelectedApk] = useState(null);

  const handleConfirmDownload = () => {
    if (selectedApk) {
      window.open(selectedApk.downloadApk, '_blank');
      setSelectedApk(null); // Cierra el modal tras iniciar la descarga
    }
  };

  return (
    <>
      <style>{`
        @keyframes gradientMove {
          0%,100% { background-position: 0% 50%; }
          50%     { background-position: 100% 50%; }
        }
        .animate-gradient { background-size: 400% 100%; animation: gradientMove 8s cubic-bezier(0.45,0.05,0.55,0.95) infinite; }
        @keyframes borderSpin {
          0%,100% { background-position: 0% 50%; }
          50%     { background-position: 100% 50%; }
        }
        @keyframes cardFade {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalFadeIn {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to   { opacity: 1; backdrop-filter: blur(4px); }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .project-card { animation: cardFade 0.6s cubic-bezier(0.16,1,0.3,1) both; height: 100%; }
        .modal-overlay { animation: modalFadeIn 0.3s ease-out forwards; }
        .modal-content { animation: modalSlideUp 0.4s cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>

      <section id="projects" className="py-24 bg-[#0f0f0f]/80 relative">
        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-gray-500 to-white animate-gradient">
                Proyectos
              </span>
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full" />
            <p className="text-white/35 mt-6 text-sm max-w-md mx-auto leading-relaxed">
              Proyectos que demuestran mis habilidades en desarrollo web full stack y móvil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div key={p.id} className="relative p-0.5 rounded-2xl overflow-hidden h-full">
                <div className="absolute inset-0 bg-linear-to-r from-white via-gray-500 to-white animate-gradient bg-size-[200%_auto] z-0" />
                <div className="relative z-10 h-full w-full bg-white dark:bg-gray-900 rounded-xl">
                  {/* Pasamos el disparador del modal al componente hijo */}
                  <ProjectCard project={p} index={i} onOpenModal={setSelectedApk} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://github.com/YersonRodriguez2005" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white/35 hover:text-white text-sm transition-all duration-300 border border-white/8 hover:border-white/25 px-6 py-3 rounded-xl hover:bg-white/3">
              <Github className="w-4 h-4" />
              <span>Ver más en GitHub</span>
            </a>
          </div>
        </div>
        <div className="w-24 h-0.5 bg-white/20 mx-auto rounded-full mt-20" />
      </section>

      {/* --- MODAL DE TÉRMINOS Y DESCARGA --- */}
      {selectedApk && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay bg-black/60">
          <div className="absolute inset-0" onClick={() => setSelectedApk(null)} />
          
          <div className="relative bg-[#161616] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl modal-content flex flex-col">
            <button 
              onClick={() => setSelectedApk(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">
                <FileText className="w-5 h-5 text-white/70" />
              </div>
              <h3 className="text-xl font-bold text-white">Términos de Uso</h3>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Al descargar la aplicación <span className="text-white font-medium">"{selectedApk.title}"</span>, confirmas que esta es una versión de demostración (MVP) construida para fines de portafolio y pruebas. Aceptas las políticas de privacidad y el uso de notificaciones push de prueba.
            </p>

            <div className="flex space-x-3 mt-auto">
              <button 
                onClick={() => setSelectedApk(null)}
                className="flex-1 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
              >
                Cancelar
              </button>
              <button 
                onClick={handleConfirmDownload}
                className="flex-1 py-2.5 rounded-xl bg-white text-black hover:bg-gray-200 transition-all text-sm font-bold flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Aceptar y Descargar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;