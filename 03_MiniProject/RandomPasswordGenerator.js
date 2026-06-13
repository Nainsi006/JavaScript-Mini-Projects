//A-Z , a-z , 0-9 , special characters(!@#$%^&*()-+)
//length of password should be 8-16 characters

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter the length of password : ", length => {
    if(length<=0) {
        console.log("Please enter the valid length of password!")
    } else{
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+";
        let password = "";

        for(let i=0; i<length; i++){
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        console.log("Generated Password: " + password);
    }
    readline.close();
})    