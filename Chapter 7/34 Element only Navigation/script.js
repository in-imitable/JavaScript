const changeBgColor = () => {
    document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log("First child of b is: ", b.firstChild)
console.log("First element child of b is: ", b.firstElementChild)