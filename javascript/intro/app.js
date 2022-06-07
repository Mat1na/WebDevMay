// // var keyword
// // const keyword
// // let keyword

// var username = "root";
// var age = 20;
// var name = "john";

// var username = "admin"; //redeclare variable
// username = "joe"; // updated
// console.log("hello friend");
// console.log(username);

// const company = "Google";
// // const company="Facebook"; error you can declare this only once
// // company="facebook"; cannot be updated
// console.log(company);
// let website = "www.google.com";
// console.log(website);
// // let website="www.facebook.com";error you can declare this only once
// website = "facebook";
// console.log(website); //  can be updated

// console.log(user);
// var user="root";
// console.log(userx);
// console.log(user);
// var number1=10;
// var number2=20;
// var total=number1+number2;
// var total=10+20;; // 30
// var total=10+"20" ;// 1020
// console.log(total);
// var country="Bru"+"ssel";
// var country="Brussel's beer";
// // var country='Brussel's beer'; 
// var country='Brussel\'s beer';
// console.log(country);

// document.getElementById("message").innerText="Hello";
// document.getElementById("container").innerHTML="<h1>container</h1>";


// //BMI
// var weight=60;
// var height=1.75;
// var BMI= weight/(height*height);
// console.log(BMI);


// //salary calculate
// var bruto=3000;
// var tax=0.21; //or 21/100 for20%
// var neto= bruto-(bruto*tax)
// console.log(neto)

// single line comment
/*
multi
line
comment*/

/*
Arithmetic operators
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement 
*/

let result;
result=7+3; //addition
result="a"+"b";
result+=2; //result = result + 2

result=7-3; //substraction

result-=2; //result = result - 2

result=5*5; //multiplication 25
result*=2; //result = result * 2 (25*2=50)

result=50/2; //division  25
result/=5; //result = result / 5 -> 25/5=5

// increace & decrease
result++; //5+1=6
result++; //6+1=7  ++result; 
--result; //7-1=6  --result;
var num1=50;
num1 +=10; //num1 = num1 + 10
console.log(result);
console.log(num1);
let firstname="John";
let lastname="Doe";
result=firstname+" "+lastname;

//equal to operator == (check only value)
var n1=5;
var n2=5;
var n3=6;
var n4="5";
result=n1==n2;
result=n1==n3; //false
result=n1==n4; //true

//equal to operator === (check value+type)
result=n1===n4;//false
result= "spacex"=="spacex"
result= "spaceX"==="spacex"

/* 
var -x=5;
var X=5;             
var 5x=5;*/

//not equal !=  only for value
result=n1!=n2; //false
result=n1!=n3; //true
result="😆"!="abc";

//not equal !==   for value+type
result=n1!==n4

var x1;
var x2;
result=x1==x2 //undefined = undefined
result=x1===x2 //undefined = undefined

//greater then operator >
result=n1>n2; 
//less then operator >
result=n1<n2;
result=n2<n3;
// grater than or equal >=
result=n1>=n2; //true
 result=n2>=n3; //false


//  less than or equal <=
result=n1<=n4;


var myRule=n1<=n3? "Correct":"Incorrect";
var mySecondRule=n3<=n1; 
console.log(result+"😆");



var studentName="Joe"
var age=17;
var money=0;
result=age>=18? "He is allowed drink":"He is not allowed to drink";

age=18
var ageLimit= age>=18;
result=ageLimit? studentName +" is allowed drink": studentName +" is not allowed to drink";
// result=ageLimit? `${studentName}  is allowed drink` : `${studentName}  is  not allowed drink`;

// true and false
result=myRule&& mySecondRule;

var studentRule1=age>=18;

var studentRule2=money>=1;

var getResult=studentRule1 && studentRule2;

result=getResult ? 

studentName +" can drink": studentName +" needs money" ;

console.log(result+"😆"); 