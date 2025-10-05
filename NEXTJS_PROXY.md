# Next.js API Proxy Sozlamalari

Next.js rewrites orqali backend API'ga proxy qilish sozlandi.

## Qanday Ishlaydi

### Oldingi Tizim (CORS, Mixed Content muammolari)

```
Frontend: http://localhost:3000
Backend:  http://localhost:4000

Browser'dan: http://localhost:3000 -> http://localhost:4000/api/... ❌
- CORS muammosi
- Mixed content (HTTPS sahifada HTTP API)
- Har xil portlar
```

### Yangi Tizim (Next.js Proxy)

```
Frontend: http://localhost:3000
Backend:  http://localhost:4000 (proxy orqali)

Browser'dan: http://localhost:3000/api/... -> Next.js -> http://localhost:4000/api/... ✅
- CORS muammosi yo'q
- Mixed content yo'q
- Bitta portdan ko'rinadi
```

## Konfiguratsiya

### next.config.mjs

```javascript
{
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*',
      },
      {
        source: '/events/:path*',
        destination: 'http://localhost:4000/events/:path*',
      },
    ];
  }
}
```

## URL O'zgarishlari

### API Endpoints

**Oldin:**
```javascript
fetch(process.env.NEXT_PUBLIC_SERVERURL + '/api/v1/event/all')
// http://localhost:4000/api/v1/event/all
```

**Hozir:**
```javascript
fetch('/api/v1/event/all')
// Browser: http://localhost:3000/api/v1/event/all
// Next.js proxy: http://localhost:4000/api/v1/event/all
```

### Rasmlar

**Oldin:**
```javascript
src={process.env.NEXT_PUBLIC_SERVERURL + '/events/image.jpg'}
// http://localhost:4000/events/image.jpg
```

**Hozir:**
```javascript
src="/events/image.jpg"
// Browser: http://localhost:3000/events/image.jpg
// Next.js proxy: http://localhost:4000/events/image.jpg
```

## O'zgartirilgan Fayllar

### 1. next.config.mjs
- Rewrites qo'shildi
- Image domains sozlandi

### 2. Helper Functions (Hammasi)
- AdminLogIn.js
- AdminSignUp.js
- AdminLogOutFunc.js
- CreateEvent.js
- FetchEventsData.js
- FetchEventDataByIdFunc.js
- GetAdminFunc.js
- UpdateEvent.js

### 3. Components
- EventCard.js - getImageUrl soddalashtirildi
- editevent/page.jsx - getImageUrl soddalashtirildi

## Afzalliklari

✅ **CORS muammosi hal qilindi** - Backend CORS sozlamasiz ishlaydi
✅ **Mixed Content yo'q** - HTTPS sahifada ham ishlaydi
✅ **Bitta port** - Frontend va backend bitta portdan ko'rinadi
✅ **Production-ready** - Vercel/Netlify'da avtomatik ishlaydi
✅ **Environment variables kam** - NEXT_PUBLIC_SERVERURL kerak emas

## Ishlatish

### Development:

```bash
# Terminal 1: Backend
cd server
npm run dev  # Port 4000

# Terminal 2: Frontend
cd client
npm run dev  # Port 3000
```

**Test:**
- http://localhost:3000 - Frontend
- http://localhost:3000/api/v1/event/all - Backend API (proxy orqali)
- http://localhost:3000/events/image.jpg - Rasmlar (proxy orqali)

### Production:

#### Vercel/Netlify:

`next.config.mjs` avtomatik ishlaydi. Faqat backend URL'ni to'g'rilang:

```javascript
destination: process.env.BACKEND_URL + '/api/:path*',
```

Environment Variable:
```
BACKEND_URL=https://yourapi.com
```

## Rewrites vs Proxy

| Feature | Next.js Rewrites | Proxy Server |
|---------|------------------|--------------|
| Setup | Oson (next.config.mjs) | Murakkab (nginx, etc) |
| Performance | Yuqori | O'rtacha |
| Development | Mukammal | Qo'shimcha sozlash |
| Production | Vercel/Netlify qulay | Manual deploy |

## Debug

### Proxy ishlayaptimi?

Browser DevTools > Network:
```
Request URL: http://localhost:3000/api/v1/event/all
Status: 200 OK
```

Agar 404 - next.config.mjs restart qiling:
```bash
# Ctrl+C
npm run dev
```

### Rasmlar yuklanmayapti?

1. Browser console tekshiring
2. URL to'g'riligini tekshiring: `/events/file.jpg`
3. Backend static middleware ishlashini tekshiring

## Muammolarni Hal Qilish

### 1. Rewrites ishlamayapti

**Sabab:** Next.js restart kerak

**Yechim:**
```bash
cd client
# Ctrl+C
npm run dev
```

### 2. API 404 qaytaryapti

**Sabab:** Backend ishlamayapti yoki URL xato

**Yechim:**
- Backend ishlashini tekshiring: http://localhost:4000/api/v1/event/all
- next.config.mjs'da URL tekshiring

### 3. Cookies ishlamayapti

**Sabab:** withCredentials yo'q

**Yechim:**
```javascript
axios.post('/api/...', data, {
  withCredentials: true  // Majburiy!
})
```

## Summary

| Oldin | Hozir |
|-------|-------|
| `http://localhost:4000/api/...` | `/api/...` |
| `http://localhost:4000/events/...` | `/events/...` |
| CORS sozlash kerak | Avtomatik |
| Mixed content muammo | Yo'q |
| Environment variable kerak | Kerak emas |

**Hozirgi holat:** ✅ Next.js proxy ishlayapti - CORS va Mixed Content muammolari hal qilindi!
