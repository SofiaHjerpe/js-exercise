import { students } from "./students.js";
// subjects class
class Subjects {
  constructor(name, students, teachers) {
    this.name = name;
    (this.students = students), (this.teachers = teachers);
  }
  regulateStudents(studentName, num) {
    let student = students[studentName];
    if (num < 12 && student) {
      this.students.pop(student);
    } else {
      this.students.push(student);
    }
  }
}
let math = new Subjects("math", [], {
  name: "Clas Gönsson",
  assistant: "Clara Nilsson",
});
let art = new Subjects("art", [], {
  name: "Helena Vidsteth",
  assistant: "Arvid Gönsson",
});
let music = new Subjects("music", [], {
  name: "Östen Wall",
  assistant: "Britt Klasson",
});
let swedish = new Subjects("swedish", [], {});
//lägger ihop alla instanser till ett objekt
let subjects = {
  math: math,
  art: art,
  music: music,
  swedish: swedish,
};
//Är siffran under 12  tas elev bort från klassen. Är siffran över 12 läggs eleven till i klassen.

music.regulateStudents("maja", 10);
music.regulateStudents("emmanuel", 15);

console.log(music);
art.regulateStudents("maja", 10);
art.regulateStudents("emmanuel", 10);
art.regulateStudents("maja", 15);
art.regulateStudents("emilia", 15);
art.regulateStudents("emmanuel", 15);
console.log(art);
// teacher class
class Teacher {
  constructor(name, subjects) {
    this.name = name;
    this.subjects = subjects;
  }
  // subjectName måste vara ett ämne inom ämne-objektet
  addSubjectToTeacher(subjectName) {
    // Hitta rätt ämne baserat på namn från ämne-objektet
    // lägg till det i en subject variabel
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
}
let osten = new Teacher("Östen Wall", ["music"]);
let clas = new Teacher("Clas Gönsson", ["math", "english"]);
let osten2 = new Teacher("Osten Wall", []);

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
//6 Resonera
// En admin på en skola kan använda datan för att lägga till nya lärare, ta bort lärare, lägga in och ta bort ämnen. Det saknas en beskrivning från läraren om dennes verksamhet och vad han eller hon fokuserar på att lära ut.
