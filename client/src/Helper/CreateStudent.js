import axios from "axios";

export const CreateStudent = (fullName, specialty, course, achievement, file) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Next.js proxy orqali
            const apiUrl = "/api/v1/student/upload";

            // FormData yaratish
            const formData = new FormData();
            formData.append('fullName', fullName);
            formData.append('specialty', specialty);
            formData.append('course', course);
            formData.append('achievement', achievement);
            formData.append('student', file); // 'student' - multer.single("student") ga mos

            const { data } = await axios.post(
                apiUrl,
                formData,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            resolve(data);
        } catch (error) {
            console.error('Error creating student:', error);
            reject(error?.response?.data || error);
        }
    })
}
