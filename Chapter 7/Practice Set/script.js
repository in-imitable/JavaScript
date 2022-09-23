// Q1 Change the color of its first element to red
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

//Q2 

//Q3 Change first & last element color
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

//Q4 Change all "li" tags backgroung color
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan"
});