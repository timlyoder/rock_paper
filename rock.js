

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

        console.log(getComputerChoice());
}


//console.log(getHumanChoice());

//console.log(getComputerChoice());


function playRound(humanChoice, computerChoice) {
   

    if  (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock!");
    

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors");
    

    } else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("You tie! Try again");
    

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock");
    

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper");
    

    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("You tie. Try again");
    

    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors");
    

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper");
    

    } else {
        console.log("You tie. Try again.");
    
}
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection)



/*let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();*/

