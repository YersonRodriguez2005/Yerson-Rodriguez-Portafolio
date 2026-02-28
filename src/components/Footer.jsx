import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <style>{`
        .footer-link {
          color: rgba(255,255,255,0.38); font-size: 0.875rem;
          transition: color 0.25s ease, padding-left 0.25s ease;
          display: inline-block;
        }
        .footer-link:hover { color: #ffffff; padding-left: 5px; }
        .social-btn {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 9px; border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.38);
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .social-btn:hover {
          border-color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.05);
          color: #fff; transform: translateY(-3px);
        }
        .scroll-top {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 9px; border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.35);
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .scroll-top:hover {
          background: #ffffff; border-color: #ffffff;
          color: #121212; transform: translateY(-3px);
        }
        .contact-line {
          display: flex; align-items: center; gap: 10px;
          color: rgba(255,255,255,0.38); font-size: 0.8125rem;
          transition: color 0.25s;
        }
        .contact-line:hover { color: rgba(255,255,255,0.75); }
        .cta-email {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; background: #ffffff; color: #121212;
          font-size: 0.78rem; font-weight: 600; border-radius: 10px;
          letter-spacing: 0.03em;
          transition: background 0.25s, transform 0.25s;
        }
        .cta-email:hover { background: #e0e0e0; transform: translateY(-2px); }
        .footer-glow {
          background: linear-gradient(90deg,
            transparent 0%, rgba(255,255,255,0.06) 30%,
            rgba(255,255,255,0.06) 70%, transparent 100%);
        }
      `}</style>

      <footer id="contact" className="bg-[#0a0a0a]/85 border-t border-white/5 relative z-10">
        <div className="container mx-auto max-w-5xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

            {/* Brand */}
            <div>
              <a href="#home" className="inline-block mb-4">
                <span className="text-white font-extrabold text-xl tracking-tight">
                  Yerson<span className="text-white/20">.</span>
                </span>
              </a>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
                Desarrollador de Software Web apasionado por crear experiencias digitales eficientes, escalables y atractivas.
              </p>
              <div className="flex items-center gap-2.5">
                {[
                  { href: 'https://github.com/YersonRodriguez05',     icon: <Github   className="w-3.5 h-3.5" /> },
                  { href: 'https://linkedin.com/in/YersonRodriguez',  icon: <Linkedin className="w-3.5 h-3.5" /> },
                  { href: 'mailto:rodriguezyerson2005@gmail.com',      icon: <Mail     className="w-3.5 h-3.5" /> },
                ].map(({ href, icon }) => (
                  <a key={href} href={href}
                     target={href.startsWith('http') ? '_blank' : undefined}
                     rel="noopener noreferrer" className="social-btn">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white/40 text-[10px] uppercase tracking-[0.25em] mb-5 font-semibold">
                Navegación
              </h4>
              <ul className="space-y-3">
                {[['Inicio','#home'],['Sobre Mí','#about'],['Proyectos','#projects'],
                  ['Habilidades','#skills'],['Certificados','#certificates']].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="footer-link">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white/40 text-[10px] uppercase tracking-[0.25em] mb-5 font-semibold">
                Contacto
              </h4>
              <div className="flex flex-col gap-4 mb-6">
                <a href="mailto:rodriguezyerson2005@gmail.com" className="contact-line">
                  <Mail className="w-3.5 h-3.5 shrink-0 text-white/25" />
                  <span className="truncate">rodriguezyerson2005@gmail.com</span>
                </a>
                <a href="tel:+573216393715" className="contact-line">
                  <Phone className="w-3.5 h-3.5 shrink-0 text-white/25" />
                  <span>+57 321 639 3715</span>
                </a>
                <div className="contact-line">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-white/25" />
                  <span>Neiva, Huila — Colombia</span>
                </div>
              </div>
              <a href="mailto:rodriguezyerson2005@gmail.com" className="cta-email">
                <Mail className="w-3 h-3" />
                Enviar mensaje
              </a>
            </div>
          </div>

          <div className="footer-glow h-px mb-8" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/18 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Yerson Fabian Garzon Rodriguez — Todos los derechos reservados.
            </p>
            <button onClick={scrollTop} className="scroll-top" aria-label="Volver arriba">
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;