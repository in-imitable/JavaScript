//Change Card Title color to red
let ctitle = document.getElementsByClassName("card-title")
// ctitle[0].style.color = "red" 

//querySelector 
let ctitles = document.querySelectorAll(".card-title")
console.log(ctitles)
ctitles[0].style.color = "red"
ctitles[1].style.color = "blue"
ctitles[2].style.color = "green"

document.querySelector(".this").style.color = "yellow"
document.querySelector(".this").style.background = "green"