// Math object 
var result;


// PI number
result=Math.PI;

// round number
result=Math.round(200.6)

// power method
result=Math.pow(2,3)

// square root method
result=Math.sqrt(64)

// find max number method
result=Math.max(44,55,66,88,22,99)

// find min number method
let numbers=[44,55,66,88,22,99]
result=Math.min(...numbers) // ... to remove array bra

// find absolut number method
result=Math.abs(-44)

// random number

result=Math.random()// 0 to 0.99999999
result=Math.round(Math.random()*10)

function GetRandomNumberRange(min,max){
    return Math.round(Math.random()*(max-min)+min)
}



result=GetRandomNumberRange(1,100)
console.log(result)




