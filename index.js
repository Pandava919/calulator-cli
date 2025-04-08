const { Command } = require('commander');
const program = new Command();

//CLI for arithmetic operations
program
  .name('Calculator')
  .description('Calculator CLI')
  .version('0.8.0');

//Adddition
program.command('add')
  .description('Add numbers')
  .argument('[number...]')
  .action((numbers) => {
    let sum = 0;
    for (let n of numbers) {
      sum += parseFloat(n);
    }
    console.log(sum);
  });

//Substraction
program.command('sub')
  .description('Substract the numbers')
  .argument('[number...]')
  .action((numbers) => {
    let sub = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
      sub -= parseFloat(numbers[i])
      console.log(sub)
    }
    console.log(sub);
  });

//Multiplication
program.command('mul')
  .description('Multiply the numbers')
  .argument('[number...]')
  .action((numbers) => {
    let mul = 1;
    for (let i = 0; i < numbers.length; i++) {
      mul *= parseFloat(numbers[i])
    }
    console.log(mul);
  });

//Division
program.command('div')
  .description('Division of the numbers')
  .argument('[numbers...]')
  .action((numbers) => {
    let division = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      division /= parseFloat(numbers[i])
    }
    console.log(division);
  });

//Modulus
program.command('mod')
  .description('Modulus of the numbers')
  .argument('[numbers...]')
  .action((numbers) => {
    let modulus = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
      modulus = parseFloat(numbers[i]) % parseFloat(numbers[i + 1])
    }
    console.log(modulus);
  });

//parse the cli program
program.parse();