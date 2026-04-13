#!/usr/bin/env node

/**
 * validate-profile.js
 * Valida el front matter YAML de un archivo de perfil de participante.
 * Uso: node validate-profile.js <ruta-al-archivo.md>
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const REQUIRED_FIELDS = ['name', 'career', 'semester', 'description', 'hobbies', 'image', 'github'];

const filePath = process.argv[2];

if (!filePath) {
  console.error('Error: Debes proporcionar la ruta al archivo de perfil.');
  console.error('Uso: node validate-profile.js participants/Tu-Nombre.md');
  process.exit(1);
}

if (!fs.existsSync(filePath)) {
  console.error(`Error: No se encontró el archivo: ${filePath}`);
  process.exit(1);
}

let parsed;
try {
  const content = fs.readFileSync(filePath, 'utf-8');
  parsed = matter(content);
} catch (err) {
  console.error(`Error al leer o parsear el archivo: ${err.message}`);
  process.exit(1);
}

const data = parsed.data;
const errors = [];

// Verificar que cada campo requerido existe y no está vacío
for (const field of REQUIRED_FIELDS) {
  if (!data[field]) {
    errors.push(`  - El campo '${field}' es requerido pero está vacío o no existe.`);
  } else if (typeof data[field] === 'string' && data[field].trim() === '') {
    errors.push(`  - El campo '${field}' no puede estar vacío.`);
  }
}

// Verificar que la URL de la imagen usa HTTPS
if (data.image) {
  if (!data.image.startsWith('https://')) {
    errors.push(`  - El campo 'image' debe ser una URL que comience con 'https://' (valor actual: '${data.image}')`);
  }
}

// Verificar que el nombre de usuario de GitHub no contiene espacios ni URL completa
if (data.github) {
  if (data.github.includes('github.com')) {
    errors.push(`  - El campo 'github' debe ser solo tu nombre de usuario, no la URL completa. (ej. 'janesmith' en lugar de 'https://github.com/janesmith')`);
  }
  if (data.github.includes(' ')) {
    errors.push(`  - El campo 'github' no debe contener espacios.`);
  }
}

// Verificar que la descripción tiene contenido mínimo
if (data.description && typeof data.description === 'string' && data.description.trim().length < 20) {
  errors.push(`  - El campo 'description' debe tener al menos 20 caracteres. Cuéntanos un poco más sobre ti.`);
}

if (errors.length > 0) {
  console.error(`\n❌ El archivo '${path.basename(filePath)}' tiene los siguientes problemas:\n`);
  errors.forEach(e => console.error(e));
  console.error('\nRevisa el archivo _template.md para ver el formato correcto.\n');
  process.exit(1);
} else {
  console.log(`\n✅ El perfil '${data.name}' es válido. ¡Todos los campos están completos!\n`);
  console.log('Campos encontrados:');
  REQUIRED_FIELDS.forEach(field => {
    const value = String(data[field]).substring(0, 50);
    console.log(`  ${field}: ${value}${String(data[field]).length > 50 ? '...' : ''}`);
  });
  console.log('');
  process.exit(0);
}
