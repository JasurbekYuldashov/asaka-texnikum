import axios from "axios";

export const CreateEvent = (title, details, file) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fetchlink = process.env.NEXT_PUBLIC_SERVERURL;

            // FormData yaratish
            const formData = new FormData();
            formData.append('title', title);
            formData.append('details', details);
            formData.append('event', file); // 'event' - multer.single("event") ga mos

            const { data } = await axios.post(
                fetchlink + "/api/v1/event/upload",
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
