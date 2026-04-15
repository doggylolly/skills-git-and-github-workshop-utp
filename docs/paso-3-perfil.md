# Paso 3 — Agrega tu Perfil 🧑‍💻

## Estructura del archivo de perfil

Tu perfil se escribe en un archivo **Markdown** con información en formato **YAML** al inicio (llamado "front matter"):

```yaml
---
name: Tu Nombre Completo
career: Tu Carrera
semester: Tu semestre
description: Una descripción sobre ti
hobbies: Tus hobbies
image: https://url-de-tu-foto.jpg
github: tu-usuario-github
---
```

---

## Actividades

### 1. Asegúrate de estar en tu rama

```bash
git checkout add-profile/<tu-usuario>
```

### 2. Copia la plantilla

```bash
cp participants/_template.md participants/Tu-Nombre.md
```

Usa guiones en lugar de espacios en el nombre del archivo. Por ejemplo: `Juan-Perez.md`.

### 3. Edita tu perfil

Abre el archivo con VS Code u otro editor y completa los campos:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| `name` | Tu nombre completo | `Juan Pérez` |
| `career` | Tu carrera universitaria | `Ingeniería de Software` |
| `semester` | Tu semestre actual | `5to semestre` |
| `description` | 2-3 oraciones sobre ti | Tu bio personal |
| `hobbies` | Tus intereses, separados por comas | `Gaming, Música, Senderismo` |
| `image` | URL de tu foto de perfil | `https://github.com/<tu-usuario>.png` |
| `github` | Tu usuario de GitHub (sin la URL) | `tu-usuario` |

> **Tip para la foto:** Puedes usar tu avatar de GitHub directamente: `https://github.com/<tu-usuario>.png`

### 4. Verifica tu tarjeta localmente

Con `npm start` corriendo, actualiza **http://localhost:8080** — deberías ver tu tarjeta de perfil en el sitio.

---

## ✅ ¿Cómo saber si completé este paso?

- Tu tarjeta aparece correctamente en `http://localhost:8080`
- El archivo `participants/Tu-Nombre.md` tiene todos los campos completados

---

⬅️ **Anterior:** [Paso 2 — Crea tu Rama](./paso-2-rama.md) &nbsp;&nbsp; ➡️ **Siguiente:** [Paso 4 — Commit y Push](./paso-4-commit-push.md)
