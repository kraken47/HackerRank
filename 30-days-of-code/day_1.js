process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
let secondInt, secondDouble, secondStr;
    // Read and save an integer, double, and String to your variables.
secondInt = parseInt(readLine());
secondDouble = parseFloat(readLine());
secondStr = readLine();
    // Print the sum of both integer variables on a new line.
let resInt = i + secondInt;
console.log(resInt);
    // Print the sum of the double variables on a new line.
let resDouble = d + secondDouble;
console.log(resDouble.toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
let resStr = s + secondStr;
console.log(resStr);
}