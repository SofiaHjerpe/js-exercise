import Student from "./students.js";
import { students } from "./students.js";
import { melvin } from "./students.js";
import { maja } from "./students.js";

class School {
  constructor(name, address, zipcode, city, student) {
    this.name = name;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.student = student;
    this.teachers = [];
  }
  addStudent(studentName) {
    let addStudent = students[studentName];
    this.student.push(addStudent);
  }
  displayAllStudents() {
    return this.student;
  }
}

let mainSchool = new School(
  "Adolf Fredriks Musikklasser",
  "Västmannagatan 19",
  "111 56",
  "Stockholm",
  []
);

mainSchool.addStudent("maja");
mainSchool.addStudent("melvin");
mainSchool.addStudent("hedvig");
mainSchool.addStudent("emmanuel");
mainSchool.addStudent("emilia");
mainSchool.addStudent("melvin");
console.log(mainSchool);
console.log(mainSchool.displayAllStudents());
