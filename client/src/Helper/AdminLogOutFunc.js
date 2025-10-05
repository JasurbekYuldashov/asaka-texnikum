import axios from "axios";
export const AdminLogOutFunc = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // Next.js proxy orqali
            const { data } = await axios.post("/api/v1/admin/logout/",
                {},
                {
                    withCredentials: true
                }
            )
            resolve(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            reject(error?.response?.data);
        }
    })
}
