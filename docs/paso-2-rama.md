# Paso 2 — Crea tu Rama 🌿

## ¿Qué es una rama (branch)?

Una **rama** es una línea de desarrollo independiente dentro de tu repositorio. Te permite trabajar en cambios sin afectar el código principal (`main`).

```
main ──────────────────────────────▶
         \
          add-profile/tu-usuario ──▶  (aquí trabajas tú)
```

> **¿Por qué usar ramas?** Para mantener `main` siempre limpio y funcional mientras desarrollas nuevas características.

---

## Actividades

### 1. Asegúrate de estar en `main`

```bash
git checkout main
```

### 2. Crea tu rama de trabajo

El nombre de la rama debe seguir este formato exacto:

```bash
git checkout -b add-profile/<tu-usuario-de-github>
```

Por ejemplo, si tu usuario es `juan-perez`:

```bash
git checkout -b add-profile/juan-perez
```

### 3. Verifica que estás en la nueva rama

```bash
git branch
```

Deberías ver tu rama marcada con `*`:

```
  main
* add-profile/tu-usuario
```

---

## ✅ ¿Cómo saber si completé este paso?

- Al ejecutar `git branch`, tu rama `add-profile/<tu-usuario>` aparece marcada con `*`

---

⬅️ **Anterior:** [Paso 1 — Fork y Clone](./paso-1-fork-clone.md) &nbsp;&nbsp; ➡️ **Siguiente:** [Paso 3 — Agrega tu Perfil](./paso-3-perfil.md)
