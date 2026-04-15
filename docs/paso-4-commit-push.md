# Paso 4 — Commit y Push 💾

## El flujo de Git

Git tiene tres áreas de trabajo que debes entender:

```
┌──────────────────┐  git add   ┌──────────────┐  git commit  ┌────────────┐
│ Working Directory │ ─────────▶ │ Staging Area │ ───────────▶ │  Historial │
└──────────────────┘            └──────────────┘              └────────────┘
                                                                      │
                                                                 git push
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

## Actividades

### 1. Verifica el estado de tus cambios

```bash
git status
```

Verás tu archivo de perfil listado como nuevo o modificado.

### 2. Agrega tu archivo al staging area

```bash
git add participants/Tu-Nombre.md
```

Verifica que fue agregado:

```bash
git status
```

El archivo aparece en verde — está listo para el commit.

### 3. Crea el commit

El mensaje debe seguir este formato:

```bash
git commit -m "Agregar perfil: Tu Nombre Completo"
```

> **¿Por qué buenos mensajes de commit?** Son el historial de tu proyecto. Un buen mensaje explica *qué* cambiaste y *por qué*.

### 4. Envía tus cambios a GitHub

```bash
git push origin add-profile/<tu-usuario>
```

### 5. Verifica en GitHub

Ve a tu fork en GitHub y verás un banner amarillo: **"Compare & pull request"** — ¡tu rama está lista para el PR!

También puedes revisar tu historial de commits:

```bash
git log --oneline
```

---

## ✅ ¿Cómo saber si completé este paso?

- Al ejecutar `git log --oneline`, aparece tu commit con el mensaje `Agregar perfil: Tu Nombre`
- En tu fork de GitHub aparece el banner **"Compare & pull request"**

---

⬅️ **Anterior:** [Paso 3 — Agrega tu Perfil](./paso-3-perfil.md) &nbsp;&nbsp; ➡️ **Siguiente:** [Paso 5 — Abre tu Pull Request](./paso-5-pull-request.md)
