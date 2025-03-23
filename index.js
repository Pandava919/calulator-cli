const { Command } = require('commander');
const program = new Command();

program
  .name('Calculator')
  .description('Calculator CLI')
  .version('0.8.0');

program.command('add')
  .description('Add numbers')
  .argument('<number>', 'number to add seperated by ,')
  .option('--first', 'display just the first number')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    const numbers = str.split(options.separator, limit);
    let sum = 0;
    for (let n of numbers) {
      sum += parseInt(n);
    }
    console.log(sum);
  });
program.command('sub')
  .description('Substract the numbers')
  .argument('<number>', 'number to substract seperated by ,')
  .option('--first', 'display just the first number')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    const numbers = str.split(options.separator, limit);
    let sub = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
      sub = parseInt(numbers[i]) - parseInt(numbers[i + 1])
    }
    console.log(sub);
  });

program.command('mul')
  .description('Multiply the numbers')
  .argument('<number>', 'number to multiply seperated by ,')
  .option('--first', 'display just the first number')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    const numbers = str.split(options.separator, limit);
    let mul = 1;
    for (let i = 0; i < numbers.length; i++) {
      mul *= parseInt(numbers[i])
    }
    console.log(mul);
  });

program.command('div')
  .description('Division of the numbers')
  .argument('<number>', 'number to divide seperated by ,')
  .option('--first', 'display just the first number')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    const numbers = str.split(options.separator, limit);
    let division = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
      division = parseInt(numbers[i]) / parseInt(numbers[i + 1])
    }
    console.log(division);
  });

program.command('mod')
  .description('Modulus of the numbers')
  .argument('<number>', 'numbers to find modulus seperated by ,')
  .option('--first', 'display just the first number')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    const numbers = str.split(options.separator, limit);
    let modulus = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
      modulus = parseInt(numbers[i]) % parseInt(numbers[i + 1])
    }
    console.log(modulus);
  });

program.parse();