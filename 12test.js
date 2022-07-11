console.log(
  "JavaScript array forEach() method example: Find the occurrence of an element in an array"
);

const array = ["Adam", "Eve", "Adam"];
btn.onClick = findOccurance;

function findOccurance() {
  let count = 0;
  array.forEach(function (element) {
    if (inputText.value == element) {
      count++;
    }
  });
  result.innerText = "Count: " + count;
}
