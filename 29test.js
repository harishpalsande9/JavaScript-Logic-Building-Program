console.log("JavaScript scope, accessibility of variables");

if (true) {
  let a = 1;
  var b = 2;
  const c = 3;
  d = 4;
}

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
