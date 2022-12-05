package com.springcrud3.studentapplication.controller;

import com.springcrud3.studentapplication.exception.UserNotFoundException;
import com.springcrud3.studentapplication.fileupload.FileUploadUtils;
import com.springcrud3.studentapplication.model.Student;
import com.springcrud3.studentapplication.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin( origins = "http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentController {

    private final StudentService studentService;


    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/save")
    public Student saveStudent(@RequestBody Student student)  {

        return studentService.saveStudent(student);
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable("id") Long id){
        return studentService.findStudentById(id);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Student>> getAllStudent(){
       List<Student> students = studentService.getAllStudent();
        return new ResponseEntity<>(students,HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable ("id") Long id){

        return studentService.updateStudentById(student);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable("id") Long id){
       studentService.deleteStudentById(id);
       return "Student successfully deleted";
    }
}
