let number  = 0;
let result = 0;
let max = 0;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number -> ', (number) => {
    let min = number % 10;
  while(number){
    result = parseInt(number % 10);
    number = parseInt(number / 10);
    if(max < result){
        max = result;
    }
    if(min > result){
        min = result;
    }
  }
  console.log("Max -> ",  max);
  console.log("Min -> ", min);
  console.log("Result -> ", max + min);

  rl.close();
});
