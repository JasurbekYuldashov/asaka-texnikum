const FetchStudentDataByIdFunc = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('/api/v1/student/' + id);

            const data = await response.json();
            resolve({
                data: data.student,
                success: true
            });
        } catch (error) {
            console.error('Error fetching student:', error);
            reject({
                message: error.message,
                success: false
            });
        }
    })
}

export default FetchStudentDataByIdFunc;
