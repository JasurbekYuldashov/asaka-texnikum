import axios from "axios";
export const GetAdminFunc = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // Next.js proxy orqali
            const { data } = await axios.get("/api/v1/admin/getadmin",
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
