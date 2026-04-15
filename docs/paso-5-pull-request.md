# Paso 5 — Abre tu Pull Request 🚀

## ¿Qué es un Pull Request?

Un **Pull Request (PR)** es una solicitud para integrar tus cambios al proyecto principal. Es la forma estándar de contribuir a proyectos en GitHub.

```
Tu Fork                       Repositorio Original
add-profile/tu-usuario ──[ Pull Request ]──▶ main
```

El flujo completo es:
1. **Abres el PR** → GitHub notifica al administrador
2. **CI valida tu perfil** → Recibes un comentario con el resultado
3. **Se genera un preview** → Surge.sh despliega una URL de prueba con tu tarjeta
4. **Solicitas revisión** → El administrador revisa y aprueba
5. **Merge** → Tu perfil aparece en el sitio del taller en vivo 🎉

---

## Actividades

### 1. Abre tu Pull Request

1. Ve a tu fork en GitHub — verás el banner amarillo **"Compare & pull request"**, haz clic
2. Verifica que el PR va desde `add-profile/<tu-usuario>` en **tu fork** hacia `main` del **repositorio original**
3. Completa el checklist de la plantilla del PR
4. Haz clic en **"Create pull request"**

### 2. Espera las verificaciones automáticas

En los comentarios del PR aparecerán dos verificaciones automáticas:

| Verificación | ¿Qué hace? |
|---|---|
| ✅ **Validación de perfil** | Revisa que tu archivo tenga todos los campos requeridos |
| 🔗 **Preview de Surge.sh** | Despliega el sitio completo con tu tarjeta incluida |

Si la validación falla, corrige los errores en tu archivo, haz commit y push — el PR se actualizará solo.

### 3. Revisa tu preview

Haz clic en el enlace de Surge.sh que aparece en los comentarios. Verás el sitio completo con tu tarjeta de perfil incluida.

### 4. Solicita revisión

En el panel derecho del PR, haz clic en **"Reviewers"** y agrega al administrador del taller.

### 5. ¡Espera el merge!

Una vez aprobado, el administrador hará merge. En pocos minutos tu perfil aparecerá en el sitio oficial del taller.

---

## Resumen del flujo completo aprendido

```bash
# 1. Fork en GitHub (botón en la web)

# 2. Clonar tu fork
git clone https://github.com/<tu-usuario>/Git-GitHub-Workshop-UTP.git
cd Git-GitHub-Workshop-UTP

# 3. Crear rama
git checkout -b add-profile/<tu-usuario>

# 4. Copiar y editar tu perfil
cp participants/_template.md participants/Tu-Nombre.md
# ... editar el archivo ...

# 5. Guardar y subir cambios
git add participants/Tu-Nombre.md
git commit -m "Agregar perfil: Tu Nombre Completo"
git push origin add-profile/<tu-usuario>

# 6. Abrir Pull Request en GitHub (botón en la web)
```

---

## Conceptos aprendidos

| Concepto | ¿Qué es? |
|----------|---------|
| **Fork** | Copia de un repositorio en tu cuenta de GitHub |
| **Clone** | Descargar un repositorio a tu computadora |
| **Branch** | Línea de desarrollo independiente |
| **Staging Area** | Área de preparación antes del commit |
| **Commit** | Snapshot guardado de tus cambios |
| **Push** | Enviar commits locales al repositorio remoto |
| **Pull Request** | Solicitud para fusionar tus cambios al proyecto principal |
| **CI/CD** | Verificaciones automáticas que corren en cada PR |

## Recursos para seguir aprendiendo

- [GitHub Skills](https://skills.github.com) — Ejercicios interactivos oficiales de GitHub
- [Pro Git Book](https://git-scm.com/book/es/v2) — El libro oficial de Git en español
- [GitHub Docs](https://docs.github.com/es) — Documentación oficial en español

---

⬅️ **Anterior:** [Paso 4 — Commit y Push](./paso-4-commit-push.md)

---

*¡Felicitaciones por completar el taller! 🏆*
*© 2025 Universidad Tecnológica de Panamá 🇵🇦*
