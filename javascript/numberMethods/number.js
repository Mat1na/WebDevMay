//Number Methods

var result;
var n1="10";
var n2=10;
var n3="10.5";
var n4="10 15 20";
var n5="10,15,20";
var n6="9e+2";
var n7=9e+2;
const PI=3.14159265359;
var n8=2000.54;
var n9=2000.44;

//toString() methods
result=n2.toString();

//parseInt()
result=parseInt(n1);//returns interer representation of number
result="10"+"10";
result=parseInt("10")+parseInt("10");

//parseFloat
result=parseFloat(n3);//return floating point representation of number

//toExponetial() method

result=PI.toExponential()// return exponential representation of the number


// //toFixed()
// result=n8.toFixed();
// result=n9.toFixed();

// result=Number("10");
// result=Number(undefined);
// result=Number(null);
// result=Number(true);//=1
// result=Number(false);//=0

// result=Number.MAX_VALUE;
// result=Number.MIN_VALUE;
// result=Number.MAX_SAFE_INTEGER;
// result=Number.POSITIVE_INFINITY;
// result=Number.NEGATIVE_INFINITY;
// result=Number.NaN;
// result=Number.isFinite(10);
// result=Number.isFinite(Infinity);
// result=Number.isInteger("10");
// result=Number.isInteger(10);
// result=Number.isNaN(10/NaN);
// result=Number.isNaN("10"/"10");
// result=Number.isSafeInteger(10);

// var userinput="fgjhgjgj"
// // userinput=10
// if(Number.isNaN(userinput)){
//     console.log("Invalid")
// }else{
//     console.log("Valid")
// }

console.log(result, typeof result);