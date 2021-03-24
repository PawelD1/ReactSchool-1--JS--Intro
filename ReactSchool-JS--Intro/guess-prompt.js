let prompt = require('prompt');
let number = Math.floor(Math.random()*10+1);
prompt.start();
prompt.get(['userNumber'], function (err, result) {
          console.log("Your number: ", result.userNumber);
          console.log("Drawn number: ", number);
          if (result.userNumber == number)
                  console.log('Your shot was successful!');
          else
                  console.log('Try once again');
});