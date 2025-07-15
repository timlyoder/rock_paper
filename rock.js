

var a = "rock"
var b = "paper"
var c = "scissors"

var random = Math.random();

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {

    if (random < .33) {
        return a;

    } else if  (random >=0.34 && random <=0.66  )  {
    
        return b;

    } else {
        return c;
    }   

} 


function getHumanChoice() {
    let alert = prompt("choose rock, paper, or scissors");

    if (alert = "rock", "paper", "scissors")

        return getComputerChoice()
}



function playRound(humanChoice, computerChoice) {
    
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();