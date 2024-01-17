import { students } from "./students.js";

export default class Subjects {
  constructor(name, students, teachers) {
    this.name = name;
    (this.students = students), (this.teachers = teachers);
  }

  addStudent(studentName) {
    let addStudent = students[studentName];
    this.students.push(addStudent);
  }

  removeStudent(studentName) {
    let student = students[studentName];
    this.students.pop(student);
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
music.addStudent("emmanuel");
music.addStudent("maja");
music.removeStudent("maja");
music.addStudent("hedvig");
art.addStudent("maja");
art.addStudent("hedvig");
art.removeStudent("hedvig");

console.log(music);

console.log(art);
