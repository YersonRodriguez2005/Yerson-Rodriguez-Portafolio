import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FieldOps Admin',
    description: 'Panel administrativo para gestión de operaciones de campo, con autenticación, CRUD de usuarios, CRUD de recursos, CRUD de ordenes de trabajo y visualización de datos.',
    tags: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'CSS Animations', 'Node.js', 'Express', 'MySQL',],
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
];

const ProjectCard = ({ project, index }) => {
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
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/8 group-hover:border-white/15 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
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
      .project-card { animation: cardFade 0.6s cubic-bezier(0.16,1,0.3,1) both; }
    `}</style>

    <section id="projects" className="py-24 bg-[#0f0f0f]/80">
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-gray-500 to-white animate-gradient">
              Proyectos
            </span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
          <p className="text-white/35 mt-6 text-sm max-w-md mx-auto leading-relaxed">
            Proyectos que demuestran mis habilidades en desarrollo web full stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={p.id} className="relative p-0.5 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-white via-gray-500 to-white animate-gradient bg-size-[200%_auto] z-0" />
              <div className="relative z-10 h-full w-full bg-white dark:bg-gray-900 rounded-xl">
                <ProjectCard project={p} index={i} />
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://github.com/YersonRodriguez05" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white/35 hover:text-white text-sm transition-all duration-300 border border-white/8 hover:border-white/25 px-6 py-3 rounded-xl hover:bg-white/3">
            <Github className="w-4 h-4" />
            <span>Ver más en GitHub</span>
          </a>
        </div>
      </div>
      <div className="w-24 h-0.5 bg-white/20 mx-auto rounded-full mt-20" />
    </section>
  </>
);

export default Projects;