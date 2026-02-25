# 🔐 Privy Configuration

## Environment Variables Needed

Ve a **Vercel Dashboard** → Settings → Environment Variables y agrega:

```bash
# Privy Auth (REQUIRED for admin login)
NEXT_PUBLIC_PRIVY_APP_ID=cmm1co41600d20cl7hrgx6ggo
NEXT_PUBLIC_PRIVY_CLIENT_ID=(tu client ID de Privy)
PRIVY_APP_SECRET=(tu secret key de Privy)
```

## Cómo Obtener las Credenciales

### 1. Ve a Privy Dashboard
https://dashboard.privy.io

### 2. Selecciona tu app (o crea una nueva)
- App ID ya lo tienes: `cmm1co41600d20cl7hrgx6ggo`

### 3. En Settings → API Keys:
- **App ID**: cmm1co41600d20cl7hrgx6ggo
- **Client ID**: Copia y pega en Vercel env vars
- **App Secret**: Copia y pega en Vercel env vars

## Config de Privy App

### Allowed Domains
En Privy Dashboard → Settings → Domains, agrega:
```
https://juliana-frausto.vercel.app
https://juliana-frausto-*.vercel.app (para preview deploys)
```

### Login Methods
Habilita en Privy Dashboard:
- ✅ Email
- ✅ Wallet (optional pero recomendado)

### Redirect URIs
```
https://juliana-frausto.vercel.app/admin
```

## Testing

Después de agregar las env vars:

1. **Redeploy** en Vercel (Settings → Deployments → Redeploy)
2. Ve a https://juliana-frausto.vercel.app/login
3. Click "Iniciar sesión con Privy"
4. Ingresa: `julianafrausto2211@gmail.com`
5. Verifica email
6. Deberías entrar al admin

## Troubleshooting

**Error: "Privy app not configured"**
- Verifica que NEXT_PUBLIC_PRIVY_APP_ID esté en Vercel
- Debe ser exactamente: `cmm1co41600d20cl7hrgx6ggo`

**Error: "Domain not allowed"**
- Agrega juliana-frausto.vercel.app en Privy Dashboard → Domains

**No aparece botón de login**
- Verifica que todas las 3 env vars estén configuradas
- Redeploy después de agregar env vars

---

**Resumen:** Agrega las 3 env vars de Privy en Vercel → Redeploy → Login funcionará.
