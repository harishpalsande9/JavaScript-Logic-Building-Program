console.log("challenge first to know wins. Subject: Classes");
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + " " + this.surname;
  }
}

console.log(typeof Person);
