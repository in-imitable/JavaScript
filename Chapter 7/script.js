//31 Walking the DOM

//32 Children of an element
console.log(document.body.firstChild)
console.log(document.body.lastChild)
// console.log(document.body.childNodes) //This will not array, they are nodes
let arr = Array.from(document.body.childNodes)
console.log(arr)