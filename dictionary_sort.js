
//var words=['pulpen',"laptop",'buku'];
function dictonari(words) {
for (var i = 1; i < words.length; i++) {
    for (var j = 0; j<i; j++) {
      if (words[i]<words[j]) {
        var wordsI=words[i];
        var wordsJ=words[j];
        words[i]=wordsJ;
        words[j]=wordsI
      }
    }
}
return words;
}
//console.log(dictonari(words));

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'masukan kata> '
});
var words=[];
rl.prompt();
rl.on('line', (line) => {
  if (line!='') {
     words.push(line);
     rl.setPrompt('masukan kata lagi >')
     rl.prompt();
  }else{
    console.log('kamus anda mempunyai 4 kata');
    var newwords=dictonari(words);
    for (var i = 0; i < newwords.length; i++) {
      console.log(newwords[i]);
    }
  }


}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
