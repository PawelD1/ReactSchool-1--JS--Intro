const readline = require('readline');
let number = Math.floor(Math.random()*10+1);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Podaj numer: ', (yourNumber) => {
    console.log("Podana liczba:", yourNumber);
    console.log("Wylosowana liczba:", number);

    if (yourNumber == number)
            console.log('Udalo sie');
    else
            console.log('Sprobuj jeszcze raz');
    rl.close();
});