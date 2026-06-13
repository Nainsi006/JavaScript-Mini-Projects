
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter your weight in kg: ", weight => {
    readline.question("Enter your height in meters: ", height => {
        weight = parseFloat(weight);
        height = parseFloat(height);

        if(weight <= 0 || height <= 0){
            console.log("Please enter valid weight and height!");
        }else{
            let bmi = weight / (height * height);
            bmi = bmi.toFixed(2);

            let category = "";

            if(bmi < 18.5) category = "Underweight";
            else if(bmi < 25) category = "Normal weight";
            else if(bmi < 30) category = "Overweight";
            else category = "Obesity";
            console.log(`Your BMI is ${bmi} and you are ${category}`);
        }
        readline.close();
    });
});