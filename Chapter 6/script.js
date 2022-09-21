// alert("Hello")
console.log("Hey Atul")

/*
// Console Object Methods
console.log("log")
console.info("This is an info")
console.warn("Hey this is a warning")
console.error("error")
console.assert("error" != false)
console.assert("error" == false)

console.time("forLoop")
for (let i = 0; i < 10; i++) {
  console.log(233)
}
console.timeEnd("forLoop")

console.time("whileLoop")
let i = 0;
while (i < 10) {
  console.log(233)
  i++;
}
console.timeEnd("whileLoop")
*/


//Interaction: alert, prompt, confirm
alert("Enter the value of a!")
let a = prompt("Enter a here", "578")
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
let write = confirm("Do you want to write it to the page")
if (write) {
  document.write(a)
}
else {
  document.write("Please allow me to write")
}
