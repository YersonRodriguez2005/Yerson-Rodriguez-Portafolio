import React, { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Wrench,
  CheckCircle2,
  Sparkles,
  Cpu,
  Layers,
  Terminal
} from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Code2 className="size-5 text-sky-400" />,
    description: 'Interfaces reactivas, modulares y de alto rendimiento orientadas a UX.',
    skills: [
      { name: 'React.js', detail: 'Hooks, Context API, Code Splitting & Lazy Loading' },
      { name: 'Tailwind CSS (v4)', detail: 'Sistemas de diseño, microinteracciones y Dark Mode' },
      { name: 'JavaScript (ES6+)', detail: 'Asincronía, manipulación del DOM y tipado moderno' },
      { name: 'Diseño Responsivo', detail: 'Patrones adaptables Mobile-First y Touch Targets' },
      { name: 'UI / UX Design', detail: 'Jerarquía visual, accesibilidad (a11y) y Glassmorphism' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs REST',
    icon: <Server className="size-5 text-emerald-400" />,
    description: 'Arquitecturas robustas de servidor con seguridad y control de acceso.',
    skills: [
      { name: 'Node.js & Express', detail: 'Endpoints RESTful modulares, routers y controladores' },
      { name: 'Autenticación JWT', detail: 'Seguridad basada en tokens, roles y protección de rutas' },
      { name: 'Arquitectura Modular', detail: 'Separación estricta de responsabilidades (Servicios/Controladores)' },
      { name: 'Pruebas de API', detail: 'Validación de contratos y pruebas automatizadas con Postman' },
    ],
  },
  {
    id: 'database',
    title: 'Bases de Datos Relacionales',
    icon: <Database className="size-5 text-indigo-400" />,
    description: 'Modelado y optimización de datos para alta concurrencia.',
    skills: [
      { name: 'PostgreSQL', detail: 'Esquemas relacionales, llaves foráneas y consultas analíticas' },
      { name: 'MySQL', detail: 'Procedimientos, índices y optimización de tiempos de respuesta' },
      { name: 'Optimización SQL', detail: 'Consultas complejas y consistencia transaccional' },
      { name: 'Neon & Cloud DBs', detail: 'Conexión resiliente a bases de datos serverless en la nube' },
    ],
  },
  {
    id: 'tools',
    title: 'Herramientas & Despliegue',
    icon: <Wrench className="size-5 text-amber-400" />,
    description: 'Flujo de integración continua, control de versiones y entornos cloud.',
    skills: [
      { name: 'Git & GitHub', detail: 'Flujos Git Flow, Pull Requests y Code Reviews en equipo' },
      { name: 'Metodología Scrum', detail: 'Sprints iterativos, backlog dinámico y entregas continuas' },
      { name: 'Despliegue Cloud', detail: 'Despliegues en Vercel, Render y servidores VPS' },
      { name: 'Capacitor / Mobile', detail: 'Compilación de aplicaciones híbridas para Android (APK)' },
    ],
  },
];

const CORE_STACK = [
  'React.js',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MySQL',
  'JWT',
  'Git / GitHub',
  'Scrum',
];

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

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section
      id="skills"
      className="section-deferred relative py-24 px-4 bg-transparent text-zinc-100 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Cabecera de la sección */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs text-zinc-400 mb-3 backdrop-blur-md">
            <Sparkles className="size-3 text-emerald-400" />
            <span>Stack & Competencias Técnicas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 select-none">
            <AnimatedTitle text="Habilidades Profesionales" baseDelay={0} />
          </h2>
          <div className="w-16 h-1 bg-white/20 mx-auto rounded-full mb-6" />
          <p className="max-w-xl mx-auto text-sm text-zinc-400 leading-relaxed">
            Conjunto de tecnologías y metodologías probadas en entornos de producción y plataformas web activas.
          </p>
        </div>

        {/* Stack Central Destacado */}
        <div className="mb-14 p-6 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2.5 mb-4 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Terminal className="size-4 text-emerald-400" />
            <span>Stack Principal en Producción</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {CORE_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-zinc-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Filtros por Dominio */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center p-1 rounded-xl bg-zinc-900/80 border border-white/10 backdrop-blur-md gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'all'
                  ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
                }`}
            >
              Todo el Stack
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${activeTab === cat.id
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla de Dominios y Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/10 p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {group.title}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white/2 border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-zinc-200">
                          {skill.name}
                        </span>
                        <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;