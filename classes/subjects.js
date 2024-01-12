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

music.students.push("Calle");
console.log(music);
