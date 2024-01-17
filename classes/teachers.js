import { math, art, music, subjects } from "./subjects.js";
import { MVG, VG, grades } from "./grades.js";

import { students } from "./students.js";

// teacher class
class Teacher {
  constructor(name, subjects) {
    this.name = name;
    this.subjects = subjects;
  }
  // subjectName måste vara ett ämne inom ämne-objektet
  addSubjectToTeacher(subjectName) {
    // Hitta rätt ämne baserat på namn från ämne-objektet
    // Lägg till det i en subject variabel
    let subject = subjects[subjectName];

    // Lägg till ämnet i lärarens subjects-array
    this.subjects.push(subject);

    // Tillbaka till ämnes klassen. Lägg till läraren i ämnets teachers-objekt. Sedan refereras till lärarens namn i denna class med this.name.
    subject.teachers.name = this.name;
  }
  removeTeacher(subjectN, teacherName) {
    if (subjectN == "art" && this.name == teacherName) {
      let subject = subjects[subjectN];
      this.name = "";
      subject.teachers.name = "";
    }
    if (subjectN == "music" && this.name == teacherName) {
      let subject = subjects[subjectN];
      this.name = "";
      subject.teachers.name = "";
    }
  }
  addGrade(t, studentName, subjectName, grade) {
    let teacher = teachers[t];
    let student = students[studentName];
    let subject = subjects[subjectName];
    let addG = grades[grade];
    addG.teachers.push(teacher);
    addG.students.push(student);
    addG.subjects.push(subject);
  }
}
let osten = new Teacher("Östen Wall", ["music"]);
let clas = new Teacher("Clas Gönsson", ["math", "english"]);
let osten2 = new Teacher("Osten Wall", []);
export let teachers = {
  osten: osten,
  clas: clas,
  osten2: osten2,
};
osten.subjects.push("music theory");
clas.subjects.unshift("swedish");

osten.addSubjectToTeacher("music");
clas.addSubjectToTeacher("art");
clas.removeTeacher("art", "Clas Gönsson");
osten.removeTeacher("music", "Östen Wall");

osten2.addSubjectToTeacher("music");
console.log(osten2);
console.log(clas);
console.log(art);
console.log(music);
osten2.addGrade("osten2", "maja", "music", "MVG");
//6 Resonera
// En admin på en skola kan använda datan för att lägga till nya lärare, ta bort lärare, lägga in och ta bort ämnen. Det saknas en beskrivning från läraren om dennes verksamhet och vad han eller hon fokuserar på att lära ut.
