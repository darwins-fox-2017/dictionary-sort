const readline = require('readline');
// your code here to initialize the program and take user input

let sortArrOfString = (arrOfString) => {
  let arrOfStringLength = arrOfString.length;
  for (let i=0;i<arrOfStringLength-1;i++) {
    let min = i;
    let lastMin = i;
    for (let j=i+1;j<arrOfStringLength;j++) {
      lastMin = arrOfString[j].toLowerCase() < arrOfString[lastMin].toLowerCase() && arrOfString[j].toLowerCase() < arrOfString[i].toLowerCase() ? j : lastMin; 
      min = lastMin;
    }
    if (min !== i) {
      let tempForCurrentArr = arrOfString[i];
      arrOfString[i] = arrOfString[min];
      arrOfString[min]  = tempForCurrentArr;
    }
  }
  return arrOfString;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Type a word: '
});

rl.prompt();

let words = [];
rl.on('line', (input) => {
    if(input === '') {
      console.log('Congratulations! Your dictionary has '+words.length+' words');
      let sortResult = sortArrOfString(words);
      for(var i in sortResult) {
        console.log(sortResult[i]);
      }
      rl.close();
    } else {
      words.push(input);
      rl.setPrompt('Type another word (or press enter to finish): ');
      rl.prompt();
    }
});