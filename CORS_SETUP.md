# CORS Sozlamalari

## Joriy Konfiguratsiya

CORS (Cross-Origin Resource Sharing) barcha origin'lar uchun ochiq qilingan.

### Development Mode (Hozirgi holat)

```javascript
origin: true  // Barcha origin'lardan so'rovlar qabul qilinadi
```

**Faydasi:**
- ✅ Har qanday portdan test qilish mumkin
- ✅ Postman, Thunder Client kabi toollar ishlaydi
- ✅ Boshqa kompyuterlardan test qilish mumkin
- ✅ Mobile applar uchun qulay

**Xavfi:**
- ⚠️ Production'da xavfli (har kim API'ga kirishi mumkin)

### Production Mode

Production'da avtomatik ravishda faqat frontend URL ruxsat etiladi:

```bash
NODE_ENV=production  # .env faylda
```

```javascript
origin: process.env.FRONTEND_URI  // Faqat https://yoursite.com
```

## Qanday Ishlaydi

### 1. Development Rejimi (NODE_ENV !== 'production')

```
🔓 CORS: Barcha origin'lar ruxsat etilgan (Development mode)
```

**So'rovlar:**
- ✅ http://localhost:3000
- ✅ http://localhost:3001
- ✅ http://192.168.1.100:3000
- ✅ https://test.example.com
- ✅ Postman, Thunder Client

### 2. Production Rejimi (NODE_ENV=production)

```
🔒 CORS: Faqat https://yoursite.com ruxsat etilgan (Production mode)
```

**So'rovlar:**
- ✅ https://yoursite.com
- ❌ Boshqa barcha origin'lar

## Konfiguratsiya

### Development uchun:

`.env` faylda:
```env
NODE_ENV=development
FRONTEND_URI=http://localhost:3000
```

### Production uchun:

`.env` faylda:
```env
NODE_ENV=production
FRONTEND_URI=https://yoursite.com
```

## CORS Options

```javascript
{
  origin: true,                    // Barcha origin'lar (dev)
  methods: ["GET", "POST", ...],   // Ruxsat berilgan HTTP metodlar
  allowedHeaders: [...],           // Ruxsat berilgan headerlar
  credentials: true,               // Cookie yuborish ruxsat
  optionsSuccessStatus: 200        // Preflight uchun
}
```

## Muammolarni Hal Qilish

### CORS Error: "Access-Control-Allow-Origin"

**Sabab:** Origin ruxsat etilmagan

**Yechim:**
1. `NODE_ENV=development` qo'ying (.env)
2. Server'ni restart qiling
3. Console'da `🔓 CORS: Barcha origin'lar...` ko'ring

### Cookies Yuborilmayapti

**Sabab:** `credentials: true` ishlamayapti

**Yechim:**
1. Frontend'da `withCredentials: true` borligini tekshiring
2. Backend'da `credentials: true` borligini tekshiring
3. `origin: true` yoki aniq URL bo'lishi kerak (`'*'` emas!)

### Preflight (OPTIONS) So'rovi Fail

**Sabab:** OPTIONS metodi ruxsat etilmagan

**Yechim:**
- `methods` arrayiga `"OPTIONS"` qo'shilgan ✅
- `optionsSuccessStatus: 200` qo'shilgan ✅

## Production Deploy

### Vercel/Netlify:

Environment Variables:
```
NODE_ENV=production
FRONTEND_URI=https://yourapp.vercel.app
```

### VPS/Server:

```bash
export NODE_ENV=production
export FRONTEND_URI=https://yoursite.com
npm start
```

## Maxsus Origin'lar (Agar kerak bo'lsa)

Agar bir nechta origin kerak bo'lsa:

```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://yoursite.com',
  'https://admin.yoursite.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS: Origin ruxsat etilmagan'));
    }
  },
  credentials: true
};
```

## Xavfsizlik Maslahatlar

### Development:
✅ `origin: true` ishlatish mumkin
✅ Har doim `credentials: true` bilan

### Production:
🔒 Faqat aniq origin'lar
🔒 HTTPS ishlatish
🔒 Environment variables bilan boshqarish
🔒 Rate limiting qo'shish

## Test Qilish

### 1. Development Test:

```bash
# Console'da ko'ring
🔓 CORS: Barcha origin'lar ruxsat etilgan (Development mode)

# Har qanday joydan test qiling
curl http://localhost:4000/api/v1/event/all
```

### 2. Production Test:

```bash
# Console'da ko'ring
🔒 CORS: Faqat https://yoursite.com ruxsat etilgan (Production mode)

# Faqat frontend'dan ishlaydi
curl -H "Origin: https://yoursite.com" http://yourapi.com/...
```

## Summary

| Rejim | Origin | Xavfsizlik | Foydalanish |
|-------|--------|------------|-------------|
| Development | Barcha | Past | Test, Debug |
| Production | Aniq URL | Yuqori | Live Site |

**Hozirgi holat:** 🔓 Development mode - barcha origin'lar ochiq
