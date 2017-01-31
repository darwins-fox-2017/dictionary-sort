/*
class Dictionary {
  // Your code here to receive user input & sort the array

}
*/

const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function dictionary_sort(arr) {
//   var smallest = arr[0]
//   var smallIndex = 0
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[smallest]){
//       smallest = arr[i]
//       smallIndex = i
//       var temp = smallest
//       arr.splice(arr)
//     }
//   }
//
//
//   }

  var arr= []
  function dictionary_sort(arr) {
    var values, i, j
    for(i = 0; i<arr.length; i++){
      values = arr[i]
      for( j= i-1; j>=0 && arr[j] > values; j--){
        arr[j+1]=arr[j]
      }
      arr[j+1] = values
    }
    return arr.join('\n')
  }


// rl.setPrompt('Type a word :');
// var arr = [];
// rl.prompt();
// rl.on('line', (input) => {
//   if (input === '') {
//     rl.close();
//     dictionary_sort(arr);
//   } else {
//     rl.setPrompt('Type another word (or press enter to finish):');
//     arr.push(input);
//     rl.prompt();
//   }
// })

rl.setPrompt('Type a word :')
rl.prompt()
rl.on('line', (input) => {
if(input==""){
rl.close()
} else {
  rl.setPrompt('Type another word (or press enter to finish) :')
  arr.push(input)
  rl.prompt()
}
}).on('close',() => {
  console.log(`Congratulation! Your dictionary has ${arr.length} words:\n `+ dictionary_sort(arr));
});
