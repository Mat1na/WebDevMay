


function fibonacciGenerator(n) {


    var output = []
    if (n === 1) {
        output = [0];
        console.log(output)

    }
    else if (n === 2) {
        output = [0, 1];
        console.log(output)
    }
    else {
     
       while(n<10) {
            output.push(output[output.length - 2] + output[output.length - 1]);
          
        } 
    }


    return output

}

fibonacciGenerator(3);
