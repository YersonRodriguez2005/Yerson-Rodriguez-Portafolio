import React, { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────────
   Logos SVG inline — mismo tamaño que el texto (1em)
───────────────────────────────────────────────── */
const logos = {
  'HTML & CSS': (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4l3.6 40L24 48l14.4-4L42 4H6z" fill="#E44D26"/>
      <path d="M24 44.5l11.6-3.2 3.1-34.3H24v37.5z" fill="#F16529"/>
      <path d="M24 20h-6.3l-.4-5H24v-4.9H13.1l.3 3.5 1 10.4H24V20zm0 13.5l-.1.1-5-1.4-.3-3.6h-5l.6 7 9.8 2.7.1-.1V33.5z" fill="#EBEBEB"/>
      <path d="M24 20v4H30l-.6 6.1-5.4 1.4v5l9.8-2.7 1-11.4.3-2.4H24zm0-11V13h10.7l.3-3.5H24V9z" fill="#fff"/>
    </svg>
  ),
  'JavaScript': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
      <path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.965,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M18.402,33.156c0.503,0.894,0.958,1.65,2.075,1.65 c1.06,0,1.728-0.41,1.728-2.011V22h3.048v10.846c0,3.312-1.954,4.816-4.801,4.816c-2.577,0-4.067-1.32-4.836-2.913 L18.402,33.156z"/>
    </svg>
  ),
  'TypeScript': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="36" height="36" rx="2" fill="#3178C6"/>
      <path fill="#fff" d="M27.16 33.58v2.68c.44.22.96.39 1.57.51s1.24.18 1.92.18c.65 0 1.27-.07 1.85-.21s1.08-.36 1.51-.67.77-.71 1.02-1.2.38-1.07.38-1.74c0-.5-.07-.94-.22-1.32s-.37-.72-.66-1.02-.65-.58-1.08-.83-.93-.5-1.5-.76c-.41-.17-.76-.33-1.07-.49s-.56-.32-.77-.49-.37-.35-.48-.54-.16-.42-.16-.67c0-.23.05-.43.16-.61s.26-.33.45-.46.42-.22.69-.29.57-.1.9-.1c.24 0 .49.02.75.06s.52.1.77.19.49.2.72.34.43.3.6.49v-2.51c-.36-.14-.75-.24-1.18-.32s-.9-.11-1.41-.11c-.64 0-1.26.08-1.83.23s-1.07.39-1.49.71-.75.72-.99 1.2-.36 1.05-.36 1.69c0 .83.24 1.54.71 2.11s1.19 1.06 2.15 1.47c.43.18.82.35 1.16.53s.63.36.87.55.42.4.55.63.19.49.19.78c0 .24-.05.46-.14.65s-.24.36-.43.5-.43.25-.72.33-.62.12-1 .12c-.65 0-1.29-.12-1.93-.36s-1.2-.6-1.69-1.09zm-5.42-8.37h3.48V22.9H17.5v2.31h3.47v10.12h2.77V25.21z"/>
    </svg>
  ),
  'React': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#80DEEA" d="M24,34C11.1,34,1,29.6,1,24s10.1-10,23-10s23,4.4,23,10S36.9,34,24,34z M24,16 c-12.6,0-21,4.1-21,8s8.4,8,21,8s21-4.1,21-8S36.6,16,24,16z"/>
      <path fill="#80DEEA" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4 c3.9-3,7.4-3.9,9.8-2.5c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4 C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2 c1.7,1,4.5,0.1,7.8-2.3c3.4-2.7,6.9-6.9,9.8-11.9c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"/>
      <path fill="#80DEEA" d="M33,44.6c-2,0-4.5-1.1-7-3.2c-3.6-2.9-7.3-7.2-10.3-12.4c-3-5.2-5-10.6-5.6-15.2 c-0.7-4.9,0.3-8.4,2.8-9.8c2.4-1.4,5.9-0.5,9.8,2.5c3.6,2.8,7.3,7.2,10.3,12.4l0,0c6.4,11.1,7.7,22,3,24.8 C34.8,44.4,34,44.6,33,44.6z M22.4,7.1c-0.6,0-1.1,0.2-1.5,0.4c-1.7,1-2.3,3.8-1.8,7.8c0.6,4.3,2.5,9.4,5.4,14.4 c2.9,5,6.4,9.2,9.8,11.9c3.3,2.4,6.1,3.3,7.8,2.3c3.3-1.9,2.7-11.3-3.6-22.2l0,0c-2.9-5-6.4-9.2-9.8-11.9 C26.1,8,24,7.1,22.4,7.1z"/>
      <circle cx="24" cy="24" r="4" fill="#80DEEA"/>
    </svg>
  ),
  'TailwindCSS': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#00BCD4" d="M24 9.5C17.1 9.5 12.9 13 12 20c1.5-2 3.2-2.75 5.3-2.25 1.15.29 1.97 1.13 2.88 2.06C21.65 21.4 23.37 23.2 27 23.2c6.9 0 11.1-3.5 12-10.5-1.5 2-3.2 2.75-5.3 2.25-1.15-.29-1.97-1.13-2.88-2.06C29.35 11.3 27.63 9.5 24 9.5zM15 23.3c-6.9 0-11.1 3.5-12 10.5 1.5-2 3.2-2.75 5.3-2.25 1.15.29 1.97 1.13 2.88 2.06C12.65 35.2 14.37 37 18 37c6.9 0 11.1-3.5 12-10.5-1.5 2-3.2 2.75-5.3 2.25-1.15-.29-1.97-1.13-2.88-2.06C20.35 25.1 18.63 23.3 15 23.3z"/>
    </svg>
  ),
  'Material UI': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <polygon fill="#29B6F6" points="3,28 3,12 18,3 33,12 33,20 18,11"/>
      <polygon fill="#0288D1" points="33,12 33,28 18,37 3,28 3,20 18,29"/>
      <polygon fill="#0288D1" points="33,28 45,21 45,35 33,42"/>
      <polygon fill="#01579B" points="33,28 33,42 18,37"/>
      <polygon fill="#0288D1" points="45,21 33,14 33,28"/>
    </svg>
  ),
  'Node.js / Express': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#388E3C" d="M24,3C12.4,3,3,12.4,3,24s9.4,21,21,21s21-9.4,21-21S35.6,3,24,3z M22.6,37.7c-3.4,0-5.3-1.6-6.3-3.5 l2.6-1.5c0.7,1.2,1.5,2.1,3.1,2.1c1.3,0,2.1-0.6,2.1-1.6c0-1.1-0.9-1.5-2.3-2.2l-0.8-0.3c-2.3-1-3.8-2.2-3.8-4.7 c0-2.3,1.8-4.1,4.6-4.1c2,0,3.4,0.7,4.5,2.5l-2.5,1.6c-0.5-0.9-1.1-1.3-2-1.3c-0.9,0-1.5,0.6-1.5,1.3c0,0.9,0.6,1.3,1.9,1.9 l0.8,0.3C26,30.5,27.5,31.7,27.5,34C27.5,36.6,25.4,37.7,22.6,37.7z M35.7,37.4c-3.9,0-6.8-1.9-8.1-5.3l2.6-1.5 c0.9,2.3,2.7,3.6,4.7,3.6c2,0,3.3-1,3.3-2.4c0-1.6-1.3-2.2-3.5-3.1l-1.2-0.5c-3.5-1.5-5.8-3.4-5.8-7.4c0-3.7,2.8-6.5,7.2-6.5 c3.1,0,5.3,1.1,6.9,3.9l-2.5,1.6c-0.8-1.5-1.8-2.1-3.2-2.1c-1.4,0-2.4,0.9-2.4,2.1c0,1.5,0.9,2.1,3,3l1.2,0.5 C42,25.1,44,27,44,31.3C44,35.6,40.7,37.4,35.7,37.4z"/>
    </svg>
  ),
  'PHP': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="24" rx="21" ry="12" fill="#7E57C2"/>
      <path fill="#fff" d="M13.6 19h-3l-2.1 10h2.1l.5-2.4h1.3c2.4 0 3.9-1.2 4.3-3.2.4-1.9-.7-4.4-3.1-4.4zm-.3 5.4h-1l.6-3.1h.8c1 0 1.5.5 1.3 1.6-.1 1-.8 1.5-1.7 1.5zM27.7 19H25l-.8 3.8H22l.8-3.8h-2.7l-2.1 10h2.7l.8-3.8h2.2l-.8 3.8h2.7l2.1-10zm7.1 0h-3l-2.1 10h2.1l.5-2.4h1.3c2.4 0 3.9-1.2 4.3-3.2.4-1.9-.7-4.4-3.1-4.4zm-.3 5.4h-1l.6-3.1h.8c1 0 1.5.5 1.3 1.6-.1 1-.8 1.5-1.7 1.5z"/>
    </svg>
  ),
  'MySQL / PostgreSQL': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#00BCD4" d="M24 4C13 4 4 8.5 4 14v20c0 5.5 9 10 20 10s20-4.5 20-10V14C44 8.5 35 4 24 4z"/>
      <ellipse cx="24" cy="14" rx="20" ry="8" fill="#006064"/>
      <path fill="#00838F" d="M44 14c0 4.4-9 8-20 8S4 18.4 4 14"/>
      <path fill="#00BCD4" d="M44 24c0 4.4-9 8-20 8S4 28.4 4 24"/>
      <ellipse cx="24" cy="14" rx="20" ry="8" fill="none" stroke="#006064" strokeWidth="1"/>
    </svg>
  ),
  'Vite': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#646CFF" d="M44.1 9.4L25.7 43c-.4.7-1.4.7-1.8 0l-3.2-5.7L41 7.9c.6-1 2.1-.5 2.1.7l1 .8z"/>
      <path fill="#BD34FE" d="M34.5 9.4L18.8 38.9l-8.5-15c-.4-.7.1-1.5.9-1.5h5.2L25 6.3c.5-.9 1.8-.9 2.3 0l7.2 13.1z"/>
      <path fill="#646CFF" d="M5.5 22.4h5.7l8.5 15-3.3 5.7c-.4.7-1.4.7-1.8 0L5.1 23.9c-.4-.8.1-1.5.9-1.5z"/>
    </svg>
  ),
  'Git & GitHub': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#F4511E" d="M44.6 22.6L25.4 3.4c-.8-.8-2-.8-2.8 0l-4 4 5 5c1.2-.4 2.5-.1 3.4.8.9.9 1.2 2.2.8 3.4l4.8 4.8c1.2-.4 2.5-.1 3.4.8 1.3 1.3 1.3 3.3 0 4.6-1.3 1.3-3.3 1.3-4.6 0-.9-.9-1.2-2.3-.7-3.5l-4.5-4.5v11.8c.3.2.7.4.9.7 1.3 1.3 1.3 3.3 0 4.6-1.3 1.3-3.3 1.3-4.6 0-1.3-1.3-1.3-3.3 0-4.6.3-.3.7-.5 1.1-.7V19.3c-.4-.2-.8-.4-1.1-.7-1-.9-1.3-2.3-.8-3.5l-4.9-4.9-13 13c-.8.8-.8 2 0 2.8l19.2 19.2c.8.8 2 .8 2.8 0L44.6 25.4c.8-.8.8-2 0-2.8z"/>
    </svg>
  ),
  'Vercel': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M24 4L44 40H4L24 4z"/>
    </svg>
  ),
  'Postman': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#FF6C37"/>
      <path fill="#fff" d="M30.5 17.5c-3.3-3.3-8.7-3.3-12 0-2.8 2.8-3.2 7-1.3 10.2l-4.5 4.5 1.4 1.4 4.5-4.5c3.2 1.9 7.4 1.5 10.2-1.3 3.2-3.3 3.2-8.6-.3-12.3zm-1.4 10.6c-2.5 2.5-6.5 2.5-9 0s-2.5-6.5 0-9 6.5-2.5 9 0 2.5 6.6 0 9z"/>
      <circle cx="27" cy="21" r="2" fill="#FF6C37"/>
    </svg>
  ),
  'Excalidraw': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="40" height="40" rx="6" fill="#1e1e2e"/>
      <path fill="#a277ff" d="M12 36l8-20 4 10 4-6 8 16H12z" opacity="0.8"/>
      <circle cx="32" cy="14" r="4" fill="#61efce" opacity="0.9"/>
    </svg>
  ),
  'Draw.io': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="40" height="40" rx="4" fill="#f08705"/>
      <rect x="14" y="10" width="20" height="12" rx="2" fill="none" stroke="#fff" strokeWidth="2"/>
      <rect x="14" y="26" width="20" height="12" rx="2" fill="none" stroke="#fff" strokeWidth="2"/>
      <line x1="24" y1="22" x2="24" y2="26" stroke="#fff" strokeWidth="2"/>
    </svg>
  ),
  'Visual Studio Code': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#1565C0" d="M34 3.5l-20 20.5-8-6L3 21v6l3 3.5-3 3.5v6l3 3.5 8-6 20 20.5 8-3.5V7z"/>
      <path fill="#1E88E5" d="M34 3.5v41l8-3.5V7z"/>
      <path fill="#90CAF9" d="M34 24L14 43.5 6 37.5l19-13.5L6 10.5l8-6z"/>
    </svg>
  ),
  'Xampp': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#FB7800"/>
      <text x="24" y="30" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="monospace">X</text>
    </svg>
  ),
  'MySQL Workbench': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#00BCD4" d="M24 4C13 4 4 8.5 4 14v20c0 5.5 9 10 20 10s20-4.5 20-10V14C44 8.5 35 4 24 4z"/>
      <ellipse cx="24" cy="14" rx="20" ry="8" fill="#006064"/>
      <path fill="#00838F" d="M44 14c0 4.4-9 8-20 8S4 18.4 4 14"/>
    </svg>
  ),
  'Documentación Técnica': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#1565C0" d="M10 4h20l12 12v28H10z"/>
      <path fill="#1E88E5" d="M30 4l12 12H30z"/>
      <rect x="16" y="22" width="16" height="2" rx="1" fill="#fff" opacity="0.8"/>
      <rect x="16" y="28" width="16" height="2" rx="1" fill="#fff" opacity="0.8"/>
      <rect x="16" y="34" width="10" height="2" rx="1" fill="#fff" opacity="0.8"/>
    </svg>
  ),
  'IA / Prompting': (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" fill="none" stroke="#a277ff" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="6" fill="#a277ff" opacity="0.7"/>
      <circle cx="24" cy="10" r="2.5" fill="#61efce"/>
      <circle cx="24" cy="38" r="2.5" fill="#61efce"/>
      <circle cx="10" cy="24" r="2.5" fill="#61efce"/>
      <circle cx="38" cy="24" r="2.5" fill="#61efce"/>
      <line x1="24" y1="18" x2="24" y2="12.5" stroke="#a277ff" strokeWidth="1.5" opacity="0.6"/>
      <line x1="24" y1="30" x2="24" y2="35.5" stroke="#a277ff" strokeWidth="1.5" opacity="0.6"/>
      <line x1="18" y1="24" x2="12.5" y2="24" stroke="#a277ff" strokeWidth="1.5" opacity="0.6"/>
      <line x1="30" y1="24" x2="35.5" y2="24" stroke="#a277ff" strokeWidth="1.5" opacity="0.6"/>
    </svg>
  ),
};

const levelToPercent = {
  'Avanzado':       92,
  'Intermedio Alto': 72,
  'Intermedio':     55,
  'Básico':         35,
};

const skills = [
  { name: 'HTML & CSS',            level: 'Avanzado',         category: 'Frontend' },
  { name: 'JavaScript',            level: 'Avanzado',         category: 'Frontend' },
  { name: 'TypeScript',            level: 'Intermedio',       category: 'Frontend' },
  { name: 'React',                 level: 'Avanzado',         category: 'Frontend' },
  { name: 'TailwindCSS',           level: 'Avanzado',         category: 'Frontend' },
  { name: 'Material UI',           level: 'Avanzado',         category: 'Frontend' },
  { name: 'Node.js / Express',     level: 'Avanzado',         category: 'Backend'  },
  { name: 'PHP',                   level: 'Intermedio',       category: 'Backend'  },
  { name: 'MySQL / PostgreSQL',    level: 'Intermedio Alto',  category: 'Backend'  },
  { name: 'Vite',                  level: 'Intermedio Alto',  category: 'Herramientas' },
  { name: 'Git & GitHub',          level: 'Intermedio Alto',  category: 'Herramientas' },
  { name: 'Vercel',                level: 'Intermedio',       category: 'Herramientas' },
  { name: 'Postman',               level: 'Intermedio',       category: 'Herramientas' },
  { name: 'Excalidraw',            level: 'Intermedio',       category: 'Herramientas' },
  { name: 'Draw.io',               level: 'Intermedio',       category: 'Herramientas' },
  { name: 'Visual Studio Code',    level: 'Avanzado',         category: 'Herramientas' },
  { name: 'Xampp',                 level: 'Intermedio Alto',  category: 'Herramientas' },
  { name: 'MySQL Workbench',       level: 'Intermedio',       category: 'Herramientas' },
  { name: 'Documentación Técnica', level: 'Avanzado',         category: 'Herramientas' },
  { name: 'IA / Prompting',        level: 'Avanzado',         category: 'Herramientas' },
];

const categories = ['Todos', 'Frontend', 'Backend', 'Herramientas'];

const levelColors = {
  'Avanzado':        'text-white/70',
  'Intermedio Alto': 'text-white/50',
  'Intermedio':      'text-white/35',
  'Básico':          'text-white/25',
};

const SkillBar = ({ skill, animate, index }) => {
  const pct = levelToPercent[skill.level] ?? 50;
  const logo = logos[skill.name];

  return (
    <div className="skill-item" style={{ animationDelay: `${index * 0.06}s` }}>
      <div className="flex justify-between items-center mb-2">
        {/* Nombre + logo */}
        <div className="flex items-center gap-1.5">
          {logo && (
            <span
              className="inline-flex items-center justify-center shrink-0 opacity-80"
              style={{ width: '1em', height: '1em', fontSize: 'inherit' }}
            >
              {logo}
            </span>
          )}
          <span className="text-white/70 text-sm font-medium">{skill.name}</span>
        </div>
        {/* Nivel */}
        <span className={`text-xs font-mono ${levelColors[skill.level] ?? 'text-white/35'}`}>
          {skill.level}
        </span>
      </div>

      {/* Barra */}
      <div className="h-0.75 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: animate ? `${pct}%` : '0%',
            background: 'linear-gradient(90deg, #ffffff 0%, #555555 100%)',
            transition: `width 1.3s cubic-bezier(0.16,1,0.3,1) ${index * 0.06}s`,
            boxShadow: animate ? '0 0 8px rgba(255,255,255,0.3)' : 'none',
          }}
        />
      </div>
    </div>
  );
};

/* ──────────────────────────────── */

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [animate,        setAnimate]        = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 80);
    }, 0);
    return () => clearTimeout(t);
  }, [activeCategory]);

  const filtered = activeCategory === 'Todos'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const stackBadges = ['React', 'Node.js', 'Express', 'TailwindCSS/Material UI',
    'MySQL/PostgreSQL', 'GitHub', 'Vite', 'Scrum'];

  return (
    <>
      <style>{`
        @keyframes gradientMove {
          0%,100% { background-position: 0% 50%; }
          50%     { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 400% 100%;
          animation: gradientMove 8s cubic-bezier(0.45,0.05,0.55,0.95) infinite;
        }
        @keyframes skillFade {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .skill-item { animation: skillFade 0.4s ease both; }

        .cat-pill {
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          white-space: nowrap; font-size: 0.78rem; letter-spacing: 0.04em;
        }
        .cat-pill.active {
          background: #ffffff; color: #121212; border-color: #ffffff; font-weight: 600;
        }
        .cat-pill:not(.active):hover {
          border-color: rgba(255,255,255,0.35); color: rgba(255,255,255,0.75);
        }

        .tech-badge { transition: all 0.25s ease; cursor: default; }
        .tech-badge:hover {
          background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.9); transform: translateY(-2px);
        }
      `}</style>

      <section ref={sectionRef} id="skills" className="py-24 bg-[#0e0e0e]/80">
        <div className="container mx-auto max-w-4xl px-6 relative z-10">

          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-gray-500 to-white animate-gradient">
                Habilidades
              </span>
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full" />
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cat-pill px-5 py-1.5 rounded-full border ${
                  activeCategory === cat ? 'active border-white' : 'border-white/12 text-white/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de habilidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
            {filtered.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} animate={animate} index={i} />
            ))}
          </div>

          {/* Stack badges */}
          <div className="mt-16">
            <p className="text-center text-white/18 text-xs tracking-[0.3em] uppercase mb-6">
              Stack tecnológico
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {stackBadges.map((tech) => (
                <span
                  key={tech}
                  className="tech-badge px-3 py-1.5 bg-white/4 border border-white/8 rounded-lg text-white/40 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-24 h-0.5 bg-white/20 mx-auto rounded-full mt-20" />
      </section>
    </>
  );
};

export default Skills;