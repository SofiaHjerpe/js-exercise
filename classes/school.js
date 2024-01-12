class School {
  constructor(name, address, zipcode, city) {
    this.name = name;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.students = [];
    this.teachers = [];
  }
}

let mainSchool = new School(
  "Adolf Fredriks Musikklasser",
  "Västmannagatan 19",
  "111 56",
  "Stockholm"
);
