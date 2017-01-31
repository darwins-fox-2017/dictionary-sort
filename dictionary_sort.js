const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("mau pesan apa mas?? ");
rl.prompt();
  let arr = [];
  let sort = [];

rl.on('line', (words) => {
  // kode untuk mengakhiri readline
  if (!words) {
    for ( var i = 0; i < arr.length; i++) {
      let smallest = i;

      for ( var j = i + 1; j < arr.length; j++) {
        if (arr[j].toLowerCase() <  arr[smallest].toLowerCase()) {
          smallest = j;
        }
      }
      var temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp
    }
    console.log(String(arr));
    rl.close()
  } else {
    rl.setPrompt("silahkan ketikkan makanan lain, tekan enter untuk mengakhiri ");
    rl.prompt();
    arr.push(words);
  }

})

// .toLowerCase()
