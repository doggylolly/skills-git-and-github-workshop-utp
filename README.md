# Taller de Git y GitHub — Universidad Tecnológica de Panamá 🇵🇦

<div align="center">
  <img src="https://octodex.github.com/images/Professortocat_v2.png" alt="Professortocat" width="200">

  **¡Aprende Git y GitHub contribuyendo a un proyecto real!**

  Tu tarjeta de perfil aparecerá en el sitio del taller cuando tu PR sea aprobado.
</div>

---

## ¿Qué aprenderás?

El flujo de trabajo real que usan los desarrolladores profesionales para colaborar en proyectos:

```
Fork → Clone → Branch → Commit → Push → Pull Request
```

---

## Pasos del Ejercicio

| Paso | Descripción |
|------|-------------|
| [Paso 1 — Fork y Clone](./docs/paso-1-fork-clone.md) | Crea tu copia del repositorio y descárgala localmente |
| [Paso 2 — Crea tu Rama](./docs/paso-2-rama.md) | Crea una rama de trabajo independiente |
| [Paso 3 — Agrega tu Perfil](./docs/paso-3-perfil.md) | Añade tu tarjeta de perfil al sitio del taller |
| [Paso 4 — Commit y Push](./docs/paso-4-commit-push.md) | Guarda tus cambios y súbelos a GitHub |
| [Paso 5 — Abre tu Pull Request](./docs/paso-5-pull-request.md) | Solicita integrar tu perfil al proyecto principal |

---

## Para el Administrador del Taller

### Configuración inicial

1. Haz fork o clona este repositorio en tu cuenta de GitHub
2. Vincula el proyecto a Vercel: `vercel link`
3. Agrega los siguientes secrets en **Settings → Secrets → Actions**:
   - `VERCEL_TOKEN` — Token de API de Vercel
   - `VERCEL_ORG_ID` — ID de tu organización en Vercel
   - `VERCEL_PROJECT_ID` — ID del proyecto en Vercel
   - `SURGE_TOKEN` — Token de Surge.sh para previews (`surge token`)

### Workflows activos

| Workflow | Trigger | Qué hace |
|----------|---------|----------|
| `validate-profile.yml` | PR abierto hacia `main` | Valida campos del perfil y comenta resultado |
| `preview-deploy.yml` | PR abierto hacia `main` | Despliega preview en Surge.sh y comenta URL |
| `cleanup-preview.yml` | PR cerrado | Elimina el preview de Surge.sh |
| `deploy-production.yml` | Push a `main` | Despliega el sitio en Vercel producción |

---

## Tecnologías

- [Eleventy](https://www.11ty.dev/) — Generador de sitios estáticos
- [Tailwind CSS](https://tailwindcss.com/) — Framework de estilos
- [Vercel](https://vercel.com/) — Plataforma de despliegue
- [GitHub Actions](https://github.com/features/actions) — CI/CD automático en PRs

---

*© 2025 Universidad Tecnológica de Panamá*
