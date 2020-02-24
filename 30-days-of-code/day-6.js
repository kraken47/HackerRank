function processData(input) {
    input = input.split('\n');
    
    for (let i = 1; i < input.length; i++) {
        let splitWord = input[i].split('');
    
        let even = '';
        let odd = '';
    
        for (x = 0; x < splitWord.length; x++) {
          if (x % 2 === 0) {
            even += splitWord[x];
          } else {
            odd += splitWord[x];
          }
        }
        console.log(even + ' ' + odd);
      }    //Enter your code here
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
    