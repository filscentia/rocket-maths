
'use strict';

const readline = require('readline-sync');
const chalk = require('chalk');
const figlet = require('figlet');


// console.log('Which game to play?');
// let guess = readline.question('> ');

console.log(
  chalk.yellow(
    figlet.textSync('8 times table',  { horizontalLayout: 'full' })
  )
);
let score=0;
for (var i = 0; i < 10; i++) {
   let number= Math.floor((Math.random()*12)+1);
   console.log(i+' what is '+ number+' times 8');
    let guess = readline.question('> ');
    if (guess==(number*8)) {
       console.log("that is correct!!");
        score=score +1;
   } else{
       console.log("Sorry it should be "+number*8);
    }
}
console.log('your score is '+score );
