class Dictionary {
  // Your code here to receive user input & sort the array

}

const readline = require('readline');
// your code here to initialize the program and take user input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
