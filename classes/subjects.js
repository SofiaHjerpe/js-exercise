import { students } from "./students.js";

export default class Subjects {
  constructor(name, students, teachers) {
    this.name = name;
    (this.students = students), (this.teachers = teachers);
  }

  addStudent(subjectN, studentName) {
    let subjectName = subjects[subjectN];
    let addStudent = students[studentName];
    this.students.push(addStudent);
    addStudent.subjects.push(subjectName);
  }

  removeStudent(subjectN, studentName) {
    let subjectName = subjects[subjectN];
    let student = students[studentName];
    this.students.pop(student);
    student.subjects.pop(subjectName);
  }
  _displayAllStudentsListedToSubject(subjectN) {
    let subjectName = subjects[subjectN];
    return subjectName.students;
  }
  displayAllTeachers(subjectN) {
    let subjectName = subjects[subjectN];
    return subjectName.teachers;
  }
}
export let math = new Subjects("math", [], {
  name: "Clas Gönsson",
  assistant: "Clara Nilsson",
});
export let art = new Subjects("art", [], {
  name: "Helena Vidsteth",
  assistant: "Arvid Gönsson",
});
export let music = new Subjects("music", [], {
  name: "Östen Wall",
  assistant: "Britt Klasson",
});
export let swedish = new Subjects("swedish", [], {});
//lägger ihop alla instanser till ett objekt
export let subjects = {
  math: math,
  art: art,
  music: music,
  swedish: swedish,
};
music.addStudent("music", "emmanuel");
music.addStudent("music", "maja");
music.removeStudent("music", "maja");
music.addStudent("music", "hedvig");
art.addStudent("art", "maja");
art.addStudent("art", "hedvig");
art.removeStudent("art", "hedvig");
let allArtStudents = art._displayAllStudentsListedToSubject("art");
console.log(allArtStudents);
let allMusicStudents = art._displayAllStudentsListedToSubject("music");
console.log(allMusicStudents);
let allMusicTeachers = music.displayAllTeachers("music");
console.log(allMusicTeachers);

console.log(music);
console.log(art);
