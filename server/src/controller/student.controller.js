const { Student } = require("../model/student.model.js");

const createStudent = async (req, res) => {
    try {
        const { fullName, specialty, course, achievement } = req.body;

        console.log('Create student request:', {
            fullName,
            specialty,
            course,
            achievement,
            hasFile: !!req.file,
            file: req.file ? {
                filename: req.file.filename,
                mimetype: req.file.mimetype,
                size: req.file.size
            } : null
        });

        // Multer orqali yuklangan fayl
        if (!req.file) {
            return res
                .status(400)
                .json({ success: false, message: "Rasm yuklash majburiy" });
        }

        if (
            [fullName, specialty, achievement].some(
                (field) => typeof field !== "string" || field.trim() === ""
            ) || !course
        ) {
            return res
                .status(400)
                .json({ success: false, message: "Ma'lumotlar to'liq emas" });
        }

        // Fayl yo'lini yaratish
        const photoURL = `/students/${req.file.filename}`;

        await Student.create({
            fullName,
            specialty,
            course: parseInt(course),
            achievement,
            photoURL,
            author: req.admin
        });

        console.log('Student created successfully:', photoURL);

        return res
            .status(200)
            .json({
                success: true,
                message: "Talaba muvaffaqiyatli qo'shildi",
                photoURL
            });
    } catch (error) {
        console.error('Create student error:', error);
        return res
            .status(500)
            .json({
                success: false,
                message: error.message || "Xatolik yuz berdi"
            });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find({}).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: 'Talabalar ro\'yxati',
            students
        })
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Xatolik yuz berdi" });
    }
}

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);

        if (!student) {
            return res
                .status(404)
                .json({ success: false, message: "Talaba topilmadi" });
        }

        return res.status(200).json({
            success: true,
            message: 'Talaba ma\'lumotlari',
            student
        })
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Xatolik yuz berdi" });
    }
}

const editStudent = async (req, res) => {
    try {
        const { fullName, specialty, course, achievement } = req.body;
        const { id } = req.params;

        const isStudentExist = await Student.findById(id);

        if (!isStudentExist) {
            return res
                .status(404)
                .json({ success: false, message: "Talaba topilmadi" });
        }

        await Student.updateOne(
            { _id: id },
            {
                fullName,
                specialty,
                course: parseInt(course),
                achievement,
            }
        );

        return res
            .status(200)
            .json({ success: true, message: "Talaba ma'lumotlari yangilandi" });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Xatolik yuz berdi" });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const isStudentExist = await Student.findById(id);

        if (!isStudentExist) {
            return res
                .status(404)
                .json({ success: false, message: "Talaba topilmadi" });
        }

        await Student.deleteOne({ _id: id });

        return res
            .status(200)
            .json({ success: true, message: "Talaba o'chirildi" });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Xatolik yuz berdi" });
    }
};

module.exports = {
    createStudent,
    editStudent,
    deleteStudent,
    getStudents,
    getStudentById
};
