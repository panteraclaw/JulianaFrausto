# 🚀 Quick Start - JulianaFrausto

## ✅ Sitio Ya Deployado

**URL:** https://juliana-frausto.vercel.app

---

## 📝 Primera Vez - Setup Completo (5 minutos)

### 1. Crear Admin User
```bash
# Conecta a tu Neon database
psql $DATABASE_URL

# Crea el usuario admin
INSERT INTO users (email, password_hash, is_admin, name)
VALUES (
  'julianafrausto2211@gmail.com',
  '$2a$10$N9qo8uLOickgait2/VOe5.z8OCjX5T1JFPXsVjFZCLZYCvLAVlXP.',
  true,
  'Juliana Frausto'
);
```

**Login:**
- Email: `julianafrausto2211@gmail.com`
- Password: `admin123`

---

### 2. Subir Primera Obra al Flipbook

1. **Login:** https://juliana-frausto.vercel.app/admin

2. **Click "New Artwork"** (botón verde arriba a la derecha)

3. **Llenar formulario:**
   ```
   Title:        Figura Azul con Velo Rojo
   Category:     flipbook
   Order Index:  1
   Year:         2024
   Medium:       Acrílico sobre lienzo
   Technique:    Pintura
   Description:  Retrato en tonos azules y rojos sobre fondo de patrones abstractos.
   Image:        (subir public/seed-artwork-1.jpg del repo)
   Available:    No (solo exhibición)
   Featured:     Sí
   ```

4. **Save**

5. **Verifica:** Ve al home → debería aparecer el flipbook con la obra ✨

---

## 🎨 Cómo Funciona el Flipbook

### Formato Libro
- **Página izquierda:** Imagen de la obra
- **Página derecha:** Detalles (título, año, técnica, descripción)
- **Navegación:** Flechas o teclas ← →
- **Toggle info:** Tecla `I` para mostrar/ocultar detalles

### Campos Importantes para Admin
```
Title         → Título de la obra
Category      → "flipbook" (SIEMPRE para que aparezca en home)
Order Index   → Orden en el libro (1, 2, 3...)
Year          → Año de creación
Medium        → Material (acuarela, acrílico, digital, etc.)
Technique     → Técnica (pintura, acuarela, collage, etc.)
Description   → Descripción de la obra (aparece en página derecha)
```

---

## 📦 Estructura del Sitio

### Home (/)
**Flipbook interactivo** con obras category="flipbook"
- Formato libro (imagen + detalles)
- Navegación con flechas
- Toggle info con tecla I

### Portfolio (/portfolio)
**Galería normal** con obras disponibles para venta
- Excluye automáticamente obras de "flipbook"
- Filtros: Todas / Disponibles / Vendidas
- Click en obra → página de detalle con opción de compra

### Blog (/blog)
Sistema de blog para anuncios, exposiciones, etc.

### Acerca de (/about)
Información sobre Juliana y contacto

---

## 🎯 Workflow Típico

### Agregar Obra al Flipbook
1. Login admin
2. New Artwork
3. Category = "flipbook"
4. Order Index = siguiente número (2, 3, 4...)
5. Sube imagen + llena detalles
6. Save
7. Aparece automáticamente en home

### Agregar Obra a Galería (Venta)
1. Login admin
2. New Artwork
3. Category = "galería" o "pintura" (cualquier cosa EXCEPTO "flipbook")
4. Price = precio de venta
5. Available = Sí
6. Save
7. Aparece en /portfolio

### Marcar Obra como Vendida
1. Admin → busca la obra
2. Edit
3. Available = No
4. Save
5. Se mueve al filtro "Vendidas"

---

## 🎨 Paleta de Colores

**Nueva estética acuarela verde:**
```css
Background:  #0a0e0d (Deep Forest Black)
Foreground:  #e5e5e5 (Bone White)
Accent:      #3b7a5c (Watercolor Green/Jade)
Border:      #1a2a24 (Green-tinted border)
```

**Fondo:** Gradientes radiales verdes sutiles simulando acuarela

---

## 🔐 Seguridad

**Solo Juliana puede:**
- Crear cuenta (email whitelisted)
- Acceder al admin
- Subir/editar/eliminar obras

**El público puede:**
- Ver flipbook
- Navegar galería
- Leer blog
- Comprar obras (cuando payments estén activos)

---

## 💰 Pagos (Dormant - Para Futuro)

El sitio ya incluye infraestructura completa de pagos:
- **MercadoPago:** Pesos mexicanos
- **Crypto:** USDC/USDT en múltiples chains
- **NFT Certificates:** Certificados de autenticidad on-chain

**Para activar:**
1. Configura MercadoPago keys en Vercel env vars
2. Configura wallet address para recibir crypto
3. Activa en admin

---

## 📱 Navegación

```
Home          → Flipbook interactivo
Portfolio     → Galería para venta
Blog          → Anuncios y exposiciones
Acerca de     → Info + contacto
```

**Mobile:** Menú hamburguesa (top right)

---

## 🐛 Troubleshooting

**No aparece mi obra en el flipbook**
- ✅ Category = "flipbook" (exacto, minúsculas)
- ✅ Order Index tiene número (no null)

**La imagen se ve borrosa**
- Sube imagen de alta resolución (1920px+ ancho)

**No puedo login**
- Verifica email: julianafrausto2211@gmail.com
- Password: admin123 (temporal, cámbialo después)

---

## 📞 Soporte

**Vale (desarrollador)** - ValenteCreativo  
**Pantera (sistema)** 🐆

---

**Última actualización:** Feb 24, 2026
