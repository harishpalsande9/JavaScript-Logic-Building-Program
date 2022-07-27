console.log("JavaScript Arrays: Alphabetic sorting vs numeric sorting");

const array = [3, 0, 10, 1];

// alphabetic sart

array.sort();
console.log(array);

// numeric sort ascending
array.sort((a, b) => a - b);
console.log(array);

// numeric sort descending
array.sort((a, b) => b - a);
console.log(array);
