'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    const n = parseInt(readLine(), 10);
    let i = 1;

do{
    // this will execute once
    // it will execute again each time while(condition) is true
    console.log (n + ' x ' + i + ' = ' + (n*i))
  i++;
}
while (i <= 10);


}