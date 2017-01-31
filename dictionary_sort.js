const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input  : process.stdin,
  output : process.stdout,
  prompt : "Type your Words > "
});

let arrayWords = [];

function sortWord(arrayWords) {
  for(let i = 1; i < arrayWords.length; i++) {
    for(let j = 0; j < i; j++) {
      if(arrayWords[i].toUpperCase() < arrayWords[j].toUpperCase()) {
        let tampungArr = arrayWords[j]
        arrayWords[j] = arrayWords[i]
        arrayWords[i] = tampungArr
      }
    }
  }
  return arrayWords
}

rl.prompt();
rl.on('line', (kata) => {
  if(kata == "keluar") {
    console.log("Congratulation! your dictionary has " + arrayWords.length + " words");

    for(var i=0; i < arrayWords.length; i++) {
      console.log(arrayWords[i]);
    }
    rl.close()
  } else {
    arrayWords.push(kata);
    sortWord(arrayWords);
    rl.setPrompt("Type your another Words > ")
    rl.prompt();
  }
});
