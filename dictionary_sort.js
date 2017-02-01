const readline = require('readline');
// your code here to initialize the program and take user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Type a word :'
});

const tampungKata = [];

function sort(words) {
    // let Upper = words.toUpperCase();
    // let Lower = words.toLowerCase();
    for (i = 1; i < words.length; i++) {
        for (k = 0; k < i; k++) {
            if (words[i].toUpperCase() < words[k].toUpperCase()) {
                let temp = words[i]
                words[i] = words[k]
                words[k] = temp
            }
        }
    }
    return words
}
rl.prompt()
rl.on('line', (kata) => {
    if (kata == "") {
        console.log("Congratulation! " + tampungKata.length + " words");
        for (var i = 0; i < tampungKata.length; i++) {
            console.log(tampungKata[i]);
            rl.close()
        }
    } else {
        rl.setPrompt('Type another word > ')
        rl.prompt()

        tampungKata.push(kata)
        sort(tampungKata)
    }
})
