"use strict"

const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdot
});

var temp = [];
console.log("input :");

rl.on('line', (word) => {
  if(word == ""){
    console.log("Congratulation! your dictionary has " + temp.length + " words");
    console.log(Dictionary(temp).join(" "));
    rl.close()
  }
  else{
    temp.push(word);
    console.log("Type another word : ");
  }
})

function Dictionary(words){
  let result = ""

  for(let i = 0; i < words.length; i++){
    for(let j = 0; j < words.length; j++){
      if(words[i].toLowerCase() < words[j].toLowerCase()){
        result = words[j]
        words[j]   = words[i]
        words[i]   = result
      }
    }
  }
  return words
}
