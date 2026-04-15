# Paso 1 — Fork y Clone del Repositorio 🍴

## ¿Qué es un Fork?

Un **fork** es una copia personal de un repositorio en GitHub. Te permite trabajar de forma independiente sin afectar el proyecto original. Es la base de la colaboración en código abierto.

```
Repositorio Original (admin)
        ↓ fork
Tu Fork (tu-usuario/Git-GitHub-Workshop-UTP)
        ↓ clone
Tu computadora local
```

## ¿Qué es `git clone`?

`git clone` descarga tu repositorio de GitHub a tu computadora local para que puedas trabajar en él.

---

## Actividades

### 1. Haz Fork del repositorio

1. Ve al repositorio original del taller en GitHub
2. Haz clic en el botón **Fork** (esquina superior derecha)
3. Selecciona tu cuenta de GitHub como destino
4. Espera a que se cree tu copia — ¡ya tienes tu propio repositorio!

> Un fork en GitHub es una copia del repositorio que te permite trabajar independientemente y contribuir al proyecto original mediante Pull Requests.

### 2. Clona tu fork a tu computadora

Abre tu terminal y ejecuta:

```bash
git clone https://github.com/<tu-usuario>/Git-GitHub-Workshop-UTP.git
```

Luego entra al proyecto:

```bash
cd Git-GitHub-Workshop-UTP
```

### 3. Instala las dependencias

```bash
npm install
```

### 4. Inicia el servidor local

```bash
npm start
```

Abre tu navegador en **http://localhost:8080** — deberías ver el sitio del taller con las tarjetas de perfil existentes.

---

## ✅ ¿Cómo saber si completé este paso?

- Tienes un fork del repositorio en tu cuenta de GitHub
- Puedes ver el sitio en `http://localhost:8080` desde tu computadora

---

➡️ **Siguiente paso:** [Paso 2 — Crea tu Rama](./paso-2-rama.md)
