//seTimeout and setInterval

document.write("Hello")

// const sum = (a, b, c) => {
//   console.log("Yes I am running " + (a + b + c))
// //   alert("Yes I am running " + (a + b + c))
//   a + b
// }
// setTimeout(sum, 1000, 1, 2, 7)

// let a = setTimeout(function() {
//   alert("I am inside of settimeout")
// }, 5000)

// let b = prompt("Do you want to run the settimout?")
// if ("n" == b) {
//   clearTimeout(a)
// }
// console.log(a)

// setInterval(function() {
//   alert("setinterval")
// }, 3000)

const interval = (a,b,c)=>{
    console.log("This interval is starting " + (a + b + c));
  }
  setInterval(interval, 2000, 2,5,10);