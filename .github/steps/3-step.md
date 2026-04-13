## Paso 3: Guarda tus Cambios con Git 💾

¡Tu perfil ya existe en el repositorio! Ahora aprenderás el flujo fundamental de Git para guardar y compartir tu trabajo.

### El flujo de Git

Git tiene tres áreas de trabajo que debes entender:

```
┌─────────────────┐    git add     ┌──────────────┐    git commit    ┌────────────┐
│ Working          │ ────────────▶ │ Staging Area │ ───────────────▶ │  Historial │
│ Directory        │               │ (Index)      │                  │  (Commits) │
│ (tus archivos)   │               │              │                  │            │
└─────────────────┘               └──────────────┘                  └────────────┘
                                                                           │
                                                                      git push
                                                                           │
                                                                           ▼
                                                                  ┌─────────────────┐
                                                                  │ GitHub (Remote) │
                                                                  └─────────────────┘
```

| Comando | ¿Qué hace? |
|---------|-----------|
| `git status` | Ver qué archivos han cambiado |
| `git add <archivo>` | Agregar archivo al staging area |
| `git commit -m "mensaje"` | Guardar un snapshot de los cambios |
| `git push origin <rama>` | Enviar commits al repositorio en GitHub |

---

### 🎯 Actividades

#### 1. Verifica el estado de tus cambios

```bash
git status
```

Verás tu archivo de perfil listado como modificado o nuevo.

#### 2. Agrega tu archivo al staging area

```bash
git add participants/Tu-Nombre.md
```

Verifica que fue agregado:

```bash
git status
```

Ahora el archivo aparece en verde — está listo para el commit.

#### 3. Crea un commit con un mensaje descriptivo

El mensaje del commit debe seguir el formato: `Agregar perfil: Tu Nombre`

```bash
git commit -m "Agregar perfil: Tu Nombre"
```

> **¿Por qué buenos mensajes de commit?** Porque son el historial de tu proyecto. En equipos grandes, un buen mensaje explica *qué* cambiaste y *por qué*.

#### 4. Envía tus cambios a GitHub

```bash
git push origin add-profile/${{ login }}
```

#### 5. Verifica en GitHub

Ve a tu fork en GitHub y verás un banner amarillo que dice **"Compare & pull request"** — ¡tu rama está lista!

También puedes ver tu historial de commits:

```bash
git log --oneline
```

---

### ✅ ¿Cómo saber si completé este paso?

Cuando hagas push con el mensaje correcto, este issue se actualizará con el **Paso 4** (¡el último paso del ejercicio!).

¡Ya casi terminas! 🎉
