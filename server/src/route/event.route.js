const express = require("express");
const { upload } = require("../middleware/multer.middleware");
const {
    createEvent,
    editEvent,
    deleteEvent,
    getEvents,
    getEventById,
} = require("../controller/event.controller");
const authenticateAdmin = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");

const eventRouter = express.Router();

// Multer error handling middleware
const handleMulterError = (err, req, res, next) => {
    if (err) {
        console.error('Multer error:', err);
        return res.status(400).json({
            success: false,
            message: err.message || 'Fayl yuklashda xatolik'
        });
    }
    next();
};

eventRouter.post(
    "/upload",
    authenticateAdmin,
    isAdmin,
    (req, res, next) => {
        upload.single("event")(req, res, (err) => {
            if (err) {
                console.error('Multer error:', err);
                return res.status(400).json({
                    success: false,
                    message: err.message || 'Fayl yuklashda xatolik'
                });
            }
            next();
        });
    },
    createEvent
);

eventRouter.get("/all", getEvents);

eventRouter.get("/:id", getEventById);

eventRouter.post("/edit/:id", authenticateAdmin, isAdmin, editEvent);

eventRouter.post("/delete/:id", authenticateAdmin, isAdmin, deleteEvent);

module.exports = eventRouter;
