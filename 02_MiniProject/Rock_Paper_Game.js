//choices = ["rock", "paper", "scissors"]
//              0       1            2
//choice for computer = [math.floor(Math.random()*3)]
//choice for user = readline.question("Enter your choice (rock, paper, scissors): ")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const choices = ["rock", "paper", "scissors"]
const computerChoice = choices[Math.floor(Math.random() * 3)]

console.log("Welcome to Rock-Paper-Scissors Game!")

readline.question("Enter your choice (rock, paper, scissors): ", (userChoice) => {
    userChoice = userChoice.toLowerCase()

    console.log(`Computer chose: ${computerChoice}`)
    if (userChoice === computerChoice) {
        console.log("It's a tie!")

    }else if ((userChoice === "rock" && computerChoice === "scissors") ||
              (userChoice === "paper" && computerChoice === "rock") ||
              (userChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win!")
    } else {
        console.log("You lose!")
    }
    readline.close()
})