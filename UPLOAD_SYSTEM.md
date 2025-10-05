# Rasm Yuklash Tizimi

Loyihada rasm yuklash Cloudinary o'rniga to'g'ridan-to'g'ri serverga amalga oshiriladi.

## Qanday Ishlaydi

### Backend (Server)

1. **Multer Middleware** - Fayllarni qabul qiladi va saqlaydi
   - Fayl: `server/src/middleware/multer.middleware.js`
   - Joylashtirish: `server/public/events/`
   - Fayl nomi: `originalname-timestamp-random.ext`
   - Limit: 5MB
   - Qabul qilinadigan formatlar: jpg, jpeg, png, gif, webp

2. **Event Controller** - Fayllarni saqlash va ma'lumotlar bazasiga yozish
   - Fayl: `server/src/controller/event.controller.js`
   - FormData dan fayl oladi
   - Fayl yo'lini `/events/filename.jpg` shaklida saqlaydi

3. **Static Files** - Rasmlarni serve qilish
   - Express static middleware: `app.use('/events', express.static(...))`
   - URL: `http://localhost:4000/events/filename.jpg`

### Frontend (Client)

1. **CreateEvent Helper** - FormData bilan rasm yuboradi
   - Fayl: `client/src/Helper/CreateEvent.js`
   - `multipart/form-data` header ishlatadi

2. **Create Event Page** - Faylni to'g'ridan-to'g'ri yuboradi
   - Cloudinary upload kodi olib tashlandi
   - File object to'g'ridan-to'g'ri serverga yuboriladi

3. **Rasm Ko'rsatish** - URL'ni to'g'ri format qiladi
   - Nisbiy yo'l: `/events/file.jpg` → `http://localhost:4000/events/file.jpg`
   - To'liq URL (Cloudinary): oldingiday ishlaydi

## Ishlatish

### Tadbir Yaratish

1. Admin panelga kiring: http://localhost:3000/login
2. "Yangi tadbir yaratish" ga o'ting
3. Forma to'ldiring:
   - Tadbir nomi
   - Tadbir haqida ma'lumot
   - Rasm yuklang (5MB gacha, jpg/png/gif/webp)
4. "Tadbirni Yaratish" tugmasini bosing

### Fayl Tizimi

```
server/
├── public/
│   └── events/           # Yuklangan rasmlar
│       ├── tadbirlar-1234567890-123456789.jpg
│       ├── conference-1234567891-987654321.png
│       └── ...
```

## URL Format

**Serverda saqlanadi:** `/events/filename.jpg`

**Browserda ko'rsatiladi:** `http://localhost:4000/events/filename.jpg`

**Database'da saqlanadi:** `/events/filename.jpg` (nisbiy yo'l)

## Xavfsizlik

✅ Faqat rasm fayllarini qabul qiladi
✅ 5MB file size limit
✅ Unique filename generatsiya qiladi (conflict yo'q)
✅ Admin authentication talab qilinadi
✅ File validation (mimetype va extension)

## Afzalliklari

1. ✅ **Bepul** - Cloudinary account kerak emas
2. ✅ **Tezkor** - To'g'ridan-to'g'ri server, 3rd party service yo'q
3. ✅ **Xavfsiz** - To'liq nazorat server tarafda
4. ✅ **Oddiy** - Konfiguratsiya kerak emas
5. ✅ **Mustaqil** - Tashqi servisdan bog'liq emas

## Kamchiliklari

⚠️ Server xotirasi foydalaniladi
⚠️ CDN yo'q (Cloudinary CDN beradi)
⚠️ Image optimization avtomatik emas

## Production Sozlamalari

Production muhitda:

1. **Storage** - AWS S3, DigitalOcean Spaces yoki boshqa cloud storage ishlatish tavsiya etiladi
2. **CDN** - CloudFlare yoki boshqa CDN qo'shish
3. **File Limit** - Server xotira hajmiga qarab sozlash
4. **Backup** - Muntazam backup qilish

## Troubleshooting

### Rasm yuklanmayapti

1. Server ishlaganini tekshiring: `npm run dev` (server papkada)
2. `public/events` papka borligini tekshiring
3. File permissions to'g'riligini tekshiring

### Rasm ko'rinmayapti

1. Browser console'da URL tekshiring
2. Server static middleware ishlashini tekshiring: `http://localhost:4000/events/filename.jpg`
3. CORS sozlamalari to'g'riligini tekshiring

### 401 Unauthorized

1. Admin hisobiga kirilganligini tekshiring
2. Cookie'lar o'chirilmaganligini tekshiring
3. `withCredentials: true` borligini tekshiring
