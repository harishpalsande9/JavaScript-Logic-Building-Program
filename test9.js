console.log("How to Get Day Name from Date?");

let date = new Date();

//English
let dayName = date.toLocaleDateString("en-US", { weekday: "long" });

//Hindi
let dayName2 = date.toLocaleDateString("hi-IN", { weekday: "long" });

console.log(dayName);

console.log(dayName2);
