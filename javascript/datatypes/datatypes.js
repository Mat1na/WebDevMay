/*

string
number - long short byte float double
boolean
undefined
object/array
null

*/

let result;
// string data type
result = 'Hello friend!'
result = "Hello friend!"
result = `Hello friend!`

// number data type
result =1;
result = "1";
result = 1.5
result = 1.5e2;

// boolean data type
result = true
result = false

// undefined data type
result = undefined

// declared variable but not assigned a value
var x; 

// objects data type
var student =  {
    name:"John",
    age:30,
    email:"john@john.com",
    isStudent:true,
    address:{
        street:"123 Main St",
        city:"New York",
        test:{
            title:"titleeeeeeee",
            test1:{
                anothertest:"blablabla"
            }
        }
    }
}

result = `His name is ${student.name} and he is ${student.age} years old.`;

result = student.isStudent? `His name is ${student.name} and he is ${student.age} years old.`: 'He is not a student';

result = student.address.street
result = student.address.city
result = student.address.test.test1.anothertest

// array data type
var numbers = [7777777777,"string",true,null,{name:"Inteccccccc"},undefined];
// array index starts from 0

result = numbers.length
result = numbers[0]
result = numbers[4].name
numbers[1] = "New string"
result = numbers

var students = [
    {
        name:"Ersin",age:24,
        scores:[44,65,66,77,88,99]
    },
    {name:"Reshad",age:23},
    {name:"John",age:25},
]

result = students[0].scores[5]
var nestedArray  = [1,2,3,[4,5,6,[7,8,9]]];
result = nestedArray[3][3][1]
console.log(result, `Type of result: ${typeof result}`)