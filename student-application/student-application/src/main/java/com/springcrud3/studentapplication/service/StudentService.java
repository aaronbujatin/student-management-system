package com.springcrud3.studentapplication.service;

import com.springcrud3.studentapplication.exception.UserNotFoundException;
import com.springcrud3.studentapplication.model.Student;
import com.springcrud3.studentapplication.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student saveStudent(Student student){
        return studentRepository.save(student);
    }

    public List<Student> getAllStudent(){

        return studentRepository.findAll();
    }

    public Student findStudentById(Long id){
        return studentRepository.findStudentById(id)
                .orElseThrow(() -> new UserNotFoundException("User id " + id + " was not found"));
    }

    public Student updateStudent(Student student){
        return studentRepository.save(student);
    }

    public void deleteStudentById(Long id){
        studentRepository.deleteStudentById(id);
    }


    public Student updateStudentById(Student student) {
        return studentRepository.save(student);
    }
}

