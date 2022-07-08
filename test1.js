console.log("How to replace all occurrences of a certain word in a string?");
let text = "Harish&Om&Palsande";
console.log(text);

let newText = text.replace("&", " ");
console.log(newText);
// Only the first one replaced

newText = text.replaceAll("&", " ");
console.log(newText);
// All Replaced

newText = newText.replace("Palsande", " Chandrakant Palsande");
console.log(newText);
