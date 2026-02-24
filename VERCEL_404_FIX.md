# 🔧 Solución al Error 404 en Vercel

## Problema
El sitio desplegado en Vercel muestra "404 NOT_FOUND" aunque el deploy se completó exitosamente.

## Causa
El **Root Directory** está configurado incorrectamente en Vercel Dashboard. Si apunta a `/src`, Vercel no encuentra el `package.json` y falla.

---

## ✅ Solución (2 minutos)

### 1. Ve a Vercel Dashboard
https://vercel.com/panteraclaws-projects/juliana-frausto

### 2. Settings → General

Scroll hasta encontrar **"Root Directory"**

### 3. Configura Root Directory
```
Valor actual:    /src  ❌
Valor correcto:  .     ✅  (o déjalo VACÍO)
```

**Importante:** El punto (`.`) significa "root del repositorio". No pongas `/src`.

### 4. Save Changes

Click "Save" en esa sección.

### 5. Redeploy

Hay dos formas:

**Opción A (Rápido):**
- Ve a la pestaña "Deployments"
- Click en el último deployment
- Click botón "Redeploy" (top right)

**Opción B (Forzar rebuild):**
- Haz un cambio dummy en el repo (ej: edita README)
- Push a master
- Vercel auto-deploys

---

## 🔍 Verificación

Después del redeploy (~2 min), verifica:

1. **Homepage funciona:**
   ```
   https://juliana-frausto.vercel.app
   ```
   Deberías ver el flipbook (aunque vacío sin páginas aún)

2. **Admin panel accesible:**
   ```
   https://juliana-frausto.vercel.app/admin
   ```
   Formulario de login visible

3. **Sin errores en consola:**
   - Abre DevTools (F12)
   - Tab Console
   - No debe haber errores rojos críticos

---

## 🎯 Settings Completos de Vercel

Para referencia, así debería verse tu config:

```
Framework Preset:     Next.js
Root Directory:       . (o vacío)
Build Command:        npm run build (auto-detectado)
Output Directory:     .next (auto-detectado)
Install Command:      npm install (auto-detectado)
Development Command:  npm run dev (auto-detectado)
```

---

## 📝 Environment Variables Requeridas

Asegúrate de tener estas en Vercel Settings → Environment Variables:

```bash
# Database
DATABASE_URL=postgresql://...neon.tech/neondb

# Vercel Blob (auto-creado al conectar Blob Store)
BLOB_READ_WRITE_TOKEN=vercel_blob_...

# Privy Auth
NEXT_PUBLIC_PRIVY_APP_ID=clxxx...
NEXT_PUBLIC_PRIVY_CLIENT_ID=xxx
PRIVY_APP_SECRET=xxx

# MercadoPago (Opcional - para pagos)
MERCADOPAGO_ACCESS_TOKEN=xxx
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=xxx

# App URL (después del primer deploy exitoso)
NEXT_PUBLIC_APP_URL=https://juliana-frausto.vercel.app
```

---

## 🐛 Si Aún No Funciona

### Check 1: Build Logs
1. Ve a Deployments → último deploy
2. Click en el deployment
3. Tab "Building"
4. Revisa si hay errores en el build

**Error común:**
```
Error: Cannot find module 'next'
```
**Solución:** Root Directory mal configurado (ver arriba)

### Check 2: Function Logs
1. Mismo deployment
2. Tab "Functions"
3. Busca errores 500

**Error común:**
```
DATABASE_URL is not defined
```
**Solución:** Falta env var en Vercel

### Check 3: Database Connection
```bash
# Test local
psql $DATABASE_URL

# Si funciona local pero no en Vercel:
# → Verifica que la env var DATABASE_URL esté en Vercel
# → Verifica que Neon DB permita conexiones externas (debería por default)
```

---

## 📞 ¿Sigue sin funcionar?

**Debug checklist:**

- [ ] Root Directory = `.` (o vacío)
- [ ] Framework Preset = Next.js
- [ ] DATABASE_URL configurado en Vercel
- [ ] BLOB_READ_WRITE_TOKEN configurado
- [ ] Privy keys configurados
- [ ] Al menos 1 redeploy después de cambiar Root Directory
- [ ] Build logs no muestran errores

Si todos los checks pasan y sigue 404, contacta a Pantera 🐆 con:
1. Screenshot de Settings → General (Root Directory)
2. Link al último deployment
3. Screenshot de Build Logs

---

## 🎉 Después de Resolver el 404

### Siguiente paso: Crear Admin
```sql
-- Conecta a tu Neon DB
psql $DATABASE_URL

-- Crea usuario admin
INSERT INTO users (email, password_hash, is_admin, name)
VALUES (
  'julianafrausto2211@gmail.com',
  '$2a$10$N9qo8uLOickgait2/VOe5.z8OCjX5T1JFPXsVjFZCLZYCvLAVlXP.',
  true,
  'Juliana Frausto'
);

-- Password: admin123 (CAMBIAR DESPUÉS)
```

### Luego: Primera Página
1. Login en `/admin` con julianafrausto2211@gmail.com / admin123
2. Click "New Artwork"
3. Sube imagen, category="flipbook", orderIndex=1
4. Save
5. Ve al home → debería aparecer en el flipbook

---

**Última actualización:** Feb 24, 2026  
**Autor:** Pantera 🐆
