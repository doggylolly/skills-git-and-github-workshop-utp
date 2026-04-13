## Paso 1: Fork y Clone del Repositorio 🍴

¡Bienvenido/a al taller de Git y GitHub de la UTP! En este ejercicio aprenderás el flujo de trabajo real que usan los desarrolladores profesionales para colaborar en proyectos.

### ¿Qué es un Fork?

Un **fork** es una copia personal de un repositorio en GitHub. Te permite trabajar de forma independiente sin afectar el proyecto original. Es la base de la colaboración en código abierto.

```
Repositorio Original (admin)
        ↓ fork
Tu Fork (tu-usuario/Git-GitHub-Workshop-UTP)
        ↓ clone
Tu computadora local
```

### ¿Qué es `git clone`?

`git clone` descarga tu repositorio de GitHub a tu computadora local para que puedas trabajar en él.

---

### 🎯 Actividades

#### 1. Haz Fork del repositorio

1. Ve al repositorio original del taller en GitHub
2. Haz clic en el botón **Fork** (esquina superior derecha)
3. Selecciona tu cuenta de GitHub como destino
4. Espera a que se cree tu copia — ¡ya tienes tu propio repositorio!

> **Nota:** Un fork en GitHub es una copia del repositorio que te permite trabajar independientemente y contribuir al proyecto original mediante Pull Requests.

#### 2. Clona tu fork a tu computadora

Abre tu terminal y ejecuta:

```bash
git clone https://github.com/${{ login }}/Git-GitHub-Workshop-UTP.git
```

Luego entra al proyecto:

```bash
cd Git-GitHub-Workshop-UTP
```

#### 3. Instala las dependencias

```bash
npm install
```

#### 4. Inicia el servidor local

```bash
npm start
```

Abre tu navegador en **http://localhost:8080** — deberías ver el sitio del taller con las tarjetas de perfil.

#### 5. Activa las Actions de tu fork

Ve a la pestaña **Actions** de tu repositorio en GitHub y haz clic en **"I understand my workflows, go ahead and enable them"** para activar los workflows del ejercicio.

#### 6. Crea y sube tu rama

Ahora crea una rama con tu nombre de usuario de GitHub:

```bash
git checkout -b add-profile/${{ login }}
git push origin add-profile/${{ login }}
```

Esto enviará tu nueva rama al repositorio y activará la siguiente validación.

---

### ✅ ¿Cómo saber si completé este paso?

Cuando hagas push de tu rama `add-profile/${{ login }}`, este issue se actualizará automáticamente con las instrucciones del **Paso 2**.

¡Mucho ánimo! 🚀
