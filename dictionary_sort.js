function Dictionary(kata){
  // kirim parameter
  let hasil = ""
  let tampung = []
  for(let i = 0; i < kata.length; i++){
    for(let j = 0; j < kata.length; j++){
      if(kata[i].toLowerCase() < kata[j].toLowerCase()){
        hasil = kata[j]
        kata[j]   = kata[i]
        kata[i]   = hasil
        //console.log(hasil)
        //console.log(kata[i])
      }
    }
  }
  return kata
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Masukkan kata> '
});
let tampung_kata = [];

rl.prompt();

// membaca satu baris/line dari prompt
rl.on('line', (kata) => {
  if(kata == ""){
    console.log("Hasil pengurutan dari : > " + tampung_kata);
    console.log(Dictionary(tampung_kata).join(" > "));
    rl.close()
  }
  else{
    tampung_kata.push(kata);
    console.log("Tambahkan kata : ");
  }
})

// rl.promt atau rl.on

