const FetchStudentsData = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('/api/v1/student/all');

            const data = await response.json();
            resolve({
                data: data.students,
                success: true
            });
        } catch (error) {
            console.error('Error fetching students:', error);
            reject({
                message: error.message,
                success: false
            });
        }
    })
}

export default FetchStudentsData;
