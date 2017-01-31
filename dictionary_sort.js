const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

var dictionaryWords = []

rl.on('line', (line) => {
  dictionaryWords.push(line)
  console.log(dictionaryWords);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
