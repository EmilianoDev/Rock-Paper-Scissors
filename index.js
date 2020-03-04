var computer = 0;
var player = 0;
var again = 0;

function computerPlay(){
    let random = (Math.round(Math.random()*10))%3;
    let choice;
    switch (random){
    case 0: choice = "rock"
    break;
    case 1: choice = "paper";
    break;
    case 2: choice = "scissors";
    break;
    }
    return choice;
}
function playerPlay(){
    let choice= String(prompt("Choose: Rock Paper or Scissors?")).toLowerCase();
    return choice;
}
function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return "It's a draw!";
    }
    let str = String(playerSelection + computerSelection);
    again=0;
    switch (str){
        case "rockscissors":
            player++;
            return alert("You win! Rock beats Scissors");
        case "rockpaper":
            computer++;
            return alert("You lose! Paper beats Rock");
        case "paperscissors":
            computer++;
            return alert("You lose! Scissors beats Paper");
        case "paperrock":
            player++;
            return alert("You win! Paper beats Rock");
        case "scissorsrock":
            computer++;
            return alert("You lose! Rock beats Scissors");
        case "scissorspaper":
            player++;
            return alert("You win! Scissors beats Paper");
        default: alert("Chose something valid you fool!");
            return again++;
    }
}
function game(){
    let i;
    for(i=0;i<5;i++){
        playRound(playerPlay(),computerPlay());
        if(again===1){
            i--;
        }
    }
    if(player===computer){
        return "It's a draw! " + player + " / " + computer;
    }
    else if(player>computer){
        return "You win! " + player + " / " + computer;
    }
    else{
        return "You lose! " + player + " / " + computer;
    }
}
console.log(game());