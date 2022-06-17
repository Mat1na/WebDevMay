const numbers = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]



var divisible=[]
numbers.forEach(modulus)

function modulus(value){
    if(value%5==0&&value<=150){

    divisible.push(value)
}
console.log(divisible)

}
// second way

// var divisibleNumbers=numbers.filter(value=>value%5==0&&value<=150);
// console.log(divisibleNumbers)



// factorial(n)=n*factorial(n-1)

function factorial(n) {
    if ( n===0) {
        return 1
    }
    else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(4))





