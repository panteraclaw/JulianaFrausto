# Guía de Administración - Juliana Frausto

## 🎨 Cómo Subir Páginas del Flipbook

### Acceso al Admin Panel
1. Ve a: `https://tu-dominio.com/admin`
2. Login con credenciales de admin
3. Dashboard principal muestra todas las obras

### Subir Nueva Página

1. **Click en "New Artwork"** (o "Nueva Obra")

2. **Llenar el Formulario:**
   ```
   Title:        "Página 1" o nombre descriptivo
   Category:     "flipbook" (IMPORTANTE - escribe exactamente esto)
   Order Index:  1, 2, 3... (define el orden en el flipbook)
   Description:  (opcional) Descripción de la página
   Image:        Click para subir archivo
   ```

3. **Subir Imagen:**
   - Formatos: JPG, PNG, WEBP
   - Tamaño recomendado: 1920x1080px o mayor
   - Peso: Máximo 10MB (Vercel Blob lo optimiza)

4. **Click "Save" o "Guardar"**

5. **Resultado:**
   - La imagen aparece automáticamente en el flipbook
   - El orden se define por `Order Index` (menor a mayor)

### Ejemplo de Secuencia

```
Página 1: Order Index = 1
Página 2: Order Index = 2
Página 3: Order Index = 3
Página 4: Order Index = 4
...
```

---

## 📝 Editar Páginas Existentes

1. En el Admin Dashboard, click en la imagen o título
2. Edita los campos que necesites
3. Para cambiar el orden: modifica `Order Index`
4. Save → Los cambios aparecen inmediatamente

---

## 🗑️ Eliminar Páginas

1. Click en la página en el Admin Dashboard
2. Click en "Delete" o botón de eliminar
3. Confirma → La página desaparece del flipbook

---

## 🎯 Tips & Mejores Prácticas

### Orden de las Páginas
- Usa números consecutivos: 1, 2, 3, 4...
- Si quieres insertar una página entre 2 y 3:
  - Opción A: Usa 2.5 como Order Index
  - Opción B: Renumera todas después de 2 (+1)

### Calidad de Imágenes
- **Resolución:** 1920x1080px mínimo (landscape)
- **Aspect Ratio:** 4:3 o 16:9 funciona mejor
- **Formato:** JPG para fotos, PNG para ilustraciones
- **Color:** RGB (no CMYK)

### Categoría
- **SIEMPRE usa "flipbook"** (minúsculas)
- Si escribes otra cosa, la página NO aparecerá en el home
- Puedes crear categorías adicionales para otros usos:
  - "flipbook-archived" (no se muestra)
  - "portfolio" (para página de portfolio separada)

### Metadata Opcional
Estos campos NO afectan el flipbook pero ayudan a organizar:
- `Year`: Año de creación
- `Medium`: Técnica/medio usado
- `Technique`: Detalles técnicos
- `Dimensions`: Dimensiones originales
- `Description`: Contexto de la obra

---

## 🚀 Workflow Recomendado

### Primera Vez (Setup)
1. Crea todas las páginas en orden
2. Sube imágenes secuencialmente (1, 2, 3...)
3. Preview en el home
4. Ajusta `Order Index` si es necesario

### Actualizaciones Futuras
1. Prepara las imágenes nuevas
2. Decide el Order Index (al final? en medio?)
3. Sube via Admin
4. Verifica en el flipbook

### Reorganizar Todo
1. Descarga lista actual (Export si está disponible)
2. Planea nuevo orden
3. Actualiza `Order Index` de cada página
4. Refresh para ver cambios

---

## 🔐 Gestión de Usuarios Admin

### Crear Nuevo Admin
```sql
-- Via Drizzle Studio o psql
INSERT INTO users (email, password_hash, is_admin, name)
VALUES (
  'nuevo-admin@email.com',
  -- Genera hash con: node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('password123', 10));"
  '$2a$10$...',
  true,
  'Nombre Admin'
);
```

### Cambiar Password
1. Genera nuevo hash:
   ```bash
   node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('nuevo_password', 10));"
   ```
2. Actualiza en database:
   ```sql
   UPDATE users 
   SET password_hash = '$2a$10$...'
   WHERE email = 'admin@email.com';
   ```

---

## 📊 Otras Funcionalidades Admin

### Blog Posts
- Sistema de blog incluido (no afecta flipbook)
- Útil para anuncios, exposiciones, etc.

### Portfolio
- Galería separada del flipbook
- Usa categoría diferente a "flipbook"

### Pagos (Futuro)
- Infraestructura ya instalada
- Activar cuando decidas monetizar:
  - MercadoPago para pesos mexicanos
  - Crypto (USDC/USDT) para pagos internacionales

---

## 🐛 Troubleshooting

**No aparece mi página en el flipbook**
- ✅ Verifica: Category = "flipbook" (exacto, minúsculas)
- ✅ Verifica: Order Index tiene número
- ✅ Refresh el navegador (Ctrl+F5)

**La imagen se ve borrosa**
- Sube imagen de mayor resolución
- Mínimo 1920px de ancho

**El orden está mal**
- Edita cada página y ajusta Order Index
- Recuerda: menor número = primero en el flipbook

**No puedo login al admin**
- Verifica email/password
- Checa que el usuario tenga `is_admin: true`
- Genera nuevo password hash si es necesario

---

## 📞 Soporte

¿Dudas? Contacta a:
- **Valentín** (desarrollador principal)
- **Pantera** 🐆 (sistema)

