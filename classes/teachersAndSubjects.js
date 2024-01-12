// subjects class
class Subjects {
  constructor(name, students, teachers) {
    this.name = name;
    (this.students = students), (this.teachers = teachers);
  }
}
let math = new Subjects("math", ["Maja", "Isak", "Emmanuel", "Calle"], {
  name: "Clas Gönsson",
  assistant: "Clara Nilsson",
});
let art = new Subjects("art", ["Michael", "Isak", "Emilia", "Chloe"], {
  name: "Helena Vidsteth",
  assistant: "Arvid Gönsson",
});
let music = new Subjects("music", ["Olle", "Hedvig", "Marcus", "Melvin"], {
  name: "Östen Wall",
  assistant: "Britt Klasson",
});
let swedish = new Subjects(
  "swedish",
  ["Emmanuel", "Hedvig", "Olle", "Melvin"],
  {}
);
//lägger ihop alla instanser till ett objekt
let subjects = {
  math: math,
  art: art,
  music: music,
  swedish: swedish,
};

music.students.push("Calle");
console.log(music);
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
}
let osten = new Teacher("Östen Wall", ["music"]);
let clas = new Teacher("Clas Gönsson", ["math", "english"]);

osten.subjects.push("music theory");
clas.subjects.unshift("swedish");

osten.addSubjectToTeacher("music");
clas.addSubjectToTeacher("art");
console.log(osten);
console.log(clas);
console.log(art);
console.log(music);
//6 Resonera
// En admin på en skola kan använda datan för att lägga till nya lärare, ta bort lärare, lägga in och ta bort ämnen. Det saknas en beskrivning från läraren om dennes verksamhet och vad han eller hon fokuserar på att lära ut.
