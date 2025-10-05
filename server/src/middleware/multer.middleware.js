const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/events");
    },
    filename: (req, file, cb) => {
        // Unique filename yaratish
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        const nameWithoutExt = path.basename(file.originalname, ext);
        cb(null, nameWithoutExt + '-' + uniqueSuffix + ext);
    },
});

// Faqat rasm fayllarini qabul qilish
const fileFilter = (req, file, cb) => {
    // Extension tekshirish
    const ext = path.extname(file.originalname).toLowerCase();
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.jfif'];

    console.log('📁 File upload attempt:', {
        originalname: file.originalname,
        mimetype: file.mimetype,
        extension: ext
    });

    if (allowedExtensions.includes(ext)) {
        console.log('✅ File accepted');
        return cb(null, true);
    } else {
        console.log('❌ File rejected - invalid extension');
        cb(new Error(`Faqat rasm fayllarini yuklash mumkin! (jpg, jpeg, png, gif, webp). Sizning fayl: ${file.originalname}`));
    }
};

module.exports = {
    upload: multer({
        storage,
        fileFilter,
        limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
    }),
};
