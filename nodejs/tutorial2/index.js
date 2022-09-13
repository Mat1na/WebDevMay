// Custom modules 
const {getName,getAge,getTodos} = require('./my_modules/sum')

// get result of summodule 
// console.log(SumModule(5,6))

console.log(getName('John Doe'))
console.log(getAge(25))

getTodos()
.then(data=>{
    console.log(data)
})