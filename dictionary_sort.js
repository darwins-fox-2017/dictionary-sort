const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Type a word > '
});

rl.prompt();

var dictionaryWords = []

rl.on('line', (line) => {
  if (line == '') {
    var len = dictionaryWords.length
    console.log('Congratulations! Your dictionary has ' + dictionaryWords.length + ' words :');
    for (var i = 0; i < len; i++) {
      // Masukin ke var sementara [diky - 0]
      var temp = dictionaryWords[i]
      // console.log('nilai temp : ' + temp);
      for (var j = i - 1; j >= 0 && dictionaryWords[j].toLowerCase() > temp.toLowerCase(); j--) {
        // console.log('nilai j : ' + j + ' nilai dic' + dictionaryWords[j]);
        dictionaryWords[j + 1] = dictionaryWords[j]
        // console.log('lalu : ' + dictionaryWords[j + 1] + ' j ' + j);
      }
      dictionaryWords[j + 1] = temp
    }
    console.log(dictionaryWords);
  } else {
    rl.setPrompt('Type another word (or press enter to finish : >')
    dictionaryWords.push(line)
    // console.log(dictionaryWords);
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
