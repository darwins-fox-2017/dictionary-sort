/*
class Dictionary {
  // Your code here to receive user input & sort the array

}
*/

const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> Type a Word : '
});

rl.prompt()

let arr = []
let sort = []


rl.on('line', (words) => {
  if (words === '') {
    rl.setPrompt('>  ')
    console.log('> Congratulations! Your dictionary has ' + arr.length + ' words : ')
  }

  if (!words) {
    for ( var i = 0; i < arr.length; i++) {
      let smallest = i;

      for ( var j = i + 1; j < arr.length; j++) {
        if (arr[j].toLowerCase() <  arr[smallest].toLowerCase()) {
          smallest = j;
        }
      }
      var tmp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = tmp
    }
    console.log('>',String(arr));
    rl.close()
  } else {
    rl.setPrompt("> Type another word (or enter to finish) :  ");
    arr.push(words);
    rl.prompt();
  }
})
