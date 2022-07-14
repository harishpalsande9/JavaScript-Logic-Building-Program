console.log(" How to get the current array index in forEach()");

// On array
const animal = ["Mouse", "Snake", "Cat"];

// For Each Loop
animal.forEach((animal, index) => console.log(animal + " ", index));

// Array of objects
const players = [
  {
    name: "Harish",
    Goals: 23,
  },
  {
    name: "Om",
    Goals: 78,
  },
  {
    name: "Sanket",
    Goals: 12,
  },
];

players.forEach((players, index) => console.log(players.name + " ", index));
