console.log("An Example Of JavaScript Arrays");

const array = [];
const object = {};

console.log(typeof array, "typeof array []");
console.log(typeof object, "typeof object []");

console.log(array.length, "array lenght");

console.log(array, "all array ");

//add  1 to end
array.push(1);
console.log(array, "add  1 to end push method");
console.log(array.length, "array lenght");

// add 2 to end
array.push(2);
console.log(array, "add 2 to end with push method");

// add 3 to start
array.unshift(3);
console.log(array, "add 3 to start unshift method");

// numeric start
console.log("numeric start");
array.sort((a, b) => a - b);
console.log(array, "sort");
array.push(4);
console.log(array, "add 4");

// find index of an element and remove it

array.splice(array.indexOf(2), 1);
console.log(array);

// remove Element at index 2
array.splice(2, 1);
console.log(array);

// remove element at index 0
array.splice(0, 1);
console.log(array);

array.push(1, 2, 4);
array.sort((a, b) => a - b);
console.log(array);

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

//Map Function
array.map((ele, index) => console.log(ele, index, "Map Function"));

// For Each loop
array.forEach(function (ele) {
  console.log(ele, "For Each loop");
});

// For Loop
for (element of array) {
  console.log(element, " For Loop");
}

// Add - with join function
let arrayJoin = array.join("-");
console.log(arrayJoin, " ", "Join function Concept");

console.log(typeof arrayJoin, " ", "Type Of arrayJoin");
