# Juliana Frausto - Obra Digital

Espacio digital para la obra artística de Juliana Frausto con flipbook interactivo.

## Características

- **Flipbook Dinámico**: Landing principal muestra la obra en formato flipbook navegable
- **Admin Panel**: Sistema para subir y gestionar páginas del flipbook
- **Responsive**: Funciona en desktop y mobile
- **Pagos**: Infraestructura de pagos integrada (MercadoPago) lista para monetización futura

## Stack Técnico

- **Frontend**: Next.js 16, React 19, Framer Motion
- **Backend**: Neon Postgres + Drizzle ORM
- **Storage**: Vercel Blob (imágenes)
- **Auth**: Privy
- **Payments**: MercadoPago
- **Hosting**: Vercel

## Cómo Funciona

### Para Usuarios
1. Visita la landing → Ve el flipbook
2. Navega con flechas o swipe (mobile)
3. Disfruta de la obra digital

### Para Admin
1. Login en `/admin`
2. Sube imágenes con categoría "flipbook"
3. Define el orden con `orderIndex` (1, 2, 3...)
4. Las imágenes aparecen automáticamente en el flipbook

## Setup Local

```bash
# Instalar dependencias
bun install

# Configurar .env.local
cp .env.example .env.local
# Agregar:
# - DATABASE_URL (Neon)
# - BLOB_READ_WRITE_TOKEN (Vercel)
# - PRIVY_APP_ID, PRIVY_CLIENT_ID, PRIVY_APP_SECRET

# Migrar database
bun run db:push

# Correr dev server
bun dev
```

## Deployment

```bash
# Deploy a Vercel
vercel --prod

# O push a main (si tienes Vercel conectado)
git push origin main
```

## Admin Panel

- **URL**: `/admin`
- **Crear usuario admin**:
  ```sql
  INSERT INTO users (email, password_hash, is_admin)
  VALUES ('admin@julianafrausto.com', 'hash', true);
  ```

## Estructura de Páginas del Flipbook

Cada página del flipbook es un registro en la tabla `artworks` con:
- `category`: "flipbook" o "flipbook-pages"
- `orderIndex`: Número que define el orden (1, 2, 3...)
- `imageUrl`: URL de Vercel Blob
- `title`: Título opcional de la página

## Monetización Futura

El sistema ya incluye:
- Integración con MercadoPago
- Sistema de órdenes crypto (USDC, USDT, etc.)
- Carrito de compras
- Sistema de envíos

Solo necesitas activarlo cuando Juliana decida monetizar.

---

**Fork de**: [martina-store-2](https://github.com/ValenteCreativo/martina-store-2)  
**Desarrollado por**: Pantera 🐆
