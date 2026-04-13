## Paso 2: Agrega tu Perfil 🧑‍💻

¡Excelente! Creaste tu rama exitosamente. Ahora aprenderás sobre **ramas en Git** y agregarás tu tarjeta de perfil al sitio del taller.

### ¿Qué es una rama (branch)?

Una **rama** es una línea de desarrollo independiente dentro de tu repositorio. Te permite trabajar en cambios sin afectar el código principal (`main`).

```
main ──────────────────────────────▶
         \
          add-profile/tu-usuario ──▶  (aquí trabajas tú)
```

> **¿Por qué usar ramas?** Para mantener `main` siempre limpio y funcional mientras desarrollas nuevas características.

### Estructura del archivo de perfil

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

### 🎯 Actividades

#### 1. Asegúrate de estar en tu rama

```bash
git checkout add-profile/${{ login }}
```

#### 2. Ve a la carpeta `participants/`

```bash
ls participants/
```

Verás un archivo `_template.md` que sirve como guía.

#### 3. Crea tu archivo de perfil

Crea un nuevo archivo con tu nombre (usa guiones en lugar de espacios):

```bash
# Ejemplo: participants/Juan-Perez.md
cp participants/_template.md participants/Tu-Nombre.md
```

#### 4. Edita tu perfil

Abre el archivo con tu editor de código favorito (VS Code recomendado) y completa los campos:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| `name` | Tu nombre completo | `Juan Pérez` |
| `career` | Tu carrera universitaria | `Ingeniería de Software` |
| `semester` | Tu semestre actual | `5to semestre` |
| `description` | 2-3 oraciones sobre ti | Tu bio personal |
| `hobbies` | Tus intereses, separados por comas | `Gaming, Música, Senderismo` |
| `image` | URL de tu foto de perfil | URL de imgur o GitHub avatar |
| `github` | Tu usuario de GitHub | `tu-usuario` |

> **Tip para la foto:** Puedes usar tu avatar de GitHub: `https://github.com/${{ login }}.png`

#### 5. Verifica tu tarjeta localmente

Con `npm start` corriendo, actualiza http://localhost:8080 — deberías ver tu tarjeta de perfil.

#### 6. Sube tu perfil

```bash
git add participants/Tu-Nombre.md
git commit -m "Agregar perfil: Tu Nombre"
git push origin add-profile/${{ login }}
```

---

### ✅ ¿Cómo saber si completé este paso?

Cuando hagas push con tu archivo de perfil en `participants/`, este issue se actualizará con las instrucciones del **Paso 3**.
