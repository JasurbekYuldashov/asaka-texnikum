const express = require("express");
const { uploadStudent } = require("../middleware/student.multer.middleware");
const {
    createStudent,
    editStudent,
    deleteStudent,
    getStudents,
    getStudentById,
} = require("../controller/student.controller");
const authenticateAdmin = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");

const studentRouter = express.Router();

// Multer error handling
studentRouter.post(
    "/upload",
    authenticateAdmin,
    isAdmin,
    (req, res, next) => {
        uploadStudent.single("student")(req, res, (err) => {
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
    createStudent
);

studentRouter.get("/all", getStudents);

studentRouter.get("/:id", getStudentById);

studentRouter.post("/edit/:id", authenticateAdmin, isAdmin, editStudent);

studentRouter.post("/delete/:id", authenticateAdmin, isAdmin, deleteStudent);

module.exports = studentRouter;
