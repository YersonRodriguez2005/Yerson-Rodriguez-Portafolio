<div align="center">

# 🌐 Portafolio Personal — Yerson Fabian Garzon Rodriguez

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br/>

> **Portafolio web personal** desarrollado con React + Vite + TailwindCSS.  
> Diseño oscuro, animaciones CSS personalizadas y partículas flotantes.

<br/>

![Preview del portafolio](https://via.placeholder.com/900x450/121212/ffffff?text=Mi+Portafolio+%E2%80%94+Yerson+Rodriguez)

</div>

---

## ✨ Características

- 🎨 **Diseño oscuro** — Paleta `#121212` con gradientes blanco/gris
- 🔤 **Animación de letras** — Logo y nombre con pulso dinámico blanco ↔ gris letra por letra
- 🫧 **Partículas globales** — 40 orbes flotando hacia arriba en toda la página con `position: fixed`
- ⌨️ **Typewriter effect** — Roles rotativos con animación de escritura y borrado
- 📱 **Totalmente responsive** — Mobile-first, menú hamburguesa con animación
- 🧭 **Navbar inteligente** — Detecta sección activa al hacer scroll + glassmorphism
- 🃏 **Cards animadas** — Bordes con gradiente animado al hacer hover
- 📊 **Barras de habilidades** — Animadas al entrar en viewport con IntersectionObserver
- 🏅 **Sección de certificados** — Dinámica con filtros por categoría y colapso
- 📄 **Descarga de CV** — Botón con efecto shimmer y pulso

---

## 🗂️ Estructura del Proyecto

```
portafolio/
├── public/
│   └── PDF/
│       └── CV.pdf                  # CV descargable
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navbar fija con logo animado
│   │   ├── Presentation.jsx        # Hero section con typewriter y orbes
│   │   ├── About.jsx               # Sobre mí con cards de habilidades blandas
│   │   ├── Projects.jsx            # Grid de proyectos con cards hover
│   │   ├── Skills.jsx              # Barras de progreso + logos por tecnología
│   │   ├── Certificates.jsx        # Certificados filtrados por categoría
│   │   └── Footer.jsx              # Footer con contacto y navegación
│   ├── App.jsx                     # Componente raíz + GlobalOrbs (partículas)
│   └── main.jsx                    # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso | Nivel |
|---|---|---|
| ![React](https://img.shields.io/badge/-React-20232A?logo=react&logoColor=61DAFB) | Framework UI principal | Avanzado |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white) | Build tool y dev server | Intermedio Alto |
| ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white) | Estilos utilitarios | Avanzado |
| ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-black?logo=framer&logoColor=white) | Animaciones en About.jsx | Intermedio |
| ![CSS3](https://img.shields.io/badge/-CSS3_Animations-1572B6?logo=css3&logoColor=white) | Animaciones personalizadas | Avanzado |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) | Lógica e interactividad | Avanzado |

---

## 🚀 Instalación y uso local

### Prerrequisitos

- Node.js `>= 18.x`
- npm o yarn

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/YersonRodriguez05/portafolio.git

# 2. Entrar al directorio
cd portafolio

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Build de producción en /dist
npm run preview   # Preview del build de producción
```

---

## 📦 Dependencias principales

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.400.x"
  },
  "devDependencies": {
    "vite": "^5.x",
    "@vitejs/plugin-react": "^4.x",
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x"
  }
}
```

---

## 📐 Secciones del Portafolio

### 🏠 Inicio (Presentation)
Hero section con el nombre animado letra por letra, efecto typewriter con 4 roles rotativos, íconos sociales y botones CTA. Fondo con 40 orbes flotantes generados dinámicamente.

### 👤 Sobre Mí (About)
Cuatro cards con borde gradiente animado describiendo: Desarrollo Web, Formación Académica, Trabajo en Equipo y Enfoque & Objetivos. Incluye botón de descarga del CV.

### 🧩 Proyectos (Projects)
Grid de proyectos en cards con:
- Borde que se ilumina al hover
- Tags de tecnologías usadas
- Links a GitHub y demo en vivo
- Indicador de proyectos destacados

### 💡 Habilidades (Skills)
Barras de progreso animadas al entrar en viewport con:
- Logo SVG de cada tecnología inline
- Filtros por categoría (Frontend / Backend / Herramientas)
- Nivel textual (Avanzado / Intermedio Alto / Intermedio)
- Badges del stack tecnológico

### 🏅 Certificados (Certificates)
14 certificaciones organizadas con:
- Filtros por categoría
- Stats (total, categorías, años activo)
- Botón "Ver todos / Ver menos"
- Indicador de certificados destacados

### 📬 Contacto (Footer)
Footer con datos de contacto completos, navegación rápida, redes sociales y botón scroll-to-top.

---

## 🎨 Sistema de Diseño

```
Colores principales:
  Fondo base:        #121212
  Fondo alternativo: #0e0e0e
  Fondo footer:      #0a0a0a
  Texto principal:   #ffffff
  Texto secundario:  rgba(255,255,255,0.4–0.7)
  Acentos:           Gradiente linear white → #555555

Tipografía:
  Sistema: font-sans (Inter / system-ui)
  Pesos: 400 (normal), 500 (medium), 600 (semibold), 800 (extrabold)

Animaciones:
  charPulse    — Pulso blanco↔gris letra por letra (logo + nombre)
  orbRise      — Partículas flotando hacia arriba (fixed, z-index:0)
  gradientMove — Gradiente de fondo en motion (títulos de sección)
  letterBounce — Bounce escalonado en links del nav al hover
  skillFade    — Fade-in lateral en las barras de habilidades
```

---

## 📱 Diseño Responsive

| Breakpoint | Layout |
|---|---|
| `< 768px` (mobile) | 1 columna, nav hamburguesa |
| `≥ 768px` (tablet) | 2 columnas en grids |
| `≥ 1024px` (desktop) | Layout completo, 3 columnas en certificados |

---

## 🌐 Deploy

El portafolio está optimizado para deploy en **Vercel**:

```bash
# Build de producción
npm run build

# El directorio /dist está listo para deploy
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📬 Contacto

<div align="center">

[![Email](https://img.shields.io/badge/Email-rodriguezyerson2005@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rodriguezyerson2005@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-YersonRodriguez-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YersonRodriguez)
[![GitHub](https://img.shields.io/badge/GitHub-YersonRodriguez05-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YersonRodriguez05)
[![Phone](https://img.shields.io/badge/WhatsApp-3216393715-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/573216393715)

📍 Neiva, Huila — Colombia

</div>

---

## 📄 Licencia

Este proyecto es de uso personal. Si deseas usar parte del código como inspiración, por favor da crédito al autor.

---

<div align="center">

Hecho con ❤️ por **Yerson Fabian Garzon Rodriguez**

⭐ Si te gustó el proyecto de mi portafolio, considera darle una estrella al repositorio

</div>