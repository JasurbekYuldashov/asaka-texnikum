import axios from "axios";

export const CreateEvent = (title, details, file) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Next.js proxy orqali - localhost:3000/api -> localhost:4000/api
            const apiUrl = "/api/v1/event/upload";

            // FormData yaratish
            const formData = new FormData();
            formData.append('title', title);
            formData.append('details', details);
            formData.append('event', file); // 'event' - multer.single("event") ga mos

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
            console.error('Error fetching data:', error);
            reject(error?.response?.data || error);
        }
    })
}
