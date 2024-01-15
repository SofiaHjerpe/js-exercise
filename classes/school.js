import Student from "./students.js";
let melvin = new Student("melvin", 12, "male", ["music", "swedish"]);
let maja = new Student("maja", 14, "woman", ["math", "science"]);
let emilia = new Student("emilia", 15, "woman", ["art", "science"]);
let emmanuel = new Student("emmanuel", 14, "male", ["math", "science"]);
let hedvig = new Student("hedvig", 12, "woman", ["music", "spanish"]);
let students = {
  melvin: melvin,
  maja: maja,
  emilia: emilia,
  emmanuel: emmanuel,
  hedvig: hedvig,
};
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
console.log(mainSchool);
