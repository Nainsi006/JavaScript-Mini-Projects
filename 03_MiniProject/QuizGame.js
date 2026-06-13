
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = [{ q: "What is the capital of France?", a: "Paris" },{ q: "What is the largest planet in our solar system?", a: "Jupiter" },{ q: "Who wrote 'To Kill a Mockingbird'?", a: "Harper Lee" },{ q: "What is the chemical symbol for water?", a: "H2O" },{ q: "Who painted the Mona Lisa?", a: "Leonardo da Vinci" },{ q: "What is the tallest mountain in the world?", a: "Mount Everest" },{ q: "Who is the author of '1984'?", a: "George Orwell" },{ q: "What is the largest ocean on Earth?", a: "Pacific Ocean" },{ q: "Who discovered penicillin?", a: "Alexander Fleming" },{ q: "What is the currency of Japan?", a: "Yen" },{ q: "Who is the founder of Microsoft?", a: "Bill Gates" },{ q: "What is the smallest country in the world?", a: "Vatican City" },{ q: "Who is the current President of the United States?", a: "Joe Biden" },{ q: "What is the largest mammal?", a: "Blue Whale" },{ q: "Who wrote 'The Great Gatsby'?", a: "F. Scott Fitzgerald" },{ q: "What is the chemical symbol for gold?", a: "Au" },{ q: "Who painted 'Starry Night'?", a: "Vincent van Gogh" },{ q: "What is the longest river in the world?", a: "Nile River" },{ q: "Who is the author of 'The Lord of the Rings'?", a: "J.R.R. Tolkien" }]

let score =0;
let i =0;
function askQuestion(index){
    if(index < question.length){
        readline.question(question[index].q + " ", (answer) => {
            if(answer.trim().toLowerCase() === question[index].a.toLowerCase()){
                console.log("Correct!");
                score++;
            } else {
                console.log("Incorrect!");
                console.log("The correct answer is: " + question[index].a);
            }
            askQuestion(index + 1);
        });
    } else {
        console.log("Quiz completed! Your score is: " + score + "/" + question.length);
        readline.close();
    }
    
}

askQuestion(0)
