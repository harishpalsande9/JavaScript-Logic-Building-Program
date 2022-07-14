console.log("How to flatten an array using flat() method?");

const array1 = [1, 2, [3]];
console.log(array1);

const array2 = array1.flat();
console.log(array2); // Good

// console.clear();

const array3 = [1, [2, [3]]];
console.log(array3);

const array4 = array3.flat();
console.log(array4); // Bad

const array5 = array3.flat(2);
console.log(array5); // Good

const array6 = [1, [2, [3, [4]]]];
const array7 = array6.flat(Infinity);
console.log(array7); //Good

//Remove Empty Slots Using flat()
const array8 = [1, 2, , 3];
console.log(array8);

const array9 = array8.flat();
console.log(array9); //Ok
