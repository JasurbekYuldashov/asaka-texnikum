const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const adminRouter = require("./route/admin.route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const eventRouter = require("./route/event.route.js");
const noticeRouter = require("./route/notice.route.js");
const carouselRouter = require("./route/carousel.route.js");
const studentRouter = require("./route/student.route.js");

dotenv.config(".env");

const app = express();

// CORS sozlamalari
const isDevelopment = process.env.NODE_ENV !== 'production';

const corsOptions = {
    // origin: isDevelopment
    //     ? true // Development: barcha origin'lar
    //     : process.env.FRONTEND_URI, // Production: faqat frontend URL
    origin:true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Development rejimini ko'rsatish
if (isDevelopment) {
    console.log('🔓 CORS: Barcha origin\'lar ruxsat etilgan (Development mode)');
} else {
    console.log('🔒 CORS: Faqat', process.env.FRONTEND_URI, 'ruxsat etilgan (Production mode)');
}

app.use(express.json());

app.use(cookieParser());

// Static files (rasmlar) uchun
app.use('/events', express.static(path.join(__dirname, '../public/events')));
app.use('/students', express.static(path.join(__dirname, '../public/students')));

app.use("/api/v1", adminRouter);

app.use("/api/v1/event", eventRouter);

app.use("/api/v1/notice", noticeRouter);

app.use("/api/v1/carousel", carouselRouter);

app.use("/api/v1/student", studentRouter);

app.get("/", (req, res) => {
    res.send("Working");
});

module.exports = app;
