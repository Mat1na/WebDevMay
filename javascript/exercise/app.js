
//Number method example

// number method example

// const Result = document.getElementById("result");
// var userInput = prompt("Enter a number"); // return string
// console.log(typeof userInput)
// Result.innerText=userInput;

// if(isNaN(userInput)){
//     Result.innerText="Is not a number";
// }else{
//     Result.innerText=`This is ${userInput}`;

// }



var userInput=prompt("enter a number");
var userInput2=prompt("enter a number");
var results= document.getElementById("result");
var number;
var number2;
var sum;


if(isNaN(userInput)||isNaN(userInput2)){
    alert("Is not a number");
    userInput=prompt("enter a number again");
    userInput2=prompt("enter a number again");
    number=parseInt(userInput) ;
    number2=parseInt(userInput2) ;
    sum=number+number2;
    console.log(sum);
    results.innerText=`Your sum is ${sum}`;

}else{
    number=parseInt(userInput) ;
    number2=parseInt(userInput2);
    sum=number+number2;
    console.log(sum);
    result.innerText=`your sum is ${sum}`;
}











