console.log("JavaScript Clean Coding Best Practices: Objects");

//Bad Code
const player = {
  playerName: " Arda",
  playerSurname1: "Guler",
  playerAge1: "17",
  tm: "Fenerbahce",
  active: true,
};
let surname1 = player.playerSurname1;
let age1 = player.playerAge1;

console.log("Bad Code :- ", surname1, age1);

//Good Code
const person = {
  name: "Arda",
  surname: "Guler",
  age: 17,
  tm: "Fenerbahce",
  isActive: true,
};

let { surname, age } = person;
console.log("Good Code :- ", surname, age);
