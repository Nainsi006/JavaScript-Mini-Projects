//floor value of 6.8 = 6 // Math.floor(6.8)
//Math.random() => [0,1)

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

let randomNumber = Math.floor(Math.random()*10)+1;
let attempts = 0;
function guessNumberGame(){
   readline.question("Guess a Number between 1 to 10:", (input)=>{
       let guess = parseInt(input)
        attempts++;

       if(guess< randomNumber){
        console.log("Too Small! ")
        guessNumberGame()
       }
       else if(guess> randomNumber){
        console.log("Too Large! ")
        guessNumberGame()
       }
       else{
        console.log("You won the Game! No. of attempts: ", attempts)
        readline.close()
       }
    })
}

guessNumberGame()