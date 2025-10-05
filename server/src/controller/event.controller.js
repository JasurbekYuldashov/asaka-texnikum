const { Event } = require("../model/events.model.js");

const createEvent = async (req, res) => {
    try {
        const { title, details } = req.body;

        console.log('Create event request:', {
            title,
            details,
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
            [title, details].some(
                (field) => typeof field !== "string" || field.trim() === ""
            )
        ) {
            return res
                .status(400)
                .json({ success: false, message: "Ma'lumotlar to'liq emas" });
        }

        // Fayl yo'lini yaratish (server URL bilan)
        const posterURL = `/events/${req.file.filename}`;

        await Event.create({
            title,
            details,
            posterURL,
            author: req.admin
        });

        console.log('Event created successfully:', posterURL);

        return res
            .status(200)
            .json({
                success: true,
                message: "Tadbir muvaffaqiyatli yaratildi",
                posterURL
            });
    } catch (error) {
        console.error('Create event error:', error);
        return res
            .status(500)
            .json({
                success: false,
                message: error.message || "Xatolik yuz berdi"
            });
    }
};

const getEvents = async (req,res) => {
    try {
        const events = await Event.find({});

        return res.status(200).json({success:true,message:'events fetched',events})
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
}

const getEventById = async (req,res) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);

        return res.status(200).json({success:true,message:'event fetched',event})
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
}

const editEvent = async (req, res) => {
    try {
        const { title, details } = req.body;
        const { id } = req.params;

        const isEventExist = await Event.findById(id);

        if (!isEventExist) {
            return res
                .status(404)
                .json({ success: false, message: "event doesn't exist" });
        }

        await Event.updateOne(
            { _id: id },
            {
                title,
                details,
            }
        );

        return res
            .status(200)
            .json({ success: true, message: "event updated" });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const isEventExist = await Event.findById(id);

        if (!isEventExist) {
            return res
                .status(404)
                .json({ success: false, message: "event doesn't exist" });
        }

        await Event.deleteOne({ _id: id });

        return res
            .status(200)
            .json({ success: true, message: "event deleted" });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "something went wrong" });
    }
};

module.exports = {
    createEvent,
    editEvent,
    deleteEvent,
    getEvents,
    getEventById
};
