import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FileDown, Code, BookOpen, Users, Target } from 'lucide-react';

const cards = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    text: 'Especializado en desarrollo frontend con React y backend con Node/Express o Python con Flask, creando aplicaciones web eficientes y con excelente experiencia de usuario.',
  },
  {
    icon: BookOpen,
    title: 'Formación Académica',
    text: 'Tecnología en Análisis y Desarrollo de Software en el SENA, con enfoque en desarrollo web y documentación técnica. Actualmente cursando Ingeniería de Software en la Corporación Universitaria Iberoamericana.',
  },
  {
    icon: Users,
    title: 'Trabajo en Equipo',
    text: 'Experiencia colaborando en entornos de equipo para desarrollar soluciones web eficientes, con comunicación efectiva y distribución organizada de tareas usando metodologías ágiles como Scrum.',
  },
  {
    icon: Target,
    title: 'Enfoque y Objetivos',
    text: 'Orientado a la optimización de procesos y mejora continua en el desarrollo de productos, con atención al detalle y enfoque en la calidad final del software.',
  },
];

const About = () => (
  <section id="about" className="py-24 min-h-screen bg-[#121212]/80 backdrop-blur-none">
    <style>{`
      @keyframes gradientMove {
        0%,100% { background-position: 0% 50%; }
        50%     { background-position: 100% 50%; }
      }
      .animate-gradient {
        background-size: 400% 100%;
        animation: gradientMove 8s cubic-bezier(0.45,0.05,0.55,0.95) infinite;
      }
      @keyframes pulseBorder {
        0%   { box-shadow: 0 0 0 0 rgba(255,255,255,0.7); }
        70%  { box-shadow: 0 0 0 10px rgba(255,255,255,0); }
        100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
      }
      .animate-button {
        position: relative; overflow: hidden;
        transition: all 0.4s ease;
      }
      .animate-button::before {
        content: ''; position: absolute; top: 0; left: -100%;
        width: 100%; height: 100%;
        background: linear-gradient(90deg,
          rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
        transition: left 0.7s ease;
      }
      .animate-button:hover::before { left: 100%; }
      .pulse-animation { animation: pulseBorder 2s infinite; }
    `}</style>

    <div className="container mx-auto max-w-4xl px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-gray-500 to-white animate-gradient">
            Sobre Mí
          </span>
        </h2>
        <div className="w-24 h-1 bg-white mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <div className="relative h-full p-0.5 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-white via-gray-500 to-white animate-gradient" />
                <div className="h-full rounded-xl bg-[#121212] relative z-10 p-6">
                  <div className="flex items-start space-x-4">
                    <Icon className="w-6 h-6 text-white shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                      <p className="text-white/75 leading-relaxed">{card.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12">
        <motion.a
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          href="/src/PDF/CV.pdf" download
          className="animate-button pulse-animation inline-flex items-center space-x-3 px-8 py-4 bg-linear-to-r from-white to-gray-300 text-[#121212] font-medium rounded-xl shadow-lg relative z-10"
        >
          <motion.div animate={{ rotate: [0,10,-10,10,0], transition: { repeat: Infinity, repeatDelay: 5, duration: 1 } }}>
            <FileDown className="w-5 h-5" />
          </motion.div>
          <span className="text-lg font-medium">Descargar CV</span>
        </motion.a>
      </div>
    </div>

    <div className="w-24 h-0.5 bg-white/20 mx-auto rounded-full mt-20" />
  </section>
);

export default About;