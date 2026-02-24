# Deployment Guide - Juliana Frausto

## 🚀 Deploy a Vercel (Recomendado)

### 1. Conectar el Repo
1. Ve a [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Importa el repo: `panteraclaw/JulianaFrausto`

### 2. Configurar Environment Variables
En Vercel Dashboard → Settings → Environment Variables, agrega:

```bash
# Database
DATABASE_URL=postgresql://...neon.tech/neondb

# Vercel Blob (se crea automático en Vercel)
BLOB_READ_WRITE_TOKEN=vercel_blob_...

# Privy Auth
NEXT_PUBLIC_PRIVY_APP_ID=clxxx...
NEXT_PUBLIC_PRIVY_CLIENT_ID=xxx
PRIVY_APP_SECRET=xxx

# MercadoPago (opcional)
MERCADOPAGO_ACCESS_TOKEN=xxx
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=xxx

# App URL (después del deploy)
NEXT_PUBLIC_APP_URL=https://juliana-frausto.vercel.app
```

### 3. Deploy
- Click "Deploy"
- Espera ~2 minutos
- ✅ Listo: `https://juliana-frausto.vercel.app`

---

## 📦 Setup de Servicios Externos

### Neon Postgres
1. Ve a [neon.tech](https://neon.tech)
2. Crea nuevo proyecto
3. Copia el `DATABASE_URL`
4. Corre las migraciones:
   ```bash
   bun run db:push
   ```

### Vercel Blob
1. En Vercel Dashboard → Storage
2. Crea "Blob Store"
3. Conecta al proyecto
4. Token se genera automáticamente

### Privy Auth
1. Ve a [privy.io](https://privy.io)
2. Crea nueva app
3. Configura:
   - Domain: `juliana-frausto.vercel.app`
   - Login methods: Email, Wallet, Social
4. Copia las credenciales

### MercadoPago (Opcional)
1. Ve a [mercadopago.com.mx/developers](https://mercadopago.com.mx/developers)
2. Crea aplicación
3. Copia Access Token
4. Agrega a Vercel env vars

---

## 🔐 Crear Usuario Admin

Después del primer deploy:

```bash
# Opción 1: Via Drizzle Studio (Recomendado)
bun run db:studio
# Abre localhost:4983
# Tabla "users" → Insert
# - email: admin@julianafrausto.com
# - passwordHash: (genera con bcryptjs)
# - isAdmin: true

# Opción 2: Via SQL directo
psql $DATABASE_URL
INSERT INTO users (email, password_hash, is_admin, name)
VALUES (
  'admin@julianafrausto.com',
  -- Password hash for "admin123" (CAMBIAR EN PRODUCCIÓN)
  '$2a$10$...',
  true,
  'Juliana Frausto'
);
```

Para generar password hash:
```bash
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('tu_password_aqui', 10));"
```

---

## 📝 Subir Primera Página del Flipbook

1. Login en `/admin`
2. Click "New Artwork"
3. Llenar form:
   - **Title**: "Página 1"
   - **Category**: "flipbook"
   - **Order Index**: 1
   - **Image**: Subir archivo
4. Save
5. Repetir para cada página (Order Index: 2, 3, 4...)

---

## 🔄 Updates Futuros

```bash
# Local
git add .
git commit -m "Update: descripción"
git push origin master

# Vercel auto-deploys on push
```

---

## 🐛 Troubleshooting

**Error: Database connection failed**
- Verifica `DATABASE_URL` en Vercel
- Checa que Neon database esté activo

**Error: BLOB_READ_WRITE_TOKEN missing**
- Crea Blob Store en Vercel
- Reconecta el proyecto

**No aparecen imágenes en flipbook**
- Verifica que artworks tengan `category: "flipbook"`
- Checa que `orderIndex` esté definido
- Revisa Vercel Logs para errores

**Admin login no funciona**
- Verifica que el usuario tenga `isAdmin: true`
- Password hash debe generarse con bcryptjs

---

## 📊 Monitoring

- **Vercel Analytics**: Automático
- **Error Logs**: Vercel Dashboard → Logs
- **Database**: Neon Dashboard → Queries

---

¿Dudas? Contacta a Pantera 🐆
