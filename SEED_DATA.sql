-- Seed Data: Primera obra de ejemplo para Juliana Frausto
-- Ejecuta esto después de crear el admin user

-- NOTA: Actualiza la imageUrl con la URL real de Vercel Blob después de subirla
-- Por ahora usa una URL placeholder

INSERT INTO artworks (
  title, 
  description, 
  imageUrl, 
  category, 
  year, 
  medium, 
  technique, 
  orderIndex,
  available,
  featured
) VALUES (
  'Figura Azul con Velo Rojo',
  'Retrato en tonos azules y rojos sobre fondo de patrones abstractos. La figura lleva un velo carmesí y presenta rasgos estilizados característicos del trabajo de Juliana.',
  '/seed-artwork-1.jpg',  -- Temporal: cambiar por URL de Vercel Blob
  'flipbook',
  2024,
  'Acrílico sobre lienzo',
  'Pintura',
  1,  -- Primera página del flipbook
  false,  -- No disponible para venta (solo exhibición)
  true    -- Featured
);

-- Para subir la imagen a Vercel Blob:
-- 1. Ve al admin panel: https://juliana-frausto.vercel.app/admin
-- 2. Login con julianafrausto2211@gmail.com
-- 3. Click "New Artwork"
-- 4. Sube la imagen public/seed-artwork-1.jpg
-- 5. Llena los campos:
--    - Title: "Figura Azul con Velo Rojo"
--    - Category: "flipbook"
--    - Order Index: 1
--    - Year: 2024
--    - Medium: "Acrílico sobre lienzo"
--    - Technique: "Pintura"
--    - Description: (copiar de arriba)
-- 6. Save
