## Paso 4: Abre tu Pull Request 🚀

¡Increíble trabajo! Llegaste al paso final. Ahora aprenderás a abrir un **Pull Request** para que tu perfil aparezca en el sitio oficial del taller.

### ¿Qué es un Pull Request?

Un **Pull Request (PR)** es una solicitud para integrar tus cambios al proyecto principal. Es la forma estándar de contribuir a proyectos en GitHub.

```
Tu Fork                    Repositorio Original
add-profile/tu-usuario ──[ Pull Request ]──▶ main
```

El flujo completo es:
1. **Abres el PR** → GitHub notifica al administrador
2. **CI verifica tu perfil** → Recibe comentario con resultado
3. **Se genera un preview** → Vercel despliega una URL de prueba
4. **Revisión** → Solicitas revisión al administrador del taller
5. **Merge** → Tu perfil aparece en el sitio en vivo 🎉

---

### 🎯 Actividades

#### 1. Abre tu Pull Request

1. Ve a tu fork en GitHub: `https://github.com/${{ login }}/Git-GitHub-Workshop-UTP`
2. Verás un banner amarillo: **"Compare & pull request"** — haz clic en él
3. Asegúrate de que el PR va desde tu rama `add-profile/${{ login }}` hacia `main` del repositorio **original** (no tu fork)
4. Llena la plantilla del PR con el checklist

#### 2. Espera la validación automática

En los comentarios del PR aparecerán dos verificaciones automáticas:

- ✅ **Validación de perfil** — verifica que tu archivo tiene todos los campos requeridos
- 🔗 **Preview de Vercel** — un enlace para ver cómo quedará tu tarjeta en el sitio

#### 3. Revisa tu preview

Haz clic en el enlace de Vercel que aparece en los comentarios del PR. Verás el sitio completo con tu tarjeta de perfil incluida. ¡Compártelo en LinkedIn! 🔗

#### 4. Solicita revisión

En el panel derecho del PR, haz clic en **"Reviewers"** y agrega al administrador del taller como revisor.

#### 5. ¡Espera el merge!

Una vez aprobado, el administrador hará merge de tu PR. En pocos minutos, tu perfil aparecerá en el sitio oficial del taller.

---

### 🧠 Resumen del Flujo Aprendido

```bash
# 1. Fork en GitHub (botón en la web)

# 2. Clonar tu fork
git clone https://github.com/${{ login }}/Git-GitHub-Workshop-UTP.git
cd Git-GitHub-Workshop-UTP

# 3. Crear rama
git checkout -b add-profile/${{ login }}

# 4. Agregar tu perfil (editar participants/Tu-Nombre.md)

# 5. Guardar cambios
git add participants/Tu-Nombre.md
git commit -m "Agregar perfil: Tu Nombre"
git push origin add-profile/${{ login }}

# 6. Abrir Pull Request en GitHub
```

---

### ✅ ¡Ya completaste el ejercicio!

Este issue se actualizará con tu revisión final en cuanto hagas push al repositorio. El PR y el preview son el paso final que ocurre en el repositorio principal.

¡Felicitaciones por llegar hasta aquí! 🏆
