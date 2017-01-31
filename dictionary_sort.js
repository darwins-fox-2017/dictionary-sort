const readline = require('readline');
// your code here to initialize the program and take user input
const words = []
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
  prompt : 'Type a word > '
});

function sorting(words_arr){
  for(var i=1; i<words_arr.length; i++){
    for(var j=0; j<i; j++){
      if(words_arr[i].toUpperCase()< words_arr[j].toUpperCase()){
        var temp = words_arr[i]
        words_arr[i] = words_arr[j]
        words_arr[j] = temp
      }
    }
  }
  return words_arr
}


rl.prompt();

rl.on('line', (line) => {
  if(line == ""){
    console.log(`Congrtulations! Your dictionary has ${words.length}:`)

    words.forEach(function(entry){console.log(entry)})
    rl.close()
  }
  else{
    rl.setPrompt('Type another word > ')
    rl.prompt()

    words.push(line)
    sorting(words)
  }

})
