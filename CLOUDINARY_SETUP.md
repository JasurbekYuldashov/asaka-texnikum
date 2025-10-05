# Cloudinary Sozlash Ko'rsatmasi

## 1. Cloudinary Account Yaratish

1. https://cloudinary.com ga kiring
2. "Sign Up Free" tugmasini bosing
3. Akkount yarating (email/parol yoki Google orqali)

## 2. Cloudinary Ma'lumotlarini Olish

Akkountga kirgandan keyin Dashboard sahifasida quyidagilar ko'rinadi:

```
Cloud Name: your_cloud_name
API Key: 123456789012345
API Secret: your_api_secret
```

## 3. Upload Preset Yaratish

1. Settings > Upload > Upload presets ga kiring
2. "Add upload preset" tugmasini bosing
3. Quyidagi sozlamalarni kiriting:
   - **Upload preset name:** `college_website_preset`
   - **Signing Mode:** `Unsigned`
   - **Folder:** `college_website`
4. "Save" tugmasini bosing

## 4. Environment Variables Sozlash

### Client .env (`client/.env`):

```env
NEXT_PUBLIC_BASEURL=http://localhost:3000
NEXT_PUBLIC_SERVERURL=http://localhost:4000
NEXT_PUBLIC_CLOUDNAME=your_cloud_name
NEXT_PUBLIC_UPLOAD_PRESET=college_website_preset
NEXT_PUBLIC_CLOUD_FOLDER=college_website
```

### Server .env (`server/.env`):

```env
FRONTEND_URI=http://localhost:3000
REFRESH_TOKEN_KEY=asakatuman2sonpolitexnikumi_refresh
ACCESS_TOKEN_KEY=asakatuman2sonpolitexnikumi_access
PORT=4000
MONGO_URI=mongodb://localhost:27017/adminDB

# Cloudinary sozlamalari
CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 5. Ma'lumotlarni Almashtirish

`your_cloud_name`, `your_api_key`, va `your_api_secret` o'rniga Cloudinary Dashboard dan olgan ma'lumotlaringizni kiriting.

## 6. Serverni Qayta Ishga Tushirish

```bash
# Client
cd client
npm run dev

# Server
cd server
npm run dev
```

## Muammo Yechimi

Agar "401 Unauthorized" xatosi chiqsa:
1. Cloud name to'g'ri yozilganligini tekshiring
2. Upload preset unsigned ekanligini tekshiring
3. Environment variables qayta yuklanganligini tekshiring (serverni restart qiling)
4. Browser cache ni tozalang

## Test Qilish

1. Admin panel ga kiring: http://localhost:3000/login
2. "Yangi tadbir yaratish" ga o'ting
3. Rasm yuklashni test qiling

Agar muammo hal bo'lmasa:
- Cloudinary Dashboard > Settings > Security da CORS sozlamalarini tekshiring
- Allowed domains ga `http://localhost:3000` qo'shing
