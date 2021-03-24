let prompt = require('prompt');
let number = Math.floor(Math.random()*10+1);
prompt.start();
prompt.get(['userNumber'], function (err, result) {
          console.log("Podana liczba:", result.userNumber);
          console.log("Wylosowana liczba:", number);
          if (result.userNumber == number)
                  console.log('Udalo sie');
          else
                  console.log('Sprobuj jeszcze raz');
});