console.log("replace if else with switch case");

let number = 2;

if (number === 1) {
  console.log("One");
} else if (number === 2) {
  console.log("Two");
} else if (number === 3) {
  console.log("Three");
} else {
  console.log("Greater Than Three");
}

switch (number) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
  default:
    console.log("Greater than three");
}
