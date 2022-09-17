let age = prompt("Hey whats you age?");
age = Number.parseInt(age); // Converting the string to a number

//Conditional Statements
if(age<0){
  alert("This is an invalid age");
}
else if(age<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(age<18 && age>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")

//Ternary Operator
console.log("You can", (age<18? "not drive" :"drive"))

// HomeWork - Explore switch statement and write a basic program in the comments
alert("Choose any food item:\n1) Pasta \n2) Momos \n3) Maggi \n4) Noodles \n5) Burger");
let item = prompt("Enter your option");
item = Number.parseInt(item) // Converting the string to a number
//Switch Case Statement
switch (item) {
    case 1:
        alert("Pasta is Rs 150/-")
        break;
    
    case 2:
        alert("Momos is Rs 80/-")
        break;
    
    case 3:
        alert("Maggi is Rs 100/-")
        break;
    
    case 4:
        alert("Noodles is Rs 120/-")
        break;
    
    case 5:
        alert("Burger is Rs 20/-")
        break;

    default:
        alert("No more items available")
        break;
}