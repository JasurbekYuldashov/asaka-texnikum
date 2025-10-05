import axios from "axios";

export const UpdateStudent = (fullName, specialty, course, achievement, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Next.js proxy orqali
            const { data } = await axios.post("/api/v1/student/edit/" + id,
                {
                    fullName,
                    specialty,
                    course,
                    achievement
                },
                {
                    withCredentials: true
                }
            );
            resolve(data);
        } catch (error) {
            console.error('Error updating student:', error);
            reject(error?.response?.data || error);
        }
    })
}
