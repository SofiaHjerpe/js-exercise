import { teachers } from "./teachers.js";
import { students } from "./students.js";

class School {
  constructor(name, address, zipcode, city, student, teachers) {
    this.name = name;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.student = student;
    this.teachers = teachers;
  }
  addStudent(studentName) {
    let addStudent = students[studentName];
    this.student.push(addStudent);
  }
  addTeacher(teacherName) {
    let addTeacher = teachers[teacherName];
    this.teachers.push(addTeacher);
  }
  displayAllStudents() {
    return this.student;
  }
  displayAllTeachers() {
    return this.teachers;
  }
}

let mainSchool = new School(
  "Adolf Fredriks Musikklasser",
  "Västmannagatan 19",
  "111 56",
  "Stockholm",
  [],
  []
);

mainSchool.addStudent("maja");
mainSchool.addStudent("melvin");
mainSchool.addStudent("hedvig");
mainSchool.addStudent("emmanuel");
mainSchool.addStudent("emilia");
mainSchool.addStudent("melvin");
mainSchool.addTeacher("osten");
mainSchool.addTeacher("clas");
mainSchool.addTeacher("osten2");
console.log(mainSchool);
console.log(mainSchool.displayAllStudents());
console.log(mainSchool.displayAllTeachers());
