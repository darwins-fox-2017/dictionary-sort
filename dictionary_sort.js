"use strict"
const readline = require('readline')
const rl       = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
  prompt:'Input>'
});

rl.prompt();

var arrResult = []

rl.on('line', (answer)=>{
  rl.prompt()
  if(answer == ""){
    rl.close()
    console.log(arrResult);
    console.log(dicSort(arrResult));
  }else {
    arrResult.push(answer)
  }
})

function dicSort(words){
  let tempResult = ""

  for(let i = 0; i < words.length; i++){
    for(let j = 0; j < words.length; j++){
      if(words[i].toLowerCase() < words[j].toLowerCase()){
        tempResult = words[j]
        // console.log(tempResult);
        words[j]   = words[i]
        // console.log(words[j]);
        words[i]   = tempResult
      }
    }
  }
  return words
}
