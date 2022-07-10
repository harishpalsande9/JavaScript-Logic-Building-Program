console.log("Clean Code, Bad Code vs Good Code: For Loop");

const array = ["Adam", "Bulent", "Onur"];

// Bad Code

for (let i = 0, length = array.length; i < length; i++) {
  console.log(array[i]);
}

// Good Code

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
