// 1
const lexicon = {
  name: "lexicon",
  address: "Lexicon Stockholm Box 863",
  zipcode: "111 37",
  city: "Stockholm",
  addStudent: "",
  students: [],
  teachers: [],
  listOfSubjects: "",
  listOfStudents: "",
  fireTeacher: "",
  addStudents: "",
};
// 2
let art = {
  name: "art",
  students: [],
  teachers: {
    name: "",
  },
};
let music = {
  name: "music",
  students: [],
  teachers: {
    name: "",
  },
};
let spanish = {
  name: "spanish",
  students: [],
  teachers: {
    name: "",
  },
};
let subjects = {
  art: art,
  music: music,
  spanish: spanish,
};
// 3
let melvin = {
  name: "melvin",
  age: 15,
  gender: "male",
  subjects: [],
  addSubject: "",
};
let maja = {
  name: "maja",
  age: 14,
  gender: "female",
  subjects: [],
  addSubject: "",
};
let emmanuel = {
  name: "emmanuel",
  age: 15,
  gender: "male",
  subjects: [],
  addSubject: "",
};
let hedvig = {
  name: "hedvig",
  age: 12,
  gender: "female",
  subjects: [],
  addSubject: "",
};
let emilia = {
  name: "emilia",
  age: 15,
  gender: "female",
  subjects: [],
  addSubject: "",
};
let students = {
  melvin: melvin,
  maja: maja,
  emmanuel: emmanuel,
  hedvig: hedvig,
  emilia: emilia,
};
// 4

let niclas = {
  name: "Niklas Fähnrich",
  subjects: [],
  students: [],
  addSubjectToTeacher: function (subjectName) {
    let subject = subjects[subjectName];
    this.subjects.push(subject.name);

    subject.teachers.name = this.name;
  },
  addStudent: "",
};
let thomas = {
  name: "Thomas Månsson",
  subjects: [],
  students: [],
  addSubjectToTeacher: function (subjectName) {
    let subject = subjects[subjectName];
    this.subjects.push(subject.name);

    subject.teachers.name = this.name;
  },
  addStudent: "",
};
let niclas2 = {
  name: "Niklas Fähnrich",
  subjects: [],
  students: [],
  addSubjectToTeacher: function (subjectName) {
    let subject = subjects[subjectName];
    this.subjects.push(subject.name);

    subject.teachers.name = this.name;
  },
  addStudent: "",
};
let teachers = {
  niclas: niclas,
  thomas: thomas,
  niclas2: niclas2,
};
// 5
thomas.subjects.push(art);
console.log(thomas);
console.log(art);
//  Resonera, hur kan man använda den datan ur ett admins perspektiv på en skola,
//  och tycker du den är komplett? Vad saknas?
// Datan går att använda ur en admins perspektiv genom att tilldela läraren ett specifikt ämne.
// Det som saknas är ett sätt att lägga till läraren i ämnes objektet, så att de som ser ämnet vet vem som undervisar i det.
// 6
art.students.push(melvin);
console.log(art);
// 7 //8
niclas.addSubjectToTeacher("art");
console.log(niclas);
console.log(art);

niclas.addSubject = function (subjectName) {
  let subject = subjects[subjectName];
  niclas.subjects.push(subject);
  subject.teachers.name = niclas.name;
};
niclas.addSubject("music");
console.log(niclas);
// 9
niclas.addStudent = function (studentName) {
  let student = students[studentName];
  niclas.students.push(student);
};
niclas.addStudent("maja");
console.log(niclas);
console.log(maja);
lexicon.addStudent = function (studentName) {
  let student = students[studentName];
  lexicon.students.push(student);
};
lexicon.addStudent("maja");
console.log(lexicon);

melvin.addSubject = function (subjectName) {
  let subject = subjects[subjectName];
  melvin.subjects.push(subject);
  subject.students.push(melvin.name);
};
emilia.addSubject = function (subjectName) {
  let subject = subjects[subjectName];
  emilia.subjects.push(subject);
  subject.students.push(emilia.name);
};
emmanuel.addSubject = function (subjectName) {
  let subject = subjects[subjectName];
  emmanuel.subjects.push(subject);
  subject.students.push(emmanuel.name);
};

melvin.addSubject("spanish");
console.log(melvin);
console.log(spanish);
lexicon.listOfSubjects = function (studentName) {
  let student = students[studentName];
  console.log(student.subjects);
};

lexicon.listOfSubjects("melvin");
lexicon.teachers.push(niclas);
console.log(lexicon);

lexicon.fireTeacher = function (teacher, subject) {
  let teach = teachers[teacher];
  while (lexicon.teachers.length > 0) {
    lexicon.teachers.pop();
  }
  teach.name = "";
  let subj = subjects[subject];
  subj.teachers.name = "";
};
// 11
lexicon.fireTeacher("niclas", "music");
console.log(niclas);
// 12 13
console.log(music);
console.log(lexicon);
emilia.addSubject("music");
emmanuel.addSubject("spanish");
melvin.addSubject("art");
melvin.addSubject("music");
niclas2.addSubjectToTeacher("art");
thomas.addSubjectToTeacher("music");
lexicon.addStudent("melvin");
lexicon.addStudent("maja");
lexicon.addStudent("emmanuel");
console.log(melvin);
console.log(emilia);
// 14

lexicon.listOfStudents = function () {
  for (let student in students) {
    console.log(`${student}`);
  }
};

lexicon.listOfStudents();
lexicon.listOfSubjects("emmanuel");