function processData(inputString) {
    // This line of code prints the first line of output
    var firstLine = "Hello, World.";
    process.stdout.write(firstLine + '\n' + inputString)
    // Write the second line of output that prints the contents of 'inputString' here.
} 


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});