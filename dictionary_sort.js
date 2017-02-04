'use strict'

const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("Type a word : ");



var dictionaryArr = [];
function dictionaryList(inside) {
  dictionaryArr.push(inside)
}

function dictionarySort(arr) {
  var tukar;
    do {
        tukar = false;
        for (var i=0; i < arr.length-1; i++) {
            if (arr[i].toLowerCase() > arr[i+1].toLowerCase()) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                tukar = true;
            }
        }
    } while (tukar);
  return arr;
}

let i=0;
// dictionarySort(dictionaryArr)
rl.prompt();
rl.on('line', (inputs) => {
  dictionaryList(inputs)
  rl.prompt();
  i++
})
rl.on('close', (a) => {
  rl.setPrompt("");
  console.log("Congratulations! Your dictionary has " + i + " words")
  let dictionaryArrSorted = dictionarySort(dictionaryArr)
  dictionaryArrSorted.forEach(function(isi) {
    console.log(isi);
  })
})
