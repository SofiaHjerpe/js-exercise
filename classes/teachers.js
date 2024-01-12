class Teacher {
  constructor(name, subjects) {
    this.name = name;
    this.subjects = subjects;
  }
}
let osten = new Teacher("Östen Wall", ["music", "swedish"]);
let clas = new Teacher("Clas Gönsson", ["math", "english"]);

osten.subjects.push("music theory");
clas.subjects.unshift("swedish");
console.log(osten);
console.log(clas);
//6 Resonera
// En admin på en skola kan använda datan för att lägga till nya lärare, ta bort lärare, lägga in och ta bort ämnen. Det saknas en beskrivning från läraren om dennes verksamhet och vad han eller hon fokuserar på att lära ut.