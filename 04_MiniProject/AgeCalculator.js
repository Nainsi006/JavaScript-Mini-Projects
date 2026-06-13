//input -> dob, current date
// output -> X years, Y months, Z days

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter your date of birth (YYYY-MM-DD): ", dob => {
    let birthDate = new Date(dob);
    let currentDate = new Date();

    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;

    const months = currentDate.getUTCMonth() - birthDate.getUTCMonth() +(currentDate.getUTCDate() < birthDate.getUTCDate() ? -1 : 0);

    const days = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), 0).getUTCDate() - birthDate.getUTCDate() + currentDate.getUTCDate();
    const daysInMonth = currentDate - days
    const noOfDays = Math.floor((daysInMonth)/(1000 * 60 * 60 * 24))

    const dayOfWeek = birthDate.toLocaleString('en-US', { weekday: 'long' });

    console.log(`You are ${years} years, ${months} months, and ${Math.floor(noOfDays)} days old.`);
    console.log(`You were born on a ${dayOfWeek}.`);

    readline.close();
});

