const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> Type a Word : '
});

rl.prompt()

let dictionary = []
let newArr = []

rl.on('line', (line) => {
  if (line === '') {
    rl.setPrompt('>  ')
    console.log('> Congratulations! Your dictionary has ' + dictionary.length + ' words : ')
    
    var len = dictionary.length;

    for (var i = 0; i < len; i++) {
      var tmp = dictionary[i];
      for (var j = i - 1; j >= 0 && (dictionary[j] > tmp); j--) {
          dictionary[j + 1] = dictionary[j];
      }
      dictionary[j + 1] = tmp;
    }

    for (let x=0; x<dictionary.length; x++) {
      console.log('> ', dictionary[x])
    }
  } else {
    if (dictionary.length >= 0) { rl.setPrompt('> type another word (or enter to finish) : ') }
    dictionary.push(line)
  }

  rl.prompt()
});
