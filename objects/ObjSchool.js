// 1
const lexicon = {
  name: "lexicon",
  address: "Lexicon Stockholm Box 863",
  zipcode: "111 37",
  city: "Stockholm",
  students: [],
  teachers: [],
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
};
let maja = {
  name: "maja",
  age: 14,
  gender: "female",
  subjects: [],
};
let emmanuel = {
  name: "emmanuel",
  age: 15,
  gender: "male",
  subjects: [],
};
let hedvig = {
  name: "hedvig",
  age: 12,
  gender: "female",
  subjects: [],
};
let emilia = {
  name: "emilia",
  age: 15,
  gender: "female",
  subjects: [],
};
// 4
let niclas = {
  name: "Niklas Fähnrich",
  subjects: [],
  addSubjectToTeacher: function (subjectName) {
    let subject = subjects[subjectName];
    this.subjects.push(subject.name);

    subject.teachers.name = this.name;
  },
};
let thomas = {
  name: "Thomas Månsson",
  subjects: [],
  addSubjectToTeacher: function (subjectName) {
    let subject = subjects[subjectName];
    this.subjects.push(subject.name);

    subject.teachers.name = this.name;
  },
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
// 7
niclas.addSubjectToTeacher("art");
console.log(niclas);
console.log(art);

