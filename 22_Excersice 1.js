//JavaScript Excersice 1
/************Guessing Game***************/
let number = Math.floor((Math.random()*100)+1)  //Generate random number between 0 to 100
let chance = 0
let guess

do{
  guess = prompt("Guess the number between 0 to 100: ")
  guess =  Number.parseInt(guess)
  // console.log(guess)
  if (guess>number){
      alert("Your guess is too high!")
  }      
  else if (guess<number){
    alert("Your guess is too low!")
  }
  else{
    alert("You Won!!!")
  }      
  chance++;
}while(guess!=number)

alert(`You get the number in ${chance} attempts`)
alert(`Your Score: ${100 - chance}`)
// console.log(`Your Score: ${100 - chance}`)