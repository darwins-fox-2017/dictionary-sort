const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdot,
});

var arr_of_words = [];
console.log("Type a word : ");

rl.on('line', (word) => {

  if(word == ""){
    console.log("Congratulation! your dictionary has " + arr_of_words.length + " words");
    for(var i=0; i<arr_of_words.length; i++){
      console.log(arr_of_words[i]);
    }
    rl.close()
  }
  else{
    arr_of_words.push(word);
    console.log("Type another word : ");
  }

	arr_of_words.sort(function(a,b){
		a = a.toString().toLowerCase(), b = b.toString().toLowerCase();
	  for (var i = 0, n = Math.min(a.length, b.length); i<n && a.charAt(i) === b.charAt(i); ++i);
	    if (i === n) return 0;
	    return a.charAt(i) < b.charAt(i) ? -1 : 1;
  });

  // arr_of_words.sort(function(a,b){
  //   return a.toLowerCase().localeCompare(b.toLowerCase());
  // });
});
