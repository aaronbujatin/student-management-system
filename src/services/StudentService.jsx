import axios from "axios";

const STUDENT_API_BASE_URL = 'http://localhost:8080/student/add';
const STUDENT_GET_API = 'http://localhost:8080/student/all';


class StudentService {
    saveStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    getStudent(student){
        return axios.get(STUDENT_GET_API,student);
    }

}

export default new StudentService();