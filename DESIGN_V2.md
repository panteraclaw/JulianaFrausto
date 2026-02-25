# 🎨 Design v2.0 - Yellow Brushstrokes & Alien Typography

## Cambios Aplicados (Feb 24, 2026)

### 1. 🔤 Tipografía - Alien/Organic Feel

**❌ Antes (Brutalista):**
- Cinzel (headings) - serif, rígida, monumental
- Cormorant Garamond (body) - clásica, formal

**✅ Ahora (Alien/Orgánica):**
- **Comfortaa** (headings) - rounded, suave, alien-like
- **Quicksand** (body) - curvy, legible, orgánica

**Por qué:** Menos brutalismo, más fluido y artístico. Las letras redondeadas dan un toque más alien/futurista sin ser tech.

---

### 2. 🎨 Paleta de Colores

**❌ Antes (Verde Jade):**
```css
--accent: #3b7a5c;  /* Watercolor Green */
--border: #1a2a24;  /* Green-tinted */
```

**✅ Ahora (Amarillo Vibrante):**
```css
--accent: #f4d03f;  /* Vibrant Yellow/Gold */
--border: #1a1a2a;  /* Purple-tinted */
--background: #0a0a0e; /* Deep void with purple tint */
```

**Fondo acuarela:** Gradientes radiales amarillos/dorados simulando pinceladas de óleo

**Por qué:** Amarillo vibrante = más energía, calidez, contrasta mejor con fondos oscuros. Más acorde con obra de Juliana (acuarelas coloridas).

---

### 3. 🖌️ Elementos Decorativos - Brushstrokes

**❌ Antes (Líneas Rectas):**
```tsx
<span className="h-px bg-[#8a1c1c]" />  // Línea roja dura
<div className="divider" />             // Línea horizontal simple
```

**✅ Ahora (Pinceladas SVG):**
```tsx
<BrushStroke variant="short" />      // Pincelada corta horizontal
<BrushStroke variant="horizontal" /> // Pincelada larga
<BrushStroke variant="vertical" />   // Pincelada vertical
```

**Componente `BrushStroke.tsx`:**
- Paths SVG curvos simulando trazos de pincel
- Capas múltiples (stroke principal + sombra)
- Opacity controlada para efecto acuarela

**Ubicaciones:**
- **Navigation:** Bajo el nombre "Juliana Frausto"
- **SectionHeader:** Divider entre título y contenido
- **About page:** Bajo el título
- **Portfolio:** Header decorativo

**Por qué:** Las líneas rectas son muy duras/geométricas. Las pinceladas añaden textura orgánica, movimiento, y conectan con el medio artístico de Juliana (pintura).

---

### 4. 📐 Tamaños & Espaciado

**Headings más pequeños:**
```css
/* Antes */
text-5xl md:text-6xl  /* Muy grande, brutalista */

/* Ahora */
text-3xl md:text-4xl  /* Más refinado, elegante */
```

**Letter spacing reducido:**
```css
/* Antes */
tracking-[0.5em]  /* Muy espaciado, arquitectónico */

/* Ahora */
tracking-[0.15em] o tracking-wide  /* Más compacto, legible */
```

**Por qué:** El brutalismo usa mucho espacio/tamaño para impactar. Aquí queremos algo más refinado y artístico.

---

## 🎯 Resultado Visual

### Antes (v1.0 - Verde)
- Paleta verde jade
- Tipografía monumental (Cinzel)
- Líneas rectas rojas/verdes
- Espaciado exagerado
- Vibe: Brutalista, arquitectónico, formal

### Ahora (v2.0 - Amarillo)
- Paleta amarillo vibrante/dorado
- Tipografía orgánica (Comfortaa/Quicksand)
- Pinceladas curvas de óleo
- Espaciado refinado
- Vibe: Artístico, orgánico, cálido, futurista-orgánico

---

## 📦 Archivos Modificados

```
✅ src/app/layout.tsx          → Fonts Comfortaa + Quicksand
✅ src/app/globals.css         → Paleta amarilla, fondo acuarela
✅ src/components/ui/BrushStroke.tsx → NEW componente pinceladas SVG
✅ src/components/ui/Navigation.tsx  → Brushstroke bajo nombre
✅ src/components/ui/SectionHeader.tsx → Brushstroke divider
✅ src/app/about/page.tsx      → Brushstroke header
✅ src/app/portfolio/page.tsx  → Brushstroke header
✅ src/components/Flipbook.tsx → Colores amarillos
✅ src/app/page.tsx            → Colores amarillos
```

---

## 🔄 Próximas Iteraciones (Opcional)

### v2.1 - Más Pinceladas
- [ ] Background con más texturas de pincel (no solo gradientes)
- [ ] Brushstrokes animados (hover effects)
- [ ] Más variantes de brushstroke (diagonal, splash)

### v2.2 - Tipografía Más Alien
Si queremos ir MÁS alien:
- [ ] Explorar fonts como Orbitron (muy futurista)
- [ ] Karla o Nunito (más rounded)
- [ ] Custom font con ligaduras especiales

### v2.3 - Más Efectos de Acuarela
- [ ] Paper texture overlay
- [ ] Más colores en gradientes (no solo amarillo)
- [ ] Simular bleeding de acuarela en bordes

---

## 🎨 Paleta Completa de Referencia

```css
/* v2.0 - Yellow Brushstrokes */
--background: #0a0a0e;    /* Deep void, slight purple */
--foreground: #e5e5e5;    /* Bone white */
--accent: #f4d03f;        /* Vibrant yellow/gold */
--muted: #404040;         /* Muted gray */
--border: #1a1a2a;        /* Purple-tinted border */

/* Watercolor gradients */
rgba(244, 208, 63, 0.5)   /* Yellow bright */
rgba(255, 195, 0, 0.4)    /* Gold warm */
rgba(241, 196, 15, 0.3)   /* Yellow medium */
```

---

## 📸 Para Mostrar a Juliana

**Elementos clave a destacar:**
1. ✨ **Tipografía más suave** - ya no es tan "dura", más artística
2. 🎨 **Pinceladas amarillas** - reemplazan líneas rectas, dan textura
3. 🌅 **Fondo cálido** - amarillos/dorados en acuarela
4. 🖼️ **Flipbook funcional** - imagen + detalles lado a lado

**Pruébalo:**
```
https://juliana-frausto.vercel.app
```

Login admin:
- julianafrausto2211@gmail.com
- admin123

---

**Diseñado:** Pantera 🐆  
**Fecha:** Feb 24, 2026  
**Versión:** 2.0 (Yellow Brushstrokes)
