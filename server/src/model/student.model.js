const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        specialty: {
            type: String,
            required: true,
        },
        course: {
            type: Number,
            required: true,
        },
        achievement: {
            type: String,
            required: true,
        },
        photoURL: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = { Student: mongoose.model("Student", studentSchema) };
