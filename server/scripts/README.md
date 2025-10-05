# Default Admin Yaratish

Bu script yordamida default super admin yaratishingiz mumkin.

## Ishlatish

```bash
cd server
npm run create-admin
```

## Default Admin Ma'lumotlari

Script quyidagi ma'lumotlar bilan super admin yaratadi:

- **Email:** admin@asaka.uz
- **Username:** superadmin
- **Password:** Admin123!
- **Contact:** +998905255733
- **Super Admin:** Ha (isAdmin: true)

## MUHIM!

⚠️ **XAVFSIZLIK:**
1. Tizimga kirgach darhol parolni o'zgartiring!
2. Bu ma'lumotlarni xavfsiz joyda saqlang
3. Production muhitida bu paroldan foydalanmang

## Ma'lumotlarni o'zgartirish

Agar default ma'lumotlarni o'zgartirmoqchi bo'lsangiz, `scripts/createDefaultAdmin.js` faylini tahrirlang:

```javascript
const defaultAdmin = {
    name: "Super Admin",
    username: "superadmin",
    email: "admin@asaka.uz",
    contact: "+998905255733",
    password: "Admin123!",
    isAdmin: true
};
```

## Xatoliklar

Agar "admin allaqachon mavjud" xatosi chiqsa, bu normal holat. Script mavjud adminni qayta yaratmaydi.

Agar MongoDB ulanish xatosi bo'lsa:
1. MongoDB Docker container ishlaganligini tekshiring: `docker ps | grep mongo`
2. `.env` fayldagi `MONGO_URI` ni tekshiring
3. Docker Compose ishga tushiring: `docker-compose up -d`
