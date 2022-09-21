// alert("Hello")
console.log("Hey Atul")

// Console Object Methods
console.log("log")
console.info("This is an info")
console.warn("Hey this is a warning")
console.error("error")
console.assert("error" != false)
console.assert("error" == false)

console.time("forLoop")

for (let i = 0; i < 500; i++) {
  console.log(233)
}

console.timeEnd("forLoop")

console.time("whileLoop")

let i = 0;
while (i < 500) {
  console.log(233)
  i++;
}

console.timeEnd("whileLoop")