console.log("Logical Operators");
// OR operator

var n1=5;
var n2=10;
var n3="5" // string
var n4="10" // string

let result;

result = (n1<n2) || (n3>n4);


/*
&& - AND operator
true - true = true
true - false = false
false - true = false
false - false = false
|| - OR operator
true - true = true
false - true = true
true - false = true
false - false = false
! - NOT operator
true !true = false
false !false = true
*/

var isUserLoggedIn = true;

result = !isUserLoggedIn;

var isLightOn = false;

// clicked on the light switch - true
result = !isLightOn;
isLightOn=  !isLightOn

// clicked on the light switch - false
result = !isLightOn;


console.log(result)