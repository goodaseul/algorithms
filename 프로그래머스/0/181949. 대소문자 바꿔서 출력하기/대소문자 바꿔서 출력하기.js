const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const newStr =  str.split("").map((letter) => {
        if( letter === letter.toUpperCase()) {
            return letter.toLowerCase();
        } else { 
            return letter.toUpperCase();
        }
    }).join("");
    console.log( newStr );
});