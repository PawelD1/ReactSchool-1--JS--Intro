const readline = require('readline');
let number = Math.floor(Math.random()*10+1);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Your number: ', (yourNumber) => {
    console.log("Your number: ", yourNumber);
    console.log("Drawn number: ", number);

    if (yourNumber == number)
            console.log('Your shot was successful!');
    else
            console.log('Try once again');
    rl.close();
});