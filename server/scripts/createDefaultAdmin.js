const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Admin Schema
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    refreshToken: String
}, { timestamps: true });

const Admin = mongoose.model("Admin", adminSchema);

// Default admin ma'lumotlari
const defaultAdmin = {
    name: "Super Admin",
    username: "superadmin",
    email: "admin@asaka.uz",
    contact: "+998905255733",
    password: "Admin123!",
    isAdmin: true
};

async function createDefaultAdmin() {
    try {
        // MongoDB ga ulanish
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "adminDB"
        });
        console.log("✅ MongoDB ga ulanildi");

        // Admin bormi tekshirish
        const existingAdmin = await Admin.findOne({
            email: defaultAdmin.email
        });

        if (existingAdmin) {
            console.log("⚠️  Default admin allaqachon mavjud!");
            console.log("   Email:", existingAdmin.email);
            console.log("   Username:", existingAdmin.username);
            console.log("   Super Admin:", existingAdmin.isAdmin ? "Ha" : "Yo'q");
            process.exit(0);
        }

        // Parolni hash qilish
        const hashedPassword = await bcrypt.hash(defaultAdmin.password, 12);

        // Yangi admin yaratish
        const newAdmin = await Admin.create({
            name: defaultAdmin.name,
            username: defaultAdmin.username,
            email: defaultAdmin.email,
            contact: defaultAdmin.contact,
            password: hashedPassword,
            isAdmin: true
        });

        console.log("\n✅ Default Super Admin muvaffaqiyatli yaratildi!");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("📧 Email:", defaultAdmin.email);
        console.log("👤 Username:", defaultAdmin.username);
        console.log("🔑 Password:", defaultAdmin.password);
        console.log("📱 Contact:", defaultAdmin.contact);
        console.log("👑 Super Admin: Ha");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("\n⚠️  MUHIM: Bu parolni xavfsiz joyda saqlang!");
        console.log("   Tizimga kirgach parolni o'zgartiring!\n");

        process.exit(0);
    } catch (error) {
        console.error("❌ Xatolik:", error.message);
        process.exit(1);
    }
}

// Scriptni ishga tushirish
createDefaultAdmin();
