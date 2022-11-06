import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';


export default function Home() {

    const [students, setStudents] = useState([]);
    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await axios.get("http://localhost:8080/student/all");
        setStudents(result.data);
    }

    const { id } = useParams()
    const deleteStudent = async (id) => {
        await axios.delete(`http://localhost:8080/student/delete/${id}`)
        loadStudents()
    }

    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex flex-row-reverse my-4'>
                    <Link className='bg-blue-500 px-4 py-2 text-md flex items-center space font-semibold rounded-lg mr-2 text-white mt-6 mx-auto hover:bg-blue-600'
                        to='/addstudent'><AiOutlinePlus className={'font-black text-xl mr-1'} /> Add Student</Link>
                </div>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">Fullname</th>
                                <th scope="col" className="py-3 px-6">Address</th>
                                <th scope="col" className="py-3 px-6">Email</th>
                                <th scope="col" className="py-3 px-6">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student) => (
                                    <tr key={student.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="py-4 px-6">
                                            {student.studentName}
                                        </td>
                                        <td className="py-4 px-6">
                                            {student.studentAddress}
                                        </td>
                                        <td className="py-4 px-6">
                                            {student.studentEmail}
                                        </td>
                                        <td className="py-4 px-6 flex">
                                            <Link to={`/viewstudent/${student.id}`}  class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </Link>
                                            <Link to={`/editstudent/${student.id}`} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </a>
                                            </Link>
                                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 " onClick={() => deleteStudent(student.id)}>
                                                <a href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div></div>
    )
}
