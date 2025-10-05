const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const adminRouter = require("./route/admin.route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const eventRouter = require("./route/event.route.js");
const noticeRouter = require("./route/notice.route.js");
const carouselRouter = require("./route/carousel.route.js");

dotenv.config(".env");

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URI,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

app.use(express.json());

app.use(cookieParser());

// Static files (rasmlar) uchun
app.use('/events', express.static(path.join(__dirname, '../public/events')));

app.use("/api/v1", adminRouter);

app.use("/api/v1/event", eventRouter);

app.use("/api/v1/notice", noticeRouter);

app.use("/api/v1/carousel", carouselRouter);

app.get("/", (req, res) => {
    res.send("Working");
});

module.exports = app;
