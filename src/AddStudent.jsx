import React, { useState } from 'react'
import StudentService from './services/StudentService';
import {Link} from 'react-router-dom';

const AddEmployee = () => {

  const [student, setStudent] = useState({
    id: "",
    studentName: "",
    studentAddress: "",
    studentEmail: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value });
  }

  const saveStudent = (e) => {
    e.preventDefault();
    StudentService.saveStudent(student).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='container mx-auto max-w-[32rem] mt-6 shadow border-b' >
      <div className='px-16 py-9 '>
        <div className='font-thin text-2xl tracking-wider'>
          <h1>Add new Student</h1>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>Fullname</label>
          <input type="text"
            className='h-10 w-96 border mt-2 px-2 py-2'
            name="studentName"
            onChange={(e) => handleChange(e)}
            value={student.studentName}
          />
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>Address</label>
          <input type="text"
            className='h-10 w-96 border mt-2 px-2 py-2'
            name="studentAddress"
            onChange={(e) => handleChange(e)}
            value={student.studentAddress} />
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>Email</label>
          <input type="text"
            className='h-10 w-96 border mt-2 px-2 py-2'
            name="studentEmail"
            onChange={(e) => handleChange(e)}
            value={student.studentEmail}></input>
        </div>
        <button onClick={saveStudent} className='rounded-lg bg-green-500 text-white px-8 py-2 mt-2 font-semibold hover:bg-green-600'>Save</button>
        <Link to='/studentlist' className='rounded-lg bg-red-500 text-white px-8 py-2 mt-2 font-semibold ml-2 hover:bg-red-600'>Cancel</Link>
      </div> 
    </div>
  )
}

export default AddEmployee;