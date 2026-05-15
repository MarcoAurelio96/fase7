![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-639?style=for-the-badge&logo=css&logoColor=fff)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFF)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

# 🔐 Sistema de Autenticación Híbrida con Next.js
> Autenticación robusta y segura combinando OAuth y credenciales personalizadas.

Proyecto completo de implementación de un sistema de inicio de sesión utilizando Next.js (App Router). Protege rutas privadas y gestiona sesiones de usuario integrando autenticación de terceros (Google) y autenticación tradicional (Email/Contraseña) respaldada por Firebase.

| Despliegue | URL |
|------------|-----|
| Frontend | [Vercel](https://fase7.vercel.app/) |

---

## Características

- Inicio de sesión con Google mediante OAuth 2.0.
- Registro y autenticación tradicional (Email y Contraseña) gestionado por Firebase.
- Protección de rutas a nivel de servidor (Edge) mediante el Middleware de Next.js.
- Arquitectura moderna: Uso de *Server Components* para validación segura de sesiones y *Client Components* para interactividad en formularios.
- Interfaz moderna, accesible y totalmente responsiva.
- Documentación técnica sobre prácticas de seguridad.

---

## Tecnologías

| Frontend | Uso |
|----------|-----|
| Next.js 14/15 | Framework principal de React (App Router). |
| Tailwind CSS | Estilos mediante clases utilitarias. |
| Shadcn UI | Componentes de interfaz accesibles y personalizables (Cards, Inputs, Buttons). |

| Backend & Auth | Uso |
|---------|-----|
| NextAuth.js | Motor central de autenticación y gestión de sesiones. |
| Google Provider | Proveedor de identidad delegada (OAuth). |
| Firebase Auth | Base de datos de usuarios y validación segura de credenciales. |

| Auxiliares | Uso |
|------------|-----|
| TypeScript | Tipado estricto para prevención de errores. |
| ESLint | Análisis de código estático y buenas prácticas. |
| Git/GitHub | Control de versiones estructurado. |

---

## Estructura del proyecto

```text
project/
├── app/
│   ├── api/auth/[...nextauth]/ # Endpoints y configuración del motor NextAuth
│   ├── dashboard/              # Área privada VIP (Server Component)
│   ├── login/                  # Interfaz de inicio de sesión dual
│   ├── register/               # Formulario de registro (Firebase SDK)
│   ├── layout.tsx              # Estructura maestra del HTML
│   └── page.tsx                # Landing page principal
├── components/
│   ├── ui/                     # Componentes instalados de Shadcn UI
│   └── navbar.tsx              # Barra de navegación superior (Client Component)
├── docs/seguridad/             # Documentación teórica del proyecto
│   ├── credenciales.md         # Teoría sobre Bcrypt, Argon2 y Salts
│   ├── middleware.md           # Diferencias de seguridad (Servidor vs Cliente)
│   └── oauth.md                # Teoría sobre flujos delegados
├── lib/
│   ├── firebase.ts             # Inicialización segura del cliente de Firebase
│   └── utils.ts                # Utilidades de Tailwind
├── public/                     # Archivos estáticos y recursos
├── middleware.ts               # Lógica de protección de rutas (Edge computing)
├── next.config.ts              # Configuración general y permisos de dominios de imágenes
└── .env.local                  # (Ignorado por Git) Claves secretas y API Keys

*Desarrollado durante las prácticas en [Corner Estudios](https://www.corner-estudios.com) — Marco Aurelio López Cubo — 2026*