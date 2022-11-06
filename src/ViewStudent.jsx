import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ViewStudent = () => {

    const [student, setStudent] = useState({
        studentName: "",
        studentAddress: "",
        studentEmail: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        const result = await axios.get(`http://localhost:8080/student/${id}`);
        setStudent(result.data);
    }

    return (
        <div>
            <div class="w-[40rem] rounded-lg bg-white shadow-lg h-[18rem] container mx-auto mt-10">
                <div className=''>
                    <h1 className=' text-center font-bold text-2xl text-gray-900'>Student Details</h1>
                    <div class="flex flex-col md:flex-row ">
                        <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=826&t=st=1667724706~exp=1667725306~hmac=d4814f361bc68047cb1e1ec8a7b2d20305369be371883bfabfe8ac44a2f74f6e" alt="" />
                        <div class="p-6 flex flex-col justify-start">
                            <h5 class="text-gray-900 text-md font-medium mb-2 mt-2">Student ID : {student.id}</h5>
                            <h5 class="text-gray-900 text-md font-medium mb-2 mt-2">Name : {student.studentName}</h5>
                            <h5 className=' text-gray-900 text-md font-medium mb-2 mt-2'>Address : {student.studentAddress}</h5>
                            <h5 className=' text-gray-900 text-md font-medium mb-2 mt-2'>Email : {student.studentEmail}</h5>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <Link to='/studentlist' className='items-center mx-auto rounded-lg bg-blue-500 text-white px-8 py-2 mt-2 font-semibold ml-2 hover:bg-blue-600'>Back to list</Link>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent