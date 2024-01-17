export default class Grades {
  constructor(name, description, teachers, students, subjects) {
    (this.name = name),
      (this.description = description),
      (this.teachers = teachers),
      (this.students = students);
    this.subjects = subjects;
  }
  changeDescription(grade, newDescription) {
    this.name = grade;
    this.description = newDescription;
    this.students = this.students;
    this.teachers = this.teachers;
    this.subjects = this.subjects;
  }
}
export let MVG = new Grades(
  "Mvg",
  "Very good job!Super good motivations and examples ",
  [],
  [],
  []
);
export let VG = new Grades(
  "Vg",
  "Good job!Great motivations and examples",
  [],
  [],
  []
);
export let G = new Grades(
  "G",
  "Ok! Could include more motivations and examples",
  [],
  [],
  []
);
export let IG = new Grades("Ig", "Not so good! ", [], [], []);

export let grades = {
  VG: VG,
  MVG: MVG,
  G: G,
  IG: IG,
};
VG.changeDescription(
  "Vg",
  "Good job! Great motivations and examples, the analysis could be more indepth though.."
);
console.log(VG);
console.log(MVG);
