# Taller de Git y GitHub — Universidad Tecnológica de Panamá 🇵🇦

<div align="center">
  <img src="https://octodex.github.com/images/Professortocat_v2.png" alt="Professortocat" width="200">
  
  **¡Aprende Git y GitHub contribuyendo a un proyecto real!**
  
  Tu tarjeta de perfil aparecerá en el sitio del taller cuando tu PR sea aprobado.
</div>

---

## ¿Qué aprenderás?

Este ejercicio te enseña el flujo de trabajo real de colaboración con Git y GitHub:

```
Fork → Clone → Branch → Commit → Push → Pull Request
```

Cada paso está guiado automáticamente por GitHub Actions — un bot te dará instrucciones y retroalimentación en tiempo real.

## Cómo empezar

<div align="center">

[![Comenzar Ejercicio](https://img.shields.io/badge/Comenzar%20Ejercicio-brightgreen?style=for-the-badge&logo=github)](../../issues/1)

</div>

1. **Haz fork** de este repositorio (botón en la esquina superior derecha)
2. Ve a la pestaña **Actions** de tu fork y activa los workflows
3. Ejecuta el workflow **"Paso 0 - Iniciar Ejercicio"** manualmente
4. Sigue las instrucciones que aparecerán en el issue creado automáticamente

## Estructura del Proyecto

```
Git-GitHub-Workshop-UTP/
├── participants/          ← Aquí agregas tu perfil
│   └── _template.md       ← Plantilla de ejemplo
├── _includes/             ← Plantillas del sitio
├── assets/                ← Estilos y logos
└── index.njk              ← Página principal del sitio
```

## Para el Administrador del Taller

### Configuración inicial

1. Crea el repositorio en GitHub (o usa este como plantilla)
2. Vincula el proyecto a Vercel: `vercel link`
3. Agrega los siguientes secrets en la configuración del repositorio:
   - `VERCEL_TOKEN` — Token de API de Vercel
   - `VERCEL_ORG_ID` — ID de tu organización en Vercel
   - `VERCEL_PROJECT_ID` — ID del proyecto en Vercel

### Flujo del ejercicio

| Paso | Trigger | Acción |
|------|---------|--------|
| 0 | `workflow_dispatch` | Crea issue, publica Paso 1 |
| 1 | Push a `add-profile/*` | Valida nombre de rama |
| 2 | Push con `participants/*.md` | Valida campos del perfil |
| 3 | Push con mensaje correcto | Publica instrucciones PR + revisión final |
| CI | PR abierto | Valida perfil + genera preview Vercel |

### Revisión de PRs

Cuando un estudiante abre un PR:
1. El CI valida automáticamente el perfil y comenta el resultado
2. Vercel genera un preview URL y lo comenta en el PR
3. El estudiante revisa el preview y solicita revisión
4. Tú revisas y haces merge → el perfil aparece en el sitio en vivo

---

## Tecnologías

- [Eleventy](https://www.11ty.dev/) — Generador de sitios estáticos
- [Tailwind CSS](https://tailwindcss.com/) — Framework de estilos
- [Vercel](https://vercel.com/) — Plataforma de despliegue
- [GitHub Actions](https://github.com/features/actions) — CI/CD y skill exercise

---

*© 2025 Universidad Tecnológica de Panamá & GitHub*
