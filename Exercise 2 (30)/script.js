
const snakeWaterGun = (user, comp) => {
    if(user == comp){
        return 0
    }
    /* Case covered --> sg gs sw ws gw wg */
    if(user == 's' && comp == 'g'){
        return -1
    }
    else if(user == 'g' && comp == 's'){
        return 1
    }

    if(user == 's' && comp == 'w'){
        return -1
    }
    else if(user == 'w' && comp == 's'){
        return 1
    }
    
    if(user == 'g' && comp == 'w'){
        return -1
    }
    else if(user == 'w' && comp == 'g'){
        return 1
    }
}

let playAgain = true;
do{
    let comp = Math.floor((Math.random()*100)+1)
    if(comp<33){
        comp = 's'
    }
    else if(comp>33 && comp<66){
        comp = 'w'
    }
    else{
        comp = 'g'
    }


    let user = prompt("Enter 's' for snake, 'w' for water and 'g' for gun")
    let result = snakeWaterGun(user, comp)
    console.log(`You chose ${user} and computer chose ${comp}`)
    if(result==0){
        alert("Game Draw! Try Again")
    }
    else if(result==1){
        alert("You win!")
    }
    else if(result==-1){
        alert("You lose!")
    }
    else{
        alert("Please enter a valid keyword!")
    }

    playAgain = confirm("Do you want to play again?")

}while(playAgain)